import { Metadata } from 'next';
import PracticeAreasGrid from '@/components/practice-areas/PracticeAreasGrid';

export const metadata: Metadata = {
  title: 'Practice Areas | Invictus Corporate & Legal Consultants',
  description: 'Comprehensive legal solutions including Corporate Law, Commercial Litigation, Cyber Law, IP, and more.',
};

export default function PracticeAreasPage() {
  return (
    <div className="pt-20 pb-24 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-[2px] w-12 bg-gold-500"></div>
            <span className="text-navy-900 font-bold tracking-wider text-sm uppercase">Our Expertise</span>
            <div className="h-[2px] w-12 bg-gold-500"></div>
          </div>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-navy-900 mb-6 leading-tight">
            Comprehensive <span className="text-gold-600 italic">Practice Areas</span>
          </h1>
          <p className="text-slate-600 text-lg leading-relaxed font-light">
            We provide strategic counsel and representation across 13 specialized areas of law, ensuring your personal and business interests are fully protected.
          </p>
        </div>
        
        <PracticeAreasGrid />
      </div>
    </div>
  );
}
