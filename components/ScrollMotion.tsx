'use client'

import { usePathname } from 'next/navigation'
import { useEffect } from 'react'

/**
 * Drives the scroll motion for the whole site.
 *
 * Any element carrying .rise, .wipe or .zoom-settle starts displaced and
 * settles once it enters the viewport. Elements marked data-parallax drift
 * against the scroll while they are on screen.
 *
 * One observer and one rAF-throttled scroll listener serve the entire page,
 * and both stand down when the visitor asks for reduced motion.
 */
export default function ScrollMotion() {
  const pathname = usePathname()

  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const targets = Array.from(
      document.querySelectorAll<HTMLElement>('.rise, .wipe, .zoom-settle')
    )
    const floats = Array.from(
      document.querySelectorAll<HTMLElement>('[data-parallax]')
    )

    if (reduced) {
      targets.forEach((el) => el.classList.add('is-in'))
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return
          entry.target.classList.add('is-in')
          observer.unobserve(entry.target)
        })
      },
      // Fire a little before the element is fully in view, so the settle
      // finishes about when the reader arrives at it.
      { rootMargin: '0px 0px -12% 0px', threshold: 0.12 }
    )

    targets.forEach((el) => observer.observe(el))

    // Anything already above the fold on load should settle immediately
    // rather than waiting for a scroll that may never come.
    requestAnimationFrame(() => {
      targets.forEach((el) => {
        const rect = el.getBoundingClientRect()
        if (rect.top < window.innerHeight * 0.9) {
          el.classList.add('is-in')
          observer.unobserve(el)
        }
      })
    })

    let frame = 0
    const onScroll = () => {
      if (frame) return
      frame = requestAnimationFrame(() => {
        frame = 0
        const vh = window.innerHeight
        floats.forEach((el) => {
          const rect = el.getBoundingClientRect()
          if (rect.bottom < -200 || rect.top > vh + 200) return
          const speed = Number(el.dataset.parallax) || 0.12
          // progress runs -1 (below the fold) to 1 (above it)
          const progress = (rect.top + rect.height / 2 - vh / 2) / vh
          el.style.transform = `translate3d(0, ${(-progress * speed * vh).toFixed(2)}px, 0)`
        })
      })
    }

    if (floats.length > 0) {
      onScroll()
      window.addEventListener('scroll', onScroll, { passive: true })
      window.addEventListener('resize', onScroll, { passive: true })
    }

    return () => {
      observer.disconnect()
      if (frame) cancelAnimationFrame(frame)
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [pathname])

  return null
}
