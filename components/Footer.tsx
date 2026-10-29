'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { containerVariants, itemVariants } from '@/lib/animations'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const footerSections = [
    {
      title: 'Company',
      links: [
        { label: 'About', href: '/about' },
        { label: 'Services', href: '/services' },
        { label: 'Ideas', href: '/ideas' },
      ],
    },
    {
      title: 'Work',
      links: [
        { label: 'Case Studies', href: '/work' },
        { label: 'Contact', href: '/contact' },
      ],
    },
    {
      title: 'Connect',
      links: [
        { label: 'LinkedIn', href: 'https://linkedin.com/company/brandtalk' },
        { label: 'Email', href: 'mailto:contact@brandtalk.asia' },
      ],
    },
  ]

  return (
    <footer className="bg-navy-900 text-white">
      <div className="container-custom py-12 md:py-16 lg:py-20">
        {/* Main Footer Content */}
        <motion.div
          variants={containerVariants}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-12"
        >
          {/* Brand Column */}
          <motion.div variants={itemVariants} className="lg:col-span-1">
            <h3 className="text-heading-md font-bold mb-4">BrandTalk</h3>
            <p className="text-body-sm text-gray-300 mb-6">
              Strategic guidance for Vietnamese heritage brands entering the
              digital age.
            </p>
            <p className="text-body-sm text-gray-400">
              More value, more sustainable.
            </p>
          </motion.div>

          {/* Navigation Columns */}
          {footerSections.map((section) => (
            <motion.div key={section.title} variants={itemVariants}>
              <h4 className="text-heading-sm font-semibold mb-4">
                {section.title}
              </h4>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      target={link.href.startsWith('http') ? '_blank' : undefined}
                      rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="text-body-sm text-gray-300 hover:text-gold-400 transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-gold-600 to-transparent mb-8" />

        {/* Bottom Section */}
        <motion.div
          variants={itemVariants}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-between items-center gap-6"
        >
          <p className="text-body-sm text-gray-400">
            &copy; {currentYear} BrandTalk. All rights reserved.
          </p>

          <div className="flex gap-6">
            <Link
              href="#"
              className="text-body-sm text-gray-400 hover:text-gold-400 transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="#"
              className="text-body-sm text-gray-400 hover:text-gold-400 transition-colors"
            >
              Terms of Service
            </Link>
          </div>

          <div className="flex gap-4">
            <Link
              href="https://linkedin.com/company/brandtalk"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-gold-600 text-navy-900 hover:bg-gold-500 transition-colors"
              aria-label="LinkedIn"
            >
              <span className="text-body-sm font-bold">in</span>
            </Link>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
