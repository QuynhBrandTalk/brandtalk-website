'use client'

import Link from 'next/link'
import { about, brand, contact, home } from '@/lib/content'
import { useLang } from '@/lib/i18n'

export default function AboutPage() {
  const { t, lang } = useLang()

  const pillars = [about.aspiration, about.goal, about.belief, about.philosophy]

  return (
    <>
      <section className="shell-pad pb-16 pt-14 sm:pt-20">
        <h1 className="rise max-w-[16ch] text-display">
          {t(about.title)}
        </h1>
        <p className="rise delay-1 mt-7 text-reading text-lede text-graphite">
          {t(about.lede)}
        </p>
      </section>

      {/* The founder's own words carry this page, so they come first. */}
      <section className="shell-pad rule py-16">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.9fr] lg:gap-16">
          <div>
            <h2 className="wipe text-title">{t(home.letter.label)}</h2>
            <p className="mt-4 text-small text-graphite-mute">
              {brand.founder}
              <span className="block">{t(brand.founderRole)}</span>
            </p>
          </div>
          <div className="space-y-6 text-reading">
            {home.letter.body[lang].map((para, i) => (
              <p
                key={i}
                className={
                  i === 0
                    ? 'text-lede italic text-ink'
                    : 'text-body text-graphite'
                }
              >
                {para}
              </p>
            ))}
          </div>
        </div>
      </section>

      <section className="shell-pad rule py-16">
        <h2 className="wipe text-title">{t(about.visionTitle)}</h2>
        <dl className="mt-10 grid gap-x-12 gap-y-10 sm:grid-cols-2">
          {pillars.map((p) => (
            <div key={p.label.en} className="rise border-t border-hair pt-5">
              <dt className="text-subtitle text-coral">{t(p.label)}</dt>
              <dd className="mt-3 max-w-[40ch] text-small text-graphite">
                {t(p.body)}
              </dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="shell-pad rule py-16">
        <h2 className="wipe text-title">{t(about.valuesTitle)}</h2>
        <ul className="mt-10 grid gap-x-12 gap-y-9 sm:grid-cols-2 lg:grid-cols-4">
          {about.values.map((v) => (
            <li key={v.name.en}>
              <h3 className="text-subtitle">{t(v.name)}</h3>
              <p className="mt-2.5 text-small text-graphite">{t(v.body)}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="shell-pad rule py-16">
        <h2 className="wipe text-title">{t(about.networkTitle)}</h2>
        <p className="mt-4 text-reading text-body text-graphite">
          {t(about.networkLede)}
        </p>
        <ul className="mt-10 grid gap-x-12 gap-y-7 sm:grid-cols-2 lg:grid-cols-3">
          {about.network.map((person) => (
            <li key={person.name} className="rise border-t border-hair pt-4">
              <p className="text-subtitle">{person.name}</p>
              <p className="mt-1.5 text-small text-graphite-mute">{t(person.role)}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="shell-pad rule py-16">
        <h2 className="wipe text-title">{t(about.partnersTitle)}</h2>
        <ul className="mt-7 space-y-3">
          {about.partners.map((p) => (
            <li key={p.en} className="max-w-[52ch] text-body text-graphite">
              {t(p)}
            </li>
          ))}
        </ul>

        <Link
          href="/contact"
          className="rise btn-coral mt-12"
        >
          {t(contact.title)}
        </Link>
      </section>
    </>
  )
}
