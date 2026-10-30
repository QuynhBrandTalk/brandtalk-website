'use client'

import Link from 'next/link'
import { about, approach, clients, contact, home } from '@/lib/content'
import { useLang } from '@/lib/i18n'
import WorkTile from '@/components/WorkTile'
import { slugFor } from '@/lib/slug'

export default function HomePage() {
  const { t } = useLang()

  const [feature, ...rest] = clients.cases

  return (
    <>
      {/* The work opens the site, the way it does at an agency that wants to
          be judged on what it made. */}
      <section className="shell-pad pt-10 sm:pt-14">
        <p className="rise text-micro font-semibold text-coral">
          {t(home.hero.kicker)}
        </p>
        <h1 className="wipe delay-1 mt-5 max-w-[18ch] text-mega">
          {t(home.hero.headline)}
        </h1>
        <p className="rise delay-2 mt-7 max-w-[52ch] text-lede text-graphite-soft">
          {t(home.hero.sub)}
        </p>
      </section>

      <section className="shell-pad mt-16">
        <div className="rise">
          <WorkTile
            name={feature.name}
            headline={feature.headline}
            sector={feature.sector}
            image={feature.image}
            href={`/work/${slugFor(feature)}`}
            variant="feature"
            priority
          />
        </div>
      </section>

      <section className="shell-pad mt-24">
        <div className="grid gap-x-10 gap-y-20 md:grid-cols-2">
          {rest.map((c) => (
            <div key={c.name} className="rise">
              <WorkTile
                name={c.name}
                headline={c.headline}
                sector={c.sector}
                image={c.image}
                href={`/work/${slugFor(c)}`}
              />
            </div>
          ))}
        </div>

        <div className="rise mt-16">
          <Link
            href="/clients"
            className="link-underline text-subtitle text-ink"
          >
            {t(clients.title)}
          </Link>
        </div>
      </section>

      {/* A short statement of who is behind the work, then out to About. */}
      <section className="mt-32 bg-bone py-24">
        <div className="shell-pad grid gap-12 lg:grid-cols-[1fr_1.4fr] lg:gap-20">
          <h2 className="wipe text-title">{t(home.letter.label)}</h2>

          <div>
            <p className="rise text-reading text-lede text-graphite">
              {t(about.lede)}
            </p>
            <p className="rise delay-1 mt-6 text-reading text-body text-graphite-soft">
              {t(home.closing.body)}
            </p>
            <Link
              href="/about"
              className="rise delay-2 link-underline mt-9 inline-block text-subtitle text-ink"
            >
              {t(about.title)}
            </Link>
          </div>
        </div>
      </section>

      {/* How the work happens, kept to four lines with the detail a click away. */}
      <section className="shell-pad py-24">
        <h2 className="wipe text-title">{t(approach.title)}</h2>

        <ul className="mt-12 grid gap-x-12 gap-y-12 sm:grid-cols-2">
          {approach.modes.map((m, i) => (
            <li
              key={m.name.en}
              className="rise rule pt-6"
              style={{ transitionDelay: `${i * 90}ms` }}
            >
              <h3 className="text-subtitle">{t(m.name)}</h3>
              <p className="mt-3 max-w-[42ch] text-small text-graphite-soft">
                {t(m.body)}
              </p>
            </li>
          ))}
        </ul>

        <Link
          href="/approach"
          className="rise link-underline mt-12 inline-block text-subtitle text-ink"
        >
          {t(approach.title)}
        </Link>
      </section>

      {/* Training clients carry weight here: they are the names people know. */}
      <section className="shell-pad rule py-24">
        <h2 className="wipe text-title">{t(clients.trainingLabel)}</h2>
        <ul className="mt-10 grid gap-x-12 gap-y-8 sm:grid-cols-2 lg:grid-cols-4">
          {clients.training.map((item, i) => (
            <li
              key={item.name}
              className="rise"
              style={{ transitionDelay: `${i * 90}ms` }}
            >
              <p className="text-subtitle">{item.name}</p>
              <p className="mt-1.5 text-small text-graphite-mute">
                {t(item.note)}
              </p>
            </li>
          ))}
        </ul>
      </section>

      <section className="shell-pad rule py-24">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr] lg:gap-20">
          <h2 className="wipe max-w-[16ch] text-display">
            {t(contact.lede)}
          </h2>
          <div className="rise delay-1 self-end">
            <Link href="/contact" className="btn-coral">
              {t(home.hero.cta)}
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
