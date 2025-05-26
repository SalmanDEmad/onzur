import Image from "next/image";
import FeaturedProjects from "../components/FeaturedProjects";
import CreativeAgencySection from "../components/CreativeAgencySection.jsx";
import HeroSection from "../components/HeroSection.jsx";
import ClientsSection from "../components/ClientsSection.jsx";
import ExpertiseSection from "../components/ExpertiseSection.jsx";
import CaseStudiesSection from "../components/CaseStudiesSection.jsx";
import TestimonialsSection from "../components/TestimonialsSection.jsx";
import CmsPlatformsSection from "../components/CmsPlatformsSection.jsx";
import DesignProcessSection from "../components/DesignProcessSection.jsx";
import PricingInfoSection from "../components/PricingInfoSection.jsx";
import FeaturedRedesignsSection from "../components/FeaturedRedesignsSection.jsx";
import FaqSection from "../components/FaqSection.jsx";
import StayAheadSection from "../components/StayAheadSection.jsx";

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <CreativeAgencySection />
      <FeaturedProjects />
      <ClientsSection />
      <ExpertiseSection />
      <CaseStudiesSection />
      <TestimonialsSection />
      <CmsPlatformsSection />
      <DesignProcessSection />
      <PricingInfoSection />
      <FeaturedRedesignsSection />
      <FaqSection />
      <StayAheadSection />
    </main>
  );
}
