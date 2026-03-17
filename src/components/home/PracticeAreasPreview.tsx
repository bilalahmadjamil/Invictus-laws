"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Building2, Gavel, Scale, Shield } from "lucide-react";

export default function PracticeAreasPreview() {
  const practiceAreas = [
    {
      title: "Corporate & Commercial Law",
      description: "Advising businesses on corporate formation, governance, transactions, and compliance, ensuring smooth operations and legal protection.",
      icon: <Building2 className="w-8 h-8 text-gold-500" />,
      link: "/practice-areas#corporate"
    },
    {
      title: "Commercial Litigation",
      description: "Representing businesses in commercial disputes, focusing on protecting your interests while seeking swift and effective resolutions.",
      icon: <Gavel className="w-8 h-8 text-gold-500" />,
      link: "/practice-areas#litigation"
    },
    {
      title: "Cyber Law",
      description: "Comprehensive legal services addressing data privacy, cybersecurity, and digital transactions to safeguard your online presence.",
      icon: <Shield className="w-8 h-8 text-gold-500" />,
      link: "/practice-areas#cyber"
    },
    {
      title: "Intellectual Property (IP)",
      description: "Protecting innovations, inventions, and creative works by securing patents, trademarks, and copyrights.",
      icon: <Scale className="w-8 h-8 text-gold-500" />,
      link: "/practice-areas#ip"
    }
  ];

  return (
    <section className="py-24 bg-maroon-950 border-t border-maroon-900 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="h-[1px] w-12 bg-gold-500"></div>
              <span className="text-gold-500 font-bold tracking-wider text-sm uppercase">What We Do</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-white mb-6 leading-tight">
              Comprehensive Legal <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-400 to-gold-600">Expertise</span>
            </h2>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Link href="/practice-areas" className="inline-flex items-center text-gold-400 hover:text-gold-300 font-medium tracking-wide group transition-colors">
              View All 13 Practice Areas 
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
 
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {practiceAreas.map((area, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-maroon-900/40 backdrop-blur-sm border border-maroon-800 p-8 rounded-2xl hover:bg-maroon-900/60 hover:border-gold-500/50 transition-all duration-300 group cursor-pointer h-full flex flex-col"
            >
              <div className="mb-6 bg-maroon-950 border border-maroon-900 p-4 rounded-xl inline-block w-16 h-16 shadow-inner group-hover:scale-110 transition-transform duration-300 group-hover:bg-maroon-800">
                {area.icon}
              </div>
              <h3 className="text-xl font-bold font-serif text-white mb-4 group-hover:text-gold-400 transition-colors">{area.title}</h3>
              <p className="text-beige-50/70 font-light text-sm leading-relaxed mb-6 flex-grow">{area.description}</p>
              
              <Link href={area.link} className="inline-flex items-center text-gold-500 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 mt-auto">
                Learn more <ArrowRight className="ml-1 w-4 h-4" />
              </Link>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
