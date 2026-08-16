import Image from "next/image";
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import ProjectSection from "../components/ProjectSection";
import CertificationSection from "../components/CertificationSection";

export default function Home() {
  return (
    <main className="flex flex-1 flex-col items-center w-full">
      <HeroSection/>
      <AboutSection/>
      <ProjectSection/>
      <CertificationSection/>
    </main>
  );
}
