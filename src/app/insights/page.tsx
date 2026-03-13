"use client";

import { useState, useMemo } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Clock, FileText, Search } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';

const insights = [
  {
    title: "Procedure for Registration of Copyright in Pakistan",
    excerpt: "A comprehensive guide on the legal protection provided for original work of authorship under the Copyright Rules 1967.",
    category: "Legal Guides",
    date: "March 13, 2026",
    readTime: "8 min read",
    slug: "copyright-registration",
    image: "/practice/IntellectualProperty.jpg"
  },
  {
    title: "Procedure for Registration of Society in Punjab",
    excerpt: "Essential requirements and online application steps for forming a society under the Registration Act 1860.",
    category: "Corporate",
    date: "March 13, 2026",
    readTime: "6 min read",
    slug: "society-registration-punjab"
  }
];

export default function InsightsPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  // Dynamically derive categories from available articles
  const categories = useMemo(() => {
    const unique = Array.from(new Set(insights.map(a => a.category)));
    return ["All", ...unique];
  }, []);

  const filteredInsights = useMemo(() => {
    return insights.filter(article => {
      const matchesCategory = activeCategory === "All" || article.category === activeCategory;
      const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                           article.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

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
                placeholder="Search articles..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-white border border-maroon-100 rounded-2xl shadow-sm focus:ring-2 focus:ring-maroon-900/20 focus:border-maroon-900 outline-none transition-all group-hover:border-maroon-200"
              />
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-maroon-900/40 group-hover:text-maroon-900 transition-colors" size={20} />
            </div>
          </div>
        </div>

        {/* Categories Bar */}
        <div className="flex flex-wrap gap-3 mb-12">
          {categories.map((cat) => (
            <button 
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2 rounded-full text-sm font-bold transition-all ${
                activeCategory === cat 
                ? "bg-maroon-950 text-white shadow-lg shadow-maroon-900/20" 
                : "bg-white text-maroon-900 border border-maroon-100 hover:bg-beige-50 hover:border-maroon-200"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Insights Grid */}
        {filteredInsights.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence mode="popLayout">
              {filteredInsights.map((article) => (
                <motion.div 
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  key={article.title}
                  className="bg-white rounded-3xl overflow-hidden border border-maroon-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group flex flex-col"
                >
                  <div className="relative h-56 w-full overflow-hidden bg-maroon-950">
                    <div className="absolute inset-0 bg-maroon-900/40 mix-blend-multiply transition-opacity group-hover:opacity-60"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <FileText className="w-16 h-16 text-white/20" />
                    </div>
                    <div className="absolute top-4 left-4">
                      <span className="bg-gold-500 text-maroon-950 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider">
                        {article.category}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-8 flex flex-col flex-grow">
                    <div className="flex items-center gap-4 text-xs font-bold text-maroon-900/40 uppercase tracking-widest mb-4">
                      <span className="flex items-center gap-1">
                        <Clock size={14} /> {article.readTime}
                      </span>
                      <span>•</span>
                      <span>{article.date}</span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-maroon-950 font-serif mb-4 leading-tight group-hover:text-gold-600 transition-colors">
                      {article.title}
                    </h3>
                    
                    <p className="text-maroon-900/60 font-light text-sm leading-relaxed mb-8 flex-grow">
                      {article.excerpt}
                    </p>
                    
                    <Link 
                      href={`/insights/${article.slug}`} 
                      className="inline-flex items-center text-maroon-900 text-sm font-bold hover:text-gold-600 transition-colors group/link"
                    >
                      Read Full Article 
                      <ArrowRight className="ml-2 w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        ) : (
          <div className="text-center py-20 bg-white/50 rounded-[40px] border border-dashed border-maroon-200">
            <Search className="mx-auto h-12 w-12 text-maroon-900/20 mb-4" />
            <h3 className="text-xl font-bold text-maroon-950 mb-2">No results found</h3>
            <p className="text-maroon-900/60">Try adjusting your filters or search terms.</p>
          </div>
        )}

      </div>
    </div>
  );
}
