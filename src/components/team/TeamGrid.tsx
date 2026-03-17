"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function TeamGrid() {
  const team = [
    {
      name: "Haider Mahmood",
      role: "Managing Partner",
      qualifications: "Advocate High Court | LL.B. (Hons.) from UMT",
      bio: "An experienced legal professional with a focus on constitutional, corporate, commercial, and election laws. Advises government authorities in regulatory matters, private tech restructuring, and FIDIC contracts. He actively represents clients before High Courts, Special Tribunals, and handles dispute resolution and ADR.",
      initials: "HM",
      location: "Lahore",
      image: "/profiles/HaiderMahmood.png",
      objectPosition: "top"
    },
    {
      name: "Ms. Shafia Imran Lati",
      role: "Executive Partner",
      qualifications: "Advocate High Court | LL.B. from UMT",
      bio: "Accomplished in criminal law, cyber crime, human rights, and workplace harassment. Resolved over 100 cyber crime cases at pre-trial stages and secured prominent freedom of expression judgments.",
      initials: "SIL",
      location: "Lahore",
      image: "/profiles/ShafiaImranLati.png",
      objectPosition: "top"
    },
    {
      name: "Jhanzaib Ahmad Ranjha",
      role: "Partner / Co-Founder",
      qualifications: "Advocate High Court | LL.B. from UMT",
      bio: "Primarily focuses on the litigation wing across trials and High Courts handling family law, civil cases, partition disputes, and banking cases with deep legal acumen.",
      initials: "JAR",
      location: "Lahore",
      image: "/profiles/JhanzaibAhmad.jpeg",
      objectPosition: "top"
    },
    {
      name: "Khirad Ali",
      role: "Partner / Co-Founder",
      qualifications: "Advocate High Court | LL.M. (Distinction) Cardiff University",
      bio: "Robust background in commercial, civil, corporate, and family laws. Regularly represents multinational corporations and banks in high-stakes trials. Expert in corporate matters including groundbreaking litigation on directors' fiduciary duties.",
      initials: "KA",
      location: "Lahore",
      image: "/profiles/KhiradAli.png"
    },
    {
      name: "Muhammad Burhan",
      role: "Partner",
      qualifications: "Advocate High Court | LL.M. Bahria University",
      bio: "Expertise spans corporate and commercial law, banking and finance, transactional law, and International Commercial Arbitration. A trusted advisor for cross-border transactions and regulatory compliance.",
      initials: "MB",
      location: "Islamabad",
      image: "/profiles/MuhammadBurhan.png"
    },
    {
      name: "Mr. Malik Hassan",
      role: "Associate Partner",
      qualifications: "Advocate High Court | LL.M. (UK), BBA",
      bio: "A unique blend of business acumen and legal expertise. Focuses on commercial litigation, regulatory compliance, and M&A. Drives strategic solutions across high-value telecoms disputes.",
      initials: "MH",
      location: "Islamabad",
      image: "/profiles/MalikHassan.jpeg",
      objectPosition: "top"
    },
    /* {
      name: "Ms. Aqsa Javed",
      role: "Associate Partner",
      qualifications: "Advocate High Court",
      bio: "Specializes in cyber laws, tech-facilitated gender-based violence, and privacy breaches. Provides legal counsel for electronic crimes and GDPR compliance.",
      initials: "AJ",
      location: "Lahore"
    }, */
    {
      name: "Muhammad Umer Abbasi",
      role: "Associate Partner",
      qualifications: "Advocate High Court",
      bio: "Expert counsel in civil, criminal, and family law litigation. Extensively practices in Rawalpindi and manages day-to-day operations of the Islamabad Office.",
      initials: "MUA",
      location: "Islamabad",
      image: "/profiles/UmerAbbasi.jpeg"
    },
    {
      name: "Mr. Adeel Hassan Khokhar",
      role: "Senior Associate",
      qualifications: "Advocate High Court",
      bio: "Specializes in banking, civil, criminal, labor, and IP law. Actively handles high-stakes land disputes and provides comprehensive corporate advisory services.",
      initials: "AHK",
      location: "Lahore"
    },
    /* {
      name: "Ms. Minahil Farooq",
      role: "Associate",
      qualifications: "Advocate High Court",
      bio: "A dedicated advocate focused on civil, criminal, and cyber law. Fierce advocate for data protection, victims of harassment, and survivors of domestic violence.",
      initials: "MF",
      location: "Lahore"
    }, */
    {
      name: "Mr. Mohsin Mehmood",
      role: "Associate",
      qualifications: "Advocate High Court",
      bio: "Specializes in commercial law. Drafts complex contracts, MoU's, and vets FIDIC documents. Actively handles commercial litigation for diverse clients.",
      initials: "MM",
      location: "Lahore"
    },
    {
      name: "Mr. Malik Rashid Awan",
      role: "Associate",
      qualifications: "Advocate High Court",
      bio: "Over 4 years of solid expertise in criminal law. Specializes in murder trials, narcotics offenses, and anti-terrorism cases across Punjab.",
      initials: "MRA",
      location: "Lahore",
      image: "/profiles/RashidAli.jpeg"
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {team.map((member, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
          className="bg-beige-50 rounded-2xl p-8 border border-beige-100 shadow-sm hover:shadow-xl hover:border-gold-300 hover:-translate-y-2 transition-all duration-300 flex flex-col h-full group"
        >
          <div className="flex items-center gap-5 mb-6">
            <div className="w-20 h-20 shrink-0 rounded-full bg-maroon-950 group-hover:ring-4 group-hover:ring-gold-500/20 transition-all duration-300 flex items-center justify-center text-white font-serif text-xl font-bold shadow-md overflow-hidden relative">
              {member.image ? (
                <Image 
                  src={member.image} 
                  alt={member.name} 
                  width={80}
                  height={80}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  style={{ objectPosition: (member as any).objectPosition || "center" }}
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center bg-maroon-950 group-hover:bg-gold-500 transition-colors duration-300">
                  {member.initials}
                </div>
              )}
            </div>
            <div>
              <h3 className="text-xl font-bold text-maroon-950 font-serif leading-tight mb-1">{member.name}</h3>
              <p className="text-gold-700 text-xs font-bold tracking-wide uppercase">{member.role}</p>
            </div>
          </div>
          
          <div className="mb-4 text-xs font-semibold tracking-wide text-maroon-900/60 border-b border-maroon-100 pb-4">
            {member.qualifications} <br/> ({member.location} Office)
          </div>
          
          <p className="text-slate-600 font-light text-sm leading-relaxed flex-grow">
            {member.bio}
          </p>
        </motion.div>
      ))}
    </div>
  );
}
