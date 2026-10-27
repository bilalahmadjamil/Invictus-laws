import { MetadataRoute } from 'next';
import { client } from '@/sanity/lib/client';
import { allArticleSlugsQuery } from '@/sanity/lib/queries';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://iclc.com.pk';

  let dynamicArticles: MetadataRoute.Sitemap = [];
  try {
    const articles = await client.fetch(allArticleSlugsQuery);
    if (articles && articles.length > 0) {
      dynamicArticles = articles.map((art: { slug: string; _updatedAt?: string }) => ({
        url: `${baseUrl}/insights/${art.slug}`,
        lastModified: art._updatedAt ? new Date(art._updatedAt) : new Date(),
        changeFrequency: 'weekly' as const,
        priority: 0.8,
      }));
    }
  } catch (error) {
    console.error('Error generating dynamic sitemap from Sanity:', error);
  }

  // Maintain legacy fallback URLs if not yet created in Sanity
  const hasCopyright = dynamicArticles.some((a) => a.url.includes('copyright-registration'));
  const hasSociety = dynamicArticles.some((a) => a.url.includes('society-registration-punjab'));

  const staticArticles: MetadataRoute.Sitemap = [
    ...(!hasCopyright
      ? [
          {
            url: `${baseUrl}/insights/copyright-registration`,
            lastModified: new Date(),
            changeFrequency: 'monthly' as const,
            priority: 0.8,
          },
        ]
      : []),
    ...(!hasSociety
      ? [
          {
            url: `${baseUrl}/insights/society-registration-punjab`,
            lastModified: new Date(),
            changeFrequency: 'monthly' as const,
            priority: 0.8,
          },
        ]
      : []),
  ];

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: `${baseUrl}/practice-areas`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/team`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/insights`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/careers`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/privacy-policy`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${baseUrl}/terms-of-service`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    ...dynamicArticles,
    ...staticArticles,
  ];
}
