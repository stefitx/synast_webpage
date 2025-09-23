// app/layout.tsx
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Script from 'next/script'
import type { Metadata, Viewport } from 'next'

export const metadata: Metadata = {
  metadataBase: new URL('https://www.synastdigital.com'),
  title: { default: 'Synast Digital — Marketing, Strategie & Digitalizare', template: '%s — Synast Digital' },
  description: 'Tu te concentrezi pe visul tău. Noi îți maximizăm veniturile. Branding, strategie și automatizarea proceselor de business.',
  keywords: [
    'marketing agency romania',
    'branding strategy',
    'business process automation',
    'digital marketing consultancy',
    'synast digital',
  ],
  alternates: { canonical: '/', languages: { 'en-US': '/', 'ro-RO': '/ro' } },
  icons: { icon: '/favicon.ico', shortcut: '/favicon.ico', apple: '/apple-touch-icon.png' },
  authors: [{ name: 'Synast Digital', url: 'https://www.synastdigital.com' }],
  creator: 'Synast Digital',
  publisher: 'Synast Digital',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    alternateLocale: ['ro_RO'],
    url: 'https://www.synastdigital.com/',
    siteName: 'Synast Digital',
    title: 'Synast Digital — Marketing, Strategie & Digitalizare',
    description:
      'Tu te concentrezi pe visul tău. Noi îți maximizăm veniturile. Branding, strategie și automatizarea proceselor de business.',
    images: [
      {
        url: 'https://www.synastdigital.com/logo.png',
        width: 512,
        height: 512,
        alt: 'Synast Digital logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Synast Digital — Marketing, Strategie & Digitalizare',
    description:
      'Tu te concentrezi pe visul tău. Noi îți maximizăm veniturile. Branding, strategie și automatizarea proceselor de business.',
    images: ['https://www.synastdigital.com/logo.png'],
  },
  robots: { index: true, follow: true },
}

export const viewport: Viewport = { width: 'device-width', initialScale: 1, viewportFit: 'cover' }

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="font-sans">
        <Navbar />
        {children}
        <Footer />
        <Script id="org-schema" type="application/ld+json" strategy="afterInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify({
            '@context':'https://schema.org',
            '@type':'Organization',
            name:'Synast Digital',
            url:'https://www.synastdigital.com',
            logo:'https://www.synastdigital.com/icon.png'
          })}} />
      </body>
    </html>
  )
}
