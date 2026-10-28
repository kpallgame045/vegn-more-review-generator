'use client';

import { use } from 'react';
import ReviewGeneratorPage from '../page';

export default function BranchReviewPage({ params }: { params: Promise<{ branchSlug: string }> }) {
  const resolvedParams = use(params);
  console.info(`Branch route activated for branch: ${resolvedParams.branchSlug}`);
  
  return <ReviewGeneratorPage />;
}
