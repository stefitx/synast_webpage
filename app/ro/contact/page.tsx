import Section from '@/components/Section'
import ContactForm from '@/components/ContactForm'

export const metadata = { title: 'Contact — Synast Digital' }

export default function ContactRO() {
  return (
    <main>
      <Section>
        <div className="mx-auto max-w-xl">
          <h1 className="text-4xl font-semibold text-blue-900">Contact</h1>
          <p className="mt-3 text-ink-600">
            Sau scrie-ne direct la <a className="underline" href="mailto:hello@synastdigital.com">hello@synastdigital.com</a>.
          </p>
          <ContactForm locale="ro" />
        </div>
      </Section>
    </main>
  )
}
