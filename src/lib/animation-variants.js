// Optimized animation variants for performance
// Using transform3d for hardware acceleration and optimized easing

// Optimized easing curves for smooth performance
const easing = {
  smooth: [0.25, 0.46, 0.45, 0.94],
  snappy: [0.4, 0, 0.2, 1],
  bounce: [0.68, -0.55, 0.265, 1.55],
};

// Base animation variants - reusable and optimized
export const fadeInUp = {
  hidden: { 
    opacity: 0, 
    y: 30,
    transform: "translate3d(0, 30px, 0)",
  },
  visible: { 
    opacity: 1, 
    y: 0,
    transform: "translate3d(0, 0, 0)",
    transition: { 
      duration: 0.6, 
      ease: easing.smooth,
      will_change: "transform, opacity"
    }
  }
};

export const fadeInLeft = {
  hidden: { 
    opacity: 0, 
    x: -30,
    transform: "translate3d(-30px, 0, 0)",
  },
  visible: { 
    opacity: 1, 
    x: 0,
    transform: "translate3d(0, 0, 0)",
    transition: { 
      duration: 0.5, 
      ease: easing.smooth,
      will_change: "transform, opacity"
    }
  }
};

export const fadeInScale = {
  hidden: { 
    opacity: 0, 
    scale: 0.95,
    transform: "translate3d(0, 0, 0) scale(0.95)",
  },
  visible: { 
    opacity: 1, 
    scale: 1,
    transform: "translate3d(0, 0, 0) scale(1)",
    transition: { 
      duration: 0.4, 
      ease: easing.snappy,
      will_change: "transform, opacity"
    }
  }
};

// Stagger container - optimized for performance
export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
      when: "beforeChildren"
    }
  }
};

export const fastStagger = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
      when: "beforeChildren"
    }
  }
};

// Hover animations - optimized for responsiveness
export const hoverScale = {
  scale: 1.05,
  transition: { 
    duration: 0.2, 
    ease: easing.snappy,
    will_change: "transform"
  }
};

export const hoverLift = {
  y: -8,
  transition: { 
    duration: 0.3, 
    ease: easing.smooth,
    will_change: "transform"
  }
};

// Button animations
export const buttonHover = {
  scale: 1.02,
  transition: { 
    duration: 0.15, 
    ease: easing.snappy,
    will_change: "transform"
  }
};

export const buttonTap = {
  scale: 0.98,
  transition: { 
    duration: 0.1,
    will_change: "transform"
  }
};

// Floating animations - optimized for continuous play
export const floatingSubtle = {
  y: [-5, 5, -5],
  transition: {
    duration: 4,
    repeat: Infinity,
    ease: "easeInOut",
    will_change: "transform"
  }
};

export const floatingGentle = {
  y: [-10, 10, -10],
  transition: {
    duration: 6,
    repeat: Infinity,
    ease: "easeInOut",
    will_change: "transform"
  }
};

// Loading animations
export const pulse = {
  scale: [1, 1.05, 1],
  transition: {
    duration: 2,
    repeat: Infinity,
    ease: "easeInOut",
    will_change: "transform"
  }
};

export const shimmer = {
  x: ["-100%", "100%"],
  transition: {
    duration: 1.5,
    repeat: Infinity,
    ease: "easeInOut",
    will_change: "transform"
  }
};

// Viewport animation settings - optimized for performance
export const viewport = {
  once: true,
  margin: "-50px",
  amount: 0.2
};

export const viewportFast = {
  once: true,
  margin: "-20px",
  amount: 0.1
};

// Utility functions for performance
export const getOptimizedTransition = (duration = 0.3, ease = easing.smooth) => ({
  duration,
  ease,
  will_change: "transform, opacity"
});

export const getStaggerTransition = (staggerDelay = 0.1, childDelay = 0.1) => ({
  staggerChildren: staggerDelay,
  delayChildren: childDelay,
  when: "beforeChildren"
});