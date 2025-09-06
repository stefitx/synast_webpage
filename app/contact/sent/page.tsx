import Section from '@/components/Section'
import Link from 'next/link'

export const metadata = { title: 'Message sent — Synast Digital' }

export default function Sent() {
  return (
    <main>
      <Section>
        <div className="mx-auto max-w-xl text-center">
          <h1 className="text-4xl font-semibold text-blue-900">Thanks — we got your message!</h1>
          <p className="mt-3 text-ink-600">We’ll reply within 2 business days.</p>
          <div className="mt-6 flex justify-center gap-3">
            <Link href="/" className="btn btn-ghost">Back home</Link>
            <a href="mailto:hello@synastdigital.com" className="btn btn-primary">Email us</a>
          </div>
        </div>
      </Section>
    </main>
  )
}