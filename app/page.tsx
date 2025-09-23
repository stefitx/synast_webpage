import Section from '@/components/Section'
import Testimonial from '@/components/Testimonial'
import { Metric } from '@/components/Metrics'
import Link from 'next/link'
import Script from 'next/script'
import type { Metadata } from 'next'

const faqs = [
  {
    question: 'What kinds of businesses does Synast Digital partner with?',
    answer:
      'We work with funded startups and established SMEs that want clear marketing systems, compelling branding, and automated operations that scale with them.',
  },
  {
    question: 'Do you only build strategy or also help with execution?',
    answer:
      'Both. We align with your goals, map quick wins, and then design, implement, and optimise campaigns, websites, and automations so the plan delivers measurable results.',
  },
  {
    question: 'How soon can we see impact after we start?',
    answer:
      'You get a roadmap with actions for the first 30, 60, and 90 days. Most partners feel the difference in a few weeks through clearer positioning, faster processes, or early leads.',
  },
  {
    question: 'Can you integrate our existing tools and data sources?',
    answer:
      'Yes. We audit your current stack and connect CRM, payments, analytics, and internal dashboards so information flows securely between teams without manual effort.',
  },
] satisfies Array<{ question: string; answer: string }>

const structuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'ProfessionalService',
      '@id': 'https://www.synastdigital.com/#agency',
      name: 'Synast Digital',
      url: 'https://www.synastdigital.com/',
      description:
        'Synast Digital delivers marketing strategy, branding, and business process automation for founders focused on growth.',
      image: 'https://www.synastdigital.com/logo.png',
      areaServed: [
        { '@type': 'AdministrativeArea', name: 'Romania' },
        { '@type': 'Country', name: 'European Union' },
      ],
      serviceType: ['Marketing strategy', 'Brand identity', 'Business process automation'],
    },
    {
      '@type': 'FAQPage',
      '@id': 'https://www.synastdigital.com/#faq',
      mainEntity: faqs.map((faq) => ({
        '@type': 'Question',
        name: faq.question,
        acceptedAnswer: { '@type': 'Answer', text: faq.answer },
      })),
    },
  ],
}

// app/page.tsx  (EN)
export const metadata: Metadata = {
  title: 'Synast Digital — Marketing, Branding & Digitalization',
  description: 'You focus on your dream. We handle the rest. Branding, strategy, and business process automation.',
  alternates: { canonical: '/', languages: { 'en-US': '/', 'ro-RO': '/ro' } },
  openGraph: {
    title: 'Synast Digital — Marketing, Branding & Digitalization',
    description:
      'You focus on your dream. We handle the rest. Branding, strategy, and business process automation.',
    url: 'https://www.synastdigital.com/',
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
    title: 'Synast Digital — Marketing, Branding & Digitalization',
    description: 'You focus on your dream. We handle the rest. Branding, strategy, and business process automation.',
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
            <span className="block">You focus on your dream.</span>
            <span className="block text-blue-700">We handle the rest.</span>
          </h1>
          <p className="mt-5 text-lg text-ink-600">
            Synast Digital designs marketing systems, brand identities, and automated workflows so your team can spend less time
            firefighting and more time building products customers love.
          </p>
          <p className="mt-3 text-lg text-ink-600">
            From positioning and conversion-driven websites to CRM, analytics, and finance integrations, we create the structure
            that keeps revenue, operations, and customer experience moving in sync.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link className="btn btn-primary" href="/contact">
              Book a discovery call
            </Link>
            <a className="btn btn-ghost" href="#process">
              See how we work
            </a>
          </div>
        </div>
      </Section>

      {/* Services */}
      <Section id="services">
        {/* Marketing & Brand Growth — grid like Automation */}
        <h2 className="text-3xl font-semibold text-blue-900 text-center">Marketing & Brand Growth</h2>
        <p className="mt-3 text-ink-600 text-center max-w-2xl mx-auto">
          We design marketing systems that grow with you. From brand identity to lead generation, we cover it all with clear
          strategies and measurable results.
        </p>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {[
            {
              title: 'Audit & strategy',
              desc: 'Market analysis, growth potential, and a practical action plan you can keep.',
            },
            {
              title: 'Brand identity & guidelines',
              desc: 'Naming, tone, palette, and persona aligned to your vision and the market.',
            },
            {
              title: 'Website that converts',
              desc: 'Design, development, and ongoing maintenance focused on conversion.',
            },
            {
              title: 'Paid campaigns',
              desc: 'End-to-end campaign strategy and management; budgets planned for ROI.',
            },
            {
              title: 'Social media & content',
              desc: 'Planning, creation, posting, and community management across platforms.',
            },
            {
              title: 'Measurement & optimization',
              desc: 'Regular reporting and iterative improvements to maximize results per €.',
            },
          ].map((s) => (
            <div key={s.title} className="card card-hover p-6">
              <div className="text-xl font-semibold">{s.title}</div>
              <p className="mt-2 text-ink-600">{s.desc}</p>
            </div>
          ))}
        </div>

        {/* Automation & Digitalization — unchanged grid */}
        <div className="mt-16 md:mt-20">
          <h2 className="text-3xl font-semibold text-blue-900 text-center">Automation & Digitalization</h2>
          <p className="mt-3 text-ink-600 text-center max-w-2xl mx-auto">
            We connect your tools, remove repetitive steps, and give you a clear view of what’s happening—so work moves on its own
            and decisions take minutes, not weeks.
          </p>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {[
              {
                title: 'SME systems audit',
                desc: 'We map your systems and hand you the top 3 quick wins with clear next steps.',
              },
              {
                title: 'Process automation',
                desc: 'We take the busywork out of your tools so the right things happen automatically.',
              },
              {
                title: 'Operations dashboards',
                desc: 'Personalized live sales/finance/projects in one place—act fast without chasing sheets.',
              },
              {
                title: 'Data pipelines',
                desc: 'Clean, join, and sync data between apps reliably—no more brittle exports.',
              },
              {
                title: 'Training & SOPs',
                desc: 'Simple SOPs and short videos so the change sticks—your team stays confident.',
              },
              {
                title: 'Web integrations',
                desc: 'Payments, CRM, ERP, email—connected so data flows and nothing falls through the cracks.',
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
            [
              'Audit',
              'We make a comprehensive analysis of your business, its growth potential, competitor analysis and action plan.',
            ],
            ['Build', 'Once we agree on the plan, we start the implementation.'],
            ['Measure', '30/60/90-day reports, depending on your business needs, where we measure progress.'],
            ['Continuous improvement', 'We update the strategy based on periodic reports. Our plan grows with you.'],
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
        <p className="mt-3 text-ink-600 max-w-2xl">
          We track every deliverable against agreed KPIs so you can see the impact on sales cycles, conversion rates, and team
          capacity.
        </p>
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
              I’m <strong>Stefania Tudor</strong>, founder of Synast Digital. With a business degree, software engineering
              background, and experience at multinational consulting companies, my team and I build successful brands and
              accessible systems for enterprises in Romania. We start with quick wins, tailor it to your business, then bring
              compounding improvements.
            </p>
          </div>
          <div className="card p-6">
            <div className="text-lg font-medium">Free 45-minute discovery call</div>
            <p className="mt-2 text-ink-600">We’ll identify 3 high-ROI changes you can make this month.</p>
            <Link href="/contact" className="mt-4 inline-block btn btn-primary">
              Book now
            </Link>
          </div>
        </div>
      </Section>

      {/* FAQ */}
      <Section id="faq">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-3xl font-semibold text-blue-900">Frequently asked questions</h2>
          <p className="mt-3 text-ink-600">
            Answers to the most common questions founders ask when we start working together.
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
          <h2 className="text-4xl font-semibold">Ready to chase your dream?</h2>
          <p className="mt-3 opacity-90">Let’s build a brand that grows with you.</p>
          <Link
            href="/contact"
            className="mt-8 inline-flex items-center rounded-2xl bg-white/95 px-6 py-3 font-semibold text-blue-900 shadow-soft hover:shadow-lift"
          >
            Book a free discovery call
          </Link>
        </div>
      </Section>

      <Script
        id="home-structured-data"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
    </main>
  )
}
