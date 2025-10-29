"use client";

import { useEffect, useState } from "react";
import { motion, useScroll, useTransform, useMotionValue, useSpring } from "motion/react";
import { commonStyles } from "../lib/design-system";
import { HeroBackground } from "./hero/HeroBackground";
import { ParticleBackground } from "./hero/ParticleBackground";
import { TwoColumnHero } from "./hero/TwoColumnHero";
import { CarouselHero } from "./hero/CarouselHero";
import { HeroContent } from "./hero/HeroContent";
import { ContactCards } from "./hero/ContactCards";
import { ClientMarquee } from "./hero/ClientMarquee";

// ===== HERO SECTION VARIANTS =====
// Change this to switch between different hero section styles
export const HERO_VARIANTS = {
  THREED_BLOBS: '3d-blobs',           // 3D animated blobs with physics (fullscreen background)
  GALAXY_MORPH: 'galaxy-morph',       // Morphing galaxy particles (two-column layout)
  CAROUSEL: 'carousel',               // NEW: Auto-playing card carousel with fullscreen transitions
  GPU_PARTICLES: 'gpu-particles',     // GPU-accelerated particle simulation
  GRADIENT_MESH: 'gradient-mesh',     // Animated gradient mesh background
  SIMPLE_GRADIENT: 'simple-gradient', // Clean gradient background
};

// SET YOUR PREFERRED VARIANT HERE
export const ACTIVE_HERO_VARIANT = HERO_VARIANTS.GRADIENT_MESH
// ==================================

const HeroSection = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [activeVariant, setActiveVariant] = useState(ACTIVE_HERO_VARIANT);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [normalizedMouse, setNormalizedMouse] = useState({ x: 0.5, y: 0.5 });
  const { scrollY } = useScroll();
  const backgroundY = useTransform(scrollY, [0, 1000], [0, -300]);
  const backgroundOpacity = useTransform(scrollY, [0, 500], [1, 0.3]);
  
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const smoothMouseX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const smoothMouseY = useSpring(mouseY, { stiffness: 50, damping: 20 });

  useEffect(() => {
    setIsLoaded(true);
    
    // Add global function to change hero variant from console
    window.setHeroVariant = (variant) => {
      const validVariants = Object.values(HERO_VARIANTS);
      if (validVariants.includes(variant)) {
        setActiveVariant(variant);
        console.log(`✅ Hero variant changed to: ${variant}`);
      } else {
        console.error(`❌ Invalid variant. Available options:`, validVariants);
      }
    };
    
    // Add helper to list available variants
    window.listHeroVariants = () => {
      console.log('Available hero variants:', Object.values(HERO_VARIANTS));
      console.log('Usage: setHeroVariant("variant-name")');
    };
    
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      mouseX.set((clientX / innerWidth - 0.5) * 2);
      mouseY.set((clientY / innerHeight - 0.5) * 2);
      setMousePosition({ x: clientX, y: clientY });
      // Normalized position for 3D scene (0 to 1)
      setNormalizedMouse({ x: clientX / innerWidth, y: clientY / innerHeight });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      delete window.setHeroVariant;
      delete window.listHeroVariants;
    };
  }, [mouseX, mouseY]);

  const clientLogos = [
    { src: "/assets/images/ibm-logo.svg", alt: "IBM" },
    { src: "/assets/images/sony-logo.png", alt: "Sony" },
    { src: "/assets/images/nfl-logo.png", alt: "NFL" },
    { src: "/assets/images/mcds-logo.png", alt: "McDonald's" },
    { src: "/assets/images/g2-logo.png", alt: "G2" },
    { src: "/assets/images/enchant-logo.png", alt: "Enchant" },
  ];

  // Duplicate for seamless scroll
  const duplicatedLogos = [...clientLogos, ...clientLogos];
  
  // Stats data
  const stats = [
    { value: "100M+", label: "Total Views Generated" },
    { value: "500+", label: "Successful Projects" },
    { value: "98%", label: "Client Satisfaction" },
    { value: "24/7", label: "Support Available" }
  ];



  // Render content based on active variant (some variants use different layouts)
  const renderContent = () => {
    // Carousel fullscreen variant
    if (activeVariant === HERO_VARIANTS.CAROUSEL) {
      return (
        <>
          <CarouselHero isLoaded={isLoaded} />
          <div className={`relative ${commonStyles.container} z-10 mt-20`}>
            <ContactCards isLoaded={isLoaded} />
          </div>
        </>
      );
    }

    // Two-column layout variants
    if (activeVariant === HERO_VARIANTS.GALAXY_MORPH) {
      return (
        <div className={`relative ${commonStyles.container} z-10`}>
          <TwoColumnHero 
            isLoaded={isLoaded}
            smoothMouseX={smoothMouseX}
            smoothMouseY={smoothMouseY}
            stats={stats}
          />
          <div className="mt-20">
            <ContactCards isLoaded={isLoaded} />
          </div>
        </div>
      );
    }
    
    // Default centered layout
    return (
      <div className={`relative ${commonStyles.container} flex flex-col items-center justify-center min-h-[100vh] pt-32 pb-20 z-10`}>
        <HeroContent 
          isLoaded={isLoaded}
          smoothMouseX={smoothMouseX}
          smoothMouseY={smoothMouseY}
          stats={stats}
        />
        <ContactCards isLoaded={isLoaded} />
      </div>
    );
  };

  // Render background based on active variant
  const renderBackground = () => {
    switch (activeVariant) {
      case HERO_VARIANTS.THREED_BLOBS:
        return (
          <HeroBackground 
            normalizedMouse={normalizedMouse} 
            mousePosition={mousePosition} 
          />
        );
      
      case HERO_VARIANTS.GALAXY_MORPH:
        // No fullscreen background for two-column layout
        return (
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-b from-[#00042A] via-[#001a4d] to-[#00042A]" />
          </div>
        );
      
      case HERO_VARIANTS.GPU_PARTICLES:
        return (
          <ParticleBackground 
            normalizedMouse={normalizedMouse}
          />
        );
      
      case HERO_VARIANTS.GRADIENT_MESH:
        return (
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-br from-[#00042A] via-[#04E4FF]/20 to-[#8B5CF6]/30 animate-pulse" />
          </div>
        );
      
      case HERO_VARIANTS.SIMPLE_GRADIENT:
        return (
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-b from-[#00042A] via-[#001a4d] to-[#00042A]" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(4,228,255,0.1)_0%,_transparent_50%)]" />
          </div>
        );
      
      default:
        return null;
    }
  };

  return (
    <section className={`${commonStyles.sectionDark} text-white relative`}>
      {/* Background - switches based on ACTIVE_HERO_VARIANT */}
      {renderBackground()}

      {/* Main Hero Content - layout changes based on variant */}
      {renderContent()}

      {/* Client Logos Marquee */}
      <ClientMarquee clientLogos={clientLogos} />
    </section>
  );
};

export default HeroSection;
