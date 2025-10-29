"use client";

import { motion } from "motion/react";
import { fadeInUp, viewport } from "../../lib/animation-variants";
import OptimizedImage from "../OptimizedImage";

// Client Logos Marquee Component
export const ClientMarquee = ({ clientLogos }) => {
  const duplicatedLogos = [...clientLogos, ...clientLogos];

  return (
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
    </motion.div>
  );
};
