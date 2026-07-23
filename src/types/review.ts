export interface GeneratedReview {
  id: string;
  text: string;
  timestamp: string;
  charCount: number;
  wordCount: number;
}

export type ReviewStatus = 'idle' | 'loading' | 'success' | 'error';

export interface ToastNotification {
  id: string;
  message: string;
  type: 'success' | 'error' | 'info';
}

export interface ReviewState {
  currentReview: GeneratedReview | null;
  status: ReviewStatus;
  errorMessage: string | null;
  history: string[];
}
