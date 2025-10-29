"use client";

import { motion } from "motion/react";
import { fadeInUp, staggerContainer } from "../../lib/animation-variants";

// Hero Content Component
export const HeroContent = ({ isLoaded, smoothMouseX, smoothMouseY, stats }) => {
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
    <motion.div 
      className="relative z-20 flex flex-col items-center text-center w-full max-w-6xl mb-16"
      variants={optimizedStagger}
      initial="hidden"
      animate={isLoaded ? "visible" : "hidden"}
    >
      {/* Animated Badge */}
      <motion.div
        variants={fadeInUp}
        className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-xl border border-[#04E4FF]/20 rounded-full px-6 py-3 mb-8"
      >
        <motion.span
          className="w-2 h-2 bg-[#04E4FF] rounded-full"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [1, 0.5, 1]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <span className="text-sm md:text-base font-medium text-white/90">
          Qatar's Premier Digital Growth Agency
        </span>
      </motion.div>

      {/* Main Headline with Gradient */}
      <motion.h1 
        className="text-5xl md:text-7xl lg:text-8xl font-black leading-[1.1] mb-8 text-white"
        variants={fadeInUp}
      >
        Elevate Your
        <br />
        <motion.span
          className="inline-block bg-gradient-to-r from-[#04E4FF] via-[#06B6D4] to-[#8B5CF6] bg-clip-text text-transparent"
          style={{
            x: smoothMouseX,
            y: smoothMouseY,
          }}
          transition={{ type: "spring", stiffness: 50, damping: 20 }}
        >
          Digital Presence
        </motion.span>
      </motion.h1>

      {/* Subtitle */}
      <motion.p 
        className="text-xl md:text-2xl font-light leading-relaxed mb-12 max-w-3xl text-white/80"
        variants={fadeInUp}
      >
        We don't just create content—we engineer viral moments, architect scalable growth strategies, and transform brands into market dominators through cutting-edge digital solutions.
      </motion.p>

      {/* CTA Buttons */}
      <motion.div
        className="flex flex-col sm:flex-row gap-4 items-center justify-center mb-16"
        variants={fadeInUp}
      >
        <motion.a 
          href="https://wa.me/97459990137?text=Hi! I'd like to discuss a project with Onzur."
          target="_blank"
          rel="noopener noreferrer"
          className="group relative inline-flex items-center gap-3 bg-gradient-to-r from-[#04E4FF] to-[#06B6D4] text-[#00042A] px-10 py-5 rounded-full font-bold text-lg overflow-hidden"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
        >
          <motion.div
            className="absolute inset-0 bg-white"
            initial={{ x: "-100%" }}
            whileHover={{ x: 0 }}
            transition={{ duration: 0.3 }}
          />
          <span className="relative z-10 flex items-center gap-2">
            Start Your Project
            <motion.svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </motion.svg>
          </span>
        </motion.a>

        <motion.a 
          href="#portfolio"
          className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-xl border-2 border-white/20 text-white px-10 py-5 rounded-full font-semibold text-lg hover:bg-white/10 transition-all"
          whileHover={{ scale: 1.05, borderColor: "rgba(4, 228, 255, 0.5)" }}
          whileTap={{ scale: 0.98 }}
        >
          View Our Work
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </motion.a>
      </motion.div>

      {/* Stats Grid */}
      <motion.div
        className="grid grid-cols-2 md:grid-cols-4 gap-8 w-full max-w-4xl"
        variants={optimizedStagger}
      >
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            className="relative group"
            variants={fadeInUp}
            whileHover={{ y: -5 }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#04E4FF]/20 to-[#8B5CF6]/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all" />
            <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 text-center">
              <motion.div
                className="text-3xl md:text-4xl font-black bg-gradient-to-r from-[#04E4FF] to-[#8B5CF6] bg-clip-text text-transparent mb-2"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: index * 0.1, type: "spring", stiffness: 200 }}
              >
                {stat.value}
              </motion.div>
              <div className="text-sm text-white/70 font-medium">{stat.label}</div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};
