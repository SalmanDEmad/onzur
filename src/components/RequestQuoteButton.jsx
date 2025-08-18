"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { ArrowRight, Loader2 } from "lucide-react";

const RequestQuoteButton = ({
  variant = "primary",
  href = "https://wa.me/97459990137?text=Hi! I'd like to request a quote for my project.",
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const isPrimary = variant === "primary";

  const handleClick = () => {
    setIsLoading(true);
    // Simulate loading for demonstration
    setTimeout(() => setIsLoading(false), 2000);
  };

  // Define styles based on variant and hover state (via group-hover)
  const buttonBaseStyles =
    "relative group inline-flex items-center justify-center text-lg sm:text-xl font-bold uppercase tracking-wider py-3.5 px-6 rounded-full overflow-hidden border-2 border-transparent transition-all duration-300 ease-in-out";

  const primaryNormalBg = "bg-gradient-to-r from-[#00B9FF] to-[#9536E5]";
  const primaryHoverBg = "bg-white"; // The outer span with blur becomes visible, and inner text turns to gradient
  const primaryNormalText = "text-white";
  const primaryHoverText =
    "text-transparent bg-clip-text bg-gradient-to-r from-[#00B9FF] to-[#9536E5]";

  // Figma's "variant=2" seems to have a different gradient but similar text/icon behavior on hover.
  // For simplicity, this example will focus on "variant=1" behavior, which is more common for a CTA.
  // If "variant=2" implies a different set of colors (e.g. for a secondary button), those would be added here.

  // Using Lucide React ArrowRight with different colors for normal and hover states

  const pulseAnimation = {
    scale: [1, 1.02, 1],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  const rippleVariants = {
    initial: { scale: 0, opacity: 1 },
    animate: { 
      scale: 4, 
      opacity: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <motion.div
      className="inline-block"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.98 }}
      animate={!isHovered ? pulseAnimation : {}}
    >
      <Link 
        href={href} 
        target="_blank"
        rel="noopener noreferrer"
        className={`${buttonBaseStyles}`}
        onClick={handleClick}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Ripple effect on hover */}
        <motion.span
          className="absolute inset-0 bg-[#04E4FF]/20 rounded-full"
          variants={rippleVariants}
          initial="initial"
          animate={isHovered ? "animate" : "initial"}
        />
        
        {/* Blurred background gradient element */}
        <motion.span 
          className="absolute inset-[-1px] -z-10"
          whileHover={{ 
            boxShadow: "0 0 30px rgba(4, 228, 255, 0.6)"
          }}
        >
          <span
            className={`absolute inset-0 ${primaryNormalBg} blur-[9px] rounded-full group-hover:opacity-100 opacity-100 transition-opacity duration-300`}
          />
          <span
            className={`absolute inset-0 ${
              isPrimary
                ? "bg-transparent group-hover:bg-white"
                : "bg-gray-200 group-hover:bg-gray-300"
            } rounded-full transition-colors duration-300`}
          />
        </motion.span>

        {/* Text Content with loading state */}
        <motion.span
          className={`relative z-10 flex items-center ${
            isPrimary
              ? `${primaryNormalText} group-hover:${primaryHoverText}`
              : "text-gray-700 group-hover:text-gray-900"
          } transition-colors duration-300`}
          animate={isLoading ? { opacity: [1, 0.7, 1] } : {}}
          transition={{ duration: 1, repeat: isLoading ? Infinity : 0 }}
        >
          {isLoading ? (
            <>
              <Loader2 className="w-5 h-5 mr-2 animate-spin" />
              Processing...
            </>
          ) : (
            "Request a Quote"
          )}
        </motion.span>

        {/* Icon with enhanced animations */}
        {!isLoading && (
          <motion.span 
            className="relative z-10 ml-2 w-[15px] h-[16px] flex items-center justify-center"
            whileHover={{ x: 5, rotate: 15 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <ArrowRight
              size={16}
              className={`transition-all duration-300 ease-in-out ${
                isPrimary
                  ? "text-[#00B9FF] group-hover:text-[#9536E5]"
                  : "text-gray-700 group-hover:text-gray-900"
              }`}
            />
          </motion.span>
        )}
      </Link>
    </motion.div>
  );
};

export default RequestQuoteButton;
