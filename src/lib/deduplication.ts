import { createHash } from 'crypto';

/**
 * Normalizes text for consistent comparison:
 * - Converts to lowercase
 * - Removes punctuation and special characters
 * - Collapses whitespace into single spaces
 */
export function normalizeText(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s]/g, '')
    .replace(/\s+/g, ' ')
    .trim();
}

/**
 * Generates SHA-256 hash of normalized text for fast exact-match lookup
 */
export function hashText(text: string): string {
  const normalized = normalizeText(text);
  return createHash('sha256').update(normalized).digest('hex');
}

/**
 * Extracts the first sentence from a review text
 */
export function getOpeningSentence(text: string): string {
  const match = text.trim().match(/^([^.!?]+[.!?]?)/);
  return match ? normalizeText(match[1]) : normalizeText(text);
}

/**
 * Extracts word tokens from text
 */
export function getWords(text: string): string[] {
  const normalized = normalizeText(text);
  return normalized.length > 0 ? normalized.split(' ') : [];
}

/**
 * Extracts character n-grams from text (default 3-grams)
 */
export function getCharNgrams(text: string, n = 3): Set<string> {
  const normalized = normalizeText(text);
  const ngrams = new Set<string>();
  if (normalized.length < n) {
    ngrams.add(normalized);
    return ngrams;
  }
  for (let i = 0; i <= normalized.length - n; i++) {
    ngrams.add(normalized.slice(i, i + n));
  }
  return ngrams;
}

/**
 * Calculates Jaccard similarity between two sets of strings
 */
function jaccardIndex<T>(setA: Set<T>, setB: Set<T>): number {
  if (setA.size === 0 && setB.size === 0) return 1;
  if (setA.size === 0 || setB.size === 0) return 0;
  
  let intersectionSize = 0;
  setA.forEach((item) => {
    if (setB.has(item)) {
      intersectionSize++;
    }
  });
  
  const unionSize = setA.size + setB.size - intersectionSize;
  return unionSize > 0 ? intersectionSize / unionSize : 0;
}

/**
 * Calculates combined similarity score between two review texts (0.0 to 1.0)
 * Uses both word token Jaccard similarity and character 3-gram similarity.
 */
export function calculateSimilarity(textA: string, textB: string): number {
  const normA = normalizeText(textA);
  const normB = normalizeText(textB);

  // Exact normalized match
  if (normA === normB) return 1.0;
  if (!normA || !normB) return 0;

  // Word Jaccard similarity
  const wordsA = new Set(getWords(normA));
  const wordsB = new Set(getWords(normB));
  const wordSim = jaccardIndex(wordsA, wordsB);

  // Char 3-gram similarity (detects structural / phrasing similarity)
  const charNgramsA = getCharNgrams(normA, 3);
  const charNgramsB = getCharNgrams(normB, 3);
  const charSim = jaccardIndex(charNgramsA, charNgramsB);

  return Math.max(wordSim, charSim);
}

export interface DuplicateCheckResult {
  isDuplicate: boolean;
  maxSimilarity: number;
  matchedReview?: string;
  reason?: string;
}

/**
 * Checks if a candidate review is an exact duplicate, opening clone, or too similar to existing reviews.
 */
export function isDuplicateOrTooSimilar(
  candidateText: string,
  existingReviews: string[],
  threshold = 0.50
): DuplicateCheckResult {
  const candidateHash = hashText(candidateText);
  const candidateOpening = getOpeningSentence(candidateText);

  for (const existing of existingReviews) {
    // 1. Exact hash check
    if (hashText(existing) === candidateHash) {
      return {
        isDuplicate: true,
        maxSimilarity: 1.0,
        matchedReview: existing,
        reason: 'Exact content match detected',
      };
    }

    // 2. Opening sentence clone check
    const existingOpening = getOpeningSentence(existing);
    if (candidateOpening.length > 10 && candidateOpening === existingOpening) {
      return {
        isDuplicate: true,
        maxSimilarity: 0.9,
        matchedReview: existing,
        reason: 'Identical opening sentence detected',
      };
    }

    // 3. Structural & Vocabulary similarity check
    const sim = calculateSimilarity(candidateText, existing);
    if (sim >= threshold) {
      return {
        isDuplicate: true,
        maxSimilarity: sim,
        matchedReview: existing,
        reason: `High phrasing similarity (${(sim * 100).toFixed(1)}%) detected`,
      };
    }
  }

  return {
    isDuplicate: false,
    maxSimilarity: 0,
  };
}
