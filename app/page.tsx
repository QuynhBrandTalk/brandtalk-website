'use client'

import Link from 'next/link'
import { about, approach, brand, clients, home } from '@/lib/content'
import { useLang } from '@/lib/i18n'

export default function HomePage() {
  const { t, lang } = useLang()

  return (
    <>
      {/* Hero: the vertical frame is the shape this work happens in. */}
      <section className="shell-pad pb-20 pt-14 sm:pt-20">
        <div className="grid items-center gap-12 lg:grid-cols-[1.35fr_1fr] lg:gap-16">
          <div>
            <p className="enter enter-1 text-micro font-semibold tracking-wide text-celadon">
              {t(home.hero.kicker)}
            </p>

            <h1 className="enter enter-2 mt-5 text-display">
              {t(home.hero.headline)}
            </h1>

            <p className="enter enter-3 mt-7 max-w-[46ch] text-lede text-shell">
              {t(home.hero.sub)}
            </p>

            <div className="enter enter-4 mt-9 flex flex-wrap items-center gap-x-8 gap-y-4">
              <Link
                href="/contact"
                className="bg-celadon px-6 py-3.5 text-small font-semibold text-indigo-deep transition-colors duration-200 hover:bg-celadon-bright"
              >
                {t(home.hero.cta)}
              </Link>
              <Link
                href="/approach"
                className="link-underline text-small font-medium text-shell transition-colors duration-200 hover:text-shell-bright"
              >
                {t(home.hero.ctaSecondary)}
              </Link>
            </div>
          </div>

          <div className="enter enter-3 mx-auto w-full max-w-[17rem] lg:max-w-none">
            <div className="frame-vertical flex flex-col justify-between p-5">
              <div className="flex items-center gap-2">
                <span className="pulse-live h-1.5 w-1.5 rounded-full bg-areca" />
                <span className="text-micro font-semibold tracking-wide text-areca">
                  LIVE
                </span>
              </div>

              <ul className="space-y-3">
                {clients.cases.map((c) => (
                  <li
                    key={c.name}
                    className="border-l border-celadon-dim pl-3 text-small text-shell"
                  >
                    <span className="block font-semibold text-shell-bright">
                      {c.name}
                    </span>
                    <span className="block text-micro text-shell-dim">
                      {t(c.sector)}
                    </span>
                  </li>
                ))}
              </ul>

              <p className="text-micro text-shell-dim">
                {t(clients.caseLabel)}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The founder letter, in her own words. */}
      <section className="shell-pad rule py-20">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.9fr] lg:gap-16">
          <div>
            <h2 className="text-title">{t(home.letter.label)}</h2>
            <p className="mt-4 text-small text-shell-dim">
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
                    ? 'font-quote text-lede italic text-shell-bright'
                    : 'text-body text-shell'
                }
              >
                {para}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* Market context. The percentages are TikTok's published research, not
          client results. */}
      <section className="shell-pad rule py-20">
        <h2 className="max-w-[20ch] text-title">{t(home.marketTitle)}</h2>

        <div className="mt-8 grid gap-12 lg:grid-cols-[1.3fr_1fr] lg:gap-16">
          <div>
            <p className="text-reading text-body text-shell">
              {t(home.marketBody)}
            </p>
            <p className="mt-5 text-micro text-shell-dim">
              {t(home.marketSource)}
            </p>
          </div>

          <dl className="space-y-6">
            {home.stats.map((s) => (
              <div key={s.value} className="flex gap-5">
                <dt className="w-[3.6rem] shrink-0 font-quote text-[1.9rem] leading-none text-celadon">
                  {s.value}
                </dt>
                <dd className="text-small text-shell">{t(s.label)}</dd>
              </div>
            ))}
            <p className="text-micro text-shell-dim">{t(home.statsSource)}</p>
          </dl>
        </div>
      </section>

      {/* How the work happens. */}
      <section className="shell-pad rule py-20">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <h2 className="text-title">{t(approach.title)}</h2>
          <Link
            href="/approach"
            className="link-underline text-small text-shell transition-colors duration-200 hover:text-shell-bright"
          >
            {t(approach.title)}
          </Link>
        </div>

        <p className="mt-5 text-reading text-lede text-shell">
          {t(approach.lede)}
        </p>

        <ul className="mt-12 grid gap-x-12 gap-y-10 sm:grid-cols-2">
          {approach.modes.map((m) => (
            <li key={m.name.en} className="border-t border-indigo-line pt-5">
              <h3 className="text-subtitle">{t(m.name)}</h3>
              <p className="mt-3 max-w-[42ch] text-small text-shell">
                {t(m.body)}
              </p>
            </li>
          ))}
        </ul>
      </section>

      {/* Values. */}
      <section className="shell-pad rule py-20">
        <h2 className="text-title">{t(about.valuesTitle)}</h2>

        <ul className="mt-10 grid gap-x-12 gap-y-9 sm:grid-cols-2 lg:grid-cols-4">
          {about.values.map((v) => (
            <li key={v.name.en}>
              <h3 className="text-subtitle text-celadon">{t(v.name)}</h3>
              <p className="mt-2.5 text-small text-shell">{t(v.body)}</p>
            </li>
          ))}
        </ul>
      </section>

      {/* Closing. */}
      <section className="shell-pad rule py-20">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
          <figure>
            <blockquote className="font-quote text-[clamp(1.5rem,3vw,2.2rem)] italic leading-[1.3] text-shell-bright">
              {t(home.closing.quote)}
            </blockquote>
            <figcaption className="mt-4 text-small text-shell-dim">
              {home.closing.attribution}
            </figcaption>
          </figure>

          <div>
            <p className="text-reading text-body text-shell">
              {t(home.closing.body)}
            </p>
            <Link
              href="/contact"
              className="mt-8 inline-block bg-celadon px-6 py-3.5 text-small font-semibold text-indigo-deep transition-colors duration-200 hover:bg-celadon-bright"
            >
              {t(home.hero.cta)}
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
