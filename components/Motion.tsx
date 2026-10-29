'use client'

/**
 * Client boundary for Framer Motion.
 *
 * The page files are Server Components: they export `metadata` and, for the
 * dynamic routes, `generateStaticParams`. Importing Framer Motion into them
 * directly pulls React context into the server bundle and the build fails
 * while collecting page data.
 *
 * Each element is exported by name rather than re-exporting `motion` itself,
 * because `motion.div` is a property of a proxy object and React's client
 * manifest can only resolve real named exports across the server boundary.
 */

import { motion } from 'framer-motion'

export const MotionDiv = motion.div
export const MotionH2 = motion.h2
export const MotionP = motion.p
export const MotionDetails = motion.details

export { AnimatePresence } from 'framer-motion'
