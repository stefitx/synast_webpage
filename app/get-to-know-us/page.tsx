import Section from '@/components/Section'
import TeamVideo from '@/components/TeamVideo'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Get to know us — Synast Digital',
  description:
    'Meet the team behind Synast Digital, understand how we work, and see the values that guide every project we take on.',
  alternates: {
    canonical: '/get-to-know-us',
    languages: { 'en-US': '/get-to-know-us', 'ro-RO': '/ro/cunoaste-ne' },
  },
}

export default function GetToKnowUsPage() {
  return (
    <main>
      <Section className="pt-24">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-4xl font-semibold text-blue-900 md:text-5xl">Get to know us</h1>
          <p className="mt-4 text-lg text-ink-600">
            Press play to see who we are, how we collaborate, and the kind of impact we create together with our clients.
          </p>
        </div>

        <div className="mt-12">
          <TeamVideo locale="en" />
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {[
            {
              title: 'Our story',
              description:
                'Synast started as a collaboration between strategists, creatives, and engineers who wanted to remove the friction from growing a business.',
            },
            {
              title: 'How we work',
              description:
                'From the first discovery call to automation roll-outs, we design every step with clarity, measurable goals, and ongoing optimisation.',
            },
            {
              title: 'Why partners choose us',
              description:
                'Transparent communication, measurable results, and a long-term partnership mindset make sure your team feels supported at every step.',
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
