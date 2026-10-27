"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Clock, Scale, Calendar } from "lucide-react";
import { urlFor } from "@/sanity/lib/image";

export interface PreviewInsight {
  _id?: string;
  title: string;
  category: string;
  excerpt?: string;
  readTime?: string;
  slug: string;
  mainImage?: any;
  publishedAt?: string;
  author?: string;
}

const fallbackInsights: PreviewInsight[] = [
  {
    title: "Procedure for Registration of Copyright in Pakistan",
    category: "Legal Guides",
    excerpt: "A comprehensive guide on the legal protection provided for original work of authorship under the Copyright Rules 1967.",
    readTime: "8 min read",
    slug: "copyright-registration",
  },
  {
    title: "Procedure for Registration of Society in Punjab",
    category: "Corporate",
    excerpt: "Essential requirements and online application steps for forming a society under the Registration Act 1860.",
    readTime: "6 min read",
    slug: "society-registration-punjab",
  }
];

export default function InsightsPreview({ sanityInsights }: { sanityInsights?: PreviewInsight[] }) {
  // Show up to 3 featured articles on the homepage
  const displayInsights = (sanityInsights && sanityInsights.length > 0 ? sanityInsights : fallbackInsights).slice(0, 3);

  // Dynamic grid layout matching the number of featured items
  const gridClass =
    displayInsights.length === 1
      ? "grid-cols-1 max-w-xl mx-auto"
      : displayInsights.length === 2
        ? "grid-cols-1 md:grid-cols-2 max-w-5xl mx-auto"
        : "grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto";

  return (
    <section className="py-24 bg-beige-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 mb-6"
            >
              <div className="h-[2px] w-12 bg-gold-500"></div>
              <span className="text-maroon-900 font-bold tracking-wider text-sm uppercase">Legal Insights</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-maroon-950 leading-tight"
            >
              Expert Perspective <br />
              <span className="italic text-gold-600">for Modern Challenges</span>
            </motion.h2>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="w-full md:w-auto text-center"
          >
            <Link
              href="/insights"
              className="inline-flex items-center justify-center w-full sm:w-auto px-8 py-4 bg-maroon-950 text-white font-bold rounded-xl hover:bg-maroon-900 transition-all shadow-xl shadow-maroon-900/10 group text-sm sm:text-base"
            >
              Explore All Insights
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>

        {/* Dynamic Cards Grid */}
        <div className={`grid ${gridClass} gap-8 items-stretch`}>
          {displayInsights.map((insight, idx) => {
            const formattedDate = insight.publishedAt
              ? new Date(insight.publishedAt).toLocaleDateString('en-US', {
                  month: 'short',
                  day: 'numeric',
                  year: 'numeric',
                })
              : null;

            return (
              <motion.article
                key={insight.slug || idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.15 + idx * 0.1 }}
                className="group relative flex flex-col bg-white rounded-3xl overflow-hidden border border-maroon-100 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 h-full"
              >
                {/* Cover Image Container */}
                <div className="relative h-56 sm:h-64 w-full overflow-hidden bg-maroon-950">
                  {insight.mainImage ? (
                    <Image
                      src={urlFor(insight.mainImage).width(720).height(450).auto('format').fit('crop').url()}
                      alt={insight.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      loading="lazy"
                    />
                  ) : (
                    <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-maroon-950 via-maroon-900 to-maroon-950 text-gold-500/40 p-6 text-center relative overflow-hidden">
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(214,158,46,0.08)_0%,transparent_70%)]"></div>
                      <Scale size={48} className="mb-2 text-gold-500/60 relative z-10 transition-transform group-hover:scale-110 duration-300" />
                      <span className="text-xs uppercase tracking-widest text-beige-100/50 font-serif relative z-10">
                        Invictus Legal Insights
                      </span>
                    </div>
                  )}

                  {/* Floating Category & Read Time Badges */}
                  <div className="absolute inset-x-4 top-4 flex items-center justify-between z-10 pointer-events-none">
                    <span className="bg-maroon-950/85 backdrop-blur-md text-gold-400 px-3.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest border border-gold-500/30 shadow-md">
                      {insight.category}
                    </span>
                    <span className="bg-black/55 backdrop-blur-md text-white/90 px-3 py-1 rounded-full text-xs flex items-center gap-1.5 shadow-md font-medium">
                      <Clock size={12} className="text-gold-400" />
                      {insight.readTime || "5 min read"}
                    </span>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6 sm:p-8 flex flex-col flex-grow">
                  {formattedDate && (
                    <div className="flex items-center text-xs text-maroon-900/50 font-medium mb-3 gap-1.5">
                      <Calendar size={13} className="text-gold-600" />
                      <span>{formattedDate}</span>
                    </div>
                  )}

                  <h3 className="font-serif font-bold text-maroon-950 mb-3 leading-snug group-hover:text-gold-600 transition-colors text-xl sm:text-2xl line-clamp-2">
                    <Link href={`/insights/${insight.slug}`}>
                      {insight.title}
                    </Link>
                  </h3>

                  <p className="text-slate-600 font-light leading-relaxed mb-6 text-sm line-clamp-3 flex-grow">
                    {insight.excerpt}
                  </p>

                  {/* Card Footer Link */}
                  <div className="pt-5 border-t border-maroon-100/60 mt-auto">
                    <Link
                      href={`/insights/${insight.slug}`}
                      className="inline-flex items-center text-maroon-950 font-bold group/link text-sm"
                    >
                      <span className="relative">
                        Read Full Analysis
                        <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-gold-500 transition-all duration-300 group-hover/link:w-full"></span>
                      </span>
                      <ArrowRight className="ml-2 w-4 h-4 text-gold-600 group-hover/link:translate-x-1.5 transition-transform" />
                    </Link>
                  </div>
                </div>

              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
