'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

const NAV_ITEMS = [
  { label: 'Home', href: '/' },
  { label: 'Work', href: '/work' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Ideas', href: '/ideas' },
  { label: 'Contact', href: '/contact' },
]

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <nav className="sticky top-0 z-50 bg-cream/95 backdrop-blur-sm border-b border-navy-100">
      <div className="container-custom">
        <div className="flex items-center justify-between py-4 md:py-6">
          {/* Logo */}
          <Link
            href="/"
            className="text-xl font-bold text-navy-900 hover:text-gold-600 transition-colors"
          >
            BrandTalk
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-body-base font-medium text-navy-900 hover:text-gold-600 transition-colors relative"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gold-600 transition-all duration-300 hover:w-full" />
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <Link
              href="/contact"
              className="button button-gold text-sm md:text-body-base"
            >
              Let's Talk
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden flex flex-col gap-1.5 w-8 h-8 justify-center items-center hover:text-gold-600 transition-colors"
            aria-label="Toggle menu"
          >
            <span
              className={cn(
                'w-6 h-0.5 bg-navy-900 transition-all duration-300',
                isOpen && 'rotate-45 translate-y-2'
              )}
            />
            <span
              className={cn(
                'w-6 h-0.5 bg-navy-900 transition-all duration-300',
                isOpen && 'opacity-0'
              )}
            />
            <span
              className={cn(
                'w-6 h-0.5 bg-navy-900 transition-all duration-300',
                isOpen && '-rotate-45 -translate-y-2'
              )}
            />
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="md:hidden bg-white border-t border-navy-100"
        >
          <div className="container-custom py-6 flex flex-col gap-4">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="text-body-base font-medium text-navy-900 hover:text-gold-600 transition-colors py-2"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="button button-gold w-full text-center mt-4"
            >
              Let's Talk
            </Link>
          </div>
        </motion.div>
      )}
    </nav>
  )
}
