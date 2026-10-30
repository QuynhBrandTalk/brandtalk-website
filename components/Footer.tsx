'use client'

import Link from 'next/link'
import { brand, contact, footer, nav } from '@/lib/content'
import { useLang } from '@/lib/i18n'

export default function Footer() {
  const { t } = useLang()
  const year = new Date().getFullYear()
  const d = contact.details

  return (
    <footer className="mt-24 border-t border-indigo-line bg-indigo-base">
      <div className="shell-pad grid gap-10 py-14 md:grid-cols-[1.4fr_1fr_1.2fr]">
        <div>
          <p className="text-subtitle font-extrabold tracking-tight text-shell-bright">
            {brand.name}
          </p>
          <p className="mt-1 text-small text-celadon">{t(brand.tagline)}</p>
          <p className="mt-4 max-w-[34ch] text-small text-shell-dim">
            {t(footer.blurb)}
          </p>
        </div>

        <nav aria-label={t(contact.title)}>
          <ul className="space-y-2.5">
            {nav.slice(1).map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="link-underline text-small text-shell transition-colors duration-200 hover:text-shell-bright"
                >
                  {t(item.label)}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="space-y-2.5 text-small">
          <p>
            <a
              href={`mailto:${d.email}`}
              className="link-underline text-shell transition-colors duration-200 hover:text-shell-bright"
            >
              {d.email}
            </a>
          </p>
          <p>
            <a
              href={`tel:${d.phone.replace(/\s/g, '')}`}
              className="link-underline text-shell transition-colors duration-200 hover:text-shell-bright"
            >
              {d.phone}
            </a>
          </p>
          <p>
            <a
              href={d.facebookUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="link-underline text-shell transition-colors duration-200 hover:text-shell-bright"
            >
              {d.facebook}
            </a>
          </p>
          <p className="max-w-[30ch] text-shell-dim">{t(d.address)}</p>
        </div>
      </div>

      <div className="shell-pad rule py-6">
        <p className="text-micro text-shell-dim">
          {year} {brand.name}. {t(footer.rights)}
        </p>
      </div>
    </footer>
  )
}
