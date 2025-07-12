"use client";

import { motion } from "motion/react";

const Skeleton = ({ 
  width = "100%", 
  height = "20px", 
  className = "",
  variant = "rectangular", // "rectangular", "circular", "text"
  animation = "pulse", // "pulse", "wave", "none"
  count = 1
}) => {
  const baseClasses = "bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200";
  
  const getVariantClasses = () => {
    switch (variant) {
      case "circular":
        return "rounded-full";
      case "text":
        return "rounded-md";
      case "rectangular":
      default:
        return "rounded-lg";
    }
  };

  const getAnimationProps = () => {
    switch (animation) {
      case "wave":
        return {
          animate: {
            backgroundPosition: ["200% 0", "-200% 0"],
          },
          transition: {
            duration: 1.5,
            repeat: Infinity,
            ease: "linear"
          },
          style: {
            backgroundImage: "linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)",
            backgroundSize: "200% 100%"
          }
        };
      case "pulse":
        return {
          animate: {
            opacity: [0.6, 1, 0.6],
          },
          transition: {
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut"
          }
        };
      case "none":
      default:
        return {};
    }
  };

  const skeletonStyle = {
    width,
    height,
    willChange: animation !== "none" ? "opacity, background-position" : "auto"
  };

  // Render multiple skeletons for text-like content
  if (count > 1) {
    return (
      <div className="space-y-2">
        {Array.from({ length: count }).map((_, index) => (
          <motion.div
            key={index}
            className={`${baseClasses} ${getVariantClasses()} ${className}`}
            style={{
              ...skeletonStyle,
              width: index === count - 1 ? "75%" : width // Last line shorter
            }}
            {...getAnimationProps()}
          />
        ))}
      </div>
    );
  }

  return (
    <motion.div
      className={`${baseClasses} ${getVariantClasses()} ${className}`}
      style={skeletonStyle}
      {...getAnimationProps()}
    />
  );
};

// Pre-built skeleton components for common use cases
export const SkeletonCard = ({ showImage = true, showButton = true }) => (
  <div className="space-y-4 p-6 border border-gray-200 rounded-lg">
    {showImage && (
      <Skeleton 
        height="200px" 
        variant="rectangular" 
        animation="wave" 
      />
    )}
    <Skeleton height="24px" width="80%" variant="text" />
    <Skeleton height="16px" count={3} variant="text" />
    {showButton && (
      <Skeleton height="40px" width="120px" variant="rectangular" />
    )}
  </div>
);

export const SkeletonProfile = () => (
  <div className="flex items-center space-x-4">
    <Skeleton 
      width="60px" 
      height="60px" 
      variant="circular" 
      animation="pulse" 
    />
    <div className="space-y-2 flex-1">
      <Skeleton height="20px" width="60%" variant="text" />
      <Skeleton height="16px" width="40%" variant="text" />
    </div>
  </div>
);

export const SkeletonText = ({ lines = 3 }) => (
  <Skeleton 
    height="16px" 
    count={lines} 
    variant="text" 
    animation="pulse" 
  />
);

export const SkeletonButton = ({ size = "medium" }) => {
  const dimensions = {
    small: { width: "80px", height: "32px" },
    medium: { width: "120px", height: "40px" },
    large: { width: "160px", height: "48px" }
  };

  return (
    <Skeleton 
      {...dimensions[size]} 
      variant="rectangular" 
      animation="pulse" 
    />
  );
};

export default Skeleton;