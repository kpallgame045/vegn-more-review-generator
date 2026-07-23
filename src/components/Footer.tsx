import React from 'react';
import { Instagram } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="mt-16 pb-12 pt-6 relative z-10 text-center select-none">
      {/* Small Minimal Divider */}
      <div className="max-w-xs sm:max-w-md mx-auto mb-8 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent"></div>

      <div className="flex flex-col items-center justify-center gap-2 px-4">
        {/* Copyright */}
        <p className="text-xs sm:text-sm font-medium text-slate-500 tracking-wide">
          © 2026 Veg'n More
        </p>

        {/* Powered by FlashDesign AI with Instagram Icon */}
        <div className="flex items-center justify-center gap-1.5 text-xs sm:text-sm text-slate-500 font-normal">
          <span>Powered by</span>
          <a
            href="https://www.instagram.com/flashdesign_ai/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 font-semibold text-brand-700 hover:text-brand-600 transition-all duration-300 transform hover:scale-105 hover:underline decoration-brand-700/40 underline-offset-4 group"
            aria-label="FlashDesign AI Instagram Profile"
          >
            <Instagram className="w-4 h-4 text-brand-700 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300" />
            <span>FlashDesign AI</span>
          </a>
        </div>
      </div>
    </footer>
  );
};
