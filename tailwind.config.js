/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Primary brand palette
        brand: {
          50:  '#edfcf8',
          100: '#d3f8ef',
          200: '#aaf0e0',
          300: '#72e2cb',
          400: '#38ccb2',
          500: '#1ab09a',
          600: '#0f8e7d',
          700: '#107166',
          800: '#125952',
          900: '#134945',
          950: '#052d2b',
        },
        // Dark surface palette
        surface: {
          950: '#030711',
          900: '#060d1a',
          850: '#080f1f',
          800: '#0b1325',
          750: '#0e172d',
          700: '#121c35',
          600: '#1a2647',
          500: '#243259',
        },
        // Accent / highlight
        accent: {
          cyan:   '#22d3ee',
          teal:   '#2dd4bf',
          green:  '#4ade80',
          amber:  '#fbbf24',
          red:    '#f87171',
        },
      },
      fontFamily: {
        sans:  ['var(--font-inter)', 'Inter', 'system-ui', 'sans-serif'],
        mono:  ['var(--font-mono)', 'JetBrains Mono', 'monospace'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'grid-pattern': "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%231a2647' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
      },
      boxShadow: {
        'glass':     '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
        'glass-lg':  '0 20px 60px 0 rgba(0, 0, 0, 0.5)',
        'glow-teal': '0 0 30px rgba(45, 212, 191, 0.15)',
        'glow-cyan': '0 0 30px rgba(34, 211, 238, 0.15)',
        'card':      '0 4px 24px rgba(0,0,0,0.4)',
      },
      animation: {
        'pulse-slow':   'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float':        'float 6s ease-in-out infinite',
        'shimmer':      'shimmer 2s linear infinite',
        'scan':         'scan 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%':      { transform: 'translateY(-12px)' },
        },
        shimmer: {
          '0%':   { backgroundPosition: '-1000px 0' },
          '100%': { backgroundPosition: '1000px 0' },
        },
        scan: {
          '0%, 100%': { opacity: '0.3', transform: 'scaleX(0.8)' },
          '50%':      { opacity: '1',   transform: 'scaleX(1)' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
      borderRadius: {
        'xl2': '1.25rem',
        'xl3': '1.5rem',
      },
    },
  },
  plugins: [],
};
