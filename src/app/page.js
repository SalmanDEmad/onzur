import Image from "next/image";
import FeaturedProjects from "../components/FeaturedProjects";
import CreativeAgencySection from "../components/CreativeAgencySection.jsx";
import HeroSection from "../components/HeroSection.jsx";

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <CreativeAgencySection />
      <FeaturedProjects />
    </main>
  );
}
