"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden bg-navy-900 -mt-20">
      {/* Background Video with overlay */}
      <video 
        autoPlay 
        loop 
        muted 
        playsInline 
        className="absolute inset-0 z-0 w-full h-full object-cover"
      >
        <source src="https://videos.pexels.com/video-files/5608051/5608051-uhd_2160_4096_25fps.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 z-10 bg-navy-900/80 backdrop-blur-[2px]" />

      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20 md:pt-0">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl mx-auto"
        >
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="flex items-center justify-center gap-3 mb-6"
          >
            <div className="h-[1px] w-12 bg-gold-500"></div>
            <span className="text-gold-500 font-medium tracking-widest text-sm uppercase">Premier Law Firm</span>
            <div className="h-[1px] w-12 bg-gold-500"></div>
          </motion.div>

          <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-6 leading-tight">
            Excellence in <br className="hidden md:block" /> 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-400 to-gold-600">
              Corporate & Legal
            </span> Solutions
          </h1>
          
          <p className="text-lg md:text-xl text-slate-300 mb-10 max-w-2xl mx-auto font-light leading-relaxed">
            Simplifying complexities and providing expert guidance to empower corporate entities, businesses, and startups to navigate the evolving legal landscape.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact" className="group w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-medium rounded-md text-navy-900 bg-gold-500 hover:bg-gold-400 transition-all duration-300 shadow-lg hover:shadow-gold-500/25">
              Get Expert Counsel
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link href="/practice-areas" className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 border border-slate-300 text-base font-medium rounded-md text-white hover:bg-white/10 transition-all duration-300">
              Explore Practice Areas
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-20 hidden md:flex flex-col items-center"
      >
        <span className="text-slate-400 text-[10px] tracking-widest uppercase mb-2">Scroll</span>
        <div className="w-[1px] h-16 bg-slate-600 relative overflow-hidden">
          <motion.div 
            className="w-full h-1/2 bg-gold-500"
            animate={{ 
              y: [0, 64],
            }}
            transition={{ 
              repeat: Infinity, 
              duration: 1.5,
              ease: "linear",
            }}
          />
        </div>
      </motion.div>
    </section>
  );
}
