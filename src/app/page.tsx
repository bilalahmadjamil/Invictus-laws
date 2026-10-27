import Hero from "@/components/home/Hero";
import About from "@/components/home/About";
import PracticeAreasPreview from "@/components/home/PracticeAreasPreview";
import TeamPreview from "@/components/home/TeamPreview";
import ClientsMarquee from "@/components/home/ClientsMarquee";
import InsightsPreview from "@/components/home/InsightsPreview";
import CallToAction from "@/components/home/CallToAction";
import { client } from "@/sanity/lib/client";
import { 
  featuredArticlesQuery, 
  articlesQuery, 
  featuredTeamMembersQuery, 
  teamMembersQuery,
  clientOrganizationsQuery,
  siteSettingsQuery
} from "@/sanity/lib/queries";

export const revalidate = 60; // Auto-update homepage content from Sanity every 60s

export default async function Home() {
  let insights = [];
  let team = [];
  let clients = [];
  let settings: any = null;

  try {
    const [
      featuredBlogs, 
      allBlogs, 
      featuredTeam, 
      allTeam, 
      fetchedClients, 
      fetchedSettings
    ] = await Promise.all([
      client.fetch(featuredArticlesQuery),
      client.fetch(articlesQuery),
      client.fetch(featuredTeamMembersQuery),
      client.fetch(teamMembersQuery),
      client.fetch(clientOrganizationsQuery),
      client.fetch(siteSettingsQuery),
    ]);

    // Use featured articles; if admin hasn't marked any featured yet, fallback to top articles
    if (featuredBlogs && featuredBlogs.length > 0) {
      insights = featuredBlogs;
    } else if (allBlogs && allBlogs.length > 0) {
      insights = allBlogs;
    }

    // Use featured team members; if admin hasn't marked any featured yet, fallback to top ordered team members
    if (featuredTeam && featuredTeam.length > 0) {
      team = featuredTeam;
    } else if (allTeam && allTeam.length > 0) {
      team = allTeam.slice(0, 3);
    }

    if (fetchedClients) {
      clients = fetchedClients;
    }

    if (fetchedSettings) {
      settings = fetchedSettings;
    }
  } catch (err) {
    console.warn("Home page Sanity fetch fallback:", err);
  }

  const primaryPhone = settings?.consultationPhone || settings?.offices?.[0]?.phones?.[0] || "+92 313 4891684";

  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <About />
      <PracticeAreasPreview />
      <TeamPreview sanityTeam={team} />
      <ClientsMarquee sanityClients={clients} />
      <InsightsPreview sanityInsights={insights} />
      <CallToAction phone={primaryPhone} />
    </div>
  );
}
