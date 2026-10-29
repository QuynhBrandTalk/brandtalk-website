'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { cardHoverVariants, itemVariants } from '@/lib/animations'

interface ServiceCardProps {
  title: string
  description: string
  keyServices: string[]
  benefits: string[]
  href: string
  index?: number
}

export default function ServiceCard({
  title,
  description,
  keyServices,
  benefits,
  href,
  index = 0,
}: ServiceCardProps) {
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
      <motion.div
        variants={cardHoverVariants}
        className="h-full bg-white rounded-lg p-8 border border-navy-100 hover:border-gold-600"
      >
        <h3 className="text-heading-md font-bold text-navy-900 mb-4">
          {title}
        </h3>

        <p className="text-body-base text-gray-700 mb-6 line-clamp-2">
          {description}
        </p>

        {/* Key Services */}
        <div className="mb-6">
          <h4 className="text-body-sm font-semibold text-navy-900 mb-3">
            Key Services
          </h4>
          <ul className="space-y-2">
            {keyServices.slice(0, 3).map((service, idx) => (
              <li
                key={idx}
                className="text-body-sm text-gray-600 flex items-start gap-2"
              >
                <span className="text-gold-600 font-bold mt-1">•</span>
                <span>{service}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Benefits Preview */}
        <div className="mb-6 pb-6 border-b border-navy-100">
          <h4 className="text-body-sm font-semibold text-navy-900 mb-3">
            Expected Outcomes
          </h4>
          <ul className="space-y-2">
            {benefits.slice(0, 2).map((benefit, idx) => (
              <li
                key={idx}
                className="text-body-sm text-gray-600 flex items-start gap-2"
              >
                <span className="text-gold-600 font-bold mt-1">✓</span>
                <span>{benefit}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* CTA */}
        <Link href={href} className="button button-secondary w-full text-center">
          Learn More
          <span className="ml-2">→</span>
        </Link>
      </motion.div>
    </motion.div>
  )
}
