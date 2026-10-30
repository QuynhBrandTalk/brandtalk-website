'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { brand, nav, ui } from '@/lib/content'
import { useLang } from '@/lib/i18n'

export default function Navigation() {
  const { lang, setLang, t } = useLang()
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  // Close the panel on navigation, and never leave the page scroll-locked.
  useEffect(() => {
    setOpen(false)
  }, [pathname])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  const isCurrent = (href: string) =>
    href === '/' ? pathname === '/' : pathname.startsWith(href)

  return (
    <header className="sticky top-0 z-50 border-b border-indigo-line/70 bg-indigo-deep/90 backdrop-blur">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:z-10 focus:bg-celadon focus:px-3 focus:py-2 focus:text-micro focus:font-semibold focus:text-indigo-deep"
      >
        {t(ui.skipToContent)}
      </a>

      <div className="shell-pad flex h-16 items-center justify-between gap-6 sm:h-20">
        <Link href="/" className="group flex items-baseline gap-2.5">
          <span className="text-[1.05rem] font-extrabold tracking-tight text-shell-bright">
            {brand.name}
          </span>
          <span className="hidden text-micro text-shell-dim sm:inline">
            {t(brand.tagline)}
          </span>
        </Link>

        <nav aria-label={t(ui.menu)} className="hidden items-center gap-7 lg:flex">
          {nav.slice(1).map((item) => (
            <Link
              key={item.href}
              href={item.href}
              data-current={isCurrent(item.href)}
              aria-current={isCurrent(item.href) ? 'page' : undefined}
              className={`link-underline text-small transition-colors duration-200 ${
                isCurrent(item.href)
                  ? 'text-shell-bright'
                  : 'text-shell hover:text-shell-bright'
              }`}
            >
              {t(item.label)}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => setLang(lang === 'vi' ? 'en' : 'vi')}
            title={t(ui.langSwitchTitle)}
            className="rounded-sm border border-indigo-line px-2.5 py-1.5 text-micro font-semibold tracking-wide text-shell transition-colors duration-200 hover:border-celadon hover:text-celadon"
          >
            {t(ui.langLabel)}
          </button>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            className="flex h-9 w-9 items-center justify-center rounded-sm border border-indigo-line text-shell transition-colors duration-200 hover:border-celadon hover:text-celadon lg:hidden"
          >
            <span className="sr-only">{open ? t(ui.close) : t(ui.menu)}</span>
            <svg width="16" height="12" viewBox="0 0 16 12" aria-hidden="true">
              {open ? (
                <g stroke="currentColor" strokeWidth="1.5">
                  <line x1="2" y1="2" x2="14" y2="10" />
                  <line x1="14" y1="2" x2="2" y2="10" />
                </g>
              ) : (
                <g stroke="currentColor" strokeWidth="1.5">
                  <line x1="0" y1="1.5" x2="16" y2="1.5" />
                  <line x1="0" y1="6" x2="16" y2="6" />
                  <line x1="0" y1="10.5" x2="10" y2="10.5" />
                </g>
              )}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <nav
          id="mobile-nav"
          aria-label={t(ui.menu)}
          className="border-t border-indigo-line bg-indigo-deep lg:hidden"
        >
          <ul className="shell-pad flex flex-col py-2">
            {nav.map((item) => (
              <li key={item.href} className="border-b border-indigo-line/50 last:border-0">
                <Link
                  href={item.href}
                  aria-current={isCurrent(item.href) ? 'page' : undefined}
                  className={`block py-3.5 text-subtitle ${
                    isCurrent(item.href) ? 'text-celadon' : 'text-shell'
                  }`}
                >
                  {t(item.label)}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  )
}
