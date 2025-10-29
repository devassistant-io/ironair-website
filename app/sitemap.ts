import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://ironairhc.com'
  
  // Main pages
  const routes = [
    '',
    '/about',
    '/services',
    '/contact',
    '/reviews',
    '/financing',
    '/maintenance-plans',
    '/service-area',
    '/blog',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }))

  // Service pages
  const services = [
    '/services/furnace',
    '/services/air-conditioning',
    '/services/heat-pumps',
    '/services/ductless-mini-split',
    '/services/boilers',
    '/services/indoor-air-quality',
    '/services/thermostats',
    '/services/ductwork',
    '/services/commercial-hvac',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  // Blog posts (example - you would dynamically generate these)
  const blogPosts = [
    '/blog/heat-pump-installation-guide',
    '/blog/furnace-repair-signs',
    '/blog/energy-savings-tips',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }))

  return [...routes, ...services, ...blogPosts]
}

