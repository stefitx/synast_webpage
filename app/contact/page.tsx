import Section from '@/components/Section'

export const metadata = { title: 'Contact — Synast Digital' }

export default function ContactPage() {
  return (
    <main>
      <Section>
        <div className="mx-auto max-w-xl">
          <h1 className="text-4xl font-semibold text-blue-900">Contact</h1>
          <p className="mt-3 text-ink-600">Prefer email? Send us a note at <a className="underline" href="mailto:hello@synastdigital.com">hello@synastdigital.com</a>.</p>

          {/* Static form for GitHub Pages — use Formspree/Getform if you want submissions. */}
          <form
            action="https://formspree.io/f/your-id" // replace with your Formspree ID or switch to a mailto link
            method="POST"
            className="mt-8 space-y-4"
          >
            <div>
              <label className="block text-sm font-medium">Name</label>
              <input required name="name" className="mt-1 w-full rounded-2xl border px-4 py-3" placeholder="Your name" />
            </div>
            <div>
              <label className="block text-sm font-medium">Email</label>
              <input required type="email" name="email" className="mt-1 w-full rounded-2xl border px-4 py-3" placeholder="you@example.com" />
            </div>
            <div>
              <label className="block text-sm font-medium">Message</label>
              <textarea required name="message" className="mt-1 w-full rounded-2xl border px-4 py-3" rows={5} placeholder="Tell us about your goals" />
            </div>
            <button className="btn btn-primary" type="submit">Send</button>
          </form>
        </div>
      </Section>
    </main>
  )
}