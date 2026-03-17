import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/layout/WhatsAppButton";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });

export const metadata: Metadata = {
  title: "Invictus Corporate & Legal Consultants | ICLC",
  description: "ICLC is a premier law firm offering comprehensive legal solutions for corporate entities, overseas Pakistanis, small businesses, and startups.",
  keywords: ["Law Firm Pakistan", "Corporate Lawyers Lahore", "Legal Consultants Islamabad", "Overseas Pakistanis Legal Help", "Company Registration Pakistan", "Cyber Law Pakistan", "Copyright Registration"],
  authors: [{ name: "ICLC Team" }],
  openGraph: {
    title: "Invictus Corporate & Legal Consultants | ICLC",
    description: "Premier law firm in Pakistan providing corporate, civil, and criminal legal services.",
    url: "https://iclc.com.pk",
    siteName: "ICLC",
    locale: "en_PK",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Invictus Corporate & Legal Consultants | ICLC",
    description: "Premier law firm in Pakistan providing corporate, civil, and criminal legal services.",
  },
  robots: {
    index: true,
    follow: true,
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${playfair.variable} bg-slate-50 text-slate-800 font-sans flex flex-col min-h-screen`}>
        <Navbar />
        <main className="flex-grow pt-20">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
