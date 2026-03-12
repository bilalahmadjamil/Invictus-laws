"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, PhoneCall } from "lucide-react";

export default function CallToAction() {
  return (
    <section className="relative py-24 bg-gold-500 overflow-hidden">
      <div className="absolute inset-0 bg-navy-900/5 mix-blend-multiply"></div>
      
      {/* Decorative patterns */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 rounded-full bg-white/10 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-white/10 blur-3xl"></div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-navy-900">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <PhoneCall className="w-16 h-16 mx-auto mb-6 text-navy-900 opacity-80" />
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
            Ready to Discuss Your Legal Needs?
          </h2>
          <p className="text-lg md:text-xl font-medium opacity-90 mb-10 max-w-2xl mx-auto">
            Contact us today to schedule a consultation with one of our experienced partners in Lahore or Islamabad.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact" className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 border-2 border-navy-900 text-base font-bold rounded-md text-white bg-navy-900 hover:bg-navy-800 transition-all duration-300 shadow-xl group">
              Get Started
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link href="tel:03134891684" className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 border-2 border-navy-900 text-base font-bold rounded-md text-navy-900 bg-transparent hover:bg-navy-900/10 transition-all duration-300">
              Call Lahore Office
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
