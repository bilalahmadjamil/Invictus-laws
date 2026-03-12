"use client";

import { motion } from "framer-motion";
import { 
  Building2, Gavel, Shield, Scale, Briefcase, Users, 
  Landmark, Network, FileText, Globe, Ship, Users2, ShieldAlert
} from "lucide-react";

export default function PracticeAreasGrid() {
  const areas = [
    {
      id: "adr",
      title: "Alternative Dispute Resolution (ADR)",
      desc: "Efficient dispute resolution through mediation, arbitration, and negotiation, helping clients avoid lengthy and costly litigation.",
      icon: <Users2 className="w-8 h-8 text-gold-500" />
    },
    {
      id: "banking",
      title: "Banking Law",
      desc: "Assisting financial institutions and individuals with banking regulations, lending practices, and financial disputes efficiently.",
      icon: <Landmark className="w-8 h-8 text-gold-500" />
    },
    {
      id: "litigation",
      title: "Commercial Litigation",
      desc: "Representing businesses in commercial disputes, focusing on protecting your interests while seeking swift resolutions.",
      icon: <Gavel className="w-8 h-8 text-gold-500" />
    },
    {
      id: "competition",
      title: "Competition Law",
      desc: "Helping clients navigate antitrust laws and ensure compliance with regulations designed to promote fair competition.",
      icon: <Network className="w-8 h-8 text-gold-500" />
    },
    {
      id: "contract",
      title: "Contract Law",
      desc: "Expert contract drafting, negotiation, and dispute resolution to ensure your agreements are clear, binding, and sound.",
      icon: <FileText className="w-8 h-8 text-gold-500" />
    },
    {
      id: "constitutional",
      title: "Constitutional Law",
      desc: "Strategic counsel in matters related to constitutional rights, government powers, and legal reforms.",
      icon: <Globe className="w-8 h-8 text-gold-500" />
    },
    {
      id: "cyber",
      title: "Cyber Law",
      desc: "Comprehensive legal services addressing data privacy, cybersecurity, and digital transactions to safeguard your online presence.",
      icon: <Shield className="w-8 h-8 text-gold-500" />
    },
    {
      id: "employment",
      title: "Employment Law",
      desc: "Assisting with workplace disputes, wrongful termination, discrimination, and ensuring compliance with labor laws.",
      icon: <Briefcase className="w-8 h-8 text-gold-500" />
    },
    {
      id: "criminal",
      title: "Criminal Law",
      desc: "Defending individuals and organizations facing criminal charges, offering skilled representation through investigation and trial.",
      icon: <ShieldAlert className="w-8 h-8 text-gold-500" />
    },
    {
      id: "corporate",
      title: "Corporate and Commercial Law",
      desc: "Advising businesses on corporate formation, governance, transactions, and compliance, ensuring legal protection.",
      icon: <Building2 className="w-8 h-8 text-gold-500" />
    },
    {
      id: "ip",
      title: "Intellectual Property (IP) Law",
      desc: "Protecting innovations and creative works by securing patents, trademarks, copyrights, and handling IP disputes.",
      icon: <Scale className="w-8 h-8 text-gold-500" />
    },
    {
      id: "family",
      title: "Family Law",
      desc: "Compassionate support in family matters, including divorce, custody, and property division for amicable resolutions.",
      icon: <Users className="w-8 h-8 text-gold-500" />
    },
    {
      id: "maritime",
      title: "Maritime Law",
      desc: "Expert legal services for maritime-related matters, including shipping, cargo disputes, and regulatory compliance.",
      icon: <Ship className="w-8 h-8 text-gold-500" />
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {areas.map((area, index) => (
        <motion.div
          key={area.id}
          id={area.id}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
          className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group flex flex-col h-full"
        >
          <div className="mb-6 bg-slate-50 border border-slate-100 p-4 rounded-xl inline-block w-16 h-16 group-hover:bg-gold-50 group-hover:border-gold-100 transition-colors duration-300">
            {area.icon}
          </div>
          <h3 className="text-xl font-bold font-serif text-navy-900 mb-4 group-hover:text-gold-600 transition-colors">{area.title}</h3>
          <p className="text-slate-600 font-light text-sm leading-relaxed flex-grow">{area.desc}</p>
        </motion.div>
      ))}
    </div>
  );
}
