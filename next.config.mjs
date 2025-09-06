
// next.config.mjs
const isPages = process.env.GITHUB_PAGES === 'true'
const repo = process.env.GITHUB_REPOSITORY?.split('/')[1]

// If you set NEXT_BASE_PATH='' in the workflow for custom domains,
// this stays empty. Otherwise it falls back to /<repo> for project pages.
const base = process.env.NEXT_BASE_PATH ?? (isPages && repo ? `/${repo}` : '')

const nextConfig = {
	output: 'export',          // replaces "next export"
	images: { unoptimized: true }, // needed if you use next/image on GitHub Pages
  }
  export default nextConfig
  