import { Metadata } from 'next';
import SectionHeading from '@/components/ui/SectionHeading';

export const metadata: Metadata = {
  title: 'Privacy Policy | ICLC',
  description: 'Our commitment to safeguarding your privacy and personal data at Invictus Corporate & Legal Consultants.',
};

export default function PrivacyPolicyPage() {
  return (
    <div className="pt-20 pb-24 bg-beige-50 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">
        <SectionHeading 
          title="Privacy Policy" 
          subtitle="Legal & Compliance" 
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
            <section>
              <p>
                At Invictus Corporate & Legal Consultants (&quot;Invictus&quot;, &quot;we&quot;, &quot;our&quot;, or &quot;the Firm&quot;), we are deeply committed to safeguarding the privacy and confidentiality of every individual and entity that visits our website or engages with our professional services. This Privacy Policy explains, in transparent and unambiguous terms, what information we collect, why we collect it, how we use it, and the rights you hold with respect to your personal data.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-serif font-bold text-maroon-950 mb-4">1. Who We Are</h2>
              <p>
                Invictus Corporate & Legal Consultants is a legal advisory and corporate consultancy firm registered in Pakistan, providing professional services across four core practice areas: (i) Corporate Law & Advisory; (ii) Litigation & Dispute Resolution; (iii) Compliance & Regulatory Consultancy; and (iv) Contract Drafting & Review. Our website serves as a digital gateway through which clients, prospective clients, and stakeholders may learn about our services, make inquiries, and access general legal information.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-serif font-bold text-maroon-950 mb-4">2. Information We Collect</h2>
              <p>We collect information in two primary ways: directly from you, and automatically through your interaction with our Website.</p>
              
              <h3 className="text-xl font-bold text-maroon-900 mt-6 mb-3">2.1 Information You Provide Directly</h3>
              <p>When you voluntarily interact with our Website, we may collect:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Full name and professional designation</li>
                <li>Email address and telephone number</li>
                <li>Company name and registered business address</li>
                <li>Nature of your legal inquiry or matter</li>
                <li>Any documents, correspondence, or attachments you submit to us</li>
              </ul>

              <h3 className="text-xl font-bold text-maroon-900 mt-8 mb-3">2.1A Online Consultation Booking — Special Notice</h3>
              <div className="bg-beige-50 p-6 rounded-2xl border border-maroon-100 text-sm">
                <p className="mb-4">Our Website features an online consultation booking facility. Important conditions apply:</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Booking a consultation does not itself constitute the establishment of an attorney-client relationship.</li>
                  <li>Personal data submitted is used exclusively to schedule and manage your appointment.</li>
                  <li>Invictus may conduct a preliminary conflicts-of-interest check prior to confirming your booking.</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-serif font-bold text-maroon-950 mb-4">3. How We Use Your Information</h2>
              <p>Invictus uses your personal information solely for legitimate professional purposes. We do not engage in data broking or commercial use of your data unrelated to legal services. Uses include:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Responding to your inquiries and providing legal consultation</li>
                <li>Performing conflicts-of-interest checks</li>
                <li>Managing client relationships and matter files</li>
                <li>Complying with applicable laws, court orders, and regulatory obligations</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-serif font-bold text-maroon-950 mb-4">4. Legal Basis for Processing</h2>
              <p>Our processing is grounded in contractual necessity, legitimate interests, legal obligations, and your express consent.</p>
            </section>

            <section>
              <h2 className="text-2xl font-serif font-bold text-maroon-950 mb-4">5. Data Retention</h2>
              <p>We retain your personal information for as long as necessary to fulfil the purposes for which it was collected, and in compliance with professional and statutory obligations (typically up to 10 years for matter files).</p>
            </section>

            <section>
              <h2 className="text-2xl font-serif font-bold text-maroon-950 mb-4">6. Your Rights</h2>
              <p>You have the following rights: Right of Access, Rectification, Erasure, Restriction, Objection, and Withdrawal of Consent.</p>
              <p className="mt-4 italic">To exercise these rights, please contact us at <a href="mailto:official@iclc.com.pk" className="text-gold-600 font-bold decoration-none">official@iclc.com.pk</a>.</p>
            </section>

            <div className="bg-maroon-950 text-white p-8 rounded-3xl mt-12 border border-gold-500/20">
              <h4 className="text-gold-500 font-bold uppercase tracking-widest text-sm mb-4">Contact — Privacy Matters</h4>
              <p className="text-beige-50/80 mb-2">Invictus Corporate & Legal Consultants</p>
              <p className="text-beige-50/80 mb-2">Attn: Data Privacy Officer</p>
              <p className="text-beige-50/80 mb-2">Office No. 105, First Floor, Arif Building, 13-Fane Road, Lahore</p>
              <p className="text-beige-50/80">Email: <span className="text-gold-400">official@iclc.com.pk</span></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
