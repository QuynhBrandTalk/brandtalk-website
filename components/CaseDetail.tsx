'use client'

import Link from 'next/link'
import { useState } from 'react'
import { clients, contact, ui } from '@/lib/content'
import { useLang } from '@/lib/i18n'
import { slugFor } from '@/lib/slug'

export default function CaseDetail({ index }: { index: number }) {
  const { t, lang } = useLang()
  const [imageFailed, setImageFailed] = useState(false)

  const c = clients.cases[index]
  const next = clients.cases[(index + 1) % clients.cases.length]
  const showImage = Boolean(c.image) && !imageFailed

  return (
    <>
      <section className="shell-pad pt-10 sm:pt-14">
        <p className="rise text-micro font-semibold text-coral">{c.name}</p>
        <h1 className="wipe delay-1 mt-5 max-w-[20ch] text-display">
          {t(c.headline)}
        </h1>
        <p className="rise delay-2 mt-5 text-small text-graphite-mute">
          {t(c.sector)}
        </p>
      </section>

      {/* The image holds the top of the page and eases to true size. */}
      <section className="shell-pad mt-12">
        <div className="zoom-settle relative aspect-[16/9] overflow-hidden bg-coral-peach">
          <div className="coral-field absolute inset-0" />
          {showImage && (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={c.image}
              alt=""
              onError={() => setImageFailed(true)}
              className="absolute inset-0 h-full w-full object-cover"
            />
          )}
        </div>
      </section>

      <section className="shell-pad py-20">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.7fr] lg:gap-20">
          <div className="rise">
            <h2 className="text-subtitle">{t(clients.caseLabel)}</h2>
            <ul className="mt-4 space-y-1.5">
              {c.services[lang].map((s) => (
                <li key={s} className="text-small text-coral">
                  {s}
                </li>
              ))}
            </ul>
          </div>

          <p className="rise delay-1 text-reading text-lede text-graphite">
            {t(c.body)}
          </p>
        </div>
      </section>

      <section className="shell-pad rule py-16">
        <div className="flex flex-wrap items-end justify-between gap-8">
          <div className="rise">
            <p className="text-micro font-semibold text-coral">{next.name}</p>
            <Link
              href={`/work/${slugFor(next)}`}
              className="link-underline mt-2 inline-block text-title"
            >
              {t(next.headline)}
            </Link>
          </div>

          <Link href="/clients" className="rise link-underline text-small">
            {t(ui.backToClients)}
          </Link>
        </div>
      </section>

      <section className="shell-pad rule py-20">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr] lg:gap-20">
          <h2 className="wipe max-w-[16ch] text-title">{t(contact.lede)}</h2>
          <div className="rise delay-1 self-end">
            <Link href="/contact" className="btn-coral">
              {t(contact.title)}
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
