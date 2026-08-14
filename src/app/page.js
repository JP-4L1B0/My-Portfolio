import Image from "next/image";
import HeroSection from "../components/HeroSection";
import ProjectSection from "../components/ProjectSection";

export default function Home() {
  return (
    <main className="flex flex-1 flex-col items-center w-full">
      <HeroSection/>
      <ProjectSection/>
    </main>
  );
}
