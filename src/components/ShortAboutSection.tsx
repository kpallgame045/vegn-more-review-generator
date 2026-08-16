import React from 'react';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { GSAPOneTimeBrandReveal } from './GSAPOneTimeBrandReveal';
import { AboutFloatingGraphics } from './FloatingFitnessGraphics';
import { EditorialHeadingReveal } from './EditorialHeadingReveal';

interface ShortAboutSectionProps {
  onNavigate: (view: string) => void;
}

export const ShortAboutSection: React.FC<ShortAboutSectionProps> = ({ onNavigate }) => {
  return (
    <section className="relative py-14 sm:py-16 bg-black overflow-hidden border-b border-zinc-900">
      <div className="absolute inset-0 bg-grid-pattern opacity-15 pointer-events-none" />

      {/* Small Floating Fitness Items */}
      <AboutFloatingGraphics />

      {/* Giant Transparent "01" Background Number */}
      <div className="absolute left-4 top-1/2 -translate-y-1/2 text-[16rem] sm:text-[24rem] font-display font-extrabold text-white/[0.02] select-none pointer-events-none z-0">
        01
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <GSAPOneTimeBrandReveal>
          {/* Animated Red Drawing Line */}
          <div className="w-full h-[2px] bg-gradient-to-r from-red-600 via-red-500 to-transparent mb-8 shadow-[0_0_15px_#e50914]" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* LEFT: CINEMATIC IMAGE WITH REVEAL */}
            <div className="lg:col-span-6 relative">
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-zinc-900 border border-zinc-800 corner-brackets group">
                <img
                  src="https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=2070&auto=format&fit=crop"
                  alt="Home 4 Fitness Training Ground"
                  className="w-full h-full object-cover filter brightness-90 contrast-110 transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />

                <div className="absolute top-4 left-4 bg-zinc-900/90 border border-zinc-700 px-3 py-1.5 backdrop-blur-md">
                  <span className="text-[10px] font-mono text-red-500 tracking-widest uppercase">
                    FACILITY // SECTOR 8 GANDHINAGAR
                  </span>
                </div>
              </div>
            </div>

            {/* RIGHT: EDITORIAL ABOUT CONTENT */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-red-600/10 border border-red-600/30 text-red-500 text-xs font-mono tracking-widest uppercase">
                // ABOUT HOME 4 FITNESS
              </div>

              {/* Masked Editorial Heading */}
              <EditorialHeadingReveal
                as="h2"
                text="MORE THAN JUST A GYM."
                redText="BUILD A STRONGER ROUTINE."
                className="text-3xl sm:text-5xl"
              />

              <p className="text-zinc-300 text-base sm:text-lg font-normal leading-relaxed">
                Located near CHH-3 Circle in Sector 8, Gandhinagar, Home 4 Fitness is built for athletic focus and workout routine consistency. We provide a fitness-focused environment for weight training, cardio, and physical discipline.
              </p>

              {/* Feature Bullets */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 text-xs font-mono text-zinc-300">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-red-500" />
                  <span>TRAIN WITH PURPOSE</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-red-500" />
                  <span>FITNESS-FOCUSED ENVIRONMENT</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-red-500" />
                  <span>CONSISTENCY MATTERS</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-red-500" />
                  <span>LOCAL & CONVENIENT IN SECTOR 8</span>
                </div>
              </div>

              <div className="pt-4">
                <button
                  onClick={() => onNavigate('about')}
                  className="group inline-flex items-center gap-3 px-7 py-3.5 bg-red-600 hover:bg-red-700 text-white font-extrabold text-xs uppercase tracking-widest transition-all duration-300 shadow-[0_0_20px_rgba(229,9,20,0.4)] cursor-pointer"
                >
                  <span>EXPLORE OUR STORY</span>
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </button>
              </div>
            </div>
          </div>
        </GSAPOneTimeBrandReveal>
      </div>
    </section>
  );
};
