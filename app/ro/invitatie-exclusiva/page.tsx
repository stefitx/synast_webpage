import Link from 'next/link'
import Section from '@/components/Section'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Invitația ta personalizată — Synast Digital',
  description:
    'Ai fost selectat(ă) cu atenție să primești această invitație pentru că am identificat deja cum îți putem crește afacerea, gratuit. Tot ce trebuie să faci este să ne contactezi.',
  alternates: {
    canonical: '/ro/invitatie-exclusiva',
    languages: { 'en-US': '/exclusive-invite', 'ro-RO': '/ro/invitatie-exclusiva' },
  },
  robots: { index: false, follow: true },
}

export default function InvitatieExclusivaPage() {
  return (
    <main>
      <Section className="pt-24">
        <div className="mx-auto max-w-2xl text-center" lang="ro">
          <span className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-4 py-1 text-sm font-medium text-blue-700">
            Invitație exclusivă
          </span>
          <h1 className="mt-6 text-4xl font-semibold text-blue-900 md:text-5xl">Un preambul la parteneriatul nostru</h1>
          <p className="mt-6 text-lg text-ink-600">
            Ai fost selectat(ă) cu atenție să primești această invitație pentru că ne-am făcut temele despre afacerea ta și am identificat deja câteva moduri în care te putem ajuta să crești &mdash; gratuit. Tot ce trebuie să faci este să ne contactezi și îți povestim despre oportunitățile pe care le-am descoperit.
          </p>
          <p className="mt-6 text-ink-600">
            Gândește-te la asta ca la un avans: venim pregătiți cu idei concrete, astfel încât prima discuție este despre impact, nu despre introduceri.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
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
