import React from 'react';

export const CinematicFrameSection: React.FC = () => {
  return (
    <section className="relative py-24 bg-[#08080a] overflow-hidden border-b border-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="relative w-full aspect-[16/9] max-h-[600px] overflow-hidden border-2 border-red-600/60 shadow-[0_0_50px_rgba(229,9,20,0.3)] clip-asymmetric group">
          <img
            src="https://images.unsplash.com/photo-1571902943202-507ec2618e8f?q=80&w=2070&auto=format&fit=crop"
            alt="Home 4 Fitness Sector 8 Atmosphere"
            className="w-full h-full object-cover filter brightness-[0.7] contrast-[1.2] transition-transform duration-1000 group-hover:scale-110"
          />
          {/* Dark Overlay Gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent pointer-events-none" />

          {/* Corner Bracket Overlays */}
          <div className="absolute top-6 left-6 p-4 bg-zinc-950/80 backdrop-blur-md border border-zinc-800">
            <span className="text-[10px] font-mono text-red-500 tracking-widest uppercase block">
              LOCATION // SECTOR 8 GANDHINAGAR
            </span>
            <span className="text-xl font-display font-extrabold uppercase text-white tracking-wider">
              HOME 4 FITNESS ATHLETIC ZONE
            </span>
          </div>

          <div className="absolute bottom-6 right-6 p-4 bg-zinc-950/80 backdrop-blur-md border border-zinc-800 text-right">
            <span className="text-[10px] font-mono text-zinc-400 tracking-widest uppercase block">
              COORDINATES // 23.2156° N, 72.6369° E
            </span>
            <span className="text-xs font-mono font-bold text-red-400 uppercase tracking-widest">
              STATE-OF-THE-ART EQUIPMENT
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
