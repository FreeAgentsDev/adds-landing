/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        neon: {
          blue: '#00d4ff',
          cyan: '#00f5ff',
          purple: '#a855f7',
          violet: '#8b5cf6',
          pink: '#ec4899',
        },
        space: {
          dark: '#0a0a1a',
          deeper: '#050510',
          mid: '#0f172a',
        },
      },
      fontFamily: {
        sans: ['Outfit', 'system-ui', 'sans-serif'],
        display: ['Orbitron', 'monospace'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'glow-pulse': 'glow-pulse 3s ease-in-out infinite',
        'fade-in': 'fade-in 0.8s ease-out forwards',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        'glow-pulse': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.7' },
        },
        'fade-in': {
          from: { opacity: '0', transform: 'translateY(20px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
      },
      boxShadow: {
        'neon': '0 0 20px rgba(0, 212, 255, 0.3), 0 0 40px rgba(168, 85, 247, 0.2)',
        'neon-strong': '0 0 30px rgba(0, 212, 255, 0.5), 0 0 60px rgba(168, 85, 247, 0.3)',
        'glass': '0 8px 32px rgba(0, 0, 0, 0.2)',
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
};
