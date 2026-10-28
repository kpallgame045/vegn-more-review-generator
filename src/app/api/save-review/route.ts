import { NextResponse } from 'next/server';
import { saveConfirmedReview } from '@/lib/supabase';

export const runtime = 'nodejs';

// Simple debounce map to prevent double-clicks (200ms debounce only)
const saveDebounceMap = new Map<string, number>();

export async function POST(request: Request) {
  try {
    const ip = request.headers.get('x-forwarded-for') || 'default-save-client';
    const now = Date.now();
    const lastRequest = saveDebounceMap.get(ip) || 0;

    // Only debounce rapid bursts within 200ms
    if (now - lastRequest < 200) {
      return NextResponse.json(
        {
          success: false,
          error: 'Please wait a moment before saving again.',
        },
        { status: 429 }
      );
    }
    saveDebounceMap.set(ip, now);

    const body = await request.json().catch(() => ({}));
    const {
      branchName = 'PDPU Branch',
      reviewText,
      tags = ['Neatly Packed Vegetables', 'Fresh Produce'],
      rating = 'Excellent',
    } = body;

    if (!reviewText || typeof reviewText !== 'string' || reviewText.trim().length < 15) {
      return NextResponse.json(
        {
          success: false,
          error: 'Please provide a valid review draft of at least 15 characters.',
        },
        { status: 400 }
      );
    }

    const result = await saveConfirmedReview({
      branchName,
      reviewText,
      tags,
      rating,
    });

    if (!result.success) {
      return NextResponse.json(
        {
          success: false,
          error: result.error || 'Failed to save review to database.',
          isConfigured: result.isConfigured,
        },
        { status: result.error?.includes('Duplicate') || result.error?.includes('already been submitted') ? 409 : 400 }
      );
    }

    return NextResponse.json({
      success: true,
      id: result.id,
      message: result.message || 'Review successfully saved to database ✓',
    });
  } catch (error: any) {
    console.error('Unhandled error in save-review endpoint:', error);
    return NextResponse.json(
      {
        success: false,
        error: `Unexpected server error: ${error.message || 'Unknown error'}`,
      },
      { status: 500 }
    );
  }
}
