import React, { useEffect, useRef, useState } from 'react';
import { Menu, X, Phone, ArrowUpRight, MessageCircle } from 'lucide-react';
import { Logo } from './Logo';

interface HeaderProps {
  activeView: string;
  onNavigate: (view: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ activeView, onNavigate }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [tilt, setTilt] = useState({ rotateX: 0, rotateY: 0 });
  const [mounted, setMounted] = useState(false);
  const headerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Subtle 3D Perspective Tilt on Mouse Movement (Max 2.5 deg)
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!headerRef.current) return;
    const rect = headerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    const rotateX = -(y / rect.height) * 2.5;
    const rotateY = (x / rect.width) * 2.5;
    setTilt({ rotateX, rotateY });
  };

  const handleMouseLeave = () => {
    setTilt({ rotateX: 0, rotateY: 0 });
  };

  const navItems = [
    { id: 'home', label: 'HOME' },
    { id: 'about', label: 'ABOUT' },
    { id: 'why-us', label: 'WHY US' },
    { id: 'programs', label: 'PROGRAMS' },
    { id: 'gallery', label: 'GALLERY' },
    { id: 'transformations', label: 'RESULTS' },
    { id: 'testimonials', label: 'REVIEWS' },
    { id: 'contact', label: 'CONTACT' },
  ];

  const handleNavClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-[9999] pointer-events-none px-3 sm:px-6 lg:px-8 pt-3 sm:pt-4">
      {/* FLOATING 3D GLASS NAVIGATION CONTAINER */}
      <div
        ref={headerRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className={`pointer-events-auto max-w-6xl mx-auto rounded-2xl transition-all duration-500 transform ${
          mounted ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-6'
        } ${
          scrolled
            ? 'bg-[#080808]/90 backdrop-blur-xl border border-white/10 shadow-[0_12px_40px_rgba(0,0,0,0.9),0_0_25px_rgba(229,9,20,0.25)] py-2 px-4 sm:px-6 scale-[0.98]'
            : 'bg-[#080808]/75 backdrop-blur-lg border border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.7),0_0_15px_rgba(229,9,20,0.15)] py-3 px-5 sm:px-7 scale-100'
        }`}
        style={{
          perspective: 1000,
          transform: `perspective(1000px) rotateX(${tilt.rotateX}deg) rotateY(${tilt.rotateY}deg) ${
            scrolled ? 'scale(0.98)' : 'scale(1)'
          }`,
        }}
      >
        <div className="flex items-center justify-between gap-4">
          {/* LEFT SIDE: Original Logo with smooth scroll scaling */}
          <div
            onClick={() => handleNavClick('home')}
            className="cursor-pointer flex items-center transition-transform duration-300 hover:scale-105"
          >
            <Logo size={scrolled ? 'sm' : 'md'} variant="horizontal" />
          </div>

          {/* DESKTOP NAV LINKS */}
          <nav className="hidden lg:flex items-center gap-5 xl:gap-6">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`relative text-xs font-semibold tracking-wider transition-all duration-200 py-1 uppercase group hover:-translate-y-0.5 cursor-pointer ${
                  activeView === item.id ? 'text-red-500 font-bold' : 'text-zinc-300 hover:text-white'
                }`}
              >
                {item.label}
                {activeView === item.id ? (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-red-600 shadow-[0_0_12px_#e50914]" />
                ) : (
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-600 transition-all duration-300 group-hover:w-full" />
                )}
              </button>
            ))}
          </nav>

          {/* RIGHT ACTION BUTTONS */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="tel:07575040440"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-900/90 border border-zinc-800 text-xs font-mono text-zinc-300 hover:text-white hover:border-zinc-700 hover:-translate-y-0.5 transition-all"
            >
              <Phone className="w-3.5 h-3.5 text-red-500" />
              <span>075750 40440</span>
            </a>

            <a
              href="https://wa.me/917575040440"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-emerald-950/70 border border-emerald-800/80 text-emerald-400 hover:text-white hover:bg-emerald-900 hover:-translate-y-0.5 transition-all"
              title="WhatsApp Home 4 Fitness"
            >
              <MessageCircle className="w-4 h-4" />
            </a>

            <button
              onClick={() => handleNavClick('join-now')}
              className="relative group overflow-hidden px-5 py-2 bg-red-600 hover:bg-red-700 active:scale-[0.97] text-white text-xs font-extrabold uppercase tracking-widest transition-all duration-300 shadow-[0_0_20px_rgba(229,9,20,0.5)] hover:shadow-[0_0_30px_rgba(229,9,20,0.8)] hover:-translate-y-0.5 flex items-center gap-1 rounded-lg cursor-pointer"
            >
              <span className="relative z-10">CONNECT</span>
              <ArrowUpRight className="w-4 h-4 relative z-10 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
          </div>

          {/* MOBILE MENU HAMBURGER BUTTON */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-zinc-300 hover:text-white bg-zinc-900/90 border border-zinc-800 rounded-lg cursor-pointer"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5 text-red-500" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* MOBILE DROPDOWN MENU */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-3 pt-3 border-t border-zinc-800/80 space-y-2 pb-2">
            <div className="text-[10px] font-mono tracking-widest text-red-500 uppercase px-2 mb-1">
              // HOME 4 FITNESS NAVIGATION
            </div>
            <div className="grid grid-cols-2 gap-1.5">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`text-left text-xs font-display font-extrabold tracking-wider p-2 rounded-md transition-all cursor-pointer ${
                    activeView === item.id
                      ? 'bg-red-600/20 text-red-400 border border-red-600/40'
                      : 'text-zinc-300 hover:bg-zinc-900'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            <div className="pt-2 grid grid-cols-2 gap-2">
              <a
                href="tel:07575040440"
                className="py-2.5 bg-zinc-900 border border-zinc-800 rounded-lg text-white font-bold text-xs uppercase tracking-widest text-center flex items-center justify-center gap-1.5"
              >
                <Phone className="w-3.5 h-3.5 text-red-500" />
                <span>CALL NOW</span>
              </a>
              <a
                href="https://wa.me/917575040440"
                target="_blank"
                rel="noopener noreferrer"
                className="py-2.5 bg-emerald-950 border border-emerald-800 rounded-lg text-emerald-400 font-bold text-xs uppercase tracking-widest text-center flex items-center justify-center gap-1.5"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>WHATSAPP</span>
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
