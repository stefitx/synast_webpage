// app/layout.tsx
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Synast Digital — \\Marketing & Strategie și Digitalizare',
  description: 'Tu te concentrezi pe visul tău. Noi îți maximizăm veniturile. Branding, strategie și automatizarea proceselor de business. ',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="font-sans">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
export const viewport = {
	width: 'device-width',
	initialScale: 1,
	viewportFit: 'cover',
  }