// app/ro/layout.tsx
import '../globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: {
    default: 'Synast Digital — Marketing, Branding, Strategie & Digitalizare',
    template: '%s — Synast Digital',
  },
  description: 'Tu te concentrezi pe visul tău. Noi îți maximizăm veniturile. Branding, strategie și automatizarea proceselor de business.',
  keywords: [
    'agenție marketing românia',
    'strategie brand',
    'automatizare procese de business',
    'digitalizare IMM',
    'synast digital',
  ],
  alternates: {
    canonical: '/ro',
    languages: {
      'en': '/',       // English version
      'ro-RO': '/ro',  // Romanian version
    },
  },
  openGraph: {
    locale: 'ro_RO',
    type: 'website',
    url: 'https://www.synastdigital.com/ro',
    siteName: 'Synast Digital',
    title: 'Synast Digital — Marketing, Branding, Strategie & Digitalizare',
    description:
      'Tu te concentrezi pe visul tău. Noi îți maximizăm veniturile. Branding, strategie și automatizarea proceselor de business.',
    images: [
      {
        url: 'https://www.synastdigital.com/logo.png',
        width: 512,
        height: 512,
        alt: 'Sigla Synast Digital',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Synast Digital — Marketing, Branding, Strategie & Digitalizare',
    description:
      'Tu te concentrezi pe visul tău. Noi îți maximizăm veniturile. Branding, strategie și automatizarea proceselor de business.',
    images: ['https://www.synastdigital.com/logo.png'],
  },
}

export default function RoLayout({ children }: { children: React.ReactNode }) {
  // Root <html> stays "en" in the global layout; we scope Romanian here.
  return <main lang="ro">{children}</main>
}
