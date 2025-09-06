import Section from '@/components/Section'
import Link from 'next/link'
export const metadata = { title: 'Mesaj trimis — Synast Digital' }
export default function SentRO() {
  return (
    <main>
      <Section>
        <div className="mx-auto max-w-xl text-center">
          <h1 className="text-4xl font-semibold text-blue-900">Mulțumim — am primit mesajul tău!</h1>
          <p className="mt-3 text-ink-600">Revenim în maximum 2 zile lucrătoare.</p>
          <div className="mt-6 flex justify-center gap-3">
            <Link href="/ro/" className="btn btn-ghost">Înapoi</Link>
            <a href="mailto:hello@synastdigital.com" className="btn btn-primary">Trimite un email</a>
          </div>
        </div>
      </Section>
    </main>
  )
}
