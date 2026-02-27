"use client";

import { motion } from "motion/react";
import { GalaxyScene } from "./GalaxyParticles";
import { AmbientParticlesCanvas } from "./AmbientParticles";

export const TwoColumnHero = ({ isLoaded, stats, smoothMouseX, smoothMouseY }) => {
  return (
    <div className="relative grid lg:grid-cols-2 gap-8 items-center w-full min-h-[100vh] py-20">
      {/* Ambient Particles Background */}
      <div className="absolute inset-0 w-full h-full pointer-events-none z-0 opacity-40">
        <AmbientParticlesCanvas />
      </div>
      
      {/* Subtle Pattern Overlay */}
      <div className="absolute inset-0 w-full h-full pointer-events-none z-0 opacity-5">
        <div className="w-full h-full" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, #04E4FF 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }} />
      </div>
      
      {/* Gradient Overlays for Depth */}
      <div className="absolute inset-0 w-full h-full pointer-events-none z-0">
        <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-gradient-radial from-[#04E4FF]/5 to-transparent blur-3xl" />
        <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-gradient-radial from-[#8B5CF6]/5 to-transparent blur-3xl" />
      </div>

      {/* Left Column - Content */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: isLoaded ? 1 : 0, x: isLoaded ? 0 : -50 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="flex flex-col justify-center space-y-8 z-10 relative"
      >
        {/* Headline */}
        <div className="space-y-4">
          <motion.h1 
            className="text-6xl md:text-7xl lg:text-8xl font-bold leading-tight"
            style={{
              x: smoothMouseX ? smoothMouseX : 0,
              y: smoothMouseY ? smoothMouseY : 0,
            }}
          >
            Elevate Your
            <br />
            <span className="bg-gradient-to-r from-[#04E4FF] via-[#06B6D4] to-[#8B5CF6] bg-clip-text text-transparent">
              Digital Presence
            </span>
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl text-gray-300 max-w-2xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: isLoaded ? 1 : 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Award-winning creative studio crafting exceptional digital experiences
            that captivate audiences and drive results.
          </motion.p>
        </div>

        {/* CTA Buttons */}
        <motion.div 
          className="flex flex-wrap gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 20 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <motion.a
            href="https://wa.me/97477507972"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 bg-gradient-to-r from-[#04E4FF] to-[#06B6D4] text-white rounded-full font-semibold text-lg hover:shadow-lg hover:shadow-[#04E4FF]/50 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Start Your Project
          </motion.a>
          
          <motion.a
            href="#portfolio"
            className="px-8 py-4 border-2 border-[#04E4FF] text-[#04E4FF] rounded-full font-semibold text-lg hover:bg-[#04E4FF]/10 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View Our Work
          </motion.a>
        </motion.div>

        {/* Stats */}
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: isLoaded ? 1 : 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          {stats.map((stat, index) => (
            <div key={index} className="text-center md:text-left">
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#04E4FF] to-[#8B5CF6] bg-clip-text text-transparent">
                {stat.value}
              </div>
              <div className="text-sm text-gray-400 mt-1">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* Right Column - Galaxy Animation */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: isLoaded ? 1 : 0, scale: isLoaded ? 1 : 0.8 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="h-[700px] lg:h-[900px] relative z-10"
      >
        {/* Glow effect behind particles */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#04E4FF]/10 via-transparent to-[#8B5CF6]/10 blur-2xl" />
        <GalaxyScene />
      </motion.div>
    </div>
  );
};
