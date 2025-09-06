// app/ro/layout.tsx
import '../globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: {
    default: 'Synast Digital — Marketing, Branding, Strategie & Digitalizare',
    template: '%s — Synast Digital',
  },
  description: 'Tu te concentrezi pe visul tău. Noi îți maximizăm veniturile. Branding, strategie și automatizarea proceselor de business.',
  alternates: {
    canonical: '/ro',
    languages: {
      'en': '/',       // English version
      'ro-RO': '/ro',  // Romanian version
    },
  },
}

export default function RoLayout({ children }: { children: React.ReactNode }) {
  // Root <html> stays "en" in the global layout; we scope Romanian here.
  return <main lang="ro">{children}</main>
}
