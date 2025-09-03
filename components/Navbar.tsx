'use client'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

export default function Navbar() {
  const pathname = usePathname()
  const isRO = pathname.startsWith('/ro')
  const base = isRO ? '/ro' : ''

  const labels = isRO
    ? { services: 'Servicii', process: 'Proces', results: 'Rezultate', about: 'Despre', cta: 'Programează un audit gratuit', langToggle: 'EN' }
    : { services: 'Services', process: 'Process', results: 'Results', about: 'About', cta: 'Book a free audit', langToggle: 'RO' }

  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-white/60">
      {/* 3 columns: left logo, center nav, right CTA/language */}
      <div className="container grid h-16 grid-cols-3 items-center">
        {/* Left: Logo + wordmark */}
        <Link href={`${base || '/'}`} className="flex items-center gap-3 font-semibold">
          {/* 🔵 Make logo bigger: bump width/height to 28 (or 32 if you want) */}
          <Image src="/logo.png" alt="Synast Digital" width={28} height={28} className="rounded-sm" priority />
          <span className="text-lg">Synast Digital</span>
        </Link>

        {/* Center: section links that work from any route */}
        <nav className="hidden md:flex justify-center gap-6">
          <Link href={`${base}/#services`} className="footer-link">{labels.services}</Link>
          <Link href={`${base}/#process`} className="footer-link">{labels.process}</Link>
          <Link href={`${base}/#results`} className="footer-link">{labels.results}</Link>
          <Link href={`${base}/#about`} className="footer-link">{labels.about}</Link>
        </nav>

        {/* Right: CTA + language toggle */}
        <div className="flex justify-end items-center gap-3">
          <Link href={`${base}/contact`} className="btn btn-primary">{labels.cta}</Link>
          <Link href={isRO ? '/' : '/ro'} className="footer-link">{labels.langToggle}</Link>
        </div>
      </div>
    </header>
  )
}
