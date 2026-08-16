import React from 'react';
import { Logo } from './Logo';
import { Phone, MapPin, Instagram, ArrowUpRight, MessageCircle } from 'lucide-react';

interface FooterProps {
  onNavigate: (view: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="relative bg-[#050507] text-white pt-24 pb-12 overflow-hidden border-t border-zinc-900">
      {/* PRE-FOOTER VISUAL LEAD-IN TYPOGRAPHY */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pb-16 border-b border-zinc-900/80 relative z-10">
        <span className="text-xs font-mono text-red-500 tracking-widest uppercase block mb-3">
          // HOME 4 FITNESS SECTOR 8 GANDHINAGAR
        </span>
        <h2 className="text-4xl sm:text-7xl font-display font-extrabold tracking-tighter uppercase text-white leading-none">
          MORE THAN <span className="text-red-600">JUST A GYM.</span>
        </h2>
      </div>

      {/* GIANT LOW-OPACITY BACKGROUND WORD "FITNESS" */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 text-[14rem] sm:text-[22rem] lg:text-[28rem] font-display font-extrabold text-white/[0.02] select-none pointer-events-none z-0 leading-none uppercase">
        FITNESS
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
          {/* Col 1: Logo & Brand Description */}
          <div className="md:col-span-5 space-y-4">
            <Logo size="lg" />
            <p className="text-xs font-mono text-red-500 uppercase tracking-widest pt-2">
              // SECTOR 8 · GANDHINAGAR
            </p>
            <p className="text-zinc-400 text-sm max-w-sm leading-relaxed">
              Sector 8 Gandhinagar's premier athletic fitness center. Conveniently located near CHH-3 Circle for workout routines, cardio, and athletic consistency.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href="tel:07575040440"
                className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white font-bold text-xs uppercase tracking-widest flex items-center gap-2 transition-colors"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>075750 40440</span>
              </a>
              <a
                href="https://wa.me/917575040440"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-emerald-950 border border-emerald-800 text-emerald-400 hover:text-white font-bold text-xs uppercase tracking-widest flex items-center gap-2 transition-colors"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>WHATSAPP</span>
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-zinc-300">
              NAVIGATION
            </h4>
            <ul className="space-y-2 text-xs font-semibold tracking-wider text-zinc-400">
              {['home', 'about', 'why-us', 'programs', 'gallery', 'transformations', 'testimonials', 'contact'].map((id) => (
                <li key={id}>
                  <button
                    onClick={() => onNavigate(id)}
                    className="hover:text-red-500 transition-colors uppercase"
                  >
                    {id.replace('-', ' ')}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Contact Info & Address */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-zinc-300">
              LOCATION & ADDRESS
            </h4>

            <div className="space-y-3 text-xs font-mono text-zinc-400">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                <span className="leading-relaxed">
                  Oppo Birsamunda Bhavan, Sports Academy, Near CHH-3 Circle, Sector 8, Gandhinagar, Gujarat 382008
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-red-500 shrink-0" />
                <a href="tel:07575040440" className="hover:text-white transition-colors">
                  075750 40440
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Instagram className="w-4 h-4 text-red-500 shrink-0" />
                <a
                  href="https://instagram.com/home4fitness_gandhinagar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors flex items-center gap-1"
                >
                  <span>@home4fitness_gandhinagar</span>
                  <ArrowUpRight className="w-3 h-3 text-red-500" />
                </a>
              </div>
            </div>

            <div className="pt-2">
              <a
                href="https://maps.google.com/?q=Home+4+Fitness+Sector+8+Gandhinagar"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full py-3 bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 text-white font-extrabold text-xs uppercase tracking-widest text-center transition-all"
              >
                GET DIRECTIONS ON MAP →
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Copyright Bar */}
        <div className="pt-8 border-t border-zinc-900 flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-zinc-500 gap-4">
          <p>© {new Date().getFullYear()} HOME 4 FITNESS. ALL RIGHTS RESERVED.</p>
          <p className="text-zinc-600 uppercase">SECTOR 8 · GANDHINAGAR · GUJARAT 382008</p>
        </div>
      </div>
    </footer>
  );
};
