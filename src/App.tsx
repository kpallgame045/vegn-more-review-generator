import React, { useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { CustomCursor } from './components/CustomCursor';
import { IntroOverlay } from './components/IntroOverlay';
import { RedPageTransition } from './components/RedPageTransition';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { StickyStorySection } from './components/StickyStorySection';
import { ShortAboutSection } from './components/ShortAboutSection';
import { InteractiveWhyUs } from './components/InteractiveWhyUs';
import { ProgramsSection } from './components/ProgramsSection';
import { FinalCTASection } from './components/FinalCTASection';
import { Footer } from './components/Footer';
import { PageViews } from './components/PageViews';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export const App: React.FC = () => {
  const [activeView, setActiveView] = useState<string>('home');
  const [isNavigating, setIsNavigating] = useState<boolean>(false);

  const handleNavigate = (targetView: string) => {
    if (targetView === activeView) return;
    setIsNavigating(true);

    // 1. Clean up old GSAP ScrollTriggers
    ScrollTrigger.getAll().forEach((trigger) => trigger.kill());

    // 2. Set new active view
    setActiveView(targetView);

    // 3. Scroll to top immediately
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });

    // 4. Refresh ScrollTriggers after new view renders
    setTimeout(() => {
      ScrollTrigger.refresh();
    }, 150);
  };

  return (
    <div className="relative min-h-screen bg-[#08080a] text-white selection:bg-red-600 selection:text-white font-sans overflow-x-hidden flex flex-col">
      {/* 1. Custom Red Interactive Cursor */}
      <CustomCursor />

      {/* 2. Intro Load Sequence (1.2s) */}
      <IntroOverlay />

      {/* 3. High Speed Red Page Transition (400-600ms) */}
      <RedPageTransition
        isNavigating={isNavigating}
        onTransitionComplete={() => setIsNavigating(false)}
      />

      {/* 4. ONE GLOBAL FIXED HEADER FOR ALL PAGES */}
      <Header activeView={activeView} onNavigate={handleNavigate} />

      {/* 5. MAIN CONTENT AREA WITH TOP PADDING OFFSET FOR FIXED HEADER */}
      <main className="relative z-10 flex-grow pt-20 sm:pt-24">
        {/* HOMEPAGE VIEW FLOW */}
        {activeView === 'home' && (
          <>
            <HeroSection onNavigate={handleNavigate} />
            <ShortAboutSection onNavigate={handleNavigate} />
            <StickyStorySection onNavigate={handleNavigate} />
            <InteractiveWhyUs onNavigate={handleNavigate} />
            <ProgramsSection onNavigate={handleNavigate} />
            <FinalCTASection onNavigate={handleNavigate} />
          </>
        )}

        {/* SECONDARY PAGE VIEWS (ABOUT, WHY US, PROGRAMS, TRAINERS, GALLERY, RESULTS, REVIEWS, CONTACT, LOCATION, JOIN) */}
        {activeView !== 'home' && (
          <PageViews activeView={activeView} onNavigate={handleNavigate} />
        )}
      </main>

      {/* 6. ONE GLOBAL FOOTER AT BOTTOM OF ALL PAGES */}
      <Footer onNavigate={handleNavigate} />
    </div>
  );
};

export default App;
