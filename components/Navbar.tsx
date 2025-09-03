// components/Navbar.tsx
'use client'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

type Labels = { services: string; process: string; results: string; about: string; cta: string }

export default function Navbar({
  base = '',                 // '' for EN home, '/ro' for Romanian pages
  labels = { services: 'Services', process: 'Process', results: 'Results', about: 'About', cta: 'Book a free audit' }
}: { base?: string; labels?: Labels }) {

  const pathname = usePathname()
  const isRO = pathname.startsWith('/ro')

  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-white/60">
      {/* 3-column grid keeps links perfectly centered */}
      <div className="container grid h-16 grid-cols-3 items-center">
        {/* Left: Logo/brand */}
        <Link href={`${base || '/'}`} className="flex items-center gap-2 font-semibold">
          {/* Add /public/logo.png (see step 5) */}
          <Image src="/logo.png" alt="Synast Digital" width={20} height={20} className="rounded-sm" />
          <span>Synast Digital</span>
        </Link>

        {/* Center: Nav, now linking to HOME + hash so it works from /contact */}
        <nav className="hidden md:flex justify-center gap-6">
          <Link href={`${base}/#services`} className="footer-link">{labels.services}</Link>
          <Link href={`${base}/#process`} className="footer-link">{labels.process}</Link>
          <Link href={`${base}/#results`} className="footer-link">{labels.results}</Link>
          <Link href={`${base}/#about`} className="footer-link">{labels.about}</Link>
        </nav>

        {/* Right: CTA + language toggle */}
        <div className="flex justify-end items-center gap-3">
          <Link href={`${base}/contact`} className="btn btn-primary">{labels.cta}</Link>
          <Link href={isRO ? '/' : '/ro'} className="footer-link">{isRO ? 'EN' : 'RO'}</Link>
        </div>
      </div>
    </header>
  )
}
