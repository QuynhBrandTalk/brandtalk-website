'use client'

import Link from 'next/link'
import { brand, contact, footer, nav } from '@/lib/content'
import { useLang } from '@/lib/i18n'

export default function Footer() {
  const { t } = useLang()
  const year = new Date().getFullYear()
  const d = contact.details

  return (
    <footer className="mt-8 border-t border-hair bg-bone">
      <div className="shell-pad grid gap-12 py-16 md:grid-cols-[1.4fr_1fr_1.2fr]">
        <div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/brand/logo.png"
            alt={brand.name}
            width={232}
            height={124}
            className="h-20 w-auto"
          />
          <p className="mt-5 max-w-[34ch] text-small text-graphite-soft">
            {t(footer.blurb)}
          </p>
        </div>

        <nav aria-label={t(brand.role)}>
          <ul className="space-y-3">
            {nav.slice(1).map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="link-underline text-small text-graphite transition-colors duration-500 ease-apple hover:text-ink"
                >
                  {t(item.label)}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="space-y-3 text-small">
          <p>
            <a
              href={`mailto:${d.email}`}
              className="link-underline text-graphite hover:text-ink"
            >
              {d.email}
            </a>
          </p>
          <p>
            <a
              href={`tel:${d.phone.replace(/\s/g, '')}`}
              className="link-underline text-graphite hover:text-ink"
            >
              {d.phone}
            </a>
          </p>
          <p>
            <a
              href={d.facebookUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="link-underline text-graphite hover:text-ink"
            >
              {d.facebook}
            </a>
          </p>
          <p className="max-w-[30ch] text-graphite-mute">{t(d.address)}</p>
        </div>
      </div>

      <div className="shell-pad rule py-6">
        <p className="text-micro text-graphite-mute">
          {year} {brand.name}. {t(footer.rights)}
        </p>
      </div>
    </footer>
  )
}
