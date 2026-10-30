'use client'

import { contact } from '@/lib/content'
import { useLang } from '@/lib/i18n'
import ContactForm from '@/components/ContactForm'

export default function ContactPage() {
  const { t } = useLang()
  const d = contact.details

  return (
    <>
      <section className="shell-pad pb-14 pt-14 sm:pt-20">
        <h1 className="enter enter-1 max-w-[14ch] text-display">
          {t(contact.title)}
        </h1>
        <p className="enter enter-2 mt-7 text-reading text-lede text-shell">
          {t(contact.lede)}
        </p>
      </section>

      <section className="shell-pad rule py-16">
        <div className="grid gap-14 lg:grid-cols-[1.5fr_1fr] lg:gap-20">
          <ContactForm />

          <div className="space-y-7">
            <Detail label={t(d.emailLabel)}>
              <a
                href={`mailto:${d.email}`}
                className="link-underline text-body text-shell-bright"
              >
                {d.email}
              </a>
            </Detail>

            <Detail label={t(d.phoneLabel)}>
              <a
                href={`tel:${d.phone.replace(/\s/g, '')}`}
                className="link-underline text-body text-shell-bright"
              >
                {d.phone}
              </a>
            </Detail>

            <Detail label={t(d.facebookLabel)}>
              <a
                href={d.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="link-underline text-body text-shell-bright"
              >
                {d.facebook}
              </a>
            </Detail>

            <Detail label={t(d.addressLabel)}>
              <p className="max-w-[28ch] text-body text-shell">{t(d.address)}</p>
            </Detail>
          </div>
        </div>
      </section>
    </>
  )
}

function Detail({
  label,
  children,
}: {
  label: string
  children: React.ReactNode
}) {
  return (
    <div className="border-t border-indigo-line pt-4">
      <p className="text-small text-shell-dim">{label}</p>
      <div className="mt-1.5">{children}</div>
    </div>
  )
}
