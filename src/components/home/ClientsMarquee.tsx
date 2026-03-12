"use client";

import { motion } from "framer-motion";

export default function ClientsMarquee() {
  // Using text arrays to simulate logos
  const clients = [
    "Depilex Sargodha",
    "EXIM Bank",
    "Marina Event Complex",
    "The Alphas Digital",
    "Khel Court",
    "Lighting Pioneer",
    "Script V",
    "Vanguards Books Pvt Ltd",
    "National Horticultural Society",
    "Pakistan Red Crescent Society",
    "PMIC"
  ];
  
  // Duplicate the array to create a seamless infinite loop
  const duplicatedClients = [...clients, ...clients, ...clients];

  return (
    <section className="py-20 bg-white border-y border-slate-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10 text-center">
        <h2 className="text-xl md:text-2xl font-serif font-bold text-navy-900 mb-2">Trusted By Leading Organizations</h2>
        <div className="w-16 h-[2px] bg-gold-500 mx-auto"></div>
      </div>

      <div className="relative flex overflow-x-hidden pt-4 pb-4">
        <motion.div
          className="flex whitespace-nowrap space-x-16 px-8 items-center"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 40,
          }}
        >
          {duplicatedClients.map((client, index) => (
            <div 
              key={index}
              className="inline-flex items-center justify-center text-xl font-bold font-serif min-w-max text-slate-300 group transition-all duration-300 pointer-events-none"
            >
              <span className="opacity-60 grayscale transition-all duration-300">
                {client}
              </span>
            </div>
          ))}
        </motion.div>
        
        {/* Gradient Overlays for smooth fade out on edges */}
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>
      </div>
    </section>
  );
}
