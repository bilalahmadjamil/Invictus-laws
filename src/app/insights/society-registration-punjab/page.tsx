import { Metadata } from 'next';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowLeft, Clock, FileText, CheckCircle2, AlertCircle, Bookmark } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';

export const metadata: Metadata = {
  title: 'Procedure for Society Registration in Punjab | ICLC',
  description: 'A comprehensive guide to registering a society in Punjab, Pakistan, including requirements, fees, and online application procedures.',
};

export default function SocietyRegistrationPage() {
  return (
    <div className="pt-20 pb-24 bg-beige-50 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">
        
        {/* Navigation & Category */}
        <div className="flex items-center justify-between mb-8">
          <Link 
            href="/insights" 
            className="inline-flex items-center text-maroon-900 font-bold text-sm hover:text-gold-600 transition-colors group"
          >
            <ArrowLeft className="mr-2 w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to Insights
          </Link>
          <span className="bg-gold-500 text-maroon-950 px-4 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest shadow-sm">
            Legal Guide
          </span>
        </div>

        {/* Article Header */}
        <div className="mb-12">
          <SectionHeading 
            title="Procedure for Registration of Society in Punjab" 
            subtitle="Corporate Compliance" 
            centered={false}
          />
          <div className="flex items-center gap-6 mt-6 pb-6 border-b border-maroon-100 italic text-maroon-900/60 font-light">
             <span className="flex items-center gap-2"><Clock size={16} /> 6 min read</span>
             <span>•</span>
             <span>March 13, 2026</span>
          </div>
        </div>

        {/* Article Content */}
        <div className="bg-white rounded-[40px] p-8 md:p-16 border border-maroon-100 shadow-sm">
          <div className="prose prose-maroon max-w-none">
            <p className="text-xl text-maroon-900 leading-relaxed font-serif italic mb-10">
              Any seven or more persons associated for any literary, scientific or charitable purpose may, by subscribing their names to a Memorandum of Association and filing the same with the Registrar of Joint-Stock Companies, form themselves into a society.
            </p>

            <section className="mb-12">
              <h2 className="text-2xl font-serif font-bold text-maroon-950 mb-6 flex items-center gap-3">
                <Bookmark className="text-gold-600" />
                Memorandum of Association Requirements
              </h2>
              <p className="text-maroon-900/80 mb-4">The Memorandum of Association shall contain the following essential details:</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  "Name of the society",
                  "Objects of the society",
                  "Names and addresses of governing bodies",
                  "Occupations of directors or committee members",
                  "Certified rules and regulations",
                  "Signatures of at least 7 members"
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3 p-4 bg-beige-50 rounded-2xl border border-maroon-50">
                    <CheckCircle2 className="text-gold-600 mt-1 flex-shrink-0" size={18} />
                    <span className="text-sm font-medium text-maroon-900">{item}</span>
                  </div>
                ))}
              </div>
              <p className="mt-6 text-maroon-900/70 text-sm italic border-l-4 border-gold-500 pl-4">
                A copy of the rules and regulations of the society, certified to be a correct copy by not less than three of the members of the governing body, shall be filed with the Memorandum of Association.
              </p>
            </section>

            <section className="mb-12 bg-maroon-950 text-white p-8 md:p-12 rounded-[40px] border border-gold-500/20 shadow-xl overflow-hidden relative">
              <div className="absolute top-0 right-0 p-8 opacity-10">
                <FileText size={160} />
              </div>
              <h2 className="text-3xl font-serif font-bold text-gold-400 mb-8 relative z-10">Registration Fee Structure</h2>
              <div className="flex flex-col md:flex-row items-center gap-8 relative z-10">
                <div className="text-center md:text-left">
                  <span className="text-beige-50/60 uppercase text-xs tracking-widest font-bold">Standard Fee</span>
                  <div className="text-5xl font-bold text-white mt-1">PKR. 2,500/-</div>
                  <p className="text-beige-50/40 text-xs mt-4">Required for all Society Registrations</p>
                </div>
                <div className="h-[1px] md:h-20 w-full md:w-[1px] bg-gold-500/20"></div>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="bg-gold-500/20 p-2 rounded-lg text-gold-400 mt-1">
                      <AlertCircle size={16} />
                    </div>
                    <p className="text-sm font-light text-beige-50/80 leading-relaxed">
                      The applicable registration fee shall be paid on <strong className="text-white">32-A challan</strong>. Fees so paid shall be accounted for to the Provincial Government.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-serif font-bold text-maroon-950 mb-6">Online Application Portal Requirements</h2>
              <p className="text-maroon-900/80 mb-6 font-light">
                Modern registration is conducted via the provincial online portal. To ensure a successful application, the following details and documents are mandatory:
              </p>
              
              <div className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    "Name of Society",
                    "Details of Authorized Representative",
                    "Authorization letter by CEO/PRESIDENT",
                    "Name of the Tenderer (Applicant)",
                    "Name of the Bank & Branch Name",
                    "Bank Branch Code & Date of Deposit"
                  ].map((doc, i) => (
                    <div key={i} className="flex items-center gap-3 p-4 border border-maroon-100 rounded-2xl group hover:bg-beige-50 transition-colors">
                      <div className="w-2 h-2 rounded-full bg-gold-500"></div>
                      <span className="text-sm text-maroon-900 font-medium">{doc}</span>
                    </div>
                  ))}
                </div>
                
                <div className="mt-8 p-6 bg-maroon-50 rounded-[30px] border border-maroon-100">
                  <h4 className="font-bold text-maroon-950 mb-3 flex items-center gap-2">
                    <CheckCircle2 size={18} className="text-maroon-900" />
                    Specific Head of Account
                  </h4>
                  <p className="text-sm text-maroon-900/70 mb-4 leading-relaxed">
                    The applicable amount shall be deposited in the specific Head of Account designated for the Societies Registration Act, 1860:
                  </p>
                  <div className="bg-white p-4 rounded-xl border border-maroon-200 text-center font-mono font-bold text-xl text-maroon-950 tracking-wider">
                    CO-3818
                  </div>
                </div>
              </div>
            </section>

            <div className="mt-16 pt-8 border-t border-maroon-100 flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-maroon-950 flex items-center justify-center text-gold-500 font-bold text-lg">
                  IA
                </div>
                <div>
                  <h5 className="font-bold text-maroon-950">Invictus Advisory</h5>
                  <p className="text-xs text-maroon-900/40">Corporate & Legal Consultants</p>
                </div>
              </div>
              <Link 
                href="/contact" 
                className="px-8 py-3 bg-maroon-950 text-white rounded-xl font-bold hover:bg-maroon-900 transition-all shadow-lg active:scale-95"
              >
                Need Help with Registration?
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
