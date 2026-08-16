import React, { useEffect, useState } from 'react';
import { ArrowUpRight, ChevronDown, Flame, Shield, Zap } from 'lucide-react';
import { HeroFloatingGraphics } from './FloatingFitnessGraphics';
import { EditorialHeadingReveal } from './EditorialHeadingReveal';

interface HeroSectionProps {
  onNavigate: (view: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onNavigate }) => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative w-full min-h-screen flex flex-col justify-between overflow-hidden bg-[#08080a] pt-6 sm:pt-8 pb-12 px-4 sm:px-6 lg:px-8">
      {/* 1. MULTI-LAYERED CINEMATIC GYM BACKGROUND */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <img
          src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop"
          alt="Home 4 Fitness Gym Sector 8"
          className="w-full h-full object-cover object-center filter brightness-[0.4] contrast-[1.25] transition-transform duration-700 ease-out"
          style={{
            transform: `scale(${1 + scrollY * 0.0004}) translateY(${scrollY * 0.18}px)`,
          }}
        />
        {/* Dark Vignettes & Gradients */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/80" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/50 to-black/95" />
        {/* Red Atmospheric Glow */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-red-600/25 rounded-full blur-[160px] animate-red-pulse pointer-events-none" />
        {/* Subtle Grid & Film Grain */}
        <div className="absolute inset-0 bg-grid-pattern opacity-25" />
        <div className="absolute inset-0 bg-noise opacity-40 mix-blend-overlay" />
      </div>

      {/* 2. SMALL FLOATING FITNESS GRAPHICS LAYER (Hero Margins) */}
      <HeroFloatingGraphics />

      {/* 3. HERO MAIN CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto w-full flex-grow flex flex-col justify-center py-6">
        {/* Animated Thin Red Line */}
        <div className="w-full h-[2px] bg-gradient-to-r from-red-600 via-red-500 to-transparent mb-8 shadow-[0_0_20px_#e50914]" />

        {/* Editorial Masked Headline */}
        <div className="space-y-1 sm:space-y-2 mb-8">
          <EditorialHeadingReveal
            as="h1"
            text="BUILD YOUR"
            redText="STRENGTH."
            className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl"
          />
          <EditorialHeadingReveal
            as="h2"
            text="ELEVATE YOUR"
            redText="FITNESS."
            className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl"
          />
        </div>

        {/* Sub-Heading & Feature Highlights */}
        <div className="max-w-2xl mb-10">
          <p className="text-sm sm:text-base md:text-lg text-zinc-300 font-normal leading-relaxed mb-6">
            Sector 8 Gandhinagar's premier fitness destination. Built for real strength training, cardio endurance, state-of-the-art equipment, and dedicated personal coach guidance.
          </p>

          <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-zinc-400">
            <div className="flex items-center gap-1.5 bg-zinc-950/80 px-3 py-1.5 border border-zinc-800">
              <Flame className="w-4 h-4 text-red-500" />
              <span>STRENGTH & HYPERTROPHY</span>
            </div>
            <div className="flex items-center gap-1.5 bg-zinc-950/80 px-3 py-1.5 border border-zinc-800">
              <Zap className="w-4 h-4 text-red-500" />
              <span>CARDIO & STAMINA</span>
            </div>
            <div className="flex items-center gap-1.5 bg-zinc-950/80 px-3 py-1.5 border border-zinc-800">
              <Shield className="w-4 h-4 text-red-500" />
              <span>PERSONAL COACHING</span>
            </div>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-wrap items-center gap-4 sm:gap-6">
          <button
            onClick={() => onNavigate('join-now')}
            className="group relative overflow-hidden px-8 py-4 bg-red-600 hover:bg-red-700 text-white font-extrabold text-xs sm:text-sm uppercase tracking-widest transition-all duration-300 shadow-[0_0_35px_rgba(229,9,20,0.6)] hover:shadow-[0_0_55px_rgba(229,9,20,0.9)] flex items-center gap-2 cursor-pointer"
          >
            <span>JOIN HOME 4 FITNESS</span>
            <ArrowUpRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
          </button>

          <button
            onClick={() => onNavigate('programs')}
            className="px-8 py-4 bg-zinc-900/90 hover:bg-zinc-800 text-zinc-200 hover:text-white font-bold text-xs sm:text-sm uppercase tracking-widest border border-zinc-700 transition-all duration-300 flex items-center gap-2 cursor-pointer"
          >
            <span>EXPLORE PROGRAMS</span>
          </button>
        </div>
      </div>

      {/* 4. SCROLL INDICATOR */}
      <div className="relative z-10 max-w-7xl mx-auto w-full flex items-center justify-end border-t border-zinc-800/80 pt-4">
        <div
          onClick={() => {
            window.scrollTo({ top: window.innerHeight * 0.9, behavior: 'smooth' });
          }}
          className="cursor-pointer flex items-center gap-2 text-xs font-mono text-zinc-400 hover:text-white transition-colors group"
        >
          <span className="tracking-widest uppercase text-[11px]">SCROLL TO EXPLORE</span>
          <div className="w-7 h-7 rounded-full bg-zinc-900 border border-zinc-700 flex items-center justify-center group-hover:border-red-600 group-hover:bg-red-600/20 transition-all">
            <ChevronDown className="w-4 h-4 text-red-500 animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  );
};
