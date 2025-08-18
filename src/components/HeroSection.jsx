"use client";

import { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { commonStyles } from "../lib/design-system";
import { 
  fadeInUp, 
  fadeInScale, 
  staggerContainer, 
  floatingSubtle, 
  pulse, 
  viewport,
  buttonHover,
  buttonTap
} from "../lib/animation-variants";
import OptimizedImage from "./OptimizedImage";

const HeroSection = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const { scrollY } = useScroll();
  const backgroundY = useTransform(scrollY, [0, 1000], [0, -300]);
  const backgroundOpacity = useTransform(scrollY, [0, 500], [1, 0.3]);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const clientLogos = [
    { src: "/assets/images/ibm-logo.svg", alt: "IBM" },
    { src: "/assets/images/sony-logo.png", alt: "Sony" },
    { src: "/assets/images/nfl-logo.png", alt: "NFL" },
    { src: "/assets/images/mcds-logo.png", alt: "McDonald's" },
    { src: "/assets/images/g2-logo.png", alt: "G2" },
    { src: "/assets/images/enchant-logo.png", alt: "Enchant" },
  ];

  // Duplicate for seamless scroll
  const duplicatedLogos = [...clientLogos, ...clientLogos];

  const backgroundImages = [
    {
      src: "/assets/images/hero-bg-1.png",
      className: "absolute top-[-153px] left-[40%] w-[300px] md:w-[400px] lg:w-[500px] h-[200px] md:h-[300px] lg:h-[400px] z-0",
    },
    {
      src: "/assets/images/hero-bg-2.png",
      className: "absolute top-[100px] left-[35%] w-[280px] md:w-[380px] lg:w-[480px] h-[180px] md:h-[280px] lg:h-[380px] z-0",
    },
    {
      src: "/assets/images/hero-bg-3.png",
      className: "absolute top-[300px] left-[30%] w-[260px] md:w-[360px] lg:w-[460px] h-[160px] md:h-[260px] lg:h-[360px] z-0",
    },
    {
      src: "/assets/images/hero-bg-4.png",
      className: "absolute top-[500px] left-[25%] w-[240px] md:w-[340px] lg:w-[440px] h-[140px] md:h-[240px] lg:h-[340px] z-0",
    },
    {
      src: "/assets/images/hero-bg-8.png",
      className: "absolute top-[0px] right-[20%] w-[280px] md:w-[380px] lg:w-[480px] h-[180px] md:h-[280px] lg:h-[380px] z-0",
    },
    {
      src: "/assets/images/hero-bg-9.png",
      className: "absolute top-[200px] right-[15%] w-[260px] md:w-[360px] lg:w-[460px] h-[160px] md:h-[260px] lg:h-[360px] z-0",
    },
    {
      src: "/assets/images/hero-bg-10.png",
      className: "absolute top-[400px] right-[10%] w-[240px] md:w-[340px] lg:w-[440px] h-[140px] md:h-[240px] lg:h-[340px] z-0",
    },
    {
      src: "/assets/images/hero-bg-11.png",
      className: "absolute top-[600px] right-[5%] w-[220px] md:w-[320px] lg:w-[420px] h-[120px] md:h-[220px] lg:h-[320px] z-0",
    },
  ];

  // Optimized animation variants using shared library
  const optimizedStagger = {
    ...staggerContainer,
    visible: {
      ...staggerContainer.visible,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  return (
    <section className={`${commonStyles.sectionDark} text-white overflow-hidden`}>
      {/* Main Hero Content */}
      <div className={`relative ${commonStyles.container} flex flex-col items-center justify-center min-h-[535px] pt-20 pb-10 z-10`}>
        {/* Background Images - positioned absolutely within the relative parent */}
        <motion.div 
          className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none"
          style={{ 
            y: backgroundY, 
            opacity: backgroundOpacity,
            willChange: "transform"
          }}
        >
          {backgroundImages.map((img, index) => (
            <motion.div 
              key={index} 
              className={img.className}
              variants={fadeInScale}
              initial="hidden"
              animate="visible"
              transition={{ delay: index * 0.05, duration: 1 }}
              style={{ willChange: "transform, opacity" }}
            >
              <OptimizedImage
                src={img.src}
                alt={`Hero Background Image ${index + 1}`}
                fill
                objectFit="contain"
                priority={index < 3}
                quality={75}
                loading={index < 3 ? "eager" : "lazy"}
              />
            </motion.div>
          ))}
          {/* Gradient overlay for background images */}
          <div className="absolute inset-0 w-full h-[112px] bg-gradient-to-b from-[#00042A]/50 via-[#00042A]/30 to-transparent z-10" />
          <div className="absolute bottom-0 inset-x-0 w-full h-[112px] bg-gradient-to-t from-[#00042A]/60 to-transparent z-10" />

          {/* Purple glow effect - optimized */}
          <motion.div 
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[500px] lg:w-[768px] h-[150px] md:h-[250px] lg:h-[324px]"
            animate={{
              scale: [1, 1.05, 1],
              opacity: [0.9, 0.75, 0.9]
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: [0.4, 0, 0.6, 1]
            }}
            style={{ willChange: "transform, opacity" }}
          >
            <div
              className="w-full h-full bg-[#24004F] opacity-[0.9] blur-[250px] rounded-[273px]"
              style={{ 
                boxShadow: "0px 0px 250px 400px rgba(36, 0, 78, 1)",
                willChange: "auto"
              }}
            />
          </motion.div>
        </motion.div>

        <motion.div 
          className="relative z-20 flex flex-col items-start text-left w-full max-w-3xl"
          variants={optimizedStagger}
          initial="hidden"
          animate={isLoaded ? "visible" : "hidden"}
        >
          <motion.p 
            className="text-lg md:text-xl font-medium mb-6 text-[#04E4FF]"
            variants={fadeInUp}
          >
            Your Digital Success Partner in Qatar
          </motion.p>
          <motion.h1 
            className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-8 text-center lg:text-left text-white"
            variants={fadeInUp}
          >
            Transform Your Brand Into
            <br />
            <span className="text-[#04E4FF]">Market Leader</span>
          </motion.h1>
          <motion.p 
            className="text-lg md:text-xl font-normal leading-relaxed mb-10 max-w-2xl text-center lg:text-left text-white/90"
            variants={fadeInUp}
          >
            We've generated millions of views and countless leads for our clients across Qatar and beyond. From viral social media content to professional web development - we craft digital experiences that drive real business growth.
          </motion.p>

          <motion.a 
            href="https://wa.me/97459990137?text=Hi! I'd like to get a strategy session with Onzur Media Studio."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-[#04E4FF] text-[#00042A] px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:shadow-lg transition-all duration-300 cursor-pointer"
            variants={fadeInUp}
            whileHover={{
              scale: 1.05,
              boxShadow: "0 10px 25px rgba(4, 228, 255, 0.3)"
            }}
            whileTap={{ scale: 0.98 }}
          >
            <span className="flex items-center">
              Get Your Strategy Session
              <motion.svg
                className="ml-2 w-5 h-5"
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
          </motion.a>

          <motion.div 
            className="mt-16 flex flex-col sm:flex-row items-start sm:items-center gap-8"
            variants={fadeInUp}
          >
            <motion.a 
              href="tel:+97459990137"
              className="flex items-center cursor-pointer"
              whileHover={{ x: 5 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
            >
              <div className="mr-3">
                <motion.div 
                  className="w-8 h-8 bg-[#04E4FF] rounded-full flex items-center justify-center text-[#00042A] font-bold text-lg"
                  animate={floatingSubtle}
                  whileHover={{ 
                    scale: 1.1,
                    boxShadow: "0 5px 15px rgba(4, 228, 255, 0.5)"
                  }}
                  style={{ willChange: "transform" }}
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
            </motion.a>
            <motion.div 
              className="hidden sm:block w-px h-[63px] bg-gradient-to-b from-white/0 via-white/100 to-white/0 mx-4"
              initial={{ scaleY: 0 }}
              animate={{ scaleY: 1 }}
              transition={{ delay: 1.5, duration: 0.5 }}
            />
            <motion.a 
              href="https://wa.me/97477507972?text=Hello! I'm interested in your services."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center cursor-pointer"
              whileHover={{ x: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="mr-3">
                <motion.div 
                  className="w-8 h-8 bg-[#04E4FF] rounded-full flex items-center justify-center text-[#00042A] font-bold text-lg"
                  animate={{
                    ...floatingSubtle,
                    transition: {
                      ...floatingSubtle.transition,
                      delay: 1
                    }
                  }}
                  whileHover={{ 
                    scale: 1.1,
                    boxShadow: "0 5px 15px rgba(4, 228, 255, 0.5)"
                  }}
                  style={{ willChange: "transform" }}
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
            </motion.a>
          </motion.div>
        </motion.div>
      </div>

      {/* Client Logos Marquee - Optimized */}
      <motion.div 
        className="relative w-full h-[100px] bg-[#03042A] flex items-center overflow-hidden mt-[-1px] z-20"
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
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
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
            >
              <OptimizedImage
                src={logo.src}
                alt={logo.alt}
                height={
                  logo.alt === "NFL" ||
                  logo.alt === "McDonald's" ||
                  logo.alt === "G2"
                    ? 55
                    : 25
                }
                width={
                  logo.alt === "NFL"
                    ? 42
                    : logo.alt === "Enchant" || logo.alt === "Bru"
                    ? 130
                    : 100
                }
                objectFit="contain"
                priority={index < 6}
                quality={70}
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
