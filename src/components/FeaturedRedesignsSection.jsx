"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const redesignData = [
  {
    id: "new-church",
    name: "New Church",
    logo: "/assets/images/new-church-logo-redesign.png",
    beforeAfterImage: "/assets/images/placeholder-before-after.png", // Placeholder, update with actual image
  },
  {
    id: "powr",
    name: "Powr",
    logo: "/assets/images/powr-logo-redesign.png",
    beforeAfterImage: "/assets/images/placeholder-before-after.png", // Placeholder
  },
  {
    id: "aubg",
    name: "American University in Bulgaria",
    logo: "/assets/images/aubg-logo-redesign.png",
    beforeAfterImage: "/assets/images/aubg-before-after-redesign.png",
  },
  {
    id: "ventura-foods",
    name: "Ventura Foods",
    logo: "/assets/images/ventura-foods-logo-redesign.png",
    beforeAfterImage: "/assets/images/placeholder-before-after.png", // Placeholder
  },
  {
    id: "verus-tech",
    name: "Verus Tech Group",
    logo: "/assets/images/verus-tech-logo-redesign.png",
    beforeAfterImage: "/assets/images/placeholder-before-after.png", // Placeholder
  },
];

export default function FeaturedRedesignsSection() {
  const [activeIndex, setActiveIndex] = useState(2); // Default to AUBG as it has an image

  const handleLogoClick = (index) => {
    setActiveIndex(index);
  };

  const handlePrev = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? redesignData.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === redesignData.length - 1 ? 0 : prevIndex + 1
    );
  };

  const activeClient = redesignData[activeIndex];

  return (
    <section className="bg-white py-20 md:py-28">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <p className="text-sm md:text-base text-[#00B9FF] font-bold tracking-[0.05em] uppercase mb-2">
            Before & After
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-[#1B2C5C] mb-4">
            Featured Website Redesigns
          </h2>
          <p className="text-lg md:text-xl text-[#5F6568] max-w-3xl mx-auto mb-2">
            Our web design agency reimagines digital experiences for brands of
            all sizes and across industries.
          </p>
          <p className="text-xl md:text-2xl text-[#5F6568] font-bold max-w-3xl mx-auto">
            Explore our redesign portfolio.
          </p>
        </div>

        {/* Client Logos Selector */}
        <div className="relative mb-8 md:mb-12">
          <div className="flex justify-center items-center border-b border-t border-gray-200 py-4">
            {redesignData.map((client, index) => (
              <div
                key={client.id}
                className={`cursor-pointer px-4 md:px-8 py-4 relative group flex-shrink-0 ${
                  activeIndex === index ? "border-b-4 border-[#90C404]" : ""
                }`}
                onClick={() => handleLogoClick(index)}
              >
                <div className="relative w-24 h-12 md:w-36 md:h-16 mx-auto">
                  <Image
                    src={client.logo}
                    alt={`${client.name} logo`}
                    layout="fill"
                    objectFit="contain"
                    className={
                      activeIndex === index
                        ? ""
                        : "opacity-50 group-hover:opacity-100 transition-opacity"
                    }
                  />
                </div>
                {activeIndex === index && (
                  <div className="absolute left-1/2 bottom-[-10px] transform -translate-x-1/2">
                    <div className="w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-b-[8px] border-b-[#90C404]"></div>
                  </div>
                )}
              </div>
            ))}
          </div>
          <div className="absolute top-1/2 left-0 right-0 transform -translate-y-1/2 flex justify-between pointer-events-none">
            {redesignData.map(
              (_, index) =>
                index < redesignData.length - 1 && (
                  <div
                    key={`divider-${index}`}
                    className="h-16 md:h-20 w-px bg-gray-200 opacity-50 mx-auto"
                    style={{
                      marginLeft:
                        index === 0
                          ? "calc(50% / 4 - 1px)"
                          : "calc(100% / 4 - 1px)",
                    }}
                  ></div>
                )
            )}
          </div>
        </div>

        {/* Before & After Image Display */}
        <div className="relative max-w-5xl mx-auto mb-12 md:mb-16">
          <div className="relative aspect-[1400/450]">
            {" "}
            {/* Aspect ratio from Figma image */}
            <Image
              src={activeClient.beforeAfterImage}
              alt={`${activeClient.name} website redesign before and after`}
              layout="fill"
              objectFit="cover"
              priority={true}
              className="rounded-lg shadow-xl"
            />
          </div>
          <div className="absolute top-1/2 -translate-y-1/2 left-[-20px] md:left-[-60px]">
            <button
              onClick={handlePrev}
              className="bg-white/80 hover:bg-white p-2 md:p-3 rounded-full shadow-md transition-colors"
              aria-label="Previous redesign"
            >
              <Image
                src="/assets/images/arrow-left-circle-redesign.svg"
                alt="Previous"
                width={24}
                height={24}
                className="w-5 h-5 md:w-6 md:h-6"
              />
            </button>
          </div>
          <div className="absolute top-1/2 -translate-y-1/2 right-[-20px] md:right-[-60px]">
            <button
              onClick={handleNext}
              className="bg-white/80 hover:bg-white p-2 md:p-3 rounded-full shadow-md transition-colors"
              aria-label="Next redesign"
            >
              <Image
                src="/assets/images/arrow-right-circle-redesign.svg"
                alt="Next"
                width={24}
                height={24}
                className="w-5 h-5 md:w-6 md:h-6"
              />
            </button>
          </div>
          <div className="absolute top-4 left-1/2 transform -translate-x-[calc(50%-25px)] md:-translate-x-[calc(50%-50px)] flex items-center space-x-8">
            <span className="text-sm md:text-lg font-bold text-white uppercase tracking-widest bg-black/50 px-3 py-1 rounded">
              BEFORE
            </span>
          </div>
          <div className="absolute top-4 right-1/2 transform translate-x-[calc(50%-25px)] md:translate-x-[calc(50%-50px)] flex items-center space-x-8">
            <span className="text-sm md:text-lg font-bold text-white uppercase tracking-widest bg-black/50 px-3 py-1 rounded">
              AFTER
            </span>
          </div>
        </div>

        {/* Gradient Line */}
        <div className="relative h-2.5 mb-12 md:mb-16">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#04E4FF] to-transparent"></div>
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <Link href="/portfolio" legacyBehavior>
            <a className="inline-flex items-center justify-center px-8 py-3 md:px-10 md:py-4 border border-transparent text-base md:text-lg font-medium rounded-md text-white bg-[#01AFE9] hover:bg-[#019BD6] transition-colors">
              Click here to view more
              <Image
                src="/assets/images/arrow-right-long-redesign.svg"
                alt=""
                width={20}
                height={10}
                className="ml-3 w-5 h-auto"
              />
            </a>
          </Link>
        </div>
      </div>
    </section>
  );
}
