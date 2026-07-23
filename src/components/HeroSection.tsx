import React from 'react';
import { Star, ShieldCheck, Heart } from 'lucide-react';
import { Logo } from './Logo';

export const HeroSection: React.FC = () => {
  return (
    <div className="relative text-center max-w-4xl mx-auto pt-6 sm:pt-8 pb-4 px-4 sm:px-6">
      {/* Featured Hero Logo Display */}
      <div className="flex justify-center mb-6">
        <div className="p-2 rounded-full bg-white/80 backdrop-blur-md shadow-xl shadow-brand-700/10 border border-brand-100 animate-float-slow">
          <Logo size="hero" showText={false} />
        </div>
      </div>

      {/* Top Experience Badge */}
      <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-brand-50 to-emerald-50 border border-brand-200/80 text-brand-800 text-xs sm:text-sm font-semibold tracking-wide shadow-xs mb-6">
        <Star className="w-4 h-4 fill-brand-600 text-brand-600" />
        <span>Official Customer Feedback</span>
        <span className="w-1.5 h-1.5 rounded-full bg-brand-400"></span>
        <span className="text-emerald-700 font-medium">Quick & Natural</span>
      </div>

      {/* Main Heading */}
      <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.15] mb-4">
        Thank You for Visiting <br className="hidden sm:inline" />
        <span className="bg-gradient-to-r from-brand-700 via-brand-600 to-emerald-600 bg-clip-text text-transparent">
          Veg'n More
        </span>
      </h1>

      {/* Subheading */}
      <p className="text-base sm:text-xl text-slate-600 font-normal max-w-2xl mx-auto leading-relaxed mb-8">
        We'd love to hear about your shopping experience. Generate a genuine review in one click and share your feedback on Google.
      </p>

      {/* Desktop Highlights */}
      <div className="hidden md:flex items-center justify-center gap-8 mb-8 text-xs font-semibold text-slate-500">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700">
            <ShieldCheck className="w-4 h-4" />
          </div>
          <span>Farm Fresh Daily</span>
        </div>
        <div className="w-1 h-1 rounded-full bg-slate-300"></div>
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-brand-100 flex items-center justify-center text-brand-700">
            <Heart className="w-4 h-4" />
          </div>
          <span>Honest Everyday Prices</span>
        </div>
        <div className="w-1 h-1 rounded-full bg-slate-300"></div>
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-amber-100 flex items-center justify-center text-amber-700">
            <Star className="w-4 h-4 fill-amber-500" />
          </div>
          <span>Raysan & PDPU Preferred</span>
        </div>
      </div>
    </div>
  );
};
