import Section from '@/components/Section'
import Testimonial from '@/components/Testimonial'
import { Metric } from '@/components/Metrics'
import Link from 'next/link'
import Pillar from '@/components/Pillar'

// app/ro/page.tsx  (RO)
export const metadata = {
	title: { absolute: 'SSynast Digital - Marketing, Branding, Strategie & Digitalizare' }, 
	description:
	  'Tu te concentrezi pe visul tău. Noi îți maximizăm veniturile. Branding, strategie și automatizarea proceselor de business.',
  }
  

export default function HomePage() {
  return (
    <main>
      {/* Hero */}
      <Section className="pt-24">
        <div className="mx-auto max-w-3xl text-center">
          <span className="badge">Investiție inițială mică. Ne plătești când ești mulțumit(ă).</span>
          <h1 className="mt-4 text-5xl font-semibold tracking-tight text-blue-900">
		  Tu te concentrezi pe visul tău.
		  </h1>
		  <h1 className="text-5xl font-semibold tracking-tight text-blue-700">
		  
          </h1>
		  <h1 className="mt-4 text-4xl font-semibold tracking-tight text-blue-700">
		  De restul ne ocupăm noi.
		  </h1>

          <p className="mt-4 text-lg text-ink-600">
            
          </p>
          <div className="mt-8 flex items-center justify-center gap-4">
            <Link className="btn btn-primary" href="/contact">Programează un audit gratuit</Link>
            <a className="btn btn-ghost" href="#process">Vezi cum lucrăm</a>
          </div>
        </div>
      </Section>
{/* Services */}
{/* Services */}
  <Section id="services">
        {/* Big centered heading */}
        <h2 className="text-3xl font-semibold text-blue-900 text-center">
          Marketing & Dezvoltarea Brandului
        </h2>
		<p className="mt-3 text-ink-600 text-center max-w-2xl mx-auto">
    Construim sisteme de marketing care cresc odată cu tine. De la identitatea de brand la generarea de lead-uri, acoperim totul cu strategii clare și rezultate măsurabile.
  </p>

        {/* Two pillars under the big title */}
        <div className="mt-6 grid gap-8 md:grid-cols-2 items-stretch">
          <Pillar
            title="Înainte de orice angajament"
            titleClassName="text-saffron-500"
            borderClassName="border-saffron-500/40"
            layout="rowMobile"
            items={[
              {
                title: 'Audit & strategie',
                desc: 'Analiză de piață, potențial de creștere și un plan de acțiune inițial pe care îl păstrezi.'
              },
              {
                title: 'Identitate de brand & ghiduri',
                desc: 'Naming, ton, paletă și arhetip de brand, în baza viziunii tale și a analizei noastre.'
              },
              {
                title: 'Website care convertește',
                desc: 'Proiectăm, dezvoltăm și ne ocupăm de site-ul tău din prima zi.'
              },
            ]}
          />

          <Pillar
            title="După ce începem"
            layout="rowMobile"  // ← add this so these cards stack horizontally too
            items={[
              {
                title: 'Campanii plătite',
                desc: 'Campanii profesionale, gândite strategic, cu bugetele incluse în abonamentul de bază.'
              },
              {
                title: 'Social media & conținut',
                desc: 'Planificare, creare, postare și community management pe toate platformele relevante.'
              },
              {
                title: 'Măsurare & optimizare',
                desc: 'Raport și analiză periodică; actualizăm activ strategia de creștere pentru a obține cele mai bune rezultate cu investiția cea mai mică.'
              },
            ]}
          />
        </div>

  {/* Automation & Digitalization as a regular grid */}

  <div className="mt-16 md:mt-20">  {/* added space above */}
  <h2 className="text-3xl font-semibold text-blue-900 text-center">
    Automatizare & Digitalizare
  </h2>
  <p className="mt-3 text-ink-600 text-center max-w-2xl mx-auto">
    Îți conectăm instrumentele, eliminăm pașii repetitivi și îți oferim vizibilitate clară asupra a tot ce se întâmplă — astfel încât munca să meargă de la sine, iar deciziile să dureze minute, nu săptămâni.
  </p>

  <div className="mt-8 grid gap-6 md:grid-cols-3">
    {[
		{
		        title: 'Audit sisteme pentru IMM-uri',
				desc:
				  "Îți mapăm sistemele și îți oferim top 3 câștiguri rapide cu pași următori clari."
			  },
      {
        title: 'Automatizarea proceselor',
        desc:
          "Scoatem munca repetitivă din afacerea ta astfel încât acestea să se întâmple automat."
      },
      {
        title: 'Tablouri de bord operaționale',
        desc:
          "Vânzări/finanțe/proiecte live, personalizate, într-un singur loc. Vezi ce se întâmplă și acționează rapid, fără să mai alergi după foi de calcul."
      },
      {
        title: 'Fluxuri de date',
        desc:
          "Curățăm, îmbinăm și sincronizăm datele între aplicații în mod fiabil — fără exporturi care se strică din două în două săptămâni."
      },
      {
        title: 'Training & SOP-uri',
        desc:
          "SOP-uri simple și ghiduri video scurte, ca schimbarea să rămână după lansare — echipa ta crește cu tine."
      },
      {
        title: 'Integrări web',
        desc:
          "Plăți, CRM, ERP, email — conectate corect, astfel încât datele să circule și nimic să nu se piardă pe parcurs."
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
            ['Audit', 'Realizăm o analiză a afacerii, a potențialului de creștere, a pieței și un plan de acțiune.'],
            ['Construire', 'După ce ne dai ok-ul, începem implementarea.'],
            ['Măsurare', 'Rapoarte la 30/60/90 de zile, în funcție de nevoile afacerii, în care măsurăm progresul.'],
			['Îmbunătățire continuă', 'Actualizăm strategia pe baza rapoartelor periodice. Planul nostru crește odată cu tine.'],
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
          <Testimonial quote="Colaborarea cu Ștefi pe partea de marketing pentru Foccaceria Zest a fost una dintre cele mai bune decizii pe care le-am luat pentru afacerea mea. Mi-a oferit sprijin pas cu pas, de la structurarea imaginii brandului și până la modul de prezentare online. Mi-a plăcut faptul că a înțeles rapid specificul localului și a venit cu idei creative, adaptate exact la ceea ce îmi doream să transmit clienților. Pe lângă partea de strategie, m-a ajutat și practic, explicându-mi clar ce trebuie făcut și de ce, ceea ce pentru mine a contat enorm. Este o persoană serioasă, implicată și foarte atentă la detalii. Comunicarea cu ea a fost ușoară și plăcută, iar rezultatele s-au văzut imediat în modul în care afacerea mea a început să prindă contur în mediul online. O recomand cu toată inima pentru că reușește să combine creativitatea cu profesionalismul și are talentul de a face lucrurile să pară simple, chiar și atunci când par complicate." author="Georgiana C., Focacceria Zest" />
          <Testimonial quote="Site-ul nostru aduce, în sfârșit, lead-uri. Plan clar, livrare rapidă, rezultate măsurabile." author="Irina G., Practician independent" />
        </div>
      </Section>

      {/* Founder */}
      <Section id="about" alt>
        <div className="grid items-center gap-8 md:grid-cols-2">
          <div>
            <h2 className="text-3xl font-semibold text-blue-900">Despre Synast</h2>
            <p className="mt-4 text-ink-600">
              Sunt <strong>Ștefania Tudor</strong>, fondatoarea Synast Digital. Cu o diplomă în business, background în inginerie software și experiență în companii multinaționale de consultanță, eu și echipa mea construim branduri de succes și sisteme accesibile pentru afacerile din România. Începem cu câștiguri rapide, ne adaptăm afacerii tale și aducem îmbunătățiri ce se cumulează.
            </p>
          </div>
          <div className="card p-6">
            <div className="text-lg font-medium">Sesiune gratuită de 45 de minute de cunoaștere</div>
            <p className="mt-2 text-ink-600">Identificăm 3 schimbări de impact pe care le poți face luna aceasta.</p>
            <Link href="/contact" className="mt-4 inline-block btn btn-primary">Programează acum</Link>
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section className="py-24 bg-gradient-to-br from-blue-900 via-blue-700 to-blue-900">
        <div className="mx-auto max-w-2xl text-center text-white">
          <h2 className="text-4xl font-semibold">Ești gata să-ți urmezi visul?</h2>
          <p className="mt-3 opacity-90">Hai să construim un brand care crește odată cu tine.</p>
          <Link href="/contact" className="mt-8 inline-flex items-center rounded-2xl bg-white/95 px-6 py-3 font-semibold text-blue-900 shadow-soft hover:shadow-lift">Programează o sesiune gratuită de cunoaștere</Link>
        </div>
      </Section>
    </main>
  )
}
