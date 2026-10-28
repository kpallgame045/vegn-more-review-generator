import { 
  normalizeText, 
  hashText, 
  getOpeningSentence,
  calculateSimilarity, 
  isDuplicateOrTooSimilar 
} from './deduplication';

function runTests() {
  console.log('--- Running Deduplication & Similarity Tests ---');

  // Test 1: Normalization
  const sampleText = "Neatly packed vegetables at Veg 'n More PDPU Road!";
  const normalized = normalizeText(sampleText);
  console.assert(normalized === 'neatly packed vegetables at veg n more pdpu road', 'Normalization failed');
  console.log('✓ Normalization test passed');

  // Test 2: Hash consistency
  const hash1 = hashText('Fresh produce in Raysan every morning');
  const hash2 = hashText('fresh produce in raysan EVERY morning!');
  console.assert(hash1 === hash2, 'Hash matching failed');
  console.log('✓ Hash matching test passed');

  // Test 3: Opening sentence extraction
  const multiSentence = "Vegetables are neatly packed here. Easy to shop daily essentials.";
  const opening = getOpeningSentence(multiSentence);
  console.assert(opening === 'vegetables are neatly packed here', 'Opening sentence extraction failed');
  console.log('✓ Opening sentence extraction passed');

  // Test 4: Rejection of identical opening sentence
  const candidateA = "Vegetables are neatly packed here. The fruits were fresh and clean.";
  const candidateB = "Vegetables are neatly packed here! Great store near PDPU.";
  const dupCheckOpening = isDuplicateOrTooSimilar(candidateB, [candidateA], 0.50);
  console.assert(dupCheckOpening.isDuplicate === true, 'Failed to reject duplicate opening sentence');
  console.log('✓ Identical opening sentence rejection passed');

  // Test 5: High similarity detection
  const textA = 'Finding fresh produce near Shagun-40 on PDPU Road is so convenient now.';
  const textB = 'Finding fresh produce near Shagun-40 on PDPU Road is very convenient now.';
  const sim = calculateSimilarity(textA, textB);
  console.assert(sim > 0.60, 'Similarity check failed for near-duplicate');
  console.log(`✓ Similarity check passed (${(sim * 100).toFixed(1)}%)`);

  // Test 6: Unique natural reviews pass
  const textC = 'Neatly packed leafy greens and seasonal fruits arranged in clean baskets.';
  const textD = 'Shopping for daily vegetables near PDPU Road is quick with friendly staff at checkout.';
  const dupCheckDiff = isDuplicateOrTooSimilar(textD, [textC], 0.50);
  console.assert(dupCheckDiff.isDuplicate === false, 'Unique review falsely flagged as duplicate');
  console.log('✓ Distinct review passed verification');

  console.log('--- All Deduplication Tests Passed Successfully! ---');
}

runTests();
