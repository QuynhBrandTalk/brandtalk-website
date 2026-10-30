'use client'

import { useState, type FormEvent } from 'react'
import { contact } from '@/lib/content'
import { useLang } from '@/lib/i18n'

type Status = 'idle' | 'sending' | 'sent' | 'error'

const fieldClass =
  'w-full border-0 border-b border-hair bg-transparent px-0 py-2.5 text-body text-ink transition-colors duration-200 placeholder:text-graphite-mute focus:border-coral focus:outline-none focus:ring-0'

export default function ContactForm() {
  const { t, lang } = useLang()
  const f = contact.form

  const [status, setStatus] = useState<Status>('idle')
  const [errors, setErrors] = useState<Record<string, string>>({})

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const form = event.currentTarget
    const data = new FormData(form)

    const payload = {
      fullName: String(data.get('fullName') || '').trim(),
      email: String(data.get('email') || '').trim(),
      company: String(data.get('company') || '').trim(),
      industry: '',
      serviceInterest: String(data.get('serviceInterest') || ''),
      message: String(data.get('message') || '').trim(),
      scheduleCall: data.get('scheduleCall') === 'on',
    }

    const nextErrors: Record<string, string> = {}
    if (!payload.fullName) nextErrors.fullName = t(f.required)
    if (!payload.company) nextErrors.company = t(f.required)
    if (!payload.message) nextErrors.message = t(f.required)
    if (!payload.email) {
      nextErrors.email = t(f.required)
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(payload.email)) {
      nextErrors.email = t(f.invalidEmail)
    }

    setErrors(nextErrors)
    if (Object.keys(nextErrors).length > 0) return

    setStatus('sending')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })
      if (!res.ok) throw new Error('Request failed')
      setStatus('sent')
      form.reset()
    } catch {
      setStatus('error')
    }
  }

  if (status === 'sent') {
    return (
      <p
        role="status"
        className="border-l-2 border-coral py-2 pl-5 text-lede text-ink"
      >
        {t(f.success)}
      </p>
    )
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-8">
      <Field id="fullName" label={t(f.name)} error={errors.fullName}>
        <input id="fullName" name="fullName" type="text" className={fieldClass} />
      </Field>

      <Field id="email" label={t(f.email)} error={errors.email}>
        <input id="email" name="email" type="email" className={fieldClass} />
      </Field>

      <Field id="company" label={t(f.company)} error={errors.company}>
        <input id="company" name="company" type="text" className={fieldClass} />
      </Field>

      <Field id="serviceInterest" label={t(f.interest)}>
        <select
          id="serviceInterest"
          name="serviceInterest"
          defaultValue="board"
          className={`${fieldClass} [&>option]:bg-bone [&>option]:text-graphite`}
        >
          {f.interestOptions.map((o) => (
            <option key={o.value} value={o.value}>
              {o.label[lang]}
            </option>
          ))}
        </select>
      </Field>

      <Field id="message" label={t(f.message)} error={errors.message}>
        <textarea
          id="message"
          name="message"
          rows={4}
          placeholder={t(f.messagePlaceholder)}
          className={`${fieldClass} resize-y`}
        />
      </Field>

      <label className="flex items-start gap-3 text-small text-graphite">
        <input
          type="checkbox"
          name="scheduleCall"
          className="mt-1 h-4 w-4 shrink-0 accent-coral"
        />
        <span>{t(f.call)}</span>
      </label>

      {status === 'error' && (
        <p role="alert" className="text-small text-coral-deep">
          {t(f.error)}
        </p>
      )}

      <button
        type="submit"
        disabled={status === 'sending'}
        className="bg-coral px-7 py-3.5 text-small font-semibold text-white transition-colors duration-200 hover:bg-coral-deep disabled:opacity-60"
      >
        {status === 'sending' ? t(f.sending) : t(f.submit)}
      </button>
    </form>
  )
}

function Field({
  id,
  label,
  error,
  children,
}: {
  id: string
  label: string
  error?: string
  children: React.ReactNode
}) {
  return (
    <div>
      <label htmlFor={id} className="block text-small text-graphite-mute">
        {label}
      </label>
      <div className="mt-1">{children}</div>
      {error && (
        <p className="mt-2 text-micro text-coral-deep" role="alert">
          {error}
        </p>
      )}
    </div>
  )
}
