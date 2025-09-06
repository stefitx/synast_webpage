'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Footer() {
  const pathname = usePathname()
  const isRO = pathname.startsWith('/ro')
  const base = isRO ? '/ro' : ''

  const labels = {
    company: isRO ? 'Companie' : 'Company',
    contact: 'Contact',
    privacy: isRO ? 'Confidențialitate' : 'Privacy',
    getInTouch: isRO ? 'Contact' : 'Get in touch',
  }

  return (
    <footer className="section-alt">
      <div className="container grid gap-8 md:grid-cols-3">
        <div>
          <div className="font-semibold">Synast Digital SRL</div>
          <p className="mt-2 text-ink-600">Automation & digitalization for SMEs.</p>
        </div>
        <div className="space-y-2">
          <div className="font-semibold">{labels.company}</div>
          <Link href={`${base}/contact/`} className="footer-link block">{labels.contact}</Link>
          <Link href={`${base}/privacy/`} className="footer-link block">{labels.privacy}</Link>
        </div>
        <div className="space-y-2">
          <div className="font-semibold">{labels.getInTouch}</div>
          <a className="footer-link block" href="mailto:hello@synastdigital.com">hello@synastdigital.com</a>
          <span className="footer-link block">Craiova · Barcelona</span>
        </div>
      </div>
      <div className="container mt-10 border-t pt-6 text-sm text-ink-600">© {new Date().getFullYear()} Synast Digital SRL</div>
    </footer>
  )
}