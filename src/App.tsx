import React from 'react';
import { AnimatedBackground } from './components/AnimatedBackground';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { ReviewGenerator } from './components/ReviewGenerator';
import { ToastContainer } from './components/Toast';
import { Footer } from './components/Footer';
import { useToast } from './hooks/useToast';
import { useReviewGenerator } from './hooks/useReviewGenerator';

export const App: React.FC = () => {
  const { toasts, showToast, removeToast } = useToast();
  const {
    currentReview,
    status,
    errorMessage,
    isCopied,
    generateReview,
    copyReview,
    postOnGoogleReview,
  } = useReviewGenerator(showToast);

  return (
    <div className="relative min-h-screen flex flex-col justify-between overflow-x-hidden selection:bg-brand-700 selection:text-white">
      {/* Animated Floating Fruits & Vegetables Vector Background */}
      <AnimatedBackground />

      {/* Main Page Layout Container */}
      <div className="relative z-10 flex-grow flex flex-col">
        {/* Sticky Luxury Header */}
        <Header />

        {/* Hero Section */}
        <main className="flex-grow">
          <HeroSection />

          {/* Interactive Review Generator Area */}
          <ReviewGenerator
            currentReview={currentReview}
            status={status}
            errorMessage={errorMessage}
            isCopied={isCopied}
            onGenerate={generateReview}
            onCopy={copyReview}
            onPostReview={postOnGoogleReview}
          />
        </main>
      </div>

      {/* Footer */}
      <Footer />

      {/* Floating Toast Notifications */}
      <ToastContainer toasts={toasts} onClose={removeToast} />
    </div>
  );
};

export default App;
