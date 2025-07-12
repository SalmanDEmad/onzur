"use client";

import Image from "next/image";
import { motion } from "motion/react"
import HeroSection from "../components/HeroSection.jsx";
import TeamSection from "../components/TeamSection.jsx";
import ExpertiseSection from "../components/ExpertiseSection.jsx";
import CaseStudiesSection from "../components/CaseStudiesSection.jsx";
import PortfolioSection from "../components/PortfolioSection.jsx";
import TestimonialsSection from "../components/TestimonialsSection.jsx";
import ContactUsSection from "../components/ContactUsSection.jsx";

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

export default function Home() {
  return (
    <main className="min-h-screen">
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={sectionVariants}>
        <HeroSection />
      </motion.div>
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={sectionVariants}>
        <TeamSection />
      </motion.div>
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={sectionVariants}>
        <ExpertiseSection />
      </motion.div>
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={sectionVariants}>
        <CaseStudiesSection />
      </motion.div>
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={sectionVariants}>
        <PortfolioSection />
      </motion.div>
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={sectionVariants}>
        <TestimonialsSection />
      </motion.div>
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={sectionVariants}>
        <ContactUsSection />
      </motion.div>
    </main>
  );
}