"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Clock, BookOpen, Newspaper } from "lucide-react";

const allInsights = [
  {
    title: "Procedure for Registration of Copyright in Pakistan",
    category: "Legal Guide",
    excerpt: "A comprehensive guide on the legal protection provided for original work of authorship under the Copyright Rules 1967.",
    readTime: "8 min read",
    slug: "copyright-registration",
    icon: <BookOpen className="w-6 h-6" />
  },
  {
    title: "Procedure for Registration of Society in Punjab",
    category: "Corporate",
    excerpt: "Essential requirements and online application steps for forming a society under the Registration Act 1860.",
    readTime: "6 min read",
    slug: "society-registration-punjab",
    icon: <Newspaper className="w-6 h-6" />
  }
];

// Show max 2 on home page
const previewInsights = allInsights.slice(0, 2);

export default function InsightsPreview() {
  const count = previewInsights.length;

  return (
    <section className="py-24 bg-beige-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
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
              className="text-4xl md:text-5xl font-serif font-bold text-maroon-950 leading-tight"
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
          >
            <Link
              href="/insights"
              className="inline-flex items-center px-8 py-4 bg-maroon-950 text-white font-bold rounded-xl hover:bg-maroon-900 transition-all shadow-xl shadow-maroon-900/10 group"
            >
              Explore All Insights
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>

        {/* Uniform Grid — centered when fewer cards */}
        <div className={`flex flex-wrap justify-center gap-8`}>
          {previewInsights.map((insight, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 + idx * 0.1 }}
              className="group relative flex flex-col bg-white rounded-[40px] p-8 md:p-10 border border-maroon-100/50 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500"
              style={{
                width: count === 1 ? 'min(520px, 100%)' : 'min(480px, 100%)',
                flex: `0 0 ${count === 1 ? 'min(520px, 100%)' : 'min(480px, calc(50% - 16px))'}`
              }}
            >
              {/* Category & Time */}
              <div className="flex items-center justify-between mb-8">
                <span className="bg-beige-50 text-maroon-900 px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest border border-maroon-50">
                  {insight.category}
                </span>
                <span className="text-maroon-900/40 text-xs flex items-center gap-1.5 font-medium">
                  <Clock size={14} className="text-gold-600" /> {insight.readTime}
                </span>
              </div>

              {/* Icon */}
              <div className="mb-8 p-4 bg-maroon-950 text-gold-500 rounded-2xl w-fit group-hover:scale-110 group-hover:bg-gold-500 group-hover:text-maroon-950 transition-all duration-300">
                {insight.icon}
              </div>

              {/* Content */}
              <div className="flex-grow">
                <h3 className="font-serif font-bold text-maroon-950 mb-4 leading-tight group-hover:text-gold-600 transition-colors text-xl md:text-2xl">
                  {insight.title}
                </h3>
                <p className="text-maroon-900/60 font-light leading-relaxed mb-8 text-sm">
                  {insight.excerpt}
                </p>
              </div>

              {/* Footer Link */}
              <div className="pt-6 border-t border-maroon-50">
                <Link
                  href={`/insights/${insight.slug}`}
                  className="inline-flex items-center text-maroon-900 font-bold group/link"
                >
                  <span className="relative">
                    Read Full Article
                    <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-gold-500 transition-all duration-300 group-hover/link:w-full"></span>
                  </span>
                  <ArrowRight className="ml-2 w-4 h-4 text-gold-600 group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
