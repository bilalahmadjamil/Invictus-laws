"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";

export interface ClientOrganizationItem {
  _id?: string;
  name: string;
  logo?: any;
  website?: string;
  order?: number;
}

const fallbackClients: ClientOrganizationItem[] = [
  { name: "Depilex Sargodha" },
  { name: "EXIM Bank" },
  { name: "Marina Event Complex" },
  { name: "The Alphas Digital" },
  { name: "Khel Court" },
  { name: "Lighting Pioneer" },
  { name: "Script V" },
  { name: "Vanguards Books Pvt Ltd" },
  { name: "National Horticultural Society" },
  { name: "Pakistan Red Crescent Society" },
  { name: "PMIC" }
];

export default function ClientsMarquee({ sanityClients }: { sanityClients?: ClientOrganizationItem[] }) {
  const clients = (sanityClients && sanityClients.length > 0) ? sanityClients : fallbackClients;
  
  // Duplicate array 3 times to ensure a seamless, uninterrupted infinite loop
  const duplicatedClients = [...clients, ...clients, ...clients];

  return (
    <section className="py-16 md:py-20 bg-white border-y border-slate-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10 text-center">
        <h2 className="text-xl md:text-2xl font-serif font-bold text-maroon-950 mb-2">
          Trusted By Leading Organizations
        </h2>
        <div className="w-16 h-[2px] bg-gold-500 mx-auto"></div>
      </div>

      <div className="relative flex overflow-x-hidden py-4 group/marquee">
        <motion.div
          className="flex whitespace-nowrap space-x-14 sm:space-x-20 md:space-x-24 px-8 items-center"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 48, // Balanced, smooth scroll speed
          }}
        >
          {duplicatedClients.map((client, index) => {
            const hasLogo = client.logo && client.logo.asset;

            const content = hasLogo ? (
              // Enlarged logo container with generous width and height for prominent, crisp rendering
              <div className="relative h-16 sm:h-20 md:h-24 w-44 sm:w-56 md:w-64 flex items-center justify-center shrink-0 px-2 group/logo">
                <Image
                  src={urlFor(client.logo).height(200).auto('format').fit('max').url()}
                  alt={client.name}
                  fill
                  sizes="(max-width: 768px) 180px, 260px"
                  className="object-contain filter grayscale opacity-75 group-hover/logo:grayscale-0 group-hover/logo:opacity-100 transition-all duration-300 drop-shadow-sm group-hover/logo:scale-105"
                />
              </div>
            ) : (
              // Refined typography styling for text-only clients
              <div className="inline-flex items-center justify-center text-lg sm:text-xl md:text-2xl font-bold font-serif min-w-max text-maroon-900/55 hover:text-maroon-950 transition-colors duration-300 shrink-0 px-6 py-2 group/item">
                <span className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-gold-500/50 group-hover/item:bg-gold-500 transition-colors shrink-0"></span>
                  <span className="tracking-wide">{client.name}</span>
                </span>
              </div>
            );

            if (client.website) {
              return (
                <a
                  key={index}
                  href={client.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block transition-transform hover:scale-105"
                  title={client.name}
                >
                  {content}
                </a>
              );
            }

            return (
              <div key={index} className="inline-block">
                {content}
              </div>
            );
          })}
        </motion.div>
        
        {/* Gradient Overlays for smooth edge fade */}
        <div className="absolute inset-y-0 left-0 w-24 sm:w-40 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
        <div className="absolute inset-y-0 right-0 w-24 sm:w-40 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>
      </div>
    </section>
  );
}
