import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: 'https://zyflux.com', lastModified: new Date(), changeFrequency: 'monthly', priority: 1 },
    { url: 'https://zyflux.com/about', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: 'https://zyflux.com/projects', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: 'https://zyflux.com/contact', lastModified: new Date(), changeFrequency: 'yearly', priority: 0.6 },
  ]
}
