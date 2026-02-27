"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

const FloatingParticles = ({ count = 400 }) => {
  const pointsRef = useRef();
  
  const particles = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const velocities = new Float32Array(count * 3);
    
    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      // Spread particles across entire viewport
      positions[i3] = (Math.random() - 0.5) * 20;
      positions[i3 + 1] = (Math.random() - 0.5) * 20;
      positions[i3 + 2] = (Math.random() - 0.5) * 10;
      
      // Slower random velocities
      velocities[i3] = (Math.random() - 0.5) * 0.005;
      velocities[i3 + 1] = (Math.random() - 0.5) * 0.005;
      velocities[i3 + 2] = (Math.random() - 0.5) * 0.003;
    }
    
    return { positions, velocities };
  }, [count]);
  
  useFrame((state, delta) => {
    if (!pointsRef.current) return;
    
    const positions = pointsRef.current.geometry.attributes.position.array;
    const time = state.clock.elapsedTime;
    
    // Only update every other frame for performance
    if (Math.floor(time * 60) % 2 !== 0) return;
    
    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      
      // Gentle floating motion
      positions[i3] += particles.velocities[i3];
      positions[i3 + 1] += particles.velocities[i3 + 1];
      positions[i3 + 2] += particles.velocities[i3 + 2];
      
      // Add slower wave motion
      positions[i3 + 1] += Math.sin(time * 0.2 + positions[i3]) * 0.0005;
      
      // Wrap around boundaries
      if (Math.abs(positions[i3]) > 10) positions[i3] *= -0.9;
      if (Math.abs(positions[i3 + 1]) > 10) positions[i3 + 1] *= -0.9;
      if (Math.abs(positions[i3 + 2]) > 5) positions[i3 + 2] *= -0.9;
    }
    
    pointsRef.current.geometry.attributes.position.needsUpdate = true;
  });
  
  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={particles.positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.05}
        color="#04E4FF"
        transparent
        opacity={0.3}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
};

export const AmbientParticlesCanvas = () => {
  return (
    <Canvas
      camera={{ position: [0, 0, 5], fov: 75 }}
      className="w-full h-full"
      dpr={[1, 1.5]}
    >
      <FloatingParticles count={800} />
    </Canvas>
  );
};
