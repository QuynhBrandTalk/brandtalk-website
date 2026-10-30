'use client'

import Link from 'next/link'
import { clients, contact } from '@/lib/content'
import { useLang } from '@/lib/i18n'

export default function ClientsPage() {
  const { t, lang } = useLang()

  return (
    <>
      <section className="shell-pad pb-16 pt-14 sm:pt-20">
        <h1 className="rise max-w-[16ch] text-display">
          {t(clients.title)}
        </h1>
        <p className="rise delay-1 mt-7 text-reading text-lede text-graphite">
          {t(clients.lede)}
        </p>
      </section>

      {/* Engagements. Named, described by the work done, without figures. */}
      <section className="shell-pad rule py-16">
        <h2 className="wipe text-title">{t(clients.caseLabel)}</h2>

        <div className="mt-10 space-y-12">
          {clients.cases.map((c) => (
            <article
              key={c.name}
              className="rise grid gap-5 border-t border-hair pt-7 lg:grid-cols-[1fr_1.7fr] lg:gap-14"
            >
              <div>
                <h3 className="text-subtitle text-ink">{c.name}</h3>
                <p className="mt-1.5 text-small text-graphite-mute">{t(c.sector)}</p>
              </div>

              <div>
                <p className="text-reading text-body text-graphite">{t(c.body)}</p>
                <ul className="mt-4 flex flex-wrap gap-x-5 gap-y-2">
                  {c.services[lang].map((s) => (
                    <li key={s} className="text-small text-coral">
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="shell-pad rule py-16">
        <h2 className="wipe text-title">{t(clients.trainingLabel)}</h2>
        <ul className="mt-9 grid gap-x-12 gap-y-7 sm:grid-cols-2">
          {clients.training.map((item) => (
            <li key={item.name} className="rise border-t border-hair pt-4">
              <p className="text-subtitle">{item.name}</p>
              <p className="mt-1.5 max-w-[38ch] text-small text-graphite-mute">
                {t(item.note)}
              </p>
            </li>
          ))}
        </ul>
      </section>

      <section className="shell-pad rule py-16">
        <h2 className="wipe text-title">{t(clients.heritageLabel)}</h2>
        <ul className="mt-7 flex flex-wrap gap-x-8 gap-y-3">
          {clients.heritage.map((name) => (
            <li key={name} className="text-lede text-graphite">
              {name}
            </li>
          ))}
        </ul>
      </section>

      {/* Milestones are a real chronology, so they are numbered by year. */}
      <section className="shell-pad rule py-16">
        <h2 className="wipe text-title">{t(clients.milestonesLabel)}</h2>

        <div className="mt-10 space-y-12">
          {clients.milestones.map((m) => (
            <div
              key={m.year}
              className="rise grid gap-5 border-t border-hair pt-7 lg:grid-cols-[1fr_2.4fr] lg:gap-14"
            >
              <p className="text-[2rem] leading-none text-coral">
                {m.year}
              </p>
              <ul className="space-y-4">
                {m.items[lang].map((item, i) => (
                  <li
                    key={i}
                    className="max-w-[58ch] text-body text-graphite"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <Link
          href="/contact"
          className="rise btn-coral mt-14"
        >
          {t(contact.title)}
        </Link>
      </section>
    </>
  )
}
