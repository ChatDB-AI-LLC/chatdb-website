// src/app/sitemap.ts

import { MetadataRoute } from 'next'

// This function tells Next.js what pages are on your site.
// We only have one page: the homepage.
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://chatdb.tech',
      lastModified: new Date(),
      changeFrequency: 'monthly', // It's a landing page, it won't change often
      priority: 1, // This is the main page (priority 1 out of 1)
    },
  ]
}