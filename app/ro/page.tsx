import Section from '@/components/Section'
import Testimonial from '@/components/Testimonial'
import { Metric } from '@/components/Metrics'
import Link from 'next/link'
import Script from 'next/script'
import type { Metadata } from 'next'

const faqs = [
  {
    question: 'Cu ce tip de afaceri colaborați?',
    answer:
      'Lucrăm cu startup-uri finanțate și IMM-uri consolidate care își doresc sisteme de marketing clare, branding coerent și operațiuni automatizate ce cresc odată cu ele.',
  },
  {
    question: 'Oferiți doar strategie sau și implementare?',
    answer:
      'Ambele. Ne aliniem la obiectivele tale, mapăm câștigurile rapide și apoi proiectăm, implementăm și optimizăm campanii, website-uri și automatizări care aduc rezultate măsurabile.',
  },
  {
    question: 'Cât de repede vedem impactul colaborării?',
    answer:
      'Primești un plan cu acțiuni pentru primele 30, 60 și 90 de zile. Majoritatea partenerilor observă diferențe în câteva săptămâni prin poziționare mai clară, procese mai rapide sau primele lead-uri.',
  },
  {
    question: 'Puteți integra instrumentele și datele pe care le folosim deja?',
    answer:
      'Da. Audităm ecosistemul actual și conectăm CRM, plăți, analitice și tablouri de bord interne astfel încât informațiile să circule sigur între echipe, fără muncă manuală.',
  },
] satisfies Array<{ question: string; answer: string }>

const structuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'ProfessionalService',
      '@id': 'https://www.synastdigital.com/ro/#agency',
      name: 'Synast Digital',
      url: 'https://www.synastdigital.com/ro',
      description:
        'Synast Digital oferă strategie de marketing, branding și automatizarea proceselor de business pentru fondatori orientați spre creștere.',
      image: 'https://www.synastdigital.com/logo.png',
      areaServed: [
        { '@type': 'AdministrativeArea', name: 'România' },
        { '@type': 'Country', name: 'Uniunea Europeană' },
      ],
      serviceType: ['Strategie de marketing', 'Identitate de brand', 'Automatizare procese'],
    },
    {
      '@type': 'FAQPage',
      '@id': 'https://www.synastdigital.com/ro/#faq',
      mainEntity: faqs.map((faq) => ({
        '@type': 'Question',
        name: faq.question,
        acceptedAnswer: { '@type': 'Answer', text: faq.answer },
      })),
    },
  ],
}

// app/ro/page.tsx  (RO)
export const metadata: Metadata = {
  title: 'Synast Digital - Marketing, Branding, Strategie & Digitalizare',
  description: 'Tu te concentrezi pe visul tău. Noi îți maximizăm veniturile. Branding, strategie și automatizarea proceselor de business.',
  alternates: { canonical: '/ro', languages: { 'en-US': '/', 'ro-RO': '/ro' } },
  openGraph: {
    title: 'Synast Digital - Marketing, Branding, Strategie & Digitalizare',
    description:
      'Tu te concentrezi pe visul tău. Noi îți maximizăm veniturile. Branding, strategie și automatizarea proceselor de business.',
    url: 'https://www.synastdigital.com/ro',
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
    title: 'Synast Digital - Marketing, Branding, Strategie & Digitalizare',
    description:
      'Tu te concentrezi pe visul tău. Noi îți maximizăm veniturile. Branding, strategie și automatizarea proceselor de business.',
    images: ['https://www.synastdigital.com/logo.png'],
  },
}

export default function HomePage() {
  return (
    <main>
      {/* Hero */}
      <Section className="pt-24">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-4xl font-semibold tracking-tight text-blue-900 md:text-5xl">
            <span className="block">Tu te concentrezi pe visul tău.</span>
            <span className="block text-blue-700">De restul ne ocupăm noi.</span>
          </h1>
          <p className="mt-5 text-lg text-ink-600">
            Synast Digital construiește sisteme de marketing, identități de brand și fluxuri automatizate astfel încât echipa ta
            să petreacă mai puțin timp cu urgențele și mai mult timp creând experiențe memorabile pentru clienți.
          </p>
          <p className="mt-3 text-lg text-ink-600">
            De la poziționare și website-uri orientate spre conversie la integrarea CRM-ului, analiticelor și a finanțelor,
            creăm structura care aliniază veniturile, operațiunile și experiența clienților.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link className="btn btn-primary" href="/ro/contact">
              Programează un meeting
            </Link>
            <a className="btn btn-ghost" href="#process">
              Vezi cum lucrăm
            </a>
          </div>
        </div>
      </Section>

      {/* Services */}
      <Section id="services">
        {/* Marketing & Dezvoltarea Brandului — grid ca la Automatizare */}
        <h2 className="text-3xl font-semibold text-blue-900 text-center">Marketing & Dezvoltarea Brandului</h2>
        <p className="mt-3 text-ink-600 text-center max-w-2xl mx-auto">
          Construim sisteme de marketing care cresc odată cu tine. De la identitatea de brand la generarea de lead-uri, acoperim
          totul cu strategii clare și rezultate măsurabile.
        </p>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {[
            {
              title: 'Audit & strategie',
              desc: 'Analiză de piață, potențial de creștere și un plan de acțiune practic pe care îl păstrezi.',
            },
            {
              title: 'Identitate de brand & ghiduri',
              desc: 'Naming, ton, paletă și arhetip aliniate la viziunea ta și la piață.',
            },
            {
              title: 'Website care convertește',
              desc: 'Design, dezvoltare și mentenanță continuă cu focus pe conversie.',
            },
            {
              title: 'Campanii plătite',
              desc: 'Strategie și management cap-coadă; bugete planificate pentru ROI.',
            },
            {
              title: 'Social media & conținut',
              desc: 'Planificare, creare, postare și community management pe platformele relevante.',
            },
            {
              title: 'Măsurare & optimizare',
              desc: 'Rapoarte regulate și îmbunătățiri iterative pentru maximum de rezultate per €.',
            },
          ].map((s) => (
            <div key={s.title} className="card card-hover p-6">
              <div className="text-xl font-semibold">{s.title}</div>
              <p className="mt-2 text-ink-600">{s.desc}</p>
            </div>
          ))}
        </div>

        {/* Automatizare & Digitalizare — grid */}
        <div className="mt-16 md:mt-20">
          <h2 className="text-3xl font-semibold text-blue-900 text-center">Automatizare & Digitalizare</h2>
          <p className="mt-3 text-ink-600 text-center max-w-2xl mx-auto">
            Îți conectăm instrumentele, eliminăm pașii repetitivi și îți oferim vizibilitate clară asupra a tot ce se întâmplă —
            astfel încât munca să meargă de la sine, iar deciziile să dureze minute, nu săptămâni.
          </p>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {[
              {
                title: 'Audit sisteme pentru IMM-uri',
                desc: 'Îți mapăm sistemele și îți oferim top 3 câștiguri rapide cu pași următori clari.',
              },
              {
                title: 'Automatizarea proceselor',
                desc: 'Scoatem munca repetitivă din afacerea ta astfel încât lucrurile să se întâmple automat.',
              },
              {
                title: 'Tablouri de bord operaționale',
                desc: 'Vânzări/finanțe/proiecte live, într-un singur loc — acționezi rapid fără să urmărești foi de calcul.',
              },
              {
                title: 'Fluxuri de date',
                desc: 'Curățăm, îmbinăm și sincronizăm date între aplicații — fără exporturi fragile.',
              },
              {
                title: 'Training & SOP-uri',
                desc: 'SOP-uri simple și ghiduri video scurte ca schimbarea să rămână — echipa rămâne încrezătoare.',
              },
              {
                title: 'Integrări web',
                desc: 'Plăți, CRM, ERP, email — conectate corect ca datele să circule și nimic să nu se piardă.',
              },
            ].map((s) => (
              <div key={s.title} className="card card-hover p-6">
                <div className="text-xl font-semibold">{s.title}</div>
                <p className="mt-2 text-ink-600">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Process */}
      <Section id="process" alt>
        <h2 className="text-3xl font-semibold text-blue-900">Proces</h2>
        <div className="mt-6 grid gap-6 md:grid-cols-5">
          {[
            ['Întâlnire de cunoaștere', 'Te cunoaștem pe tine, viziunea și afacerea ta.'],
            ['Audit', 'Analizăm afacerea, potențialul de creștere, piața și livrăm un plan de acțiune.'],
            ['Construire', 'După acord, începem implementarea.'],
            ['Măsurare', 'Rapoarte la 30/60/90 de zile, în funcție de nevoi, în care măsurăm progresul.'],
            ['Îmbunătățire continuă', 'Actualizăm strategia pe baza rapoartelor. Planul crește odată cu tine.'],
          ].map(([t, d]) => (
            <div key={t} className="card p-5">
              <div className="font-semibold">{t}</div>
              <p className="mt-2 text-sm text-ink-600">{d}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Results */}
      <Section id="results">
        <h2 className="text-3xl font-semibold text-blue-900">Rezultate măsurabile</h2>
        <p className="mt-3 text-ink-600 max-w-2xl">
          Măsurăm fiecare livrabil în raport cu indicatorii agreați ca să vezi impactul în ciclurile de vânzare, ratele de
          conversie și capacitatea echipei.
        </p>
        <div className="mt-6 grid gap-6 md:grid-cols-3">
          <Metric value="−30%" label="ore administrative în 6 săptămâni" />
          <Metric value="2×" label="ciclu de facturare mai rapid" />
          <Metric value="+18%" label="conversie lead-uri după redesign" />
        </div>
      </Section>

      {/* Testimonials */}
      <Section>
        <h2 className="text-3xl font-semibold text-blue-900">Ce spun clienții</h2>
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          <Testimonial quote="Colaborarea cu Ștefi pe partea de marketing pentru Foccaceria Zest a fost una dintre cele mai bune decizii pe care le-am luat pentru afacerea mea. Mi-a oferit sprijin pas cu pas, de la structurarea imaginii brandului și până la modul de prezentare online. Mi-a plăcut faptul că a înțeles rapid specificul localului și a venit cu idei creative, adaptate exact la ceea ce îmi doream să transmit clienților.

Pe lângă partea de strategie, m-a ajutat și practic, explicându-mi clar ce trebuie făcut și de ce, ceea ce pentru mine a contat enorm. Este o persoană serioasă, implicată și foarte atentă la detalii. Comunicarea cu ea a fost ușoară și plăcută, iar rezultatele s-au văzut imediat în modul în care afacerea mea a început să prindă contur în mediul online. O recomand cu toată inima pentru că reușește să combine creativitatea cu profesionalismul și are talentul de a face lucrurile să pară simple, chiar și atunci când par complicate." author="Georgiana C., Focacceria Zest" />
          <Testimonial quote="Site-ul nostru aduce, în sfârșit, lead-uri. Plan clar, livrare rapidă, rezultate măsurabile." author="Irina G., Practician independent" />
        </div>
      </Section>

      {/* Founder */}
      <Section id="about" alt>
        <div className="grid items-center gap-8 md:grid-cols-2">
          <div>
            <h2 className="text-3xl font-semibold text-blue-900">Despre Synast</h2>
            <p className="mt-4 text-ink-600">
              Sunt <strong>Ștefania Tudor</strong>, fondatoarea Synast Digital. Cu o diplomă în business, background în inginerie
              software și experiență în companii multinaționale de consultanță, eu și echipa mea construim branduri de succes și
              sisteme accesibile pentru afacerile din România. Începem cu câștiguri rapide, ne adaptăm afacerii tale și aducem
              îmbunătățiri ce se cumulează.
            </p>
          </div>
          <div className="card p-6">
            <div className="text-lg font-medium">Sesiune de 45 de minute de cunoaștere</div>
            <p className="mt-2 text-ink-600">Identificăm 3 schimbări de impact pe care le poți face luna aceasta.</p>
            <Link href="/ro/contact" className="mt-4 inline-block btn btn-primary">
              Programează acum
            </Link>
          </div>
        </div>
      </Section>

      {/* FAQ */}
      <Section id="faq">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-3xl font-semibold text-blue-900">Întrebări frecvente</h2>
          <p className="mt-3 text-ink-600">
            Răspunsuri la cele mai des întâlnite întrebări pe care le primim la începutul colaborării.
          </p>
          <div className="mt-6 space-y-4">
            {faqs.map((faq) => (
              <details key={faq.question} className="group rounded-2xl border border-blue-100 bg-white p-6 shadow-soft">
                <summary className="cursor-pointer text-left text-lg font-semibold text-blue-900 marker:content-none">
                  {faq.question}
                </summary>
                <p className="mt-3 text-ink-600">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section className="py-24 bg-gradient-to-br from-blue-900 via-blue-700 to-blue-900">
        <div className="mx-auto max-w-2xl text-center text-white">
          <h2 className="text-4xl font-semibold">Ești gata să-ți urmezi visul?</h2>
          <p className="mt-3 opacity-90">Hai să construim un brand care crește odată cu tine.</p>
          <Link
            href="/ro/contact"
            className="mt-8 inline-flex items-center rounded-2xl bg-white/95 px-6 py-3 font-semibold text-blue-900 shadow-soft hover:shadow-lift"
          >
            Programează o sesiune de cunoaștere
          </Link>
        </div>
      </Section>

      <Script
        id="home-structured-data-ro"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
    </main>
  )
}
