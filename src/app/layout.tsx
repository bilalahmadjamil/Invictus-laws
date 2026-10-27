import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/layout/WhatsAppButton";
import { client } from "@/sanity/lib/client";
import { siteSettingsQuery } from "@/sanity/lib/queries";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });

export const metadata: Metadata = {
  metadataBase: new URL("https://iclc.com.pk"),
  title: "Invictus Corporate & Legal Consultants | ICLC",
  description: "ICLC is a premier law firm offering comprehensive legal solutions for corporate entities, overseas Pakistanis, small businesses, and startups.",
  alternates: {
    canonical: "./",
  },
  keywords: [
    "Law Firm Pakistan",
    "Corporate Lawyers Lahore",
    "Legal Consultants Islamabad",
    "Overseas Pakistanis Legal Help",
    "Company Registration Pakistan",
    "Cyber Law Pakistan",
    "Copyright Registration",
    "Trademark Registration"
  ],
  authors: [{ name: "ICLC Team" }],
  openGraph: {
    title: "Invictus Corporate & Legal Consultants | ICLC",
    description: "Premier law firm in Pakistan providing corporate, civil, and criminal legal services.",
    url: "https://iclc.com.pk",
    siteName: "ICLC",
    locale: "en_PK",
    type: "website",
    images: [
      {
        url: "/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Invictus Corporate & Legal Consultants (ICLC)"
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Invictus Corporate & Legal Consultants | ICLC",
    description: "Premier law firm in Pakistan providing corporate, civil, and criminal legal services.",
    images: ["/logo.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  }
};

export const revalidate = 60; // Revalidate every 60 seconds

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  let settings: any = null;
  let whatsapp = "923134891684";

  try {
    settings = await client.fetch(siteSettingsQuery);
    if (settings?.whatsappNumber) {
      whatsapp = settings.whatsappNumber;
    }
  } catch (err) {
    console.error("Failed to fetch site settings in layout", err);
  }

  const defaultOffices = [
    {
      title: "Lahore Head Office",
      address: "Office no 105, First Floor, Arif Building 13-fane, road near Lahore High Court, Lahore",
    },
    {
      title: "Islamabad Office",
      address: "House no.29, street 27, F-8/1, Islamabad",
    }
  ];

  const officeList = (settings?.offices && settings.offices.length > 0)
    ? settings.offices
    : defaultOffices;

  // Google Local Business & LegalService Schema with dynamic single/multiple address support
  const addressSchema = officeList.length === 1
    ? {
        "@type": "PostalAddress",
        streetAddress: officeList[0].address,
        addressLocality: officeList[0].title || "Lahore",
        addressCountry: "PK"
      }
    : officeList.map((o: any) => ({
        "@type": "PostalAddress",
        streetAddress: o.address,
        addressLocality: o.title || "Pakistan",
        addressCountry: "PK"
      }));

  const socialLinks = [
    settings?.socialLinks?.linkedin,
    settings?.socialLinks?.facebook,
    settings?.socialLinks?.twitter,
    settings?.socialLinks?.instagram,
  ].filter(Boolean);

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "LegalService",
    "@id": "https://iclc.com.pk/#organization",
    name: settings?.firmName || "Invictus Corporate & Legal Consultants (ICLC)",
    alternateName: "ICLC",
    url: "https://iclc.com.pk",
    logo: "https://iclc.com.pk/logo.jpg",
    image: "https://iclc.com.pk/logo.jpg",
    description: "Invictus Corporate & Legal Consultants (ICLC) is a premier legal advisory and corporate consultancy firm based in Pakistan.",
    telephone: settings?.consultationPhone || officeList[0]?.phones?.[0] || "+92 313 4891684",
    email: settings?.officialEmail || officeList[0]?.email || "contact@iclc.com.pk",
    priceRange: "$",
    address: addressSchema,
    openingHours: settings?.officeHours || "Mo-Sa 09:00-18:00",
    ...(socialLinks.length > 0 ? { sameAs: socialLinks } : {}),
  };

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body className={`${inter.variable} ${playfair.variable} bg-slate-50 text-slate-800 font-sans flex flex-col min-h-screen`}>
        <Navbar />
        <main className="flex-grow pt-20">{children}</main>
        <Footer 
          offices={settings?.offices} 
          socialLinks={settings?.socialLinks}
          officialEmail={settings?.officialEmail}
          consultationPhone={settings?.consultationPhone}
        />
        <WhatsAppButton phoneNumber={whatsapp} />
      </body>
    </html>
  );
}
