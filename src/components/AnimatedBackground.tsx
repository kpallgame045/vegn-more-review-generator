import React from 'react';

export const AnimatedBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0 select-none">
      {/* Background Soft Glow Orbs */}
      <div className="absolute top-1/4 left-1/6 w-96 h-96 rounded-full bg-brand-700/5 blur-3xl animate-glow-pulse"></div>
      <div className="absolute bottom-1/3 right-1/6 w-[30rem] h-[30rem] rounded-full bg-emerald-500/5 blur-3xl animate-glow-pulse" style={{ animationDelay: '2s' }}></div>

      {/* Floating Produce Vector SVGs */}
      
      {/* 1. Tomato */}
      <div className="absolute top-[8%] left-[5%] md:left-[8%] opacity-30 md:opacity-40 animate-float-slow transform hover:scale-110 transition-transform">
        <svg className="w-12 h-12 md:w-16 md:h-16" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="32" cy="36" r="22" fill="#E53E3E" />
          <circle cx="26" cy="30" r="4" fill="#FEB2B2" opacity="0.6" />
          <path d="M32 14C32 14 36 8 42 10C40 16 34 16 34 16" stroke="#2F855A" strokeWidth="3" strokeLinecap="round" />
          <path d="M32 14C32 14 28 8 22 10C24 16 30 16 30 16" stroke="#2F855A" strokeWidth="3" strokeLinecap="round" />
          <path d="M32 14V8" stroke="#2F855A" strokeWidth="3" strokeLinecap="round" />
        </svg>
      </div>

      {/* 2. Onion */}
      <div className="absolute top-[18%] right-[6%] md:right-[10%] opacity-25 md:opacity-35 animate-float-medium transform hover:scale-110 transition-transform" style={{ animationDelay: '1s' }}>
        <svg className="w-10 h-10 md:w-14 md:h-14" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M32 10C20 22 14 32 14 42C14 52 22 58 32 58C42 58 50 52 50 42C50 32 44 22 32 10Z" fill="#9B2C2C" opacity="0.85" />
          <path d="M32 10V58" stroke="#FEB2B2" strokeWidth="2" strokeDasharray="3 3" opacity="0.6" />
          <path d="M22 24C20 34 22 46 32 56" stroke="#FEB2B2" strokeWidth="1.5" opacity="0.5" />
          <path d="M42 24C44 34 42 46 32 56" stroke="#FEB2B2" strokeWidth="1.5" opacity="0.5" />
        </svg>
      </div>

      {/* 3. Carrot */}
      <div className="absolute bottom-[22%] left-[4%] md:left-[7%] opacity-25 md:opacity-35 animate-float-fast transform -rotate-45" style={{ animationDelay: '1.5s' }}>
        <svg className="w-12 h-12 md:w-16 md:h-16" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M46 16L18 48C16 50 12 50 12 48C12 46 14 42 16 40L42 14L46 16Z" fill="#DD6B20" />
          <path d="M42 14L50 6M44 16L54 10M46 18L52 16" stroke="#2F855A" strokeWidth="2.5" strokeLinecap="round" />
          <path d="M24 38L30 36M28 32L34 30M32 26L38 24" stroke="#FBD38D" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      </div>

      {/* 4. Potato */}
      <div className="hidden md:block absolute top-[55%] right-[5%] opacity-25 animate-float-slow transform rotate-12" style={{ animationDelay: '2.5s' }}>
        <svg className="w-14 h-14" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M16 32C14 20 26 12 38 14C48 16 54 26 52 38C50 48 38 54 26 52C16 50 18 40 16 32Z" fill="#D69E2E" opacity="0.8" />
          <circle cx="28" cy="26" r="1.5" fill="#744210" />
          <circle cx="38" cy="36" r="1.5" fill="#744210" />
          <circle cx="24" cy="42" r="1" fill="#744210" />
        </svg>
      </div>

      {/* 5. Brinjal (Eggplant) */}
      <div className="absolute top-[35%] left-[3%] md:left-[6%] opacity-25 md:opacity-30 animate-float-medium transform -rotate-12" style={{ animationDelay: '0.8s' }}>
        <svg className="w-12 h-12 md:w-16 md:h-16" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M22 28C22 18 32 12 40 18C48 24 50 38 46 48C42 56 30 58 24 52C18 46 22 36 22 28Z" fill="#553C9A" />
          <path d="M36 14C36 14 42 10 40 6C34 8 32 14 32 14" stroke="#2F855A" strokeWidth="3" strokeLinecap="round" />
          <path d="M30 18C34 16 40 16 42 20C38 22 32 20 30 18Z" fill="#2F855A" />
        </svg>
      </div>

      {/* 6. Capsicum (Bell Pepper) */}
      <div className="hidden md:block absolute bottom-[12%] right-[12%] opacity-30 animate-float-fast transform rotate-6" style={{ animationDelay: '3s' }}>
        <svg className="w-14 h-14" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="16" y="20" width="32" height="36" rx="14" fill="#38A169" />
          <path d="M32 20V10C32 10 36 8 38 10" stroke="#22543D" strokeWidth="3" strokeLinecap="round" />
          <path d="M24 20C24 28 24 44 24 48" stroke="#48BB78" strokeWidth="2" opacity="0.6" />
          <path d="M40 20C40 28 40 44 40 48" stroke="#48BB78" strokeWidth="2" opacity="0.6" />
        </svg>
      </div>

      {/* 7. Apple */}
      <div className="absolute top-[12%] right-[22%] opacity-25 md:opacity-35 animate-float-slow" style={{ animationDelay: '0.4s' }}>
        <svg className="w-10 h-10 md:w-14 md:h-14" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M32 20C26 14 14 18 14 32C14 48 26 54 32 54C38 54 50 48 50 32C50 18 38 14 32 20Z" fill="#C53030" />
          <path d="M32 20V12" stroke="#744210" strokeWidth="2.5" strokeLinecap="round" />
          <path d="M32 14C36 12 40 12 42 14C42 18 36 16 32 14Z" fill="#38A169" />
        </svg>
      </div>

      {/* 8. Orange */}
      <div className="absolute bottom-[35%] right-[4%] opacity-25 md:opacity-35 animate-float-medium" style={{ animationDelay: '1.8s' }}>
        <svg className="w-11 h-11 md:w-15 md:h-15" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="32" cy="34" r="20" fill="#DD6B20" />
          <circle cx="32" cy="34" r="16" stroke="#FBD38D" strokeWidth="1" strokeDasharray="2 4" opacity="0.7" />
          <circle cx="32" cy="14" r="2" fill="#2F855A" />
        </svg>
      </div>

      {/* 9. Banana */}
      <div className="hidden md:block absolute top-[68%] left-[10%] opacity-25 animate-float-fast transform rotate-45" style={{ animationDelay: '2.2s' }}>
        <svg className="w-14 h-14" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M14 42C24 50 44 46 50 20C50 20 42 34 24 32C18 31 14 42 14 42Z" fill="#D69E2E" />
          <path d="M50 20L54 16" stroke="#744210" strokeWidth="3" strokeLinecap="round" />
        </svg>
      </div>

      {/* 10. Mango */}
      <div className="hidden md:block absolute top-[45%] left-[85%] opacity-25 animate-float-slow transform -rotate-12" style={{ animationDelay: '1.2s' }}>
        <svg className="w-14 h-14" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M30 14C18 20 14 36 22 48C30 60 48 54 50 38C52 24 42 12 30 14Z" fill="#E53E3E" opacity="0.9" />
          <path d="M30 14C22 22 18 36 24 46" stroke="#FBD38D" strokeWidth="2" opacity="0.5" />
        </svg>
      </div>

      {/* 11. Grapes */}
      <div className="absolute top-[75%] right-[25%] opacity-20 md:opacity-30 animate-float-medium" style={{ animationDelay: '2.8s' }}>
        <svg className="w-12 h-12 md:w-16 md:h-16" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="32" cy="24" r="6" fill="#6B46C1" />
          <circle cx="22" cy="28" r="6" fill="#553C9A" />
          <circle cx="42" cy="28" r="6" fill="#553C9A" />
          <circle cx="27" cy="38" r="6" fill="#4C1D95" />
          <circle cx="37" cy="38" r="6" fill="#4C1D95" />
          <circle cx="32" cy="48" r="5" fill="#3B0764" />
          <path d="M32 18V10C32 10 36 8 40 10" stroke="#2F855A" strokeWidth="2" strokeLinecap="round" />
        </svg>
      </div>

      {/* 12. Floating Leaves */}
      <div className="absolute top-[28%] left-[18%] opacity-30 animate-spin-slow">
        <svg className="w-8 h-8 md:w-10 md:h-10" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M18 4C18 4 30 10 30 22C30 30 22 32 18 32C14 32 6 30 6 22C6 10 18 4 18 4Z" fill="#10B981" opacity="0.7" />
          <path d="M18 4V32" stroke="#047857" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      </div>
      <div className="absolute bottom-[28%] right-[18%] opacity-25 animate-spin-slow" style={{ animationDirection: 'reverse' }}>
        <svg className="w-7 h-7 md:w-9 md:h-9" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M18 4C18 4 30 10 30 22C30 30 22 32 18 32C14 32 6 30 6 22C6 10 18 4 18 4Z" fill="#059669" opacity="0.7" />
          <path d="M18 4V32" stroke="#047857" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      </div>
    </div>
  );
};
