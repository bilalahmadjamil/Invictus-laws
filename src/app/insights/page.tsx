import { Metadata } from 'next';
import { client } from '@/sanity/lib/client';
import { articlesQuery } from '@/sanity/lib/queries';
import InsightsList, { InsightItem } from '@/components/insights/InsightsList';

export const revalidate = 60; // Auto revalidate from CMS every 60s

export const metadata: Metadata = {
  title: 'Legal Insights & Blog | ICLC',
  description: 'Expert legal analyses, guides on Pakistani corporate laws, copyright procedures, and regulatory frameworks.',
  openGraph: {
    title: 'Legal Insights & Blog | Invictus Corporate & Legal Consultants',
    description: 'Explore comprehensive legal guides, procedural steps, and corporate compliance insights written by ICLC advocates.',
    url: 'https://iclc.com.pk/insights',
  },
};

const fallbackArticles: InsightItem[] = [
  {
    title: 'Procedure for Registration of Copyright in Pakistan',
    excerpt: 'A comprehensive guide on the legal protection provided for original work of authorship under the Copyright Rules 1967.',
    category: 'Legal Guides',
    date: 'March 13, 2026',
    readTime: '8 min read',
    slug: 'copyright-registration',
  },
  {
    title: 'Procedure for Registration of Society in Punjab',
    excerpt: 'Essential requirements and online application steps for forming a society under the Registration Act 1860.',
    category: 'Corporate',
    date: 'March 13, 2026',
    readTime: '6 min read',
    slug: 'society-registration-punjab',
  },
];

export default async function InsightsPage() {
  let articles: InsightItem[] = [];

  try {
    const sanityArticles = await client.fetch(articlesQuery);
    if (sanityArticles && sanityArticles.length > 0) {
      articles = sanityArticles;
      
      // Preserve any fallback articles whose slug is not yet in Sanity
      fallbackArticles.forEach((fb) => {
        if (!articles.some((a) => a.slug === fb.slug)) {
          articles.push(fb);
        }
      });
    } else {
      articles = fallbackArticles;
    }
  } catch (error) {
    console.warn('Sanity fetch returned empty or failed, using fallback articles:', error);
    articles = fallbackArticles;
  }

  return <InsightsList initialArticles={articles} />;
}
