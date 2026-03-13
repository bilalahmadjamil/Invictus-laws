import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, Clock, BookOpen, Shield, Download, CheckCircle2 } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Copyright Registration in Pakistan | Legal Insights | ICLC',
  description: 'A comprehensive guide on the procedure, requirements, and benefits of registering a copyright in Pakistan with IPO.',
};

export default function CopyrightArticle() {
  return (
    <div className="pt-20 pb-24 bg-beige-50 min-h-screen">
      {/* Article Header */}
      <section className="bg-maroon-950 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-maroon-900/20 mix-blend-overlay"></div>
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 rounded-full bg-maroon-800/40 blur-3xl"></div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Link href="/insights" className="inline-flex items-center text-beige-50/70 hover:text-gold-400 transition-colors mb-8 group">
            <ArrowLeft className="mr-2 w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to Insights
          </Link>
          <div className="flex items-center gap-3 mb-6">
            <span className="bg-gold-500/20 text-gold-400 border border-gold-500/30 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
              Legal Guide
            </span>
            <span className="text-beige-50/50 text-sm flex items-center">
              <Clock className="mr-1 w-4 h-4" /> 8 min read
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6 leading-tight">
            Procedure for Registration of <span className="text-gold-500">Copyright</span> in Pakistan
          </h1>
          <p className="text-beige-50/70 text-lg font-light leading-relaxed max-w-3xl">
            A comprehensive overview of how to safeguard your original authorship and intellectual assets under the Copyright Rules 1967.
          </p>
        </div>
      </section>

      {/* Article Content */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-12">
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl shadow-maroon-900/5 relative z-20 border border-maroon-100">
          
          <div className="prose prose-lg prose-maroon max-w-none">
            {/* Intro */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif font-bold text-maroon-950 mb-6 border-b border-maroon-100 pb-4">What is Copyright?</h2>
              <p className="text-slate-700 leading-relaxed mb-6 font-light">
                Copyright is a type of defense provided in the Copyrights law and protection granted by law for original work of authorship including musical, poetry, movies, novels, songs, software, computer and artistic work, which represents both published and unpublished works.
              </p>
              <div className="bg-beige-50 p-6 rounded-2xl border-l-4 border-gold-500 italic text-maroon-900">
                "Copyright domain does not defend any facts, systems operations and methods or any idea. Primarily, in Pakistan copyright is a law that provides ownership title of the work an author made."
              </div>
            </div>

            {/* Protected Things */}
            <div className="mb-12">
              <h2 className="text-2xl font-serif font-bold text-maroon-950 mb-6 flex items-center">
                <Shield className="mr-3 text-gold-600" />
                Things Protected Under Copyright
              </h2>
              <p className="text-slate-700 mb-6 font-light">
                The following may be protected under Copyright Rules 1967 with IPO in Pakistan:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  "Cinematography film and documentaries",
                  "Musical work and Sound recordings",
                  "Artistic work like paintings, maps, sculptures",
                  "Label Designs & Academic Journals",
                  "Original literary Books & Computer Programs",
                  "IT Software & Research Work",
                  "Broadcasts on different channels",
                  "Published editions & Newsletters"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3 p-4 bg-slate-50 rounded-xl border border-slate-100 group hover:border-maroon-200 transition-colors">
                    <CheckCircle2 className="w-5 h-5 text-gold-600 flex-shrink-0" />
                    <span className="text-slate-700 text-sm font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Requirements */}
            <div className="mb-12 bg-maroon-950 rounded-2xl p-8 text-white">
              <h2 className="text-2xl font-serif font-bold text-gold-400 mb-6 flex items-center">
                <BookOpen className="mr-3" />
                Basic Requirements
              </h2>
              <div className="space-y-6 text-beige-50/80 font-light">
                <div>
                  <h4 className="text-white font-bold mb-2">Necessary Details</h4>
                  <p>Name, address, and Nationality of the Applicant required. In the case of a Company or Firm, incorporation/registration certificates are needed.</p>
                </div>
                <div>
                  <h4 className="text-white font-bold mb-2">Soft Copies and CDs/DVDs</h4>
                  <p>Work must be provided in PDF, JPEG, JPG, or GIF format. IT programs require CDs or DVDs.</p>
                </div>
                <div>
                  <h4 className="text-white font-bold mb-2">Power of Attorney</h4>
                  <p>Rightfully signed in favor of an authorized firm or advocate before filing in Lahore or other cities.</p>
                </div>
              </div>
            </div>

            {/* Documents List */}
            <div className="mb-12">
              <h2 className="text-2xl font-serif font-bold text-maroon-950 mb-6">Documents Required</h2>
              <ul className="space-y-4">
                {[
                  "Copy of CNIC of the Applicant",
                  "NOC from the publisher (if already published)",
                  "Search Report from Trade Mark Office",
                  "NOC from persons appearing on artistic work",
                  "4 Copies of the work itself",
                  "Pay order in name of Director General IPO Pakistan",
                  "NOC from the author (if different from applicant)"
                ].map((doc, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-slate-700 font-light">
                    <span className="w-1.5 h-1.5 rounded-full bg-gold-500 mt-2 flex-shrink-0"></span>
                    {doc}
                  </li>
                ))}
              </ul>
            </div>

            {/* Advantages */}
            <div className="mb-12 grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-beige-50 rounded-2xl p-6 border border-beige-100">
                <h3 className="text-xl font-bold text-maroon-950 font-serif mb-4">Core Advantages</h3>
                <ul className="space-y-3 text-sm text-slate-600 font-medium">
                  <li className="flex items-center gap-2">
                    <span className="text-gold-600">✓</span> Legal Protection in Courts
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-gold-600">✓</span> Global Protection
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-gold-600">✓</span> Restricts Infringement
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-gold-600">✓</span> Creation of Intangible Assets
                  </li>
                </ul>
              </div>
              <div className="bg-beige-50 rounded-2xl p-6 border border-beige-100">
                <h3 className="text-xl font-bold text-maroon-950 font-serif mb-4">Long-term Value</h3>
                <ul className="space-y-3 text-sm text-slate-600 font-medium">
                  <li className="flex items-center gap-2">
                    <span className="text-gold-600">✓</span> Lifetime Protection + 50 Years
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-gold-600">✓</span> Market Place Credibility
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-gold-600">✓</span> Brand Control & Consistency
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-gold-600">✓</span> Unique Identity Creation
                  </li>
                </ul>
              </div>
            </div>

            {/* Procedure Steps */}
            <div>
              <h2 className="text-2xl font-serif font-bold text-maroon-950 mb-8 pb-2 border-b-2 border-gold-500 inline-block">The Registration Journey</h2>
              <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-z-10 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-gold-200 before:to-maroon-100">
                {[
                  {
                    title: "Application Filing",
                    desc: "An application with all statements and filing fees is sent to the registrar IPO, signed by an advocate via Power of Attorney."
                  },
                  {
                    title: "Examination Period",
                    desc: "A mandatory 30-day waiting period follows. Examiners analyze the application for any discrepancies or conflicting claims."
                  },
                  {
                    title: "Publication & Review",
                    desc: "Registrar issues a Diary No. and publishes a Notice in newspapers. This allows for public objections if any party contests the work."
                  },
                  {
                    title: "Final Hearing & Certification",
                    desc: "If objections arise, a hearing is conducted. Once resolved or if none exist, the Copyright Certificate is formally issued."
                  }
                ].map((step, idx) => (
                  <div key={idx} className="relative pl-12">
                    <span className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-full bg-gold-600 text-white font-bold shadow-lg shadow-gold-500/20">
                      {idx + 1}
                    </span>
                    <h4 className="text-xl font-bold text-maroon-950 mb-2 font-serif">{step.title}</h4>
                    <p className="text-slate-600 font-light leading-relaxed">{step.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-16 pt-8 border-t border-maroon-100 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-maroon-900 flex items-center justify-center text-white font-serif font-bold">
                IC
              </div>
              <div>
                <p className="text-maroon-950 font-bold text-sm">Legal Research Team</p>
                <p className="text-slate-500 text-xs">Published March 13, 2026</p>
              </div>
            </div>
            <div className="flex gap-4">
               <button className="inline-flex items-center px-4 py-2 bg-beige-50 text-maroon-900 rounded-lg text-sm font-bold hover:bg-maroon-100 transition-colors">
                 <Download className="mr-2 w-4 h-4" /> Save as PDF
               </button>
               <Link href="/contact" className="inline-flex items-center px-4 py-2 bg-maroon-950 text-white rounded-lg text-sm font-bold hover:bg-maroon-900 transition-colors shadow-lg shadow-maroon-900/20">
                 Consult an Expert
               </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Footer */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-20 text-center">
        <h3 className="text-2xl font-serif font-bold text-maroon-950 mb-4">Need personalized legal advice?</h3>
        <p className="text-slate-600 mb-8 font-light">Our experienced partners can guide you through complex intellectual property matters.</p>
        <Link href="/contact" className="inline-block px-10 py-4 bg-gold-600 text-white font-bold rounded-xl hover:bg-gold-700 transition-all shadow-xl shadow-gold-500/10 active:scale-95">
          Schedule a Consultation
        </Link>
      </section>
    </div>
  );
}
