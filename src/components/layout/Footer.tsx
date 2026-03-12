import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone, Mail, Clock, Instagram, Facebook, Linkedin } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy-900 text-slate-300 pt-16 pb-8 border-t border-navy-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand & Intro */}
          <div className="col-span-1 lg:col-span-1 border-r-0 border-b pb-8 lg:border-b-0 lg:border-r border-slate-700/50 lg:pr-8">
            <Link href="/" className="flex items-center mb-6 pointer-events-none">
              <div className="relative w-48 h-16 overflow-hidden rounded-lg bg-transparent">
                <Image 
                  src="/logo-reversed.jpg" 
                  alt="ICLC Logo" 
                  fill
                  className="object-contain object-left"
                />
              </div>
            </Link>
            <p className="text-sm leading-relaxed mb-6">
              Offering comprehensive and accessible legal solutions catering to corporate entities, overseas Pakistanis, small businesses, and startups under one roof.
            </p>
            <div className="flex items-center space-x-4">
              <a href="https://www.instagram.com/invictus_law_firm?igsh=Zm84cHRyaXFyOTRy" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-gold-500 hover:text-white transition-colors">
                <span className="sr-only">Instagram</span>
                <Instagram size={20} />
              </a>
              <a href="https://www.facebook.com/share/1DjmfrMKsq/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-gold-500 hover:text-white transition-colors">
                <span className="sr-only">Facebook</span>
                <Facebook size={20} />
              </a>
              <a href="https://www.linkedin.com/company/invictus-corporate-legal-consultants/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-gold-500 hover:text-white transition-colors">
                <span className="sr-only">LinkedIn</span>
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-span-1">
            <h3 className="text-white font-serif font-bold text-lg mb-6">Quick Links</h3>
            <ul className="space-y-3 text-sm">
              {['Home', 'Practice Areas', 'Our Team', 'Careers', 'Contact'].map((item) => (
                <li key={item}>
                  <Link href={`/${item.toLowerCase().replace(' ', '-')}`} className="hover:text-gold-500 transition-colors flex items-center">
                    <span className="mr-2 text-gold-600">›</span> {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Lahore Office */}
          <div className="col-span-1">
            <h3 className="text-white font-serif font-bold text-lg mb-6 flex items-center">
              <MapPin size={18} className="mr-2 text-gold-500" />
              Lahore Office
            </h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start">
                <span className="mt-1 mr-3 text-slate-500 w-5">
                  <MapPin size={16} />
                </span>
                <span>Office no 105, First Floor, Arif Building 13-fane, road near Lahore High Court, Lahore</span>
              </li>
              <li className="flex items-center">
                <span className="mr-3 text-slate-500 w-5 flex justify-center">
                  <Phone size={16} />
                </span>
                <div className="flex flex-col">
                  <span>0313-4891684</span>
                  <span>0345-1042352</span>
                </div>
              </li>
              <li className="flex items-center">
                <span className="mr-3 text-slate-500 w-5 flex justify-center">
                  <Clock size={16} />
                </span>
                <span>Mon - Sat: 9:00 AM - 6:00 PM</span>
              </li>
            </ul>
          </div>

          {/* Islamabad Office */}
          <div className="col-span-1">
            <h3 className="text-white font-serif font-bold text-lg mb-6 flex items-center">
              <MapPin size={18} className="mr-2 text-gold-500" />
              Islamabad Office
            </h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start">
                <span className="mt-1 mr-3 text-slate-500 w-5">
                  <MapPin size={16} />
                </span>
                <span>House no.29, street 27, F-8/1, Islamabad</span>
              </li>
              <li className="flex items-center">
                <span className="mr-3 text-slate-500 w-5 flex justify-center">
                  <Phone size={16} />
                </span>
                <div className="flex flex-col">
                  <span>0336-5036073</span>
                  <span>0312-9668001</span>
                </div>
              </li>
              <li className="flex items-center">
                <span className="mr-3 text-slate-500 w-5 flex justify-center">
                  <Mail size={16} />
                </span>
                <span>official@iclc.com.pk</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500">
          <p>© {currentYear} Invictus Corporate & Legal Consultants. All rights reserved.</p>
          <div className="mt-4 md:mt-0 space-x-4">
            <a href="#" className="hover:text-gold-500 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-gold-500 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
