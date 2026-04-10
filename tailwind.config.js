/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'base':             '#FAFAF8',
        'card':             '#FFFFFF',
        'surface-soft':     '#FEF9F0',
        'accent-primary':   '#D97706',
        'accent-secondary': '#F59E0B',
        'accent-glow':      '#FBBF24',
        'text-dark':        '#1A1A2E',
        'text-mid':         '#4B5563',
        'text-muted':       '#9CA3AF',
        'border':           '#E5E7EB',
      },
      fontFamily: {
        'heading': ['Outfit', 'sans-serif'],
        'body':    ['Inter', 'sans-serif'],
        'mono':    ['JetBrains Mono', 'monospace'],
      },
      fontSize: {
        'h1':    ['clamp(3rem, 6vw, 5rem)',   { lineHeight: '1.05', letterSpacing: '-0.03em', fontWeight: '800' }],
        'h2':    ['clamp(2rem, 4.5vw, 3.5rem)', { lineHeight: '1.12', letterSpacing: '-0.02em', fontWeight: '700' }],
        'h3':    ['clamp(1.25rem, 2vw, 1.75rem)', { lineHeight: '1.3', fontWeight: '600' }],
        'body':  ['1rem',   { lineHeight: '1.75', fontWeight: '400' }],
        'label': ['0.8125rem', { letterSpacing: '0.15em', textTransform: 'uppercase', fontWeight: '600' }],
      },
      animation: {
        'pulse-slow': 'pulse 3s ease-in-out infinite',
        'float':      'float 6s ease-in-out infinite',
        'glow':       'glow 3s ease-in-out infinite alternate',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%':      { transform: 'translateY(20px)' },
        },
        glow: {
          '0%':   { boxShadow: '0 0 20px rgba(217, 119, 6, 0.15)' },
          '100%': { boxShadow: '0 0 40px rgba(217, 119, 6, 0.3)' },
        },
      },
      backdropBlur: {
        'xs': '2px',
        'sm': '4px',
        'md': '12px',
        'lg': '20px',
      },
    },
  },
  plugins: [],
}
