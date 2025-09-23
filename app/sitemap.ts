import type { MetadataRoute } from 'next'

const baseUrl = 'https://www.synastdigital.com'

const routes: Array<{
  path: string
  changeFrequency: NonNullable<MetadataRoute.Sitemap[0]['changeFrequency']>
  priority: number
}> = [
  { path: '/', changeFrequency: 'weekly', priority: 1 },
  { path: '/get-to-know-us', changeFrequency: 'monthly', priority: 0.7 },
  { path: '/contact', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/privacy', changeFrequency: 'yearly', priority: 0.4 },
  { path: '/ro', changeFrequency: 'weekly', priority: 1 },
  { path: '/ro/cunoaste-ne', changeFrequency: 'monthly', priority: 0.7 },
  { path: '/ro/contact', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/ro/privacy', changeFrequency: 'yearly', priority: 0.4 },
]

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date()
  return routes.map((route) => ({
    url: `${baseUrl}${route.path}`,
    lastModified,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }))
}
