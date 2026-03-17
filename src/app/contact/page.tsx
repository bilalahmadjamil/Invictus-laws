import { Metadata } from 'next';
import ContactForm from '@/components/contact/ContactForm';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Contact Us | Invictus Corporate & Legal Consultants',
  description: 'Get in touch with us at our Lahore and Islamabad offices for comprehensive legal solutions.',
};

export default function ContactPage() {
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
            We operate seamlessly across two major cities, providing unparalleled access to top-tier legal advice.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Contact Details */}
          <div className="lg:col-span-5 space-y-8">
            <div className="bg-white rounded-2xl p-8 border border-maroon-100 shadow-sm relative overflow-hidden group hover:border-gold-300 transition-colors">
              <div className="absolute top-0 right-0 w-32 h-32 bg-beige-50 rounded-bl-[100px] -z-0 transition-transform group-hover:scale-110"></div>
              
              <div className="relative z-10">
                <h3 className="text-2xl font-serif font-bold text-maroon-950 mb-6 flex items-center">
                  <MapPin className="mr-3 text-gold-500" size={24} />
                  Lahore Head Office
                </h3>
                
                <ul className="space-y-6 text-slate-600 font-light">
                  <li className="flex items-start">
                    <span className="mt-1 mr-4 bg-beige-50 p-2 rounded-lg text-maroon-900">
                      <MapPin size={20} />
                    </span>
                    <span className="leading-relaxed">Office no 105, First Floor, Arif Building 13-fane, road near Lahore High Court, Lahore</span>
                  </li>
                  <li className="flex items-center">
                    <span className="mr-4 bg-beige-50 p-2 rounded-lg text-maroon-900">
                      <Phone size={20} />
                    </span>
                    <div className="flex flex-col font-medium text-maroon-950">
                      <a href="tel:+923134891684" className="hover:text-gold-600 transition-colors">0313-4891684</a>
                      <a href="tel:+923451042352" className="hover:text-gold-600 transition-colors">0345-1042352</a>
                    </div>
                  </li>
                  <li className="flex items-center">
                    <span className="mr-4 bg-beige-50 p-2 rounded-lg text-maroon-900">
                      <Clock size={20} />
                    </span>
                    <span className="text-maroon-950">Mon - Sat: 9:00 AM - 6:00 PM</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 border border-maroon-100 shadow-sm relative overflow-hidden group hover:border-gold-300 transition-colors">
              <div className="absolute top-0 right-0 w-32 h-32 bg-beige-50 rounded-bl-[100px] -z-0 transition-transform group-hover:scale-110"></div>
              
              <div className="relative z-10">
                <h3 className="text-2xl font-serif font-bold text-maroon-950 mb-6 flex items-center">
                  <MapPin className="mr-3 text-maroon-950" size={24} />
                  Islamabad Base
                </h3>
                
                <ul className="space-y-6 text-slate-600 font-light">
                  <li className="flex items-start">
                    <span className="mt-1 mr-4 bg-beige-50 p-2 rounded-lg text-maroon-900">
                      <MapPin size={20} />
                    </span>
                    <span className="leading-relaxed text-maroon-950">House no. 29, street 27, F-8/1, Islamabad</span>
                  </li>
                  <li className="flex items-center">
                    <span className="mr-4 bg-beige-50 p-2 rounded-lg text-maroon-900">
                      <Phone size={20} />
                    </span>
                    <div className="flex flex-col font-medium text-maroon-950">
                      <a href="tel:+923365036073" className="hover:text-gold-600 transition-colors">0336-5036073</a>
                      <a href="tel:+923129668001" className="hover:text-gold-600 transition-colors">0312-9668001</a>
                    </div>
                  </li>
                  <li className="flex items-center">
                    <span className="mr-4 bg-beige-50 p-2 rounded-lg text-maroon-900">
                      <Mail size={20} />
                    </span>
                    <a href="mailto:official@iclc.com.pk" className="text-maroon-950 hover:text-gold-600 transition-colors font-medium">official@iclc.com.pk</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Contact Form Container */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-2xl p-8 lg:p-12 border border-maroon-100 shadow-xl shadow-beige-100/50">
              <h3 className="text-2xl font-serif font-bold text-maroon-950 mb-2">Send Us a Message</h3>
              <p className="text-slate-500 font-light mb-8">Fill out the form below and our team will get back to you within 24 hours.</p>
              <ContactForm />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
