import React from 'react';
import { Quote, Clock, FileText, Sparkles, CheckCircle2 } from 'lucide-react';
import { GeneratedReview } from '../types/review';

interface ReviewCardProps {
  review: GeneratedReview | null;
  isLoading: boolean;
}

export const ReviewCard: React.FC<ReviewCardProps> = ({ review, isLoading }) => {
  if (isLoading) {
    return (
      <div className="glass-card rounded-3xl p-6 sm:p-10 border border-white/80 shadow-glass relative overflow-hidden animate-pulse">
        <div className="flex items-center justify-between mb-6">
          <div className="w-12 h-12 rounded-2xl bg-brand-100/60 flex items-center justify-center">
            <Quote className="w-6 h-6 text-brand-300" />
          </div>
          <div className="h-6 w-32 bg-slate-200/80 rounded-full"></div>
        </div>

        {/* Skeleton Lines */}
        <div className="space-y-3.5 my-8">
          <div className="h-4 bg-slate-200/90 rounded-md w-full"></div>
          <div className="h-4 bg-slate-200/90 rounded-md w-11/12"></div>
          <div className="h-4 bg-slate-200/80 rounded-md w-3/4"></div>
        </div>

        {/* Skeleton Footer */}
        <div className="pt-6 border-t border-slate-200/60 flex items-center justify-between">
          <div className="h-4 w-24 bg-slate-200/70 rounded-full"></div>
          <div className="h-4 w-28 bg-slate-200/70 rounded-full"></div>
        </div>
      </div>
    );
  }

  if (!review) {
    return (
      <div className="glass-card rounded-3xl p-8 sm:p-12 text-center border border-white/80 shadow-glass relative overflow-hidden transition-all duration-300">
        <div className="w-16 h-16 rounded-3xl bg-gradient-to-br from-brand-50 to-brand-100/60 mx-auto flex items-center justify-center mb-5 text-brand-700 shadow-sm border border-brand-200/50">
          <Sparkles className="w-8 h-8 animate-pulse" />
        </div>
        <h3 className="text-xl sm:text-2xl font-bold text-slate-800 mb-2">
          Your Natural Review Ready to Generate
        </h3>
        <p className="text-slate-500 text-sm sm:text-base max-w-md mx-auto leading-relaxed">
          Click the button below to craft a unique, natural Google review reflecting your shopping visit at Veg'n More.
        </p>
      </div>
    );
  }

  return (
    <div className="glass-card glass-card-hover rounded-3xl p-6 sm:p-10 border border-white/90 shadow-glass relative overflow-hidden transition-all duration-500 transform animate-in fade-in slide-in-from-bottom-4">
      {/* Decorative Brand Accent Corner */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-brand-700/10 via-emerald-500/5 to-transparent rounded-bl-full pointer-events-none"></div>

      {/* Card Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="w-12 h-12 rounded-2xl bg-brand-700/10 flex items-center justify-center text-brand-700 shadow-inner-glow border border-brand-200/40">
          <Quote className="w-6 h-6 fill-brand-700/20" />
        </div>
        
        <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200/60 text-emerald-700 text-xs font-semibold">
          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
          <span>Natural Human Review</span>
        </div>
      </div>

      {/* Review Text Body */}
      <blockquote className="my-6">
        <p className="text-lg sm:text-2xl font-medium text-slate-800 leading-relaxed sm:leading-relaxed font-sans select-all tracking-tight">
          {review.text}
        </p>
      </blockquote>

      {/* Card Footer Info */}
      <div className="pt-6 border-t border-slate-200/70 flex flex-wrap items-center justify-between text-xs font-medium text-slate-500 gap-3">
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-1.5 bg-slate-100/80 px-2.5 py-1 rounded-lg">
            <FileText className="w-3.5 h-3.5 text-slate-400" />
            <span>{review.charCount} chars ({review.wordCount} words)</span>
          </span>
        </div>

        <div className="flex items-center gap-1.5 bg-slate-100/80 px-2.5 py-1 rounded-lg">
          <Clock className="w-3.5 h-3.5 text-slate-400" />
          <span>Generated at {review.timestamp}</span>
        </div>
      </div>
    </div>
  );
};
