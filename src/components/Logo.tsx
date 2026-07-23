import React, { useState } from 'react';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'hero';
  showText?: boolean;
}

export const Logo: React.FC<LogoProps> = ({ className = '', size = 'md', showText = true }) => {
  const [imgError, setImgError] = useState(false);

  const sizeClasses = {
    sm: 'w-10 h-10',
    md: 'w-12 h-12 sm:w-14 sm:h-14',
    lg: 'w-16 h-16 sm:w-20 sm:h-20',
    hero: 'w-24 h-24 sm:w-32 sm:h-32 md:w-36 md:h-36',
  };

  return (
    <div className={`inline-flex items-center gap-3 select-none ${className}`}>
      {!imgError ? (
        <div className="relative group">
          <img
            src="/logo.png"
            alt="Veg'n More"
            className={`${sizeClasses[size]} rounded-full object-cover shadow-md shadow-brand-700/15 border-2 border-white transition-all duration-300 group-hover:scale-105 group-hover:shadow-lg group-hover:shadow-brand-700/25`}
            onError={() => setImgError(true)}
          />
        </div>
      ) : (
        <div className={`relative flex items-center justify-center ${sizeClasses[size]} rounded-full bg-gradient-to-br from-brand-700 to-brand-900 shadow-md text-white font-bold border-2 border-white`}>
          <span className="text-sm sm:text-base font-extrabold tracking-tighter">V&M</span>
        </div>
      )}

      {showText && size !== 'hero' && (
        <div className="flex flex-col text-left">
          <span className="font-extrabold tracking-tight text-xl sm:text-2xl text-slate-900 leading-tight">
            Veg'n <span className="text-brand-700">More</span>
          </span>
          <span className="text-[10px] sm:text-xs font-bold tracking-widest text-brand-700/90 uppercase">
            Fresh • Healthy
          </span>
        </div>
      )}
    </div>
  );
};
