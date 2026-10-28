'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import Image from 'next/image';
import confetti from 'canvas-confetti';
import { 
  Check, 
  Copy, 
  ExternalLink, 
  RefreshCw, 
  Sparkles, 
  AlertCircle,
  ThumbsUp,
  MapPin,
  Heart,
  Edit3,
} from 'lucide-react';
import FloatingProduceBackdrop from '@/components/FloatingProduceBackdrop';

export default function ReviewGeneratorPage() {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [reviewText, setReviewText] = useState<string>('');
  const [googleUrl, setGoogleUrl] = useState<string>('https://g.page/r/Ce2eQgJVGC10EBM/review');
  const [isCopied, setIsCopied] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>('');

  const initialFetchDone = useRef<boolean>(false);

  // Robust clipboard copy handler - copies ONLY raw review text
  const copyToClipboard = async (textToCopy: string): Promise<boolean> => {
    if (!textToCopy || textToCopy.trim() === '') return false;

    const cleanText = textToCopy.trim();

    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(cleanText);
        setIsCopied(true);
        triggerConfetti();
        return true;
      } else {
        // Fallback for non-secure HTTP or restricted clipboard contexts
        const textArea = document.createElement('textarea');
        textArea.value = cleanText;
        textArea.style.position = 'fixed';
        textArea.style.left = '-9999px';
        textArea.style.top = '-9999px';
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        const successful = document.execCommand('copy');
        document.body.removeChild(textArea);
        if (successful) {
          setIsCopied(true);
          triggerConfetti();
          return true;
        }
      }
    } catch (err) {
      console.warn('Clipboard copy error or permission restriction:', err);
    }

    setIsCopied(false);
    return false;
  };

  const triggerConfetti = () => {
    try {
      confetti({
        particleCount: 28,
        spread: 60,
        origin: { y: 0.75 },
        colors: ['#991b3b', '#2e7d32', '#fbbf24'],
        disableForReducedMotion: true,
      });
    } catch {
      // Ignore confetti errors if blocked
    }
  };

  const handleGenerateReview = useCallback(async (forceNew = false) => {
    setIsLoading(true);
    setErrorMessage('');
    setIsCopied(false);

    try {
      const response = await fetch('/api/generate-review', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          branchName: 'PDPU Branch',
          currentText: reviewText,
          forceNew,
        }),
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(data.error || "We couldn't create your review right now. Please try again.");
      }

      const generated = data.reviewText || '';
      setReviewText(generated);
      setGoogleUrl(data.googleReviewUrl || 'https://g.page/r/Ce2eQgJVGC10EBM/review');

      // Attempt automatic copy to clipboard
      await copyToClipboard(generated);
    } catch (err: any) {
      console.error('Error generating review:', err);
      setErrorMessage(err.message || "We couldn't create your review right now. Please try again.");
    } finally {
      setIsLoading(false);
    }
  }, []);

  // AUTO GENERATE ON PAGE LOAD
  useEffect(() => {
    if (!initialFetchDone.current) {
      initialFetchDone.current = true;
      handleGenerateReview(false);
    }
  }, [handleGenerateReview]);

  // Saves valid, customer-confirmed review draft to Supabase public.reviews in background
  const handleSaveToDatabase = async (): Promise<boolean> => {
    if (!reviewText || reviewText.trim().length < 15) {
      return false;
    }

    try {
      const res = await fetch('/api/save-review', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          branchName: 'PDPU Branch',
          reviewText: reviewText.trim(),
          tags: ['Neatly Packed Vegetables', 'Fresh Produce'],
          rating: 'Excellent',
        }),
      });

      const data = await res.json();
      return res.ok && data.success;
    } catch (err) {
      console.warn('Background database save error:', err);
      return false;
    }
  };

  // POST ON GOOGLE action:
  // Automatically saves confirmed draft to Supabase in background,
  // ensures text is copied to clipboard, and opens the official Google Review URL.
  const handlePostOnGoogle = async () => {
    // Save confirmed review in background
    handleSaveToDatabase();

    // Ensure text is copied to clipboard
    await copyToClipboard(reviewText);

    // Launch Google review link in new tab
    const targetUrl = googleUrl || 'https://g.page/r/Ce2eQgJVGC10EBM/review';
    window.open(targetUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <main className="min-h-screen bg-organic-editorial text-slate-800 flex flex-col justify-between items-center p-4 sm:p-6 md:p-8 relative">
      {/* 3D Floating Fruits & Vegetables Backdrop */}
      <FloatingProduceBackdrop />

      {/* Main Content Container */}
      <div className="w-full max-w-lg mx-auto flex flex-col items-center z-10">
        
        {/* HERO HEADER SECTION */}
        <header className="flex flex-col items-center text-center mt-2 mb-6 w-full">
          {/* Prominent Brand Logo Frame */}
          <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-full p-1.5 bg-white shadow-xl shadow-slate-300/60 border-2 border-slate-200/90 flex items-center justify-center mb-4 transition-transform hover:scale-105 duration-200">
            <Image
              src="/vegnmore-logo.jpg"
              alt="Veg ’n more Logo"
              width={120}
              height={120}
              className="rounded-full object-cover"
              priority
            />
          </div>

          {/* Location Badge */}
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-white/95 border border-slate-200/90 text-xs font-bold text-slate-700 shadow-xs mb-3 backdrop-blur-xs">
            <MapPin className="w-3.5 h-3.5 text-[#991b3b]" />
            PDPU Road, Raysan
          </div>

          {/* High-Contrast Serif Brand Headline */}
          <h1 className="text-3xl sm:text-5xl font-serif-brand font-extrabold text-[#991b3b] tracking-tight leading-tight">
            Thank You for Visiting
          </h1>
          <h2 className="text-2xl sm:text-4xl font-serif-brand font-extrabold text-slate-900 tracking-tight mt-1">
            Veg ’n more
          </h2>

          <p className="mt-2.5 text-xs sm:text-sm text-slate-600 font-medium max-w-sm">
            We&apos;d love to hear about your shopping experience.
          </p>

          {/* Clean Experience Banner */}
          <div className="mt-4 w-full bg-white/90 backdrop-blur-xs py-3 px-4 rounded-2xl border border-rose-100/90 shadow-sm flex flex-col items-center">
            <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#991b3b] flex items-center gap-1.5">
              <Heart className="w-4 h-4 text-[#991b3b] fill-[#991b3b]" />
              HOW WAS YOUR EXPERIENCE?
            </span>
            <p className="text-xs text-slate-500 text-center mt-1">
              Personalize your review below, copy it, and share on Google!
            </p>
          </div>
        </header>

        {/* ERROR STATE */}
        {errorMessage && !isLoading && (
          <div className="w-full bg-rose-50 border border-rose-200 text-rose-800 p-4 rounded-2xl text-sm flex items-start gap-3 mb-5 animate-fade-in-scale shadow-xs">
            <AlertCircle className="w-5 h-5 text-rose-600 shrink-0 mt-0.5" />
            <div className="flex-1">
              <p className="font-medium">{errorMessage}</p>
              <button
                type="button"
                onClick={() => handleGenerateReview(true)}
                className="mt-2 px-3.5 py-1.5 bg-rose-600 text-white rounded-xl text-xs font-bold shadow-xs hover:bg-rose-700 transition-colors cursor-pointer"
              >
                Try Again
              </button>
            </div>
          </div>
        )}

        {/* LOADING STATE */}
        {isLoading && (
          <div className="w-full bg-white/95 backdrop-blur-xs rounded-3xl p-10 shadow-xl shadow-slate-300/50 border border-slate-200/90 mb-6 flex flex-col items-center justify-center text-center animate-fade-in-scale">
            <div className="relative w-10 h-10 mb-3.5 flex items-center justify-center">
              <div className="absolute inset-0 rounded-full border-3 border-slate-100 border-t-[#991b3b] animate-spin" />
              <Sparkles className="w-5 h-5 text-[#991b3b] animate-subtle-pulse" />
            </div>
            <h3 className="text-base font-bold text-slate-800 tracking-tight">
              Preparing your review suggestion...
            </h3>
          </div>
        )}

        {/* REVIEW DISPLAY CARD & ACTIONS */}
        {!isLoading && reviewText && (
          <div className="w-full flex flex-col gap-4 animate-fade-in-scale">
            {/* Primary Review Card with Editable Textarea */}
            <div className="w-full bg-white/95 backdrop-blur-xs rounded-3xl p-5 sm:p-7 shadow-xl shadow-slate-300/50 border border-slate-200/90 relative">
              <div className="flex items-center justify-between mb-3.5 pb-2.5 border-b border-slate-100">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500 flex items-center gap-1.5">
                  <ThumbsUp className="w-4 h-4 text-[#2e7d32]" />
                  YOUR REVIEW SUGGESTION
                </span>
                <div className="flex items-center gap-1 text-slate-400 text-xs">
                  <Edit3 className="w-3.5 h-3.5 text-[#991b3b]" />
                  <span className="text-[11px] font-medium text-slate-500">Tap to edit</span>
                </div>
              </div>

              {/* Editable Review Draft Area */}
              <div className="relative mb-3.5">
                <textarea
                  value={reviewText}
                  onChange={(e) => {
                    setReviewText(e.target.value);
                    setIsCopied(false);
                  }}
                  rows={4}
                  className="w-full p-3.5 bg-slate-50/70 hover:bg-slate-50 focus:bg-white rounded-2xl border border-slate-200/90 focus:border-[#991b3b] focus:ring-2 focus:ring-[#991b3b]/10 outline-none text-slate-800 text-base sm:text-lg font-serif-brand leading-relaxed italic transition-all resize-none shadow-inner"
                  placeholder="Personalize your review here..."
                />
              </div>

              {/* ACTION 1: COPY REVIEW BUTTON */}
              <div>
                {isCopied ? (
                  <div className="w-full py-3 px-4 bg-emerald-50 border border-emerald-200/90 text-emerald-800 text-xs sm:text-sm font-bold rounded-xl flex items-center justify-center gap-2 animate-fade-in-scale shadow-xs">
                    <Check className="w-4 h-4 text-emerald-600" />
                    <span>Review copied to clipboard ✓</span>
                  </div>
                ) : (
                  <button
                    type="button"
                    onClick={() => copyToClipboard(reviewText)}
                    className="w-full py-3 px-4 bg-slate-100 hover:bg-slate-200/80 active:bg-slate-200 text-slate-700 text-xs sm:text-sm font-bold rounded-xl flex items-center justify-center gap-2 transition-all cursor-pointer border border-slate-200 active:scale-[0.99]"
                  >
                    <Copy className="w-4 h-4 text-slate-600" />
                    <span>Copy Review</span>
                  </button>
                )}
              </div>
            </div>

            {/* ACTION BUTTONS */}
            <div className="flex flex-col gap-3 w-full">
              {/* ACTION 2: POST ON GOOGLE (Primary CTA) */}
              <button
                type="button"
                onClick={handlePostOnGoogle}
                className="w-full py-4 px-6 rounded-2xl bg-[#991b3b] hover:bg-[#7f1631] active:bg-[#681027] text-white font-extrabold text-base sm:text-lg tracking-wider uppercase shadow-lg shadow-[#991b3b]/30 transition-all duration-150 active:scale-[0.98] flex items-center justify-center gap-2.5 cursor-pointer"
              >
                <span>POST ON GOOGLE</span>
                <ExternalLink className="w-5 h-5" />
              </button>

              {/* ACTION 3: GENERATE ANOTHER REVIEW (Secondary Action) */}
              <button
                type="button"
                onClick={() => handleGenerateReview(true)}
                className="w-full py-3.5 px-6 rounded-2xl bg-white/95 backdrop-blur-xs hover:bg-slate-50 active:bg-slate-100 text-slate-700 font-bold text-xs sm:text-sm border border-slate-200/90 shadow-xs transition-all duration-150 active:scale-[0.98] flex items-center justify-center gap-2 cursor-pointer"
              >
                <RefreshCw className="w-4 h-4 text-slate-500" />
                <span>Generate Another Suggestion</span>
              </button>
            </div>
          </div>
        )}

      </div>

      {/* FOOTER */}
      <footer className="mt-8 mb-2 text-center text-xs text-slate-500 z-10">
        <span>Powered by </span>
        <a
          href="https://www.instagram.com/flashdesign_ai/"
          target="_blank"
          rel="noopener noreferrer"
          className="font-extrabold text-[#991b3b] hover:underline underline-offset-2 transition-colors inline-flex items-center gap-1"
        >
          FlashDesign AI
          <ExternalLink className="w-3 h-3 text-[#991b3b]" />
        </a>
      </footer>
    </main>
  );
}
