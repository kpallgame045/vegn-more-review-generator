import React, { useEffect, useState } from 'react';

interface RedPageTransitionProps {
  isNavigating: boolean;
  onTransitionComplete?: () => void;
}

export const RedPageTransition: React.FC<RedPageTransitionProps> = ({
  isNavigating,
  onTransitionComplete,
}) => {
  const [active, setActive] = useState(false);

  useEffect(() => {
    if (isNavigating) {
      setActive(true);
      const timer = setTimeout(() => {
        if (onTransitionComplete) onTransitionComplete();
        setTimeout(() => setActive(false), 200);
      }, 250);
      return () => clearTimeout(timer);
    }
  }, [isNavigating, onTransitionComplete]);

  if (!active && !isNavigating) return null;

  return (
    <div className="fixed inset-0 z-[120] pointer-events-none overflow-hidden flex items-center justify-center">
      {/* High Speed Red Horizontal Swipe Bar */}
      <div
        className={`w-full h-1.5 bg-red-600 shadow-[0_0_30px_#e50914] transition-all duration-300 ease-out transform ${
          isNavigating ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'
        }`}
      />
      {/* Subtle Instant Flash Tint */}
      <div
        className={`absolute inset-0 bg-red-600/10 transition-opacity duration-200 ${
          isNavigating ? 'opacity-100' : 'opacity-0'
        }`}
      />
    </div>
  );
};
