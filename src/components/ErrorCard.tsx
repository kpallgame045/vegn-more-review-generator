import React from 'react';
import { AlertCircle, RefreshCw } from 'lucide-react';

interface ErrorCardProps {
  message?: string | null;
  onRetry: () => void;
}

export const ErrorCard: React.FC<ErrorCardProps> = ({ message, onRetry }) => {
  return (
    <div className="glass-card rounded-3xl p-8 text-center border border-red-200/80 bg-red-50/40 shadow-glass my-6 transition-all duration-300 animate-in fade-in">
      <div className="w-14 h-14 rounded-2xl bg-red-100 text-red-600 mx-auto flex items-center justify-center mb-4 shadow-sm border border-red-200">
        <AlertCircle className="w-7 h-7" />
      </div>

      <h3 className="text-xl font-bold text-slate-800 mb-2">
        Unable to generate review
      </h3>

      <p className="text-slate-600 text-sm sm:text-base mb-6 max-w-sm mx-auto">
        {message || 'Please check your connection and try again.'}
      </p>

      <button
        onClick={onRetry}
        type="button"
        className="inline-flex items-center gap-2 py-3 px-6 rounded-xl bg-brand-700 hover:bg-brand-800 text-white font-semibold text-sm shadow-md active:scale-95 transition-all duration-200"
      >
        <RefreshCw className="w-4 h-4" />
        <span>Try Again</span>
      </button>
    </div>
  );
};
