import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Legal Insights & Blog | ICLC',
  description: 'Stay updated with the latest legal developments, professional guides, and expert perspectives from the team at Invictus Corporate & Legal Consultants.',
};

export default function InsightsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
