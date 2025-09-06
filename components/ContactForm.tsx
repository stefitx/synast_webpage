'use client'

import React from 'react'

export default function ContactForm({
  locale = 'ro',
}: { locale?: 'ro' | 'en' }) {
  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const fd = new FormData(e.currentTarget)

    const res = await fetch('https://formspree.io/f/mrbaogln', {
      method: 'POST',
      body: fd,
      headers: { Accept: 'application/json' },
    })

    if (res.ok) {
      e.currentTarget.reset()
      window.location.href =
        locale === 'ro' ? '/ro/contact/sent/' : '/contact/sent/'
    } else {
      const data = await res.json().catch(() => ({}))
      alert(data.errors?.[0]?.message ?? 'A apărut o problemă. Încearcă din nou.')
    }
  }

  return (
    <form onSubmit={onSubmit} className="mt-8 space-y-4">
      <input type="hidden" name="_subject" value="Mesaj nou — Synast Digital" />
      <input type="text" name="_gotcha" className="hidden" tabIndex={-1} autoComplete="off" />

      <div>
        <label className="block text-sm font-medium">
          {locale === 'ro' ? 'Nume' : 'Name'}
        </label>
        <input required name="name" className="mt-1 w-full rounded-2xl border px-4 py-3"
               placeholder={locale === 'ro' ? 'Numele tău' : 'Your name'} />
      </div>

      <div>
        <label className="block text-sm font-medium">Email</label>
        <input required type="email" name="email" className="mt-1 w-full rounded-2xl border px-4 py-3"
               placeholder={locale === 'ro' ? 'tu@exemplu.com' : 'you@example.com'} />
      </div>

      <div>
        <label className="block text-sm font-medium">
          {locale === 'ro' ? 'Mesaj' : 'Message'}
        </label>
        <textarea required name="message" rows={5} className="mt-1 w-full rounded-2xl border px-4 py-3"
                  placeholder={locale === 'ro'
                    ? 'Spune-ne pe scurt despre obiectivele tale'
                    : 'Tell us about your goals'} />
      </div>

      <label className="flex items-start gap-2 text-sm text-ink-600">
        <input required type="checkbox" name="consent" className="mt-1" />
        {locale === 'ro'
          ? <>Sunt de acord cu <a className="underline" href="/ro/privacy/">Politica de confidențialitate</a>.</>
          : <>I agree to the <a className="underline" href="/privacy">Privacy Policy</a>.</>}
      </label>

      <button className="btn btn-primary" type="submit">
        {locale === 'ro' ? 'Trimite' : 'Send'}
      </button>
    </form>
  )
}
