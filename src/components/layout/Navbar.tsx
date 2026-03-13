"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Practice Areas", href: "/practice-areas" },
    { name: "Team", href: "/team" },
    { name: "Insights", href: "/insights" },
    { name: "Contact", href: "/contact" },
  ];

  // Determine text color based on scroll state and current page
  const getTextColor = (baseLight: string, baseDark: string) => {
    if (isScrolled) return baseDark;
    return isHome ? baseLight : baseDark;
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "glass py-4" : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center group">
            <div className={`relative h-16 w-48 overflow-hidden rounded-lg transition-colors bg-transparent`}>
              <Image 
                src={isScrolled || !isHome ? "/logo-reversed.jpg" : "/logo.jpg"} 
                alt="ICLC Logo" 
                fill
                className="object-contain object-left"
                priority
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-gold-500 ${getTextColor('text-beige-50', 'text-maroon-950')}`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="/contact"
              className="bg-maroon-950 text-white px-5 py-2 rounded-md text-sm font-medium hover:bg-maroon-900 transition-colors shadow-md border border-maroon-800"
            >
              Consultation
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`focus:outline-none transition-colors hover:text-gold-500 ${getTextColor('text-white', 'text-maroon-950')}`}
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass-maroon border-t border-maroon-800"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block px-3 py-4 text-base font-medium text-beige-50 hover:text-gold-500 hover:bg-maroon-900/50 rounded-md"
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-4 pb-2 px-3">
                <Link
                  href="/contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block w-full text-center bg-maroon-950 text-white px-5 py-3 rounded-md text-base font-medium hover:bg-maroon-900 transition-colors shadow-md border border-maroon-800"
                >
                  Get Consultation
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
