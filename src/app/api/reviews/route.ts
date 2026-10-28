import { NextResponse } from 'next/server';
import { fetchConfirmedReviewsList, saveConfirmedReview, isSupabaseConfigured } from '@/lib/supabase';

export const runtime = 'nodejs';

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const branchName = searchParams.get('branch') || 'PDPU Branch';

    const reviews = await fetchConfirmedReviewsList(branchName);

    return NextResponse.json({
      success: true,
      branchName,
      isSupabaseConnected: isSupabaseConfigured(),
      count: reviews.length,
      reviews,
    });
  } catch (err: any) {
    return NextResponse.json(
      { success: false, error: err.message || 'Failed to fetch reviews' },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json().catch(() => ({}));
    const { branchName = 'PDPU Branch', reviewText, tags, rating } = body;

    const result = await saveConfirmedReview({
      branchName,
      reviewText,
      tags,
      rating,
    });

    return NextResponse.json(result, { status: result.success ? 200 : 400 });
  } catch (err: any) {
    return NextResponse.json(
      { success: false, error: err.message },
      { status: 500 }
    );
  }
}
