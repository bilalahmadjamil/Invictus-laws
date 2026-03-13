import { Metadata } from 'next';
import TeamGrid from '@/components/team/TeamGrid';

export const metadata: Metadata = {
  title: 'Our Team | Invictus Corporate & Legal Consultants',
  description: 'Meet our dedicated team of legal professionals and managing partners across our Lahore and Islamabad offices.',
};

export default function TeamPage() {
  return (
    <div className="pt-20 pb-24 bg-beige-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-[2px] w-12 bg-gold-500"></div>
            <span className="text-maroon-900 font-bold tracking-wider text-sm uppercase">Professionals</span>
            <div className="h-[2px] w-12 bg-gold-500"></div>
          </div>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-maroon-950 mb-6 leading-tight">
            Meet Our <span className="text-gold-600 italic">Legal Team</span>
          </h1>
          <p className="text-slate-600 text-lg leading-relaxed font-light">
            Bringing together decades of combined experience, strategic foresight, and exceptional legal drafting. We champion our clients interests with unmatched intellect and unwavering integrity.
          </p>
        </div>
        
        {/* Team Grid Component */}
        <TeamGrid />
        
      </div>
    </div>
  );
}
