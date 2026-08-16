import React, { useEffect } from 'react';
import { Phone, MapPin, Instagram, ArrowUpRight, MessageCircle, Clock, Map, Trophy, CheckCircle2, Dumbbell, Activity, Target, Compass, Flame, Shield, Zap } from 'lucide-react';
import { GSAPOneTimeBrandReveal } from './GSAPOneTimeBrandReveal';
import { EditorialHeadingReveal } from './EditorialHeadingReveal';

interface PageViewsProps {
  activeView: string;
  onNavigate: (view: string) => void;
}

export const PageViews: React.FC<PageViewsProps> = ({ activeView, onNavigate }) => {
  useEffect(() => {
    // Dynamic SEO Document Title & Meta Description update
    if (activeView === 'about') {
      document.title = 'About Home 4 Fitness | Premium Gym in Sector 8, Gandhinagar';
      let metaDesc = document.querySelector("meta[name='description']");
      if (!metaDesc) {
        metaDesc = document.createElement('meta');
        metaDesc.setAttribute('name', 'description');
        document.head.appendChild(metaDesc);
      }
      metaDesc.setAttribute(
        'content',
        'Learn about Home 4 Fitness, a dedicated gym and fitness center in Sector 8, Gandhinagar, focused on strength training, conditioning, personalized workouts, and sustainable fitness progress.'
      );
    } else if (activeView === 'why-us') {
      document.title = 'Why Us | Home 4 Fitness Gym Sector 8 Gandhinagar';
      let metaDesc = document.querySelector("meta[name='description']");
      if (!metaDesc) {
        metaDesc = document.createElement('meta');
        metaDesc.setAttribute('name', 'description');
        document.head.appendChild(metaDesc);
      }
      metaDesc.setAttribute(
        'content',
        'Discover why Home 4 Fitness in Sector 8 Gandhinagar is built for real strength, consistency, performance, and daily workout routine progress.'
      );
    } else if (activeView === 'contact' || activeView === 'join-now') {
      document.title = 'Contact Home 4 Fitness | Gym in Sector 8, Gandhinagar';
      let metaDesc = document.querySelector("meta[name='description']");
      if (!metaDesc) {
        metaDesc = document.createElement('meta');
        metaDesc.setAttribute('name', 'description');
        document.head.appendChild(metaDesc);
      }
      metaDesc.setAttribute(
        'content',
        'Contact Home 4 Fitness in Sector 8, Gandhinagar for gym membership, fitness training, strength workouts, conditioning and general fitness enquiries.'
      );
    }
  }, [activeView]);

  if (activeView === 'home') return null;

  return (
    <div className="w-full text-white animate-fadeIn pb-16">
      {/* ================= 1. ABOUT VIEW ================= */}
      {activeView === 'about' && (
        <div className="space-y-16 lg:space-y-24">
          {/* 1. ABOUT HERO SECTION */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
            <GSAPOneTimeBrandReveal>
              <div className="w-full h-[2px] bg-gradient-to-r from-red-600 via-red-500 to-transparent mb-8 shadow-[0_0_15px_#e50914]" />

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                {/* LEFT: AUTHENTIC GYM PHOTOGRAPHY */}
                <div className="lg:col-span-6 relative">
                  <div className="relative aspect-[4/3] w-full overflow-hidden bg-zinc-900 border border-zinc-800 corner-brackets group">
                    <img
                      src="https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=2070&auto=format&fit=crop"
                      alt="Home 4 Fitness gym interior in Sector 8 Gandhinagar"
                      className="w-full h-full object-cover filter brightness-95 contrast-110 transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-50" />
                    <div className="absolute top-4 left-4 bg-zinc-900/90 border border-zinc-700 px-3 py-1.5 backdrop-blur-md">
                      <span className="text-[10px] font-mono text-red-500 tracking-widest uppercase">
                        SECTOR 8 GANDHINAGAR
                      </span>
                    </div>
                  </div>
                </div>

                {/* RIGHT: EDITORIAL HEADLINE */}
                <div className="lg:col-span-6 space-y-6 overflow-visible">
                  <h1 className="text-3xl sm:text-5xl lg:text-6xl font-display font-extrabold tracking-tighter uppercase text-white leading-[0.95] overflow-visible max-w-full">
                    MORE THAN <br />
                    <span className="text-red-600 text-stroke-red drop-shadow-[0_0_30px_rgba(229,9,20,0.6)]">
                      JUST A GYM.
                    </span>
                  </h1>

                  <p className="text-zinc-300 text-base sm:text-lg font-normal leading-relaxed">
                    Home 4 Fitness is a dedicated fitness center in Sector 8, Gandhinagar, created for people who want more from their fitness journey than just a place to exercise.
                  </p>
                </div>
              </div>
            </GSAPOneTimeBrandReveal>
          </div>

          {/* 2. MAIN ABOUT INTRO PARAGRAPHS */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <GSAPOneTimeBrandReveal>
              <div className="bg-zinc-950 border border-zinc-800/80 p-8 sm:p-12 corner-brackets space-y-6">
                <h2 className="text-2xl sm:text-4xl font-display font-extrabold uppercase text-white tracking-tight">
                  HOME 4 FITNESS — MORE THAN JUST A GYM
                </h2>
                <div className="space-y-4 text-zinc-300 text-base sm:text-lg leading-relaxed max-w-4xl">
                  <p>
                    Home 4 Fitness is a dedicated fitness center in Sector 8, Gandhinagar, created for people who want more from their fitness journey than just a place to exercise.
                  </p>
                  <p>
                    We provide a focused training environment where strength, conditioning, consistency, and proper workout habits come together. Whether you are starting your fitness journey, working toward better strength and muscle development, improving endurance, or building a healthier lifestyle, Home 4 Fitness is designed to help you train with purpose.
                  </p>
                  <p>
                    Located near CHH-3 Circle in Sector 8, Gandhinagar, Home 4 Fitness brings together a motivating gym environment, quality training equipment, structured workout routines, and a fitness-first atmosphere for beginners and experienced fitness enthusiasts.
                  </p>
                </div>
              </div>
            </GSAPOneTimeBrandReveal>
          </div>

          {/* 3. OUR FITNESS PHILOSOPHY */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <GSAPOneTimeBrandReveal>
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-6 space-y-6">
                  <h2 className="text-3xl sm:text-5xl font-display font-extrabold tracking-tighter uppercase text-white">
                    TRAIN WITH <span className="text-red-600">PURPOSE.</span>
                  </h2>
                  <p className="text-zinc-300 text-base sm:text-lg leading-relaxed">
                    At Home 4 Fitness, we believe that real fitness comes from consistency, discipline, and progressive improvement.
                  </p>
                  <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
                    Every workout should have a purpose. Instead of following random routines, members can focus on structured training that supports strength development, muscle building, cardiovascular fitness, mobility, conditioning, and overall physical performance.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-zinc-800">
                    <div className="p-4 bg-zinc-900 border border-zinc-800 text-center">
                      <span className="text-sm font-display font-extrabold text-red-500 uppercase block">TRAIN SMART.</span>
                    </div>
                    <div className="p-4 bg-zinc-900 border border-zinc-800 text-center">
                      <span className="text-sm font-display font-extrabold text-white uppercase block">TRAIN CONSISTENTLY.</span>
                    </div>
                    <div className="p-4 bg-zinc-900 border border-zinc-800 text-center">
                      <span className="text-sm font-display font-extrabold text-red-500 uppercase block">KEEP PROGRESSING.</span>
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-6">
                  <div className="relative aspect-[4/3] w-full overflow-hidden bg-zinc-900 border border-zinc-800 corner-brackets">
                    <img
                      src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop"
                      alt="Strength training equipment at Home 4 Fitness Gandhinagar"
                      className="w-full h-full object-cover filter brightness-90 contrast-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
                  </div>
                </div>
              </div>
            </GSAPOneTimeBrandReveal>
          </div>

          {/* 4. WHAT HOME 4 FITNESS OFFERS */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
            <GSAPOneTimeBrandReveal>
              <div className="text-center space-y-3">
                <h2 className="text-3xl sm:text-5xl font-display font-extrabold tracking-tighter uppercase text-white">
                  WHAT HOME 4 FITNESS <span className="text-red-600">OFFERS.</span>
                </h2>
              </div>
            </GSAPOneTimeBrandReveal>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  id: '01',
                  title: 'STRENGTH TRAINING',
                  icon: Dumbbell,
                  desc: 'Build strength through structured resistance and weight training designed around progressive improvement.',
                },
                {
                  id: '02',
                  title: 'CARDIO & CONDITIONING',
                  icon: Activity,
                  desc: 'Improve stamina, cardiovascular fitness, endurance, and overall conditioning with focused workouts.',
                },
                {
                  id: '03',
                  title: 'MUSCLE & BODY DEVELOPMENT',
                  icon: Target,
                  desc: 'Work toward stronger muscles, improved body composition, and better physical performance through consistent training.',
                },
                {
                  id: '04',
                  title: 'FUNCTIONAL FITNESS',
                  icon: Compass,
                  desc: 'Develop movement, mobility, stability, and practical strength that supports everyday performance.',
                },
              ].map((card, idx) => {
                const IconComp = card.icon;
                return (
                  <GSAPOneTimeBrandReveal key={card.id} delay={idx * 0.08}>
                    <div className="bg-zinc-950 p-8 border border-zinc-800/80 hover:border-red-600 transition-colors corner-brackets space-y-4 h-full flex flex-col justify-between group">
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <span className="text-3xl font-display font-extrabold text-red-500">{card.id}</span>
                          <IconComp className="w-6 h-6 text-zinc-500 group-hover:text-red-500 transition-colors" />
                        </div>
                        <h3 className="text-lg font-display font-extrabold uppercase text-white group-hover:text-red-500 transition-colors">
                          {card.title}
                        </h3>
                        <p className="text-xs text-zinc-400 leading-relaxed">{card.desc}</p>
                      </div>
                      <div className="w-full h-[1px] bg-zinc-800 group-hover:bg-red-600 transition-colors" />
                    </div>
                  </GSAPOneTimeBrandReveal>
                );
              })}
            </div>
          </div>

          {/* 5. WHO IS HOME 4 FITNESS FOR? */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
            <GSAPOneTimeBrandReveal>
              <div className="bg-zinc-950 border border-zinc-800/80 p-8 sm:p-12 corner-brackets space-y-8">
                <div className="space-y-3">
                  <h2 className="text-3xl sm:text-5xl font-display font-extrabold tracking-tighter uppercase text-white">
                    BUILT FOR EVERY <span className="text-red-600">FITNESS JOURNEY.</span>
                  </h2>
                  <p className="text-zinc-300 text-base leading-relaxed max-w-3xl">
                    Whether you are taking your first step into fitness or already training regularly, Home 4 Fitness provides an environment where you can work toward your individual goals.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-4">
                  <div className="p-6 bg-zinc-900 border border-zinc-800 space-y-2">
                    <CheckCircle2 className="w-5 h-5 text-red-500" />
                    <h3 className="text-sm font-display font-extrabold uppercase text-white">BEGINNERS</h3>
                    <p className="text-xs text-zinc-400 leading-relaxed">
                      Build a strong foundation and learn consistent workout habits.
                    </p>
                  </div>

                  <div className="p-6 bg-zinc-900 border border-zinc-800 space-y-2">
                    <CheckCircle2 className="w-5 h-5 text-red-500" />
                    <h3 className="text-sm font-display font-extrabold uppercase text-white">FITNESS ENTHUSIASTS</h3>
                    <p className="text-xs text-zinc-400 leading-relaxed">
                      Improve strength, endurance, conditioning, and performance.
                    </p>
                  </div>

                  <div className="p-6 bg-zinc-900 border border-zinc-800 space-y-2">
                    <CheckCircle2 className="w-5 h-5 text-red-500" />
                    <h3 className="text-sm font-display font-extrabold uppercase text-white">STRENGTH SEEKERS</h3>
                    <p className="text-xs text-zinc-400 leading-relaxed">
                      Focus on progressive resistance training and muscle development.
                    </p>
                  </div>

                  <div className="p-6 bg-zinc-900 border border-zinc-800 space-y-2">
                    <CheckCircle2 className="w-5 h-5 text-red-500" />
                    <h3 className="text-sm font-display font-extrabold uppercase text-white">LIFESTYLE GOALS</h3>
                    <p className="text-xs text-zinc-400 leading-relaxed">
                      Create sustainable fitness habits for a healthier and more active lifestyle.
                    </p>
                  </div>
                </div>
              </div>
            </GSAPOneTimeBrandReveal>
          </div>

          {/* 6. WHY SECTOR 8, GANDHINAGAR? */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <GSAPOneTimeBrandReveal>
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-6 relative aspect-[16/10] overflow-hidden bg-zinc-900 border border-zinc-800 corner-brackets">
                  <img
                    src="https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=2070&auto=format&fit=crop"
                    alt="Fitness training environment at Home 4 Fitness Gandhinagar"
                    className="w-full h-full object-cover filter brightness-90 contrast-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
                </div>

                <div className="lg:col-span-6 space-y-6">
                  <h2 className="text-3xl sm:text-5xl font-display font-extrabold tracking-tighter uppercase text-white">
                    YOUR LOCAL <span className="text-red-600">FITNESS DESTINATION.</span>
                  </h2>
                  <p className="text-zinc-300 text-base leading-relaxed">
                    Conveniently located in Sector 8, Gandhinagar, Home 4 Fitness is built around the needs of the local fitness community.
                  </p>
                  <p className="text-zinc-400 text-sm leading-relaxed">
                    As a trusted gym in Sector 8 Gandhinagar and premier fitness center in Gandhinagar, our goal is to provide a dedicated space where people from Gandhinagar can train consistently, stay motivated, and make fitness a meaningful part of their lifestyle.
                  </p>
                  <div className="pt-2">
                    <button
                      onClick={() => onNavigate('contact')}
                      className="px-7 py-3.5 bg-red-600 hover:bg-red-700 text-white font-extrabold text-xs uppercase tracking-widest shadow-[0_0_25px_rgba(229,9,20,0.5)] cursor-pointer"
                    >
                      VISIT GYM IN SECTOR 8 →
                    </button>
                  </div>
                </div>
              </div>
            </GSAPOneTimeBrandReveal>
          </div>

          {/* 7. CINEMATIC BRAND STATEMENT SECTION */}
          <div className="relative py-20 bg-black overflow-hidden border-t border-b border-zinc-900 text-center">
            <div className="absolute inset-0 z-0">
              <img
                src="https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?q=80&w=2070&auto=format&fit=crop"
                alt="Home 4 Fitness Gandhinagar facility"
                className="w-full h-full object-cover filter brightness-[0.25] contrast-[1.3]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black" />
            </div>

            <div className="relative z-10 max-w-5xl mx-auto px-4 space-y-6">
              <GSAPOneTimeBrandReveal>
                <div className="w-24 h-[2px] bg-red-600 mx-auto shadow-[0_0_15px_#e50914] mb-6" />
                <h2 className="text-4xl sm:text-7xl font-display font-extrabold tracking-tighter uppercase text-white leading-none">
                  MORE THAN <span className="text-red-600 text-stroke-red">JUST A GYM.</span>
                </h2>
                <div className="space-y-2 text-xs sm:text-base font-mono text-zinc-300 tracking-widest uppercase pt-4">
                  <p>A PLACE TO TRAIN.</p>
                  <p>A PLACE TO IMPROVE.</p>
                  <p className="text-red-500 font-bold">A PLACE TO BUILD YOUR STRONGER SELF.</p>
                </div>
              </GSAPOneTimeBrandReveal>
            </div>
          </div>
        </div>
      )}

      {/* ================= 2. WHY US VIEW ================= */}
      {activeView === 'why-us' && (
        <div className="space-y-16 lg:space-y-24">
          {/* 1. CINEMATIC WHY US HERO */}
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
            <GSAPOneTimeBrandReveal>
              <div className="relative overflow-hidden bg-zinc-950 border border-zinc-800/80 p-8 sm:p-14 corner-brackets shadow-2xl">
                <div className="absolute right-4 top-1/2 -translate-y-1/2 text-[14rem] sm:text-[22rem] font-display font-extrabold text-white/[0.03] select-none pointer-events-none z-0">
                  WHY
                </div>
                <div className="absolute inset-0 bg-grid-pattern opacity-15 pointer-events-none" />
                <div className="w-full h-[2px] bg-gradient-to-r from-red-600 via-red-500 to-transparent mb-8 shadow-[0_0_20px_#e50914]" />

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
                  <div className="lg:col-span-7 space-y-6">
                    <h1 className="text-4xl sm:text-6xl lg:text-7xl font-display font-extrabold tracking-tighter uppercase text-white leading-[0.92]">
                      TRAIN DIFFERENT. <br />
                      <span className="text-red-600 text-stroke-red drop-shadow-[0_0_35px_rgba(229,9,20,0.6)]">
                        GET STRONGER.
                      </span>
                    </h1>

                    <p className="text-zinc-300 text-base sm:text-lg max-w-xl font-normal leading-relaxed">
                      A focused training environment built around strength, consistency, performance and real progress near CHH-3 Circle in Sector 8, Gandhinagar.
                    </p>
                  </div>

                  <div className="lg:col-span-5 relative">
                    <div className="relative aspect-[4/3] w-full overflow-hidden bg-zinc-900 border border-zinc-800 corner-brackets group">
                      <img
                        src="https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=2070&auto=format&fit=crop"
                        alt="Authentic Gym Strength Training Environment Sector 8 Gandhinagar"
                        className="w-full h-full object-cover filter brightness-[0.75] contrast-[1.2] transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
                      <div className="absolute bottom-4 left-4 right-4 p-3 bg-zinc-950/90 backdrop-blur-md border border-zinc-800">
                        <span className="text-xs font-bold text-white uppercase">
                          SECTOR 8 · GANDHINAGAR
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </GSAPOneTimeBrandReveal>
          </div>

          {/* 2. "WHY HOME 4 FITNESS" SPLIT BRAND SECTION */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <GSAPOneTimeBrandReveal>
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-zinc-950 border border-zinc-800/80 p-8 sm:p-12 corner-brackets">
                <div className="lg:col-span-5 space-y-2">
                  <h2 className="text-4xl sm:text-6xl font-display font-extrabold tracking-tighter uppercase leading-[0.92] text-white">
                    WHY <br />
                    <span className="text-red-600 text-stroke-red">HOME 4</span> <br />
                    FITNESS?
                  </h2>
                </div>

                <div className="lg:col-span-7 space-y-6">
                  <p className="text-zinc-300 text-base sm:text-lg leading-relaxed">
                    Home 4 Fitness is built for people who want more from their training. From strength and conditioning to consistent everyday workouts, the environment is designed to keep you focused, motivated and progressing.
                  </p>
                  <div className="grid grid-cols-2 gap-4 pt-2">
                    <div className="p-4 bg-zinc-900 border border-zinc-800 space-y-1">
                      <Flame className="w-5 h-5 text-red-500" />
                      <span className="text-xs font-mono font-bold text-white uppercase block">ATHLETIC PURPOSE</span>
                      <span className="text-[11px] text-zinc-400 font-mono">Structured split programming</span>
                    </div>
                    <div className="p-4 bg-zinc-900 border border-zinc-800 space-y-1">
                      <Shield className="w-5 h-5 text-red-500" />
                      <span className="text-xs font-mono font-bold text-white uppercase block">REAL CONSISTENCY</span>
                      <span className="text-[11px] text-zinc-400 font-mono">Daily workout discipline</span>
                    </div>
                  </div>
                </div>
              </div>
            </GSAPOneTimeBrandReveal>
          </div>

          {/* 3. FOUR CORE DIFFERENTIATORS */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
            <GSAPOneTimeBrandReveal>
              <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
                <div>
                  <h2 className="text-3xl sm:text-5xl font-display font-extrabold tracking-tighter uppercase text-white">
                    FOUR STANDARDS OF <span className="text-red-600">EXCELLENCE.</span>
                  </h2>
                </div>
              </div>
            </GSAPOneTimeBrandReveal>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              {[
                {
                  id: '01',
                  title: 'TRAIN WITH PURPOSE',
                  icon: Dumbbell,
                  desc: 'Structured workouts designed to help you train with direction instead of simply going through the motions.',
                },
                {
                  id: '02',
                  title: 'QUALITY TRAINING ENVIRONMENT',
                  icon: Activity,
                  desc: 'A focused gym environment with equipment and space designed to support serious and consistent training.',
                },
                {
                  id: '03',
                  title: 'CONSISTENCY OVER QUICK FIXES',
                  icon: Zap,
                  desc: 'Real fitness takes time. We focus on sustainable training habits and progressive improvement.',
                },
                {
                  id: '04',
                  title: 'BUILT AROUND YOUR GOALS',
                  icon: Target,
                  desc: 'Whether your goal is strength, muscle development, conditioning or overall fitness, your training should have a clear direction.',
                },
              ].map((diff, idx) => {
                const IconComp = diff.icon;
                return (
                  <GSAPOneTimeBrandReveal key={diff.id} delay={idx * 0.08}>
                    <div className="group relative bg-zinc-950 p-8 sm:p-10 border border-zinc-800/80 hover:border-red-600 transition-all duration-300 hover:-translate-y-1.5 corner-brackets shadow-xl flex flex-col justify-between h-full">
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <span className="text-4xl font-display font-extrabold text-red-500 group-hover:scale-110 transition-transform">
                            {diff.id}
                          </span>
                          <IconComp className="w-6 h-6 text-zinc-500 group-hover:text-red-500 transition-colors" />
                        </div>
                        <div className="w-12 h-[2px] bg-red-600 shadow-[0_0_10px_#e50914]" />
                        <h3 className="text-xl sm:text-2xl font-display font-extrabold uppercase text-white group-hover:text-red-500 transition-colors">
                          {diff.title}
                        </h3>
                        <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">{diff.desc}</p>
                      </div>
                      <div className="pt-6 mt-6 border-t border-zinc-900 flex items-center justify-between text-xs font-mono text-zinc-500 group-hover:text-red-400">
                        <span>HOME 4 FITNESS STANDARD</span>
                        <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                      </div>
                    </div>
                  </GSAPOneTimeBrandReveal>
                );
              })}
            </div>
          </div>

          {/* 4. BIG VISUAL BREAK */}
          <div className="relative py-24 bg-black overflow-hidden border-t border-b border-zinc-900">
            <div className="absolute inset-0 z-0">
              <img
                src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop"
                alt="Heavy weight training gym floor at Home 4 Fitness"
                className="w-full h-full object-cover filter brightness-[0.25] contrast-[1.3]"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-black" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
              <GSAPOneTimeBrandReveal>
                <div className="w-32 h-[2px] bg-red-600 mx-auto shadow-[0_0_15px_#e50914] mb-8" />
                <h2 className="text-4xl sm:text-7xl lg:text-8xl font-display font-extrabold tracking-tighter uppercase text-white/90 leading-none">
                  DISCIPLINE <span className="text-red-600">•</span> CONSISTENCY <span className="text-red-600">•</span> PROGRESS
                </h2>
              </GSAPOneTimeBrandReveal>
            </div>
          </div>

          {/* 5. "BUILT FOR REAL PROGRESS" SECTION */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
            <GSAPOneTimeBrandReveal>
              <div className="bg-zinc-950 border border-zinc-800/80 p-8 sm:p-12 corner-brackets space-y-8">
                <div className="space-y-3">
                  <h2 className="text-3xl sm:text-5xl font-display font-extrabold tracking-tighter uppercase text-white">
                    BUILT FOR <span className="text-red-600 text-stroke-red">REAL PROGRESS.</span>
                  </h2>
                  <p className="text-zinc-300 text-base sm:text-lg leading-relaxed max-w-3xl">
                    Fitness is not about one perfect workout. It is about showing up, training consistently and becoming stronger over time.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
                  <div className="p-8 bg-zinc-900 border border-zinc-800 space-y-3 corner-brackets">
                    <span className="text-3xl font-display font-extrabold text-red-500">01</span>
                    <h3 className="text-xl font-display font-extrabold uppercase text-white">STRENGTH</h3>
                    <p className="text-xs text-zinc-400 leading-relaxed">
                      Build a stronger foundation with progressive weight training splits.
                    </p>
                  </div>

                  <div className="p-8 bg-zinc-900 border border-zinc-800 space-y-3 corner-brackets">
                    <span className="text-3xl font-display font-extrabold text-red-500">02</span>
                    <h3 className="text-xl font-display font-extrabold uppercase text-white">CONDITIONING</h3>
                    <p className="text-xs text-zinc-400 leading-relaxed">
                      Improve stamina, cardiovascular fitness, and physical endurance.
                    </p>
                  </div>

                  <div className="p-8 bg-zinc-900 border border-zinc-800 space-y-3 corner-brackets">
                    <span className="text-3xl font-display font-extrabold text-red-500">03</span>
                    <h3 className="text-xl font-display font-extrabold uppercase text-white">CONSISTENCY</h3>
                    <p className="text-xs text-zinc-400 leading-relaxed">
                      Turn training into a sustainable daily habit in Sector 8 Gandhinagar.
                    </p>
                  </div>
                </div>
              </div>
            </GSAPOneTimeBrandReveal>
          </div>

          {/* 6. FINAL WHY US CTA */}
          <div className="max-w-5xl mx-auto px-4 text-center">
            <GSAPOneTimeBrandReveal>
              <div className="bg-zinc-950 p-10 sm:p-14 border border-zinc-800 corner-brackets space-y-6">
                <h2 className="text-3xl sm:text-6xl font-display font-extrabold uppercase text-white">
                  READY TO <span className="text-red-600">TRAIN DIFFERENT?</span>
                </h2>
                <p className="text-zinc-300 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
                  Start building strength, consistency and confidence with Home 4 Fitness in Sector 8, Gandhinagar.
                </p>
                <div className="pt-4">
                  <button
                    onClick={() => onNavigate('join-now')}
                    className="px-8 py-4 bg-red-600 hover:bg-red-700 text-white font-extrabold text-xs sm:text-sm uppercase tracking-widest shadow-[0_0_30px_rgba(229,9,20,0.6)] cursor-pointer"
                  >
                    JOIN NOW →
                  </button>
                </div>
              </div>
            </GSAPOneTimeBrandReveal>
          </div>
        </div>
      )}

      {/* ================= 3. PROGRAMS VIEW ================= */}
      {activeView === 'programs' && (
        <div className="space-y-16">
          <div className="relative h-[40vh] min-h-[300px] w-full flex items-center justify-center overflow-hidden bg-black border-b border-zinc-900">
            <img
              src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop"
              alt="Training Programs"
              className="w-full h-full object-cover filter brightness-[0.35] contrast-[1.25]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
            <div className="relative z-10 max-w-5xl mx-auto px-4 text-center space-y-4">
              <GSAPOneTimeBrandReveal>
                <EditorialHeadingReveal
                  as="h1"
                  text="TRAIN WITH"
                  redText="PURPOSE."
                  className="text-4xl sm:text-7xl"
                />
              </GSAPOneTimeBrandReveal>
            </div>
          </div>

          <div className="max-w-5xl mx-auto px-4 sm:px-6 space-y-6">
            {[
              { num: '01', title: 'BUILD STRENGTH', desc: 'Focus on compound movements, strength building, deadlifts, squats, and power routines.' },
              { num: '02', title: 'IMPROVE FITNESS', desc: 'Cardiovascular endurance, stamina building, fat reduction, and agility splits.' },
              { num: '03', title: 'MUSCLE & FITNESS TRAINING', desc: 'Targeted muscle group splits and structured body re-composition routines.' },
              { num: '04', title: 'WEIGHT MANAGEMENT', desc: 'High intensity interval training (HIIT), metabolic conditioning, and active cardio.' },
              { num: '05', title: 'GENERAL GYM TRAINING', desc: 'Daily fitness routine conditioning for healthy active living.' },
            ].map((prog, idx) => (
              <GSAPOneTimeBrandReveal key={idx} delay={idx * 0.08}>
                <div className="bg-zinc-950 p-8 border border-zinc-800 corner-brackets flex flex-col md:flex-row md:items-center justify-between gap-6 hover:border-red-600 transition-colors">
                  <div className="flex items-center gap-6">
                    <span className="text-4xl font-display font-extrabold text-red-500">{prog.num}</span>
                    <div>
                      <h3 className="text-2xl font-display font-extrabold uppercase text-white">{prog.title}</h3>
                      <p className="text-xs text-zinc-400 max-w-md mt-1">{prog.desc}</p>
                    </div>
                  </div>
                  <button
                    onClick={() => onNavigate('contact')}
                    className="px-6 py-3 bg-red-600 text-white font-extrabold text-xs uppercase tracking-widest shrink-0 cursor-pointer"
                  >
                    INQUIRE AT GYM →
                  </button>
                </div>
              </GSAPOneTimeBrandReveal>
            ))}
          </div>
        </div>
      )}

      {/* ================= 4. GALLERY VIEW ================= */}
      {activeView === 'gallery' && (
        <div className="space-y-16">
          <div className="relative h-[40vh] min-h-[300px] w-full flex items-center justify-center overflow-hidden bg-black border-b border-zinc-900">
            <img
              src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop"
              alt="Gallery"
              className="w-full h-full object-cover filter brightness-[0.35] contrast-[1.25]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
            <div className="relative z-10 max-w-5xl mx-auto px-4 text-center space-y-4">
              <GSAPOneTimeBrandReveal>
                <EditorialHeadingReveal
                  as="h1"
                  text="INSIDE"
                  redText="HOME 4 FITNESS."
                  className="text-4xl sm:text-7xl"
                />
              </GSAPOneTimeBrandReveal>
            </div>
          </div>

          <div className="max-w-6xl mx-auto px-4 sm:px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop',
              'https://images.unsplash.com/photo-1538805060514-97d9cc17730c?q=80&w=2070&auto=format&fit=crop',
              'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=2070&auto=format&fit=crop',
              'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=2070&auto=format&fit=crop',
              'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?q=80&w=2070&auto=format&fit=crop',
              'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=2070&auto=format&fit=crop',
            ].map((img, idx) => (
              <GSAPOneTimeBrandReveal key={idx} delay={idx * 0.08}>
                <div className="aspect-video sm:aspect-square bg-zinc-900 border border-zinc-800 overflow-hidden corner-brackets">
                  <img src={img} alt="Home 4 Fitness gym environment in Sector 8 Gandhinagar" className="w-full h-full object-cover filter brightness-90 hover:scale-105 transition-transform duration-500" />
                </div>
              </GSAPOneTimeBrandReveal>
            ))}
          </div>
        </div>
      )}

      {/* ================= 5. TRANSFORMATIONS & TESTIMONIALS ================= */}
      {(activeView === 'transformations' || activeView === 'testimonials') && (
        <div className="space-y-16">
          <div className="relative h-[40vh] min-h-[300px] w-full flex items-center justify-center overflow-hidden bg-black border-b border-zinc-900">
            <img
              src="https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?q=80&w=2070&auto=format&fit=crop"
              alt="Member Results"
              className="w-full h-full object-cover filter brightness-[0.35] contrast-[1.25]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
            <div className="relative z-10 max-w-5xl mx-auto px-4 text-center space-y-4">
              <GSAPOneTimeBrandReveal>
                <EditorialHeadingReveal
                  as="h1"
                  text="REAL PEOPLE."
                  redText="REAL PROGRESS."
                  className="text-4xl sm:text-7xl"
                />
              </GSAPOneTimeBrandReveal>
            </div>
          </div>

          <div className="max-w-3xl mx-auto px-4 text-center space-y-6">
            <GSAPOneTimeBrandReveal>
              <div className="bg-zinc-950 p-12 border border-zinc-800 corner-brackets space-y-4">
                <Trophy className="w-12 h-12 text-red-500 mx-auto" />
                <h3 className="text-2xl font-display font-extrabold uppercase">
                  {activeView === 'transformations' ? 'REAL MEMBER TRANSFORMATIONS COMING SOON' : 'REAL MEMBER REVIEWS COMING SOON'}
                </h3>
                <p className="text-zinc-400 text-sm max-w-md mx-auto leading-relaxed">
                  Verified member stories and progress photos will be uploaded directly. Visit Home 4 Fitness in Sector 8 to experience the workout environment firsthand.
                </p>
                <div className="pt-4">
                  <button
                    onClick={() => onNavigate('contact')}
                    className="px-6 py-3 bg-red-600 text-white font-extrabold text-xs uppercase tracking-widest cursor-pointer"
                  >
                    VISIT GYM IN SECTOR 8 →
                  </button>
                </div>
              </div>
            </GSAPOneTimeBrandReveal>
          </div>
        </div>
      )}

      {/* ================= 6. INSTAGRAM VIEW ================= */}
      {activeView === 'instagram' && (
        <div className="space-y-16">
          <div className="relative h-[40vh] min-h-[300px] w-full flex items-center justify-center overflow-hidden bg-black border-b border-zinc-900">
            <img
              src="https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=2070&auto=format&fit=crop"
              alt="Instagram"
              className="w-full h-full object-cover filter brightness-[0.35] contrast-[1.25]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
            <div className="relative z-10 max-w-5xl mx-auto px-4 text-center space-y-4">
              <GSAPOneTimeBrandReveal>
                <Instagram className="w-10 h-10 text-red-500 mx-auto" />
                <EditorialHeadingReveal
                  as="h1"
                  text="FOLLOW"
                  redText="HOME 4 FITNESS."
                  className="text-4xl sm:text-7xl"
                />
                <p className="text-zinc-400 font-mono text-sm mt-2">@home4fitness_gandhinagar</p>
              </GSAPOneTimeBrandReveal>
            </div>
          </div>

          <div className="max-w-4xl mx-auto px-4 text-center space-y-8">
            <GSAPOneTimeBrandReveal>
              <div className="bg-zinc-950 p-8 border border-zinc-800 corner-brackets space-y-6">
                <h3 className="text-2xl font-display font-extrabold uppercase">CONNECT ON SOCIAL MEDIA</h3>
                <p className="text-zinc-300 text-sm max-w-lg mx-auto leading-relaxed">
                  Check out workout clips, gym updates, and community highlights on our official Instagram account.
                </p>
                <a
                  href="https://instagram.com/home4fitness_gandhinagar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-red-600 hover:bg-red-700 text-white font-extrabold text-xs uppercase tracking-widest shadow-[0_0_30px_rgba(229,9,20,0.5)]"
                >
                  <Instagram className="w-4 h-4" />
                  <span>FOLLOW @HOME4FITNESS_GANDHINAGAR →</span>
                </a>
              </div>
            </GSAPOneTimeBrandReveal>
          </div>
        </div>
      )}

      {/* ================= 7. LOCATION VIEW ================= */}
      {activeView === 'location' && (
        <div className="space-y-16">
          <div className="relative h-[40vh] min-h-[300px] w-full flex items-center justify-center overflow-hidden bg-black border-b border-zinc-900">
            <img
              src="https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=2070&auto=format&fit=crop"
              alt="Location"
              className="w-full h-full object-cover filter brightness-[0.35] contrast-[1.25]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
            <div className="relative z-10 max-w-5xl mx-auto px-4 text-center space-y-4">
              <GSAPOneTimeBrandReveal>
                <EditorialHeadingReveal
                  as="h1"
                  text="FIND"
                  redText="HOME 4 FITNESS."
                  className="text-4xl sm:text-7xl"
                />
              </GSAPOneTimeBrandReveal>
            </div>
          </div>

          <div className="max-w-5xl mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-6">
              <GSAPOneTimeBrandReveal>
                <div className="bg-zinc-950 p-8 border border-zinc-800 corner-brackets space-y-6">
                  <MapPin className="w-8 h-8 text-red-500" />
                  <h3 className="text-2xl font-display font-extrabold uppercase">ADDRESS</h3>
                  <p className="text-zinc-300 text-sm font-mono leading-relaxed">
                    Oppo Birsamunda Bhavan, Sports Academy, <br />
                    Near CHH-3 Circle, Sector 8, <br />
                    Gandhinagar, Gujarat 382008
                  </p>

                  <div className="pt-2">
                    <a
                      href="https://maps.google.com/?q=Home+4+Fitness+Sector+8+Gandhinagar"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 bg-red-600 text-white font-extrabold text-xs uppercase tracking-widest"
                    >
                      <Map className="w-4 h-4" />
                      <span>GET DIRECTIONS ON GOOGLE MAPS →</span>
                    </a>
                  </div>
                </div>
              </GSAPOneTimeBrandReveal>
            </div>

            <div className="lg:col-span-6">
              <GSAPOneTimeBrandReveal delay={0.1}>
                <div className="aspect-video bg-zinc-900 border border-zinc-800 corner-brackets relative overflow-hidden flex items-center justify-center p-6 text-center">
                  <div className="space-y-3">
                    <Clock className="w-8 h-8 text-red-500 mx-auto" />
                    <h4 className="text-lg font-display font-extrabold uppercase">OPERATING HOURS</h4>
                    <p className="text-xs font-mono text-zinc-400">
                      Monday – Saturday: Morning & Evening Splits <br />
                      Contact gym directly for timing details.
                    </p>
                    <a
                      href="tel:07575040440"
                      className="inline-block text-xs font-mono text-red-500 font-bold uppercase underline pt-2"
                    >
                      CALL 075750 40440
                    </a>
                  </div>
                </div>
              </GSAPOneTimeBrandReveal>
            </div>
          </div>
        </div>
      )}

      {/* ================= 8. JOIN NOW / CONTACT VIEW ================= */}
      {(activeView === 'join-now' || activeView === 'contact') && (
        <div className="space-y-16 lg:space-y-24">
          {/* 1. CINEMATIC CONTACT HERO */}
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
            <GSAPOneTimeBrandReveal>
              <div className="relative overflow-hidden bg-zinc-950 border border-zinc-800/80 p-8 sm:p-14 corner-brackets shadow-2xl">
                {/* Background Large Transparent "CONTACT" Typography */}
                <div className="absolute right-4 top-1/2 -translate-y-1/2 text-[14rem] sm:text-[20rem] font-display font-extrabold text-white/[0.03] select-none pointer-events-none z-0">
                  CONTACT
                </div>
                <div className="absolute inset-0 bg-grid-pattern opacity-15 pointer-events-none" />

                {/* Red Accent Line */}
                <div className="w-full h-[2px] bg-gradient-to-r from-red-600 via-red-500 to-transparent mb-8 shadow-[0_0_20px_#e50914]" />

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
                  {/* Left Column: Headline */}
                  <div className="lg:col-span-7 space-y-6">
                    <h1 className="text-4xl sm:text-6xl lg:text-7xl font-display font-extrabold tracking-tighter uppercase text-white leading-[0.92]">
                      LET'S BUILD <br />
                      <span className="text-red-600 text-stroke-red drop-shadow-[0_0_35px_rgba(229,9,20,0.6)]">
                        YOUR STRONGER SELF.
                      </span>
                    </h1>

                    <p className="text-zinc-300 text-base sm:text-lg max-w-xl font-normal leading-relaxed">
                      Connect directly with Home 4 Fitness in Sector 8, Gandhinagar for gym membership, floor guidance, and workout Split inquiries.
                    </p>
                  </div>

                  {/* Right Column: Authentic Gym Environment Image */}
                  <div className="lg:col-span-5 relative">
                    <div className="relative aspect-[4/3] w-full overflow-hidden bg-zinc-900 border border-zinc-800 corner-brackets group">
                      <img
                        src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop"
                        alt="Home 4 Fitness Gandhinagar Strength Equipment"
                        className="w-full h-full object-cover filter brightness-[0.75] contrast-[1.2] transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
                      <div className="absolute bottom-4 left-4 right-4 p-3 bg-zinc-950/90 backdrop-blur-md border border-zinc-800">
                        <span className="text-xs font-bold text-white uppercase">
                          NEAR CHH-3 CIRCLE · SECTOR 8
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </GSAPOneTimeBrandReveal>
          </div>

          {/* 2. CONTACT INFORMATION (3 CLEAN EDITORIAL CONVERSION CARDS WITH ICONS) */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
            <GSAPOneTimeBrandReveal>
              <div className="space-y-3">
                <h2 className="text-3xl sm:text-5xl font-display font-extrabold tracking-tighter uppercase text-white">
                  CONTACT <span className="text-red-600">HOME 4 FITNESS.</span>
                </h2>
              </div>
            </GSAPOneTimeBrandReveal>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {/* CALL US */}
              <GSAPOneTimeBrandReveal delay={0}>
                <a
                  href="tel:07575040440"
                  className="group bg-zinc-950 p-8 border border-zinc-800/80 hover:border-red-600 transition-all duration-300 hover:-translate-y-1.5 corner-brackets shadow-xl flex flex-col justify-between h-64"
                >
                  <div className="space-y-4">
                    <div className="w-12 h-12 rounded-lg bg-red-600/10 border border-red-600/30 flex items-center justify-center text-red-500 group-hover:bg-red-600 group-hover:text-white transition-all">
                      <Phone className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-display font-extrabold uppercase text-white">CALL US</h3>
                    <p className="text-xs font-mono text-zinc-300">075750 40440</p>
                  </div>
                  <div className="flex items-center justify-between text-xs font-mono font-bold text-red-500 pt-3 border-t border-zinc-900">
                    <span>CALL NOW</span>
                    <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </div>
                </a>
              </GSAPOneTimeBrandReveal>

              {/* WHATSAPP */}
              <GSAPOneTimeBrandReveal delay={0.08}>
                <a
                  href="https://wa.me/917575040440"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-zinc-950 p-8 border border-zinc-800/80 hover:border-emerald-600 transition-all duration-300 hover:-translate-y-1.5 corner-brackets shadow-xl flex flex-col justify-between h-64"
                >
                  <div className="space-y-4">
                    <div className="w-12 h-12 rounded-lg bg-emerald-950 border border-emerald-800 flex items-center justify-center text-emerald-400 group-hover:bg-emerald-600 group-hover:text-white transition-all">
                      <MessageCircle className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-display font-extrabold uppercase text-white">CHAT WITH US</h3>
                    <p className="text-xs font-mono text-zinc-300">+91 75750 40440</p>
                  </div>
                  <div className="flex items-center justify-between text-xs font-mono font-bold text-emerald-400 pt-3 border-t border-zinc-900">
                    <span>OPEN WHATSAPP</span>
                    <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </div>
                </a>
              </GSAPOneTimeBrandReveal>

              {/* VISIT US */}
              <GSAPOneTimeBrandReveal delay={0.16}>
                <a
                  href="https://maps.google.com/?q=Home+4+Fitness+Sector+8+Gandhinagar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-zinc-950 p-8 border border-zinc-800/80 hover:border-red-600 transition-all duration-300 hover:-translate-y-1.5 corner-brackets shadow-xl flex flex-col justify-between h-64"
                >
                  <div className="space-y-4">
                    <div className="w-12 h-12 rounded-lg bg-red-600/10 border border-red-600/30 flex items-center justify-center text-red-500 group-hover:bg-red-600 group-hover:text-white transition-all">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-display font-extrabold uppercase text-white">VISIT US</h3>
                    <p className="text-[11px] font-mono text-zinc-300 leading-tight">Sector 8, Gandhinagar</p>
                  </div>
                  <div className="flex items-center justify-between text-xs font-mono font-bold text-red-500 pt-3 border-t border-zinc-900">
                    <span>GOOGLE MAPS</span>
                    <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </div>
                </a>
              </GSAPOneTimeBrandReveal>
            </div>
          </div>

          {/* 3. CINEMATIC GYM IMAGE BREAK */}
          <div className="relative py-24 bg-black overflow-hidden border-t border-b border-zinc-900 text-center">
            <div className="absolute inset-0 z-0">
              <img
                src="https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=2070&auto=format&fit=crop"
                alt="Home 4 Fitness Gym Floor Gandhinagar"
                className="w-full h-full object-cover filter brightness-[0.25] contrast-[1.3]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black" />
            </div>

            <div className="relative z-10 max-w-5xl mx-auto px-4 space-y-6">
              <GSAPOneTimeBrandReveal>
                <div className="w-24 h-[2px] bg-red-600 mx-auto shadow-[0_0_15px_#e50914] mb-6" />
                <h2 className="text-4xl sm:text-7xl font-display font-extrabold tracking-tighter uppercase text-white leading-none">
                  SEE YOU AT <span className="text-red-600 text-stroke-red">THE GYM.</span>
                </h2>
              </GSAPOneTimeBrandReveal>
            </div>
          </div>

          {/* 4. MAIN CONTACT CTA */}
          <div className="max-w-5xl mx-auto px-4 text-center">
            <GSAPOneTimeBrandReveal>
              <div className="bg-zinc-950 p-10 sm:p-14 border border-zinc-800 corner-brackets space-y-6">
                <h2 className="text-3xl sm:text-6xl font-display font-extrabold uppercase text-white leading-tight">
                  READY TO START? <br />
                  <span className="text-red-600">YOUR NEXT WORKOUT STARTS WITH ONE DECISION.</span>
                </h2>
                <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
                  <button
                    onClick={() => onNavigate('join-now')}
                    className="px-8 py-4 bg-red-600 hover:bg-red-700 text-white font-extrabold text-xs sm:text-sm uppercase tracking-widest shadow-[0_0_30px_rgba(229,9,20,0.6)] cursor-pointer"
                  >
                    JOIN NOW →
                  </button>
                  <a
                    href="tel:07575040440"
                    className="px-8 py-4 bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 text-white font-bold text-xs sm:text-sm uppercase tracking-widest flex items-center gap-2"
                  >
                    <Phone className="w-4 h-4 text-red-500" />
                    <span>CALL NOW →</span>
                  </a>
                </div>
              </div>
            </GSAPOneTimeBrandReveal>
          </div>
        </div>
      )}
    </div>
  );
};
