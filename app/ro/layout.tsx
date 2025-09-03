import '../globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Synast Digital — Automatizări & Digitalizare pentru IMM-uri',
  description: 'Sisteme simple, rapide, cu ROI clar.',
}

const roLabels = {
  services: 'Servicii',
  process: 'Proces',
  results: 'Rezultate',
  about: 'Despre',
  cta: 'Programează un audit gratuit',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ro">
      <body className="font-sans">
        <Navbar base="/ro" labels={roLabels} />
        {children}
        <Footer />
      </body>
    </html>
  )
}
