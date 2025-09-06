import Section from '@/components/Section'
import Testimonial from '@/components/Testimonial'
import { Metric } from '@/components/Metrics'
import Link from 'next/link'
import Pillar from '@/components/Pillar'

// app/page.tsx  (EN)
export const metadata = {
	title: { absolute: 'Synast Digital — Marketing, Branding & Digitalization', template: '%s — Synast Digital' },
	description:
	  'You focus on your dream. We handle the rest. Branding, strategy, and business process automation.',
  }
  

export default function HomePage() {
  return (
    <main>
      {/* Hero */}
      <Section className="pt-24">
        <div className="mx-auto max-w-3xl text-center">
          <span className="badge">Low upfront investment. We get paid when you're happy.</span>
          <h1 className="mt-4 text-5xl font-semibold tracking-tight text-blue-900">
		  You focus on your dream.
		  </h1>
		  <h1 className="text-5xl font-semibold tracking-tight text-blue-700">
		  
          </h1>
		  <h1 className="mt-4 text-4xl font-semibold tracking-tight text-blue-700">
		  We handle the rest.
		  </h1>

          <p className="mt-4 text-lg text-ink-600">
            
          </p>
          <div className="mt-8 flex items-center justify-center gap-4">
            <Link className="btn btn-primary" href="/contact">Book a free audit</Link>
            <a className="btn btn-ghost" href="#process">See how we work</a>
          </div>
        </div>
      </Section>
{/* Services */}
{/* Services */}
  <Section id="services">
        {/* Big centered heading */}
        <h2 className="text-3xl font-semibold text-blue-900 text-center">
          Marketing & Brand Growth
        </h2>
		<p className="mt-3 text-ink-600 text-center max-w-2xl mx-auto">
    We design marketing systems that grow with you. From brand identity to lead generation, we cover it all with clear strategies and measurable results.
  </p>

        {/* Two pillars under the big title */}
        <div className="mt-6 grid gap-8 md:grid-cols-2 items-stretch">
          <Pillar
            title="Before any commitment"
            titleClassName="text-saffron-500"
            borderClassName="border-saffron-500/40"
            layout="rowMobile"
            items={[
              {
                title: 'Audit & strategy',
                desc: 'Market analysis, growth potential and an initial action plan you can keep.'
              },
              {
                title: 'Brand identity & guidelines',
                desc: 'Naming, tone, palette and persona in base of your vision and our expert analysis.'
              },
              {
                title: 'Website that converts',
                desc: 'We design, develop and maintain your website from day 1.'
              },
            ]}
          />

          <Pillar
            title="Once we start"
            layout="rowMobile"  // ← add this so these cards stack horizontally too
            items={[
              {
                title: 'Paid campaigns',
                desc: 'Professional campaigns, expertly strategized, with budgets included in the base fee.'
              },
              {
                title: 'Social media & content',
                desc: 'Planning, creation, posting, and community management on all relevant platforms.'
              },
              {
                title: 'Measurement & optimization',
                desc: 'Periodic report and analysis, actively updating the growth strategy to reach the best results with the smallest investment.'
              },
            ]}
          />
        </div>

  {/* Automation & Digitalization as a regular grid */}

  <div className="mt-16 md:mt-20">  {/* added space above */}
  <h2 className="text-3xl font-semibold text-blue-900 text-center">
    Automation & Digitalization
  </h2>
  <p className="mt-3 text-ink-600 text-center max-w-2xl mx-auto">
    We connect your tools, remove repetitive steps, and give you a clear view of what’s
    happening-so work moves on its own and decisions take minutes, not weeks.
  </p>

  <div className="mt-8 grid gap-6 md:grid-cols-3">
    {[
		{
		        title: 'SME systems audit',
				desc:
				  "We map your systems and hand you the top 3 quick wins with clear next steps."
			  },
      {
        title: 'Process automation',
        desc:
          "We take the busywork out of your tools together so the right things happen automatically."
      },
      {
        title: 'Operations dashboards',
        desc:
          "Personalized live sales/finance/projects in one place. See what’s happening and act fast, without chasing spreadsheets."
      },
      {
        title: 'Data pipelines',
        desc:
          "Clean, join, and sync data between apps reliably—no more exports that break every other week."
      },
      {
        title: 'Training & SOPs',
        desc:
          "Simple SOPs and short video guides so the change sticks after launch—your team stays confident."
      },
      {
        title: 'Web integrations',
        desc:
          "Payments, CRM, ERP, email—connected the right way so data flows and nothing falls through the cracks."
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
        <h2 className="text-3xl font-semibold text-blue-900">Process</h2>
        <div className="mt-6 grid gap-6 md:grid-cols-5">
          {[
			['Discovery meeting', 'We get to know you, your vision and your business.'],
            ['Audit', 'We make a comprehensive analysis of your business, its growth potential, competitor analysis and action plan.'],
            ['Build', 'Once we agree on the plan, we start the implementation.'],
            ['Measure', '30/60/90‑day reports, depending on your business needs, where we measure progress.'],
			['Continous improvement', 'We update the strategy in base of the periodic reports. Our plan grows with you.'],
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
          <Testimonial quote="Working with Ștefi on the marketing for Foccaceria Zest was one of the best decisions I’ve made for my business. She offered step-by-step support, from shaping the brand image to how we present ourselves online. I loved how quickly she understood the specifics of the place and came with creative ideas tailored exactly to what I wanted to convey to customers.

Beyond strategy, she helped hands-on too, clearly explaining what needed to be done and why—which mattered a lot to me. She’s reliable, dedicated, and very attentive to detail. Communication with her was easy and pleasant, and the results were immediately visible in how my business started taking shape online.

I recommend her wholeheartedly because she manages to combine creativity with professionalism and has a talent for making things feel simple, even when they seem complicated." author="Georgiana C., Focacceria Zest" />
          <Testimonial quote="Our site finally brings leads. Clear plan, fast delivery, measurable results." author="Irina G., Independent Practitioner" />
        </div>
      </Section>

      {/* Founder */}
      <Section id="about" alt>
        <div className="grid items-center gap-8 md:grid-cols-2">
          <div>
            <h2 className="text-3xl font-semibold text-blue-900">About Synast</h2>
            <p className="mt-4 text-ink-600">
              I’m <strong>Stefania Tudor</strong>, founder of Synast Digital. With a business degree, software engineering background, and experience at multinational consulting companies, me and my team build successful brands and accessible systems for enterprises in Romania. We start with quick wins, tailor it to your business, then bring compounding improvements.
            </p>
          </div>
          <div className="card p-6">
            <div className="text-lg font-medium">Free 45‑minute discovery call</div>
            <p className="mt-2 text-ink-600">We’ll identify 3 high‑ROI changes you can make this month.</p>
            <Link href="/contact" className="mt-4 inline-block btn btn-primary">Book now</Link>
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section className="py-24 bg-gradient-to-br from-blue-900 via-blue-700 to-blue-900">
        <div className="mx-auto max-w-2xl text-center text-white">
          <h2 className="text-4xl font-semibold">Ready to chase your dream?</h2>
          <p className="mt-3 opacity-90">Let’s build a brand that grows with you.</p>
          <Link href="/contact" className="mt-8 inline-flex items-center rounded-2xl bg-white/95 px-6 py-3 font-semibold text-blue-900 shadow-soft hover:shadow-lift">Book a free discovery call</Link>
        </div>
      </Section>
    </main>
  )
}