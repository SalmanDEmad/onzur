"use client";

import { motion, useReducedMotion } from "motion/react";

// ===== ANIMATION VARIANTS & CONFIG =====

// Safe viewport settings with conservative detection thresholds
export const safeViewport = {
  once: true,
  margin: "0px 0px -100px 0px", // Trigger when 100px from bottom of viewport
  amount: 0.1, // Only need 10% visible to trigger
};

// Base transition with accessibility-friendly duration
const safeTransition = {
  duration: 0.4,
  ease: [0.25, 0.1, 0.25, 1.0], // Smooth easing curve
};

// Gentle fade-in from bottom (≤20px movement)
export const fadeInUp = (delay = 0) => ({
  initial: {
    opacity: 0,
    y: 15,
    scale: 0.98,
  },
  animate: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { ...safeTransition, delay },
  },
  exit: {
    opacity: 0,
    y: -10,
    transition: { duration: 0.2 },
  },
});

// Gentle fade-in from left (≤20px movement)
export const fadeInLeft = (delay = 0) => ({
  initial: {
    opacity: 0,
    x: -15,
    scale: 0.98,
  },
  animate: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: { ...safeTransition, delay },
  },
  exit: {
    opacity: 0,
    x: 10,
    transition: { duration: 0.2 },
  },
});

// Gentle fade-in from right (≤20px movement)
export const fadeInRight = (delay = 0) => ({
  initial: {
    opacity: 0,
    x: 15,
    scale: 0.98,
  },
  animate: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: { ...safeTransition, delay },
  },
  exit: {
    opacity: 0,
    x: -10,
    transition: { duration: 0.2 },
  },
});

// Simple fade-in (no movement)
export const fadeIn = {
  initial: {
    opacity: 0,
    scale: 0.99,
  },
  animate: {
    opacity: 1,
    scale: 1,
    transition: safeTransition,
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.2 },
  },
};

// Gentle stagger animation for lists
export const stagger = (delayChildren = 0.1, staggerChildren = 0.1) => ({
  animate: {
    transition: {
      staggerChildren,
      delayChildren,
    },
  },
});

// Card hover effect with subtle lift
export const cardHover = {
  whileHover: {
    y: -4,
    scale: 1.02,
    transition: { duration: 0.3, ease: "easeOut" },
  },
  whileTap: {
    scale: 0.98,
    transition: { duration: 0.1 },
  },
};

// Button hover with gentle scale
export const buttonHover = {
  whileHover: {
    scale: 1.05,
    transition: { duration: 0.2, ease: "easeOut" },
  },
  whileTap: {
    scale: 0.95,
    transition: { duration: 0.1 },
  },
};

// Feature flag constant that can be toggled globally
export const MOTION_ENABLED = true;

// ===== MOTION COMPONENTS =====

// MotionSection: Opt-in scroll reveal wrapper
export function MotionSection({
  children,
  variants,
  disabled = false,
  className = "",
  ...rest
}) {
  const prefersReduced = useReducedMotion();

  if (disabled || prefersReduced) {
    return (
      <div className={className} {...rest}>
        {children}
      </div>
    );
  }

  return (
    <motion.section
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={safeViewport}
      variants={variants}
      {...rest}
    >
      {children}
    </motion.section>
  );
}

// MotionDiv: General purpose motion wrapper
export function MotionDiv({
  children,
  variants,
  disabled = false,
  className = "",
  ...rest
}) {
  const prefersReduced = useReducedMotion();

  if (disabled || prefersReduced) {
    return (
      <div className={className} {...rest}>
        {children}
      </div>
    );
  }

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={safeViewport}
      variants={variants}
      {...rest}
    >
      {children}
    </motion.div>
  );
}

// MotionItem: Micro-interaction wrapper for buttons, cards, etc.
export function MotionItem({
  children,
  disabled = false,
  className = "",
  hoverVariants,
  tapVariants,
  ...rest
}) {
  const prefersReduced = useReducedMotion();

  if (disabled || prefersReduced) {
    return (
      <div className={className} {...rest}>
        {children}
      </div>
    );
  }

  return (
    <motion.div
      className={className}
      initial="rest"
      whileHover="hover"
      whileTap="tap"
      variants={{
        rest: {},
        hover: hoverVariants || {
          y: -1,
          transition: { type: "spring", stiffness: 300, damping: 24 },
        },
        tap: tapVariants || { scale: 0.99, transition: { duration: 0.1 } },
      }}
      {...rest}
    >
      {children}
    </motion.div>
  );
}

// MotionButton: Enhanced button with safe micro-interactions
export function MotionButton({
  children,
  disabled = false,
  className = "",
  onClick,
  ...rest
}) {
  const prefersReduced = useReducedMotion();

  if (disabled || prefersReduced) {
    return (
      <button className={className} onClick={onClick} {...rest}>
        {children}
      </button>
    );
  }

  return (
    <motion.button
      className={className}
      onClick={onClick}
      initial="rest"
      whileHover="hover"
      whileTap="tap"
      variants={{
        rest: { scale: 1, y: 0 },
        hover: {
          scale: 1.02,
          y: -1,
          transition: { type: "spring", stiffness: 400, damping: 25 },
        },
        tap: { scale: 0.98, transition: { duration: 0.1 } },
      }}
      {...rest}
    >
      {children}
    </motion.button>
  );
}

// AnimationToggle: Utility to check if animations are enabled on a parent
export function useAnimationEnabled() {
  if (typeof window === "undefined") return true;

  // Check for data-anim="on" on body or any parent element
  const hasAnimFlag = document.querySelector('[data-anim="on"]');
  return hasAnimFlag !== null;
}
