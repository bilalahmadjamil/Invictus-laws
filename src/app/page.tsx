import Hero from "@/components/home/Hero";
import About from "@/components/home/About";
import PracticeAreasPreview from "@/components/home/PracticeAreasPreview";
import TeamPreview from "@/components/home/TeamPreview";
import ClientsMarquee from "@/components/home/ClientsMarquee";
import CallToAction from "@/components/home/CallToAction";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <About />
      <PracticeAreasPreview />
      <TeamPreview />
      <ClientsMarquee />
      <CallToAction />
    </div>
  );
}
