import React from 'react';
import { Sparkles, Copy, Check, ExternalLink, Loader2, RefreshCw } from 'lucide-react';
import { GeneratedReview } from '../types/review';

interface ActionButtonsProps {
  currentReview: GeneratedReview | null;
  isLoading: boolean;
  isCopied: boolean;
  onGenerate: () => void;
  onCopy: () => void;
  onPostReview: () => void;
}

export const ActionButtons: React.FC<ActionButtonsProps> = ({
  currentReview,
  isLoading,
  isCopied,
  onGenerate,
  onCopy,
  onPostReview,
}) => {
  const hasReview = Boolean(currentReview);

  return (
    <div className="mt-8 space-y-4">
      {/* Primary Action Button: Generate My Review / Generate Another Review */}
      {!hasReview ? (
        <button
          onClick={onGenerate}
          disabled={isLoading}
          type="button"
          className="w-full relative group overflow-hidden py-4 sm:py-5 px-8 rounded-2xl bg-gradient-to-r from-brand-700 via-brand-600 to-brand-800 text-white font-bold text-lg sm:text-xl shadow-luxury hover:shadow-brand-700/40 active:scale-[0.98] transition-all duration-300 disabled:opacity-70 disabled:pointer-events-none focus:outline-none focus:ring-4 focus:ring-brand-400/50 ripple"
          aria-label="Generate My Google Review"
        >
          <span className="flex items-center justify-center gap-3">
            {isLoading ? (
              <>
                <Loader2 className="w-6 h-6 animate-spin text-white" />
                <span>Crafting Natural Review...</span>
              </>
            ) : (
              <>
                <Sparkles className="w-6 h-6 text-emerald-300 animate-pulse" />
                <span>Generate My Review</span>
              </>
            )}
          </span>
        </button>
      ) : (
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
          {/* Generate Another Review */}
          <button
            onClick={onGenerate}
            disabled={isLoading}
            type="button"
            className="flex-1 py-3.5 px-6 rounded-2xl bg-white hover:bg-slate-50 text-slate-800 border border-slate-300/80 font-semibold text-base shadow-sm hover:border-brand-300 active:scale-[0.98] transition-all duration-200 disabled:opacity-70 focus:outline-none focus:ring-2 focus:ring-brand-500/30 flex items-center justify-center gap-2.5 ripple"
            aria-label="Generate Another Review"
          >
            {isLoading ? (
              <Loader2 className="w-5 h-5 animate-spin text-brand-700" />
            ) : (
              <RefreshCw className="w-5 h-5 text-brand-700" />
            )}
            <span>Generate Another Review</span>
          </button>

          {/* Copy Review */}
          <button
            onClick={onCopy}
            disabled={isLoading}
            type="button"
            className={`flex-1 py-3.5 px-6 rounded-2xl font-semibold text-base shadow-sm active:scale-[0.98] transition-all duration-300 flex items-center justify-center gap-2.5 focus:outline-none focus:ring-2 border ripple ${
              isCopied
                ? 'bg-emerald-600 border-emerald-600 text-white shadow-emerald-600/30 focus:ring-emerald-400'
                : 'bg-white hover:bg-slate-50 text-slate-800 border-slate-300/80 hover:border-emerald-500 focus:ring-emerald-500/30'
            }`}
            aria-label="Copy Review Text"
          >
            {isCopied ? (
              <>
                <Check className="w-5 h-5 text-white animate-bounce" />
                <span>Copied!</span>
              </>
            ) : (
              <>
                <Copy className="w-5 h-5 text-slate-600" />
                <span>Copy Review</span>
              </>
            )}
          </button>
        </div>
      )}

      {/* ⭐ Post on Google Review (Full width when review exists) */}
      {hasReview && (
        <button
          onClick={onPostReview}
          type="button"
          className="w-full py-4.5 sm:py-5 px-8 rounded-2xl bg-gradient-to-r from-emerald-600 via-emerald-500 to-teal-700 hover:from-emerald-700 hover:to-teal-800 text-white font-bold text-lg sm:text-xl shadow-lg shadow-emerald-600/25 hover:shadow-emerald-600/40 active:scale-[0.98] transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-emerald-400/50 flex items-center justify-center gap-3 ripple group"
          aria-label="Post on Google Review"
        >
          <span className="text-xl">⭐</span>
          <span>Post on Google Review</span>
          <ExternalLink className="w-5 h-5 opacity-90 group-hover:translate-x-0.5 transition-transform" />
        </button>
      )}
    </div>
  );
};
