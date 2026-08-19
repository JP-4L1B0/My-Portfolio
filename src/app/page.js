import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import ProjectSection from "../components/ProjectSection";
import CertificationSection from "../components/CertificationSection";
import GrowthSection from "../components/GrowthSection";
import ScrollReveal from "../components/ScrollReveal";

export default function Home() {
  return (
    <main className="flex flex-1 w-full flex-col items-center">
      {/* Enables subtle entrance animations while keeping page content server-rendered. */}
      <ScrollReveal />
      <HeroSection />
      <AboutSection />
      <ProjectSection />
      <GrowthSection />
    </main>
  );
}