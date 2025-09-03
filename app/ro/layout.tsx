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

export default function RoLayout({ children }: { children: React.ReactNode }) {
	// No <html> or <body> here; the root layout already provides them.
	// We also don't render Navbar/Footer here—root layout will do that for both locales.
	return <main lang="ro">{children}</main>;
  }
