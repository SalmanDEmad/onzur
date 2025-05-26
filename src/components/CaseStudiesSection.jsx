"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const caseStudiesData = [
  {
    id: "hp",
    name: "HP",
    logo: "/assets/images/hp-logo-case-study.svg", // Placeholder
    logoDark: "/assets/images/placeholder-logo-dark.svg", // Using generic dark placeholder
    bgColor: "#04E4FF", // Approx color from active tab
    title: "From Concept To Market:",
    subtitle: "We Engineer Projects For Superior Performance",
    mainDescription: "HP needed to implement a global rewards program.",
    achievementIntro: "In 6 months, we achieved:",
    metric1: {
      value: "40",
      unit: "K",
      description: "active members inside the program",
    },
    metric2: {
      value: "56",
      unit: "%",
      description: "of customers are repeat customers",
    },
    ctaLink: "/case-studies/hp",
    ctaText: "Read HP Case Study",
  },
  {
    id: "xerox",
    name: "Xerox",
    logo: "/assets/images/xerox-logo-case-study.svg", // Placeholder
    logoDark: "/assets/images/xerox-logo-dark.svg", // Placeholder - assuming a dark version exists
    bgColor: "#04E4FF", // Default, will be overridden by active tab style
    title: "Driving Growth for Xerox:",
    subtitle: "Strategic Web Solutions for a Tech Giant",
    mainDescription:
      "Xerox aimed to enhance their online engagement and lead generation.",
    achievementIntro: "Our campaign resulted in:",
    metric1: {
      value: "30",
      unit: "%",
      description: "increase in qualified leads",
    },
    metric2: {
      value: "25",
      unit: "%",
      description: "growth in organic traffic",
    },
    ctaLink: "/case-studies/xerox",
    ctaText: "Read Xerox Case Study",
  },
  // Add other case studies here, using placeholders for logos
  {
    id: "doforms",
    name: "doForms",
    logo: "/assets/images/doforms-logo-case-study.svg", // Placeholder
    logoDark: "/assets/images/doforms-logo-dark.svg", // Placeholder
    bgColor: "#04E4FF",
    title: "Mobile Forms Transformation:",
    subtitle: "Empowering Field Teams with doForms",
    mainDescription:
      "doForms required a platform to showcase their mobile form solutions effectively.",
    achievementIntro: "We delivered:",
    metric1: {
      value: "200",
      unit: "%",
      description: "uplift in demo requests",
    },
    metric2: {
      value: "70",
      unit: "%",
      description: "reduction in bounce rate",
    },
    ctaLink: "/case-studies/doforms",
    ctaText: "Read doForms Case Study",
  },
  {
    id: "fieldedge",
    name: "FieldEdge",
    logo: "/assets/images/fieldedge-logo-case-study.svg", // Placeholder
    logoDark: "/assets/images/fieldedge-logo-dark.svg", // Placeholder
    bgColor: "#04E4FF",
    title: "Streamlining Field Services:",
    subtitle: "Digital Overhaul for FieldEdge",
    mainDescription:
      "FieldEdge sought to improve their digital presence and user journey.",
    achievementIntro: "Key outcomes:",
    metric1: {
      value: "45",
      unit: "%",
      description: "conversion rate improvement",
    },
    metric2: {
      value: "15K",
      unit: "+",
      description: "new monthly active users",
    },
    ctaLink: "/case-studies/fieldedge",
    ctaText: "Read FieldEdge Case Study",
  },
  {
    id: "mcds",
    name: "MCDS",
    logo: "/assets/images/mcds-logo-case-study.svg", // Placeholder
    logoDark: "/assets/images/mcds-logo-dark.svg", // Placeholder
    bgColor: "#04E4FF",
    title: "Educational Excellence Online:",
    subtitle: "Crafting a New Web Experience for MCDS",
    mainDescription:
      "Miami Country Day School needed a website that reflected its prestige.",
    achievementIntro: "The new site led to:",
    metric1: {
      value: "60",
      unit: "%",
      description: "increase in parent engagement",
    },
    metric2: {
      value: "90",
      unit: "%",
      description: "positive feedback from community",
    },
    ctaLink: "/case-studies/mcds",
    ctaText: "Read MCDS Case Study",
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
            <h2 className="text-6xl md:text-7xl font-bold mb-12 text-shadow-custom">
              Case <span className="text-[#131848]">Studies</span>
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
            <h3 className="text-3xl md:text-4xl font-light mb-2">
              {activeStudy.title}
            </h3>
            <h4 className="text-3xl md:text-4xl font-light mb-10">
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

            <p className="text-xl md:text-2xl font-normal mb-6">
              {activeStudy.mainDescription}
            </p>
            <p className="text-xl md:text-2xl font-bold mb-10">
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
                className="inline-flex items-center justify-center bg-white/10 text-[#3B7BCE] text-lg font-bold uppercase py-4 px-8 rounded-md border-2 border-[#3B7BCE] hover:bg-[#3B7BCE]/10 transition-colors group relative shadow-md hover:shadow-lg"
              >
                <span className="absolute inset-[-3px] border-4 border-[#3B7BCE]/60 rounded-lg blur-[4px] opacity-60 group-hover:opacity-80 transition-opacity"></span>
                <span className="relative">{activeStudy.ctaText}</span>
                <div className="relative w-3 h-4 ml-3">
                  {/* Placeholder for arrow icon */}
                  <Image
                    src="/assets/images/arrow-right-blue.svg"
                    alt="Arrow right"
                    fill
                    style={{ objectFit: "contain" }}
                  />
                </div>
              </Link>
              <Link
                href="/request-a-quote"
                className="inline-flex items-center justify-center bg-[#3B7BCE] text-white text-lg font-bold uppercase py-4 px-8 rounded-md border-2 border-[#3B7BCE] hover:bg-[#3068b0] transition-colors group relative shadow-md hover:shadow-lg"
              >
                <span className="relative">Get a custom plan</span>
                <div className="relative w-3 h-4 ml-3">
                  {/* Placeholder for arrow icon, should be white */}
                  <Image
                    src="/assets/images/arrow-right-white.svg"
                    alt="Arrow right"
                    fill
                    style={{ objectFit: "contain" }}
                  />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesSection;
