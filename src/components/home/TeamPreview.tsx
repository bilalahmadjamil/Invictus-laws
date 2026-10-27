"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { urlFor } from "@/sanity/lib/image";

export interface PreviewMember {
  _id?: string;
  name: string;
  role: string;
  qualifications?: string;
  bio?: string;
  desc?: string;
  initials?: string;
  image?: any;
  order?: number;
  featured?: boolean;
  objectPosition?: string;
}

const fallbackTeam: PreviewMember[] = [
  {
    name: "Haider Mahmood",
    role: "Managing Partner",
    desc: "An expert in constitutional, corporate, commercial, and election laws. Advises government authorities and excels in alternative dispute resolution.",
    initials: "HM",
    image: "/profiles/HaiderMahmood.png",
    objectPosition: "top"
  },
  {
    name: "Ms. Shafia Imran Lati",
    role: "Executive Partner",
    desc: "Accomplished in criminal law, cyber crime, and human rights. Secured prominent freedom of expression judgments and resolved 100+ cyber crime cases.",
    initials: "SIL",
    image: "/profiles/ShafiaImranLati.png"
  },
  {
    name: "Jhanzaib Ahmad Ranjha",
    role: "Partner / Co-Founder",
    desc: "Deep legal acumen in litigation across trials and High Courts, handling family law, civil cases, partition disputes, and banking cases.",
    initials: "JAR",
    image: "/profiles/JhanzaibAhmad.jpeg"
  }
];

export default function TeamPreview({ sanityTeam }: { sanityTeam?: PreviewMember[] }) {
  const team = (sanityTeam && sanityTeam.length > 0) ? sanityTeam : fallbackTeam;

  const getInitials = (name: string) => {
    return name
      .replace(/^(Mr.|Ms.|Mrs.|Dr.)s+/i, '')
      .split(' ')
      .map((n) => n[0])
      .join('')
      .slice(0, 3)
      .toUpperCase();
  };

  const gridClass =
    team.length === 1
      ? "grid-cols-1 max-w-md mx-auto"
      : team.length === 2
        ? "grid-cols-1 md:grid-cols-2 max-w-4xl mx-auto"
        : "grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto";

  return (
    <section className="py-24 bg-beige-50 relative border-y border-maroon-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-center gap-3 mb-6"
          >
            <div className="h-[2px] w-12 bg-gold-500"></div>
            <span className="text-maroon-900 font-bold tracking-wider text-sm uppercase">Our Team</span>
            <div className="h-[2px] w-12 bg-gold-500"></div>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-maroon-950 mb-6 leading-tight"
          >
            Skilled Professionals <br/>
            Dedicated to <span className="italic text-gold-600">Your Success</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-slate-600 text-lg leading-relaxed font-light"
          >
            Our partners and associates bring decades of combined experience from leading firms and top universities, delivering top-tier legal support.
          </motion.p>
        </div>

        <div className={`grid ${gridClass} gap-8`}>
          {team.map((member, i) => {
            let imageSrc: string | null = null;
            if (member.image) {
              if (typeof member.image === 'string') {
                imageSrc = member.image;
              } else if (member.image.asset) {
                imageSrc = urlFor(member.image).width(200).height(200).auto('format').fit('crop').url();
              }
            }
            const initials = member.initials || getInitials(member.name);
            const bioText = member.desc || member.bio || "";

            return (
              <motion.div
                key={member.name || i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="bg-white rounded-3xl p-8 border border-maroon-100 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col h-full group"
              >
                <div className="flex items-center gap-6 mb-6">
                  <div className="w-20 h-20 shrink-0 rounded-full bg-maroon-950 flex items-center justify-center text-gold-500 font-serif text-2xl font-bold shadow-md overflow-hidden relative group-hover:ring-4 group-hover:ring-gold-500/30 transition-all duration-300">
                    {imageSrc ? (
                      <Image 
                        src={imageSrc} 
                        alt={member.name} 
                        width={80}
                        height={80}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        style={{ objectPosition: member.objectPosition || "top" }}
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-maroon-950 text-gold-500 font-serif">
                        {initials}
                      </div>
                    )}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-maroon-950 font-serif leading-tight group-hover:text-gold-600 transition-colors">
                      {member.name}
                    </h3>
                    <p className="text-gold-600 text-xs font-bold tracking-wider uppercase mt-1">
                      {member.role}
                    </p>
                  </div>
                </div>

                <p className="text-slate-600 font-light text-sm leading-relaxed mb-8 flex-grow line-clamp-4">
                  {bioText}
                </p>
                
                <Link 
                  href="/team" 
                  className="inline-flex items-center text-maroon-950 text-sm font-bold hover:text-gold-600 transition-colors group/link mt-auto pt-4 border-t border-maroon-100/70"
                >
                  <span>Read Full Profile</span>
                  <ArrowRight className="ml-1.5 w-4 h-4 text-gold-600 group-hover/link:translate-x-1.5 transition-transform" />
                </Link>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <Link 
            href="/team" 
            className="inline-flex items-center justify-center px-8 py-4 border-2 border-maroon-950 text-base font-bold rounded-xl text-maroon-950 bg-transparent hover:bg-maroon-950 hover:text-white transition-all duration-300 shadow-sm hover:shadow-md"
          >
            View Complete Team
          </Link>
        </div>

      </div>
    </section>
  );
}
