import Section from '@/components/Section'
import TeamVideo from '@/components/TeamVideo'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Cunoaște-ne — Synast Digital',
  description:
    'Află cine suntem, cum colaborăm cu partenerii noștri și valorile care ne ghidează fiecare proiect.',
  alternates: {
    canonical: '/ro/cunoaste-ne',
    languages: { 'en-US': '/get-to-know-us', 'ro-RO': '/ro/cunoaste-ne' },
  },
  openGraph: {
    title: 'Cunoaște echipa Synast Digital',
    description:
      'Descoperă cine suntem, cum colaborăm cu partenerii noștri și cum arată o experiență de lucru cu Synast Digital.',
    url: 'https://www.synastdigital.com/ro/cunoaste-ne',
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
    title: 'Cunoaște echipa Synast Digital',
    description:
      'Află cine suntem, cum lucrăm și valorile care ne ghidează fiecare proiect Synast Digital.',
    images: ['https://www.synastdigital.com/logo.png'],
  },
}

export default function CunoasteNePage() {
  return (
    <main>
      <Section className="pt-24">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-4xl font-semibold text-blue-900 md:text-5xl">Cunoaște-ne</h1>
          <p className="mt-4 text-lg text-ink-600">
            Dă play pentru a descoperi cine suntem, cum lucrăm și ce rezultate construim împreună cu partenerii noștri.
          </p>
        </div>

        <div className="mt-12">
          <TeamVideo locale="ro" />
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {[
            {
              title: 'Povestea noastră',
              description:
                'Synast a apărut din colaborarea dintre strategi, creativi și ingineri care și-au propus să elimine blocajele din scalarea unei afaceri.',
            },
            {
              title: 'Cum lucrăm',
              description:
                'De la prima discuție până la implementarea automatizărilor, planificăm fiecare pas cu obiective clare și îmbunătățiri continue.',
            },
            {
              title: 'De ce ne aleg partenerii',
              description:
                'Comunicare transparentă, rezultate măsurabile și parteneriat pe termen lung — echipa ta știe că suntem aproape la fiecare pas.',
            },
          ].map((item) => (
            <div key={item.title} className="card p-6 text-left">
              <div className="text-xl font-semibold text-blue-900">{item.title}</div>
              <p className="mt-3 text-ink-600">{item.description}</p>
            </div>
          ))}
        </div>
      </Section>
    </main>
  )
}
