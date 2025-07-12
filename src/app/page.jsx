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
    <div className="min-h-screen">
      {/* Hero loads immediately without animation wrapper for better performance */}
      <HeroSection />
      
      <motion.div 
        initial="hidden" 
        whileInView="visible" 
        viewport={viewport} 
        variants={fadeInUp}
        className="motion-element"
      >
        <TeamSection />
      </motion.div>
      
      <motion.div 
        initial="hidden" 
        whileInView="visible" 
        viewport={viewport} 
        variants={fadeInUp}
        className="motion-element"
      >
        <ExpertiseSection />
      </motion.div>
      
      <motion.div 
        initial="hidden" 
        whileInView="visible" 
        viewport={viewport} 
        variants={fadeInUp}
        className="motion-element"
      >
        <CaseStudiesSection />
      </motion.div>
      
      <motion.div 
        initial="hidden" 
        whileInView="visible" 
        viewport={viewport} 
        variants={fadeInUp}
        className="motion-element"
      >
        <PortfolioSection />
      </motion.div>
      
      <motion.div 
        initial="hidden" 
        whileInView="visible" 
        viewport={viewport} 
        variants={fadeInUp}
        className="motion-element"
      >
        <TestimonialsSection />
      </motion.div>
      
      <motion.div 
        initial="hidden" 
        whileInView="visible" 
        viewport={viewport} 
        variants={fadeInUp}
        className="motion-element"
      >
        <ContactUsSection />
      </motion.div>
    </div>
  );
}