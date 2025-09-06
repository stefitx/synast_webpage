'use client'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

export default function Navbar() {
  const pathname = usePathname()
  const isRO = pathname.startsWith('/ro')
  const base = isRO ? '/ro' : ''

  const labels = isRO
    ? { services: 'Servicii', process: 'Proces', results: 'Rezultate', about: 'Despre', ctaShort: 'Audit gratuit', ctaLong: 'Programează un meeting gratuit' }
    : { services: 'Services', process: 'Process', results: 'Results', about: 'About', ctaShort: 'Free audit', ctaLong: 'Book a free discovey call' }

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-black/5">
      {/* Mobile: simple row; Desktop: 3-col grid keeps links centered */}
      <div className="container flex items-center justify-between py-2 md:grid md:grid-cols-3 md:py-3">
        {/* Left: logo + wordmark */}
        <Link href={`${base || '/'}`} className="flex items-center gap-3 font-semibold">
          <Image src="/logo.png" alt="Synast Digital" width={26} height={26} className="rounded-sm" priority />
          <span className="text-base md:text-lg">Synast Digital</span>
        </Link>

        {/* Center: section links (desktop/tablet only) */}
        <nav className="hidden md:flex justify-center gap-6">
          <Link href={`${base}/#services`} className="footer-link">{labels.services}</Link>
          <Link href={`${base}/#process`} className="footer-link">{labels.process}</Link>
          <Link href={`${base}/#results`} className="footer-link">{labels.results}</Link>
          <Link href={`${base}/#about`} className="footer-link">{labels.about}</Link>
        </nav>

        {/* Right: language + CTA (CTA always visible, smaller on phones) */}
        <div className="flex items-center gap-2 md:gap-3 justify-end">
          <Link href={isRO ? '/' : '/ro/'} className="footer-link text-sm md:text-base">
            {isRO ? 'EN' : 'RO'}
          </Link>
          <Link
            href={`${base}/contact/`}
            className="btn btn-primary inline-flex rounded-xl px-3 py-2 text-sm whitespace-nowrap shadow-soft md:rounded-2xl md:px-5 md:py-3 md:text-base"
          >
            <span className="md:hidden">{labels.ctaShort}</span>
            <span className="hidden md:inline">{labels.ctaLong}</span>
          </Link>
        </div>
      </div>
    </header>
  )
}
