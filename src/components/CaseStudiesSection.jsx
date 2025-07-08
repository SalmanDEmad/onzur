"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { commonStyles } from "../lib/design-system";

const caseStudiesData = [
  {
    id: "spice-fusion",
    name: "Spice Fusion",
    logo: "/assets/images/spice-fusion-logo.svg", // Placeholder
    logoDark: "/assets/images/spice-fusion-logo-dark.svg", // Placeholder
    bgColor: "#04E4FF",
    title: "Spice Fusion Restaurant:",
    subtitle: "Transforming Food Delivery with Professional Photography",
    mainDescription: "Spice Fusion needed professional menu photography and integration with delivery platforms.",
    achievementIntro: "Our solution delivered:",
    metric1: {
      value: "30",
      unit: "%",
      description: "increase in online orders",
    },
    metric2: {
      value: "100",
      unit: "%",
      description: "integration with Talabat & Snoonu",
    },
    ctaLink: "/case-studies/spice-fusion",
    ctaText: "Read Spice Fusion Case Study",
  },
  {
    id: "megabyte-store",
    name: "Megabyte Store",
    logo: "/assets/images/megabyte-logo.svg", // Placeholder
    logoDark: "/assets/images/megabyte-logo-dark.svg", // Placeholder
    bgColor: "#04E4FF",
    title: "Megabyte Store:",
    subtitle: "From Low Sales to Viral Success",
    mainDescription: "Megabyte Store had low sales and weak online presence. We implemented a comprehensive Meta & TikTok advertising strategy.",
    achievementIntro: "Results achieved:",
    metric1: {
      value: "8",
      unit: "M",
      description: "TikTok views in 3-4 months",
    },
    metric2: {
      value: "10-12",
      unit: "",
      description: "daily product sales",
    },
    ctaLink: "/case-studies/megabyte-store",
    ctaText: "Read Megabyte Case Study",
  },
  {
    id: "islamic-scholars",
    name: "Islamic Scholars",
    logo: "/assets/images/islamic-scholars-logo.svg", // Placeholder
    logoDark: "/assets/images/islamic-scholars-logo-dark.svg", // Placeholder
    bgColor: "#04E4FF",
    title: "Islamic Scholars Project:",
    subtitle: "Amplifying Islamic Knowledge Through Digital Storytelling",
    mainDescription: "Our mission was to amplify Islamic knowledge through strategic TikTok content creation for Dr. Shaybani and other scholars.",
    achievementIntro: "Impact achieved:",
    metric1: {
      value: "80",
      unit: "K",
      description: "followers for Dr. Shaybani",
    },
    metric2: {
      value: "4",
      unit: "M",
      description: "views in 2 months",
    },
    ctaLink: "/case-studies/islamic-scholars",
    ctaText: "Read Islamic Scholars Case Study",
  },
];

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
            <div className="space-y-1">
              {caseStudiesData.map((study) => (
                <button
                  key={study.id}
                  onClick={() => setActiveTab(study.id)}
                  className={`w-full text-left p-5 pl-0 pr-10 transition-colors duration-300 relative flex items-center ${
                    activeTab === study.id
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
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Right Panel: Content */}
        <div className="w-full lg:flex-1 p-8 md:p-16 lg:p-24 relative">
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
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesSection;
