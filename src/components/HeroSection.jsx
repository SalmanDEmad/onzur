"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "motion/react";
import { commonStyles } from "../lib/design-system";

const HeroSection = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const { scrollY } = useScroll();
  const backgroundY = useTransform(scrollY, [0, 1000], [0, -300]);
  const backgroundOpacity = useTransform(scrollY, [0, 500], [1, 0.3]);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const clientLogos = [
    { src: "/assets/images/spice-fusion-logo.png", alt: "Spice Fusion Restaurant" },
    { src: "/assets/images/megabyte-logo.png", alt: "Megabyte Store" },
    { src: "/assets/images/qatar-university-logo.png", alt: "Qatar University" },
    { src: "/assets/images/qsn-mazad-logo.png", alt: "QSN Mazad" },
    { src: "/assets/images/dr-shaybani-logo.png", alt: "Dr. Shaybani" },
    { src: "/assets/images/sheikh-qaradaghi-logo.png", alt: "Sheikh Ali Qaradaghi" },
  ];

  // Duplicate for seamless scroll
  const duplicatedLogos = [...clientLogos, ...clientLogos];

  const backgroundImages = [
    {
      src: "/assets/images/hero-bg-1.png",
      className: "absolute top-[-153px] left-[576px] w-[653px] h-[471px] z-0",
    },
    {
      src: "/assets/images/hero-bg-2.png",
      className: "absolute top-[178px] left-[487px] w-[653px] h-[471px] z-0",
    },
    {
      src: "/assets/images/hero-bg-3.png",
      className: "absolute top-[509px] left-[399px] w-[653px] h-[471px] z-0",
    },
    {
      src: "/assets/images/hero-bg-4.png",
      className: "absolute top-[839px] left-[310px] w-[653px] h-[471px] z-0",
    },
    {
      src: "/assets/images/hero-bg-8.png",
      className: "absolute top-[2px] left-[1155px] w-[653px] h-[471px] z-0",
    },
    {
      src: "/assets/images/hero-bg-9.png",
      className: "absolute top-[333px] left-[1066px] w-[653px] h-[471px] z-0",
    },
    {
      src: "/assets/images/hero-bg-10.png",
      className: "absolute top-[664px] left-[978px] w-[653px] h-[471px] z-0",
    },
    {
      src: "/assets/images/hero-bg-11.png",
      className: "absolute top-[995px] left-[889px] w-[653px] h-[471px] z-0",
    },
    {
      src: "/assets/images/hero-bg-13.png",
      className: "absolute top-[157px] left-[1734px] w-[653px] h-[471px] z-0",
    },
    {
      src: "/assets/images/hero-bg-14.png",
      className: "absolute top-[488px] left-[1645px] w-[653px] h-[471px] z-0",
    },
    {
      src: "/assets/images/hero-bg-15.png",
      className: "absolute top-[819px] left-[1557px] w-[653px] h-[471px] z-0",
    },
  ];

  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.8, 
        ease: "easeOut" 
      } 
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const floatingAnimation = {
    y: [-10, 10, -10],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  const pulseAnimation = {
    scale: [1, 1.05, 1],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  return (
    <section className={`${commonStyles.sectionDark} text-white overflow-hidden`}>
      {/* Main Hero Content */}
      <div className={`relative ${commonStyles.container} flex flex-col items-center justify-center min-h-[535px] pt-20 pb-10 z-10`}>
        {/* Background Images - positioned absolutely within the relative parent */}
        <motion.div 
          className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none"
          style={{ y: backgroundY, opacity: backgroundOpacity }}
        >
          {backgroundImages.map((img, index) => (
            <motion.div 
              key={index} 
              className={img.className}
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1, duration: 1.5 }}
            >
              <Image
                src={img.src}
                alt={`Hero Background Image ${index + 1}`}
                layout="fill"
                objectFit="contain"
              />
            </motion.div>
          ))}
          {/* Gradient overlay for background images */}
          <div className="absolute inset-0 w-full h-[112px] bg-gradient-to-b from-[#00042A]/50 via-[#00042A]/30 to-transparent z-10" />
          <div className="absolute bottom-0 inset-x-0 w-full h-[112px] bg-gradient-to-t from-[#00042A]/60 to-transparent z-10" />

          {/* Purple glow effect */}
          <motion.div 
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[768px] h-[324px]"
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.9, 0.7, 0.9]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <div
              className="w-full h-full bg-[#24004F] opacity-[0.9] blur-[250px] rounded-[273px]"
              style={{ boxShadow: "0px 0px 250px 400px rgba(36, 0, 78, 1)" }}
            />
          </motion.div>
        </motion.div>

        <motion.div 
          className="relative z-20 flex flex-col items-start text-left w-full max-w-3xl"
          variants={staggerContainer}
          initial="hidden"
          animate={isLoaded ? "visible" : "hidden"}
        >
          <motion.p 
            className="text-xl md:text-2xl font-medium uppercase tracking-wider mb-6 text-[#04E4FF]"
            variants={textVariants}
          >
            Welcome to Onzur Media Studio
          </motion.p>
          <motion.h1 
            className={`${commonStyles.heading1} uppercase leading-[0.9] mb-8 text-center lg:text-left`}
            variants={textVariants}
          >
            Creative Team
            <br />
            Based in Qatar
          </motion.h1>
          <motion.p 
            className={`${commonStyles.bodyLarge} font-normal leading-relaxed mb-10 max-w-2xl text-center lg:text-left ${commonStyles.gradientText}`}
            variants={textVariants}
          >
            Specializing in video production, editing, and digital storytelling for businesses, scholars, and organizations. From viral TikTok content to professional food photography.
          </motion.p>

          <motion.button 
            className={`${commonStyles.buttonPrimary} uppercase tracking-wider group`}
            variants={textVariants}
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 10px 25px rgba(4, 228, 255, 0.3)"
            }}
            whileTap={{ scale: 0.98 }}
            animate={pulseAnimation}
          >
            <span className="relative z-10 flex items-center justify-center">
              Request a Quote
              <motion.svg
                className="ml-2 w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </motion.svg>
            </span>
          </motion.button>

          <motion.div 
            className="mt-16 flex flex-col sm:flex-row items-start sm:items-center gap-8"
            variants={textVariants}
          >
            <motion.div 
              className="flex items-center"
              whileHover={{ x: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="mr-3">
                <motion.div 
                  className="w-8 h-8 bg-[#04E4FF] rounded-full flex items-center justify-center text-[#00042A] font-bold text-lg"
                  animate={floatingAnimation}
                  whileHover={{ 
                    scale: 1.1,
                    boxShadow: "0 5px 15px rgba(4, 228, 255, 0.5)"
                  }}
                >
                  📞
                </motion.div>
              </div>
              <div>
                <p className="text-lg sm:text-xl font-medium">
                  Contact Us
                </p>
                <p className="text-[#04E4FF] font-medium">
                  +974 5999 0137
                </p>
              </div>
            </motion.div>
            <motion.div 
              className="hidden sm:block w-px h-[63px] bg-gradient-to-b from-white/0 via-white/100 to-white/0 mx-4"
              initial={{ scaleY: 0 }}
              animate={{ scaleY: 1 }}
              transition={{ delay: 1.5, duration: 0.5 }}
            />
            <motion.div 
              className="flex items-center"
              whileHover={{ x: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="mr-3">
                <motion.div 
                  className="w-8 h-8 bg-[#04E4FF] rounded-full flex items-center justify-center text-[#00042A] font-bold text-lg"
                  animate={{
                    y: [-10, 10, -10],
                    transition: {
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 1.5
                    }
                  }}
                  whileHover={{ 
                    scale: 1.1,
                    boxShadow: "0 5px 15px rgba(4, 228, 255, 0.5)"
                  }}
                >
                  💬
                </motion.div>
              </div>
              <div>
                <p className="text-lg sm:text-xl font-medium">
                  WhatsApp
                </p>
                <p className="text-[#04E4FF] font-medium">
                  +974 7750 7972
                </p>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Client Logos Marquee */}
      <motion.div 
        className="relative w-full h-[100px] bg-[#03042A] flex items-center overflow-hidden mt-[-1px] z-20"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 0.8 }}
      >
        <div className="animate-marquee-infinite flex items-center">
          {duplicatedLogos.map((logo, index) => (
            <motion.div
              key={`logo-${index}`}
              className="mx-12 flex-shrink-0 h-[55px] flex items-center justify-center"
              whileHover={{ 
                scale: 1.1,
                filter: "brightness(1.2)"
              }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                height={
                  logo.alt === "NFL" ||
                  logo.alt === "McDonald's" ||
                  logo.alt === "G2"
                    ? 55
                    : 25
                } // Adjust height for specific logos
                width={
                  logo.alt === "NFL"
                    ? 42
                    : logo.alt === "Enchant" || logo.alt === "Bru"
                    ? 130
                    : 100
                } // Adjust width
                objectFit="contain"
              />
            </motion.div>
          ))}
        </div>
      </motion.div>
      <style jsx>{`
        @keyframes marquee-scroll {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-marquee-infinite {
          animation: marquee-scroll 40s linear infinite;
          display: flex;
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
