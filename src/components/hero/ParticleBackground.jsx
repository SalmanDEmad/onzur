"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

// GPU-accelerated particle system using custom shaders
const GPUParticles = ({ mousePosition }) => {
  const particlesRef = useRef();
  const materialRef = useRef();
  const timeRef = useRef(0);
  
  const particleCount = 5000;
  
  // Create particle geometry and attributes
  const { positions, velocities, sizes, colors } = useMemo(() => {
    const positions = new Float32Array(particleCount * 3);
    const velocities = new Float32Array(particleCount * 3);
    const sizes = new Float32Array(particleCount);
    const colors = new Float32Array(particleCount * 3);
    
    for (let i = 0; i < particleCount; i++) {
      const i3 = i * 3;
      
      // Random positions in a box
      positions[i3] = (Math.random() - 0.5) * 40;
      positions[i3 + 1] = (Math.random() - 0.5) * 40;
      positions[i3 + 2] = (Math.random() - 0.5) * 20;
      
      // Random velocities
      velocities[i3] = (Math.random() - 0.5) * 0.02;
      velocities[i3 + 1] = (Math.random() - 0.5) * 0.02;
      velocities[i3 + 2] = (Math.random() - 0.5) * 0.01;
      
      // Random sizes
      sizes[i] = Math.random() * 3 + 1;
      
      // Cyan to purple gradient colors
      const color = new THREE.Color();
      color.setHSL(0.5 + Math.random() * 0.3, 0.8, 0.6);
      colors[i3] = color.r;
      colors[i3 + 1] = color.g;
      colors[i3 + 2] = color.b;
    }
    
    return { positions, velocities, sizes, colors };
  }, []);
  
  // Custom vertex shader for GPU particle simulation
  const vertexShader = `
    attribute float size;
    attribute vec3 velocity;
    
    uniform float time;
    uniform vec2 mouse;
    uniform float mouseInfluence;
    
    varying vec3 vColor;
    
    void main() {
      vColor = color;
      
      // Get particle position
      vec3 pos = position;
      
      // Mouse interaction - attract particles to mouse
      vec2 mousePos = mouse * 20.0;
      vec2 particlePos2D = pos.xy;
      vec2 toMouse = mousePos - particlePos2D;
      float distToMouse = length(toMouse);
      
      // Apply mouse force (inverse square law for realistic physics)
      if (distToMouse < 15.0 && distToMouse > 0.1) {
        vec2 mouseForce = normalize(toMouse) * (mouseInfluence / (distToMouse * distToMouse));
        pos.xy += mouseForce;
      }
      
      // Animate particles with sine wave motion
      pos.x += sin(time * 0.5 + position.y * 0.1) * 0.5;
      pos.y += cos(time * 0.3 + position.x * 0.1) * 0.5;
      
      // Add velocity-based drift
      pos += velocity * time * 0.1;
      
      // Wrap particles around the bounds
      pos.x = mod(pos.x + 20.0, 40.0) - 20.0;
      pos.y = mod(pos.y + 20.0, 40.0) - 20.0;
      pos.z = mod(pos.z + 10.0, 20.0) - 10.0;
      
      vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
      
      // Size attenuation based on distance
      gl_PointSize = size * (300.0 / -mvPosition.z);
      
      gl_Position = projectionMatrix * mvPosition;
    }
  `;
  
  // Custom fragment shader for particle appearance
  const fragmentShader = `
    varying vec3 vColor;
    
    void main() {
      // Create circular particles with soft edges
      vec2 center = gl_PointCoord - vec2(0.5);
      float dist = length(center);
      
      if (dist > 0.5) discard;
      
      // Soft edge falloff
      float alpha = 1.0 - smoothstep(0.2, 0.5, dist);
      
      // Add glow effect
      float glow = exp(-dist * 4.0);
      
      gl_FragColor = vec4(vColor * (0.5 + glow * 0.5), alpha * 0.8);
    }
  `;
  
  // Animate particles
  useFrame((state) => {
    if (!materialRef.current) return;
    
    // Use actual elapsed time for smooth animation
    materialRef.current.uniforms.time.value = state.clock.elapsedTime;
    
    if (mousePosition) {
      // Convert normalized mouse to shader coordinates
      materialRef.current.uniforms.mouse.value.set(
        (mousePosition.x - 0.5) * 2,
        -(mousePosition.y - 0.5) * 2
      );
      
      // Calculate mouse influence based on movement
      const mouseDist = Math.sqrt(
        Math.pow(mousePosition.x - 0.5, 2) + 
        Math.pow(mousePosition.y - 0.5, 2)
      );
      materialRef.current.uniforms.mouseInfluence.value = Math.min(mouseDist * 10, 2.0);
    }
  });
  
  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particleCount}
          array={positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-velocity"
          count={particleCount}
          array={velocities}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-size"
          count={particleCount}
          array={sizes}
          itemSize={1}
        />
        <bufferAttribute
          attach="attributes-color"
          count={particleCount}
          array={colors}
          itemSize={3}
        />
      </bufferGeometry>
      <shaderMaterial
        ref={materialRef}
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={{
          time: { value: 0 },
          mouse: { value: new THREE.Vector2(0, 0) },
          mouseInfluence: { value: 0.0 }
        }}
        vertexColors
        transparent
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
};

// Connection lines between nearby particles
const ParticleConnections = ({ mousePosition }) => {
  const linesRef = useRef();
  const materialRef = useRef();
  
  const lineCount = 500;
  
  const { positions, colors } = useMemo(() => {
    const positions = new Float32Array(lineCount * 6); // 2 points per line
    const colors = new Float32Array(lineCount * 6); // 2 colors per line
    
    for (let i = 0; i < lineCount * 6; i += 6) {
      // Random line positions
      positions[i] = (Math.random() - 0.5) * 40;
      positions[i + 1] = (Math.random() - 0.5) * 40;
      positions[i + 2] = (Math.random() - 0.5) * 20;
      positions[i + 3] = positions[i] + (Math.random() - 0.5) * 5;
      positions[i + 4] = positions[i + 1] + (Math.random() - 0.5) * 5;
      positions[i + 5] = positions[i + 2] + (Math.random() - 0.5) * 2;
      
      // Cyan color
      const color = new THREE.Color(0x04E4FF);
      colors[i] = color.r;
      colors[i + 1] = color.g;
      colors[i + 2] = color.b;
      colors[i + 3] = color.r;
      colors[i + 4] = color.g;
      colors[i + 5] = color.b;
    }
    
    return { positions, colors };
  }, []);
  
  useFrame((state) => {
    if (!linesRef.current) return;
    
    linesRef.current.rotation.y = state.clock.elapsedTime * 0.05;
  });
  
  return (
    <lineSegments ref={linesRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={lineCount * 2}
          array={positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          count={lineCount * 2}
          array={colors}
          itemSize={3}
        />
      </bufferGeometry>
      <lineBasicMaterial
        ref={materialRef}
        vertexColors
        transparent
        opacity={0.2}
        blending={THREE.AdditiveBlending}
      />
    </lineSegments>
  );
};

// Main particle background component
export const ParticleBackground = ({ normalizedMouse }) => {
  return (
    <>
      {/* 3D Particle Scene */}
      <div className="absolute inset-0 w-full h-full z-0">
        <Canvas 
          camera={{ position: [0, 0, 15], fov: 75 }} 
          className="opacity-80"
        >
          <GPUParticles mousePosition={normalizedMouse} />
          <ParticleConnections mousePosition={normalizedMouse} />
        </Canvas>
      </div>

      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#00042A]/90 via-transparent to-[#00042A]/90 z-[1]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_0%,_#00042A_80%)] z-[1]" />
      
      {/* Scanline effect */}
      <div className="absolute inset-0 z-[1] opacity-10 pointer-events-none">
        <div 
          className="w-full h-full"
          style={{
            backgroundImage: 'repeating-linear-gradient(0deg, rgba(4, 228, 255, 0.03) 0px, transparent 2px)',
          }}
        />
      </div>
    </>
  );
};
