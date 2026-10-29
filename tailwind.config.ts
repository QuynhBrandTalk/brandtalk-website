import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Primary palette
        navy: {
          50: '#f6f7f9',
          100: '#edeef3',
          200: '#d8dce7',
          300: '#b3bbd4',
          400: '#8a97bd',
          500: '#6b7fa8',
          600: '#546697',
          700: '#425080',
          800: '#3a426e',
          900: '#1a1a1a', // Deep charcoal
          950: '#0f0f0f',
        },
        gold: {
          50: '#fefdf9',
          100: '#fdfaf0',
          200: '#fbf3de',
          300: '#f8e8c3',
          400: '#f4d89d',
          500: '#eac67e',
          600: '#c9a961', // Primary accent
          700: '#a88550',
          800: '#896d45',
          900: '#72593c',
          950: '#3d2f21',
        },
        terracotta: {
          50: '#fef7f3',
          100: '#fceee5',
          200: '#f8dccf',
          300: '#f2c4b1',
          400: '#e9a38a',
          500: '#de8367',
          600: '#d4896e', // Soft terracotta
          700: '#b86f57',
          800: '#995a48',
          900: '#7d4a3f',
          950: '#451f18',
        },
        cream: '#f8f6f3',
        'off-white': '#f8f6f3',
      },
      fontFamily: {
        sans: [
          'Inter',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'sans-serif',
        ],
        serif: ['Playfair Display', 'Fraunces', 'serif'],
        display: ['Space Grotesk', 'Satoshi', 'sans-serif'],
      },
      fontSize: {
        'display-lg': ['4.5rem', { lineHeight: '1.1', fontWeight: '700' }],
        'display-md': ['3.5rem', { lineHeight: '1.15', fontWeight: '700' }],
        'display-sm': ['2.5rem', { lineHeight: '1.2', fontWeight: '700' }],
        'heading-xl': ['2.5rem', { lineHeight: '1.2', fontWeight: '600' }],
        'heading-lg': ['2rem', { lineHeight: '1.25', fontWeight: '600' }],
        'heading-md': ['1.5rem', { lineHeight: '1.3', fontWeight: '600' }],
        'heading-sm': ['1.25rem', { lineHeight: '1.35', fontWeight: '600' }],
        'body-lg': ['1.125rem', { lineHeight: '1.6' }],
        'body-base': ['1rem', { lineHeight: '1.6' }],
        'body-sm': ['0.875rem', { lineHeight: '1.5' }],
      },
      spacing: {
        gutter: '1rem',
        'gutter-lg': '2rem',
        'gutter-xl': '3rem',
        'gutter-2xl': '4rem',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'scale-in': 'scaleIn 0.4s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
}

export default config
