/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#fdf2f4',
          100: '#fbe5e9',
          200: '#f7ced6',
          300: '#f0a8b7',
          400: '#e4768f',
          500: '#d5486a',
          600: '#c0294e',
          700: '#a00b38', // Primary Brand Color
          800: '#860d33',
          900: '#721030',
          950: '#400418',
        },
        emerald: {
          50: '#f0fdf4',
          500: '#10b981',
          600: '#059669',
          700: '#047857',
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
        display: ['"Playfair Display"', 'Georgia', 'serif'],
      },
      boxShadow: {
        'glass': '0 20px 50px rgba(160, 11, 56, 0.08), 0 10px 25px rgba(0, 0, 0, 0.03)',
        'glass-hover': '0 30px 60px rgba(160, 11, 56, 0.14), 0 15px 30px rgba(0, 0, 0, 0.05)',
        'luxury': '0 25px 50px -12px rgba(160, 11, 56, 0.25)',
        'inner-glow': 'inset 0 1px 1px 0 rgba(255, 255, 255, 0.8)',
      },
      backdropBlur: {
        'xs': '2px',
        '2xl': '40px',
      },
      animation: {
        'float-slow': 'float 8s ease-in-out infinite',
        'float-medium': 'float 5s ease-in-out infinite',
        'float-fast': 'float 3.5s ease-in-out infinite',
        'spin-slow': 'spin 15s linear infinite',
        'pulse-subtle': 'pulseSubtle 3s ease-in-out infinite',
        'shimmer': 'shimmer 2s infinite linear',
        'glow-pulse': 'glowPulse 4s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-15px) rotate(4deg)' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.85', transform: 'scale(0.98)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        glowPulse: {
          '0%, 100%': { opacity: '0.4', filter: 'blur(20px)' },
          '50%': { opacity: '0.7', filter: 'blur(30px)' },
        }
      }
    },
  },
  plugins: [],
};
