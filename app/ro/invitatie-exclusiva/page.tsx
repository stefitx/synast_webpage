import Link from 'next/link'
import Section from '@/components/Section'
import Video from '@/components/Video'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Invitația ta personalizată — Synast Digital',
  description:
    'Ai fost selectat(ă) cu atenție să primești această invitație pentru că am identificat deja cum îți putem crește afacerea, gratuit. Tot ce trebuie să faci este să ne contactezi.',
  alternates: {
    canonical: '/ro/invitatie-exclusiva',
    languages: { 'en-US': '/exclusive-invite', 'ro-RO': '/ro/invitatie-exclusiva' },
  },
  // Dacă vrei să fie mai „ascunsă”, poți schimba follow la false
  robots: { index: false, follow: true },
  openGraph: {
    title: 'Invitație exclusivă Synast Digital',
    description:
      'Descoperă oportunitățile de creștere pe care le-am identificat special pentru afacerea ta.',
    url: 'https://www.synastdigital.com/ro/invitatie-exclusiva',
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
    title: 'Invitație exclusivă Synast Digital',
    description: 'Află ce soluții personalizate am pregătit pentru afacerea ta.',
    images: ['https://www.synastdigital.com/logo.png'],
  },
}

export default function InvitatieExclusivaPage() {
  return (
    <main>
      <Section className="pt-24">
        <div className="mx-auto max-w-2xl text-center" lang="ro">
          <span className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-4 py-1 text-sm font-medium text-blue-700">
            Dacă ești aici, ne-a mers schema!
          </span>
          <h1 className="mt-6 text-4xl font-semibold text-blue-900 md:text-5xl">
            Hai să-ți explic cum te-am adus aici. 
          </h1>
		  <p className="mt-4 text-lg text-blue-700">
			(Și cum putem folosi aceeași strategie în avantajul tău)
		  </p>
        </div>

        {/* Video block (full width within a comfy max) */}
        <div className="mx-auto mt-10 max-w-3xl">
          <Video id="0YzujRciDyE" title="Invitație Synast — cum te-am adus aici" />
        </div>

        {/* CTAs */}
        <div className="mx-auto mt-10 max-w-2xl">
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link href="/ro/contact" className="btn btn-primary">
              Programează o discuție
            </Link>
            <Link href="/ro/cunoaste-ne" className="btn btn-ghost">
              Află mai multe despre Synast
            </Link>
          </div>
        </div>
      </Section>
    </main>
  )
}
