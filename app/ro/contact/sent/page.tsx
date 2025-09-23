import Section from '@/components/Section'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Mesaj trimis — Synast Digital',
  description: 'Îți mulțumim pentru mesaj. Revenim în cel mult două zile lucrătoare.',
  alternates: { canonical: '/ro/contact/sent', languages: { 'en-US': '/contact/sent', 'ro-RO': '/ro/contact/sent' } },
  openGraph: {
    title: 'Mesaj recepționat — Synast Digital',
    description: 'Ți-am primit mesajul și revenim în cel mai scurt timp.',
    url: 'https://www.synastdigital.com/ro/contact/sent',
    locale: 'ro_RO',
    siteName: 'Synast Digital',
    images: [
      {
        url: 'https://www.synastdigital.com/logo.png',
        width: 512,
        height: 512,
        alt: 'Sigla Synast Digital',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mesaj recepționat — Synast Digital',
    description: 'Îți mulțumim pentru mesaj. Revenim în cel mult două zile lucrătoare.',
    images: ['https://www.synastdigital.com/logo.png'],
  },
  robots: { index: false, follow: false },
}
export default function SentRO() {
  return (
    <main>
      <Section>
        <div className="mx-auto max-w-xl text-center">
          <h1 className="text-4xl font-semibold text-blue-900">Mulțumim — am primit mesajul tău!</h1>
          <p className="mt-3 text-ink-600">Revenim în maximum 2 zile lucrătoare.</p>
          <div className="mt-6 flex justify-center gap-3">
            <Link href="/ro/" className="btn btn-ghost">Înapoi</Link>
            <a href="mailto:hello@synastdigital.com" className="btn btn-primary">Trimite un email</a>
          </div>
        </div>
      </Section>
    </main>
  )
}
