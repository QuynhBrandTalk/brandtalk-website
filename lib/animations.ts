import { Variants } from 'framer-motion'

// Easing function for natural motion (Apple-inspired)
export const ease = {
  smooth: [0.25, 0.46, 0.45, 0.94],
  easeIn: [0.42, 0, 1, 1],
  easeOut: [0, 0, 0.58, 1],
  easeInOut: [0.42, 0, 0.58, 1],
}

// Hero animations
export const heroVariants: Variants = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
}

export const heroHeadingVariants: Variants = {
  initial: { opacity: 0, y: 20 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: 0.2,
      ease: ease.smooth,
    },
  },
}

export const heroSubheadingVariants: Variants = {
  initial: { opacity: 0, y: 20 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: 0.35,
      ease: ease.smooth,
    },
  },
}

export const heroCTAVariants: Variants = {
  initial: { opacity: 0, y: 20 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: 0.5,
      ease: ease.smooth,
    },
  },
}

// Staggered list items
export const containerVariants: Variants = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.15,
    },
  },
}

export const itemVariants: Variants = {
  initial: { opacity: 0, y: 20 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: ease.smooth,
    },
  },
}

// Fade in on scroll
export const fadeInVariants: Variants = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      duration: 0.4,
      ease: ease.smooth,
    },
  },
}

// Scale up on scroll
export const scaleInVariants: Variants = {
  initial: { opacity: 0, scale: 0.95 },
  animate: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.4,
      ease: ease.smooth,
    },
  },
}

// Slide up animation
export const slideUpVariants: Variants = {
  initial: { opacity: 0, y: 40 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: ease.smooth,
    },
  },
}

// Button hover animation
export const buttonHoverVariants: Variants = {
  rest: { scale: 1 },
  hover: {
    scale: 1.02,
    transition: {
      duration: 0.2,
      ease: 'easeOut',
    },
  },
  tap: {
    scale: 0.98,
  },
}

// Card hover animation
export const cardHoverVariants: Variants = {
  rest: { y: 0, boxShadow: '0 1px 3px rgba(0,0,0,0.1)' },
  hover: {
    y: -4,
    boxShadow: '0 20px 25px rgba(0,0,0,0.15)',
    transition: {
      duration: 0.25,
      ease: ease.smooth,
    },
  },
}

// Underline animation
export const underlineVariants: Variants = {
  initial: { scaleX: 0 },
  hover: {
    scaleX: 1,
    transition: {
      duration: 0.15,
      ease: 'easeOut',
    },
  },
}

// Page transition
export const pageTransitionVariants: Variants = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      duration: 0.3,
      ease: ease.smooth,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.2,
      ease: ease.smooth,
    },
  },
}

// Parallax effect for hero image
export const parallaxVariants = (offset: number): Variants => ({
  initial: { y: 0 },
  animate: { y: offset },
})

// Modal/Overlay animations
export const modalVariants: Variants = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      duration: 0.2,
      ease: ease.smooth,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.2,
      ease: ease.smooth,
    },
  },
}

export const modalContentVariants: Variants = {
  initial: { opacity: 0, scale: 0.95, y: 20 },
  animate: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.3,
      ease: ease.smooth,
    },
  },
  exit: {
    opacity: 0,
    scale: 0.95,
    y: 20,
    transition: {
      duration: 0.2,
      ease: ease.smooth,
    },
  },
}
