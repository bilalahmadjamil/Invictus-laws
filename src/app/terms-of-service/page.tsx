import { Metadata } from 'next';
import SectionHeading from '@/components/ui/SectionHeading';

export const metadata: Metadata = {
  title: 'Terms of Service | ICLC',
  description: 'The terms and conditions governing your use of the Invictus Corporate & Legal Consultants website and services.',
};

export default function TermsOfServicePage() {
  return (
    <div className="pt-20 pb-24 bg-beige-50 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">
        <SectionHeading 
          title="Terms of Service" 
          subtitle="Governing Agreement" 
          centered={false}
        />
        
        <div className="prose prose-maroon max-w-none mt-12 bg-white p-8 md:p-12 rounded-[40px] border border-maroon-100 shadow-sm">
          <div className="flex items-center gap-4 mb-8 pb-8 border-b border-maroon-100">
             <div className="bg-gold-500/10 text-gold-700 px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest">
               Effective Date: March 13, 2026
             </div>
             <div className="text-maroon-900/40 text-xs font-bold uppercase tracking-widest">
               Version 1.0
             </div>
          </div>

          <div className="space-y-8 text-maroon-900/80 leading-relaxed font-light">
            <div className="bg-maroon-50 border-l-4 border-maroon-900 p-6 rounded-r-2xl text-maroon-950 font-medium">
              IMPORTANT: If you do not agree to these Terms, please discontinue use of this Website immediately. These Terms are governed by the laws of the Islamic Republic of Pakistan.
            </div>

            <section>
              <h2 className="text-2xl font-serif font-bold text-maroon-950 mb-4">1. Acceptance of Terms</h2>
              <p>
                Your continued use of this Website constitutes your ongoing acceptance of these Terms and any future amendments thereto. We reserve the right to update these Terms at our discretion.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-serif font-bold text-maroon-950 mb-4">2. Nature of Services & No Attorney-Client Relationship</h2>
              <p>
                The content available on this Website is provided for informational purposes only and does not constitute legal advice. Reading or interacting with Website content does not create an attorney-client relationship between you and Invictus.
              </p>
              <div className="mt-4 p-6 bg-beige-50 border border-maroon-100 rounded-2xl italic text-sm">
                A formal relationship is established only upon the execution of a formal Client Engagement Letter signed by an authorised representative of Invictus.
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-serif font-bold text-maroon-950 mb-4">3. Permitted Use</h2>
              <p>You are granted a limited license to access this Website for lawful personal or professional purposes. Prohibited actions include:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Unlawful use or transmission of malicious code</li>
                <li>Systematic data extraction (scraping)</li>
                <li>Impersonation of Invictus personnel</li>
                <li>Disrupting the functionality of the Website</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-serif font-bold text-maroon-950 mb-4">4. Intellectual Property</h2>
              <p>
                All content on this Website is the exclusive intellectual property of Invictus Corporate & Legal Consultants and is protected under the Copyright Ordinance, 1962 (Pakistan) and international law.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-serif font-bold text-maroon-950 mb-4">5. Limitation of Liability</h2>
              <p>
                To the fullest extent permitted by Pakistani law, Invictus shall not be liable for any direct or indirect damages arising from your use of this Website or reliance on any information provided herein.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-serif font-bold text-maroon-950 mb-4">6. Governing Law & Jurisdiction</h2>
              <p>
                These Terms are governed by the laws of the Islamic Republic of Pakistan. Any dispute shall be subject to the exclusive jurisdiction of the courts of Lahore, Pakistan.
              </p>
            </section>

            <div className="bg-maroon-950 text-white p-8 rounded-3xl mt-12 border border-gold-500/20">
              <h4 className="text-gold-500 font-bold uppercase tracking-widest text-sm mb-4">General & Legal Inquiries</h4>
              <p className="text-beige-50/80 mb-2">Invictus Corporate & Legal Consultants</p>
              <p className="text-beige-50/80 mb-2">Office No. 105, First Floor, Arif Building, Lahore</p>
              <p className="text-beige-50/80">Phone: <span className="text-gold-400">0313-4891684</span></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
