import { createClient, SupabaseClient } from '@supabase/supabase-js';
import { hashText, normalizeText, getOpeningSentence, isDuplicateOrTooSimilar } from './deduplication';

/**
 * Dynamically resolves Supabase URL from environment variables,
 * stripping any inadvertent Markdown brackets or parentheses.
 */
export function getSupabaseUrl(): string {
  const raw =
    process.env.VITE_SUPABASE_URL ||
    process.env.NEXT_PUBLIC_SUPABASE_URL ||
    process.env.SUPABASE_URL ||
    'https://xutmdhmreuldocjsbuwj.supabase.co';

  return raw.trim().replace(/[\[\]\(\)]/g, '');
}

/**
 * Dynamically resolves Supabase Publishable / Anon Key from environment variables.
 */
export function getSupabaseAnonKey(): string {
  const raw =
    process.env.VITE_SUPABASE_PUBLISHABLE_KEY ||
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ||
    process.env.SUPABASE_ANON_KEY ||
    process.env.SUPABASE_PUBLISHABLE_KEY ||
    '';

  return raw.trim().replace(/[\[\]\(\)]/g, '');
}

export interface ConfirmedReviewRecord {
  id?: string;
  branch_name: string;
  review_text: string;
  content_hash: string;
  status?: string;
  created_at?: string;
  used_at?: string;
}

export interface CuratedReviewDraft {
  id: string;
  topic_id: number;
  topic: string;
  length_category: 'short' | 'medium' | 'detailed';
  keyword_group: string;
  branch_name: string;
  review_text: string;
  opening_sentence: string;
}

/**
 * Curated suggestions pool for Veg ’n more — PDPU Road, Raysan branch.
 * Zero external AI calls required (preserves API quota).
 * 
 * Strict specifications:
 * - 25 distinct, customer-editable review suggestions covering 25 specific topics.
 * - 25 unique opening sentences (strictly NO repeated starters, NO "I love this store", NO "The vegetables here are", NO "Great place to shop").
 * - Varied lengths: Short (15–25 words), Medium (26–45 words), Detailed (46–65 words).
 * - Naturally rotated local SEO keyword groups.
 */
export const curatedSuggestionPool: CuratedReviewDraft[] = [
  {
    id: 'pool-pdpu-1',
    topic_id: 1,
    topic: 'Neatly packed vegetables',
    length_category: 'medium',
    keyword_group: 'neatly packed vegetables',
    branch_name: 'PDPU Branch',
    opening_sentence: 'Pre-packaged daily greens and portioned vegetables make evening meal prep so much easier.',
    review_text: 'Pre-packaged daily greens and portioned vegetables make evening meal prep so much easier. Finding clean produce right near Shagun-40 on PDPU Road keeps my daily cooking routine fast and stress-free.',
  },
  {
    id: 'pool-pdpu-2',
    topic_id: 2,
    topic: 'Fresh vegetables and seasonal produce',
    length_category: 'short',
    keyword_group: 'fresh vegetables in Raysan',
    branch_name: 'PDPU Branch',
    opening_sentence: 'Morning vegetable arrivals here are consistently crisp and vibrant.',
    review_text: 'Morning vegetable arrivals here are consistently crisp and vibrant. It is easy to pick up fresh seasonal produce in Raysan without hassle.',
  },
  {
    id: 'pool-pdpu-3',
    topic_id: 3,
    topic: 'Fresh fruits and available varieties',
    length_category: 'detailed',
    keyword_group: 'fruit shop near PDPU Road',
    branch_name: 'PDPU Branch',
    opening_sentence: 'Selecting fresh seasonal fruits is genuinely pleasant thanks to the tidy display boxes.',
    review_text: 'Selecting fresh seasonal fruits is genuinely pleasant thanks to the tidy display boxes. From sweet pomegranates and crisp apples to fresh citrus, the fruit variety here is reliable. Having a dependable fruit shop near PDPU Road makes regular grocery trips much simpler for our family in Gandhinagar.',
  },
  {
    id: 'pool-pdpu-4',
    topic_id: 4,
    topic: 'Organized vegetable displays',
    length_category: 'medium',
    keyword_group: 'Veg ’n more PDPU Branch',
    branch_name: 'PDPU Branch',
    opening_sentence: 'Clear shelf layout and cleanly stacked crates make spotting daily vegetables effortless.',
    review_text: 'Clear shelf layout and cleanly stacked crates make spotting daily vegetables effortless. Everything is well separated, labeled, and dust-free at the PDPU Road branch, which makes shopping quick.',
  },
  {
    id: 'pool-pdpu-5',
    topic_id: 5,
    topic: 'Clean and orderly shopping arrangements',
    length_category: 'short',
    keyword_group: 'fresh produce in Gandhinagar',
    branch_name: 'PDPU Branch',
    opening_sentence: 'Walking into this grocery store is always a tidy and hygienic experience.',
    review_text: 'Walking into this grocery store is always a tidy and hygienic experience. Racks are neatly maintained and aisle space is well managed in Raysan.',
  },
  {
    id: 'pool-pdpu-6',
    topic_id: 6,
    topic: 'Vegetable sorting and packing',
    length_category: 'detailed',
    keyword_group: 'neatly packed vegetables',
    branch_name: 'PDPU Branch',
    opening_sentence: 'Hygienically sorted and weighed produce packets take the hassle out of standard grocery shopping.',
    review_text: 'Hygienically sorted and weighed produce packets take the hassle out of standard grocery shopping. You do not have to dig through messy bins or wait in long weighing queues. The pre-sorted vegetable packs at Veg ’n more PDPU Branch save genuine kitchen prep time every single day.',
  },
  {
    id: 'pool-pdpu-7',
    topic_id: 7,
    topic: 'Convenient grocery shopping',
    length_category: 'medium',
    keyword_group: 'grocery shopping near PDPU Road',
    branch_name: 'PDPU Branch',
    opening_sentence: 'Quick billing and accessible parking near JB Corner turn grocery shopping into a breeze.',
    review_text: 'Quick billing and accessible parking near JB Corner turn grocery shopping into a breeze. Grabbing pre-packed daily greens and seasonal essentials takes just five minutes on my way home from work.',
  },
  {
    id: 'pool-pdpu-8',
    topic_id: 8,
    topic: 'Shopping near PDPU Road',
    length_category: 'detailed',
    keyword_group: 'vegetable shop near PDPU Road',
    branch_name: 'PDPU Branch',
    opening_sentence: 'Residents and students along the PDPU corridor will find this location exceptionally handy for fresh produce.',
    review_text: 'Residents and students along the PDPU corridor will find this location exceptionally handy for fresh produce. Having a dedicated vegetable shop near PDPU Road with clean pre-portioned packaging means healthy cooking is convenient, even with a hectic college or work schedule in Gandhinagar.',
  },
  {
    id: 'pool-pdpu-9',
    topic_id: 9,
    topic: 'Finding fruits and vegetables in Raysan',
    length_category: 'short',
    keyword_group: 'fresh vegetables in Raysan',
    branch_name: 'PDPU Branch',
    opening_sentence: 'Locating reliable, clean produce in the Raysan area used to require multiple stops.',
    review_text: 'Locating reliable, clean produce in the Raysan area used to require multiple stops. Veg ’n more brings fresh fruits and vegetables together under one organized roof.',
  },
  {
    id: 'pool-pdpu-10',
    topic_id: 10,
    topic: 'Product variety at Veg ’n more PDPU Branch',
    length_category: 'detailed',
    keyword_group: 'Veg ’n more PDPU Branch',
    branch_name: 'PDPU Branch',
    opening_sentence: 'Browsing the shelves reveals an impressive mix of daily staples and seasonal greens.',
    review_text: 'Browsing the shelves reveals an impressive mix of daily staples and seasonal greens. Whether picking up coriander, root vegetables, salad greens, or regional fruits, the variety at Veg ’n more PDPU Branch covers our everyday kitchen needs nicely without having to visit crowded wholesale markets.',
  },
  {
    id: 'pool-pdpu-11',
    topic_id: 11,
    topic: 'Convenient shopping around Gandhinagar',
    length_category: 'medium',
    keyword_group: 'fresh fruits and vegetables in Gandhinagar',
    branch_name: 'PDPU Branch',
    opening_sentence: 'Daily errands are far smoother when fresh fruits and vegetables in Gandhinagar are this well organized.',
    review_text: 'Daily errands are far smoother when fresh fruits and vegetables in Gandhinagar are this well organized. The store layout is clean, checkout through UPI is immediate, and produce quality stays consistent across regular visits.',
  },
  {
    id: 'pool-pdpu-12',
    topic_id: 12,
    topic: 'Vegetable selection and organization',
    length_category: 'short',
    keyword_group: 'vegetable shop in Raysan',
    branch_name: 'PDPU Branch',
    opening_sentence: 'Every crate is neatly arranged by category so finding cooking ingredients is straightforward.',
    review_text: 'Every crate is neatly arranged by category so finding cooking ingredients is straightforward. Sorting through greens is smooth and pleasant near Shagun-40.',
  },
  {
    id: 'pool-pdpu-13',
    topic_id: 13,
    topic: 'Fruit and vegetable shopping convenience',
    length_category: 'medium',
    keyword_group: 'fresh fruits and vegetables in Raysan',
    branch_name: 'PDPU Branch',
    opening_sentence: 'Picking up evening groceries here takes only a few minutes from entry to checkout.',
    review_text: 'Picking up evening groceries here takes only a few minutes from entry to checkout. The neat packaging and clear digital weighing make buying fresh fruits and vegetables in Raysan both transparent and completely stress-free.',
  },
  {
    id: 'pool-pdpu-14',
    topic_id: 14,
    topic: 'Packaging that makes carrying produce easier',
    length_category: 'detailed',
    keyword_group: 'PDPU Road',
    branch_name: 'PDPU Branch',
    opening_sentence: 'Sturdy, portioned produce packages make carrying your vegetables home much easier without crushing delicate greens.',
    review_text: 'Sturdy, portioned produce packages make carrying your vegetables home much easier without crushing delicate greens. Spinach and mint stay completely protected in transport. It is a thoughtful touch that anyone shopping along PDPU Road will genuinely appreciate when stocking up for the week.',
  },
  {
    id: 'pool-pdpu-15',
    topic_id: 15,
    topic: 'Organized shelves and product presentation',
    length_category: 'short',
    keyword_group: 'clean store organization',
    branch_name: 'PDPU Branch',
    opening_sentence: 'Visual presentation on the shelves is clean, modern, and noticeably free from street dust.',
    review_text: 'Visual presentation on the shelves is clean, modern, and noticeably free from street dust. You can quickly inspect everything before placing it into your basket.',
  },
  {
    id: 'pool-pdpu-16',
    topic_id: 16,
    topic: 'Availability of everyday vegetables',
    length_category: 'medium',
    keyword_group: 'vegetable store in Raysan, Gandhinagar',
    branch_name: 'PDPU Branch',
    opening_sentence: 'Essential staples like potatoes, onions, tomatoes, and ginger are always stocked and cleanly arranged.',
    review_text: 'Essential staples like potatoes, onions, tomatoes, and ginger are always stocked and cleanly arranged. Having everyday cooking necessities ready in sorted trays saves time during quick weekday visits to this vegetable store in Raysan, Gandhinagar.',
  },
  {
    id: 'pool-pdpu-17',
    topic_id: 17,
    topic: 'Seasonal fruits',
    length_category: 'detailed',
    keyword_group: 'fruit shop near PDPU Road',
    branch_name: 'PDPU Branch',
    opening_sentence: 'Seasonal fruit crates look appealing and naturally fresh right at the entrance.',
    review_text: 'Seasonal fruit crates look appealing and naturally fresh right at the entrance. Finding sweet seasonal melons, oranges, and papayas properly grouped makes healthy snacking easy. For anyone searching for a dependable fruit shop near PDPU Road, this organized spot offers great convenience and clean arrangements.',
  },
  {
    id: 'pool-pdpu-18',
    topic_id: 18,
    topic: 'Convenient location near Shagun-40',
    length_category: 'medium',
    keyword_group: 'near Shagun-40',
    branch_name: 'PDPU Branch',
    opening_sentence: 'Situated conveniently at JB Corner near Shagun-40, this store has ample parking out front.',
    review_text: 'Situated conveniently at JB Corner near Shagun-40, this store has ample parking out front. It is an ideal neighborhood stop for quick vegetable runs without getting caught in heavy town traffic.',
  },
  {
    id: 'pool-pdpu-19',
    topic_id: 19,
    topic: 'Fresh produce selection',
    length_category: 'short',
    keyword_group: 'fresh produce in Gandhinagar',
    branch_name: 'PDPU Branch',
    opening_sentence: 'Quality of the daily produce selection feels dependable on every weekday visit.',
    review_text: 'Quality of the daily produce selection feels dependable on every weekday visit. Crisp greens and solid root vegetables are always available in Raysan.',
  },
  {
    id: 'pool-pdpu-20',
    topic_id: 20,
    topic: 'Organized shopping near PDPU Road',
    length_category: 'detailed',
    keyword_group: 'grocery shopping near PDPU Road',
    branch_name: 'PDPU Branch',
    opening_sentence: 'Grocery shopping near PDPU Road has become significantly more efficient with this organized setup.',
    review_text: 'Grocery shopping near PDPU Road has become significantly more efficient with this organized setup. Everything from leafy herbs to gourds is clearly displayed with visible pricing. It provides a peaceful, clean shopping environment that makes everyday meal planning much simpler for local families.',
  },
  {
    id: 'pool-pdpu-21',
    topic_id: 21,
    topic: 'Vegetable packing and product arrangement',
    length_category: 'medium',
    keyword_group: 'neatly packed vegetables',
    branch_name: 'PDPU Branch',
    opening_sentence: 'Attention to clean packaging makes a noticeable difference when buying fresh greens.',
    review_text: 'Attention to clean packaging makes a noticeable difference when buying fresh greens. Produce packets are dry, clean, and properly sealed, which keeps the home refrigerator organized and prevents vegetable waste after shopping at the PDPU branch.',
  },
  {
    id: 'pool-pdpu-22',
    topic_id: 22,
    topic: 'Fruit selection at the store',
    length_category: 'short',
    keyword_group: 'fruit shop in Gandhinagar',
    branch_name: 'PDPU Branch',
    opening_sentence: 'Fruit shelves offer a wholesome assortment of everyday favorites and seasonal specialties.',
    review_text: 'Fruit shelves offer a wholesome assortment of everyday favorites and seasonal specialties. Apples and citrus fruits are cleanly arranged and easy to pick up in Gandhinagar.',
  },
  {
    id: 'pool-pdpu-23',
    topic_id: 23,
    topic: 'Convenient local grocery shopping',
    length_category: 'detailed',
    keyword_group: 'fresh vegetables in Raysan',
    branch_name: 'PDPU Branch',
    opening_sentence: 'Stopping by after office hours is relaxed because the aisles are wide and checkout moves quickly.',
    review_text: 'Stopping by after office hours is relaxed because the aisles are wide and checkout moves quickly. Finding fresh vegetables in Raysan without contending with muddy or crowded bazaar lanes is a huge relief. The store team keeps the shelves full and the billing line moving efficiently.',
  },
  {
    id: 'pool-pdpu-24',
    topic_id: 24,
    topic: 'Product presentation and store organization',
    length_category: 'medium',
    keyword_group: 'Veg ’n more PDPU Branch',
    branch_name: 'PDPU Branch',
    opening_sentence: 'Neat product presentation and polite counter assistance make each shopping trip straightforward.',
    review_text: 'Neat product presentation and polite counter assistance make each shopping trip straightforward. Shelves are systematically restocked, weights are clearly displayed, and the store atmosphere is pleasant throughout the PDPU Road store.',
  },
  {
    id: 'pool-pdpu-25',
    topic_id: 25,
    topic: 'Fresh leafy greens and daily cooking essentials',
    length_category: 'detailed',
    keyword_group: 'vegetable shop near PDPU Road',
    branch_name: 'PDPU Branch',
    opening_sentence: 'Fresh coriander, fenugreek, and spinach arrive early in the morning and stay well chilled.',
    review_text: 'Fresh coriander, fenugreek, and spinach arrive early in the morning and stay well chilled. Having clean, pre-trimmed leafy vegetables readily available saves substantial prep time before cooking. It makes Veg ’n more PDPU Branch my go-to vegetable shop near PDPU Road for all daily cooking ingredients.',
  },
];

// Tracking history of recently presented opening sentences and keyword groups
const recentlyUsedOpenings: string[] = [];
let lastUsedKeywordGroup = '';
let rotationIndex = 0;

/**
 * Returns all 25 curated drafts with complete metadata
 */
export function getAll25Drafts(): CuratedReviewDraft[] {
  return [...curatedSuggestionPool];
}

/**
 * Returns the next available curated suggestion without calling external AI APIs (synchronous rotation).
 */
export function getNextCuratedSuggestion(excludeText?: string): string {
  const pool = curatedSuggestionPool;
  if (pool.length === 0) {
    return 'Neatly packed fresh vegetables and quick service at Veg ’n more PDPU Road.';
  }

  for (let i = 0; i < pool.length; i++) {
    rotationIndex = (rotationIndex + 1) % pool.length;
    if (pool[rotationIndex].review_text !== excludeText) {
      return pool[rotationIndex].review_text;
    }
  }

  return pool[0].review_text;
}

/**
 * Priority 1 & 2 Selection Engine:
 * Pre-presentation duplicate prevention:
 * Retrieves the next curated suggestion that:
 * 1. Does not match the currently displayed text (excludeText).
 * 2. Has NOT already been confirmed and saved in public.reviews for this branch.
 * 3. Does NOT reuse an opening sentence presented recently.
 * 4. Rotates keyword groups so consecutive suggestions vary naturally.
 */
export async function getNextAvailableCuratedSuggestion(
  excludeText?: string,
  branchName = 'PDPU Branch'
): Promise<{ review_text: string; topic: string; length_category: string; keyword_group: string }> {
  const confirmed = await getConfirmedReviews(branchName);
  const confirmedHashes = new Set(confirmed.map((text) => hashText(text.trim())));
  const confirmedOpenings = new Set(confirmed.map((text) => getOpeningSentence(text)));

  // Filter pool candidates
  const availableCandidates = curatedSuggestionPool.filter((item) => {
    const clean = item.review_text.trim();
    if (excludeText && clean === excludeText.trim()) return false;
    
    // Hash check against confirmed database records
    const h = hashText(clean);
    if (confirmedHashes.has(h)) return false;

    // Opening sentence check against confirmed database records
    const opening = item.opening_sentence || getOpeningSentence(clean);
    if (confirmedOpenings.has(opening)) return false;

    // Opening sentence check against recent presentation session
    if (recentlyUsedOpenings.includes(opening)) return false;

    // Similarity check against confirmed reviews
    if (confirmed.length > 0) {
      const dup = isDuplicateOrTooSimilar(clean, confirmed, 0.70);
      if (dup.isDuplicate) return false;
    }

    return true;
  });

  let selected: CuratedReviewDraft | null = null;

  if (availableCandidates.length > 0) {
    // Prefer a candidate whose keyword_group is different from the last used group
    const variedGroupCandidates = availableCandidates.filter(
      (c) => c.keyword_group !== lastUsedKeywordGroup
    );
    const candidateList = variedGroupCandidates.length > 0 ? variedGroupCandidates : availableCandidates;

    rotationIndex = (rotationIndex + 1) % candidateList.length;
    selected = candidateList[rotationIndex];
  } else {
    // Fallback if all 25 drafts have already been presented or saved:
    // clear recently used openings buffer and pick next from full pool
    recentlyUsedOpenings.length = 0;
    const pool = curatedSuggestionPool;
    for (let i = 0; i < pool.length; i++) {
      rotationIndex = (rotationIndex + 1) % pool.length;
      if (pool[rotationIndex].review_text !== excludeText) {
        selected = pool[rotationIndex];
        break;
      }
    }
    if (!selected) selected = pool[0];
  }

  // Record tracking state
  const opening = selected.opening_sentence || getOpeningSentence(selected.review_text);
  recentlyUsedOpenings.push(opening);
  if (recentlyUsedOpenings.length > 6) {
    recentlyUsedOpenings.shift();
  }
  lastUsedKeywordGroup = selected.keyword_group;

  return {
    review_text: selected.review_text,
    topic: selected.topic,
    length_category: selected.length_category,
    keyword_group: selected.keyword_group,
  };
}

export function isSupabaseConfigured(): boolean {
  const url = getSupabaseUrl();
  const key = getSupabaseAnonKey();

  return Boolean(
    url &&
    key &&
    !url.includes('your-project') &&
    !key.includes('your_supabase') &&
    key.length > 15
  );
}

export function getSupabaseClient(): SupabaseClient | null {
  if (!isSupabaseConfigured()) {
    return null;
  }
  return createClient(getSupabaseUrl(), getSupabaseAnonKey(), {
    auth: { persistSession: false },
  });
}

/**
 * Fetches actual confirmed reviews from public.reviews for the branch.
 * Only returns reviews where status = 'used'.
 */
export async function getConfirmedReviews(branchName = 'PDPU Branch'): Promise<string[]> {
  const client = getSupabaseClient();

  if (client) {
    try {
      const { data, error } = await client
        .from('reviews')
        .select('review_text, branch_name, status')
        .eq('branch_name', branchName)
        .eq('status', 'used')
        .order('created_at', { ascending: false })
        .limit(100);

      if (!error && data && data.length > 0) {
        return data.map((d) => d.review_text).filter(Boolean);
      }
    } catch (err) {
      console.warn('Could not query confirmed reviews from Supabase:', err);
    }
  }

  return [];
}

/**
 * Full details fetch from public.reviews for the branch
 */
export async function fetchConfirmedReviewsList(branchName = 'PDPU Branch'): Promise<ConfirmedReviewRecord[]> {
  const client = getSupabaseClient();

  if (client) {
    try {
      const { data, error } = await client
        .from('reviews')
        .select('*')
        .eq('branch_name', branchName)
        .order('created_at', { ascending: false })
        .limit(50);

      if (!error && data) {
        return data as ConfirmedReviewRecord[];
      }
    } catch (err) {
      console.warn('Failed to fetch confirmed reviews from database:', err);
    }
  }

  return [];
}

/**
 * Checks if a review draft is a duplicate of an ALREADY-SAVED review in public.reviews.
 * - Checks exact hash against existing records for the branch.
 * - Checks opening sentence similarity against saved records.
 * - Uses 0.70 similarity threshold to prevent false positives while blocking genuine clones.
 */
export async function checkIsDuplicateReview(
  reviewText: string,
  branchName = 'PDPU Branch'
): Promise<{ isDuplicate: boolean; reason?: string }> {
  const clean = reviewText.trim();
  if (!clean) return { isDuplicate: true, reason: 'Review text cannot be empty.' };

  const targetHash = hashText(clean);
  const client = getSupabaseClient();

  if (client) {
    try {
      // 1. Exact hash check in public.reviews for this branch
      const { data: exactMatch, error: hashError } = await client
        .from('reviews')
        .select('id, review_text')
        .eq('branch_name', branchName)
        .eq('content_hash', targetHash)
        .limit(1)
        .maybeSingle();

      if (!hashError && exactMatch) {
        return {
          isDuplicate: true,
          reason: 'This exact review has already been submitted for this branch. You can personalize a few words to share your own unique experience.',
        };
      }
    } catch (err) {
      console.warn('Exact hash check in database encountered an issue:', err);
    }
  }

  // 2. Similarity and opening sentence check against confirmed reviews in database
  const confirmedReviews = await getConfirmedReviews(branchName);
  if (confirmedReviews.length > 0) {
    const dupCheck = isDuplicateOrTooSimilar(clean, confirmedReviews, 0.70);
    if (dupCheck.isDuplicate) {
      return {
        isDuplicate: true,
        reason: dupCheck.reason || 'This draft is very similar to a review already submitted for this branch. Please personalize it with your own experience.',
      };
    }
  }

  return { isDuplicate: false };
}

/**
 * Saves a valid, customer-confirmed review to public.reviews.
 * - Sets branch_name strictly to "PDPU Branch" for new records.
 * - Uses verified columns: branch_name, review_text, content_hash, status ('used'), created_at, used_at.
 * - Complies with database constraints: reviews_status_check ('available', 'used').
 * - Displays success ONLY after Supabase confirms the insert succeeded.
 * - Never claims data was saved if it exists only in browser memory.
 */
export async function saveConfirmedReview(params: {
  branchName?: string;
  reviewText: string;
  tags?: string[];
  rating?: string;
}): Promise<{ success: boolean; id?: string; message?: string; error?: string; isConfigured?: boolean }> {
  const {
    branchName = 'PDPU Branch',
    reviewText,
  } = params;

  const cleanText = reviewText?.trim() || '';

  // 1. Input Validation
  if (cleanText.length < 15) {
    return {
      success: false,
      error: 'Review text is too short. Please write or personalize at least 15 characters.',
    };
  }

  // 2. Duplicate Check against database records
  const dupCheck = await checkIsDuplicateReview(cleanText, branchName);
  if (dupCheck.isDuplicate) {
    return {
      success: false,
      error: dupCheck.reason || 'Duplicate review detected. Please modify the review slightly.',
    };
  }

  const contentHash = hashText(cleanText);

  // 3. Environment configuration check
  if (!isSupabaseConfigured()) {
    return {
      success: false,
      isConfigured: false,
      error:
        'Supabase publishable key is not configured in local environment variables. Please check VITE_SUPABASE_PUBLISHABLE_KEY in .env.local.',
    };
  }

  const client = getSupabaseClient();
  if (!client) {
    return {
      success: false,
      isConfigured: false,
      error: 'Failed to initialize Supabase client with configured environment variables.',
    };
  }

  // 4. Perform direct insert into public.reviews
  try {
    const nowIso = new Date().toISOString();
    const newRecord = {
      branch_name: branchName, // Strictly "PDPU Branch"
      review_text: cleanText,
      content_hash: contentHash, // Exact 64-character SHA-256 hash
      status: 'used', // Conforms to check constraint reviews_status_check
      created_at: nowIso,
      used_at: nowIso,
    };

    const { data, error } = await client
      .from('reviews')
      .insert([newRecord])
      .select('id, branch_name, review_text, content_hash, status, created_at')
      .single();

    if (error) {
      console.error('Supabase reviews insert error:', error.message);
      return {
        success: false,
        error: `Database save failed: ${error.message}`,
      };
    }

    if (!data?.id) {
      return {
        success: false,
        error: 'Database save failed: No confirmation ID returned from Supabase.',
      };
    }

    // Success confirmed by database
    return {
      success: true,
      id: data.id,
      message: 'Review successfully saved to database ✓',
    };
  } catch (err: any) {
    console.error('Unhandled exception while saving to Supabase:', err);
    return {
      success: false,
      error: `Network/database exception: ${err.message || 'Unknown error'}`,
    };
  }
}
