'use client'

import Link from 'next/link'
import { useState } from 'react'
import type { L } from '@/lib/content'
import { useLang } from '@/lib/i18n'

type Props = {
  name: string
  headline: L
  sector: L
  image?: string
  href: string
  /** 'feature' fills the opening screen; 'tile' sits in the grid below it. */
  variant?: 'feature' | 'tile'
  priority?: boolean
}

export default function WorkTile({
  name,
  headline,
  sector,
  image,
  href,
  variant = 'tile',
  priority = false,
}: Props) {
  const { t } = useLang()
  const [imageFailed, setImageFailed] = useState(false)
  const showImage = Boolean(image) && !imageFailed

  const isFeature = variant === 'feature'

  return (
    <Link href={href} className="group block">
      <div
        className={`zoom-settle relative overflow-hidden bg-coral-peach ${
          isFeature ? 'aspect-[16/10] lg:aspect-[21/9]' : 'aspect-[4/3]'
        }`}
      >
        {/* The logo gradient stands in until a photograph is in place. */}
        <div className="coral-field absolute inset-0" />

        {showImage && (
          // Plain img so a missing file degrades to the gradient instead of
          // breaking the page.
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={image}
            alt=""
            loading={priority ? 'eager' : 'lazy'}
            onError={() => setImageFailed(true)}
            className="absolute inset-0 h-full w-full object-cover"
          />
        )}

        <div
          className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-900 ease-apple group-hover:opacity-100"
          style={{
            background:
              'linear-gradient(to top, rgba(0,0,0,0.42) 0%, rgba(0,0,0,0) 52%)',
          }}
        />
      </div>

      <div className={isFeature ? 'pt-6' : 'pt-5'}>
        <p className="text-micro font-semibold text-coral">{name}</p>
        <h3
          className={`mt-2 ${isFeature ? 'text-display' : 'text-title'} transition-colors duration-700 ease-apple group-hover:text-coral`}
        >
          {t(headline)}
        </h3>
        <p className="mt-2 text-small text-graphite-mute">{t(sector)}</p>
      </div>
    </Link>
  )
}
