import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

interface GSAPOneTimeBrandRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export const GSAPOneTimeBrandReveal: React.FC<GSAPOneTimeBrandRevealProps> = ({
  children,
  className = '',
  delay = 0,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    const el = containerRef.current;

    // ONE-TIME SECTION ENTRANCE REVEAL (Plays once when entering viewport and stays stable)
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        delay,
        scrollTrigger: {
          trigger: el,
          start: 'top 88%',
          toggleActions: 'play none none none',
          once: true, // PLAYS ONCE AND STAYS STABLE
        },
      });

      // 1. Container & Main Cards
      tl.fromTo(
        el,
        { opacity: 0, y: 50, scale: 0.98 },
        { opacity: 1, y: 0, scale: 1.0, duration: 0.9, ease: 'power3.out' },
        0
      );

      // 2. Red Line Accents Draw
      const redLines = el.querySelectorAll('.shadow-\\[0_0_15px_\\#e50914\\], .shadow-\\[0_0_20px_\\#e50914\\]');
      if (redLines.length > 0) {
        tl.fromTo(
          redLines,
          { scaleX: 0, transformOrigin: 'left center' },
          { scaleX: 1, duration: 0.7, ease: 'power3.out' },
          0.1
        );
      }

      // 3. Gym Photographs Clip Reveal
      const images = el.querySelectorAll('img');
      if (images.length > 0) {
        tl.fromTo(
          images,
          { clipPath: 'inset(12% 0% 0% 0%)', scale: 1.08, opacity: 0, y: 40 },
          { clipPath: 'inset(0% 0% 0% 0%)', scale: 1.0, opacity: 1, y: 0, duration: 1.1, ease: 'power3.out' },
          0.15
        );
      }

      // 4. Cards & Action Items Stagger
      const cards = el.querySelectorAll('.corner-brackets, .group');
      if (cards.length > 0) {
        tl.fromTo(
          cards,
          { y: 35, opacity: 0, scale: 0.97 },
          { y: 0, opacity: 1, scale: 1, stagger: 0.08, duration: 0.8, ease: 'power3.out' },
          0.2
        );
      }
    }, el);

    return () => ctx.revert();
  }, [delay]);

  return (
    <div ref={containerRef} className={`will-change-transform ${className}`}>
      {children}
    </div>
  );
};
