// app/layout.tsx
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import type { Metadata, Viewport } from 'next'

export const metadata: Metadata = {
  metadataBase: new URL('https://www.synastdigital.com'),
  title: {
    default: 'Synast Digital — Marketing, Strategie & Digitalizare',
    template: '%s — Synast Digital',
  },
  description:
    'Tu te concentrezi pe visul tău. Noi îți maximizăm veniturile. Branding, strategie și automatizarea proceselor de business.',
  alternates: {
    canonical: '/',
    languages: { 'en-US': '/', 'ro-RO': '/ro' },
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  openGraph: {
    type: 'website',
    url: 'https://www.synastdigital.com',
    title: 'Synast Digital — Marketing, Strategie & Digitalizare',
    description:
      'Branding, strategie și automatizare pentru IMM-uri. Sisteme simple, rapide, cu ROI clar.',
    siteName: 'Synast Digital',
    images: ['/og-image.jpg'], // optional if you have one
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en"> {/* Romanian pages override this in /ro/layout.tsx */}
      <body className="font-sans">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
