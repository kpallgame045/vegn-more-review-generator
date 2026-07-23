import { useState, useCallback } from 'react';
import { GeneratedReview, ReviewStatus } from '../types/review';
import { generateReviewFromGemini } from '../services/gemini';

const GOOGLE_REVIEW_URL = 'https://g.page/r/Ce2eQgJVGC10EBE/review';

export function useReviewGenerator(showToast: (msg: string, type?: 'success' | 'error' | 'info') => void) {
  const [currentReview, setCurrentReview] = useState<GeneratedReview | null>(null);
  const [status, setStatus] = useState<ReviewStatus>('idle');
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [history, setHistory] = useState<string[]>([]);
  const [isCopied, setIsCopied] = useState<boolean>(false);

  /**
   * Helper to format current timestamp into readable standard string
   */
  const formatTimestamp = (): string => {
    const now = new Date();
    return now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true });
  };

  /**
   * Generate a new review
   */
  const generateReview = useCallback(async () => {
    setStatus('loading');
    setErrorMessage(null);
    setIsCopied(false);

    try {
      const reviewText = await generateReviewFromGemini(history);
      
      const words = reviewText.split(/\s+/).filter(Boolean).length;
      const chars = reviewText.length;

      const newReview: GeneratedReview = {
        id: Math.random().toString(36).substring(2, 11),
        text: reviewText,
        timestamp: formatTimestamp(),
        charCount: chars,
        wordCount: words,
      };

      setCurrentReview(newReview);
      setHistory((prev) => [...prev, reviewText]);
      setStatus('success');
    } catch (err: any) {
      console.error('Failed to generate review:', err);
      setStatus('error');
      setErrorMessage(err?.message || 'Unable to generate review. Please try again.');
    }
  }, [history]);

  /**
   * Copy current review to clipboard with Clipboard API
   */
  const copyReview = useCallback(async () => {
    if (!currentReview) return;

    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(currentReview.text);
      } else {
        // Fallback for non-secure contexts / legacy environments
        const textArea = document.createElement('textarea');
        textArea.value = currentReview.text;
        textArea.style.position = 'fixed';
        textArea.style.opacity = '0';
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
      }

      setIsCopied(true);
      showToast('Review copied successfully!', 'success');

      // Reset copied state after 2 seconds
      setTimeout(() => {
        setIsCopied(false);
      }, 2000);
    } catch (err) {
      console.error('Failed to copy review:', err);
      showToast('Failed to copy review text.', 'error');
    }
  }, [currentReview, showToast]);

  /**
   * Post on Google Review directly
   */
  const postOnGoogleReview = useCallback(() => {
    try {
      window.open(GOOGLE_REVIEW_URL, '_blank', 'noopener,noreferrer');
    } catch (e) {
      window.location.href = GOOGLE_REVIEW_URL;
    }
  }, []);

  return {
    currentReview,
    status,
    errorMessage,
    isCopied,
    generateReview,
    copyReview,
    postOnGoogleReview,
  };
}
