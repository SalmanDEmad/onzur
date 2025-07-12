"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion } from "motion/react"
import { ArrowRight, Loader2 } from "lucide-react";

const ExploreServicesButton = ({
  variant = "primary-gradient", // 'primary-gradient', 'primary-white', 'secondary-gradient', 'secondary-blue'
  href = "/services",
  text = "Explore All Services",
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleClick = () => {
    setIsLoading(true);
    // Simulate loading
    setTimeout(() => setIsLoading(false), 1500);
  };
  const baseStyles =
    "group relative inline-flex items-center justify-center text-sm sm:text-base font-bold uppercase tracking-wider py-3.5 px-6 rounded-full overflow-hidden border-2 transition-all duration-300 ease-in-out focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900";

  let buttonClasses = "";
  let textClasses = "";
  let iconSrc = "";
  let iconHoverSrc = ""; // Not all variants have distinct hover icons in the Figma, using same if not specified

  // Using Lucide React ArrowRight icon with different color classes

  let iconClasses = "";
  let iconHoverClasses = "";

  switch (variant) {
    case "primary-white": // Figma: variant=1 (hover=true uses purple arrow, hover=false uses white arrow)
      buttonClasses = "bg-white border-white hover:bg-transparent";
      textClasses =
        "text-transparent bg-clip-text bg-gradient-to-r from-[#6418A5] to-[#00B9FF] group-hover:text-white";
      iconClasses = "text-white";
      iconHoverClasses = "text-[#6418A5]"; // Purple on hover
      break;
    case "secondary-gradient": // Figma: variant=2 (hover=true uses white arrow, hover=false uses blue arrow)
      buttonClasses =
        "bg-gradient-to-r from-[#00B9FF] to-[#9536E5] border-transparent hover:border-white hover:bg-none";
      textClasses = "text-white group-hover:text-white";
      iconClasses = "text-[#00B9FF]";
      iconHoverClasses = "text-white";
      break;
    case "secondary-blue": // Figma: variant=3 (hover=true uses white arrow, hover=false uses blue arrow) - Similar to secondary-gradient but starts blue
      buttonClasses =
        "bg-[#3B7BCE] border-[#3B7BCE] hover:bg-gradient-to-r hover:from-[#00B9FF] hover:to-[#9536E5] hover:border-transparent";
      textClasses = "text-white";
      iconClasses = "text-[#00B9FF]";
      iconHoverClasses = "text-white";
      break;
    case "primary-gradient": // Figma: variant=4 (hover=true uses purple arrow, hover=false uses white arrow) - Default look
    default:
      buttonClasses =
        "bg-gradient-to-r from-[#6418A5] to-[#00B9FF] border-transparent hover:bg-white";
      textClasses =
        "text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#6418A5] group-hover:to-[#00B9FF]";
      iconClasses = "text-white";
      iconHoverClasses = "text-[#6418A5]"; // Purple on hover
      break;
  }

  const magneticEffect = {
    x: 0,
    y: 0,
    transition: { type: "spring", stiffness: 300, damping: 20 }
  };

  const handleMouseMove = (e) => {
    if (!isHovered) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const deltaX = (e.clientX - centerX) * 0.1;
    const deltaY = (e.clientY - centerY) * 0.1;
    magneticEffect.x = deltaX;
    magneticEffect.y = deltaY;
  };

  const pulseAnimation = {
    boxShadow: [
      "0 0 0 0 rgba(4, 228, 255, 0.7)",
      "0 0 0 10px rgba(4, 228, 255, 0)",
      "0 0 0 0 rgba(4, 228, 255, 0)"
    ],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  return (
    <Link href={href} passHref>
      <motion.button
        className={`${baseStyles} ${buttonClasses} ${isLoading ? 'cursor-wait' : 'cursor-pointer'}`}
        whileHover={{ 
          scale: 1.05,
          boxShadow: "0 10px 25px rgba(4, 228, 255, 0.3)"
        }}
        whileTap={{ scale: 0.98 }}
        animate={!isHovered && !isLoading ? pulseAnimation : magneticEffect}
        onClick={handleClick}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onMouseMove={handleMouseMove}
        disabled={isLoading}
      >
        {/* Ripple effect */}
        <motion.span
          className="absolute inset-0 bg-white/20 rounded-full"
          initial={{ scale: 0, opacity: 1 }}
          animate={isHovered ? { scale: 2, opacity: 0 } : { scale: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        />

        {/* Text with loading state */}
        <motion.span 
          className={`${textClasses} mr-2.5 flex items-center`}
          animate={isLoading ? { opacity: [1, 0.6, 1] } : {}}
          transition={{ duration: 1, repeat: isLoading ? Infinity : 0 }}
        >
          {isLoading ? (
            <>
              <Loader2 className="w-4 h-4 mr-2 animate-spin" />
              Loading...
            </>
          ) : (
            text
          )}
        </motion.span>
        
        {/* Enhanced arrow animations */}
        {!isLoading && (
          <motion.span 
            className="relative w-3 h-4 flex items-center justify-center"
            whileHover={{ x: 3, rotate: 12 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <motion.div
              whileHover={{ x: 2 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <ArrowRight
                size={14}
                className={`transition-all duration-300 ease-in-out group-hover:opacity-0 ${iconClasses}`}
              />
            </motion.div>
            <motion.div
              className="absolute"
              initial={{ x: -10, opacity: 0 }}
              whileHover={{ x: 0, opacity: 1 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <ArrowRight
                size={14}
                className={`opacity-0 transition-all duration-300 ease-in-out group-hover:opacity-100 ${iconHoverClasses}`}
              />
            </motion.div>
          </motion.span>
        )}
      </motion.button>
    </Link>
  );
};

export default ExploreServicesButton;