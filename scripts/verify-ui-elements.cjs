const http = require('http');

http.get('http://localhost:3000', (res) => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    console.log('HTTP Status:', res.statusCode);
    console.log('Has "Confirm & Save Draft":', data.includes('Confirm & Save Draft'));
    console.log('Has "Veg ’n more edit text":', data.includes('Veg ’n more edit text'));
    console.log('Has "Copy Review":', data.includes('Copy Review'));
    console.log('Has "POST ON GOOGLE":', data.includes('POST ON GOOGLE'));
    console.log('Has "Generate Another Suggestion":', data.includes('Generate Another Suggestion'));
    console.log('Has FloatingProduceBackdrop produce SVGs:', data.includes('appleShadow') && data.includes('tomatoShadow') && data.includes('orangeShadow'));
    console.log('Has Apple, Guava, Pineapple, Mosambi, Orange, Pomegranate SVGs:', data.includes('appleBody') && data.includes('guavaBody') && data.includes('pineBody') && data.includes('mosambiBody') && data.includes('pomBody'));
    console.log('Has Potato, Onion, Tomato, Chilli, Cucumber, Cauliflower, Carrot, Capsicum SVGs:', data.includes('potatoBody') && data.includes('onionBody') && data.includes('chilliBody') && data.includes('cucBody') && data.includes('cauliCurd') && data.includes('carrotBody') && data.includes('capsBody'));
  });
}).on('error', err => {
  console.error('Error fetching page:', err.message);
});
