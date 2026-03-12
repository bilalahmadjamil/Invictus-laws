"use client";

import { motion } from "framer-motion";
import { Scale, Users, TrendingUp, ShieldCheck } from "lucide-react";

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.2,
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  const values = [
    {
      icon: <Scale className="h-8 w-8 text-gold-500" />,
      title: "Legal Excellence",
      description: "Delivering top-tier legal support across diverse practice areas with unyielding drive."
    },
    {
      icon: <Users className="h-8 w-8 text-gold-500" />,
      title: "Client-Centric",
      description: "Tailored and insightful legal solutions providing assurance of a trusted legal ally."
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-gold-500" />,
      title: "Strategic Advisory",
      description: "Pragmatic and results-driven solutions with a commercially astute perspective."
    },
    {
      icon: <ShieldCheck className="h-8 w-8 text-gold-500" />,
      title: "Integrity",
      description: "Championing client interests with intellect, steadfast integrity, and resilience."
    }
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="h-[2px] w-12 bg-gold-500"></div>
              <span className="text-navy-900 font-bold tracking-wider text-sm uppercase">Our Purpose</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-navy-900 mb-6 leading-tight">
              Simplifying <span className="text-gold-600">Legal Complexities</span> for Your Success
            </h2>
            
            <div className="space-y-6 text-slate-600 text-lg leading-relaxed font-light">
              <p>
                At INVICTUS Corporate & Legal Consultants, our mission is to offer comprehensive and accessible legal solutions under one roof. We cater to the diverse needs of corporate entities, overseas Pakistanis, small businesses, and startups.
              </p>
              <p>
                With a team of highly skilled and dedicated professionals, we are committed to providing expert guidance to help our clients navigate the evolving legal landscape with absolute confidence and strategic foresight.
              </p>
            </div>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-8"
          >
            {values.map((value, index) => (
              <motion.div 
                key={index} 
                variants={itemVariants}
                className="bg-slate-50 p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md hover:border-gold-200 transition-all duration-300 group"
              >
                <div className="p-4 bg-white rounded-xl inline-block shadow-sm group-hover:scale-110 group-hover:bg-gold-50 transition-all duration-300 mb-6">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold font-serif text-navy-900 mb-3">{value.title}</h3>
                <p className="text-slate-600 font-light text-sm leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
