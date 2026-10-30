'use client'

import Link from 'next/link'
import { approach, contact } from '@/lib/content'
import { useLang } from '@/lib/i18n'

export default function ApproachPage() {
  const { t, lang } = useLang()

  return (
    <>
      <section className="shell-pad pb-16 pt-14 sm:pt-20">
        <h1 className="enter enter-1 max-w-[16ch] text-display">
          {t(approach.title)}
        </h1>
        <p className="enter enter-2 mt-7 text-reading text-lede text-shell">
          {t(approach.lede)}
        </p>
      </section>

      <section className="shell-pad rule py-16">
        <div className="space-y-14">
          {approach.modes.map((mode) => (
            <article
              key={mode.name.en}
              className="grid gap-6 border-t border-indigo-line pt-7 lg:grid-cols-[1fr_1.6fr] lg:gap-14"
            >
              <h2 className="text-title">{t(mode.name)}</h2>

              <div>
                <p className="text-reading text-body text-shell">
                  {t(mode.body)}
                </p>
                <ul className="mt-5 flex flex-wrap gap-x-6 gap-y-2">
                  {mode.detail[lang].map((item) => (
                    <li key={item} className="text-small text-celadon">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>

        <p className="mt-14 max-w-[48ch] text-body text-shell-dim">
          {t(approach.note)}
        </p>

        <Link
          href="/contact"
          className="mt-8 inline-block bg-celadon px-6 py-3.5 text-small font-semibold text-indigo-deep transition-colors duration-200 hover:bg-celadon-bright"
        >
          {t(contact.title)}
        </Link>
      </section>
    </>
  )
}
