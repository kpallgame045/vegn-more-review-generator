import { NextResponse } from 'next/server';
import {
  getNextAvailableCuratedSuggestion,
  getConfirmedReviews,
  checkIsDuplicateReview,
  getAll25Drafts,
} from '@/lib/supabase';
import { generateReviewWithGemini } from '@/lib/gemini';

export const runtime = 'nodejs';

// Rate limiter: 1 request per 500ms
const rateLimitMap = new Map<string, number>();

export async function POST(request: Request) {
  const requestStartTime = Date.now();
  const branchName = 'PDPU Branch';
  const configuredModel = process.env.GEMINI_MODEL || 'gemini-3.1-flash-lite';
  const hasApiKey = Boolean(process.env.GEMINI_API_KEY && !process.env.GEMINI_API_KEY.includes('YOUR_GEMINI'));

  let geminiAttempted = false;
  let geminiHttpStatus = 200;
  let resolvedSource: 'gemini_3.1_flash_lite' | 'approved_curated_pool' | 'supabase_draft' = 'approved_curated_pool';

  try {
    const ip = request.headers.get('x-forwarded-for') || 'default-client';
    const now = Date.now();
    const lastRequest = rateLimitMap.get(ip) || 0;

    if (now - lastRequest < 500) {
      return NextResponse.json(
        { success: false, error: 'Please wait a moment before requesting another suggestion.' },
        { status: 429 }
      );
    }
    rateLimitMap.set(ip, now);

    const body = await request.json().catch(() => ({}));
    const {
      currentText = '',
      forceNew = false,
      useAI = false,
      batch = false,
      tags = [],
    } = body;

    const googleReviewUrl =
      process.env.GOOGLE_REVIEW_URL ||
      'https://g.page/r/Ce2eQgJVGC10EBM/review';

    // BATCH MODE: Returns the 25 distinct review drafts covering all 25 topics
    if (batch) {
      const allDrafts = getAll25Drafts();
      return NextResponse.json({
        success: true,
        branchName,
        total: allDrafts.length,
        drafts: allDrafts,
        googleReviewUrl,
      });
    }

    // Determine whether Gemini should be called:
    // When a customer requests a new suggestion (forceNew: true) or explicit useAI: true,
    // AND a valid GEMINI_API_KEY is configured on the server.
    const shouldAttemptGemini = (forceNew || useAI) && hasApiKey;

    if (shouldAttemptGemini) {
      geminiAttempted = true;
      const geminiCallStart = Date.now();

      try {
        const confirmedReviews = await getConfirmedReviews(branchName);
        const aiResult = await generateReviewWithGemini({
          businessName: 'Veg ’n more',
          branchName,
          tags,
          existingReviewsToAvoid: confirmedReviews,
          excludeText: currentText,
        });

        // Verify the AI candidate is NOT a duplicate in Supabase
        const dupCheck = await checkIsDuplicateReview(aiResult.review_text, branchName);
        if (!dupCheck.isDuplicate && aiResult.source === 'gemini_3.1_flash_lite') {
          resolvedSource = 'gemini_3.1_flash_lite';
          geminiHttpStatus = 200;
          const totalDuration = Date.now() - requestStartTime;

          // Safe server-side diagnostic logging (NEVER logs keys or headers)
          console.log(
            `[DIAGNOSTIC - /api/generate-review]\n` +
            `  timestamp: ${new Date().toISOString()}\n` +
            `  gemini_attempted: true\n` +
            `  model: ${configuredModel}\n` +
            `  http_status: ${geminiHttpStatus}\n` +
            `  duration_ms: ${totalDuration}\n` +
            `  source: ${resolvedSource}\n` +
            `  branch: ${branchName}`
          );

          return NextResponse.json({
            success: true,
            reviewText: aiResult.review_text,
            googleReviewUrl,
            source: resolvedSource,
            candidateTopics: aiResult.candidate_topics,
            keywordsUsed: aiResult.keywords_used,
            lengthCategory: aiResult.length_category,
            diagnostics: {
              geminiAttempted: true,
              model: configuredModel,
              httpStatus: geminiHttpStatus,
              durationMs: totalDuration,
              resolvedSource,
            },
          });
        }

        // Duplicate match or fallback source returned
        geminiHttpStatus = 409;
        console.info(`[DIAGNOSTIC] Gemini draft matched existing record or used fallback; serving unused approved draft.`);
      } catch (err: any) {
        geminiHttpStatus = err.status || 500;
        console.warn(`[DIAGNOSTIC] Gemini API call failed (${err.message || err}); serving unused approved draft.`);
      }
    }

    // PRIORITY 1 & 2: Approved Curated Pool / Supabase Unused Draft
    // Used on initial page load (saving quota), when Gemini key is absent, or on fallback.
    const selected = await getNextAvailableCuratedSuggestion(
      forceNew ? currentText : undefined,
      branchName
    );

    resolvedSource = 'approved_curated_pool';
    const totalDuration = Date.now() - requestStartTime;

    // Safe server-side diagnostic logging (NEVER logs keys or headers)
    console.log(
      `[DIAGNOSTIC - /api/generate-review]\n` +
      `  timestamp: ${new Date().toISOString()}\n` +
      `  gemini_attempted: ${geminiAttempted}\n` +
      `  model: ${configuredModel}\n` +
      `  http_status: ${geminiHttpStatus}\n` +
      `  duration_ms: ${totalDuration}\n` +
      `  source: ${resolvedSource}\n` +
      `  branch: ${branchName}`
    );

    return NextResponse.json({
      success: true,
      reviewText: selected.review_text,
      googleReviewUrl,
      source: resolvedSource,
      candidateTopics: [selected.topic],
      keywordsUsed: [selected.keyword_group],
      lengthCategory: selected.length_category,
      diagnostics: {
        geminiAttempted,
        model: configuredModel,
        httpStatus: geminiHttpStatus,
        durationMs: totalDuration,
        resolvedSource,
      },
    });
  } catch (error: any) {
    console.error('Unhandled error in generate-review route:', error);
    return NextResponse.json(
      {
        success: false,
        error: "We couldn't prepare your review suggestion right now. Please try again.",
      },
      { status: 500 }
    );
  }
}
