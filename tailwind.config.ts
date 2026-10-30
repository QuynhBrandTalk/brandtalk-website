import type { Config } from 'tailwindcss'

/**
 * Palette drawn from the materials in BrandTalk's own client work:
 * indigo from dyed cloth and Hoa Tiên brocade, celadon from Gốm Sen pottery,
 * eggshell for text, areca gold from Mega Eco's betel-sheath tableware.
 */
const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        indigo: {
          deep: '#0E1B2E', // page ground
          base: '#152741', // raised surface
          soft: '#1E3454', // second surface
          line: '#2A4165', // hairlines and borders
        },
        celadon: {
          DEFAULT: '#8FBFA8', // primary accent
          bright: '#A9D4BF',
          dim: '#5C8A76',
        },
        areca: '#D6A552', // secondary accent, used sparingly
        shell: {
          DEFAULT: '#E4DFD2', // body text
          bright: '#F2EEE4', // headings
          dim: '#A8A698', // muted text
        },
      },
      fontFamily: {
        // Be Vietnam Pro handles stacked tone marks and circumflexes cleanly,
        // which most Latin-first faces do not.
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
        quote: ['var(--font-quote)', 'Georgia', 'serif'],
      },
      fontSize: {
        display: [
          'clamp(2.6rem, 7vw, 5.25rem)',
          { lineHeight: '0.98', letterSpacing: '-0.03em', fontWeight: '800' },
        ],
        title: [
          'clamp(1.7rem, 3.6vw, 2.6rem)',
          { lineHeight: '1.12', letterSpacing: '-0.02em', fontWeight: '700' },
        ],
        subtitle: [
          'clamp(1.15rem, 1.8vw, 1.4rem)',
          { lineHeight: '1.35', letterSpacing: '-0.01em', fontWeight: '600' },
        ],
        lede: ['clamp(1.1rem, 1.7vw, 1.3rem)', { lineHeight: '1.62' }],
        body: ['1.0625rem', { lineHeight: '1.72' }],
        small: ['0.875rem', { lineHeight: '1.55' }],
        micro: ['0.78rem', { lineHeight: '1.4' }],
      },
      maxWidth: {
        reading: '62ch',
        shell: '78rem',
      },
      aspectRatio: {
        vertical: '9 / 16',
      },
      transitionTimingFunction: {
        ease: 'cubic-bezier(0.22, 0.61, 0.36, 1)',
      },
    },
  },
  plugins: [],
}

export default config
