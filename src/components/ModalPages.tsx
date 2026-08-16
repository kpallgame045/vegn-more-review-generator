import React from 'react';
import { X, Phone, MapPin, Instagram, ArrowUpRight, MessageCircle, Clock, Map, Trophy, Users } from 'lucide-react';
import { Logo } from './Logo';
import { GSAPOneTimeBrandReveal } from './GSAPOneTimeBrandReveal';
import { EditorialHeadingReveal } from './EditorialHeadingReveal';

interface ModalPagesProps {
  activeView: string;
  onClose: () => void;
  onNavigate: (view: string) => void;
}

export const ModalPages: React.FC<ModalPagesProps> = ({ activeView, onClose, onNavigate }) => {
  if (activeView === 'home') return null;

  return (
    <div className="fixed inset-0 z-[80] overflow-y-auto bg-black text-white animate-fadeIn">
      {/* Sticky Fixed Header */}
      <div className="sticky top-0 z-50 bg-black/95 backdrop-blur-xl border-b border-zinc-800 px-4 sm:px-8 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Logo size="sm" />
          <span className="text-xs font-mono text-red-500 uppercase tracking-widest hidden sm:inline">
            // {activeView.replace('-', ' ')}
          </span>
        </div>
        <button
          onClick={onClose}
          className="p-2 rounded-full bg-zinc-900 border border-zinc-700 text-zinc-300 hover:text-white hover:border-red-600 transition-all flex items-center gap-2 px-4 cursor-pointer"
        >
          <span className="text-xs font-mono uppercase tracking-widest">CLOSE</span>
          <X className="w-5 h-5 text-red-500" />
        </button>
      </div>

      <div className="min-h-screen pb-24">
        {/* ================= 1. ABOUT VIEW ================= */}
        {activeView === 'about' && (
          <div className="space-y-16">
            {/* Visual Hero */}
            <div className="relative h-[45vh] min-h-[320px] w-full flex items-center justify-center overflow-hidden bg-black border-b border-zinc-900">
              <img
                src="https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=2070&auto=format&fit=crop"
                alt="About Home 4 Fitness"
                className="w-full h-full object-cover filter brightness-[0.35] contrast-[1.25]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
              <div className="relative z-10 max-w-5xl mx-auto px-4 text-center space-y-4">
                <GSAPOneTimeBrandReveal>
                  <span className="inline-block px-3 py-1 bg-red-600/10 border border-red-600/30 text-red-500 font-mono text-xs uppercase tracking-widest">
                    // ABOUT HOME 4 FITNESS
                  </span>
                  <EditorialHeadingReveal
                    as="h1"
                    text="MORE THAN"
                    redText="JUST A GYM."
                    className="text-4xl sm:text-7xl"
                  />
                </GSAPOneTimeBrandReveal>
              </div>
            </div>

            <div className="max-w-5xl mx-auto px-4 sm:px-6 space-y-12">
              <GSAPOneTimeBrandReveal>
                <div className="space-y-6 text-base sm:text-lg text-zinc-300 leading-relaxed max-w-3xl">
                  <p>
                    Home 4 Fitness is Sector 8 Gandhinagar's dedicated fitness center located near CHH-3 Circle. Designed around athletic consistency, functional conditioning, and real fitness habits.
                  </p>
                  <p>
                    Whether your focus is daily cardio, weight training, or building a structured routine, Home 4 Fitness provides the environment to reach your goals.
                  </p>
                </div>
              </GSAPOneTimeBrandReveal>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-4">
                {[
                  { title: 'TRAIN WITH PURPOSE', desc: 'Structured workout splits designed for athletic consistency.' },
                  { title: 'FITNESS-FOCUSED', desc: 'A dedicated environment with zero unnecessary distractions.' },
                  { title: 'CONSISTENCY MATTERS', desc: 'Daily discipline and progressive fitness routines.' },
                  { title: 'LOCAL & CONVENIENT', desc: 'Located at CHH-3 Circle, Sector 8, Gandhinagar.' },
                ].map((item, idx) => (
                  <GSAPOneTimeBrandReveal key={idx} delay={idx * 0.08}>
                    <div className="bg-zinc-950 p-6 border border-zinc-800 corner-brackets space-y-2 h-full">
                      <h3 className="text-sm font-display font-extrabold text-red-500 uppercase">{item.title}</h3>
                      <p className="text-xs text-zinc-400 leading-relaxed">{item.desc}</p>
                    </div>
                  </GSAPOneTimeBrandReveal>
                ))}
              </div>

              <GSAPOneTimeBrandReveal>
                <div className="pt-8 text-center">
                  <button
                    onClick={() => onNavigate('contact')}
                    className="px-8 py-4 bg-red-600 text-white font-extrabold text-xs uppercase tracking-widest shadow-[0_0_30px_rgba(229,9,20,0.5)] cursor-pointer"
                  >
                    START YOUR FITNESS JOURNEY →
                  </button>
                </div>
              </GSAPOneTimeBrandReveal>
            </div>
          </div>
        )}

        {/* ================= 2. WHY US VIEW ================= */}
        {activeView === 'why-us' && (
          <div className="space-y-16">
            <div className="relative h-[45vh] min-h-[320px] w-full flex items-center justify-center overflow-hidden bg-black border-b border-zinc-900">
              <img
                src="https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=2070&auto=format&fit=crop"
                alt="Why Us Home 4 Fitness"
                className="w-full h-full object-cover filter brightness-[0.35] contrast-[1.25]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
              <div className="relative z-10 max-w-5xl mx-auto px-4 text-center space-y-4">
                <GSAPOneTimeBrandReveal>
                  <span className="inline-block px-3 py-1 bg-red-600/10 border border-red-600/30 text-red-500 font-mono text-xs uppercase tracking-widest">
                    // WHY HOME 4 FITNESS
                  </span>
                  <EditorialHeadingReveal
                    as="h1"
                    text="WHY TRAINING"
                    redText="MATTERS."
                    className="text-4xl sm:text-7xl"
                  />
                </GSAPOneTimeBrandReveal>
              </div>
            </div>

            <div className="max-w-5xl mx-auto px-4 sm:px-6 grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                { num: '01', title: 'TRAIN WITH PURPOSE', desc: 'Focus your workouts on genuine progress, form execution, and structured physical routine.' },
                { num: '02', title: 'FITNESS-FOCUSED ENVIRONMENT', desc: 'High energy atmosphere designed for weight training, cardio, and physical stamina.' },
                { num: '03', title: 'CONSISTENCY MATTERS', desc: 'Build long term physical habits with daily workout discipline in Sector 8.' },
                { num: '04', title: 'YOUR FITNESS JOURNEY', desc: 'A community environment in Sector 8 Gandhinagar supporting your personal fitness goals.' },
                { num: '05', title: 'LOCAL & CONVENIENT', desc: 'Easily accessible near CHH-3 Circle, Sports Academy, Sector 8.' },
              ].map((item, idx) => (
                <GSAPOneTimeBrandReveal key={idx} delay={idx * 0.08}>
                  <div className="bg-zinc-950 p-8 border border-zinc-800 corner-brackets space-y-3 h-full">
                    <span className="text-2xl font-display font-extrabold text-red-500">{item.num}</span>
                    <h3 className="text-xl font-display font-extrabold uppercase text-white">{item.title}</h3>
                    <p className="text-xs text-zinc-400 leading-relaxed">{item.desc}</p>
                  </div>
                </GSAPOneTimeBrandReveal>
              ))}
            </div>
          </div>
        )}

        {/* ================= 3. PROGRAMS VIEW ================= */}
        {activeView === 'programs' && (
          <div className="space-y-16">
            <div className="relative h-[45vh] min-h-[320px] w-full flex items-center justify-center overflow-hidden bg-black border-b border-zinc-900">
              <img
                src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop"
                alt="Training Programs"
                className="w-full h-full object-cover filter brightness-[0.35] contrast-[1.25]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
              <div className="relative z-10 max-w-5xl mx-auto px-4 text-center space-y-4">
                <GSAPOneTimeBrandReveal>
                  <span className="inline-block px-3 py-1 bg-red-600/10 border border-red-600/30 text-red-500 font-mono text-xs uppercase tracking-widest">
                    // WORKOUT OPTIONS
                  </span>
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

        {/* ================= 4. TRAINERS VIEW ================= */}
        {activeView === 'trainers' && (
          <div className="space-y-16">
            <div className="relative h-[45vh] min-h-[320px] w-full flex items-center justify-center overflow-hidden bg-black border-b border-zinc-900">
              <img
                src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=2070&auto=format&fit=crop"
                alt="Trainers Home 4 Fitness"
                className="w-full h-full object-cover filter brightness-[0.35] contrast-[1.25]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
              <div className="relative z-10 max-w-5xl mx-auto px-4 text-center space-y-4">
                <GSAPOneTimeBrandReveal>
                  <span className="inline-block px-3 py-1 bg-red-600/10 border border-red-600/30 text-red-500 font-mono text-xs uppercase tracking-widest">
                    // THE TEAM
                  </span>
                  <EditorialHeadingReveal
                    as="h1"
                    text="THE PEOPLE BEHIND"
                    redText="THE WORK."
                    className="text-4xl sm:text-7xl"
                  />
                </GSAPOneTimeBrandReveal>
              </div>
            </div>

            <div className="max-w-3xl mx-auto px-4 text-center space-y-6">
              <GSAPOneTimeBrandReveal>
                <div className="bg-zinc-950 p-12 border border-zinc-800 corner-brackets space-y-4">
                  <Users className="w-12 h-12 text-red-500 mx-auto" />
                  <h3 className="text-2xl font-display font-extrabold uppercase">TRAINER PROFILES COMING SOON</h3>
                  <p className="text-zinc-400 text-sm max-w-md mx-auto leading-relaxed">
                    Verified trainer details and coaching profiles will be published shortly. Connect directly with the gym for floor guidance and availability.
                  </p>
                  <div className="pt-4">
                    <a
                      href="tel:07575040440"
                      className="inline-flex items-center gap-2 px-6 py-3 bg-red-600 text-white font-extrabold text-xs uppercase tracking-widest"
                    >
                      <Phone className="w-4 h-4" />
                      <span>CALL 075750 40440</span>
                    </a>
                  </div>
                </div>
              </GSAPOneTimeBrandReveal>
            </div>
          </div>
        )}

        {/* ================= 5. GALLERY VIEW ================= */}
        {activeView === 'gallery' && (
          <div className="space-y-16">
            <div className="relative h-[45vh] min-h-[320px] w-full flex items-center justify-center overflow-hidden bg-black border-b border-zinc-900">
              <img
                src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop"
                alt="Gallery"
                className="w-full h-full object-cover filter brightness-[0.35] contrast-[1.25]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
              <div className="relative z-10 max-w-5xl mx-auto px-4 text-center space-y-4">
                <GSAPOneTimeBrandReveal>
                  <span className="inline-block px-3 py-1 bg-red-600/10 border border-red-600/30 text-red-500 font-mono text-xs uppercase tracking-widest">
                    // PHOTO GALLERY
                  </span>
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
                    <img src={img} alt="Gym environment" className="w-full h-full object-cover filter brightness-90 hover:scale-105 transition-transform duration-500" />
                  </div>
                </GSAPOneTimeBrandReveal>
              ))}
            </div>
          </div>
        )}

        {/* ================= 6. TRANSFORMATIONS & TESTIMONIALS ================= */}
        {(activeView === 'transformations' || activeView === 'testimonials') && (
          <div className="space-y-16">
            <div className="relative h-[45vh] min-h-[320px] w-full flex items-center justify-center overflow-hidden bg-black border-b border-zinc-900">
              <img
                src="https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?q=80&w=2070&auto=format&fit=crop"
                alt="Member Results"
                className="w-full h-full object-cover filter brightness-[0.35] contrast-[1.25]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
              <div className="relative z-10 max-w-5xl mx-auto px-4 text-center space-y-4">
                <GSAPOneTimeBrandReveal>
                  <span className="inline-block px-3 py-1 bg-red-600/10 border border-red-600/30 text-red-500 font-mono text-xs uppercase tracking-widest">
                    // COMMUNITY PROGRESS
                  </span>
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

        {/* ================= 7. INSTAGRAM VIEW ================= */}
        {activeView === 'instagram' && (
          <div className="space-y-16">
            <div className="relative h-[45vh] min-h-[320px] w-full flex items-center justify-center overflow-hidden bg-black border-b border-zinc-900">
              <img
                src="https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=2070&auto=format&fit=crop"
                alt="Instagram"
                className="w-full h-full object-cover filter brightness-[0.35] contrast-[1.25]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
              <div className="relative z-10 max-w-5xl mx-auto px-4 text-center space-y-4">
                <GSAPOneTimeBrandReveal>
                  <Instagram className="w-10 h-10 text-red-500 mx-auto" />
                  <span className="inline-block px-3 py-1 bg-red-600/10 border border-red-600/30 text-red-500 font-mono text-xs uppercase tracking-widest">
                    // INSTAGRAM
                  </span>
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

        {/* ================= 8. LOCATION VIEW ================= */}
        {activeView === 'location' && (
          <div className="space-y-16">
            <div className="relative h-[45vh] min-h-[320px] w-full flex items-center justify-center overflow-hidden bg-black border-b border-zinc-900">
              <img
                src="https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=2070&auto=format&fit=crop"
                alt="Location"
                className="w-full h-full object-cover filter brightness-[0.35] contrast-[1.25]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
              <div className="relative z-10 max-w-5xl mx-auto px-4 text-center space-y-4">
                <GSAPOneTimeBrandReveal>
                  <span className="inline-block px-3 py-1 bg-red-600/10 border border-red-600/30 text-red-500 font-mono text-xs uppercase tracking-widest">
                    // SECTOR 8 GANDHINAGAR
                  </span>
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

        {/* ================= 9. JOIN NOW / CONTACT VIEW ================= */}
        {(activeView === 'join-now' || activeView === 'contact') && (
          <div className="space-y-16">
            {/* Visual Hero */}
            <div className="relative h-[45vh] min-h-[320px] w-full flex items-center justify-center overflow-hidden bg-black border-b border-zinc-900">
              <img
                src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop"
                alt="Contact Home 4 Fitness"
                className="w-full h-full object-cover filter brightness-[0.35] contrast-[1.25]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
              <div className="relative z-10 max-w-5xl mx-auto px-4 text-center space-y-4">
                <GSAPOneTimeBrandReveal>
                  <span className="inline-block px-3 py-1 bg-red-600/10 border border-red-600/30 text-red-500 font-mono text-xs uppercase tracking-widest">
                    // CONNECT DIRECTLY
                  </span>
                  <EditorialHeadingReveal
                    as="h1"
                    text="START YOUR"
                    redText="FITNESS JOURNEY."
                    className="text-4xl sm:text-7xl"
                  />
                  <p className="text-zinc-300 text-sm sm:text-base max-w-xl mx-auto leading-relaxed mt-2">
                    Ready to make fitness part of your routine? Visit Home 4 Fitness in Sector 8, Gandhinagar or connect directly with the team.
                  </p>
                </GSAPOneTimeBrandReveal>
              </div>
            </div>

            {/* DIRECT CONVERSION ACTION CARDS */}
            <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* 1. CALL NOW */}
                <GSAPOneTimeBrandReveal delay={0}>
                  <a
                    href="tel:07575040440"
                    className="group bg-zinc-950 p-8 border border-zinc-800 hover:border-red-600 corner-brackets transition-all duration-300 flex flex-col justify-between h-56 shadow-[0_0_20px_rgba(0,0,0,0.5)]"
                  >
                    <div className="space-y-3">
                      <div className="w-12 h-12 rounded-lg bg-red-600/10 border border-red-600/30 flex items-center justify-center text-red-500 group-hover:bg-red-600 group-hover:text-white transition-all">
                        <Phone className="w-6 h-6" />
                      </div>
                      <h3 className="text-2xl font-display font-extrabold uppercase text-white">CALL NOW</h3>
                      <p className="text-xs font-mono text-zinc-400">Speak directly with Home 4 Fitness staff</p>
                    </div>
                    <div className="flex items-center justify-between text-xs font-mono font-bold text-red-500 pt-4 border-t border-zinc-900">
                      <span>075750 40440</span>
                      <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                    </div>
                  </a>
                </GSAPOneTimeBrandReveal>

                {/* 2. WHATSAPP */}
                <GSAPOneTimeBrandReveal delay={0.08}>
                  <a
                    href="https://wa.me/917575040440"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group bg-zinc-950 p-8 border border-zinc-800 hover:border-emerald-600 corner-brackets transition-all duration-300 flex flex-col justify-between h-56 shadow-[0_0_20px_rgba(0,0,0,0.5)]"
                  >
                    <div className="space-y-3">
                      <div className="w-12 h-12 rounded-lg bg-emerald-950 border border-emerald-800 flex items-center justify-center text-emerald-400 group-hover:bg-emerald-600 group-hover:text-white transition-all">
                        <MessageCircle className="w-6 h-6" />
                      </div>
                      <h3 className="text-2xl font-display font-extrabold uppercase text-white">WHATSAPP</h3>
                      <p className="text-xs font-mono text-zinc-400">Instant chat & workout inquiry</p>
                    </div>
                    <div className="flex items-center justify-between text-xs font-mono font-bold text-emerald-400 pt-4 border-t border-zinc-900">
                      <span>+91 75750 40440</span>
                      <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                    </div>
                  </a>
                </GSAPOneTimeBrandReveal>

                {/* 3. GET DIRECTIONS */}
                <GSAPOneTimeBrandReveal delay={0.16}>
                  <a
                    href="https://maps.google.com/?q=Home+4+Fitness+Sector+8+Gandhinagar"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group bg-zinc-950 p-8 border border-zinc-800 hover:border-red-600 corner-brackets transition-all duration-300 flex flex-col justify-between h-56 shadow-[0_0_20px_rgba(0,0,0,0.5)]"
                  >
                    <div className="space-y-3">
                      <div className="w-12 h-12 rounded-lg bg-red-600/10 border border-red-600/30 flex items-center justify-center text-red-500 group-hover:bg-red-600 group-hover:text-white transition-all">
                        <MapPin className="w-6 h-6" />
                      </div>
                      <h3 className="text-2xl font-display font-extrabold uppercase text-white">GET DIRECTIONS</h3>
                      <p className="text-xs font-mono text-zinc-400">Sports Academy, CHH-3 Circle, Sector 8</p>
                    </div>
                    <div className="flex items-center justify-between text-xs font-mono font-bold text-red-500 pt-4 border-t border-zinc-900">
                      <span>OPEN IN GOOGLE MAPS</span>
                      <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                    </div>
                  </a>
                </GSAPOneTimeBrandReveal>

                {/* 4. INSTAGRAM */}
                <GSAPOneTimeBrandReveal delay={0.24}>
                  <a
                    href="https://instagram.com/home4fitness_gandhinagar"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group bg-zinc-950 p-8 border border-zinc-800 hover:border-red-600 corner-brackets transition-all duration-300 flex flex-col justify-between h-56 shadow-[0_0_20px_rgba(0,0,0,0.5)]"
                  >
                    <div className="space-y-3">
                      <div className="w-12 h-12 rounded-lg bg-red-600/10 border border-red-600/30 flex items-center justify-center text-red-500 group-hover:bg-red-600 group-hover:text-white transition-all">
                        <Instagram className="w-6 h-6" />
                      </div>
                      <h3 className="text-2xl font-display font-extrabold uppercase text-white">INSTAGRAM</h3>
                      <p className="text-xs font-mono text-zinc-400">@home4fitness_gandhinagar</p>
                    </div>
                    <div className="flex items-center justify-between text-xs font-mono font-bold text-red-500 pt-4 border-t border-zinc-900">
                      <span>FOLLOW ON INSTAGRAM</span>
                      <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                    </div>
                  </a>
                </GSAPOneTimeBrandReveal>
              </div>

              {/* Exact Business Address Card */}
              <GSAPOneTimeBrandReveal delay={0.32}>
                <div className="bg-zinc-950 p-8 border border-zinc-800 corner-brackets space-y-3 text-center">
                  <span className="text-[10px] font-mono text-red-500 uppercase tracking-widest">
                    // VERIFIED BUSINESS LOCATION
                  </span>
                  <p className="text-sm font-mono text-zinc-300 max-w-xl mx-auto leading-relaxed">
                    Oppo Birsamunda Bhavan, Sports Academy, Near CHH-3 Circle, Sector 8, Gandhinagar, Gujarat 382008
                  </p>
                </div>
              </GSAPOneTimeBrandReveal>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
