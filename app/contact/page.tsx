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
  action="https://formspree.io/f/https://formspree.io/f/mrbaogln"  // 👈 paste your real ID
  method="POST"
  acceptCharset="UTF-8"
  className="mt-8 space-y-4"
>
  {/* Hidden settings */}
  <input type="hidden" name="_subject" value="New inquiry — Synast Digital" />
  <input type="hidden" name="_redirect" value="https://www.synastdigital.com/contact/sent/" />
  {/* Honeypot (spam trap) */}
  <input type="text" name="_gotcha" className="hidden" tabIndex={-1} autoComplete="off" />

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
    <textarea required name="message" rows={5} className="mt-1 w-full rounded-2xl border px-4 py-3" placeholder="Tell us about your goals" />
  </div>

  <label className="flex items-start gap-2 text-sm text-ink-600">
    <input required type="checkbox" name="consent" className="mt-1" />
    I agree to the <a className="underline" href="/privacy/">Privacy Policy</a>.
  </label>

  <button className="btn btn-primary" type="submit">Send</button>

  <p className="text-sm text-ink-600">
    Prefer email? <a className="underline" href="mailto:hello@synastdigital.com">hello@synastdigital.com</a>
  </p>
</form>

        </div>
      </Section>
    </main>
  )
}