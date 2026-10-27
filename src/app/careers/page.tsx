import { Metadata } from 'next';
import Link from 'next/link';
import { Briefcase, GraduationCap, Scale, Award, Mail, ArrowRight, CheckCircle2, Sparkles, MapPin, Clock } from 'lucide-react';
import { client } from '@/sanity/lib/client';
import { jobOpeningsQuery, siteSettingsQuery } from '@/sanity/lib/queries';

export const metadata: Metadata = {
  title: 'Careers & Opportunities | Invictus Corporate & Legal Consultants',
  description: 'Explore career opportunities, associate positions, and structured legal internship programs at Invictus Corporate & Legal Consultants.',
  keywords: [
    'Law Firm Careers Pakistan',
    'Legal Internships Lahore',
    'Associate Lawyer Jobs Islamabad',
    'Corporate Lawyers Pakistan',
    'Pupilage Pakistan',
    'ICLC Careers',
  ],
  openGraph: {
    title: 'Careers & Opportunities | Invictus Corporate & Legal Consultants',
    description: 'Build your legal career with experienced partners across corporate, litigation, and regulatory practice in Pakistan.',
    url: 'https://iclc.com.pk/careers',
    siteName: 'ICLC',
    type: 'website',
  },
};

export const revalidate = 60; // Auto-update when admin posts a job in Sanity

export default async function CareersPage() {
  let jobs: any[] = [];
  let settings: any = null;

  try {
    const [fetchedJobs, fetchedSettings] = await Promise.all([
      client.fetch(jobOpeningsQuery),
      client.fetch(siteSettingsQuery),
    ]);
    if (fetchedJobs) jobs = fetchedJobs;
    if (fetchedSettings) settings = fetchedSettings;
  } catch (err) {
    console.warn('Failed to fetch jobs from Sanity:', err);
  }

  const contactEmail = settings?.officialEmail || 'official@iclc.com.pk';

  const pillars = [
    {
      icon: <Scale className="w-8 h-8 text-gold-500" />,
      title: 'High-Impact Advocacy',
      description: 'Engage in notable constitutional, commercial, and cyber law matters that shape Pakistani jurisprudence.',
    },
    {
      icon: <GraduationCap className="w-8 h-8 text-gold-500" />,
      title: 'Direct Partner Mentorship',
      description: 'Work directly alongside our founding partners, receiving continuous advocacy coaching and drafting feedback.',
    },
    {
      icon: <Award className="w-8 h-8 text-gold-500" />,
      title: 'Merit-Driven Growth',
      description: 'Transparent career advancement with clear pathways from Associate to Senior Associate and Partnership.',
    },
    {
      icon: <Briefcase className="w-8 h-8 text-gold-500" />,
      title: 'Modern Practice',
      description: 'Leveraging digital legal workflows, cross-border corporate consultancy, and innovative litigation tactics.',
    },
  ];

  return (
    <div className="pt-20 pb-24 bg-beige-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-[2px] w-12 bg-gold-500"></div>
            <span className="text-maroon-900 font-bold tracking-wider text-sm uppercase">Join Our Practice</span>
            <div className="h-[2px] w-12 bg-gold-500"></div>
          </div>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-maroon-950 mb-6 leading-tight">
            Build Your Career With <span className="text-gold-600 italic">Legal Leaders</span>
          </h1>
          <p className="text-slate-600 text-lg leading-relaxed font-light">
            At Invictus Corporate & Legal Consultants, we cultivate an intellectual, rigorous, and supportive environment where aspiring and seasoned attorneys thrive.
          </p>
        </div>

        {/* Culture Pillars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {pillars.map((pillar, idx) => (
            <div 
              key={idx}
              className="bg-white p-8 rounded-2xl border border-maroon-100 shadow-sm hover:shadow-md hover:border-gold-300 transition-all duration-300 group flex flex-col"
            >
              <div className="p-4 bg-beige-50 rounded-xl inline-block shadow-sm group-hover:scale-110 group-hover:bg-gold-50 transition-all duration-300 mb-6 w-fit">
                {pillar.icon}
              </div>
              <h3 className="text-xl font-bold font-serif text-maroon-950 mb-3">{pillar.title}</h3>
              <p className="text-slate-600 font-light text-sm leading-relaxed">{pillar.description}</p>
            </div>
          ))}
        </div>

        {/* Career Openings Section */}
        <div className="mb-20">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl font-serif font-bold text-maroon-950 mb-4">
              Current Openings & Opportunities
            </h2>
            <p className="text-slate-600 font-light">
              We review applications on a rolling basis. Positions are posted directly by our firm management.
            </p>
          </div>

          {jobs && jobs.length > 0 ? (
            // DYNAMIC JOBS LIST
            <div className="space-y-6 max-w-4xl mx-auto">
              {jobs.map((job: any) => {
                const targetEmail = job.applicationEmail || contactEmail;
                const mailtoUrl = `mailto:${targetEmail}?subject=${encodeURIComponent(`Application for ${job.title}`)}`;

                return (
                  <div 
                    key={job._id || job.title}
                    className="bg-white rounded-3xl p-8 border border-maroon-100 shadow-sm hover:shadow-xl hover:border-gold-400 transition-all duration-300 group"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4 pb-4 border-b border-maroon-50">
                      <div>
                        <div className="flex items-center gap-3 flex-wrap">
                          <h3 className="text-2xl font-serif font-bold text-maroon-950 group-hover:text-gold-600 transition-colors">
                            {job.title}
                          </h3>
                          {job.department && (
                            <span className="text-xs bg-maroon-50 text-maroon-900 font-bold px-3 py-1 rounded-full border border-maroon-100">
                              {job.department}
                            </span>
                          )}
                        </div>
                        <div className="flex items-center gap-4 text-xs font-semibold text-gold-600 uppercase tracking-wider mt-2 flex-wrap">
                          <span className="flex items-center gap-1">
                            <MapPin size={14} />
                            {job.location}
                          </span>
                          <span>•</span>
                          <span className="flex items-center gap-1">
                            <Clock size={14} />
                            {job.jobType}
                          </span>
                        </div>
                      </div>

                      {job.experience && (
                        <span className="bg-beige-50 text-maroon-950 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider border border-maroon-100 w-fit shrink-0">
                          {job.experience}
                        </span>
                      )}
                    </div>

                    <p className="text-slate-600 font-light text-sm leading-relaxed mb-6">
                      {job.description}
                    </p>

                    {job.requirements && job.requirements.length > 0 && (
                      <div className="mb-6 bg-beige-50/50 p-5 rounded-2xl border border-maroon-50">
                        <h4 className="text-xs font-bold uppercase tracking-wider text-maroon-900 mb-3">Key Requirements:</h4>
                        <ul className="space-y-2 text-sm text-slate-600 font-light">
                          {job.requirements.map((req: string, rIdx: number) => (
                            <li key={rIdx} className="flex items-start gap-2.5">
                              <CheckCircle2 size={16} className="text-gold-600 mt-0.5 shrink-0" />
                              <span>{req}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    <div className="pt-4 border-t border-maroon-50 flex items-center justify-between flex-wrap gap-4">
                      <span className="text-xs text-slate-500 font-light">
                        {job.deadline ? `Application Deadline: ${job.deadline}` : 'Applications evaluated on a rolling basis.'}
                      </span>
                      <a
                        href={mailtoUrl}
                        className="inline-flex items-center px-6 py-2.5 bg-maroon-950 text-white font-bold rounded-xl hover:bg-gold-500 hover:text-maroon-950 transition-all text-sm group/btn shadow-sm"
                      >
                        <span>Apply via Email</span>
                        <ArrowRight size={15} className="ml-2 group-hover/btn:translate-x-1 transition-transform" />
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            // PROFESSIONAL "STAY TUNED" STATE WHEN NO JOBS ARE POSTED
            <div className="max-w-3xl mx-auto bg-white rounded-3xl p-10 md:p-14 border border-maroon-100 text-center shadow-sm">
              <div className="w-16 h-16 bg-gold-50 text-gold-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm">
                <Sparkles size={32} />
              </div>
              <h3 className="text-2xl sm:text-3xl font-serif font-bold text-maroon-950 mb-4">
                No Active Vacancies At This Moment
              </h3>
              <p className="text-slate-600 leading-relaxed font-light max-w-xl mx-auto mb-8 text-base">
                Our legal practice across Lahore and Islamabad is currently operating at full capacity. However, our partners are constantly on the lookout for distinguished legal talent, ambitious associates, and bright law students.
              </p>
              <div className="p-6 bg-beige-50 rounded-2xl border border-maroon-100 max-w-lg mx-auto mb-8 text-left">
                <h4 className="text-xs font-bold uppercase tracking-wider text-maroon-950 mb-2">Stay Connected with ICLC:</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  We maintain an active talent pool. Submit an open application with your CV and academic transcripts, and our recruiting committee will review your profile for upcoming associate openings and seasonal internship batches.
                </p>
              </div>
              <a
                href={`mailto:${contactEmail}?subject=${encodeURIComponent('Open Application - Prospective Legal Talent')}`}
                className="inline-flex items-center justify-center px-8 py-3.5 bg-maroon-950 text-white font-bold rounded-xl hover:bg-gold-500 hover:text-maroon-950 transition-all shadow-md group text-sm sm:text-base"
              >
                <span>Submit Open Application ({contactEmail})</span>
                <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          )}
        </div>

        {/* General Application CTA Box */}
        <div className="bg-maroon-950 text-white rounded-3xl p-8 sm:p-12 text-center max-w-4xl mx-auto border-2 border-gold-500/40 shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 -mr-16 -mt-16 w-48 h-48 rounded-full bg-gold-500/10 pointer-events-none"></div>
          <div className="relative z-10">
            <Mail className="w-12 h-12 text-gold-500 mx-auto mb-6" />
            <h3 className="text-2xl sm:text-3xl font-serif font-bold mb-4">
              Connect Directly with Our Recruiting Partners
            </h3>
            <p className="text-beige-50/80 font-light max-w-2xl mx-auto mb-8 text-sm sm:text-base leading-relaxed">
              If you are a practicing advocate, specialized corporate consultant, or LL.B. candidate seeking pupilage, email your cover letter and CV directly to our recruiting committee.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a 
                href={`mailto:${contactEmail}?subject=General Application - Legal Recruitment`}
                className="inline-flex items-center justify-center px-8 py-4 bg-gold-500 text-maroon-950 font-bold rounded-xl hover:bg-gold-400 transition-all shadow-md group text-sm sm:text-base"
              >
                <span>Send CV to {contactEmail}</span>
                <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 border border-beige-100/30 text-white font-bold rounded-xl hover:bg-white/10 transition-all text-sm sm:text-base"
              >
                Contact Our Offices
              </Link>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
