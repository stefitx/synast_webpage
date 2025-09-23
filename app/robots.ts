import type { MetadataRoute } from 'next'

const baseUrl = 'https://www.synastdigital.com'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/exclusive-invite', '/ro/invitatie-exclusiva', '/contact/sent', '/ro/contact/sent'],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  }
}
