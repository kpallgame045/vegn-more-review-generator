const fs = require('fs');
const path = require('path');
const { GoogleGenAI } = require('@google/genai');

const envLocalPath = path.resolve(__dirname, '..', '.env.local');
let apiKey = '';
if (fs.existsSync(envLocalPath)) {
  const content = fs.readFileSync(envLocalPath, 'utf8');
  for (const line of content.split('\n')) {
    const trimmed = line.trim();
    if (trimmed.startsWith('GEMINI_API_KEY=')) {
      apiKey = trimmed.substring('GEMINI_API_KEY='.length).trim();
      break;
    }
  }
}

if (!apiKey) {
  console.log('No GEMINI_API_KEY found in .env.local');
  process.exit(1);
}

const maskedKey = apiKey.substring(0, 5) + '...' + apiKey.substring(apiKey.length - 4);
console.log('Testing Gemini API key:', maskedKey);

async function testGemini() {
  const ai = new GoogleGenAI({ apiKey });
  const candidateModels = [
    'gemini-3.1-flash-lite',
    'gemini-2.5-flash-lite',
    'gemini-2.5-flash',
    'gemini-2.0-flash',
    'gemini-1.5-flash'
  ];

  for (const model of candidateModels) {
    try {
      console.log(`\nAttempting model "${model}"...`);
      const response = await ai.models.generateContent({
        model,
        contents: 'Say OK',
      });
      console.log(`✓ Model "${model}" responded successfully:`, response.text?.trim());
      return { success: true, workingModel: model };
    } catch (err) {
      console.log(`✕ Model "${model}" failed:`, err.message || err);
      // If error is an invalid API key, no need to retry other models
      if (err.message && (err.message.includes('API_KEY_INVALID') || err.message.includes('403') || err.message.includes('PERMISSION_DENIED'))) {
        console.log('API key error detected. Stopping tests.');
        return { success: false, error: err.message };
      }
    }
  }
  return { success: false, error: 'None of the candidate models succeeded' };
}

testGemini().then(result => {
  console.log('\nFinal Test Result:', JSON.stringify(result));
}).catch(e => {
  console.error('Test execution error:', e);
});
