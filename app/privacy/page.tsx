import Section from '@/components/Section'

export const metadata = { title: 'Privacy Policy — Synast Digital' }

export default function Privacy() {
  const updated = new Date().toLocaleDateString('en-GB', { year: 'numeric', month: 'long', day: 'numeric' })
  return (
    <main>
      <Section>
        <div className="mx-auto max-w-3xl">
          <h1 className="text-4xl font-semibold text-blue-900">Privacy Policy</h1>
          <p className="mt-4 text-ink-600">This policy explains what personal data Synast Digital ("Synast", "we") collects, how we use it, and the rights you have under the GDPR. It applies to <strong>synastdigital.com</strong> and our contact channels.</p>

          <h2 className="mt-10 text-2xl font-semibold text-blue-900">Data Controller</h2>
          <p className="mt-2 text-ink-600">
            Synast Digital — Craiova, Romania · Email: <a className="underline" href="mailto:hello@synastdigital.com">hello@synastdigital.com</a>
          </p>

          <h2 className="mt-10 text-2xl font-semibold text-blue-900">Data we collect</h2>
          <ul className="mt-2 list-disc pl-6 text-ink-600 space-y-2">
            <li>
              <strong>Contact details you share</strong> — when you submit our form or email us: name, email, message and any other info you choose to include. (<em>Legal basis:</em> consent and pre‑contractual steps.)
            </li>
            <li>
              <strong>Emails & business correspondence</strong> — if you become a client, we process project‑related information under the contract. (<em>Legal basis:</em> contract and legal obligations.)
            </li>
            <li>
              <strong>Basic site diagnostics</strong> — our hosting may log IP address, user‑agent and requested pages for security and reliability. We do not use tracking cookies by default. If privacy‑friendly analytics is enabled (e.g., Plausible), we only collect aggregated usage data without cookies or personal profiles. (<em>Legal basis:</em> legitimate interests.)
            </li>
          </ul>

          <h2 className="mt-10 text-2xl font-semibold text-blue-900">How we use your data</h2>
          <ul className="mt-2 list-disc pl-6 text-ink-600 space-y-2">
            <li>To reply to inquiries and provide proposals.</li>
            <li>To deliver and support our services.</li>
            <li>To secure, maintain and improve our website and systems.</li>
            <li>To comply with accounting, tax and other legal duties.</li>
          </ul>

          <h2 className="mt-10 text-2xl font-semibold text-blue-900">Processors & hosting</h2>
          <p className="mt-2 text-ink-600">We use trusted providers to run this site and our communications:</p>
          <ul className="mt-2 list-disc pl-6 text-ink-600 space-y-2">
            <li><strong>GitHub Pages</strong> (GitHub, Inc.) — hosts this website.</li>
            <li><strong>Formspree</strong> (Formspree, Inc.) — processes contact form submissions, if the form is used.</li>
            <li><strong>Google Workspace</strong> (Google) — handles email. </li>
            <li><strong>Analytics (optional)</strong> — a privacy‑first tool such as Plausible may be used without cookies to measure visits in aggregate.</li>
          </ul>
          <p className="mt-2 text-ink-600">Some providers may be outside the EEA. Where required, transfers rely on appropriate safeguards such as the EU Standard Contractual Clauses or adequacy decisions.</p>

          <h2 className="mt-10 text-2xl font-semibold text-blue-900">Retention</h2>
          <ul className="mt-2 list-disc pl-6 text-ink-600 space-y-2">
            <li>Contact messages: up to 24 months or until you ask us to delete them.</li>
            <li>Client records & contracts: for the duration of our engagement and as required by law (e.g., accounting records up to 10 years).</li>
            <li>Aggregated analytics: no personal data and kept for trend reporting.</li>
          </ul>

          <h2 className="mt-10 text-2xl font-semibold text-blue-900">Your rights</h2>
          <p className="mt-2 text-ink-600">Under GDPR you can request access, rectification, erasure, restriction, or portability of your data; you may object to processing based on legitimate interests and withdraw consent at any time. You also have the right to lodge a complaint with the Romanian supervisory authority (ANSPDCP).</p>

          <h2 className="mt-10 text-2xl font-semibold text-blue-900">Contact</h2>
          <p className="mt-2 text-ink-600">For privacy requests, email <a className="underline" href="mailto:hello@synastdigital.com">hello@synastdigital.com</a>.</p>

          <p className="mt-10 text-sm text-ink-600">Last updated: {updated}</p>
        </div>
      </Section>
    </main>
  )
}