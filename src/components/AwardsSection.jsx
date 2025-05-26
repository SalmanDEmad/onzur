"use client";
import { useState } from "react";
import Image from "next/image";

const awardLogos = {
  awards: [
    { src: "/assets/images/ima-award-logo.svg", alt: "IMA Award" },
    { src: "/assets/images/telly-award-logo.svg", alt: "Telly Award" },
    { src: "/assets/images/marcom-awards-logo.png", alt: "Marcom Awards" },
    {
      src: "/assets/images/horizon-interactive-award-logo.svg",
      alt: "Horizon Interactive Award",
    },
    {
      src: "/assets/images/communicator-award-logo.svg",
      alt: "Communicator Award",
    },
    { src: "/assets/images/videographer-logo.png", alt: "Videographer Logo" },
    { src: "/assets/images/awwwards-logo.svg", alt: "Awwwards Logo" },
    { src: "/assets/images/w3-award-logo.svg", alt: "W3 Award" },
  ],
  recognition: [
    // Placeholder - Add specific logos for Recognition tab if available
    {
      src: "/assets/images/placeholder-logo.svg",
      alt: "Recognition Placeholder 1",
    },
    {
      src: "/assets/images/placeholder-logo.svg",
      alt: "Recognition Placeholder 2",
    },
  ],
  expertise: [
    // Placeholder - Add specific logos for Expertise tab if available
    {
      src: "/assets/images/placeholder-logo.svg",
      alt: "Expertise Placeholder 1",
    },
  ],
};

const tabs = [
  { id: "awards", label: "Awards" },
  { id: "recognition", label: "Recognition" },
  { id: "expertise", label: "Expertise" },
];

export default function AwardsSection() {
  const [activeTab, setActiveTab] = useState("awards");

  return (
    <section className="relative bg-[#00042A] text-white py-20 md:py-32 overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <Image
          src="/assets/images/awards-section-bg.png"
          alt="Abstract background gradient"
          layout="fill"
          objectFit="cover"
          className="blur-sm"
        />
      </div>
      <div className="absolute inset-0 opacity-[0.03]">
        <Image
          src="/assets/images/ds-logo-background-awards.svg"
          alt="DS Logo Faded Background"
          layout="fill"
          objectFit="contain"
          objectPosition="center"
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12 md:mb-16">
          <p className="text-lg md:text-xl uppercase tracking-wider font-semibold text-gray-300 mb-2">
            Our Experts Have Won Industry Awards
          </p>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold">
            Recognized Web Design Experts
          </h2>
        </div>

        <div className="mb-10 md:mb-12">
          <div className="flex justify-center border-b-2 border-white/30">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={
                  `py-3 px-6 md:px-10 text-base md:text-lg font-medium uppercase tracking-wide transition-colors duration-300 
                  ${
                    activeTab === tab.id
                      ? "border-b-2 border-white text-white"
                      : "text-white/60 hover:text-white/90"
                  }
                  focus:outline-none -mb-0.5 relative` // -mb-0.5 for border overlap
                }
              >
                {tab.label}
                {activeTab === tab.id && (
                  <div className="absolute bottom-[-2px] left-1/2 transform -translate-x-1/2 w-1/2 h-[3px] bg-gradient-to-r from-transparent via-white to-transparent"></div>
                )}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 md:gap-8 lg:gap-10 items-center justify-items-center mb-16 md:mb-20 px-4 md:px-0">
          {(awardLogos[activeTab] || awardLogos.awards).map((logo, index) => (
            <div
              key={index}
              className="flex justify-center items-center h-20 md:h-28 w-full px-2"
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                width={logo.src.endsWith(".svg") ? 150 : 180} // Adjust width based on type or specific needs
                height={logo.src.endsWith(".svg") ? 60 : 70}
                objectFit="contain"
                className="opacity-80 group-hover:opacity-100 transition-opacity duration-300 max-h-full max-w-full"
              />
            </div>
          ))}
        </div>

        <div className="text-center">
          <button className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white bg-white/10 border-2 border-white rounded-md overflow-hidden transition-all duration-300 ease-in-out hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-[#00042A]">
            <span className="absolute -inset-0.5 rounded-md bg-gradient-to-r from-purple-600 to-blue-500 opacity-0 group-hover:opacity-75 transition-opacity duration-300 blur-md"></span>
            <span className="relative z-10">REQUEST A QUOTE</span>
            <Image
              src="/assets/images/arrow-right-white-awards.svg"
              alt=""
              width={16}
              height={16}
              className="ml-3 relative z-10 transition-transform duration-300 group-hover:translate-x-1"
            />
          </button>
        </div>
      </div>
    </section>
  );
}
