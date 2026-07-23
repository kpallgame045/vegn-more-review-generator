import React from 'react';
import { ReviewCard } from './ReviewCard';
import { ActionButtons } from './ActionButtons';
import { ErrorCard } from './ErrorCard';
import { GeneratedReview, ReviewStatus } from '../types/review';

interface ReviewGeneratorProps {
  currentReview: GeneratedReview | null;
  status: ReviewStatus;
  errorMessage: string | null;
  isCopied: boolean;
  onGenerate: () => void;
  onCopy: () => void;
  onPostReview: () => void;
}

export const ReviewGenerator: React.FC<ReviewGeneratorProps> = ({
  currentReview,
  status,
  errorMessage,
  isCopied,
  onGenerate,
  onCopy,
  onPostReview,
}) => {
  const isLoading = status === 'loading';
  const isError = status === 'error';

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 mb-16 relative z-10">
      {/* Main Glass Card Wrapper */}
      <div className="relative rounded-3xl p-2 sm:p-4 bg-gradient-to-b from-white/80 to-white/40 backdrop-blur-2xl border border-white/90 shadow-glass">
        {isError ? (
          <ErrorCard message={errorMessage} onRetry={onGenerate} />
        ) : (
          <ReviewCard review={currentReview} isLoading={isLoading} />
        )}

        <ActionButtons
          currentReview={currentReview}
          isLoading={isLoading}
          isCopied={isCopied}
          onGenerate={onGenerate}
          onCopy={onCopy}
          onPostReview={onPostReview}
        />
      </div>
    </div>
  );
};
