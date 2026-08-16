import React from 'react';
import { ArrowUpRight, MapPin, Phone, MessageSquare } from 'lucide-react';
import { GSAPOneTimeBrandReveal } from './GSAPOneTimeBrandReveal';
import { EditorialHeadingReveal } from './EditorialHeadingReveal';

interface FinalCTASectionProps {
  onNavigate: (view: string) => void;
}

export const FinalCTASection: React.FC<FinalCTASectionProps> = ({ onNavigate }) => {
  return (
    <section className="relative py-16 sm:py-20 bg-black overflow-hidden border-b border-zinc-900">
      {/* Animated Red Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-red-600/25 rounded-full blur-[150px] animate-red-pulse pointer-events-none" />
      <div className="absolute inset-0 bg-noise opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <GSAPOneTimeBrandReveal>
          {/* Tag */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-red-600/10 border border-red-600/40 text-red-500 text-xs font-mono tracking-widest uppercase mb-6">
            <span className="w-2 h-2 rounded-full bg-red-600 animate-ping" />
            // START YOUR FITNESS JOURNEY NOW
          </div>

          {/* Masked Editorial Headline */}
          <div className="mb-6">
            <EditorialHeadingReveal
              as="h2"
              text="READY TO"
              redText="MAKE IT COUNT?"
              className="text-4xl sm:text-7xl md:text-8xl justify-center text-center"
            />
          </div>

          <p className="text-zinc-300 text-sm sm:text-lg max-w-xl mx-auto font-normal leading-relaxed mb-10">
            Visit Home 4 Fitness in Sector 8, Gandhinagar or connect directly with our team to start your workout routine today.
          </p>

          {/* Direct Action Conversion Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
            <a
              href="tel:07575040440"
              className="group px-8 py-4 bg-red-600 hover:bg-red-700 text-white font-extrabold text-xs sm:text-sm uppercase tracking-widest transition-all duration-300 shadow-[0_0_40px_rgba(229,9,20,0.6)] hover:shadow-[0_0_60px_rgba(229,9,20,0.9)] flex items-center gap-2"
            >
              <Phone className="w-4 h-4" />
              <span>CALL: 075750 40440</span>
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </a>

            <a
              href="https://wa.me/917575040440"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-xs sm:text-sm uppercase tracking-widest transition-all duration-300 shadow-[0_0_30px_rgba(16,185,129,0.4)] flex items-center gap-2"
            >
              <MessageSquare className="w-4 h-4" />
              <span>WHATSAPP US</span>
            </a>

            <button
              onClick={() => onNavigate('location')}
              className="px-8 py-4 bg-zinc-900 hover:bg-zinc-800 text-zinc-200 hover:text-white font-bold text-xs sm:text-sm uppercase tracking-widest border border-zinc-700 transition-all duration-300 flex items-center gap-2 cursor-pointer"
            >
              <MapPin className="w-4 h-4 text-red-500" />
              <span>GET DIRECTIONS</span>
            </button>
          </div>
        </GSAPOneTimeBrandReveal>
      </div>
    </section>
  );
};
