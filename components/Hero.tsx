'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import {
  heroVariants,
  heroHeadingVariants,
  heroSubheadingVariants,
  heroCTAVariants,
} from '@/lib/animations'

interface HeroProps {
  headline: string
  subheadline: string
  cta?: {
    label: string
    href: string
  }
  backgroundImage: string
  variant?: 'default' | 'dark'
}

export default function Hero({
  headline,
  subheadline,
  cta,
  backgroundImage,
  variant = 'default',
}: HeroProps) {
  const isDark = variant === 'dark'

  return (
    <motion.section
      variants={heroVariants}
      initial="initial"
      animate="animate"
      className="relative w-full h-screen md:h-[80vh] flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src={backgroundImage}
          alt="Hero background"
          fill
          className="object-cover"
          priority
          quality={90}
        />
        {/* Overlay */}
        <div
          className={`absolute inset-0 ${
            isDark
              ? 'bg-gradient-to-b from-black/50 via-black/40 to-black/50'
              : 'bg-gradient-to-b from-black/30 via-transparent to-black/20'
          }`}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 container-custom text-center flex flex-col items-center gap-6 md:gap-8">
        {/* Headline */}
        <motion.h1
          variants={heroHeadingVariants}
          className={`text-display-lg md:text-5xl lg:text-6xl font-bold max-w-3xl leading-tight text-balance ${
            isDark ? 'text-white' : 'text-white'
          }`}
        >
          {headline}
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          variants={heroSubheadingVariants}
          className={`text-body-lg md:text-heading-md max-w-2xl text-balance ${
            isDark ? 'text-gray-200' : 'text-gray-100'
          }`}
        >
          {subheadline}
        </motion.p>

        {/* CTA Button */}
        {cta && (
          <motion.div variants={heroCTAVariants}>
            <Link href={cta.href} className="button button-gold text-lg">
              {cta.label}
              <span className="ml-2">→</span>
            </Link>
          </motion.div>
        )}
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-white text-body-sm">Scroll to explore</span>
          <svg
            className="w-5 h-5 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </motion.div>
    </motion.section>
  )
}
