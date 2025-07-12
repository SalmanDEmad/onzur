"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { motion } from "motion/react";

const OptimizedImage = ({
  src,
  alt,
  width,
  height,
  className = "",
  priority = false,
  quality = 85,
  placeholder = "blur",
  blurDataURL,
  sizes = "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw",
  style = {},
  onClick,
  fill = false,
  objectFit = "cover",
  loading = "lazy",
  ...props
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const [hasError, setHasError] = useState(false);
  const imgRef = useRef(null);

  // Intersection Observer for lazy loading
  useEffect(() => {
    if (priority || !imgRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      {
        rootMargin: "100px 0px", // Start loading 100px before entering viewport
        threshold: 0.1
      }
    );

    observer.observe(imgRef.current);
    return () => observer.disconnect();
  }, [priority]);

  // Generate optimized blur placeholder
  const generateBlurPlaceholder = (w = 40, h = 40) => {
    return `data:image/svg+xml;base64,${btoa(
      `<svg width="${w}" height="${h}" viewBox="0 0 ${w} ${h}" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="${w}" height="${h}" fill="url(#gradient)"/>
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style="stop-color:#00042A;stop-opacity:1" />
            <stop offset="100%" style="stop-color:#131848;stop-opacity:1" />
          </linearGradient>
        </defs>
      </svg>`
    )}`;
  };

  const shouldLoad = priority || isInView;
  const placeholderData = blurDataURL || generateBlurPlaceholder(width, height);

  // Skeleton loader component
  const SkeletonLoader = () => (
    <motion.div
      className={`bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 animate-pulse ${className}`}
      style={{
        width: fill ? "100%" : width,
        height: fill ? "100%" : height,
        ...style
      }}
      initial={{ opacity: 1 }}
      animate={{ opacity: isLoaded ? 0 : 1 }}
      transition={{ duration: 0.3 }}
    />
  );

  // Error fallback
  if (hasError) {
    return (
      <div
        className={`bg-gray-100 flex items-center justify-center ${className}`}
        style={{
          width: fill ? "100%" : width,
          height: fill ? "100%" : height,
          ...style
        }}
      >
        <span className="text-gray-400 text-sm">Image not found</span>
      </div>
    );
  }

  return (
    <div ref={imgRef} className="relative overflow-hidden">
      {/* Skeleton loader */}
      {!isLoaded && <SkeletonLoader />}
      
      {/* Optimized Image */}
      {shouldLoad && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isLoaded ? 1 : 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="relative"
        >
          <Image
            src={src}
            alt={alt}
            width={fill ? undefined : width}
            height={fill ? undefined : height}
            fill={fill}
            className={`${className} ${isLoaded ? "opacity-100" : "opacity-0"}`}
            priority={priority}
            quality={quality}
            placeholder={placeholder}
            blurDataURL={placeholderData}
            sizes={sizes}
            style={{ 
              objectFit: fill ? objectFit : undefined,
              ...style 
            }}
            loading={priority ? "eager" : loading}
            onLoad={() => setIsLoaded(true)}
            onError={() => setHasError(true)}
            onClick={onClick}
            {...props}
          />
        </motion.div>
      )}
    </div>
  );
};

export default OptimizedImage;