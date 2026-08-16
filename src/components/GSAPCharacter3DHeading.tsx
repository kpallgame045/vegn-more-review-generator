import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

interface GSAPCharacter3DHeadingProps {
  text: string;
  className?: string;
  highlightWords?: string[];
  redText?: string;
  as?: 'h1' | 'h2' | 'h3';
}

export const GSAPCharacter3DHeading: React.FC<GSAPCharacter3DHeadingProps> = ({
  text,
  className = '',
  highlightWords = [],
  redText = '',
  as = 'h2',
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    const el = containerRef.current;
    const chars = el.querySelectorAll('.char-3d-node');

    if (chars.length === 0) return;

    // Create GSAP ScrollTrigger timeline for 3D character-by-character scrub animation
    const ctx = gsap.context(() => {
      gsap.fromTo(
        chars,
        {
          opacity: 0,
          y: 75,
          rotateX: 70,
          rotateY: -12,
          scale: 0.85,
          filter: 'blur(5px)',
        },
        {
          opacity: 1,
          y: 0,
          rotateX: 0,
          rotateY: 0,
          scale: 1,
          filter: 'blur(0px)',
          stagger: 0.025, // Sequential 3D character reveal
          duration: 1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 92%',
            end: 'top 25%',
            scrub: 0.8, // Reversible on scroll up
            invalidateOnRefresh: true,
          },
        }
      );
    }, el);

    return () => ctx.revert();
  }, [text, redText]);

  // Split full string into words, and words into character spans
  const fullText = redText ? `${text} ${redText}` : text;
  const words = fullText.split(' ');

  const Tag = as;

  return (
    <div ref={containerRef} className="perspective-[1000px] overflow-hidden py-1">
      <Tag className={`font-display font-extrabold uppercase tracking-tighter leading-[0.92] ${className}`}>
        {words.map((word, wordIdx) => {
          const isRed =
            highlightWords.some((hw) => word.toUpperCase().includes(hw.toUpperCase())) ||
            (redText && redText.toUpperCase().includes(word.toUpperCase()));

          return (
            <span key={wordIdx} className="inline-block whitespace-nowrap mr-[0.25em] transform-gpu">
              {word.split('').map((char, charIdx) => (
                <span
                  key={charIdx}
                  className={`char-3d-node inline-block will-change-transform transform-gpu ${
                    isRed
                      ? 'text-red-600 text-stroke-red drop-shadow-[0_0_35px_rgba(229,9,20,0.7)]'
                      : 'text-white'
                  }`}
                  style={{
                    transformStyle: 'preserve-3d',
                  }}
                >
                  {char}
                </span>
              ))}
            </span>
          );
        })}
      </Tag>
    </div>
  );
};
