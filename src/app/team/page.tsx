import { Metadata } from 'next';
import SectionHeading from '@/components/ui/SectionHeading';
import TeamGrid, { TeamMemberItem } from '@/components/team/TeamGrid';
import { client } from '@/sanity/lib/client';
import { teamMembersQuery } from '@/sanity/lib/queries';

export const revalidate = 60;

export const metadata: Metadata = {
  title: 'Our Legal Team | Invictus Corporate & Legal Consultants',
  description: 'Meet our dedicated team of legal consultants, litigators, and partners across our Lahore and Islamabad offices.',
  keywords: ['Lawyers Lahore', 'Advocates High Court Pakistan', 'Corporate Lawyers Islamabad', 'Litigation Attorneys', 'ICLC Legal Team'],
  openGraph: {
    title: 'Our Legal Team | Invictus Corporate & Legal Consultants',
    description: 'Expert counsel in constitutional, commercial, litigation, and regulatory law across Pakistan.',
    url: 'https://iclc.com.pk/team',
  },
};

export default async function TeamPage() {
  let members: TeamMemberItem[] = [];
  try {
    members = await client.fetch(teamMembersQuery);
  } catch (err) {
    console.warn('Could not fetch team from Sanity, using fallback array:', err);
  }

  // Google JSON-LD LegalService & Employee Schema
  const teamSchema = {
    '@context': 'https://schema.org',
    '@type': 'LegalService',
    name: 'Invictus Corporate & Legal Consultants (ICLC)',
    url: 'https://iclc.com.pk/team',
    description: 'Premier law firm in Pakistan providing corporate, commercial, civil, and criminal litigation representation.',
    employee: (members || []).map((m) => ({
      '@type': 'Person',
      name: m.name,
      jobTitle: m.role,
      description: m.bio || `Legal practitioner at ICLC ${m.location || 'Pakistan'} office.`,
      worksFor: {
        '@type': 'LegalService',
        name: 'Invictus Corporate & Legal Consultants',
      },
    })),
  };

  return (
    <div className="pt-20 pb-24 bg-white min-h-screen">
      {/* Google Schema for Attorneys */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(teamSchema) }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">
        <SectionHeading 
          title="Our Legal Experts" 
          subtitle="Experienced Counsel" 
          centered={true}
        />
        <p className="text-center text-slate-600 max-w-3xl mx-auto -mt-6 mb-16 text-lg font-light leading-relaxed">
          Led by seasoned partners, our practice delivers agile, pragmatic, and high-impact legal advice across constitutional, commercial, and litigation matters.
        </p>

        <TeamGrid sanityMembers={members} />
      </div>
    </div>
  );
}
