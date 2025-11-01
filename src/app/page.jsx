"use client";

import { motion } from "motion/react";
import { fadeInUp, viewport } from "../lib/animation-variants";
import HeroSection from "../components/HeroSection.jsx";
import TeamSection from "../components/TeamSection.jsx";
import ExpertiseSection from "../components/ExpertiseSection.jsx";
import CaseStudiesSection from "../components/CaseStudiesSection.jsx";
import PortfolioSection from "../components/PortfolioSection.jsx";
import TestimonialsSection from "../components/TestimonialsSection.jsx";
import ContactUsSection from "../components/ContactUsSection.jsx";

export default function Home() {
  return (
    <div className="min-h-screen" data-anim="on">
      {/* Hero loads immediately without animation wrapper for better performance */}
      <HeroSection />
      <TeamSection />
      <ExpertiseSection />
      <CaseStudiesSection />
      <PortfolioSection />
      <TestimonialsSection />
      <ContactUsSection />
    </div>
  );
}
