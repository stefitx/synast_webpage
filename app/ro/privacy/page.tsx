import Section from '@/components/Section'

export const metadata = { title: 'Politica de confidențialitate — Synast Digital' }

export default function PrivacyRO() {
  const updated = new Date().toLocaleDateString('ro-RO', { year: 'numeric', month: 'long', day: 'numeric' })
  return (
    <main>
      <Section>
        <div className="mx-auto max-w-3xl">
          <h1 className="text-4xl font-semibold text-blue-900">Politica de confidențialitate</h1>
          <p className="mt-4 text-ink-600">Această politică explică ce date personale colectează Synast Digital („Synast”, „noi”), cum le folosim și ce drepturi aveți conform GDPR. Se aplică pentru <strong>synastdigital.com</strong> și canalele noastre de contact.</p>

          <h2 className="mt-10 text-2xl font-semibold text-blue-900">Operatorul de date</h2>
          <p className="mt-2 text-ink-600">Synast Digital — Craiova, România · Email: <a className="underline" href="mailto:hello@synastdigital.com">hello@synastdigital.com</a></p>

          <h2 className="mt-10 text-2xl font-semibold text-blue-900">Ce date colectăm</h2>
          <ul className="mt-2 list-disc pl-6 text-ink-600 space-y-2">
            <li><strong>Date de contact</strong> — când completați formularul sau ne scrieți: nume, email, mesaj și orice alte informații oferite. (<em>Temei:</em> consimțământ și demersuri precontractuale.)</li>
            <li><strong>Comunicări și corespondență</strong> — dacă deveniți client, prelucrăm informații legate de proiect conform contractului. (<em>Temei:</em> contract și obligații legale.)</li>
            <li><strong>Diagrame de utilizare a site‑ului</strong> — găzduirea poate înregistra IP, user‑agent și paginile accesate pentru securitate. Nu folosim cookie‑uri de urmărire în mod implicit. Dacă activăm analitice prietenoase cu confidențialitatea (ex. Plausible), colectăm doar date agregate, fără cookie‑uri sau profilare. (<em>Temei:</em> interes legitim.)</li>
          </ul>

          <h2 className="mt-10 text-2xl font-semibold text-blue-900">Cum folosim datele</h2>
          <ul className="mt-2 list-disc pl-6 text-ink-600 space-y-2">
            <li>Pentru a răspunde solicitărilor și a oferi oferte.</li>
            <li>Pentru a livra și susține serviciile noastre.</li>
            <li>Pentru a securiza, întreține și îmbunătăți site‑ul și sistemele.</li>
            <li>Pentru a respecta obligațiile contabile, fiscale și legale.</li>
          </ul>

          <h2 className="mt-10 text-2xl font-semibold text-blue-900">Împuterniciți & găzduire</h2>
          <ul className="mt-2 list-disc pl-6 text-ink-600 space-y-2">
            <li><strong>GitHub Pages</strong> (GitHub, Inc.) — găzduiește acest site.</li>
            <li><strong>Formspree</strong> (Formspree, Inc.) — procesează mesajele trimise prin formular.</li>
            <li><strong>Google Workspace</strong> (Google) — gestionarea e‑mailurilor.</li>
            <li><strong>Analitice (opțional)</strong> — instrument fără cookie‑uri (ex. Plausible) pentru statistici agregate.</li>
          </ul>
          <p className="mt-2 text-ink-600">Unii furnizori pot fi în afara SEE. Când este necesar, transferurile se bazează pe clauzele contractuale standard ale UE sau pe decizii de adecvare.</p>

          <h2 className="mt-10 text-2xl font-semibold text-blue-900">Păstrarea datelor</h2>
          <ul className="mt-2 list-disc pl-6 text-ink-600 space-y-2">
            <li>Mesaje prin formular: până la 24 de luni sau până la solicitarea de ștergere.</li>
            <li>Documente și contracte de client: pe durata colaborării și conform legii (ex. documente contabile până la 10 ani).</li>
            <li>Statistici agregate: fără date personale, păstrate pentru rapoarte de tendințe.</li>
          </ul>

          <h2 className="mt-10 text-2xl font-semibold text-blue-900">Drepturile dvs.</h2>
          <p className="mt-2 text-ink-600">Aveți dreptul de acces, rectificare, ștergere, restricționare, portabilitate, opoziție și retragerea consimțământului. De asemenea, puteți depune o plângere la ANSPDCP.</p>

          <h2 className="mt-10 text-2xl font-semibold text-blue-900">Contact</h2>
          <p className="mt-2 text-ink-600">Pentru solicitări legate de confidențialitate: <a className="underline" href="mailto:hello@synastdigital.com">hello@synastdigital.com</a>.</p>

          <p className="mt-10 text-sm text-ink-600">Ultima actualizare: {updated}</p>
        </div>
      </Section>
    </main>
  )
}

