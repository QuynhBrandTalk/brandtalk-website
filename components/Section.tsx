'use client'

import { motion } from 'framer-motion'
import { containerVariants } from '@/lib/animations'
import { cn } from '@/lib/utils'

interface SectionProps {
  children: React.ReactNode
  className?: string
  id?: string
  variant?: 'default' | 'dark' | 'light'
  withAnimation?: boolean
}

export default function Section({
  children,
  className,
  id,
  variant = 'default',
  withAnimation = true,
}: SectionProps) {
  const bgClass = {
    default: 'bg-cream',
    dark: 'bg-navy-900 text-white',
    light: 'bg-white',
  }

  const content = (
    <div className="container-custom py-12 md:py-16 lg:py-20">
      {children}
    </div>
  )

  if (!withAnimation) {
    return (
      <section
        id={id}
        className={cn(`w-full ${bgClass[variant]}`, className)}
      >
        {content}
      </section>
    )
  }

  return (
    <motion.section
      id={id}
      className={cn(`w-full ${bgClass[variant]}`, className)}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.6 }}
    >
      <motion.div
        variants={containerVariants}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, margin: '-100px' }}
      >
        {content}
      </motion.div>
    </motion.section>
  )
}
