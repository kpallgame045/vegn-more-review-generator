import React, { useEffect, useRef, useState } from 'react';
import { ArrowUpRight, Camera } from 'lucide-react';

interface GallerySectionProps {
  onNavigate: (view: string) => void;
}

export const GallerySection: React.FC<GallerySectionProps> = ({ onNavigate }) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const galleryItems = [
    {
      id: 1,
      title: 'HEAVY WEIGHT FLOOR',
      tag: 'EQUIPMENT',
      size: 'col-span-12 lg:col-span-7 row-span-2 aspect-[16/10]',
      image:
        'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop',
    },
    {
      id: 2,
      title: 'CARDIO & STAMINA ZONE',
      tag: 'ENDURANCE',
      size: 'col-span-6 lg:col-span-5 aspect-square sm:aspect-[16/10]',
      image:
        'https://images.unsplash.com/photo-1538805060514-97d9cc17730c?q=80&w=2070&auto=format&fit=crop',
    },
    {
      id: 3,
      title: 'WORKOUT AREA',
      tag: 'ATHLETIC ZONE',
      size: 'col-span-6 lg:col-span-5 aspect-square sm:aspect-[16/10]',
      image:
        'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=2070&auto=format&fit=crop',
    },
    {
      id: 4,
      title: 'FUNCTIONAL FITNESS RACK',
      tag: 'CROSS-TRAINING',
      size: 'col-span-12 aspect-[21/9]',
      image:
        'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=2070&auto=format&fit=crop',
    },
  ];

  return (
    <section ref={sectionRef} className="relative py-14 sm:py-16 bg-black overflow-hidden border-b border-zinc-900">
      <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none" />

      {/* Giant Transparent "05" Background Number */}
      <div className="absolute left-4 top-1/2 -translate-y-1/2 text-[16rem] sm:text-[24rem] font-display font-extrabold text-white/[0.02] select-none pointer-events-none z-0">
        05
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Animated Red Line Drawing */}
        <div
          className={`h-[2px] bg-gradient-to-r from-red-600 via-red-500 to-transparent mb-8 shadow-[0_0_15px_#e50914] transition-all duration-1000 ${
            isVisible ? 'w-full' : 'w-0'
          }`}
        />

        {/* Header (REMOVED 'INSIDE HOME 4 FITNESS.') */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div
            className={`transition-all duration-700 transform ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-red-600/10 border border-red-600/30 text-red-500 text-xs font-mono tracking-widest uppercase mb-3">
              // GYM ATMOSPHERE & GALLERY
            </div>
            <h2 className="text-3xl sm:text-5xl font-display font-extrabold tracking-tighter uppercase text-white">
              THE ATHLETIC <span className="text-red-600">ENVIRONMENT.</span>
            </h2>
          </div>

          <button
            onClick={() => onNavigate('gallery')}
            className="group flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-red-500 hover:text-white transition-colors"
          >
            <span>VIEW FULL GALLERY</span>
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </button>
        </div>

        {/* Editorial Masonry Grid with Animated Clip-Path Reveal */}
        <div className="grid grid-cols-12 gap-4 sm:gap-6">
          {galleryItems.map((item, idx) => (
            <div
              key={item.id}
              onClick={() => onNavigate('gallery')}
              style={{ transitionDelay: `${idx * 150}ms` }}
              className={`group relative overflow-hidden bg-zinc-900 border border-zinc-800 cursor-pointer corner-brackets transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-10 scale-95'
              } ${item.size}`}
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover filter brightness-[0.75] contrast-[1.15] transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

              {/* Hover Tag & Label */}
              <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between z-10">
                <div>
                  <span className="text-[10px] font-mono text-red-500 tracking-widest uppercase block mb-1">
                    // {item.tag}
                  </span>
                  <h3 className="text-base sm:text-xl font-display font-extrabold uppercase text-white tracking-tight">
                    {item.title}
                  </h3>
                </div>
                <div className="w-9 h-9 rounded-full bg-red-600 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 shadow-[0_0_15px_rgba(229,9,20,0.6)]">
                  <ArrowUpRight className="w-5 h-5" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Button */}
        <div className="mt-12 text-center">
          <button
            onClick={() => onNavigate('gallery')}
            className="group inline-flex items-center gap-3 px-8 py-4 bg-red-600 hover:bg-red-700 text-white font-extrabold text-xs uppercase tracking-widest transition-all duration-300 shadow-[0_0_30px_rgba(229,9,20,0.5)]"
          >
            <Camera className="w-4 h-4" />
            <span>VIEW FULL PHOTO GALLERY</span>
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </button>
        </div>
      </div>
    </section>
  );
};
