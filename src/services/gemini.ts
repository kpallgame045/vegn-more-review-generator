import { GoogleGenerativeAI } from '@google/generative-ai';

// Highly optimized natural human Google Review prompt for Veg'n More
const SYSTEM_PROMPT = `You are a real customer writing a quick, natural 5-star Google review for Veg'n More, a fresh vegetable and fruit store in Raysan near PDPU (PDEU), Gandhinagar.

CRITICAL INSTRUCTIONS:
- Write ONLY the plain review text.
- Output NO quotation marks (no " or '), NO titles, NO emojis, NO hashtags, NO markdown.
- NEVER mention AI, ChatGPT, Gemini, prompts, or automated tools.
- Length: STRICTLY 25 to 45 words.
- Use natural, authentic Indian English as written by real shoppers on Google Maps.

BRAND & LOCATION RULES:
- Include the store name "Veg'n More" in approximately 80% of generated reviews.
- Mention one location detail ("Raysan", "PDPU", "PDEU", or "Gandhinagar") in 30% to 40% of reviews, only when fitting smoothly into the sentence. Do NOT force location words.
- Focus naturally on 1 or 2 of these aspects: fresh vegetables, seasonal fruits, clean store environment, polite staff, fair pricing, great produce variety, or hassle-free daily shopping.

VARIETY & NATURAL WRITING:
- VARY your opening and closing sentences every single time.
- NEVER use repetitive phrases like "Highly recommended", "Best store", "Must visit", or "Excellent service".
- Use warm, realistic alternative phrasing such as "really liked the quality", "clean place with fresh stock", "good value for money", "helpful people", "regularly buy veggies here", "great local spot for fruits".
- Make it sound 100% human, casual, and authentic.

Return ONLY the raw review text.`;

// Extensive pool of human-sounding reviews for 100% reliable fallback
const LOCAL_FALLBACK_REVIEWS = [
  "Bought leafy greens and seasonal fruits from Veg'n More today. The produce was remarkably crisp and clean, and staff was very polite. Fair pricing for such fresh quality.",
  "Very convenient spot for daily vegetable shopping in Raysan. Veg'n More keeps the store well organized and hygienic. Fruits were fresh and reasonably priced.",
  "Regularly pick up my weekly fruits and veggies from Veg'n More near PDPU. Stock is always fresh and weighing is honest. Really good experience overall.",
  "Visited Veg'n More in Gandhinagar for fresh apples and vegetables. Everything looked neatly arranged and clean. Staff assisted kindly and checkout was fast.",
  "Fresh stock arrives early at Veg'n More. The quality of tomatoes, spinach, and capsicum is consistently top grade. Prices are very fair for local residents near PDEU.",
  "Nice and clean store with a great variety of seasonal fruits. Veg'n More makes grocery visits smooth and pleasant. Definitely appreciate their fresh produce.",
  "Glad to have Veg'n More nearby in Raysan. The staff is polite, prices are reasonable, and the vegetables are far fresher than typical roadside vendors.",
  "Picked up fresh pomegranates and leafy veggies from Veg'n More Gandhinagar. Quality is top-notch and the place is spotless. Easy shopping experience.",
  "Veg'n More is our go-to store for fresh vegetables near PDPU. Produce quality is super reliable and staff is always courteous and helpful.",
  "Stocked up on daily veggies at Veg'n More today. Very clean environment, helpful store team, and honest rates for fresh produce."
];

/**
 * Strips all quotation marks, backticks, emojis, and extra formatting cleanly
 */
export function sanitizeReviewText(text: string): string {
  if (!text) return '';
  return text
    .replace(/^["'“`’]+|["'“`’]+$/g, '') // strip leading and trailing quotes
    .replace(/["'“`’]/g, '')            // strip internal quotes
    .replace(/[\u{1F600}-\u{1F64F}\u{1F300}-\u{1F5FF}\u{1F680}-\u{1F6FF}\u{2600}-\u{26FF}\u{2700}-\u{27BF}]/gu, '') // remove emojis
    .replace(/#\w+/g, '')               // remove hashtags
    .replace(/\s+/g, ' ')               // normalize whitespace
    .trim();
}

/**
 * Generates a completely unique, natural review using Gemini API (or local fallback)
 */
export async function generateReviewFromGemini(previousReviews: string[] = []): Promise<string> {
  const apiKey = import.meta.env.VITE_GEMINI_API_KEY;

  // Build avoidance context if history exists
  let historyContext = '';
  if (previousReviews.length > 0) {
    const recent = previousReviews.slice(-6).map((r) => `"${r}"`).join(', ');
    historyContext = `\n\nCRITICAL: Do NOT repeat any opening, ending, or exact sentence structure from these previous reviews: ${recent}`;
  }

  // 1. Try Google Generative AI SDK
  if (apiKey && apiKey !== 'YOUR_API_KEY' && apiKey.length > 5) {
    try {
      const genAI = new GoogleGenerativeAI(apiKey);

      let model;
      try {
        model = genAI.getGenerativeModel({ model: 'gemini-3.1-flash-lite' });
      } catch {
        model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });
      }

      const prompt = `${SYSTEM_PROMPT}${historyContext}\n\nGenerate ONE fresh, natural review now:`;
      const result = await model.generateContent(prompt);
      const response = await result.response;
      const rawText = response.text();

      const cleaned = sanitizeReviewText(rawText);
      if (cleaned && cleaned.length > 15 && !previousReviews.includes(cleaned)) {
        return cleaned;
      }
    } catch (err) {
      console.warn('Gemini SDK call failed, using REST endpoint fallback:', err);

      try {
        const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-3.1-flash-lite:generateContent?key=${apiKey}`;
        const res = await fetch(url, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            contents: [
              {
                parts: [{ text: `${SYSTEM_PROMPT}${historyContext}\n\nGenerate ONE fresh review text:` }]
              }
            ],
            generationConfig: {
              temperature: 0.95,
              maxOutputTokens: 100
            }
          })
        });

        if (res.ok) {
          const data = await res.json();
          const candidateText = data?.candidates?.[0]?.content?.parts?.[0]?.text;
          const cleanedText = sanitizeReviewText(candidateText);
          if (cleanedText && cleanedText.length > 15 && !previousReviews.includes(cleanedText)) {
            return cleanedText;
          }
        }
      } catch (restErr) {
        console.warn('REST API fallback error:', restErr);
      }
    }
  }

  // 2. High Reliability Local Fallback
  const unusedLocal = LOCAL_FALLBACK_REVIEWS.filter((r) => !previousReviews.includes(r));
  const pool = unusedLocal.length > 0 ? unusedLocal : LOCAL_FALLBACK_REVIEWS;
  const randomIndex = Math.floor(Math.random() * pool.length);
  return sanitizeReviewText(pool[randomIndex]);
}
