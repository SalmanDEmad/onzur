"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { commonStyles } from "../lib/design-system";
import { 
  fadeInUp, 
  fadeInScale, 
  staggerContainer, 
  hoverLift,
  viewport 
} from "../lib/animation-variants";
import OptimizedImage from "./OptimizedImage";

const teamMembers = [
  {
    name: "Daanish Ryan",
    role: "Creative Director & Videographer",
    image: "/assets/contents/IMG-20250708-WA0008.jpg",
    portfolioLink: "https://daanishrayn.my.canva.site/portfolio-web",
    description: "Award-winning creative director and videographer who brings brands to life through compelling visual storytelling and innovative content strategies.",
  },
  {
    name: "Sahid",
    role: "Senior Content Editor",
    image: "/assets/contents/IMG-20250708-WA0010.jpg",
    portfolioLink: "https://www.instagram.com/alysohel.mov",
    description: "Master editor specializing in viral social media content, with expertise in creating engaging videos that drive millions of views and conversions.",
  },
];

const TeamSection = () => {
  // Use optimized variants from shared library
  const optimizedStagger = {
    ...staggerContainer,
    visible: {
      ...staggerContainer.visible,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  return (
    <section id="team" className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.div 
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={optimizedStagger}
        >
          <motion.h2 
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1B2C5C] mb-6"
            variants={fadeInUp}
          >
            Meet Our Creators
          </motion.h2>
          <motion.p 
            className="text-lg md:text-xl text-[#1B2C5C]/80 max-w-2xl mx-auto"
            variants={fadeInUp}
          >
            The creative minds behind Onzur Media Studio, bringing your vision to life through innovative storytelling and expert production.
          </motion.p>
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={optimizedStagger}
        >
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 group"
              variants={fadeInScale}
              whileHover={{ 
                ...hoverLift,
                boxShadow: "0 20px 40px rgba(4, 228, 255, 0.15)"
              }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
            >
              <motion.div 
                className="relative w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
              >
                <OptimizedImage
                  src={member.image}
                  alt={member.name}
                  width={192}
                  height={192}
                  className="transition-transform duration-500 group-hover:scale-110"
                  priority={index === 0}
                  quality={85}
                />
                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-[#04E4FF]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                />
              </motion.div>
              
              <motion.div 
                className="text-center"
                variants={optimizedStagger}
              >
                <motion.h3 
                  className="text-xl md:text-2xl font-bold text-[#1B2C5C] mb-2"
                  variants={fadeInUp}
                >
                  {member.name}
                </motion.h3>
                <motion.p 
                  className="text-lg font-semibold mb-4 text-[#04E4FF]"
                  variants={fadeInUp}
                >
                  {member.role}
                </motion.p>
                <motion.p 
                  className="text-base text-[#1B2C5C]/80 mb-6 leading-relaxed"
                  variants={fadeInUp}
                >
                  {member.description}
                </motion.p>
                
                <motion.div
                  variants={fadeInUp}
                >
                  <Link
                    href={member.portfolioLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center bg-[#04E4FF] text-[#00042A] px-6 py-3 rounded-full font-semibold hover:bg-[#00B9FF] transition-colors group/button"
                  >
                    <motion.span
                      className="flex items-center"
                      whileHover={{ x: 2 }}
                      transition={{ type: "spring", stiffness: 400, damping: 25 }}
                    >
                      View Portfolio
                      <motion.svg
                        className="ml-2 w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        whileHover={{ x: 3, y: -3 }}
                        transition={{ type: "spring", stiffness: 400, damping: 25 }}
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
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TeamSection;