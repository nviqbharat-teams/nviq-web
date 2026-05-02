/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Outfit', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
        display: ['Outfit', 'sans-serif'],
      },
      colors: {
        brand: {
          cyan: '#00D4FF',
          blue: '#0EA5E9',
          indigo: '#6366F1',
          emerald: '#10B981',
          amber: '#F59E0B',
          rose: '#F43F5E',
        },
        dark: {
          base: '#04070F',
          surface: '#080D1A',
          card: '#0C1220',
          elevated: '#131B2D',
        }
      },
      animation: {
        'fade-up': 'fadeUp 0.6s ease forwards',
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 3s ease-in-out infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
      },
    },
  },
  plugins: [],
}
