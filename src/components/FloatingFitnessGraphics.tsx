import React, { useEffect, useState } from 'react';

// ================= INDIVIDUAL FLOATING FITNESS ITEM DEFINITION =================
interface FloatingItemProps {
  type: 'dumbbell' | 'plate' | 'kettlebell' | 'barbell' | 'handle';
  size?: number; // width in px
  position: {
    top?: string;
    bottom?: string;
    left?: string;
    right?: string;
  };
  floatDuration?: string; // e.g. '8s'
  rotationDeg?: number;
  scrollSpeed?: number; // parallax factor e.g. -0.15
  className?: string;
}

export const FloatingFitnessItem: React.FC<FloatingItemProps> = ({
  type,
  size = 70,
  position,
  floatDuration = '9s',
  rotationDeg = 0,
  scrollSpeed = -0.2,
  className = '',
}) => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const parallaxY = scrollY * scrollSpeed;

  return (
    <div
      className={`absolute pointer-events-none z-10 select-none hidden sm:block ${className}`}
      style={{
        ...position,
        transform: `translateY(${parallaxY}px) rotate(${rotationDeg}deg)`,
        transition: 'transform 0.1s ease-out',
      }}
    >
      <div
        className="animate-float-subtle filter drop-shadow-[0_12px_24px_rgba(229,9,20,0.25)]"
        style={{
          animationDuration: floatDuration,
          width: `${size}px`,
          height: 'auto',
        }}
      >
        {type === 'dumbbell' && (
          <svg viewBox="0 0 200 100" fill="none" className="w-full h-auto opacity-80 hover:opacity-100 transition-opacity">
            <defs>
              <linearGradient id="dbSteel" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#4a4a52" />
                <stop offset="50%" stopColor="#1a1a20" />
                <stop offset="100%" stopColor="#8a8a96" />
              </linearGradient>
              <linearGradient id="dbRed" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#ff1e27" />
                <stop offset="100%" stopColor="#990007" />
              </linearGradient>
            </defs>
            <rect x="70" y="45" width="60" height="10" rx="2" fill="url(#dbSteel)" />
            <rect x="30" y="20" width="40" height="60" rx="8" fill="#18181f" stroke="#333" strokeWidth="1.5" />
            <rect x="65" y="22" width="5" height="56" rx="1.5" fill="url(#dbRed)" />
            <rect x="130" y="20" width="40" height="60" rx="8" fill="#18181f" stroke="#333" strokeWidth="1.5" />
            <rect x="130" y="22" width="5" height="56" rx="1.5" fill="url(#dbRed)" />
          </svg>
        )}

        {type === 'plate' && (
          <svg viewBox="0 0 160 160" fill="none" className="w-full h-auto opacity-80">
            <defs>
              <radialGradient id="pltGrad" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#3a3a42" />
                <stop offset="60%" stopColor="#18181f" />
                <stop offset="100%" stopColor="#08080a" />
              </radialGradient>
              <linearGradient id="pltRed" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#e50914" />
                <stop offset="100%" stopColor="#880006" />
              </linearGradient>
            </defs>
            <circle cx="80" cy="80" r="72" fill="url(#pltGrad)" stroke="#3a3a42" strokeWidth="2" />
            <circle cx="80" cy="80" r="68" stroke="url(#pltRed)" strokeWidth="2" opacity="0.9" />
            <circle cx="80" cy="80" r="46" fill="#121217" stroke="#25252e" strokeWidth="1.5" />
            <circle cx="80" cy="80" r="14" fill="#4a4a52" stroke="#1e1e24" strokeWidth="1.5" />
            <circle cx="80" cy="80" r="10" fill="#050507" />
          </svg>
        )}

        {type === 'kettlebell' && (
          <svg viewBox="0 0 140 180" fill="none" className="w-full h-auto opacity-80">
            <defs>
              <radialGradient id="kbGrad" cx="45%" cy="45%" r="55%">
                <stop offset="0%" stopColor="#4a4a54" />
                <stop offset="60%" stopColor="#18181f" />
                <stop offset="100%" stopColor="#08080a" />
              </radialGradient>
            </defs>
            <path d="M 35 70 C 35 15, 105 15, 105 70" stroke="#3a3a42" strokeWidth="14" strokeLinecap="round" fill="none" />
            <path d="M 35 70 C 35 15, 105 15, 105 70" stroke="#e50914" strokeWidth="4" strokeLinecap="round" fill="none" opacity="0.8" />
            <circle cx="70" cy="110" r="55" fill="url(#kbGrad)" stroke="#3a3a42" strokeWidth="2" />
          </svg>
        )}

        {type === 'barbell' && (
          <svg viewBox="0 0 240 80" fill="none" className="w-full h-auto opacity-85">
            <rect x="20" y="36" width="200" height="8" rx="2" fill="#5a5a65" stroke="#111" strokeWidth="1" />
            <rect x="35" y="10" width="10" height="60" rx="2" fill="#1e1e24" stroke="#333" strokeWidth="1" />
            <rect x="47" y="16" width="8" height="48" rx="2" fill="#e50914" />
            <rect x="195" y="10" width="10" height="60" rx="2" fill="#1e1e24" stroke="#333" strokeWidth="1" />
            <rect x="185" y="16" width="8" height="48" rx="2" fill="#e50914" />
          </svg>
        )}

        {type === 'handle' && (
          <svg viewBox="0 0 120 120" fill="none" className="w-full h-auto opacity-75">
            <path d="M 20 60 C 20 20, 100 20, 100 60" stroke="#4a4a52" strokeWidth="8" strokeLinecap="round" fill="none" />
            <rect x="40" y="55" width="40" height="12" rx="3" fill="#e50914" />
          </svg>
        )}
      </div>
    </div>
  );
};

// ================= HERO SECTION FLOATING GRAPHICS LAYER =================
export const HeroFloatingGraphics: React.FC = () => {
  return (
    <>
      {/* Top Right Floating Plate */}
      <FloatingFitnessItem
        type="plate"
        size={85}
        position={{ top: '14%', right: '6%' }}
        floatDuration="8s"
        rotationDeg={15}
        scrollSpeed={-0.12}
      />
      {/* Middle Left Floating Dumbbell */}
      <FloatingFitnessItem
        type="dumbbell"
        size={95}
        position={{ top: '48%', left: '4%' }}
        floatDuration="11s"
        rotationDeg={-25}
        scrollSpeed={-0.18}
      />
      {/* Bottom Right Floating Kettlebell */}
      <FloatingFitnessItem
        type="kettlebell"
        size={75}
        position={{ bottom: '15%', right: '8%' }}
        floatDuration="9s"
        rotationDeg={12}
        scrollSpeed={-0.22}
      />
    </>
  );
};

// ================= BRAND ABOUT SECTION FLOATING GRAPHICS LAYER =================
export const AboutFloatingGraphics: React.FC = () => {
  return (
    <>
      {/* Top Left Floating Barbell Segment */}
      <FloatingFitnessItem
        type="barbell"
        size={110}
        position={{ top: '10%', left: '3%' }}
        floatDuration="10s"
        rotationDeg={-12}
        scrollSpeed={-0.15}
      />
      {/* Bottom Right Floating Weight Plate */}
      <FloatingFitnessItem
        type="plate"
        size={75}
        position={{ bottom: '12%', right: '5%' }}
        floatDuration="13s"
        rotationDeg={35}
        scrollSpeed={-0.2}
      />
    </>
  );
};

// ================= WHY US SECTION FLOATING GRAPHICS LAYER =================
export const WhyUsFloatingGraphics: React.FC = () => {
  return (
    <>
      {/* Top Right Floating Kettlebell */}
      <FloatingFitnessItem
        type="kettlebell"
        size={80}
        position={{ top: '12%', right: '4%' }}
        floatDuration="7s"
        rotationDeg={-15}
        scrollSpeed={-0.14}
      />
      {/* Middle Left Floating Cable Handle */}
      <FloatingFitnessItem
        type="handle"
        size={65}
        position={{ top: '55%', left: '3%' }}
        floatDuration="12s"
        rotationDeg={20}
        scrollSpeed={-0.18}
      />
    </>
  );
};

// ================= PROGRAMS SECTION FLOATING GRAPHICS LAYER =================
export const ProgramsFloatingGraphics: React.FC = () => {
  return (
    <>
      {/* Top Left Floating Dumbbell */}
      <FloatingFitnessItem
        type="dumbbell"
        size={90}
        position={{ top: '8%', left: '4%' }}
        floatDuration="9s"
        rotationDeg={18}
        scrollSpeed={-0.16}
      />
      {/* Bottom Right Floating Barbell */}
      <FloatingFitnessItem
        type="barbell"
        size={115}
        position={{ bottom: '10%', right: '5%' }}
        floatDuration="11s"
        rotationDeg={-20}
        scrollSpeed={-0.22}
      />
    </>
  );
};
