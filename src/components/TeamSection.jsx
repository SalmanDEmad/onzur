"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { commonStyles } from "../lib/design-system";

const teamMembers = [
  {
    name: "Daanish Ryan",
    role: "Videographer/Editor",
    image: "/assets/contents/IMG-20250708-WA0006.jpg", // Using one of the provided images
    portfolioLink: "https://daanishrayn.my.canva.site/portfolio-web",
    description: "Expert videographer and editor with a passion for creating compelling visual stories that resonate with audiences.",
  },
  {
    name: "Ayham",
    role: "Editor",
    image: "/assets/contents/IMG-20250708-WA0007.jpg", // Using one of the provided images
    portfolioLink: "https://vt.tiktok.com/ZShBBeJnj/",
    description: "Skilled editor specializing in social media content creation with a focus on engaging and viral content.",
  },
];

const TeamSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
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
    <section id="team" className={commonStyles.sectionLight}>
      <div className={commonStyles.container}>
        <motion.div 
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <motion.h2 
            className={`${commonStyles.heading2} text-[#1B2C5C] mb-6`}
            variants={textVariants}
          >
            Meet Our Creators
          </motion.h2>
          <motion.p 
            className={`${commonStyles.bodyLarge} text-[#1B2C5C]/80 max-w-2xl mx-auto`}
            variants={textVariants}
          >
            The creative minds behind Onzur Media Studio, bringing your vision to life through innovative storytelling and expert production.
          </motion.p>
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={containerVariants}
        >
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              className={`${commonStyles.cardSolid} group`}
              variants={itemVariants}
              whileHover={{ 
                y: -10,
                boxShadow: "0 20px 40px rgba(4, 228, 255, 0.15)"
              }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <motion.div 
                className="relative w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  style={{ objectFit: "cover" }}
                  className="transition-transform duration-500 group-hover:scale-110"
                />
                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-[#04E4FF]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                />
              </motion.div>
              
              <motion.div 
                className="text-center"
                variants={containerVariants}
              >
                <motion.h3 
                  className={`${commonStyles.heading3} text-[#1B2C5C] mb-2`}
                  variants={textVariants}
                >
                  {member.name}
                </motion.h3>
                <motion.p 
                  className="text-lg font-semibold mb-4 text-[#04E4FF]"
                  variants={textVariants}
                >
                  {member.role}
                </motion.p>
                <motion.p 
                  className={`${commonStyles.bodyBase} text-[#1B2C5C]/80 mb-6 leading-relaxed`}
                  variants={textVariants}
                >
                  {member.description}
                </motion.p>
                
                <motion.div
                  variants={textVariants}
                >
                  <Link
                    href={member.portfolioLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${commonStyles.buttonPrimary} group/button`}
                  >
                    <motion.span
                      className="flex items-center"
                      whileHover={{ x: 2 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      View Portfolio
                      <motion.svg
                        className="ml-2 w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        whileHover={{ x: 3, y: -3 }}
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
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TeamSection;