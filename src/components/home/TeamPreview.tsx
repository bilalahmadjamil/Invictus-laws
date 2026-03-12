"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function TeamPreview() {
  const team = [
    {
      name: "Haider Mahmood",
      role: "Managing Partner",
      desc: "An expert in constitutional, corporate, commercial, and election laws. Advises government authorities and excels in alternative dispute resolution.",
      initials: "HM",
      image: "/profiles/HaiderMahmood.png"
    },
    {
      name: "Khirad Ali",
      role: "Partner",
      desc: "LL.M. from Cardiff University. Robust background in commercial, civil, and corporate laws, seamlessly handling high-stakes trials and appellate courts.",
      initials: "KA",
      image: "/profiles/KhiradAli.png"
    },
    {
      name: "Muhammad Burhan",
      role: "Partner",
      desc: "LL.M. in International Trade & Maritime Law. Trusted advisor to domestic and international clients in commercial law and banking.",
      initials: "MB",
      image: "/profiles/MuhammadBurhan.png"
    }
  ];

  return (
    <section className="py-24 bg-slate-50 relative">
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
            <span className="text-navy-900 font-bold tracking-wider text-sm uppercase">Our Team</span>
            <div className="h-[2px] w-12 bg-gold-500"></div>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl font-serif font-bold text-navy-900 mb-6 leading-tight"
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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {team.map((member, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="bg-white rounded-2xl p-8 border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex items-center gap-6 mb-6">
                <div className="w-20 h-20 shrink-0 rounded-full bg-navy-900 flex items-center justify-center text-gold-500 font-serif text-2xl font-bold shadow-md overflow-hidden relative group-hover:ring-4 group-hover:ring-gold-500/20 transition-all duration-300">
                  {member.image ? (
                    <Image 
                      src={member.image} 
                      alt={member.name} 
                      width={80}
                      height={80}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-navy-900 text-gold-500">
                      {member.initials}
                    </div>
                  )}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-navy-900 font-serif">{member.name}</h3>
                  <p className="text-gold-600 text-sm font-medium tracking-wide uppercase">{member.role}</p>
                </div>
              </div>
              <p className="text-slate-500 font-light text-sm leading-relaxed mb-8">{member.desc}</p>
              
              <Link href="/team" className="inline-flex items-center text-navy-900 text-sm font-medium hover:text-gold-600 transition-colors group">
                Read Full Profile <ArrowRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link href="/team" className="inline-flex items-center justify-center px-8 py-4 border-2 border-navy-900 text-base font-medium rounded-md text-navy-900 bg-transparent hover:bg-navy-900 hover:text-white transition-all duration-300">
            View Complete Team
          </Link>
        </div>

      </div>
    </section>
  );
}
