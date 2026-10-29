'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { cardHoverVariants, itemVariants } from '@/lib/animations'

interface CaseStudyCardProps {
  title: string
  client: string
  image: string
  slug: string
  results: string[]
  index?: number
}

export default function CaseStudyCard({
  title,
  client,
  image,
  slug,
  results,
  index = 0,
}: CaseStudyCardProps) {
  return (
    <motion.div
      variants={itemVariants}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, margin: '-100px' }}
      whileHover="hover"
      whileTap="tap"
      transition={{ delay: index * 0.1 }}
    >
      <Link href={`/work/${slug}`}>
        <motion.div
          variants={cardHoverVariants}
          className="group relative overflow-hidden rounded-lg bg-white cursor-pointer"
        >
          {/* Image Container */}
          <div className="relative h-64 md:h-80 overflow-hidden bg-navy-200">
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          </div>

          {/* Content */}
          <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
            <div>
              <p className="text-body-sm font-medium mb-2 text-gold-400">
                {client}
              </p>
              <h3 className="text-heading-md font-bold mb-4 group-hover:text-gold-400 transition-colors">
                {title}
              </h3>
            </div>

            {/* Results Preview */}
            <div className="space-y-1 text-body-sm opacity-90">
              {results.slice(0, 2).map((result, idx) => (
                <p key={idx} className="line-clamp-1">
                  ✓ {result}
                </p>
              ))}
            </div>

            {/* Hover CTA */}
            <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity">
              <span className="text-body-sm font-semibold text-gold-400">
                View Case Study →
              </span>
            </div>
          </div>
        </motion.div>
      </Link>
    </motion.div>
  )
}
