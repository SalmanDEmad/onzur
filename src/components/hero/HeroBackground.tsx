"use client";

import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { motion } from "motion/react";
import { BlobScene, ParticleField } from "./ThreeDScene";

// Glowing grid background
export const GridBackground = () => {
  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden z-0 pointer-events-none">
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(4, 228, 255, 0.1) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(4, 228, 255, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
          animation: 'gridPulse 4s ease-in-out infinite'
        }}
      />
      <style jsx>{`
        @keyframes gridPulse {
          0%, 100% { opacity: 0.1; }
          50% { opacity: 0.3; }
        }
      `}</style>
    </div>
  );
};

// Mouse follower glow effect
export const MouseFollower = ({ mousePosition }) => {
  return (
    <motion.div
      className="absolute w-96 h-96 rounded-full pointer-events-none z-[2]"
      style={{
        background: 'radial-gradient(circle, rgba(4,228,255,0.2) 0%, transparent 70%)',
        left: mousePosition.x - 192,
        top: mousePosition.y - 192,
        filter: 'blur(60px)',
      }}
      animate={{
        opacity: [0.3, 0.6, 0.3],
      }}
      transition={{
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    />
  );
};

// Main 3D Background Scene Component
export const HeroBackground = ({ normalizedMouse, mousePosition }) => {
  return (
    <>
      {/* 3D Background Scene */}
      <div className="absolute inset-0 w-full h-full z-0">
        <Canvas camera={{ position: [0, 0, 5], fov: 75 }} className="opacity-70">
          <Suspense fallback={null}>
            <BlobScene mousePosition={normalizedMouse} />
            <ParticleField />
          </Suspense>
        </Canvas>
      </div>

      {/* Animated Grid Background */}
      <GridBackground />
      
      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#00042A]/80 via-transparent to-[#00042A]/80 z-[1]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(4,228,255,0.15)_0%,_transparent_70%)] z-[1]" />
      
      {/* Mouse follower glow */}
      <MouseFollower mousePosition={mousePosition} />
    </>
  );
};
