import Section from '@/components/Section'
import Testimonial from '@/components/Testimonial'
import { Metric } from '@/components/Metrics'
import Link from 'next/link'

export default function HomePage() {
  return (
    <main>
      {/* Hero */}
      <Section className="pt-24">
        <div className="mx-auto max-w-3xl text-center">
          <span className="badge">Built in Romania · Premium, minimal</span>
          <h1 className="mt-4 text-5xl font-semibold tracking-tight text-blue-900">
            Automation & digitalization for forward‑thinking SMEs
          </h1>
          <p className="mt-4 text-lg text-ink-600">
            We streamline operations, cut manual work, and make your business measurably faster. Simple plans, fast delivery, clear ROI.
          </p>
          <div className="mt-8 flex items-center justify-center gap-4">
            <Link className="btn btn-primary" href="/contact">Book a free audit</Link>
            <a className="btn btn-ghost" href="#process">See how we work</a>
          </div>
        </div>
      </Section>
{/* Services */}
<Section id="services">
  <h2 className="text-3xl font-semibold text-blue-900">Marketing & Brand Growth</h2>
  <div className="mt-6 grid gap-6 md:grid-cols-3">
    {[
      { title: 'Brand identity & guidelines', desc: 'Naming, ton, paletă, guideline vizual.' },
      { title: 'Website care convertește', desc: 'Site rapid, clar, cu formulare/booking și integrare analytics.' },
      { title: 'Social media & conținut', desc: 'Strategie, calendare, content engine, raportare.' },
      { title: 'Campanii plătite', desc: 'Google/Meta — de la setup la optimizare pe obiective.' },
      { title: 'Email & lead nurturing', desc: 'Automatizări simple pentru activarea și retenția leadurilor.' },
      { title: 'Măsurare & optimizare', desc: 'KPI dashboard și teste iterative pentru creștere.' },
    ].map(s => (
      <div key={s.title} className="card card-hover p-6">
        <div className="text-xl font-semibold">{s.title}</div>
        <p className="mt-2 text-ink-600">{s.desc}</p>
      </div>
    ))}
  </div>

  <h3 className="mt-12 text-2xl font-semibold text-blue-900">Automation & Digitalization</h3>
  <div className="mt-6 grid gap-6 md:grid-cols-3">
    {[
      { title: 'Process automation', desc: 'Eliminăm taskurile repetitive cu no/low-code sau tooluri custom.' },
      { title: 'Operations dashboards', desc: 'Vânzări/finanțe/proiecte în timp real, decizii în minute.' },
      { title: 'Data pipelines', desc: 'Curățare, integrare și sincronizare date între sisteme.' },
      { title: 'SME systems audit', desc: 'Audit structurat care găsește top 3 quick wins în 30 de zile.' },
      { title: 'Training & SOPs', desc: 'Implementare, training, documentație ca schimbarea să rămână.' },
      { title: 'Web integrations', desc: 'Plăți, CRM, ERP, e-mail — conectate corect.' },
    ].map(s => (
      <div key={s.title} className="card card-hover p-6">
        <div className="text-xl font-semibold">{s.title}</div>
        <p className="mt-2 text-ink-600">{s.desc}</p>
      </div>
    ))}
  </div>
</Section>

      {/* Process */}
      <Section id="process" alt>
        <h2 className="text-3xl font-semibold text-blue-900">Process</h2>
        <div className="mt-6 grid gap-6 md:grid-cols-5">
          {[
            ['Audit', 'We map processes and bottlenecks.'],
            ['Design', 'Blueprint with ROI, timeline, and stack.'],
            ['Build', 'Automations, internal tools, and site.'],
            ['Implement', 'Rollout, training, documentation.'],
            ['Measure', 'Dashboards + 30/60/90‑day review.'],
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
        <h2 className="text-3xl font-semibold text-blue-900">Measurable results</h2>
        <div className="mt-6 grid gap-6 md:grid-cols-3">
          <Metric value="−30%" label="admin hours in 6 weeks" />
          <Metric value="2×" label="faster invoice cycle" />
          <Metric value="+18%" label="lead conversion after redesign" />
        </div>
      </Section>

      {/* Testimonials */}
      <Section>
        <h2 className="text-3xl font-semibold text-blue-900">What clients say</h2>
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          <Testimonial quote="Synast turned our paperwork into a clean, automated flow. We got time back to run the business." author="Elena M., Construction Manager" />
          <Testimonial quote="Our site finally brings leads. Clear plan, fast delivery, measurable results." author="Irina G., Independent Practitioner" />
        </div>
      </Section>

      {/* Founder */}
      <Section id="about" alt>
        <div className="grid items-center gap-8 md:grid-cols-2">
          <div>
            <h2 className="text-3xl font-semibold text-blue-900">About Synast</h2>
            <p className="mt-4 text-ink-600">
              I’m <strong>Stefi Tudor</strong>, founder of Synast Digital. With a business degree, software engineering background, and experience at Accenture, I build practical systems for SMEs in Romania—starting with quick wins, then compounding improvements.
            </p>
          </div>
          <div className="card p-6">
            <div className="text-lg font-medium">Free 30‑minute audit</div>
            <p className="mt-2 text-ink-600">We’ll identify 3 high‑ROI changes you can make this month.</p>
            <Link href="/contact" className="mt-4 inline-block btn btn-primary">Book now</Link>
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section className="py-24 bg-gradient-to-br from-blue-900 via-blue-700 to-blue-900">
        <div className="mx-auto max-w-2xl text-center text-white">
          <h2 className="text-4xl font-semibold">Ready to remove busywork and grow?</h2>
          <p className="mt-3 opacity-90">Let’s build clean systems that scale with you.</p>
          <Link href="/contact" className="mt-8 inline-flex items-center rounded-2xl bg-white/95 px-6 py-3 font-semibold text-blue-900 shadow-soft hover:shadow-lift">Book a free audit</Link>
        </div>
      </Section>
    </main>
  )
}