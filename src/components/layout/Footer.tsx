'use client';

import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone, Mail, Clock, Instagram, Facebook, Linkedin, Twitter, ExternalLink } from "lucide-react";

export interface Office {
  _key?: string;
  title: string;
  tagline?: string;
  address: string;
  phones?: string[];
  email?: string;
  hours?: string;
  mapUrl?: string;
}

export interface FooterProps {
  offices?: Office[];
  socialLinks?: {
    linkedin?: string;
    instagram?: string;
    facebook?: string;
    twitter?: string;
  };
  officialEmail?: string;
  consultationPhone?: string;
}

const defaultOffices: Office[] = [
  {
    title: "Lahore Head Office",
    address: "Office no 105, First Floor, Arif Building 13-fane, road near Lahore High Court, Lahore",
    phones: ["0313-4891684", "0345-1042352"],
    hours: "Mon - Sat: 9:00 AM - 6:00 PM",
  },
  {
    title: "Islamabad Office",
    address: "House no.29, street 27, F-8/1, Islamabad",
    phones: ["0336-5036073", "0312-9668001"],
    email: "official@iclc.com.pk",
    hours: "Mon - Sat: 9:00 AM - 6:00 PM",
  },
];

export default function Footer({ 
  offices: propOffices, 
  socialLinks,
  officialEmail,
  consultationPhone
}: FooterProps) {
  const currentYear = new Date().getFullYear();
  const offices = (propOffices && propOffices.length > 0) ? propOffices : defaultOffices;

  // Determine dynamic grid columns based on number of offices
  // 1 office -> 3 columns (Brand, Quick Links, Office)
  // 2 offices -> 4 columns (Brand, Quick Links, Office 1, Office 2)
  // 3+ offices -> 5 columns or wraps gracefully
  const gridColsClass = 
    offices.length === 1 
      ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3" 
      : offices.length === 2 
        ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-4" 
        : "grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5";

  return (
    <footer className="bg-maroon-950 text-beige-50/70 pt-16 pb-8 border-t-2 border-gold-500/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`grid ${gridColsClass} gap-12 mb-12`}>
          
          {/* Brand & Intro */}
          <div className="col-span-1 lg:pr-6">
            <Link href="/" className="flex items-center mb-6">
              <div className="relative w-48 h-16 overflow-hidden rounded-lg bg-transparent">
                <Image 
                  src="/logo-reversed.jpg" 
                  alt="ICLC Logo" 
                  fill
                  className="object-contain object-left"
                  loading="lazy"
                />
              </div>
            </Link>
            <p className="text-sm leading-relaxed mb-6">
              Offering comprehensive and accessible legal solutions catering to corporate entities, overseas Pakistanis, small businesses, and startups under one roof.
            </p>
            <div className="flex items-center space-x-3">
              {(socialLinks?.instagram || "https://www.instagram.com/invictus_law_firm?igsh=Zm84cHRyaXFyOTRy") && (
                <a 
                  href={socialLinks?.instagram || "https://www.instagram.com/invictus_law_firm?igsh=Zm84cHRyaXFyOTRy"} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-9 h-9 rounded-full bg-slate-800 flex items-center justify-center hover:bg-gold-500 hover:text-maroon-950 transition-colors duration-300"
                  aria-label="Instagram"
                >
                  <Instagram size={18} />
                </a>
              )}
              {(socialLinks?.facebook || "https://www.facebook.com/share/1DjmfrMKsq/?mibextid=wwXIfr") && (
                <a 
                  href={socialLinks?.facebook || "https://www.facebook.com/share/1DjmfrMKsq/?mibextid=wwXIfr"} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-9 h-9 rounded-full bg-slate-800 flex items-center justify-center hover:bg-gold-500 hover:text-maroon-950 transition-colors duration-300"
                  aria-label="Facebook"
                >
                  <Facebook size={18} />
                </a>
              )}
              {(socialLinks?.linkedin || "https://www.linkedin.com/company/invictus-corporate-legal-consultants/") && (
                <a 
                  href={socialLinks?.linkedin || "https://www.linkedin.com/company/invictus-corporate-legal-consultants/"} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-9 h-9 rounded-full bg-slate-800 flex items-center justify-center hover:bg-gold-500 hover:text-maroon-950 transition-colors duration-300"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={18} />
                </a>
              )}
              {socialLinks?.twitter && (
                <a 
                  href={socialLinks.twitter} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-9 h-9 rounded-full bg-slate-800 flex items-center justify-center hover:bg-gold-500 hover:text-maroon-950 transition-colors duration-300"
                  aria-label="Twitter"
                >
                  <Twitter size={18} />
                </a>
              )}
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-span-1">
            <h3 className="text-white font-serif font-bold text-lg mb-6">Quick Links</h3>
            <ul className="space-y-3 text-sm">
              {[
                { name: 'Home', href: '/' },
                { name: 'Practice Areas', href: '/practice-areas' },
                { name: 'Our Team', href: '/team' },
                { name: 'Legal Insights', href: '/insights' },
                { name: 'Careers', href: '/careers' },
                { name: 'Contact Us', href: '/contact' },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-gold-500 transition-colors duration-300 flex items-center">
                    <span className="mr-2 text-gold-500">&rsaquo;</span> {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Dynamic Offices: If 1 office, renders 1 column. If multiple, renders each office */}
          {offices.map((office, idx) => {
            const phonesToDisplay = (office.phones && office.phones.length > 0)
              ? office.phones
              : (consultationPhone ? [consultationPhone] : []);
            const emailToDisplay = office.email || officialEmail;

            return (
              <div key={office._key || office.title || idx} className="col-span-1">
                <h3 className="text-white font-serif font-bold text-lg mb-2 flex items-center">
                  <MapPin size={18} className="mr-2 text-gold-500 shrink-0" />
                  <span>{office.title}</span>
                </h3>
                {office.tagline && (
                  <p className="text-xs uppercase tracking-wider text-gold-500/80 font-medium mb-4 pl-6">
                    {office.tagline}
                  </p>
                )}
                {!office.tagline && <div className="mb-4"></div>}

                <ul className="space-y-4 text-sm">
                  {/* Street Address */}
                  <li className="flex items-start">
                    <span className="mt-1 mr-3 text-gold-500/60 w-5 shrink-0">
                      <MapPin size={16} />
                    </span>
                    <span className="leading-relaxed">{office.address}</span>
                  </li>

                  {/* Phone Numbers */}
                  {phonesToDisplay.length > 0 && (
                    <li className="flex items-start">
                      <span className="mt-1 mr-3 text-gold-500/60 w-5 shrink-0">
                        <Phone size={16} />
                      </span>
                      <div className="flex flex-col space-y-1">
                        {phonesToDisplay.map((phone, pIdx) => {
                          const cleanPhone = phone.replace(/[^0-9+]/g, '');
                          return (
                            <a 
                              key={pIdx} 
                              href={`tel:${cleanPhone}`} 
                              className="hover:text-gold-500 transition-colors duration-300 font-medium"
                            >
                              {phone}
                            </a>
                          );
                        })}
                      </div>
                    </li>
                  )}

                  {/* Email */}
                  {emailToDisplay && (
                    <li className="flex items-center">
                      <span className="mr-3 text-gold-500/60 w-5 shrink-0">
                        <Mail size={16} />
                      </span>
                      <a 
                        href={`mailto:${emailToDisplay}`} 
                        className="hover:text-gold-500 transition-colors duration-300 break-all"
                      >
                        {emailToDisplay}
                      </a>
                    </li>
                  )}

                  {/* Working Hours */}
                  {office.hours && (
                    <li className="flex items-center">
                      <span className="mr-3 text-gold-500/60 w-5 shrink-0">
                        <Clock size={16} />
                      </span>
                      <span>{office.hours}</span>
                    </li>
                  )}

                  {/* Google Maps link if available */}
                  {office.mapUrl && (
                    <li className="pt-1">
                      <a 
                        href={office.mapUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-xs font-semibold text-gold-500 hover:text-gold-400 transition-colors"
                      >
                        <span>Get Directions</span>
                        <ExternalLink size={12} className="ml-1" />
                      </a>
                    </li>
                  )}
                </ul>
              </div>
            );
          })}

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500">
          <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4">
            <p>&copy; {currentYear} Invictus Corporate & Legal Consultants. All rights reserved.</p>
            <span className="hidden md:inline text-slate-700">|</span>
            <p>
              Powered by{" "}
              <a 
                href="https://www.dualtechlabs.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gold-500/80 hover:text-gold-400 transition-colors duration-300 font-medium"
              >
                DualTech Labs
              </a>
            </p>
          </div>
          <div className="mt-4 md:mt-0 space-x-4">
            <Link href="/privacy-policy" className="hover:text-gold-500 transition-colors duration-300">Privacy Policy</Link>
            <Link href="/terms-of-service" className="hover:text-gold-500 transition-colors duration-300">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
