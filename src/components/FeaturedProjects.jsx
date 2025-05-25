"use client";

import { useState } from "react";
import Image from "next/image";

const FeaturedProjects = () => {
  const [activeTab, setActiveTab] = useState("Featured");

  const tabs = [
    {
      id: "Featured",
      label: "Featured",
      icon: "/assets/images/featured-icon.svg",
      active: true,
    },
    {
      id: "B2B",
      label: "B2B",
      icon: "/assets/images/b2b-icon.svg",
      active: false,
    },
    {
      id: "B2C",
      label: "B2C",
      icon: "/assets/images/b2c-icon.svg",
      active: false,
    },
    {
      id: "eCommerce",
      label: "eCommerce",
      icon: "/assets/images/ecommerce-icon.svg",
      active: false,
    },
  ];

  const projects = [
    {
      id: 1,
      image: "/assets/images/project-1.png",
      logo: "/assets/images/remax-logo.png",
      alt: "Remax Project",
    },
    {
      id: 2,
      image: "/assets/images/project-2.png",
      logo: "/assets/images/northwestern-logo.png",
      alt: "Northwestern Project",
    },
    {
      id: 3,
      image: "/assets/images/project-3.png",
      logo: "/assets/images/bang-olufsen-logo.png",
      alt: "Bang & Olufsen Project",
    },
    {
      id: 4,
      image: "/assets/images/project-4.png",
      logo: "/assets/images/rollink-logo.png",
      alt: "Rollink Project",
    },
    {
      id: 5,
      image: "/assets/images/project-5.png",
      logo: "/assets/images/paul-stuart-logo.png",
      alt: "Paul Stuart Project",
    },
    {
      id: 6,
      image: "/assets/images/project-6.png",
      logo: "/assets/images/g2-esports-logo.png",
      alt: "G2 Esports Project",
    },
    {
      id: 7,
      image: "/assets/images/project-7.png",
      logo: "/assets/images/ventura-foods-logo.png",
      alt: "Ventura Foods Project",
    },
    {
      id: 8,
      image: "/assets/images/project-8.png",
      logo: "/assets/images/ventura-foods-logo.png",
      alt: "Featured Project",
    },
  ];

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-[#1E3075] to-[#131848] text-white py-20">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h3 className="text-[22px] font-bold tracking-[5%] uppercase mb-6 text-white">
            OUR WORK
          </h3>
          <p className="text-2xl font-normal leading-[1.4] mb-8 max-w-lg mx-auto">
            Custom B2C, B2B and eCommerce solutions
            <br />
            optimized for traffic, engagement and conversion.
          </p>
          <h2 className="text-[58px] font-bold leading-[1.2] text-white max-w-4xl mx-auto">
            Featured Website Design Projects
          </h2>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="flex gap-2.5 bg-transparent p-0 pb-5">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`relative flex flex-col items-center gap-[14.8px] px-5 py-6 transition-all duration-300 ${
                  activeTab === tab.id
                    ? "bg-white text-[#1B2C5C] shadow-[0px_0px_33px_0px_rgba(0,0,0,0.2)] rounded-[5px]"
                    : "bg-transparent text-white hover:bg-white/10"
                }`}
              >
                {/* Background for active tab */}
                {activeTab === tab.id && (
                  <div className="absolute inset-0 bg-white rounded-[5px]" />
                )}

                {/* Icon */}
                <div className="relative z-10 w-10 h-[26px] flex items-center justify-center">
                  <Image
                    src={tab.icon}
                    alt={`${tab.label} icon`}
                    width={40}
                    height={26}
                    className={
                      activeTab === tab.id ? "filter-blue" : "filter-white"
                    }
                  />
                </div>

                {/* Label */}
                <span
                  className={`relative z-10 text-[22px] font-medium uppercase leading-[1.6] text-center ${
                    activeTab === tab.id ? "text-[#1B2C5C]" : "text-white"
                  }`}
                >
                  {tab.label}
                </span>

                {/* Arrow for active tab */}
                {activeTab === tab.id && (
                  <div className="relative z-10 w-[10.1px] h-[15px]">
                    <Image
                      src="/assets/images/arrow-icon.svg"
                      alt="Arrow"
                      width={10}
                      height={15}
                      className="filter-blue"
                    />
                  </div>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="relative">
          <div className="grid grid-cols-2 gap-0 mb-16">
            {projects.map((project, index) => (
              <div key={project.id} className="relative group cursor-pointer">
                {/* Project Image */}
                <div className="relative w-full h-[528px] overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.alt}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />

                  {/* Logo Container */}
                  <div className="absolute bottom-0 left-0 right-0 h-[60px] flex items-end justify-center pb-4">
                    <div className="bg-white/90 backdrop-blur-sm rounded-lg p-3 shadow-lg">
                      <Image
                        src={project.logo}
                        alt={`${project.alt} logo`}
                        width={100}
                        height={50}
                        className="max-w-[100px] max-h-[50px] object-contain"
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Gradient Overlay */}
          <div className="absolute bottom-0 left-0 right-0 h-[10px] bg-gradient-to-r from-transparent via-[#04E4FF] to-transparent" />
        </div>

        {/* Load More Button */}
        <div className="flex justify-center mt-12">
          <button className="flex items-center gap-5 text-white hover:text-[#04E4FF] transition-colors duration-300 group">
            <span className="text-xl font-bold uppercase tracking-wide">
              Load More Examples
            </span>
            <div className="w-4 h-[15px] transition-transform duration-300 group-hover:translate-x-1">
              <Image
                src="/assets/images/arrow-icon.svg"
                alt="Arrow"
                width={16}
                height={15}
                className="filter-white group-hover:filter-cyan"
              />
            </div>
          </button>
        </div>
      </div>

      <style jsx>{`
        .filter-blue {
          filter: brightness(0) saturate(100%) invert(15%) sepia(45%)
            saturate(1234%) hue-rotate(210deg) brightness(95%) contrast(95%);
        }
        .filter-white {
          filter: brightness(0) saturate(100%) invert(100%);
        }
        .filter-cyan {
          filter: brightness(0) saturate(100%) invert(70%) sepia(100%)
            saturate(2000%) hue-rotate(180deg) brightness(100%) contrast(100%);
        }
      `}</style>
    </section>
  );
};

export default FeaturedProjects;
