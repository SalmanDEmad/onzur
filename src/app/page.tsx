"use client";

import { motion } from "motion/react";
import { fadeInUp, viewport } from "../lib/animation-variants";
import HeroSection from "../components/HeroSection";
import TeamSection from "../components/TeamSection";
import ExpertiseSection from "../components/ExpertiseSection";
import CaseStudiesSection from "../components/CaseStudiesSection";
import PortfolioSection from "../components/PortfolioSection";
import TestimonialsSection from "../components/TestimonialsSection";
import ContactUsSection from "../components/ContactUsSection";

// Wrapper for smooth section reveal on scroll
const RevealSection = ({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-80px" }}
    transition={{ duration: 0.7, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
  >
    {children}
  </motion.div>
);

export default function Home() {
  return (
    <div className="min-h-screen bg-[#00042A]" data-anim="on">
      {/* Hero loads immediately for best LCP */}
      <HeroSection />

      {/* Services / Expertise */}
      <RevealSection>
        <ExpertiseSection />
      </RevealSection>

      {/* Team */}
      <RevealSection>
        <TeamSection />
      </RevealSection>

      {/* Case Studies */}
      <RevealSection>
        <CaseStudiesSection />
      </RevealSection>

      {/* Portfolio */}
      <RevealSection>
        <PortfolioSection />
      </RevealSection>

      {/* Testimonials */}
      <RevealSection>
        <TestimonialsSection />
      </RevealSection>

      {/* Contact */}
      <RevealSection>
        <ContactUsSection />
      </RevealSection>
    </div>
  );
}
