import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

interface GSAPScrollScrubSectionProps {
  children: React.ReactNode;
  className?: string;
}

export const GSAPScrollScrubSection: React.FC<GSAPScrollScrubSectionProps> = ({
  children,
  className = '',
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    const el = containerRef.current;

    // Create scrubbed GSAP timeline for continuous scroll-linked animation
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: el,
          start: 'top 92%',
          end: 'top 20%',
          scrub: 0.8, // Continuous scrub tied 1:1 to scroll position (scroll down -> moves up, scroll up -> moves back down)
          invalidateOnRefresh: true,
        },
      });

      // 1. Main Container Entrance from Below
      tl.fromTo(
        el,
        {
          y: 90,
          opacity: 0.1,
          scale: 0.97,
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 1,
          ease: 'power2.out',
        },
        0
      );

      // 2. Headings & Subheadings
      const headings = el.querySelectorAll('h1, h2, h3, .scrub-text');
      if (headings.length > 0) {
        tl.fromTo(
          headings,
          { y: 50, opacity: 0 },
          { y: 0, opacity: 1, stagger: 0.15, duration: 0.8, ease: 'power2.out' },
          0.1
        );
      }

      // 3. Red Drawing Lines
      const redLines = el.querySelectorAll('.shadow-\\[0_0_15px_\\#e50914\\], .shadow-\\[0_0_20px_\\#e50914\\]');
      if (redLines.length > 0) {
        tl.fromTo(
          redLines,
          { scaleX: 0, transformOrigin: 'left center' },
          { scaleX: 1, duration: 0.9, ease: 'power2.out' },
          0.1
        );
      }

      // 4. Gym Images Clip-Path & Scale
      const images = el.querySelectorAll('img');
      if (images.length > 0) {
        tl.fromTo(
          images,
          { y: 60, scale: 1.08, opacity: 0.4 },
          { y: 0, scale: 1.0, opacity: 1, duration: 1, ease: 'power2.out' },
          0.15
        );
      }

      // 5. Cards & Action Grid Items
      const cards = el.querySelectorAll('.corner-brackets, .group');
      if (cards.length > 0) {
        tl.fromTo(
          cards,
          { y: 45, opacity: 0.2 },
          { y: 0, opacity: 1, stagger: 0.1, duration: 0.8, ease: 'power2.out' },
          0.2
        );
      }
    }, el);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className={`will-change-transform ${className}`}>
      {children}
    </div>
  );
};
