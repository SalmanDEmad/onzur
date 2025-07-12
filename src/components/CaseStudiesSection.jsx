"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion } from "motion/react"
import { commonStyles } from "../lib/design-system";

const caseStudiesData = [
  {
    id: "spice-fusion",
    name: "Spice Fusion Restaurant",
    logo: "/assets/images/spice-fusion-logo.svg",
    logoDark: "/assets/images/spice-fusion-logo-dark.svg",
    bgColor: "#04E4FF",
    title: "Spice Fusion Restaurant:",
    subtitle: "Professional Food Photography & Platform Integration",
    mainDescription: "Challenge: Needed high-quality food photography for menu presentation and online delivery platform integration. Solution: Onzur Marketing conducted a professional food photography session, optimizing images for online menus.",
    achievementIntro: "Results achieved:",
    metric1: {
      value: "100",
      unit: "%",
      description: "successful integration with Talabat & Snoonu",
    },
    metric2: {
      value: "Significant",
      unit: "",
      description: "improvement in online sales & customer engagement",
    },
    ctaLink: "/case-studies/spice-fusion",
    ctaText: "View Spice Fusion Results",
  },
  {
    id: "megabyte-store",
    name: "Megabyte Store",
    logo: "/assets/images/megabyte-logo.svg",
    logoDark: "/assets/images/megabyte-logo-dark.svg",
    bgColor: "#04E4FF",
    title: "Megabyte Store:",
    subtitle: "Electronics Store Digital Transformation",
    mainDescription: "Challenge: Low product sales and limited online presence. Solution: Managed Meta and TikTok ads, created engaging content, and optimized campaigns for electronics and gadgets.",
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
    logo: "/assets/images/islamic-scholars-logo.svg",
    logoDark: "/assets/images/islamic-scholars-logo-dark.svg",
    bgColor: "#04E4FF",
    title: "Islamic Scholars Project:",
    subtitle: "Expanding Reach for Islamic Education",
    mainDescription: "Challenge: Expanding reach for Islamic education on social media. Solution: Developed and managed Dr. Abdurrahman Shaybani's TikTok content strategy and onboarded multiple scholars.",
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

const CaseStudiesSection = () => {
  const [activeTab, setActiveTab] = useState(caseStudiesData[0].id);
  const activeStudy =
    caseStudiesData.find((study) => study.id === activeTab) ||
    caseStudiesData[0];

  return (
    <section className="bg-gradient-to-b from-[#D9F0FF] to-white text-[#1B2C5C]">
      <div className="flex flex-col lg:flex-row min-h-[1100px] max-w-[1920px] mx-auto">
        {/* Left Panel: Tabs & Title */}
        <div className="w-full lg:w-[672px] bg-[#131848] relative text-white p-8 md:p-16">
          <Image
            src="/assets/images/case-studies-bg.png"
            alt="Case Studies Background"
            fill
            style={{ objectFit: "cover" }}
            className="opacity-60"
          />
          <div className="relative z-10">
            <h2 className={`${commonStyles.heading1} mb-12 text-shadow-lg`}>
              Case <span className="text-[#04E4FF]">Studies</span>
            </h2>
            <motion.div
              className="space-y-1"
              initial="hidden"
              animate="visible"
              variants={tabVariants}
            >
              {caseStudiesData.map((study) => (
                <motion.button
                  key={study.id}
                  onClick={() => setActiveTab(study.id)}
                  whileHover={{ x: 5 }}
                  className={`w-full text-left p-5 pl-0 pr-10 transition-colors duration-300 relative flex items-center ${activeTab === study.id
                    ? "text-white"
                    : "text-white/70 hover:text-white"
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
                    <div
                      className="absolute right-0 top-0 bottom-0 w-1"
                      style={{ backgroundColor: study.bgColor }}
                    ></div>
                  )}
                </motion.button>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Right Panel: Content */}
        <motion.div
          key={activeTab}
          initial="hidden"
          animate="visible"
          variants={contentVariants}
          className="w-full lg:flex-1 p-8 md:p-16 lg:p-24 relative"
        >
          <div className="absolute top-10 right-10 opacity-5 w-1/2 max-w-xs">
            <Image
              src={activeStudy.logoDark}
              alt={`${activeStudy.name} dark logo`}
              width={200}
              height={200}
              style={{ objectFit: "contain" }}
            />
          </div>

          <div className="max-w-2xl relative z-10">
            <h3 className={`${commonStyles.heading2} font-light mb-2 text-[#1B2C5C]`}>
              {activeStudy.title}
            </h3>
            <h4 className={`${commonStyles.heading3} font-light mb-10 text-[#1B2C5C]/80`}>
              {activeStudy.subtitle}
            </h4>

            <div className="flex items-center mb-8">
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
            </div>

            <p className={`${commonStyles.bodyLarge} font-normal mb-6 text-[#1B2C5C]`}>
              {activeStudy.mainDescription}
            </p>
            <p className={`${commonStyles.bodyLarge} font-bold mb-10 text-[#1B2C5C]`}>
              {activeStudy.achievementIntro}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-12">
              <div>
                <span className="text-7xl md:text-8xl font-medium bg-clip-text text-transparent bg-gradient-to-b from-[#04E4FF] to-[#00B9FF]">
                  {activeStudy.metric1.value}
                </span>
                <span className="text-4xl md:text-5xl font-medium bg-clip-text text-transparent bg-gradient-to-b from-[#04E4FF] to-[#00B9FF] ml-1">
                  {activeStudy.metric1.unit}
                </span>
                <p className="text-lg mt-2">
                  {activeStudy.metric1.description}
                </p>
              </div>
              <div>
                <span className="text-7xl md:text-8xl font-medium bg-clip-text text-transparent bg-gradient-to-b from-[#04E4FF] to-[#00B9FF]">
                  {activeStudy.metric2.value}
                </span>
                <span className="text-4xl md:text-5xl font-medium bg-clip-text text-transparent bg-gradient-to-b from-[#04E4FF] to-[#00B9FF] ml-1">
                  {activeStudy.metric2.unit}
                </span>
                <p className="text-lg mt-2">
                  {activeStudy.metric2.description}
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
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
              <Link
                href="/request-a-quote"
                className={`${commonStyles.buttonPrimary} group`}
              >
                <span className="relative">Get a custom plan</span>
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
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CaseStudiesSection;