'use client'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

export default function Navbar() {
  const pathname = usePathname()
  const isRO = pathname.startsWith('/ro')
  const base = isRO ? '/ro' : ''

  const labels = isRO
    ? { services: 'Servicii', process: 'Proces', results: 'Rezultate', about: 'Despre', ctaLong: 'Programează un audit gratuit', ctaShort: 'Audit gratuit' }
    : { services: 'Services', process: 'Process', results: 'Results', about: 'About', ctaLong: 'Book a free audit', ctaShort: 'Free audit' }

  return (
    <header className="sticky top-0 z-50 bg-white/75 backdrop-blur border-b border-black/5">
      {/* Flex on mobile, 3-col grid from md up so links stay centered */}
      <div className="container flex h-14 items-center justify-between md:grid md:h-16 md:grid-cols-3">
        {/* Left: logo */}
        <Link href={`${base || '/'}`} className="flex items-center gap-3 font-semibold">
          <Image src="/logo.png" alt="Synast Digital" width={26} height={26} className="rounded-sm" priority />
          <span className="text-base md:text-lg">Synast Digital</span>
        </Link>

        {/* Center: nav (hidden on mobile) */}
        <nav className="hidden md:flex justify-center gap-6">
          <Link href={`${base}/#services`} className="footer-link">{labels.services}</Link>
          <Link href={`${base}/#process`} className="footer-link">{labels.process}</Link>
          <Link href={`${base}/#results`} className="footer-link">{labels.results}</Link>
          <Link href={`${base}/#about`} className="footer-link">{labels.about}</Link>
        </nav>

        {/* Right: compact CTA + language */}
        <div className="flex items-center gap-2 md:gap-3 justify-end">
          <Link
            href={`${base}/contact/`}
            className="btn btn-primary whitespace-nowrap rounded-xl px-3 py-2 text-sm md:rounded-2xl md:px-5 md:py-3 md:text-base"
          >
            {/* Short label on small screens, long label from sm+ */}
            <span className="sm:hidden">{labels.ctaShort}</span>
            <span className="hidden sm:inline">{labels.ctaLong}</span>
          </Link>
          <Link href={isRO ? '/' : '/ro/'} className="footer-link text-sm md:text-base">
            {isRO ? 'EN' : 'RO'}
          </Link>
        </div>
      </div>
    </header>
  )
}
