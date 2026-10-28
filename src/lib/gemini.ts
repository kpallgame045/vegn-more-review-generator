import { GoogleGenAI } from '@google/genai';
import { curatedSuggestionPool, getNextAvailableCuratedSuggestion, CuratedReviewDraft } from './supabase';

const apiKey = process.env.GEMINI_API_KEY || '';

export interface GeneratedSuggestion {
  review_text: string;
  candidate_topics: string[];
  keywords_used: string[];
  source?: 'gemini_3.1_flash_lite' | 'approved_curated_pool';
  length_category?: string;
}

/**
 * Fallback suggestion generator using verified, curated drafts.
 * Zero external API calls required.
 */
async function generateFallbackSuggestion(excludeText?: string): Promise<GeneratedSuggestion> {
  const result = await getNextAvailableCuratedSuggestion(excludeText, 'PDPU Branch');
  return {
    review_text: result.review_text,
    candidate_topics: [result.topic],
    keywords_used: [result.keyword_group],
    source: 'approved_curated_pool',
    length_category: result.length_category,
  };
}

/**
 * Generates an editable review draft using Gemini AI (model: gemini-3.1-flash-lite).
 * 
 * Strict constraints:
 * - Single API call per request (no loops or retries that burn quota).
 * - Avoids repetitive openings: strictly bans "I love this store", "The vegetables here are", "Great place to shop", etc.
 * - Rotates across the 25 specific store topics and natural local SEO keyword groups.
 * - Natural length variation: Short (15–25 words), Medium (26–45 words), Detailed (46–65 words).
 * - Seamless fallback to the 25 approved drafts if API key is missing or quota is exhausted (429).
 */
export async function generateReviewWithGemini(params: {
  businessName?: string;
  branchName?: string;
  tags?: string[];
  rating?: string;
  existingReviewsToAvoid?: string[];
  excludeText?: string;
}): Promise<GeneratedSuggestion> {
  const {
    businessName = 'Veg ’n more',
    branchName = 'PDPU Branch',
    tags = [],
    existingReviewsToAvoid = [],
    excludeText = '',
  } = params;

  // If API key is not configured, immediately use approved pool (0 API calls)
  if (!apiKey || apiKey.trim() === '' || apiKey.includes('YOUR_GEMINI_API_KEY')) {
    return generateFallbackSuggestion(excludeText);
  }

  try {
    const ai = new GoogleGenAI({ apiKey });

    const recentAvoidanceContext = existingReviewsToAvoid
      .slice(0, 10)
      .map((r, idx) => `${idx + 1}. "${r}"`)
      .join('\n');

    const prompt = `You are an expert review suggestion assistant for Veg ’n more PDPU Branch.
Generate ONE original, editable review draft for a genuine customer to personalize based on their actual shopping experience.

BUSINESS DETAILS:
- Business: ${businessName}
- Branch: ${branchName} ONLY (Do NOT reference Nikol or any other branch)
- Location: JB Corner, PDPU Road, near Shagun-40, Raysan, Gandhinagar, Gujarat 382426.

AVAILABLE STORE TOPICS (Select ONE or TWO naturally):
1. Neatly packed vegetables & portioned daily greens
2. Fresh vegetables and seasonal produce
3. Fresh fruits and available varieties
4. Organized vegetable displays and clean racks
5. Clean and orderly shopping arrangements
6. Vegetable sorting and packing
7. Convenient grocery shopping near JB Corner
8. Shopping near PDPU Road
9. Finding fruits and vegetables in Raysan
10. Product variety at Veg ’n more PDPU Branch
11. Convenient shopping around Gandhinagar
12. Vegetable selection and crate organization
13. Fruit and vegetable shopping convenience
14. Packaging that makes carrying produce easier
15. Organized shelves and product presentation
16. Availability of everyday cooking vegetables
17. Seasonal fruits properly grouped
18. Convenient location near Shagun-40 with easy parking
19. Fresh produce selection
20. Organized shopping near PDPU Road
21. Vegetable packing and product arrangement
22. Fruit selection at the store
23. Convenient local grocery shopping after office hours
24. Product presentation and store organization
25. Fresh leafy greens and daily cooking essentials

LOCAL KEYWORD GROUPS (Rotate naturally; include at most 1 or 2):
- vegetable shop near PDPU Road
- fresh vegetables in Raysan
- fruit shop near PDPU Road
- fresh fruits and vegetables in Gandhinagar
- Veg ’n more PDPU Branch
- neatly packed vegetables
- grocery shopping near PDPU Road

STRICT RULES:
1. Write ONE genuine, natural review draft.
2. Vary length naturally across Short (15–25 words), Medium (26–45 words), or Detailed (46–65 words).
3. Every suggestion MUST have a distinct opening sentence.
   STRICTLY BANNED OPENINGS (NEVER START WITH):
   - "I love this store..."
   - "The vegetables here are..."
   - "Great place to shop..."
   - "Great place for..."
   - "I recently visited..."
   - "Amazing store..."
   - "Very good store..."
   - "Highly recommended..."
   - "Best vegetable shop..."
4. Avoid repetitive sentence structures.
5. Do NOT fabricate personal claims, fake discounts, prices, or staff stories.
6. Do NOT sound like an advertisement or make exaggerated claims ("#1 store", "best in town").
7. Sound like a real neighbor shopping near PDPU Road.

PREVIOUS REVIEWS TO AVOID DUPLICATING:
${recentAvoidanceContext || 'None'}

Return ONLY a JSON object with this exact structure:
{
  "review_text": "the single natural draft text without quotes",
  "candidate_topics": ["topic 1"],
  "keywords_used": ["keyword 1"],
  "length_category": "medium"
}`;

    // Target verified model: gemini-3.1-flash-lite
    const model = 'gemini-3.1-flash-lite';

    const response = await ai.models.generateContent({
      model,
      contents: prompt,
      config: {
        responseMimeType: 'application/json',
      },
    });

    const rawText = response.text ? response.text.trim() : '';
    if (rawText) {
      const parsed = JSON.parse(rawText);
      if (parsed.review_text && parsed.review_text.trim().length >= 15) {
        return {
          review_text: parsed.review_text.trim().replace(/^["']|["']$/g, ''),
          candidate_topics: Array.isArray(parsed.candidate_topics) ? parsed.candidate_topics : [],
          keywords_used: Array.isArray(parsed.keywords_used) ? parsed.keywords_used : [],
          source: 'gemini_3.1_flash_lite',
          length_category: parsed.length_category || 'medium',
        };
      }
    }

    return generateFallbackSuggestion(excludeText);
  } catch (error: any) {
    // Graceful handling of quota exhaustion, rate limits, or network errors
    console.warn('Gemini API call skipped or failed (quota/network). Falling back to approved draft pool:', error.message || error);
    return generateFallbackSuggestion(excludeText);
  }
}
