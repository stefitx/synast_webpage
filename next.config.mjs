
// next.config.mjs
const isPages = process.env.GITHUB_PAGES === 'true'
const repo = process.env.GITHUB_REPOSITORY?.split('/')[1]

// If you set NEXT_BASE_PATH='' in the workflow for custom domains,
// this stays empty. Otherwise it falls back to /<repo> for project pages.
const base = process.env.NEXT_BASE_PATH ?? (isPages && repo ? `/${repo}` : '')

export default {
  output: 'export',
  images: { unoptimized: true },
  trailingSlash: true,
  basePath: base || undefined,
  assetPrefix: base ? `${base}/` : undefined,
}
