import { Metadata } from 'next';
import ContactForm from '@/components/contact/ContactForm';
import { MapPin, Phone, Mail, Clock, ExternalLink } from 'lucide-react';
import { client } from '@/sanity/lib/client';
import { siteSettingsQuery } from '@/sanity/lib/queries';

export const metadata: Metadata = {
  title: 'Contact Us | Invictus Corporate & Legal Consultants',
  description: 'Get in touch with us for comprehensive legal solutions across corporate, civil, criminal, and overseas legal matters.',
};

export const revalidate = 60; // Revalidate every 60 seconds

export default async function ContactPage() {
  let settings: any = null;
  try {
    settings = await client.fetch(siteSettingsQuery);
  } catch (err) {
    console.error('Failed to fetch site settings in contact page', err);
  }

  const defaultOffices = [
    {
      title: "Lahore Head Office",
      tagline: "Principal Headquarters",
      address: "Office no 105, First Floor, Arif Building 13-fane, road near Lahore High Court, Lahore",
      phones: ["0313-4891684", "0345-1042352"],
      hours: "Mon - Sat: 9:00 AM - 6:00 PM",
      mapUrl: "https://maps.google.com/?q=Arif+Building+13-fane+road+near+Lahore+High+Court+Lahore"
    },
    {
      title: "Islamabad Office",
      tagline: "Regional Branch",
      address: "House no.29, street 27, F-8/1, Islamabad",
      phones: ["0336-5036073", "0312-9668001"],
      email: "official@iclc.com.pk",
      hours: "Mon - Sat: 9:00 AM - 6:00 PM",
      mapUrl: "https://maps.google.com/?q=House+29+street+27+F-8/1+Islamabad"
    }
  ];

  const offices = (settings?.offices && settings.offices.length > 0)
    ? settings.offices
    : defaultOffices;

  const isSingleOffice = offices.length === 1;

  return (
    <div className="pt-20 pb-24 bg-beige-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-[2px] w-12 bg-gold-500"></div>
            <span className="text-maroon-900 font-bold tracking-wider text-sm uppercase">Get In Touch</span>
            <div className="h-[2px] w-12 bg-gold-500"></div>
          </div>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-maroon-950 mb-6 leading-tight">
            Consult With Our <span className="text-gold-600 italic">Legal Experts</span>
          </h1>
          <p className="text-slate-600 text-lg leading-relaxed font-light">
            {isSingleOffice
              ? "We are available to assist you at our office, providing direct access to top-tier legal advice and representation."
              : `We operate seamlessly across ${offices.length} major office locations, providing accessible top-tier legal advice and representation.`}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Dynamic Office Details (Single or Multiple) */}
          <div className="lg:col-span-5 space-y-8">
            {offices.map((office: any, idx: number) => (
              <div 
                key={office._key || office.title || idx}
                className="bg-white rounded-2xl p-8 border border-maroon-100 shadow-sm relative overflow-hidden group hover:border-gold-400 hover:shadow-md transition-all duration-300"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-beige-50 rounded-bl-[100px] -z-0 transition-transform group-hover:scale-110"></div>
                
                <div className="relative z-10">
                  <div className="mb-6">
                    <h3 className="text-2xl font-serif font-bold text-maroon-950 flex items-center">
                      <MapPin className="mr-3 text-gold-500 shrink-0" size={24} />
                      <span>{office.title}</span>
                    </h3>
                    {office.tagline && (
                      <p className="text-xs uppercase tracking-wider text-gold-600 font-bold mt-1 pl-9">
                        {office.tagline}
                      </p>
                    )}
                  </div>
                  
                  <ul className="space-y-5 text-slate-600 font-light text-sm">
                    {/* Address */}
                    <li className="flex items-start">
                      <span className="mt-1 mr-4 bg-beige-50 p-2 rounded-lg text-maroon-900 shrink-0">
                        <MapPin size={18} />
                      </span>
                      <span className="leading-relaxed pt-1 text-slate-700">{office.address}</span>
                    </li>

                    {/* Phones */}
                    {office.phones && office.phones.length > 0 && (
                      <li className="flex items-start">
                        <span className="mt-1 mr-4 bg-beige-50 p-2 rounded-lg text-maroon-900 shrink-0">
                          <Phone size={18} />
                        </span>
                        <div className="flex flex-col font-medium text-maroon-950 pt-1 space-y-1">
                          {office.phones.map((phone: string, pIdx: number) => {
                            const cleanPhone = phone.replace(/[^0-9+]/g, '');
                            return (
                              <a 
                                key={pIdx} 
                                href={`tel:${cleanPhone}`} 
                                className="hover:text-gold-600 transition-colors"
                              >
                                {phone}
                              </a>
                            );
                          })}
                        </div>
                      </li>
                    )}

                    {/* Email */}
                    {(office.email || settings?.officialEmail) && (
                      <li className="flex items-center">
                        <span className="mr-4 bg-beige-50 p-2 rounded-lg text-maroon-900 shrink-0">
                          <Mail size={18} />
                        </span>
                        <a 
                          href={`mailto:${office.email || settings?.officialEmail}`} 
                          className="text-maroon-950 hover:text-gold-600 transition-colors font-medium break-all"
                        >
                          {office.email || settings?.officialEmail}
                        </a>
                      </li>
                    )}

                    {/* Hours */}
                    {(office.hours || settings?.officeHours) && (
                      <li className="flex items-center">
                        <span className="mr-4 bg-beige-50 p-2 rounded-lg text-maroon-900 shrink-0">
                          <Clock size={18} />
                        </span>
                        <span className="text-maroon-950 font-medium">
                          {office.hours || settings?.officeHours}
                        </span>
                      </li>
                    )}

                    {/* Map Link */}
                    {office.mapUrl && (
                      <li className="pt-2">
                        <a
                          href={office.mapUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center text-xs font-bold uppercase tracking-wider text-maroon-900 hover:text-gold-600 transition-colors"
                        >
                          <span>Get Directions on Google Maps</span>
                          <ExternalLink size={14} className="ml-1.5" />
                        </a>
                      </li>
                    )}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          {/* Contact Form Container */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-2xl p-8 lg:p-12 border border-maroon-100 shadow-xl shadow-beige-100/50">
              <h3 className="text-2xl font-serif font-bold text-maroon-950 mb-2">Send Us a Message</h3>
              <p className="text-slate-500 font-light mb-8">Fill out the form below and our team will get back to you promptly.</p>
              <ContactForm />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
