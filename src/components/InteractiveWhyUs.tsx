import React, { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { GSAPOneTimeBrandReveal } from './GSAPOneTimeBrandReveal';
import { WhyUsFloatingGraphics } from './FloatingFitnessGraphics';
import { EditorialHeadingReveal } from './EditorialHeadingReveal';

interface InteractiveWhyUsProps {
  onNavigate: (view: string) => void;
}

export const InteractiveWhyUs: React.FC<InteractiveWhyUsProps> = ({ onNavigate }) => {
  const [activeId, setActiveId] = useState(0);

  const whyUsItems = [
    {
      id: 0,
      number: '01',
      title: 'TRAIN WITH PURPOSE',
      subtitle: 'Structured Routines & Progressive Fitness',
      description:
        'No guesswork. Workout programming at Home 4 Fitness is structured around consistency, biomechanics, and athletic goals.',
      image:
        'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop',
    },
    {
      id: 1,
      number: '02',
      title: 'FITNESS-FOCUSED ENVIRONMENT',
      subtitle: 'High Energy, Zero Distractions',
      description:
        'Equipped for weight training, resistance equipment, and dedicated cardio floors designed strictly for physical stamina.',
      image:
        'https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?q=80&w=2070&auto=format&fit=crop',
    },
    {
      id: 2,
      number: '03',
      title: 'CONSISTENCY MATTERS',
      subtitle: 'Daily Discipline & Workout Habits',
      description:
        'Build long-term fitness habits with daily workout discipline and a high-performance environment in Sector 8.',
      image:
        'https://images.unsplash.com/photo-1574680096145-d05b474e2155?q=80&w=2070&auto=format&fit=crop',
    },
    {
      id: 3,
      number: '04',
      title: 'YOUR FITNESS JOURNEY',
      subtitle: 'Sector 8 Gandhinagar Community',
      description:
        'Be part of an encouraging fitness environment near CHH-3 Circle where beginners and lifters train side by side.',
      image:
        'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=2070&auto=format&fit=crop',
    },
  ];

  return (
    <section className="relative py-14 sm:py-16 bg-[#08080a] overflow-hidden border-b border-zinc-900">
      <div className="absolute inset-0 bg-noise opacity-20 pointer-events-none" />

      {/* Small Floating Fitness Items */}
      <WhyUsFloatingGraphics />

      {/* Giant Transparent "02" Background Number */}
      <div className="absolute right-4 top-1/2 -translate-y-1/2 text-[16rem] sm:text-[24rem] font-display font-extrabold text-white/[0.02] select-none pointer-events-none z-0">
        02
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <GSAPOneTimeBrandReveal>
          {/* Animated Red Drawing Line */}
          <div className="w-full h-[2px] bg-gradient-to-r from-red-600 via-red-500 to-transparent mb-8 shadow-[0_0_15px_#e50914]" />

          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-red-600/10 border border-red-600/30 text-red-500 text-xs font-mono tracking-widest uppercase mb-3">
                // WHY CHOOSE HOME 4 FITNESS
              </div>
              <EditorialHeadingReveal
                as="h2"
                text="THE STANDARDS THAT"
                redText="DEFINE US."
                className="text-3xl sm:text-5xl"
              />
            </div>

            <button
              onClick={() => onNavigate('why-us')}
              className="group flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-red-500 hover:text-white transition-colors cursor-pointer"
            >
              <span>LEARN MORE ABOUT US</span>
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </button>
          </div>

          {/* Interactive Split Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* LEFT: VERTICAL INTERACTIVE LIST */}
            <div className="lg:col-span-7 space-y-4">
              {whyUsItems.map((item) => {
                const isActive = activeId === item.id;
                return (
                  <div
                    key={item.id}
                    onMouseEnter={() => setActiveId(item.id)}
                    onClick={() => setActiveId(item.id)}
                    className={`group relative cursor-pointer p-6 transition-all duration-500 border ${
                      isActive
                        ? 'bg-zinc-900/90 border-red-600 shadow-[0_0_30px_rgba(229,9,20,0.25)] translate-x-2'
                        : 'bg-zinc-950/60 border-zinc-800/80 hover:border-zinc-700 hover:bg-zinc-900/40'
                    }`}
                  >
                    {/* Expanding Red Line */}
                    <div
                      className={`absolute left-0 top-0 bottom-0 w-1 bg-red-600 transition-all duration-300 ${
                        isActive ? 'opacity-100 shadow-[0_0_15px_#e50914]' : 'opacity-0'
                      }`}
                    />

                    <div className="flex items-start justify-between gap-4">
                      <div className="flex items-center gap-4">
                        <span
                          className={`text-3xl sm:text-4xl font-display font-extrabold transition-all duration-300 ${
                            isActive ? 'text-red-500 scale-110' : 'text-zinc-600 group-hover:text-zinc-400'
                          }`}
                        >
                          {item.number}
                        </span>
                        <div>
                          <h3
                            className={`text-lg sm:text-xl font-display font-extrabold uppercase tracking-tight transition-colors ${
                              isActive ? 'text-white' : 'text-zinc-300 group-hover:text-white'
                            }`}
                          >
                            {item.title}
                          </h3>
                          <p className="text-xs font-mono text-zinc-400 mt-0.5">{item.subtitle}</p>
                        </div>
                      </div>
                    </div>

                    {/* Active Description Collapse */}
                    {isActive && (
                      <p className="text-sm text-zinc-300 mt-4 pt-4 border-t border-zinc-800 leading-relaxed animate-fadeIn">
                        {item.description}
                      </p>
                    )}
                  </div>
                );
              })}
            </div>

            {/* RIGHT: DYNAMIC BACKGROUND IMAGE PREVIEW */}
            <div className="lg:col-span-5 relative">
              <div className="relative aspect-square w-full overflow-hidden border border-zinc-800 bg-zinc-900 corner-brackets shadow-2xl">
                {whyUsItems.map((item) => (
                  <img
                    key={item.id}
                    src={item.image}
                    alt={item.title}
                    className={`absolute inset-0 w-full h-full object-cover filter brightness-[0.7] contrast-[1.2] transition-all duration-500 ease-out ${
                      activeId === item.id ? 'opacity-100 scale-105' : 'opacity-0 scale-95 pointer-events-none'
                    }`}
                  />
                ))}

                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/30 pointer-events-none" />

                <div className="absolute bottom-4 left-4 right-4 p-4 bg-zinc-950/85 backdrop-blur-md border border-zinc-800">
                  <span className="text-[10px] font-mono text-red-500 tracking-widest uppercase block mb-1">
                    HOME 4 FITNESS HIGHLIGHT
                  </span>
                  <span className="text-sm font-bold text-white uppercase tracking-wider">
                    {whyUsItems[activeId].title}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </GSAPOneTimeBrandReveal>
      </div>
    </section>
  );
};
