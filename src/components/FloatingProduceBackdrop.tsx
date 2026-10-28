'use client';

import React from 'react';

/**
 * Photorealistic 3D-styled SVG Produce Assets:
 * Fruits: Red Apple, Fresh Guava, Pineapple, Mosambi, Orange, Pomegranate
 * Vegetables: Potato, Onion, Tomato, Green Chilli, Cucumber, Cauliflower, Carrot, Capsicum
 */

// 1. RED APPLE
function RedApple({ className = "w-full h-full" }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="appleBody" cx="38%" cy="32%" r="65%">
          <stop offset="0%" stopColor="#ff6b6b" />
          <stop offset="25%" stopColor="#e61c24" />
          <stop offset="70%" stopColor="#a80710" />
          <stop offset="100%" stopColor="#4a0205" />
        </radialGradient>
        <radialGradient id="appleSpec" cx="32%" cy="28%" r="20%">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.85" />
          <stop offset="60%" stopColor="#ffffff" stopOpacity="0.2" />
          <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="appleLeaf" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#86efac" />
          <stop offset="50%" stopColor="#16a34a" />
          <stop offset="100%" stopColor="#14532d" />
        </linearGradient>
        <linearGradient id="appleStem" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#854d0e" />
          <stop offset="100%" stopColor="#3f2305" />
        </linearGradient>
        <filter id="appleShadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="6" stdDeviation="5" floodColor="#3f0003" floodOpacity="0.35" />
        </filter>
      </defs>
      <g filter="url(#appleShadow)">
        {/* Woody stem */}
        <path d="M50 26 C52 14, 57 10, 63 6" stroke="url(#appleStem)" strokeWidth="3.8" strokeLinecap="round" />
        {/* Fresh emerald leaf with vein */}
        <path d="M52 19 C62 12, 74 14, 76 22 C68 28, 56 25, 52 19 Z" fill="url(#appleLeaf)" />
        <path d="M53 19 C63 17, 72 19, 74 21" stroke="#4ade80" strokeWidth="0.8" strokeLinecap="round" opacity="0.7" />
        {/* Apple body silhouette */}
        <path d="M50 28 C42 22, 22 22, 16 38 C9 56, 17 84, 38 88 C46 89.5, 48 85, 50 85 C52 85, 54 89.5, 62 88 C83 84, 91 56, 84 38 C78 22, 58 22, 50 28 Z" fill="url(#appleBody)" />
        {/* Top dimple depression shadow */}
        <ellipse cx="50" cy="27" rx="6" ry="2.5" fill="#3a0104" opacity="0.6" />
        {/* Specular gloss highlight */}
        <ellipse cx="34" cy="38" rx="10" ry="16" transform="rotate(-22 34 38)" fill="url(#appleSpec)" />
        <ellipse cx="40" cy="30" rx="3.5" ry="5.5" transform="rotate(-15 40 30)" fill="#ffffff" opacity="0.45" />
      </g>
    </svg>
  );
}

// 2. FRESH GUAVA
function FreshGuava({ className = "w-full h-full" }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="guavaBody" cx="38%" cy="35%" r="65%">
          <stop offset="0%" stopColor="#bef264" />
          <stop offset="35%" stopColor="#84cc16" />
          <stop offset="75%" stopColor="#4d7c0f" />
          <stop offset="100%" stopColor="#1a2e05" />
        </radialGradient>
        <radialGradient id="guavaSpec" cx="36%" cy="32%" r="22%">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.7" />
          <stop offset="70%" stopColor="#ffffff" stopOpacity="0" />
        </radialGradient>
        <filter id="guavaShadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="6" stdDeviation="5" floodColor="#1a2e05" floodOpacity="0.32" />
        </filter>
      </defs>
      <g filter="url(#guavaShadow)">
        {/* Little stem */}
        <path d="M50 16 C50 10, 48 7, 46 4" stroke="#4d7c0f" strokeWidth="3" strokeLinecap="round" />
        {/* Guava pear-like body */}
        <path d="M50 16 C40 16, 26 26, 22 44 C17 65, 26 86, 48 88 C52 88, 54 88, 56 88 C76 86, 85 64, 79 44 C75 26, 61 16, 50 16 Z" fill="url(#guavaBody)" />
        {/* Blossom remnant at bottom */}
        <path d="M48 87 L52 89 L50 91 Z" fill="#365314" opacity="0.8" />
        {/* Soft highlight */}
        <ellipse cx="38" cy="40" rx="14" ry="18" transform="rotate(-15 38 40)" fill="url(#guavaSpec)" />
        {/* Subtle skin stipple ring */}
        <circle cx="62" cy="52" r="1.2" fill="#ecfccb" opacity="0.6" />
        <circle cx="58" cy="64" r="1.4" fill="#ecfccb" opacity="0.5" />
        <circle cx="34" cy="62" r="1.3" fill="#ecfccb" opacity="0.6" />
      </g>
    </svg>
  );
}

// 3. PINEAPPLE
function Pineapple({ className = "w-full h-full" }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 120" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="pineBody" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#fef08a" />
          <stop offset="30%" stopColor="#eab308" />
          <stop offset="70%" stopColor="#ca8a04" />
          <stop offset="100%" stopColor="#713f12" />
        </linearGradient>
        <linearGradient id="crownLeaf" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#4ade80" />
          <stop offset="40%" stopColor="#16a34a" />
          <stop offset="100%" stopColor="#14532d" />
        </linearGradient>
        <filter id="pineShadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="7" stdDeviation="5" floodColor="#451a03" floodOpacity="0.35" />
        </filter>
      </defs>
      <g filter="url(#pineShadow)">
        {/* Spiky crown leaves */}
        <path d="M50 40 L50 6 C48 18, 44 26, 42 36 Z" fill="url(#crownLeaf)" />
        <path d="M50 40 L64 12 C58 22, 56 28, 54 38 Z" fill="url(#crownLeaf)" />
        <path d="M50 40 L36 12 C42 22, 44 28, 46 38 Z" fill="url(#crownLeaf)" />
        <path d="M50 40 L74 22 C64 30, 60 34, 56 40 Z" fill="url(#crownLeaf)" opacity="0.9" />
        <path d="M50 40 L26 22 C36 30, 40 34, 44 40 Z" fill="url(#crownLeaf)" opacity="0.9" />

        {/* Pineapple oval barrel body */}
        <ellipse cx="50" cy="74" rx="28" ry="36" fill="url(#pineBody)" />

        {/* Diamond facets mesh overlay */}
        <path d="M30 52 L70 94 M24 64 L68 104 M36 44 L76 82 M26 86 L64 48 M34 100 L74 60 M24 72 L60 40" stroke="#78350f" strokeWidth="1.6" opacity="0.55" />
        {/* Diamond center dots */}
        <circle cx="50" cy="62" r="2.2" fill="#854d0e" opacity="0.75" />
        <circle cx="40" cy="74" r="2.2" fill="#854d0e" opacity="0.75" />
        <circle cx="60" cy="74" r="2.2" fill="#854d0e" opacity="0.75" />
        <circle cx="50" cy="86" r="2.2" fill="#854d0e" opacity="0.75" />
        {/* Sunlight gloss */}
        <ellipse cx="38" cy="64" rx="8" ry="16" transform="rotate(-15 38 64)" fill="#ffffff" opacity="0.25" />
      </g>
    </svg>
  );
}

// 4. MOSAMBI (SWEET LIME)
function Mosambi({ className = "w-full h-full" }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="mosambiBody" cx="36%" cy="34%" r="66%">
          <stop offset="0%" stopColor="#fef08a" />
          <stop offset="35%" stopColor="#a3e635" />
          <stop offset="75%" stopColor="#4d7c0f" />
          <stop offset="100%" stopColor="#1e3a05" />
        </radialGradient>
        <radialGradient id="mosambiSpec" cx="34%" cy="30%" r="20%">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.8" />
          <stop offset="60%" stopColor="#ffffff" stopOpacity="0.2" />
          <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
        </radialGradient>
        <filter id="mosambiShadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="6" stdDeviation="5" floodColor="#1e3a05" floodOpacity="0.32" />
        </filter>
      </defs>
      <g filter="url(#mosambiShadow)">
        <circle cx="50" cy="50" r="38" fill="url(#mosambiBody)" />
        {/* Citrus rind stipple pores */}
        <circle cx="64" cy="42" r="1.1" fill="#ecfccb" opacity="0.7" />
        <circle cx="56" cy="62" r="1.2" fill="#ecfccb" opacity="0.7" />
        <circle cx="42" cy="68" r="1" fill="#ecfccb" opacity="0.6" />
        {/* Stem attachment point */}
        <circle cx="50" cy="13" r="2.5" fill="#365314" />
        <ellipse cx="36" cy="38" rx="11" ry="14" transform="rotate(-20 36 38)" fill="url(#mosambiSpec)" />
      </g>
    </svg>
  );
}

// 5. ORANGE
function FreshOrange({ className = "w-full h-full" }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="orangeBody" cx="36%" cy="32%" r="66%">
          <stop offset="0%" stopColor="#fed7aa" />
          <stop offset="30%" stopColor="#fb923c" />
          <stop offset="70%" stopColor="#ea580c" />
          <stop offset="100%" stopColor="#7c2d12" />
        </radialGradient>
        <radialGradient id="orangeSpec" cx="34%" cy="28%" r="18%">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.75" />
          <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
        </radialGradient>
        <filter id="orangeShadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="6" stdDeviation="5" floodColor="#431407" floodOpacity="0.35" />
        </filter>
      </defs>
      <g filter="url(#orangeShadow)">
        <circle cx="50" cy="50" r="38" fill="url(#orangeBody)" />
        {/* Tiny green star calyx at top */}
        <path d="M50 12 L51.5 15 L54 13 L52.5 16 L55 17.5 L52 18 L52 21 L50 18 L48 21 L48 18 L45 17.5 L47.5 16 L46 13 L48.5 15 Z" fill="#15803d" />
        {/* Textured pores */}
        <circle cx="62" cy="46" r="1.1" fill="#ffedd5" opacity="0.6" />
        <circle cx="52" cy="64" r="1.2" fill="#ffedd5" opacity="0.6" />
        <circle cx="38" cy="62" r="1.1" fill="#ffedd5" opacity="0.6" />
        {/* Specular gloss */}
        <ellipse cx="36" cy="36" rx="10" ry="12" transform="rotate(-25 36 36)" fill="url(#orangeSpec)" />
      </g>
    </svg>
  );
}

// 6. POMEGRANATE
function Pomegranate({ className = "w-full h-full" }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 105" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="pomBody" cx="38%" cy="36%" r="65%">
          <stop offset="0%" stopColor="#fb7185" />
          <stop offset="25%" stopColor="#e11d48" />
          <stop offset="70%" stopColor="#9f1239" />
          <stop offset="100%" stopColor="#4c0519" />
        </radialGradient>
        <radialGradient id="pomSpec" cx="36%" cy="34%" r="18%">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
        </radialGradient>
        <filter id="pomShadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="6" stdDeviation="5" floodColor="#4c0519" floodOpacity="0.38" />
        </filter>
      </defs>
      <g filter="url(#pomShadow)">
        {/* Pomegranate jagged crown */}
        <path d="M42 22 L40 10 L45 16 L50 8 L55 16 L60 10 L58 22 Z" fill="#881337" stroke="#4c0519" strokeWidth="1" />
        {/* Pomegranate rounded hexagonal body */}
        <path d="M50 20 C64 20, 84 28, 86 52 C88 74, 74 92, 50 92 C26 92, 12 74, 14 52 C16 28, 36 20, 50 20 Z" fill="url(#pomBody)" />
        {/* Specular gloss reflection */}
        <ellipse cx="36" cy="40" rx="9" ry="14" transform="rotate(-22 36 40)" fill="url(#pomSpec)" />
      </g>
    </svg>
  );
}

// 7. TOMATO
function FreshTomato({ className = "w-full h-full" }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="tomatoBody" cx="36%" cy="32%" r="66%">
          <stop offset="0%" stopColor="#fca5a5" />
          <stop offset="25%" stopColor="#ef4444" />
          <stop offset="70%" stopColor="#b91c1c" />
          <stop offset="100%" stopColor="#450a0a" />
        </radialGradient>
        <radialGradient id="tomatoSpec" cx="34%" cy="28%" r="18%">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.85" />
          <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="calyxGreen" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#4ade80" />
          <stop offset="100%" stopColor="#14532d" />
        </linearGradient>
        <filter id="tomatoShadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="6" stdDeviation="5" floodColor="#450a0a" floodOpacity="0.38" />
        </filter>
      </defs>
      <g filter="url(#tomatoShadow)">
        {/* Plump tomato body */}
        <path d="M50 24 C34 24, 16 32, 14 52 C12 74, 28 88, 50 88 C72 88, 88 74, 86 52 C84 32, 66 24, 50 24 Z" fill="url(#tomatoBody)" />
        {/* Distinct 5-star green calyx */}
        <path d="M50 24 L52 14 L55 24 L68 18 L58 28 L72 34 L58 35 L62 48 L50 37 L38 48 L42 35 L28 34 L42 28 L32 18 L45 24 Z" fill="url(#calyxGreen)" />
        {/* Little curved green stalk */}
        <path d="M50 20 C49 14, 46 10, 42 7" stroke="#166534" strokeWidth="2.8" strokeLinecap="round" />
        {/* Shiny specular highlight */}
        <ellipse cx="32" cy="38" rx="8" ry="12" transform="rotate(-25 32 38)" fill="url(#tomatoSpec)" />
      </g>
    </svg>
  );
}

// 8. POTATO
function FreshPotato({ className = "w-full h-full" }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 80" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="potatoBody" cx="40%" cy="35%" r="65%">
          <stop offset="0%" stopColor="#fde68a" />
          <stop offset="30%" stopColor="#d97706" />
          <stop offset="75%" stopColor="#92400e" />
          <stop offset="100%" stopColor="#451a03" />
        </radialGradient>
        <filter id="potatoShadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="6" stdDeviation="5" floodColor="#451a03" floodOpacity="0.32" />
        </filter>
      </defs>
      <g filter="url(#potatoShadow)">
        {/* Organic potato shape */}
        <path d="M22 40 C16 26, 32 14, 52 14 C74 14, 88 24, 86 44 C84 62, 70 70, 48 70 C28 70, 26 52, 22 40 Z" fill="url(#potatoBody)" />
        {/* Natural potato eyes (dimples) */}
        <ellipse cx="38" cy="28" rx="3.5" ry="1.2" transform="rotate(15 38 28)" fill="#78350f" opacity="0.7" />
        <ellipse cx="64" cy="32" rx="3" ry="1.2" transform="rotate(-20 64 32)" fill="#78350f" opacity="0.7" />
        <ellipse cx="50" cy="52" rx="3.5" ry="1.2" transform="rotate(5 50 52)" fill="#78350f" opacity="0.7" />
        <ellipse cx="72" cy="50" rx="2.5" ry="1" transform="rotate(25 72 50)" fill="#78350f" opacity="0.7" />
        <ellipse cx="32" cy="46" rx="2.8" ry="1" transform="rotate(-10 32 46)" fill="#78350f" opacity="0.7" />
      </g>
    </svg>
  );
}

// 9. ONION
function FreshOnion({ className = "w-full h-full" }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 110" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="onionBody" cx="38%" cy="40%" r="65%">
          <stop offset="0%" stopColor="#f472b6" />
          <stop offset="35%" stopColor="#c026d3" />
          <stop offset="75%" stopColor="#701a75" />
          <stop offset="100%" stopColor="#3b0764" />
        </radialGradient>
        <radialGradient id="onionSpec" cx="34%" cy="36%" r="20%">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.75" />
          <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
        </radialGradient>
        <filter id="onionShadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="6" stdDeviation="5" floodColor="#3b0764" floodOpacity="0.35" />
        </filter>
      </defs>
      <g filter="url(#onionShadow)">
        {/* Papery sprout tip */}
        <path d="M50 20 L50 8 C48 12, 45 16, 44 22 Z" fill="#86198f" />
        <path d="M50 20 L54 6 C52 12, 51 16, 50 22 Z" fill="#a21caf" />
        {/* Onion round teardrop body */}
        <path d="M50 20 C68 20, 84 38, 84 60 C84 82, 70 94, 50 94 C30 94, 16 82, 16 60 C16 38, 32 20, 50 20 Z" fill="url(#onionBody)" />
        {/* Papery skin striation lines */}
        <path d="M50 20 C42 40, 42 75, 50 94" stroke="#f0abfc" strokeWidth="0.8" opacity="0.4" />
        <path d="M50 20 C32 40, 32 75, 42 93" stroke="#f0abfc" strokeWidth="0.8" opacity="0.35" />
        <path d="M50 20 C58 40, 58 75, 50 94" stroke="#f0abfc" strokeWidth="0.8" opacity="0.4" />
        <path d="M50 20 C68 40, 68 75, 58 93" stroke="#f0abfc" strokeWidth="0.8" opacity="0.35" />
        {/* Root wisps at bottom */}
        <path d="M47 94 L45 99 M50 94 L50 102 M53 94 L55 99" stroke="#d4d4d8" strokeWidth="1.2" strokeLinecap="round" opacity="0.75" />
        {/* Specular luster */}
        <ellipse cx="34" cy="48" rx="8" ry="16" transform="rotate(-20 34 48)" fill="url(#onionSpec)" />
      </g>
    </svg>
  );
}

// 10. FRESH GREEN CHILLI
function GreenChilli({ className = "w-full h-full" }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="chilliBody" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#4ade80" />
          <stop offset="35%" stopColor="#16a34a" />
          <stop offset="80%" stopColor="#15803d" />
          <stop offset="100%" stopColor="#052e16" />
        </linearGradient>
        <filter id="chilliShadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="5" stdDeviation="4" floodColor="#052e16" floodOpacity="0.35" />
        </filter>
      </defs>
      <g filter="url(#chilliShadow)">
        {/* Curved hook stem */}
        <path d="M22 28 C16 22, 14 16, 12 12" stroke="#15803d" strokeWidth="3" strokeLinecap="round" />
        {/* Green calyx cap */}
        <ellipse cx="25" cy="30" rx="6" ry="4" transform="rotate(-40 25 30)" fill="#166534" />
        {/* Slender curved tapered chilli pepper */}
        <path d="M26 28 C40 36, 68 54, 82 82 C78 84, 72 82, 60 68 C46 52, 28 40, 22 34 Z" fill="url(#chilliBody)" />
        {/* Glossy specular streak along the curve */}
        <path d="M28 32 C40 40, 60 56, 72 74" stroke="#bbf7d0" strokeWidth="2" strokeLinecap="round" opacity="0.65" />
      </g>
    </svg>
  );
}

// 11. CUCUMBER
function FreshCucumber({ className = "w-full h-full" }: { className?: string }) {
  return (
    <svg viewBox="0 0 110 70" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="cucBody" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#34d399" />
          <stop offset="35%" stopColor="#059669" />
          <stop offset="85%" stopColor="#047857" />
          <stop offset="100%" stopColor="#022c22" />
        </linearGradient>
        <filter id="cucShadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="5" stdDeviation="4" floodColor="#022c22" floodOpacity="0.32" />
        </filter>
      </defs>
      <g filter="url(#cucShadow)">
        {/* Elongated gently curved cucumber */}
        <path d="M14 36 C14 24, 90 20, 96 32 C98 44, 94 48, 86 50 C54 54, 20 50, 14 36 Z" fill="url(#cucBody)" />
        {/* Longitudinal stripe ridges */}
        <path d="M20 32 C40 30, 75 28, 92 34" stroke="#a7f3d0" strokeWidth="1.2" opacity="0.45" strokeDasharray="3 4" />
        <path d="M22 40 C45 38, 75 38, 88 42" stroke="#a7f3d0" strokeWidth="1" opacity="0.35" strokeDasharray="2 4" />
        {/* Small stem tip */}
        <circle cx="14" cy="35" r="2.5" fill="#064e3b" />
      </g>
    </svg>
  );
}

// 12. CAULIFLOWER
function Cauliflower({ className = "w-full h-full" }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="cauliCurd" cx="45%" cy="40%" r="55%">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="45%" stopColor="#f8fafc" />
          <stop offset="80%" stopColor="#e2e8f0" />
          <stop offset="100%" stopColor="#94a3b8" />
        </radialGradient>
        <linearGradient id="cauliLeaf" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#86efac" />
          <stop offset="60%" stopColor="#15803d" />
          <stop offset="100%" stopColor="#14532d" />
        </linearGradient>
        <filter id="cauliShadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="6" stdDeviation="5" floodColor="#0f172a" floodOpacity="0.25" />
        </filter>
      </defs>
      <g filter="url(#cauliShadow)">
        {/* Green outer leaves wrapping base */}
        <path d="M18 64 C12 45, 20 30, 30 24 C28 42, 28 62, 36 78 Z" fill="url(#cauliLeaf)" />
        <path d="M82 64 C88 45, 80 30, 70 24 C72 42, 72 62, 64 78 Z" fill="url(#cauliLeaf)" />
        <path d="M30 84 C42 88, 58 88, 70 84 C65 92, 35 92, 30 84 Z" fill="#166534" />

        {/* Central curd florets dome */}
        <circle cx="50" cy="50" r="30" fill="url(#cauliCurd)" />
        <circle cx="38" cy="42" r="14" fill="url(#cauliCurd)" opacity="0.9" />
        <circle cx="62" cy="42" r="14" fill="url(#cauliCurd)" opacity="0.9" />
        <circle cx="50" cy="34" r="13" fill="url(#cauliCurd)" opacity="0.95" />
        <circle cx="50" cy="62" r="15" fill="url(#cauliCurd)" opacity="0.95" />
        <circle cx="36" cy="58" r="12" fill="url(#cauliCurd)" opacity="0.9" />
        <circle cx="64" cy="58" r="12" fill="url(#cauliCurd)" opacity="0.9" />
      </g>
    </svg>
  );
}

// 13. CARROT
function FreshCarrot({ className = "w-full h-full" }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 110" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="carrotBody" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#fed7aa" />
          <stop offset="25%" stopColor="#fb923c" />
          <stop offset="70%" stopColor="#ea580c" />
          <stop offset="100%" stopColor="#7c2d12" />
        </linearGradient>
        <linearGradient id="carrotGreen" x1="0" y1="1" x2="0" y2="0">
          <stop offset="0%" stopColor="#166534" />
          <stop offset="100%" stopColor="#4ade80" />
        </linearGradient>
        <filter id="carrotShadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="6" stdDeviation="5" floodColor="#431407" floodOpacity="0.32" />
        </filter>
      </defs>
      <g filter="url(#carrotShadow)">
        {/* Feathery carrot foliage tops */}
        <path d="M50 25 L45 8 M50 25 L50 4 M50 25 L55 8 M48 16 L42 12 M52 16 L58 12" stroke="url(#carrotGreen)" strokeWidth="2.5" strokeLinecap="round" />
        {/* Tapered carrot cone body */}
        <path d="M40 25 C40 22, 60 22, 60 25 C60 45, 54 85, 50 102 C46 85, 40 45, 40 25 Z" fill="url(#carrotBody)" />
        {/* Horizontal texture ridges */}
        <path d="M44 38 C48 37, 52 37, 56 38" stroke="#9a3412" strokeWidth="1.2" strokeLinecap="round" opacity="0.6" />
        <path d="M45 52 C48 51, 51 51, 55 52" stroke="#9a3412" strokeWidth="1.2" strokeLinecap="round" opacity="0.6" />
        <path d="M46 66 C48 65, 51 65, 54 66" stroke="#9a3412" strokeWidth="1.2" strokeLinecap="round" opacity="0.6" />
        <path d="M47 80 C49 79, 51 79, 53 80" stroke="#9a3412" strokeWidth="1" strokeLinecap="round" opacity="0.6" />
      </g>
    </svg>
  );
}

// 14. CAPSICUM (BELL PEPPER)
function Capsicum({ className = "w-full h-full" }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="capsBody" cx="36%" cy="34%" r="66%">
          <stop offset="0%" stopColor="#86efac" />
          <stop offset="30%" stopColor="#22c55e" />
          <stop offset="75%" stopColor="#15803d" />
          <stop offset="100%" stopColor="#052e16" />
        </radialGradient>
        <radialGradient id="capsSpec" cx="34%" cy="32%" r="18%">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
        </radialGradient>
        <filter id="capsShadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="6" stdDeviation="5" floodColor="#052e16" floodOpacity="0.35" />
        </filter>
      </defs>
      <g filter="url(#capsShadow)">
        {/* Thick indented stalk */}
        <path d="M50 20 C50 14, 52 10, 56 6" stroke="#14532d" strokeWidth="3.6" strokeLinecap="round" />
        {/* 4-lobed bell pepper body */}
        <path d="M50 22 C36 18, 18 28, 16 52 C14 74, 26 88, 40 88 C46 88, 48 84, 50 84 C52 84, 54 88, 60 88 C74 88, 86 74, 84 52 C82 28, 64 18, 50 22 Z" fill="url(#capsBody)" />
        {/* Lobe indentations shadow creases */}
        <path d="M38 24 C34 40, 34 68, 40 88" stroke="#052e16" strokeWidth="1.5" opacity="0.35" />
        <path d="M62 24 C66 40, 66 68, 60 88" stroke="#052e16" strokeWidth="1.5" opacity="0.35" />
        {/* Specular gloss */}
        <ellipse cx="32" cy="40" rx="7" ry="14" transform="rotate(-20 32 40)" fill="url(#capsSpec)" />
      </g>
    </svg>
  );
}

/**
 * Floating Produce Backdrop:
 * Positions realistic 3D fruits and vegetables around the perimeter of the screen.
 * Automatically animates with gentle floating, hovering, and subtle axial rotation.
 * DOES NOT scroll continuously like a news ticker.
 * Optimized with pointer-events-none so UI elements are never blocked.
 */
export default function FloatingProduceBackdrop() {
  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none overflow-hidden z-0 select-none"
    >
      {/* ===================== TOP PERIMETER ===================== */}

      {/* 1. TOP-LEFT: Fresh Tomato (Foreground) */}
      <div className="absolute top-2 left-2 sm:top-5 sm:left-5 w-16 h-16 sm:w-22 sm:h-22 md:w-26 md:h-26 opacity-95 animate-produce-float-1 drop-shadow-md">
        <FreshTomato />
      </div>

      {/* 2. TOP-RIGHT: Red Apple (Foreground) */}
      <div className="absolute top-2 right-2 sm:top-5 sm:right-5 w-16 h-16 sm:w-22 sm:h-22 md:w-26 md:h-26 opacity-95 animate-produce-float-2 drop-shadow-md">
        <RedApple />
      </div>

      {/* 3. TOP-CENTER-LEFT: Fresh Green Chilli (Midground) */}
      <div className="absolute top-3 left-[20%] sm:left-[24%] w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 opacity-85 sm:opacity-90 animate-produce-float-3 drop-shadow-sm">
        <GreenChilli />
      </div>

      {/* 4. TOP-CENTER-RIGHT: Mosambi / Sweet Lime (Midground) */}
      <div className="absolute top-3 right-[20%] sm:right-[24%] w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 opacity-85 sm:opacity-90 animate-produce-float-4 drop-shadow-sm">
        <Mosambi />
      </div>

      {/* ===================== LEFT PERIMETER ===================== */}

      {/* 5. UPPER-LEFT: Pomegranate (Midground) */}
      <div className="absolute top-[24%] -left-1 sm:left-3 md:left-6 w-14 h-14 sm:w-18 sm:h-18 md:w-22 md:h-22 opacity-90 animate-produce-float-5 drop-shadow-md">
        <Pomegranate />
      </div>

      {/* 6. MID-LEFT: Pineapple (Detailed Midground) */}
      <div className="absolute top-[42%] -left-1 sm:left-2 md:left-6 w-14 h-18 sm:w-18 sm:h-22 md:w-22 md:h-26 opacity-90 animate-produce-float-1 drop-shadow-md">
        <Pineapple />
      </div>

      {/* 7. LOWER-LEFT: Cucumber (Midground) */}
      <div className="absolute top-[60%] -left-1 sm:left-3 md:left-6 w-16 h-12 sm:w-20 sm:h-14 md:w-24 md:h-16 opacity-90 animate-produce-float-6 drop-shadow-md">
        <FreshCucumber />
      </div>

      {/* 8. BOTTOM-LEFT: Carrot (Foreground) */}
      <div className="absolute bottom-5 left-2 sm:bottom-6 sm:left-5 md:left-8 w-16 h-18 sm:w-20 sm:h-22 md:w-24 md:h-26 opacity-95 animate-produce-float-2 drop-shadow-md">
        <FreshCarrot />
      </div>

      {/* ===================== RIGHT PERIMETER ===================== */}

      {/* 9. UPPER-RIGHT: Orange (Midground) */}
      <div className="absolute top-[24%] -right-1 sm:right-3 md:right-6 w-14 h-14 sm:w-18 sm:h-18 md:w-22 md:h-22 opacity-90 animate-produce-float-6 drop-shadow-md">
        <FreshOrange />
      </div>

      {/* 10. MID-RIGHT: Capsicum / Bell Pepper (Detailed Midground) */}
      <div className="absolute top-[42%] -right-1 sm:right-2 md:right-6 w-14 h-14 sm:w-18 sm:h-18 md:w-22 md:h-22 opacity-90 animate-produce-float-3 drop-shadow-md">
        <Capsicum />
      </div>

      {/* 11. LOWER-RIGHT: Fresh Guava (Midground) */}
      <div className="absolute top-[60%] -right-1 sm:right-3 md:right-6 w-14 h-14 sm:w-18 sm:h-18 md:w-20 md:h-20 opacity-90 animate-produce-float-5 drop-shadow-md">
        <FreshGuava />
      </div>

      {/* 12. BOTTOM-RIGHT: Red Onion (Foreground) */}
      <div className="absolute bottom-5 right-2 sm:bottom-6 sm:right-5 md:right-8 w-16 h-18 sm:w-20 sm:h-22 md:w-24 md:h-26 opacity-95 animate-produce-float-4 drop-shadow-md">
        <FreshOnion />
      </div>

      {/* ===================== BOTTOM PERIMETER ===================== */}

      {/* 13. BOTTOM-CENTER-LEFT: Potato (Midground) */}
      <div className="absolute bottom-3 left-[20%] sm:left-[26%] w-14 h-12 sm:w-18 sm:h-14 md:w-20 md:h-16 opacity-85 sm:opacity-90 animate-produce-float-1 drop-shadow-sm">
        <FreshPotato />
      </div>

      {/* 14. BOTTOM-CENTER-RIGHT: Cauliflower (Midground) */}
      <div className="absolute bottom-3 right-[20%] sm:right-[26%] w-14 h-14 sm:w-18 sm:h-18 md:w-20 md:h-20 opacity-85 sm:opacity-90 animate-produce-float-2 drop-shadow-sm">
        <Cauliflower />
      </div>
    </div>
  );
}
