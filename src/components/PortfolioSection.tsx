"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { commonStyles } from "../lib/design-system";
import { useLanguage } from "../contexts/LanguageContext";
import { portfolioProjects } from "../data/portfolio";
import OptimizedImage from "./OptimizedImage";



const PortfolioSection = () => {
  const { t, language, isRTL } = useLanguage();
  return (
    <section id="portfolio" className="bg-[#00042A] py-12 md:py-20 relative overflow-hidden min-h-screen"
      style={{ opacity: 1, visibility: 'visible', display: 'block' }}
    >
      {/* Background gradients */}
      <div className="absolute inset-0 opacity-30">
        <motion.div 
          className="absolute top-0 left-0 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"
          animate={{
            x: [0, 50, 0],
            y: [0, -30, 0]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"
          animate={{
            x: [0, -30, 0],
            y: [0, 20, 0]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <div className="container mx-auto px-4 max-w-7xl relative z-10" style={{ opacity: 1 }}>
        <div className="text-center mb-8 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white mb-4 md:mb-6">
            {t('portfolio.heading')}
          </h2>
          <p className="text-base md:text-lg lg:text-xl text-white/80 max-w-2xl mx-auto">
            {t('portfolio.subheading')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8" style={{ opacity: 1 }}>
          {portfolioProjects.map((project, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-0 overflow-hidden group cursor-pointer transition-all duration-300 hover:bg-white/15 hover:shadow-lg"
              style={{ opacity: 1, display: 'block' }}
            >
              <motion.div 
                className="relative h-48 overflow-hidden"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <OptimizedImage
                  src={project.image}
                  alt={project.title[language]}
                  fill
                  objectFit="cover"
                  className="transition-transform duration-500 group-hover:scale-110"
                  priority={index < 3}
                  quality={80}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"
                  whileHover={{ opacity: 0.8 }}
                  transition={{ duration: 0.3 }}
                />
                <motion.div
                  className="absolute top-4 right-4 w-8 h-8 bg-[#04E4FF]/20 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100"
                  whileHover={{ scale: 1.2, rotate: 90 }}
                  transition={{ duration: 0.3 }}
                >
                  <svg className="w-4 h-4 text-[#04E4FF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </motion.div>
              </motion.div>
              
              <div className="p-6">
                <h3 className={`${commonStyles.heading3} text-white mb-3`}>
                  {project.title[language]}
                </h3>
                <p className={`${commonStyles.bodyBase} text-white/80 mb-3`}>
                  {project.description[language]}
                </p>
                <p className="text-[#04E4FF] font-semibold mb-4">
                  {project.metrics[language]}
                </p>
                
                {project.link !== "#" && (
                  <Link
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${commonStyles.buttonGhost} group/button inline-flex items-center`}
                  >
                    <span className="flex items-center transition-transform duration-300 group-hover/button:translate-x-1">
                      {t('portfolio.viewProject')}
                      <svg
                        className="ml-2 w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                      </svg>
                    </span>
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;