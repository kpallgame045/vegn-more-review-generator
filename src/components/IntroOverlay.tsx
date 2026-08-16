import React, { useEffect, useState } from 'react';
import { Logo } from './Logo';

export const IntroOverlay: React.FC = () => {
  const [step, setStep] = useState(1);
  const [complete, setComplete] = useState(false);

  useEffect(() => {
    // Sequence timing (total ~1.2s)
    const timer1 = setTimeout(() => setStep(2), 200); // Logo appears
    const timer2 = setTimeout(() => setStep(3), 500); // Red line draws
    const timer3 = setTimeout(() => setStep(4), 900); // Clip wipe reveal
    const timer4 = setTimeout(() => setComplete(true), 1300); // Finish

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
    };
  }, []);

  if (complete) return null;

  return (
    <div
      className={`fixed inset-0 z-[100] bg-black flex flex-col items-center justify-center transition-all duration-700 ease-in-out ${
        step === 4 ? '-translate-y-full opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      {/* Intro Logo Container */}
      <div
        className={`transition-all duration-500 transform ${
          step >= 2 ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-90 translate-y-4'
        }`}
      >
        <Logo size="hero" />
      </div>

      {/* Red Drawing Line */}
      <div className="w-64 h-0.5 bg-zinc-900 mt-6 relative overflow-hidden">
        <div
          className={`absolute top-0 left-0 h-full bg-red-600 shadow-[0_0_15px_#e50914] transition-all duration-500 ease-out ${
            step >= 3 ? 'w-full' : 'w-0'
          }`}
        />
      </div>

      <span className="text-[10px] uppercase font-mono tracking-widest text-zinc-500 mt-3">
        SECTOR 8 · GANDHINAGAR
      </span>
    </div>
  );
};
