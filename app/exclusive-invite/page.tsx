import Link from 'next/link'
import Section from '@/components/Section'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Your tailored invite — Synast Digital',
  description:
    'You have been carefully selected to receive this invite because we already see how we can help your business grow for free—reach out and we will show you.',
  alternates: {
    canonical: '/exclusive-invite',
    languages: { 'en-US': '/exclusive-invite', 'ro-RO': '/ro/invitatie-exclusiva' },
  },
  robots: { index: false, follow: true },
}

export default function ExclusiveInvitePage() {
  return (
    <main>
      <Section className="pt-24">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-4 py-1 text-sm font-medium text-blue-700">
            Exclusive invite
          </span>
          <h1 className="mt-6 text-4xl font-semibold text-blue-900 md:text-5xl">A tailored partnership preview</h1>
          <p className="mt-6 text-lg text-ink-600">
            You&apos;ve been carefully selected to receive this invite because we&apos;ve done our homework on your business and already
            identified several ways we can help you grow&mdash;for free. All you have to do is contact us and we&apos;ll walk you through the opportunities we&apos;ve uncovered.
          </p>
          <p className="mt-6 text-ink-600">
            Consider this a head start: we come prepared with concrete ideas so our first conversation is about impact, not introductions.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link href="/contact" className="btn btn-primary">
              Claim your strategy call
            </Link>
            <Link href="/get-to-know-us" className="btn btn-ghost">
              Learn more about Synast
            </Link>
          </div>
        </div>
      </Section>
    </main>
  )
}
