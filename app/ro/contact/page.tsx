import Section from '@/components/Section'

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

          <form
            action="https://formspree.io/f/mrbaogln"
            method="POST"
            acceptCharset="UTF-8"
            className="mt-8 space-y-4"
          >
            <input type="hidden" name="_subject" value="Mesaj nou — Synast Digital" />
            <input type="hidden" name="_redirect" value="https://www.synastdigital.com/ro/contact/sent/" />
            <input type="text" name="_gotcha" className="hidden" tabIndex={-1} autoComplete="off" />

            <div>
              <label className="block text-sm font-medium">Nume</label>
              <input required name="name" className="mt-1 w-full rounded-2xl border px-4 py-3" placeholder="Numele tău" />
            </div>
            <div>
              <label className="block text-sm font-medium">Email</label>
              <input required type="email" name="email" className="mt-1 w-full rounded-2xl border px-4 py-3" placeholder="tu@exemplu.com" />
            </div>
            <div>
              <label className="block text-sm font-medium">Mesaj</label>
              <textarea required name="message" rows={5} className="mt-1 w-full rounded-2xl border px-4 py-3" placeholder="Spune-ne pe scurt despre obiectivele tale" />
            </div>

			<label className="flex items-start gap-2 text-sm text-ink-600">
			<input required type="checkbox" name="consent" className="mt-1" />
			Sunt de acord cu <a className="underline" href="/ro/privacy/">Politica de confidențialitate</a>.
			</label>

            <button className="btn btn-primary" type="submit">Trimite</button>
          </form>
        </div>
      </Section>
    </main>
  )
}