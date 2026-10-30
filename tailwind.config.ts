import type { Config } from 'tailwindcss'

/**
 * Palette sampled directly from the BrandTalk logo:
 * graphite from the bird, coral gradient from the circle, peach from its top
 * edge, black from the wordmark, on white as the logo is set.
 */
const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        ink: '#000000', // wordmark black, display type
        graphite: {
          DEFAULT: '#1E2C2F', // the bird
          soft: '#4A565A',
          mute: '#7D878B',
        },
        coral: {
          DEFAULT: '#EF5948', // circle mid
          deep: '#E03F2B',
          light: '#F57656', // circle lower
          peach: '#F8DFDB', // circle top
        },
        hair: '#E6E3E0', // rules and borders
        paper: '#FFFFFF',
        bone: '#F7F6F4', // the one off-white, for alternating bands
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        mega: [
          'clamp(3rem, 9vw, 8rem)',
          { lineHeight: '0.92', letterSpacing: '-0.04em', fontWeight: '800' },
        ],
        display: [
          'clamp(2.4rem, 5.5vw, 4.5rem)',
          { lineHeight: '1.0', letterSpacing: '-0.035em', fontWeight: '800' },
        ],
        title: [
          'clamp(1.6rem, 3.2vw, 2.4rem)',
          { lineHeight: '1.12', letterSpacing: '-0.02em', fontWeight: '700' },
        ],
        subtitle: [
          'clamp(1.1rem, 1.7vw, 1.35rem)',
          { lineHeight: '1.35', letterSpacing: '-0.01em', fontWeight: '600' },
        ],
        lede: ['clamp(1.1rem, 1.6vw, 1.3rem)', { lineHeight: '1.6' }],
        body: ['1.0625rem', { lineHeight: '1.7' }],
        small: ['0.875rem', { lineHeight: '1.55' }],
        micro: ['0.76rem', { lineHeight: '1.4', letterSpacing: '0.02em' }],
      },
      maxWidth: {
        reading: '62ch',
        shell: '90rem',
      },
      transitionTimingFunction: {
        // Apple's long decelerating curve
        apple: 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
      transitionDuration: {
        900: '900ms',
        1200: '1200ms',
      },
    },
  },
  plugins: [],
}

export default config
