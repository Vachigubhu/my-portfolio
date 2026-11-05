/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brand: {
          dark: '#030712',
          navy: '#0a0f1d',
          card: '#0f172a',
          cardHover: '#131e36',
          border: '#1e293b',
          borderAccent: '#334155',
          accent: '#06b6d4',      // Cyan
          accentHover: '#0891b2',
          electric: '#3b82f6',    // Electric Blue
          violet: '#8b5cf6',      // Tech Violet
          emerald: '#10b981',     // Success/Terminal Green
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'Consolas', 'monospace'],
      },
      animation: {
        'pulse-subtle': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      }
    },
  },
  plugins: [],
}
