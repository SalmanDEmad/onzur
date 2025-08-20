"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion } from "motion/react";
import {
  fadeInUp,
  fadeInLeft,
  fadeInScale,
  staggerContainer,
  fastStagger,
  hoverScale,
  hoverLift,
  viewport,
  getOptimizedTransition,
} from "../lib/animation-variants";
import { commonStyles } from "../lib/design-system";

const caseStudiesData = [
  {
    id: "spice-fusion",
    name: "Spice Fusion Restaurant",
    logo: "/assets/images/placeholder-logo.svg",
    logoDark: "/assets/images/placeholder-logo-dark.svg",
    bgColor: "#04E4FF",
    title: "Spice Fusion Restaurant:",
    subtitle: "Professional Food Photography & Platform Integration",
    mainDescription:
      "Challenge: Needed high-quality food photography for menu presentation and online delivery platform integration. Solution: Onzur Marketing conducted a professional food photography session, optimizing images for online menus.",
    achievementIntro: "Results achieved:",
    metric1: {
      value: "100",
      unit: "%",
      description: "successful integration with Talabat & Snoonu",
    },
    metric2: {
      value: "Major",
      unit: "",
      description: "boost in online sales & engagement",
    },
    ctaLink: "/case-studies/spice-fusion",
    ctaText: "View Spice Fusion Results",
  },
  {
    id: "megabyte-store",
    name: "Megabyte Store",
    logo: "/assets/images/placeholder-logo.svg",
    logoDark: "/assets/images/placeholder-logo-dark.svg",
    bgColor: "#04E4FF",
    title: "Megabyte Store:",
    subtitle: "Electronics Store Digital Transformation",
    mainDescription:
      "Challenge: Low product sales and limited online presence. Solution: Managed Meta and TikTok ads, created engaging content, and optimized campaigns for electronics and gadgets.",
    achievementIntro: "Incredible results:",
    metric1: {
      value: "8",
      unit: "M+",
      description: "TikTok views in 3-4 months",
    },
    metric2: {
      value: "40-50",
      unit: "",
      description: "daily leads generated",
    },
    ctaLink: "/case-studies/megabyte-store",
    ctaText: "View Megabyte Analytics",
  },
  {
    id: "islamic-scholars",
    name: "Islamic Scholars Project",
    logo: "/assets/images/placeholder-logo.svg",
    logoDark: "/assets/images/placeholder-logo-dark.svg",
    bgColor: "#04E4FF",
    title: "Islamic Scholars Project:",
    subtitle: "Expanding Reach for Islamic Education",
    mainDescription:
      "Challenge: Expanding reach for Islamic education on social media. Solution: Developed and managed Dr. Abdurrahman Shaybani's TikTok content strategy and onboarded multiple scholars.",
    achievementIntro: "Outstanding growth:",
    metric1: {
      value: "80",
      unit: "K",
      description: "followers gained in 2 months",
    },
    metric2: {
      value: "4",
      unit: "M",
      description: "views achieved in 2 months",
    },
    ctaLink: "/case-studies/islamic-scholars",
    ctaText: "View Scholar Analytics",
  },
];

const tabVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0 },
};

const contentVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

// Enhanced safe variants
const safeTabVariants = {
  hidden: { opacity: 0, x: -12 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] },
  },
};

const safeContentVariants = {
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] },
  },
};

const CaseStudiesSection = () => {
  const [activeTab, setActiveTab] = useState(caseStudiesData[0].id);
  const activeStudy =
    caseStudiesData.find((study) => study.id === activeTab) ||
    caseStudiesData[0];

  return (
    <motion.section
      id="case-studies"
      className="bg-gradient-to-b from-[#D9F0FF] to-white text-[#1B2C5C] relative overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      variants={staggerContainer}
    >
      <motion.div 
        className="flex flex-col lg:flex-row min-h-[1100px] w-full max-w-full mx-auto"
        variants={fastStagger}
      >
        {/* Left Panel: Tabs & Title */}
        <motion.div
          className="w-full lg:w-[672px] bg-gradient-to-br from-[#00042A] to-[#131848] relative text-white p-8 md:p-16 shadow-2xl"
          variants={fadeInLeft}
        >
          <Image
            src="/assets/images/hero-bg-1.png"
            alt="Case Studies Background"
            fill
            style={{ objectFit: "cover" }}
            className="opacity-60"
            sizes="(max-width: 1024px) 100vw, 672px"
            priority
          />
          <div className="relative z-10">
            <motion.h2
              className={`${commonStyles.heading1} mb-12 text-shadow-lg`}
              variants={fadeInUp}
              whileInView="visible"
              viewport={viewport}
            >
              Case <span className="text-[#04E4FF]">Studies</span>
            </motion.h2>
            <motion.div className="space-y-2" variants={fastStagger}>
              {caseStudiesData.map((study, index) => (
                <motion.button
                  key={study.id}
                  onClick={() => setActiveTab(study.id)}
                  variants={safeTabVariants}
                  whileHover={{ 
                    x: 8, 
                    scale: 1.02,
                    transition: getOptimizedTransition(0.2)
                  }}
                  whileTap={{ scale: 0.98 }}
                  className={`w-full text-left p-6 pl-0 pr-10 rounded-xl transition-all duration-300 relative flex items-center backdrop-blur-sm ${
                    activeTab === study.id
                      ? "text-white bg-white/10 shadow-lg border border-[#04E4FF]/20"
                      : "text-white/70 hover:text-white hover:bg-white/5"
                  }`}
                >
                  <div className="w-24 h-12 relative mr-4 flex items-center justify-start">
                    <Image
                      src={study.logo}
                      alt={`${study.name} logo`}
                      width={
                        study.name === "Xerox" ||
                        study.name === "doForms" ||
                        study.name === "FieldEdge"
                          ? 100
                          : 50
                      }
                      height={
                        study.name === "Xerox" ||
                        study.name === "doForms" ||
                        study.name === "FieldEdge"
                          ? 25
                          : 50
                      }
                      style={{
                        objectFit: "contain",
                        filter:
                          activeTab === study.id
                            ? "none"
                            : "grayscale(100%) opacity(0.7)",
                      }}
                    />
                  </div>
                  {activeTab === study.id && (
                    <motion.div
                      className="absolute right-0 top-0 bottom-0 w-1 rounded-full"
                      style={{ backgroundColor: study.bgColor }}
                      layoutId="activeIndicator"
                      transition={getOptimizedTransition(0.3)}
                    />
                  )}
                </motion.button>
              ))}
            </motion.div>
          </div>
        </motion.div>

        {/* Right Panel: Content */}
        <motion.div
          key={activeTab}
          initial="hidden"
          animate="visible"
          variants={fadeInScale}
          className="w-full lg:flex-1 p-8 md:p-16 lg:p-24 relative bg-white/50 backdrop-blur-sm"
        >
          <motion.div 
            className="absolute top-10 right-10 opacity-5 w-1/2 max-w-xs"
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          >
            <Image
              src={activeStudy.logoDark}
              alt={`${activeStudy.name} dark logo`}
              width={200}
              height={200}
              style={{ objectFit: "contain" }}
            />
          </motion.div>

          <div className="max-w-2xl relative z-10">
            <h3
              className={`${commonStyles.heading2} mb-2 text-[#1B2C5C]`}
            >
              {activeStudy.title}
            </h3>
            <h4
              className={`${commonStyles.heading4} mb-10 text-[#1B2C5C]/80`}
            >
              {activeStudy.subtitle}
            </h4>

            <motion.div 
              className="flex items-center mb-8"
              variants={fadeInUp}
            >
              <div className="w-24 h-24 relative mr-6 flex items-center justify-center">
                <Image
                  src={activeStudy.logoDark}
                  alt={`${activeStudy.name} dark logo`}
                  width={80}
                  height={80}
                  style={{ objectFit: "contain" }}
                />
              </div>
              <hr className="flex-grow border-t-2 border-[#04E4FF]" />
            </motion.div>

            <motion.p
              className={`${commonStyles.bodyLarge} mb-6 text-[#1B2C5C]`}
              variants={fadeInUp}
            >
              {activeStudy.mainDescription}
            </motion.p>
            <motion.p
              className={`${commonStyles.bodyEmphasis} mb-10 text-[#1B2C5C]`}
              variants={fadeInUp}
            >
              {activeStudy.achievementIntro}
            </motion.p>

            <motion.div 
              className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12"
              variants={staggerContainer}
            >
              <motion.div 
                className="flex flex-col p-6 rounded-xl bg-gradient-to-br from-white/80 to-[#D9F0FF]/50 shadow-lg backdrop-blur-sm border border-[#04E4FF]/10"
                variants={fadeInScale}
                whileHover={hoverLift}
              >
                <div className="flex items-baseline mb-2">
                  <span className="text-6xl md:text-7xl font-poppins font-bold bg-clip-text text-transparent bg-gradient-to-b from-[#04E4FF] to-[#00B9FF] tracking-tight">
                    {activeStudy.metric1.value}
                  </span>
                  <span className="text-3xl md:text-4xl font-poppins font-semibold bg-clip-text text-transparent bg-gradient-to-b from-[#04E4FF] to-[#00B9FF] ml-1 tracking-tight">
                    {activeStudy.metric1.unit}
                  </span>
                </div>
                <p className={`${commonStyles.bodyBase} text-[#1B2C5C]/80`}>
                  {activeStudy.metric1.description}
                </p>
              </motion.div>
              <motion.div 
                className="flex flex-col p-6 rounded-xl bg-gradient-to-br from-white/80 to-[#D9F0FF]/50 shadow-lg backdrop-blur-sm border border-[#04E4FF]/10"
                variants={fadeInScale}
                whileHover={hoverLift}
              >
                <div className="flex items-baseline mb-2">
                  <span className="text-6xl md:text-7xl font-poppins font-bold bg-clip-text text-transparent bg-gradient-to-b from-[#04E4FF] to-[#00B9FF] tracking-tight">
                    {activeStudy.metric2.value}
                  </span>
                  <span className="text-3xl md:text-4xl font-poppins font-semibold bg-clip-text text-transparent bg-gradient-to-b from-[#04E4FF] to-[#00B9FF] ml-1 tracking-tight">
                    {activeStudy.metric2.unit}
                  </span>
                </div>
                <p className={`${commonStyles.bodyBase} text-[#1B2C5C]/80`}>
                  {activeStudy.metric2.description}
                </p>
              </motion.div>
            </motion.div>

            <motion.div 
              className="flex flex-col sm:flex-row gap-4"
              variants={staggerContainer}
            >
              <motion.div variants={fadeInUp}>
                <Link
                  href={activeStudy.ctaLink}
                  className={`${commonStyles.buttonSecondary} group`}
                >
                  <span className="relative">{activeStudy.ctaText}</span>
                  <svg
                    className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </Link>
              </motion.div>
              <motion.div variants={fadeInUp}>
                <Link
                  href="/request-a-quote"
                  className={`${commonStyles.buttonPrimary} group`}
                >
                  <span className="relative">Start Your Success Story</span>
                  <svg
                    className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default CaseStudiesSection;
