import React from 'react';
import { Logo } from './Logo';
import { MapPin } from 'lucide-react';

export const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-40 backdrop-blur-md bg-white/70 border-b border-slate-200/60 transition-all duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Logo & Brand Info */}
        <div className="flex items-center gap-4">
          <Logo size="md" />
        </div>

        {/* Badges & Location Details */}
        <div className="flex items-center gap-3">
          {/* Badge: Fresh Vegetables • Fresh Fruits */}
          <div className="hidden sm:flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-50 border border-brand-200/60 text-brand-700 font-semibold text-xs shadow-xs">
            <span className="w-2 h-2 rounded-full bg-brand-600 animate-pulse"></span>
            <span>Fresh Vegetables</span>
            <span className="text-brand-300">•</span>
            <span>Fresh Fruits</span>
          </div>

          {/* Location Badge */}
          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-50/80 border border-emerald-200/60 text-emerald-800 font-medium text-xs">
            <MapPin className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
            <span className="truncate max-w-[120px] sm:max-w-none">Raysan, Gandhinagar</span>
          </div>
        </div>
      </div>
    </header>
  );
};
