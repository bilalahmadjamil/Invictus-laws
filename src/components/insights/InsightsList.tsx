'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Clock, FileText, Search, Calendar } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import { urlFor } from '@/sanity/lib/image';

export interface InsightItem {
  _id?: string;
  title: string;
  slug: string;
  excerpt?: string;
  category: string;
  publishedAt?: string;
  date?: string;
  readTime?: string;
  mainImage?: any;
}

export default function InsightsList({ initialArticles }: { initialArticles: InsightItem[] }) {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  // Dynamically derive categories from all available articles
  const categories = useMemo(() => {
    const unique = Array.from(new Set(initialArticles.map((a) => a.category).filter(Boolean)));
    return ['All', ...unique];
  }, [initialArticles]);

  const filteredInsights = useMemo(() => {
    return initialArticles.filter((article) => {
      const matchesCategory = activeCategory === 'All' || article.category === activeCategory;
      const titleMatch = article.title.toLowerCase().includes(searchQuery.toLowerCase());
      const excerptMatch = (article.excerpt || '').toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && (titleMatch || excerptMatch);
    });
  }, [initialArticles, activeCategory, searchQuery]);

  return (
    <div className="pt-20 pb-24 bg-beige-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">
        {/* Header Section */}
        <div className="mb-16">
          <SectionHeading
            title="Legal Insights & Blog"
            subtitle="Expert Perspectives"
            centered={false}
          />
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 -mt-6">
            <p className="text-maroon-900/70 text-lg leading-relaxed font-light max-w-2xl">
              Our legal experts share specialized knowledge and strategic foresight to help you navigate the complexities of Pakistani and International law.
            </p>

            {/* Search Bar */}
            <div className="relative group max-w-md w-full">
              <input
                type="text"
                placeholder="Search legal articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-white border border-maroon-100 rounded-2xl shadow-sm focus:ring-2 focus:ring-maroon-900/20 focus:border-maroon-900 outline-none transition-all group-hover:border-maroon-200"
              />
              <Search
                className="absolute left-4 top-1/2 -translate-y-1/2 text-maroon-900/40 group-hover:text-maroon-900 transition-colors"
                size={20}
              />
            </div>
          </div>
        </div>

        {/* Categories Filter Bar */}
        <div className="flex flex-wrap gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={
                activeCategory === cat
                  ? 'px-6 py-2 rounded-full text-sm font-bold transition-all bg-maroon-950 text-white shadow-lg shadow-maroon-900/20'
                  : 'px-6 py-2 rounded-full text-sm font-bold transition-all bg-white text-maroon-900 border border-maroon-100 hover:bg-beige-50 hover:border-maroon-200'
              }
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Articles Grid */}
        {filteredInsights.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence mode="popLayout">
              {filteredInsights.map((article) => {
                const formattedDate = article.publishedAt
                  ? new Date(article.publishedAt).toLocaleDateString('en-US', {
                      month: 'long',
                      day: 'numeric',
                      year: 'numeric',
                    })
                  : article.date || 'Recent';

                return (
                  <motion.div
                    layout
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    key={article.slug || article.title}
                    className="bg-white rounded-3xl overflow-hidden border border-maroon-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group flex flex-col"
                  >
                    <div className="relative h-56 w-full overflow-hidden bg-maroon-950">
                      {article.mainImage ? (
                        <Image
                          src={urlFor(article.mainImage).width(600).height(400).url()}
                          alt={article.title}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      ) : (
                        <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-maroon-950 to-maroon-900">
                          <FileText className="w-16 h-16 text-white/20" />
                        </div>
                      )}
                      <div className="absolute inset-0 bg-maroon-950/20 mix-blend-multiply transition-opacity group-hover:opacity-40"></div>
                      <div className="absolute top-4 left-4 z-10">
                        <span className="bg-gold-500 text-maroon-950 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider shadow-md">
                          {article.category}
                        </span>
                      </div>
                    </div>

                    <div className="p-8 flex flex-col flex-grow">
                      <div className="flex items-center gap-3 text-xs font-bold text-maroon-900/50 uppercase tracking-widest mb-4">
                        {article.readTime && (
                          <>
                            <span className="flex items-center gap-1">
                              <Clock size={13} className="text-gold-600" /> {article.readTime}
                            </span>
                            <span>&bull;</span>
                          </>
                        )}
                        <span className="flex items-center gap-1">
                          <Calendar size={13} className="text-gold-600" /> {formattedDate}
                        </span>
                      </div>

                      <h3 className="text-xl font-bold text-maroon-950 font-serif mb-4 leading-tight group-hover:text-gold-600 transition-colors">
                        {article.title}
                      </h3>

                      <p className="text-slate-600 font-light text-sm leading-relaxed mb-8 flex-grow">
                        {article.excerpt}
                      </p>

                      <Link
                        href={'/insights/' + article.slug}
                        className="inline-flex items-center text-maroon-900 text-sm font-bold hover:text-gold-600 transition-colors group/link mt-auto pt-4 border-t border-slate-100"
                      >
                        Read Full Article
                        <ArrowRight className="ml-2 w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>
        ) : (
          <div className="text-center py-20 bg-white/60 rounded-[40px] border border-dashed border-maroon-200">
            <Search className="mx-auto h-12 w-12 text-maroon-900/20 mb-4" />
            <h3 className="text-xl font-bold text-maroon-950 mb-2">No matching insights found</h3>
            <p className="text-maroon-900/60 font-light">Try adjusting your filters or search keywords.</p>
          </div>
        )}
      </div>
    </div>
  );
}
