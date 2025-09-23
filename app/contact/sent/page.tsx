import Section from '@/components/Section'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Message sent — Synast Digital',
  description: 'Thanks for reaching out to Synast Digital. We will reply within two business days.',
  alternates: { canonical: '/contact/sent', languages: { 'en-US': '/contact/sent', 'ro-RO': '/ro/contact/sent' } },
  openGraph: {
    title: 'Message received — Synast Digital',
    description: 'We received your message and will reply shortly.',
    url: 'https://www.synastdigital.com/contact/sent',
    locale: 'en_US',
    siteName: 'Synast Digital',
    images: [
      {
        url: 'https://www.synastdigital.com/logo.png',
        width: 512,
        height: 512,
        alt: 'Synast Digital logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Message received — Synast Digital',
    description: 'We will reply within two business days.',
    images: ['https://www.synastdigital.com/logo.png'],
  },
  robots: { index: false, follow: false },
}

export default function Sent() {
  return (
    <main>
      <Section>
        <div className="mx-auto max-w-xl text-center">
          <h1 className="text-4xl font-semibold text-blue-900">Thanks — we got your message!</h1>
          <p className="mt-3 text-ink-600">We’ll reply within 2 business days.</p>
          <div className="mt-6 flex justify-center gap-3">
            <Link href="/" className="btn btn-ghost">Back home</Link>
            <a href="mailto:hello@synastdigital.com" className="btn btn-primary">Email us</a>
          </div>
        </div>
      </Section>
    </main>
  )
}