"use client";

import { motion } from "framer-motion";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
}

export default function SectionHeading({ title, subtitle, centered = true }: SectionHeadingProps) {
  return (
    <div className={`mb-12 ${centered ? "text-center mx-auto max-w-3xl" : "text-left"}`}>
      {subtitle && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className={`flex items-center gap-3 mb-6 ${centered ? "justify-center" : "justify-start"}`}
        >
          <div className="h-[2px] w-12 bg-gold-500"></div>
          <span className="text-maroon-900 font-bold tracking-wider text-sm uppercase">{subtitle}</span>
          <div className="h-[2px] w-12 bg-gold-500"></div>
        </motion.div>
      )}
      
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-maroon-950 mb-6 leading-tight"
      >
        {title}
      </motion.h2>
    </div>
  );
}
