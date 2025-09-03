import Link from 'next/link'
export default function Footer() {
  return (
    <footer className="section-alt">
      <div className="container grid gap-8 md:grid-cols-3">
        <div>
          <div className="font-semibold">Synast Digital SRL</div>
          <p className="mt-2 text-ink-600">Automation & digitalization for SMEs.</p>
        </div>
        <div className="space-y-2">
          <div className="font-semibold">Company</div>
          <Link href="/contact" className="footer-link block">Contact</Link>
          <Link href="/privacy" className="footer-link block">Privacy</Link>
        </div>
        <div className="space-y-2">
          <div className="font-semibold">Get in touch</div>
          <a className="footer-link block" href="mailto:hello@synastdigital.com">hello@synastdigital.com</a>
          <span className="footer-link block">Craiova · Barcelona</span>
        </div>
      </div>
      <div className="container mt-10 border-t pt-6 text-sm text-ink-600">© {new Date().getFullYear()} Synast Digital SRL</div>
    </footer>
  )
}
