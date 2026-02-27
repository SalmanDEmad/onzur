"use client";

import { useRef, useState, useEffect } from "react";
import { useFrame } from "@react-three/fiber";
import { MeshDistortMaterial, Sphere } from "@react-three/drei";
import * as THREE from "three";

// ===== CONFIGURATION =====
// Change this to switch between different visual styles
export const BLOB_VARIANTS = {
  HEXAGONAL_BLOBS: 'hexagonal', // Current: 6-sided hexagonal shapes with blobby texture
  SMOOTH_SPHERES: 'smooth',     // Alternative: Smooth round blobs
  SHARP_CRYSTALS: 'crystals',   // Alternative: Sharp crystalline shapes
};

// SET YOUR PREFERRED VARIANT HERE
export const ACTIVE_VARIANT = BLOB_VARIANTS.HEXAGONAL_BLOBS;
// =========================

// Store all blob positions for collision detection - updated at start of each frame
const blobPositions = new Map();
const blobVelocities = new Map();
const blobRefs = new Map(); // Store refs to apply forces to other blobs

// Track which blob is currently attached to cursor (only one at a time)
let currentlyAttachedBlob = null;

// Configuration for different blob variants
const getVariantConfig = (variant) => {
  switch(variant) {
    case BLOB_VARIANTS.SMOOTH_SPHERES:
      return {
        segments: [1, 128, 128], // [radius, widthSegments, heightSegments]
        distort: {
          base: 0.3,
          hover: { min: 0.3, max: 0.6 },
          collision: { min: 0.4, max: 0.8 }
        }
      };
    case BLOB_VARIANTS.SHARP_CRYSTALS:
      return {
        segments: [1, 6, 3],
        distort: {
          base: 0.05,
          hover: { min: 0.05, max: 0.1 },
          collision: { min: 0.08, max: 0.15 }
        }
      };
    case BLOB_VARIANTS.HEXAGONAL_BLOBS:
    default:
      return {
        segments: [1, 6, 3],
        distort: {
          base: 0.1,
          hover: { min: 0.1, max: 0.2 },
          collision: { min: 0.15, max: 0.3 }
        }
      };
  }
};

// Animated 3D Liquid Blob Component with enhanced physics and collision detection
export const AnimatedBlob = ({ position, color, speed = 1, scale = 1, mousePosition, blobId, variant = ACTIVE_VARIANT }) => {
  const meshRef = useRef();
  const materialRef = useRef();
  const [hovered, setHovered] = useState(false);
  
  // Get variant configuration
  const config = getVariantConfig(variant);
  
  // Physics state for momentum and inertia
  const velocityRef = useRef({ x: 0, y: 0, z: 0 });
  const targetPositionRef = useRef();
  const lastMouseDistanceRef = useRef(10);
  const magneticAttachmentRef = useRef(false);
  const originalPositionRef = useRef([position[0], position[1], position[2]]);
  
  // Material animation throttle
  const lastMaterialUpdateRef = useRef(0);
  
  // Initialize target position properly
  useEffect(() => {
    if (!targetPositionRef.current) {
      targetPositionRef.current = { 
        x: position[0], 
        y: position[1], 
        z: position[2] 
      };
    }
    // Update original position if prop changes
    originalPositionRef.current = [position[0], position[1], position[2]];
  }, [position]);
  
  // Reduced blob size (60-70% of original)
  const adjustedScale = scale * 0.65;
  const blobRadius = adjustedScale;
  
  // Validate blobId
  if (!blobId) {
    console.error('AnimatedBlob: blobId prop is required for collision detection');
  }
  
  useFrame((state) => {
    if (!meshRef.current || !targetPositionRef.current) return;
    
    // Base rotation
    meshRef.current.rotation.x = state.clock.getElapsedTime() * speed * 0.15;
    meshRef.current.rotation.y = state.clock.getElapsedTime() * speed * 0.25;
    meshRef.current.rotation.z = Math.sin(state.clock.getElapsedTime() * speed * 0.1) * 0.2;
    
    // Update this blob's position and refs in the global maps at the START of frame
    // This ensures all blobs read consistent positions and can apply forces to each other
    blobPositions.set(blobId, {
      x: meshRef.current.position.x,
      y: meshRef.current.position.y,
      z: meshRef.current.position.z,
      radius: blobRadius
    });
    
    blobRefs.set(blobId, {
      targetPosition: targetPositionRef.current,
      velocity: velocityRef.current,
      isAttached: magneticAttachmentRef.current
    });
    
    if (mousePosition) {
      // Use raycasting for accurate screen-to-world space conversion
      // This accounts for camera position, FOV, and perspective properly
      const blobZ = meshRef.current.position.z;
      
      // Convert normalized mouse (0-1) to NDC (-1 to 1)
      const mouseNDC = new THREE.Vector2(
        (mousePosition.x * 2) - 1,
        -(mousePosition.y * 2 - 1) // Invert Y for Three.js coordinate system
      );
      
      // Create raycaster from camera through mouse position
      const raycaster = new THREE.Raycaster();
      raycaster.setFromCamera(mouseNDC, state.camera);
      
      // Create a plane at the blob's Z position (perpendicular to Z-axis)
      const plane = new THREE.Plane(new THREE.Vector3(0, 0, 1), -blobZ);
      const intersectPoint = new THREE.Vector3();
      
      // Find where the ray intersects the plane
      const intersects = raycaster.ray.intersectPlane(plane, intersectPoint);
      
      let mouseX, mouseY;
      if (intersects) {
        // Use the exact intersection point
        mouseX = intersectPoint.x;
        mouseY = intersectPoint.y;
      } else {
        // Fallback (should rarely happen)
        mouseX = 0;
        mouseY = 0;
      }
      
      // Calculate distance from mouse
      const distX = mouseX - meshRef.current.position.x;
      const distY = mouseY - meshRef.current.position.y;
      const distance = Math.sqrt(distX * distX + distY * distY);
      
      // Increased interaction radius from 5 to 8 units
      const interactionRadius = 8;
      const mouseSpeed = Math.abs(distance - lastMouseDistanceRef.current);
      lastMouseDistanceRef.current = distance;
      
      // Enhanced magnetic attachment logic - simplified state machine
      const isInRange = distance < interactionRadius;
      const isVeryClose = distance < 3;
      const isCloseEnough = distance < 5;
      const isFastMovement = mouseSpeed > 0.5;
      
      if (isInRange) {
        // Stronger force calculation with non-linear falloff
        const forceFalloff = Math.pow((interactionRadius - distance) / interactionRadius, 1.5);
        const baseForce = 0.15; // Reduced from 0.7 to prevent extreme speeds
        
        // Calculate magnetic force direction (normalized)
        const forceX = (distX / distance) * forceFalloff * baseForce;
        const forceY = (distY / distance) * forceFalloff * baseForce;
        
        // State machine for magnetic attachment - only one blob at a time
        if (isVeryClose && (currentlyAttachedBlob === null || currentlyAttachedBlob === blobId)) {
          // Very close - attach strongly with direct position to cursor (blob center follows mouse exactly)
          magneticAttachmentRef.current = true;
          currentlyAttachedBlob = blobId;
          
          // Lock blob center directly to mouse position with high strength
          targetPositionRef.current.x = mouseX;
          targetPositionRef.current.y = mouseY;
          
          // Kill velocity when attached - blob follows cursor rigidly
          velocityRef.current.x *= 0.3; // Very strong damping when attached
          velocityRef.current.y *= 0.3;
        } else if (isCloseEnough && magneticAttachmentRef.current && currentlyAttachedBlob === blobId && !isFastMovement) {
          // Maintaining attachment - blob center stays locked to cursor
          targetPositionRef.current.x = mouseX;
          targetPositionRef.current.y = mouseY;
          
          // Continue strong velocity dampening
          velocityRef.current.x *= 0.3;
          velocityRef.current.y *= 0.3;
        } else if (isFastMovement && currentlyAttachedBlob === blobId) {
          // Fast movement breaks attachment
          magneticAttachmentRef.current = false;
          if (currentlyAttachedBlob === blobId) {
            currentlyAttachedBlob = null;
          }
          // Apply base momentum (only X and Y)
          velocityRef.current.x += forceX * 0.05;
          velocityRef.current.y += forceY * 0.05;
        } else if (!isCloseEnough && currentlyAttachedBlob === blobId) {
          // Too far - reset attachment
          magneticAttachmentRef.current = false;
          currentlyAttachedBlob = null;
          // Apply base momentum (only X and Y)
          velocityRef.current.x += forceX * 0.05;
          velocityRef.current.y += forceY * 0.05;
        } else {
          // In range but another blob is attached, or not close enough
          // Just apply gentle pull (only X and Y)
          velocityRef.current.x += forceX * 0.05;
          velocityRef.current.y += forceY * 0.05;
        }
        
        // Throttle material updates to every 3 frames for performance
        if (state.clock.elapsedTime - lastMaterialUpdateRef.current > 0.05) {
          if (materialRef.current) {
            const distortRange = config.distort.hover.max - config.distort.hover.min;
            materialRef.current.distort = config.distort.hover.min + forceFalloff * distortRange;
            materialRef.current.speed = speed * (1.5 + forceFalloff * 2);
          }
          lastMaterialUpdateRef.current = state.clock.elapsedTime;
        }
      } else {
        // Out of range - reset attachment
        if (magneticAttachmentRef.current && currentlyAttachedBlob === blobId) {
          currentlyAttachedBlob = null;
        }
        magneticAttachmentRef.current = false;
        
        // Gradual return to original position with momentum (only X and Y)
        const returnForceX = (originalPositionRef.current[0] - meshRef.current.position.x) * 0.015;
        const returnForceY = (originalPositionRef.current[1] - meshRef.current.position.y) * 0.015;
        
        velocityRef.current.x += returnForceX;
        velocityRef.current.y += returnForceY;
        
        // Throttle material updates
        if (state.clock.elapsedTime - lastMaterialUpdateRef.current > 0.05) {
          if (materialRef.current) {
            materialRef.current.distort += (config.distort.base - materialRef.current.distort) * 0.03;
            materialRef.current.speed += (speed * 1.5 - materialRef.current.speed) * 0.03;
          }
          lastMaterialUpdateRef.current = state.clock.elapsedTime;
        }
      }
      
      // Apply stronger damping to velocity to prevent runaway speeds (only X and Y)
      // Extra damping if attached to prevent oscillation
      const dampingFactor = magneticAttachmentRef.current ? 0.75 : 0.88;
      velocityRef.current.x *= dampingFactor;
      velocityRef.current.y *= dampingFactor;
      // Z velocity gets stronger damping to keep blobs on their Z plane
      velocityRef.current.z *= 0.7;
      
      // Clamp velocity to prevent extreme speeds (only for X and Y)
      // Higher limit to allow dramatic bounces from collisions
      const maxVelocity = magneticAttachmentRef.current ? 0.5 : 1.5; // Higher for free blobs
      const velocityMagnitudeXY = Math.sqrt(
        velocityRef.current.x ** 2 + 
        velocityRef.current.y ** 2
      );
      if (velocityMagnitudeXY > maxVelocity) {
        const scale = maxVelocity / velocityMagnitudeXY;
        velocityRef.current.x *= scale;
        velocityRef.current.y *= scale;
      }
      
      // Strong return force for Z axis to keep blobs on their plane
      const zReturnForce = (originalPositionRef.current[2] - meshRef.current.position.z) * 0.08;
      velocityRef.current.z += zReturnForce;
      
      // Clamp Z velocity separately to prevent z-axis movement
      const maxZVelocity = 0.05;
      velocityRef.current.z = Math.max(-maxZVelocity, Math.min(maxZVelocity, velocityRef.current.z));
      
      // Update target position
      targetPositionRef.current.x += velocityRef.current.x;
      targetPositionRef.current.y += velocityRef.current.y;
      targetPositionRef.current.z += velocityRef.current.z;
      
      // Collision detection - BIDIRECTIONAL REPULSION with visual feedback
      // Apply Newton's Third Law: when A pushes B, B pushes back on A
      let hasCollision = false;
      let maxCollisionIntensity = 0;
      
      blobPositions.forEach((otherBlob, otherId) => {
        if (otherId !== blobId) {
          const dx = targetPositionRef.current.x - otherBlob.x;
          const dy = targetPositionRef.current.y - otherBlob.y;
          const dist = Math.sqrt(dx * dx + dy * dy); // Only X/Y distance for collision
          
          // Collision detection in X/Y plane only (blobs can pass on Z axis)
          const minDistance = blobRadius + otherBlob.radius;
          
          // ONLY apply force when blobs are actually colliding (overlapping)
          if (dist < minDistance && dist > 0.01) {
            hasCollision = true;
            
            // Calculate REPULSION force to push blobs apart
            const overlap = minDistance - dist;
            const collisionIntensity = overlap / minDistance; // 0 to 1
            maxCollisionIntensity = Math.max(maxCollisionIntensity, collisionIntensity);
            
            // Normalized direction vector (from other blob to this blob)
            const dirX = dx / dist;
            const dirY = dy / dist;
            
            // Get the other blob's refs to apply counter-force
            const otherBlobRef = blobRefs.get(otherId);
            
            if (magneticAttachmentRef.current) {
              // THIS BLOB IS LOCKED: Nearly immovable, pushes others strongly
              const lockedBlobPushStrength = 0.15;
              const pushX = dirX * overlap * lockedBlobPushStrength;
              const pushY = dirY * overlap * lockedBlobPushStrength;
              
              targetPositionRef.current.x += pushX;
              targetPositionRef.current.y += pushY;
              velocityRef.current.x += pushX * 0.05;
              velocityRef.current.y += pushY * 0.05;
              
              // Apply STRONG counter-force to the other blob
              if (otherBlobRef) {
                // Only apply force if other blob is free (not attached)
                if (!otherBlobRef.isAttached) {
                  const otherPushStrength = 2.5; // Much stronger push
                  const otherPushX = -dirX * overlap * otherPushStrength;
                  const otherPushY = -dirY * overlap * otherPushStrength;
                  
                  otherBlobRef.targetPosition.x += otherPushX;
                  otherBlobRef.targetPosition.y += otherPushY;
                  
                  // Strong velocity impulse for dramatic bounce
                  const otherVelocityStrength = 0.6; // Much higher for dramatic effect
                  otherBlobRef.velocity.x += otherPushX * otherVelocityStrength;
                  otherBlobRef.velocity.y += otherPushY * otherVelocityStrength;
                }
              } else {
                // Debug: log if ref is missing
                console.warn(`Missing blob ref for ${otherId} during collision with locked ${blobId}`);
              }
            } else {
              // THIS BLOB IS FREE: Normal collision response
              const pushStrength = 1.5;
              const pushX = dirX * overlap * pushStrength;
              const pushY = dirY * overlap * pushStrength;
              
              targetPositionRef.current.x += pushX;
              targetPositionRef.current.y += pushY;
              
              const velocityStrength = 0.3;
              velocityRef.current.x += pushX * velocityStrength;
              velocityRef.current.y += pushY * velocityStrength;
              
              // Apply equal and opposite force to the other blob (Newton's Third Law)
              if (otherBlobRef) {
                // Only apply force if other blob is free (not attached)
                if (!otherBlobRef.isAttached) {
                  const otherPushX = -dirX * overlap * pushStrength;
                  const otherPushY = -dirY * overlap * pushStrength;
                  
                  otherBlobRef.targetPosition.x += otherPushX;
                  otherBlobRef.targetPosition.y += otherPushY;
                  
                  otherBlobRef.velocity.x += otherPushX * velocityStrength;
                  otherBlobRef.velocity.y += otherPushY * velocityStrength;
                }
              } else {
                // Debug: log if ref is missing
                console.warn(`Missing blob ref for ${otherId} during collision with free ${blobId}`);
              }
            }
          }
          // NO force applied when blobs are not touching - no attraction
        }
      });
      
      // Update material distortion based on collision
      if (materialRef.current && state.clock.elapsedTime - lastMaterialUpdateRef.current > 0.016) {
        if (hasCollision) {
          // Increase distortion during collision for squash effect
          const distortRange = config.distort.collision.max - config.distort.collision.min;
          const collisionDistort = config.distort.collision.min + maxCollisionIntensity * distortRange;
          materialRef.current.distort = Math.max(materialRef.current.distort, collisionDistort);
          materialRef.current.speed = speed * (2 + maxCollisionIntensity * 2);
        } else {
          // Gradually return to base distortion
          materialRef.current.distort += (config.distort.base - materialRef.current.distort) * 0.1;
          materialRef.current.speed += (speed * 1.5 - materialRef.current.speed) * 0.1;
        }
        lastMaterialUpdateRef.current = state.clock.elapsedTime;
      }
      
      // Apply final position with smooth interpolation
      // Much higher lerp factor when attached for tight cursor lock
      const lerpFactor = magneticAttachmentRef.current ? 0.85 : 0.15;
      meshRef.current.position.x += (targetPositionRef.current.x - meshRef.current.position.x) * lerpFactor;
      meshRef.current.position.y += (targetPositionRef.current.y - meshRef.current.position.y) * lerpFactor;
      meshRef.current.position.z += (targetPositionRef.current.z - meshRef.current.position.z) * lerpFactor;
    }
  });

  return (
    <Sphere 
      ref={meshRef} 
      args={config.segments} 
      scale={adjustedScale} 
      position={position}
      onPointerEnter={() => setHovered(true)}
      onPointerLeave={() => setHovered(false)}
    >
      <MeshDistortMaterial
        ref={materialRef}
        color={color}
        attach="material"
        distort={config.distort.base}
        speed={speed * 1.5}
        roughness={0}
        metalness={0.9}
        clearcoat={1}
        clearcoatRoughness={0}
        emissive={color}
        emissiveIntensity={hovered ? 0.8 : 0.5}
        envMapIntensity={1.5}
        reflectivity={1}
        transmission={0.9}
        transparent={true}
        opacity={hovered ? 0.95 : 0.85}
        ior={1.5}
        thickness={0.5}
      />
    </Sphere>
  );
};

// Validate required props
AnimatedBlob.displayName = 'AnimatedBlob';

// 3D Scene with multiple liquid blobs and enhanced lighting
export const BlobScene = ({ mousePosition }) => {
  return (
    <>
      {/* Enhanced lighting for glass/liquid effect */}
      <ambientLight intensity={0.3} />
      <directionalLight position={[5, 5, 5]} intensity={1.5} color="#ffffff" />
      <directionalLight position={[-5, -5, -5]} intensity={0.8} color="#04E4FF" />
      <pointLight position={[10, 10, 10]} intensity={2} color="#ffffff" />
      <pointLight position={[-10, -10, -10]} intensity={1.5} color="#04E4FF" />
      <pointLight position={[0, 5, 5]} intensity={1} color="#8B5CF6" />
      <spotLight position={[0, 10, 0]} angle={0.5} penumbra={1} intensity={2} color="#06B6D4" />
      
      {/* Multiple liquid blobs with varied properties - all on same Z axis (z=0) for consistent cursor tracking */}
      <AnimatedBlob blobId="blob1" position={[-3, 0, 0]} color="#04E4FF" speed={0.7} scale={1.8} mousePosition={mousePosition} />
      <AnimatedBlob blobId="blob2" position={[3, 1, 0]} color="#8B5CF6" speed={1.1} scale={1.4} mousePosition={mousePosition} />
      <AnimatedBlob blobId="blob3" position={[0, -2, 0]} color="#06B6D4" speed={0.9} scale={2} mousePosition={mousePosition} />
      <AnimatedBlob blobId="blob4" position={[2, -1, 0]} color="#6366F1" speed={0.8} scale={1.2} mousePosition={mousePosition} />
      <AnimatedBlob blobId="blob5" position={[-2, 2, 0]} color="#14B8A6" speed={1} scale={1.5} mousePosition={mousePosition} />
      <AnimatedBlob blobId="blob6" position={[1, 0, 0]} color="#0EA5E9" speed={1.3} scale={1.1} mousePosition={mousePosition} />
    </>
  );
};

// Particle system for background
export const ParticleField = () => {
  const particlesRef = useRef();
  const particleCount = 1000;
  
  const positions = new Float32Array(particleCount * 3);
  const colors = new Float32Array(particleCount * 3);
  
  for (let i = 0; i < particleCount; i++) {
    positions[i * 3] = (Math.random() - 0.5) * 50;
    positions[i * 3 + 1] = (Math.random() - 0.5) * 50;
    positions[i * 3 + 2] = (Math.random() - 0.5) * 50;
    
    const color = new THREE.Color();
    color.setHSL(0.55 + Math.random() * 0.1, 0.8, 0.6);
    colors[i * 3] = color.r;
    colors[i * 3 + 1] = color.g;
    colors[i * 3 + 2] = color.b;
  }
  
  useFrame((state) => {
    if (particlesRef.current) {
      particlesRef.current.rotation.y = state.clock.getElapsedTime() * 0.05;
      particlesRef.current.rotation.x = Math.sin(state.clock.getElapsedTime() * 0.1) * 0.1;
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
          attach="attributes-color"
          count={particleCount}
          array={colors}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial size={0.05} vertexColors transparent opacity={0.6} sizeAttenuation />
    </points>
  );
};
