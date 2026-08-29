/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        base: '#050307',
        surface: '#08040D',
        card: '#0D0715',
        purple: {
          primary: '#7C3AED',
          deep: '#4C1D95',
          electric: '#8B5CF6',
          accent: '#A78BFA',
          lavender: '#C4B5FD',
        },
      },
      fontFamily: {
        serif: ['var(--font-serif)', 'Instrument Serif', 'Georgia', 'serif'],
        sans: ['var(--font-sans)', 'Plus Jakarta Sans', 'Outfit', 'sans-serif'],
        mono: ['var(--font-mono)', 'Space Mono', 'ui-monospace', 'monospace'],
      },
    },
  },
  plugins: [],
};
