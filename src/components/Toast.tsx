import React from 'react';
import { ToastNotification } from '../types/review';
import { CheckCircle2, AlertCircle, Info, X } from 'lucide-react';

interface ToastProps {
  toasts: ToastNotification[];
  onClose: (id: string) => void;
}

export const ToastContainer: React.FC<ToastProps> = ({ toasts, onClose }) => {
  if (toasts.length === 0) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3 max-w-sm w-full px-4 pointer-events-none">
      {toasts.map((toast) => {
        const isSuccess = toast.type === 'success';
        const isError = toast.type === 'error';

        return (
          <div
            key={toast.id}
            className={`pointer-events-auto flex items-center justify-between gap-3 p-4 rounded-2xl shadow-xl border backdrop-blur-md transition-all duration-300 transform translate-y-0 animate-in fade-in slide-in-from-bottom-5 ${
              isSuccess
                ? 'bg-slate-900/90 text-white border-emerald-500/40 shadow-emerald-900/10'
                : isError
                ? 'bg-red-900/95 text-white border-red-500/40 shadow-red-900/20'
                : 'bg-slate-900/90 text-white border-slate-700/50'
            }`}
            role="alert"
          >
            <div className="flex items-center gap-3">
              {isSuccess && <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />}
              {isError && <AlertCircle className="w-5 h-5 text-red-400 shrink-0" />}
              {!isSuccess && !isError && <Info className="w-5 h-5 text-brand-400 shrink-0" />}
              <span className="text-sm font-semibold tracking-wide">{toast.message}</span>
            </div>

            <button
              onClick={() => onClose(toast.id)}
              className="text-slate-400 hover:text-white transition-colors p-1 rounded-lg hover:bg-white/10"
              aria-label="Close notification"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        );
      })}
    </div>
  );
};
