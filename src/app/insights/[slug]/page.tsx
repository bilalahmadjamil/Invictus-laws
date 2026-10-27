import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, Clock, Calendar, Share2, ArrowRight } from 'lucide-react';
import { client } from '@/sanity/lib/client';
import { articleBySlugQuery, allArticleSlugsQuery } from '@/sanity/lib/queries';
import { urlFor } from '@/sanity/lib/image';
import PortableTextRenderer from '@/components/insights/PortableTextRenderer';

// Enable Incremental Static Regeneration (re-checks CMS every 60 seconds)
export const revalidate = 60;

// Dynamic Metadata for Google Search & Social Media
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = await client.fetch(articleBySlugQuery, { slug });

  if (!article) {
    return {
      title: 'Article Not Found | ICLC',
      description: 'The requested legal insight could not be found.',
    };
  }

  const metaTitle = article.seo?.metaTitle || `${article.title} | ICLC`;
  const metaDescription = article.seo?.metaDescription || article.excerpt || 'Legal insight from Invictus Corporate & Legal Consultants.';
  const shareImage = article.mainImage ? urlFor(article.mainImage).width(1200).height(630).url() : undefined;

  return {
    title: metaTitle,
    description: metaDescription,
    keywords: article.seo?.keywords || [article.category, 'Legal Advice Pakistan', 'ICLC Lawyers'],
    openGraph: {
      title: metaTitle,
      description: metaDescription,
      url: `https://iclc.com.pk/insights/${article.slug}`,
      siteName: 'Invictus Corporate & Legal Consultants',
      type: 'article',
      publishedTime: article.publishedAt,
      authors: [article.author || 'ICLC Legal Research Team'],
      images: shareImage ? [{ url: shareImage, width: 1200, height: 630, alt: article.title }] : undefined,
    },
    twitter: {
      card: 'summary_large_image',
      title: metaTitle,
      description: metaDescription,
      images: shareImage ? [shareImage] : undefined,
    },
  };
}

// Generate static params for all existing articles
export async function generateStaticParams() {
  try {
    const articles = await client.fetch(allArticleSlugsQuery);
    return (articles || []).map((art: { slug: string }) => ({
      slug: art.slug,
    }));
  } catch {
    return [];
  }
}

export default async function DynamicArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = await client.fetch(articleBySlugQuery, { slug });

  if (!article) {
    notFound();
  }

  const formattedDate = article.publishedAt
    ? new Date(article.publishedAt).toLocaleDateString('en-US', {
        month: 'long',
        day: 'numeric',
        year: 'numeric',
      })
    : 'Recent';

  // Google JSON-LD Article Schema
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: article.excerpt || article.title,
    datePublished: article.publishedAt,
    author: {
      '@type': 'Organization',
      name: article.author || 'Invictus Corporate & Legal Consultants',
      url: 'https://iclc.com.pk',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Invictus Corporate & Legal Consultants (ICLC)',
      logo: {
        '@type': 'ImageObject',
        url: 'https://iclc.com.pk/logo.jpg',
      },
    },
    image: article.mainImage ? urlFor(article.mainImage).url() : undefined,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://iclc.com.pk/insights/${article.slug}`,
    },
  };

  return (
    <article className="min-h-screen bg-slate-50 pt-24 pb-20">
      {/* Google Structured Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Navigation Breadcrumb */}
        <div className="mb-8">
          <Link
            href="/insights"
            className="inline-flex items-center text-sm font-bold text-maroon-900 hover:text-gold-600 transition-colors group"
          >
            <ArrowLeft className="mr-2 w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to Insights
          </Link>
        </div>

        {/* Article Header */}
        <header className="mb-10 bg-white rounded-3xl p-8 sm:p-12 border border-maroon-100 shadow-sm">
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span className="bg-gold-500 text-maroon-950 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
              {article.category}
            </span>
            <div className="flex items-center gap-2 text-xs font-semibold text-slate-500">
              <Calendar className="w-3.5 h-3.5 text-gold-600" />
              <span>{formattedDate}</span>
            </div>
            {article.readTime && (
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-500">
                <span>&bull;</span>
                <Clock className="w-3.5 h-3.5 text-gold-600" />
                <span>{article.readTime}</span>
              </div>
            )}
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-maroon-950 mb-6 leading-tight">
            {article.title}
          </h1>

          {article.excerpt && (
            <p className="text-lg sm:text-xl text-slate-600 font-light leading-relaxed border-l-2 border-gold-500 pl-4">
              {article.excerpt}
            </p>
          )}

          <div className="mt-8 pt-6 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500 font-medium">
            <span>By <strong className="text-maroon-900 font-bold">{article.author}</strong></span>
            <span>Published by ICLC Legal Advisory</span>
          </div>
        </header>

        {/* Featured Cover Image */}
        {article.mainImage && (
          <div className="mb-12 relative w-full h-[320px] sm:h-[460px] rounded-3xl overflow-hidden shadow-xl border border-maroon-100">
            <Image
              src={urlFor(article.mainImage).width(1200).height(700).url()}
              alt={article.mainImage.alt || article.title}
              fill
              priority
              className="object-cover"
            />
          </div>
        )}

        {/* Body Content */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-maroon-100 shadow-sm mb-12">
          {article.body ? (
            <PortableTextRenderer value={article.body} />
          ) : (
            <p className="text-slate-500 italic">No detailed content provided yet.</p>
          )}
        </div>

        {/* Author & Consultation CTA Footer */}
        <div className="bg-maroon-950 text-white rounded-3xl p-8 sm:p-12 shadow-2xl relative overflow-hidden">
          <div className="relative z-10">
            <div className="inline-block px-3 py-1 rounded-full bg-gold-500/20 text-gold-400 font-bold text-xs uppercase tracking-wider mb-4 border border-gold-500/30">
              Legal Advisory
            </div>
            <h3 className="text-2xl sm:text-3xl font-serif font-bold mb-4">
              Need personalized legal advice regarding this matter?
            </h3>
            <p className="text-beige-50/80 font-light text-base sm:text-lg mb-8 max-w-2xl leading-relaxed">
              Our partners in Lahore and Islamabad specialize in high-stakes corporate compliance, litigation, and regulatory strategy.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-gold-500 text-maroon-950 font-bold rounded-xl hover:bg-gold-400 transition-all shadow-lg font-serif"
              >
                Schedule Legal Consultation
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                href="/insights"
                className="inline-flex items-center justify-center px-8 py-4 border border-white/20 text-white font-medium rounded-xl hover:bg-white/10 transition-colors"
              >
                Browse All Insights
              </Link>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
