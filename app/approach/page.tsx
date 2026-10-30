'use client'

import Link from 'next/link'
import { approach, contact } from '@/lib/content'
import { useLang } from '@/lib/i18n'

export default function ApproachPage() {
  const { t, lang } = useLang()

  return (
    <>
      <section className="shell-pad pb-16 pt-14 sm:pt-20">
        <h1 className="rise max-w-[16ch] text-display">
          {t(approach.title)}
        </h1>
        <p className="rise delay-1 mt-7 text-reading text-lede text-graphite">
          {t(approach.lede)}
        </p>
      </section>

      <section className="shell-pad rule py-16">
        <div className="space-y-14">
          {approach.modes.map((mode) => (
            <article
              key={mode.name.en}
              className="rise grid gap-6 border-t border-hair pt-7 lg:grid-cols-[1fr_1.6fr] lg:gap-14"
            >
              <h2 className="wipe text-title">{t(mode.name)}</h2>

              <div>
                <p className="text-reading text-body text-graphite">
                  {t(mode.body)}
                </p>
                <ul className="mt-5 flex flex-wrap gap-x-6 gap-y-2">
                  {mode.detail[lang].map((item) => (
                    <li key={item} className="text-small text-coral">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>

        <p className="mt-14 max-w-[48ch] text-body text-graphite-mute">
          {t(approach.note)}
        </p>

        <Link
          href="/contact"
          className="rise btn-coral mt-8"
        >
          {t(contact.title)}
        </Link>
      </section>
    </>
  )
}
