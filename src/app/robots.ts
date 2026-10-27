import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/private/', '/studio/', '/api/'],
    },
    sitemap: 'https://iclc.com.pk/sitemap.xml',
  };
}
