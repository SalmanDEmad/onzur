"use client";

import { Suspense, lazy } from "react";
import { motion } from "motion/react";
import { fadeInUp, viewport } from "../lib/animation-variants";
import Skeleton, { SkeletonCard } from "./Skeleton";

// Wrapper component for lazy loading sections with loading states
const LazySection = ({ 
  component: Component, 
  fallback, 
  className = "motion-element",
  ...props 
}) => {
  const defaultFallback = (
    <div className="py-20">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Array.from({ length: 6 }).map((_, index) => (
            <SkeletonCard key={index} />
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <motion.div 
      initial="hidden" 
      whileInView="visible" 
      viewport={viewport} 
      variants={fadeInUp}
      className={className}
    >
      <Suspense fallback={fallback || defaultFallback}>
        <Component {...props} />
      </Suspense>
    </motion.div>
  );
};

// Pre-configured lazy components
export const LazyTeamSection = lazy(() => 
  import("./TeamSection").then(module => ({ default: module.default }))
);

export const LazyExpertiseSection = lazy(() => 
  import("./ExpertiseSection").then(module => ({ default: module.default }))
);

export const LazyCaseStudiesSection = lazy(() => 
  import("./CaseStudiesSection").then(module => ({ default: module.default }))
);

export const LazyPortfolioSection = lazy(() => 
  import("./PortfolioSection").then(module => ({ default: module.default }))
);

export const LazyTestimonialsSection = lazy(() => 
  import("./TestimonialsSection").then(module => ({ default: module.default }))
);

export const LazyContactUsSection = lazy(() => 
  import("./ContactUsSection").then(module => ({ default: module.default }))
);

export default LazySection;