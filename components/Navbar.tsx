'use client'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

export default function Navbar() {
  const pathname = usePathname()
  const isRO = pathname.startsWith('/ro')
  const base = isRO ? '/ro' : ''
  const labels = isRO
    ? { services: 'Servicii', process: 'Proces', results: 'Rezultate', about: 'Despre', ctaLong: 'Programează un audit gratuit' }
    : { services: 'Services', process: 'Process', results: 'Results', about: 'About', ctaLong: 'Book a free audit' }

  const links = [
    { href: `${base}/#services`, label: labels.services },
    { href: `${base}/#process`,  label: labels.process  },
    { href: `${base}/#results`,  label: labels.results  },
    { href: `${base}/#about`,    label: labels.about    },
  ]

  const [open, setOpen] = useState(false)

  // close menu on route change + lock scroll while open
  useEffect(() => { setOpen(false) }, [pathname])
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-black/5">
      {/* Mobile: flex; Desktop: 3-col grid keeps nav centered */}
      <div className="container flex h-14 items-center justify-between md:grid md:h-16 md:grid-cols-3">
        {/* Left: logo */}
        <Link href={`${base || '/'}`} className="flex items-center gap-3 font-semibold">
          <Image src="/logo.png" alt="Synast Digital" width={26} height={26} className="rounded-sm" priority />
          <span className="text-base md:text-lg">Synast Digital</span>
        </Link>

        {/* Center: desktop nav */}
        <nav className="hidden md:flex justify-center gap-6">
          {links.map(l => (
            <Link key={l.href} href={l.href} className="footer-link">{l.label}</Link>
          ))}
        </nav>

        {/* Right: language + CTA (CTA hidden on mobile to avoid overflow) */}
        <div className="flex items-center gap-2 md:gap-3 justify-end">
          <Link href={isRO ? '/' : '/ro/'} className="footer-link text-sm md:text-base">
            {isRO ? 'EN' : 'RO'}
          </Link>
          <Link href={`${base}/contact/`} className="btn btn-primary hidden md:inline-flex">
            {labels.ctaLong}
          </Link>
          <button
            onClick={() => setOpen(true)}
            aria-label="Open menu"
            className="md:hidden inline-flex items-center justify-center rounded-xl border px-3 py-2"
          >
            <div className="h-0.5 w-5 bg-ink-900" />
            <div className="mt-1 h-0.5 w-5 bg-ink-900" />
            <div className="mt-1 h-0.5 w-5 bg-ink-900" />
          </button>
        </div>
      </div>

      {/* Mobile sheet menu */}
      {open && (
        <div className="fixed inset-0 z-50 bg-white/95 backdrop-blur-sm">
          <div className="container pt-[max(1rem,env(safe-area-inset-top))] pb-10">
            <div className="flex items-center justify-between">
              <Link href={`${base || '/'}`} onClick={() => setOpen(false)} className="flex items-center gap-3 font-semibold">
                <Image src="/logo.png" alt="Synast Digital" width={26} height={26} className="rounded-sm" />
                <span>Synast Digital</span>
              </Link>
              <button onClick={() => setOpen(false)} aria-label="Close menu" className="rounded-xl border px-3 py-2">✕</button>
            </div>

            <div className="mt-8 grid gap-5 text-lg">
              {links.map(l => (
                <Link key={l.href} href={l.href} onClick={() => setOpen(false)} className="block">{l.label}</Link>
              ))}
              <Link href={`${base}/contact/`} onClick={() => setOpen(false)} className="btn btn-primary mt-4 text-base">
                {labels.ctaLong}
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
