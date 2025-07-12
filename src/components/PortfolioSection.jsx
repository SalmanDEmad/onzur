"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { commonStyles } from "../lib/design-system";

const portfolioProjects = [
  {
    title: "Dr. Abdurrahman Shaybani",
    description: "Islamic Scholar TikTok Growth",
    metrics: "80K followers, 4M views in 2 months",
    image: "/assets/contents/IMG-20250708-WA0009.jpg",
    link: "https://www.tiktok.com/@drshaybani",
  },
  {
    title: "Sheikh Ali Qaradaghi",
    description: "Religious content creation",
    metrics: "Growing Islamic community",
    image: "/assets/contents/IMG-20250708-WA0010.jpg",
    link: "https://www.tiktok.com/@ali.qaradaghi",
  },
  {
    title: "Sheikh Majd Makki",
    description: "Engaging Islamic content",
    metrics: "Expanding reach",
    image: "/assets/contents/IMG-20250708-WA0008.jpg",
    link: "https://www.tiktok.com/@majd.maki",
  },
  {
    title: "Megabyte Store",
    description: "Electronics & Gadgets Marketing",
    metrics: "8M+ TikTok views, 40-50 daily leads",
    image: "/assets/contents/IMG-20250708-WA0014.jpg",
    link: "https://www.tiktok.com/@mgbytcom",
  },
  {
    title: "Qatar University - Sharia Dept",
    description: "Academic event coverage & student outreach",
    metrics: "Educational content success",
    image: "/assets/contents/IMG-20250708-WA0011.jpg",
    link: "https://www.instagram.com/sharia_qusrb",
  },
  {
    title: "QSN Mazad",
    description: "Auction brand marketing & commercial reels",
    metrics: "Enhanced brand presence",
    image: "/assets/contents/IMG-20250708-WA0013.jpg",
    link: "https://www.instagram.com/qsn.mazad",
  },
];

const PortfolioSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 60,
      scale: 0.9
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: { 
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const textVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.5, 
        ease: "easeOut" 
      }
    }
  };

  return (
    <section id="portfolio" className={`${commonStyles.sectionDark} relative overflow-hidden`}>
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

      <div className={`${commonStyles.container} relative z-10`}>
        <motion.div 
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <motion.h2 
            className={`${commonStyles.heading2} text-white mb-6`}
            variants={textVariants}
          >
            Featured Work & Real Analytics
          </motion.h2>
          <motion.p 
            className={`${commonStyles.bodyLarge} text-white/80 max-w-2xl mx-auto`}
            variants={textVariants}
          >
            Real results from our video production, content creation, and social media management projects. From viral TikTok content to professional brand campaigns.
          </motion.p>
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={containerVariants}
        >
          {portfolioProjects.map((project, index) => (
            <motion.div
              key={index}
              className={`${commonStyles.cardGlass} overflow-hidden group cursor-pointer`}
              variants={cardVariants}
              whileHover={{ 
                y: -10,
                scale: 1.02,
                boxShadow: "0 25px 50px rgba(4, 228, 255, 0.15)"
              }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <motion.div 
                className="relative h-48 overflow-hidden"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  style={{ objectFit: "cover" }}
                  className="transition-transform duration-500 group-hover:scale-110"
                />
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"
                  whileHover={{ from: "rgba(0,0,0,0.8)", to: "rgba(0,0,0,0.2)" }}
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
              
              <motion.div 
                className="p-6"
                variants={containerVariants}
              >
                <motion.h3 
                  className={`${commonStyles.heading3} text-white mb-3`}
                  variants={textVariants}
                >
                  {project.title}
                </motion.h3>
                <motion.p 
                  className={`${commonStyles.bodyBase} text-white/80 mb-3`}
                  variants={textVariants}
                >
                  {project.description}
                </motion.p>
                <motion.p 
                  className="text-[#04E4FF] font-semibold mb-4"
                  variants={textVariants}
                >
                  {project.metrics}
                </motion.p>
                
                {project.link !== "#" && (
                  <motion.div variants={textVariants}>
                    <Link
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`${commonStyles.buttonGhost} group/button`}
                    >
                      <motion.span
                        className="flex items-center"
                        whileHover={{ x: 3 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        View Project
                        <motion.svg
                          className="ml-2 w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          whileHover={{ x: 2, y: -2 }}
                          transition={{ type: "spring", stiffness: 300 }}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                          />
                        </motion.svg>
                      </motion.span>
                    </Link>
                  </motion.div>
                )}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default PortfolioSection;