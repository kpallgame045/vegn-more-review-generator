import React from 'react';

export const GraphicalBreak: React.FC = () => {
  return (
    <section className="relative w-full h-[60vh] min-h-[420px] flex items-center justify-center overflow-hidden bg-black border-b border-zinc-900">
      {/* Background Image with Parallax & Dark Filter */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=2070&auto=format&fit=crop"
          alt="Home 4 Fitness Training Intensity"
          className="w-full h-full object-cover filter brightness-[0.35] contrast-[1.3] scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/40 to-black" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-red-600/20 rounded-full blur-[140px] pointer-events-none" />
      </div>

      {/* Giant Transparent "04" Background Number */}
      <div className="absolute right-4 top-1/2 -translate-y-1/2 text-[16rem] sm:text-[24rem] font-display font-extrabold text-white/[0.02] select-none pointer-events-none z-0">
        04
      </div>

      {/* Foreground Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-red-600/10 border border-red-600/40 text-red-500 text-xs font-mono tracking-widest uppercase">
          // THE HOME 4 FITNESS CODE
        </div>

        {/* Enormous Headline */}
        <h2 className="text-4xl sm:text-7xl md:text-8xl lg:text-9xl font-display font-extrabold tracking-tighter uppercase text-white leading-none">
          EVERY WORKOUT <br />
          <span className="text-stroke-red text-red-600 drop-shadow-[0_0_40px_rgba(229,9,20,0.6)]">
            COUNTS.
          </span>
        </h2>

        {/* Animated 3 Pillar Tags */}
        <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-12 pt-4">
          <div className="flex items-center gap-3">
            <span className="text-red-500 font-mono text-xs font-bold">01 —</span>
            <span className="text-xs sm:text-sm font-display font-extrabold uppercase tracking-widest text-zinc-300">
              DISCIPLINE
            </span>
          </div>
          <div className="w-1.5 h-1.5 rounded-full bg-red-600" />
          <div className="flex items-center gap-3">
            <span className="text-red-500 font-mono text-xs font-bold">02 —</span>
            <span className="text-xs sm:text-sm font-display font-extrabold uppercase tracking-widest text-zinc-300">
              CONSISTENCY
            </span>
          </div>
          <div className="w-1.5 h-1.5 rounded-full bg-red-600" />
          <div className="flex items-center gap-3">
            <span className="text-red-500 font-mono text-xs font-bold">03 —</span>
            <span className="text-xs sm:text-sm font-display font-extrabold uppercase tracking-widest text-zinc-300">
              PROGRESS
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
