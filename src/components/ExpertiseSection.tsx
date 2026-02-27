"use client";

import Image from "next/image";
import { commonStyles } from "../lib/design-system";
import { useLanguage } from "../contexts/LanguageContext";
import { motion } from "motion/react";
import {
  MotionSection,
  MotionDiv,
  fadeInUp,
  fadeInLeft,
  stagger,
  cardHover,
} from "./MotionSafe";



const cardVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1 },
  hover: { scale: 1.05 },
};

// Enhanced variants using safe motion
const safeCardVariants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] },
  },
  hover: { y: -2, transition: { type: "spring", stiffness: 400, damping: 25 } },
};

const ExpertiseSection = () => {
  const { t, isRTL } = useLanguage();

  const expertiseData = [
    {
      title: t('expertise.card1.title'),
      description: t('expertise.card1.description'),
    },
    {
      title: t('expertise.card2.title'),
      description: t('expertise.card2.description'),
    },
    {
      title: t('expertise.card3.title'),
      description: t('expertise.card3.description'),
    },
    {
      title: t('expertise.card4.title'),
      description: t('expertise.card4.description'),
    },
  ];

  return (
    <section
      id="services"
      className={`${commonStyles.sectionDark} relative overflow-hidden`}
    >
      {/* Gradient Backgrounds */}
      <div
        className="absolute w-[400px] md:w-[600px] lg:w-[800px] h-[400px] md:h-[600px] lg:h-[800px] top-[100px] left-[-100px] md:left-[-150px] lg:left-[-200px] bg-radial-gradient-blue opacity-20 rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(4, 228, 255, 0.8) 0%, rgba(4, 228, 255, 0) 70%)",
        }}
      ></div>
      <div
        className="absolute w-[500px] md:w-[700px] lg:w-[900px] h-[500px] md:h-[700px] lg:h-[900px] top-[400px] left-[20%] bg-radial-gradient-purple opacity-50 rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(136, 66, 220, 0.9) 0%, rgba(136, 66, 220, 0) 70%)",
        }}
      ></div>
      <div
        className="absolute w-[400px] md:w-[600px] lg:w-[800px] h-[600px] md:h-[900px] lg:h-[1200px] top-[200px] right-[-100px] md:right-[-150px] lg:right-[-200px] bg-radial-gradient-blue-right opacity-30 rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(4, 228, 255, 0.8) 0%, rgba(4, 228, 255, 0) 60%)",
        }}
      ></div>

      <div className={`${commonStyles.container} relative z-10`}>
        <div className="grid lg:grid-cols-12 gap-8 items-center">
          {/* Left Column: Text Content & Image */}
          <MotionDiv className="lg:col-span-5" variants={fadeInLeft()}>
            <motion.p
              className="text-[#04E4FF] text-xl font-bold tracking-wider uppercase mb-6"
              variants={fadeInUp(0.1)}
            >
              {t('expertise.badge')}
            </motion.p>
            <motion.h2
              className={`${commonStyles.heading2} text-white mb-6 leading-tight`}
              variants={fadeInUp(0.2)}
            >
              {t('expertise.title')}
            </motion.h2>
            <motion.p
              className={`${commonStyles.bodyLarge} text-white/90 mb-10 leading-relaxed`}
              variants={fadeInUp(0.3)}
            >
              {t('expertise.body')}
            </motion.p>
            <motion.div
              className="relative w-full aspect-[778/549] max-w-xl mx-auto lg:mx-0 mb-10 lg:mb-0"
              variants={fadeInUp(0.4)}
            >
              <Image
                src="/assets/images/trophy-image.png"
                alt={t('expertise.imageAlt')}
                fill
                style={{ objectFit: "contain" }}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
                priority
              />
            </motion.div>
          </MotionDiv>

          {/* Right Column: Expertise Cards */}
          <MotionDiv className="lg:col-span-7" variants={stagger(0.1, 0.1)}>
            <div className="grid md:grid-cols-2 gap-8">
              {expertiseData.map((item, index) => (
                <motion.div
                  key={index}
                  variants={safeCardVariants}
                  initial="hidden"
                  whileInView="show"
                  whileHover="hover"
                  viewport={{ once: true, margin: "-10% 0% -10% 0%" }}
                  className={`${commonStyles.cardGlass} cursor-pointer`}
                  style={{ willChange: "transform" }}
                >
                  <div className="w-16 h-16 mb-6 relative">
                    <div className="w-full h-full bg-gradient-to-r from-[#00B9FF] to-[#04E4FF] rounded-lg flex items-center justify-center">
                      <svg
                        className="w-8 h-8 text-white"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 2L2 7V10C2 16 6 20.5 12 22C18 20.5 22 16 22 10V7L12 2Z" />
                      </svg>
                    </div>
                  </div>
                  <h3 className={`${commonStyles.heading3} text-white mb-4`}>
                    {item.title}
                  </h3>
                  <p
                    className={`${commonStyles.bodyBase} text-white/80 leading-relaxed`}
                  >
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </MotionDiv>
        </div>
      </div>
    </section>
  );
};

export default ExpertiseSection;
