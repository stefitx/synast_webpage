import type { Config } from 'tailwindcss'
const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        blue: { 900: '#012f72', 700: '#0049ac' },
        saffron: { 500: '#ffbd5a' },
        ink: { 900: '#0b1220', 600: '#2f3a4a' },
        slate: { 100: '#f6f7fb' },
      },
	  extend: {
		// ... your colors/shadows
		fontFamily: {
		  sans: [
			'Inter',
			'ui-sans-serif',
			'system-ui',
			'-apple-system',
			'Segoe UI',
			'Roboto',
			'Helvetica',
			'Arial',
			'Apple Color Emoji',
			'Segoe UI Emoji',
		  ],
		},
	  },	  
      borderRadius: { '2xl': '1.25rem' },
      boxShadow: {
        soft: '0 8px 20px rgba(0,0,0,0.04)',
        lift: '0 10px 30px rgba(1,47,114,0.08)'
      },
      maxWidth: { container: '1200px' },
    },
  },
  plugins: [],
}
export default config