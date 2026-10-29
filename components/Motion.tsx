'use client'

/**
 * Client boundary for Framer Motion.
 *
 * The page files are Server Components: they export `metadata` and, for the
 * dynamic routes, `generateStaticParams`. Importing Framer Motion directly
 * into them pulls React context into the server bundle, which fails the build
 * while Next collects page data.
 *
 * Re-exporting through this file keeps the pages as Server Components while
 * the animated elements they render resolve as client components.
 */

export { motion, AnimatePresence } from 'framer-motion'
