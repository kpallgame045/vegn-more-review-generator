import React, { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { GSAPOneTimeBrandReveal } from './GSAPOneTimeBrandReveal';
import { EditorialHeadingReveal } from './EditorialHeadingReveal';

interface StickyStorySectionProps {
  onNavigate: (view: string) => void;
}

export const StickyStorySection: React.FC<StickyStorySectionProps> = ({ onNavigate }) => {
  const [activeFrame, setActiveFrame] = useState(0);

  const frames = [
    {
      id: 0,
      step: '01',
      title: 'TRAIN WITH PURPOSE',
      subtitle: 'CONSISTENCY & DISCIPLINE',
      description:
        'Home 4 Fitness near CHH-3 Circle in Sector 8 Gandhinagar is designed to provide a structured, distraction-free environment for weight training, stamina, and physical endurance.',
      image:
        'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop',
    },
    {
      id: 1,
      step: '02',
      title: 'EQUIPMENT & FOCUS',
      subtitle: 'HIGH PERFORMANCE SPACE',
      description:
        'Featuring dedicated floors for heavy strength training, free weights, resistance machines, and cardio zones engineered for consistent daily progress.',
      image:
        'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=2070&auto=format&fit=crop',
    },
    {
      id: 2,
      step: '03',
      title: 'YOUR FITNESS JOURNEY',
      subtitle: 'SECTOR 8 GANDHINAGAR',
      description:
        'Whether you are building fundamental fitness habits or pushing heavy training, Home 4 Fitness is built for every step of your athletic growth.',
      image:
        'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=2070&auto=format&fit=crop',
    },
  ];

  return (
    <section className="relative py-14 sm:py-16 bg-[#08080a] overflow-hidden border-b border-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <GSAPOneTimeBrandReveal>
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-red-600/10 border border-red-600/30 text-red-500 text-xs font-mono tracking-widest uppercase mb-3">
                // PHILOSOPHY & STORY
              </div>
              <EditorialHeadingReveal
                as="h2"
                text="THE HOME 4 FITNESS"
                redText="CODE."
                className="text-3xl sm:text-5xl"
              />
            </div>

            {/* Frame Selector Buttons */}
            <div className="flex items-center gap-2">
              {frames.map((frame) => (
                <button
                  key={frame.id}
                  onClick={() => setActiveFrame(frame.id)}
                  className={`px-4 py-2 text-xs font-mono font-bold transition-all cursor-pointer ${
                    activeFrame === frame.id
                      ? 'bg-red-600 text-white shadow-[0_0_15px_rgba(229,9,20,0.5)]'
                      : 'bg-zinc-900 text-zinc-400 border border-zinc-800 hover:text-white'
                  }`}
                >
                  FRAME {frame.step}
                </button>
              ))}
            </div>
          </div>

          {/* Active Story Frame Content */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-zinc-950 border border-zinc-800/80 p-6 sm:p-10 corner-brackets">
            {/* LEFT: TEXT DESCRIPTION */}
            <div className="lg:col-span-6 space-y-6">
              <div className="flex items-center gap-3">
                <span className="text-5xl sm:text-6xl font-display font-extrabold text-red-500">
                  {frames[activeFrame].step}
                </span>
                <div>
                  <span className="text-xs font-mono text-zinc-400 uppercase tracking-widest block">
                    {frames[activeFrame].subtitle}
                  </span>
                  <h3 className="text-2xl sm:text-4xl font-display font-extrabold uppercase text-white tracking-tight">
                    {frames[activeFrame].title}
                  </h3>
                </div>
              </div>

              <p className="text-zinc-300 text-base leading-relaxed">
                {frames[activeFrame].description}
              </p>

              <div className="pt-2">
                <button
                  onClick={() => onNavigate('why-us')}
                  className="group inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-widest text-red-500 hover:text-white transition-colors cursor-pointer"
                >
                  <span>READ PHILOSOPHY</span>
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </button>
              </div>
            </div>

            {/* RIGHT: STORY IMAGE PREVIEW */}
            <div className="lg:col-span-6 relative aspect-[16/10] overflow-hidden bg-zinc-900 border border-zinc-800">
              <img
                src={frames[activeFrame].image}
                alt={frames[activeFrame].title}
                className="w-full h-full object-cover filter brightness-[0.7] contrast-[1.2] transition-all duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
            </div>
          </div>
        </GSAPOneTimeBrandReveal>
      </div>
    </section>
  );
};
