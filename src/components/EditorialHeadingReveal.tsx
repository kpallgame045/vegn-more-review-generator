import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

interface EditorialHeadingRevealProps {
  text: string;
  redText?: string;
  className?: string;
  as?: 'h1' | 'h2' | 'h3';
}

export const EditorialHeadingReveal: React.FC<EditorialHeadingRevealProps> = ({
  text,
  redText = '',
  className = '',
  as = 'h2',
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    const el = containerRef.current;
    const targets = el.querySelectorAll('.editorial-mask-content');

    if (targets.length === 0) return;

    // ONE-TIME GSAP reveal timeline (plays once when scrolled into view and stays stable)
    const ctx = gsap.context(() => {
      gsap.fromTo(
        targets,
        {
          clipPath: 'inset(100% 0% 0% 0%)',
          y: 45,
          opacity: 0,
          scale: 1.04,
        },
        {
          clipPath: 'inset(0% 0% 0% 0%)',
          y: 0,
          opacity: 1,
          scale: 1.0,
          stagger: 0.12,
          duration: 1.0,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 88%',
            toggleActions: 'play none none none',
            once: true, // PLAYS ONCE AND STAYS STABLE
          },
        }
      );
    }, el);

    return () => ctx.revert();
  }, [text, redText]);

  const Tag = as;

  return (
    <div ref={containerRef} className="overflow-hidden py-1">
      <Tag className={`font-display font-extrabold uppercase tracking-tighter leading-[0.92] ${className}`}>
        <div className="overflow-hidden mb-1">
          <span className="editorial-mask-content inline-block text-white transform-gpu will-change-transform">
            {text}
          </span>
        </div>
        {redText && (
          <div className="overflow-hidden">
            <span className="editorial-mask-content inline-block text-red-600 text-stroke-red drop-shadow-[0_0_35px_rgba(229,9,20,0.7)] transform-gpu will-change-transform">
              {redText}
            </span>
          </div>
        )}
      </Tag>
    </div>
  );
};
