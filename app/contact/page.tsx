import Section from '@/components/Section'
import ContactForm from '@/components/ContactForm'
import Script from 'next/script'
import type { Metadata } from 'next'

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'ContactPage',
  '@id': 'https://www.synastdigital.com/contact',
  url: 'https://www.synastdigital.com/contact',
  name: 'Contact Synast Digital',
  description: 'Book a discovery call with Synast Digital to discuss marketing, branding, and automation projects.',
  mainEntity: {
    '@type': 'Organization',
    name: 'Synast Digital',
    url: 'https://www.synastdigital.com',
    contactPoint: [
      {
        '@type': 'ContactPoint',
        contactType: 'customer service',
        email: 'hello@synastdigital.com',
        areaServed: ['Romania', 'European Union'],
        availableLanguage: ['English', 'Romanian'],
      },
    ],
  },
  potentialAction: {
    '@type': 'ContactAction',
    target: 'https://www.synastdigital.com/contact',
  },
}

export const metadata: Metadata = {
  title: 'Contact — Synast Digital',
  description:
    'Reach out to Synast Digital for marketing strategy, branding, automation, and digitalisation projects. Book a discovery call or email us directly.',
  alternates: { canonical: '/contact', languages: { 'en-US': '/contact', 'ro-RO': '/ro/contact' } },
  openGraph: {
    title: 'Contact Synast Digital',
    description:
      'Let’s discuss your marketing, branding, or automation roadmap. Book a discovery call or email hello@synastdigital.com.',
    url: 'https://www.synastdigital.com/contact',
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
    title: 'Contact Synast Digital',
    description:
      'Book a discovery call to explore marketing, branding, and automation projects with Synast Digital.',
    images: ['https://www.synastdigital.com/logo.png'],
  },
}

export default function ContactEN() {
  return (
    <main>
      <Section>
        <div className="mx-auto max-w-xl">
          <h1 className="text-4xl font-semibold text-blue-900">Contact</h1>
          <p className="mt-3 text-ink-600">
            Prefer email? Send us a note at <a className="underline" href="mailto:hello@synastdigital.com">hello@synastdigital.com</a>.
          </p>
          <div className="mt-6 rounded-2xl border border-blue-100 bg-blue-50/60 p-5 text-sm text-blue-900">
            <p className="font-semibold">Typical response time: under 2 business days</p>
            <p className="mt-2">
              We usually start with a 45-minute discovery call to map your objectives, tech stack, and the quick wins we can unlock together.
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
                <dt className="font-semibold">Languages:</dt>
                <dd>English · Romanian</dd>
              </div>
            </dl>
          </div>
          <ContactForm locale="en" />
        </div>
      </Section>

      <Script
        id="contact-structured-data"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
    </main>
  )
}
