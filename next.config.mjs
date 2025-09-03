const isGithubPages = process.env.GITHUB_PAGES === 'true'
const repo = process.env.GITHUB_REPOSITORY?.split('/')[1]

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: { unoptimized: true },
  trailingSlash: true,
  basePath: isGithubPages && repo ? `/${repo}` : undefined,
  assetPrefix: isGithubPages && repo ? `/${repo}/` : undefined,
}
export default nextConfig