import React, { useState } from 'react';
import { ArrowUpRight, Flame, Shield, Zap } from 'lucide-react';
import { GSAPOneTimeBrandReveal } from './GSAPOneTimeBrandReveal';
import { ProgramsFloatingGraphics } from './FloatingFitnessGraphics';
import { EditorialHeadingReveal } from './EditorialHeadingReveal';

interface ProgramsSectionProps {
  onNavigate: (view: string) => void;
}

export const ProgramsSection: React.FC<ProgramsSectionProps> = ({ onNavigate }) => {
  const [hoveredProgram, setHoveredProgram] = useState<number | null>(null);

  const programs = [
    {
      id: 1,
      num: '01',
      title: 'STRENGTH & HYPERTROPHY',
      category: 'MUSCLE & POWER',
      icon: Flame,
      desc: 'Structured weight training, barbell compound lifts, and progressive resistance programming for strength development.',
      image:
        'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop',
    },
    {
      id: 2,
      num: '02',
      title: 'CARDIO & STAMINA ZONE',
      category: 'ENDURANCE & AGILITY',
      icon: Zap,
      desc: 'Dedicated high-capacity stamina floor with treadmills, exercise bikes, and high-intensity interval training space.',
      image:
        'https://images.unsplash.com/photo-1538805060514-97d9cc17730c?q=80&w=2070&auto=format&fit=crop',
    },
    {
      id: 3,
      num: '03',
      title: 'PERSONAL COACH GUIDANCE',
      category: 'CUSTOM PROGRAMMING',
      icon: Shield,
      desc: 'One-on-one personal coaching, workout form refinement, and custom progressive workout splits tailored to your goals.',
      image:
        'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=2070&auto=format&fit=crop',
    },
  ];

  return (
    <section className="relative py-14 sm:py-16 bg-black overflow-hidden border-b border-zinc-900">
      <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none" />

      {/* Small Floating Fitness Items */}
      <ProgramsFloatingGraphics />

      {/* Giant Transparent "03" Background Number */}
      <div className="absolute left-4 top-1/2 -translate-y-1/2 text-[16rem] sm:text-[24rem] font-display font-extrabold text-white/[0.02] select-none pointer-events-none z-0">
        03
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <GSAPOneTimeBrandReveal>
          {/* Animated Red Line */}
          <div className="w-full h-[2px] bg-gradient-to-r from-red-600 via-red-500 to-transparent mb-8 shadow-[0_0_15px_#e50914]" />

          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-red-600/10 border border-red-600/30 text-red-500 text-xs font-mono tracking-widest uppercase mb-3">
                // TRAINING PROGRAMS
              </div>
              <EditorialHeadingReveal
                as="h2"
                text="WORKOUT"
                redText="DISCIPLINES."
                className="text-3xl sm:text-5xl"
              />
            </div>
            <button
              onClick={() => onNavigate('programs')}
              className="group flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-red-500 hover:text-white transition-colors cursor-pointer"
            >
              <span>VIEW ALL PROGRAMS</span>
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </button>
          </div>

          {/* Editorial Programs List */}
          <div className="space-y-4">
            {programs.map((program) => {
              const IconComp = program.icon;
              const isHovered = hoveredProgram === program.id;

              return (
                <div
                  key={program.id}
                  onMouseEnter={() => setHoveredProgram(program.id)}
                  onMouseLeave={() => setHoveredProgram(null)}
                  onClick={() => onNavigate('programs')}
                  className="group relative overflow-hidden bg-zinc-950 border border-zinc-800/80 p-6 sm:p-8 cursor-pointer transition-all duration-500 hover:border-red-600/80 hover:bg-zinc-900/90 corner-brackets"
                >
                  {/* Background Hover Image Reveal */}
                  <div
                    className={`absolute inset-0 z-0 transition-opacity duration-500 pointer-events-none ${
                      isHovered ? 'opacity-25' : 'opacity-0'
                    }`}
                  >
                    <img
                      src={program.image}
                      alt={program.title}
                      className="w-full h-full object-cover filter brightness-[0.5] contrast-[1.2] scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />
                  </div>

                  {/* Red Border Highlight */}
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-red-600 opacity-0 group-hover:opacity-100 transition-opacity" />

                  <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
                    <div className="flex items-start gap-4 sm:gap-6">
                      <span className="text-3xl sm:text-4xl font-display font-extrabold text-zinc-600 group-hover:text-red-500 transition-colors">
                        {program.num}
                      </span>
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <IconComp className="w-4 h-4 text-red-500" />
                          <span className="text-[10px] font-mono text-zinc-400 tracking-widest uppercase">
                            // {program.category}
                          </span>
                        </div>
                        <h3 className="text-xl sm:text-3xl font-display font-extrabold uppercase text-white tracking-tight group-hover:translate-x-2 transition-transform">
                          {program.title}
                        </h3>
                        <p className="text-zinc-400 text-xs sm:text-sm mt-2 max-w-2xl leading-relaxed">
                          {program.desc}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 text-xs font-mono font-bold text-red-500 uppercase tracking-widest self-end md:self-center">
                      <span>EXPLORE</span>
                      <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </GSAPOneTimeBrandReveal>
      </div>
    </section>
  );
};
