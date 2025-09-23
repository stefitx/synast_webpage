import Section from '@/components/Section'
import ContactForm from '@/components/ContactForm'
import Script from 'next/script'
import type { Metadata } from 'next'

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'ContactPage',
  '@id': 'https://www.synastdigital.com/ro/contact',
  url: 'https://www.synastdigital.com/ro/contact',
  name: 'Contact Synast Digital',
  description:
    'Programează un call cu Synast Digital pentru proiecte de marketing, branding, automatizare și digitalizare.',
  mainEntity: {
    '@type': 'Organization',
    name: 'Synast Digital',
    url: 'https://www.synastdigital.com/ro',
    contactPoint: [
      {
        '@type': 'ContactPoint',
        contactType: 'serviciu clienți',
        email: 'hello@synastdigital.com',
        areaServed: ['România', 'Uniunea Europeană'],
        availableLanguage: ['Română', 'Engleză'],
      },
    ],
  },
  potentialAction: {
    '@type': 'ContactAction',
    target: 'https://www.synastdigital.com/ro/contact',
  },
}

export const metadata: Metadata = {
  title: 'Contact — Synast Digital',
  description:
    'Scrie-ne la Synast Digital pentru proiecte de marketing, branding, automatizare și digitalizare. Programează un meeting sau trimite-ne un email.',
  alternates: { canonical: '/ro/contact', languages: { 'en-US': '/contact', 'ro-RO': '/ro/contact' } },
  openGraph: {
    title: 'Contact Synast Digital',
    description:
      'Hai să discutăm despre strategia ta de marketing, branding sau automatizare. Programează un meeting sau scrie-ne la hello@synastdigital.com.',
    url: 'https://www.synastdigital.com/ro/contact',
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
    title: 'Contact Synast Digital',
    description:
      'Programează un meeting pentru a discuta proiectele de marketing și digitalizare cu Synast Digital.',
    images: ['https://www.synastdigital.com/logo.png'],
  },
}

export default function ContactRO() {
  return (
    <main>
      <Section>
        <div className="mx-auto max-w-xl">
          <h1 className="text-4xl font-semibold text-blue-900">Contact</h1>
          <p className="mt-3 text-ink-600">
            Sau scrie-ne direct la <a className="underline" href="mailto:hello@synastdigital.com">hello@synastdigital.com</a>.
          </p>
          <div className="mt-6 rounded-2xl border border-blue-100 bg-blue-50/60 p-5 text-sm text-blue-900">
            <p className="font-semibold">Timp mediu de răspuns: sub 2 zile lucrătoare</p>
            <p className="mt-2">
              Începem de obicei cu un call de 45 de minute în care clarificăm obiectivele, stack-ul tehnic și pașii rapizi pe care îi putem livra împreună.
            </p>
            <dl className="mt-3 space-y-1">
              <div className="flex gap-2">
                <dt className="font-semibold">Email:</dt>
                <dd>
                  <a className="underline" href="mailto:hello@synastdigital.com">
                    hello@synastdigital.com
                  </a>
                </dd>
              </div>
              <div className="flex gap-2">
                <dt className="font-semibold">Limbi:</dt>
                <dd>Română · Engleză</dd>
              </div>
            </dl>
          </div>
          <ContactForm locale="ro" />
        </div>
      </Section>

      <Script
        id="contact-structured-data-ro"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
    </main>
  )
}
