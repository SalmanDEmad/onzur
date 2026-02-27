"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

const carouselData = [
  {
    place: 'Digital Innovation',
    title: 'CREATIVE',
    title2: 'EXCELLENCE',
    description: 'Transforming brands through cutting-edge digital strategies and award-winning content creation that captivates audiences and drives real business growth.',
    image: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=1600&q=80'
  },
  {
    place: 'Social Media Mastery',
    title: 'VIRAL',
    title2: 'CONTENT',
    description: 'From zero to millions of views—our proven content strategies have generated 100M+ views and built massive followings for brands across Qatar.',
    image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=1600&q=80'
  },
  {
    place: 'Video Production',
    title: 'CINEMATIC',
    title2: 'STORYTELLING',
    description: 'Professional video production that brings your vision to life through compelling visual narratives and expert post-production craftsmanship.',
    image: 'https://images.unsplash.com/photo-1492619375914-88005aa9e8fb?w=1600&q=80'
  },
  {
    place: 'Brand Growth',
    title: 'MARKET',
    title2: 'DOMINATION',
    description: 'Strategic marketing solutions that turn your social media into a powerful customer acquisition engine working 24/7 to grow your brand.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1600&q=80'
  },
];

export const CarouselHero = ({ isLoaded }) => {
  const orderRef = useRef([0, 1, 2, 3]);
  const detailsEvenRef = useRef(true);
  const containerRef = useRef(null);
  const pausedRef = useRef(false);
  const loopRef = useRef(null);
  const [, forceUpdate] = useState({});

  useEffect(() => {
    if (!isLoaded) return;

    const ease = "sine.inOut";
    let offsetTop = window.innerHeight - 430;
    let offsetLeft = window.innerWidth - 830;
    const cardWidth = 200;
    const cardHeight = 300;
    const gap = 40;

    const order = orderRef.current;
    const [active, ...rest] = order;
    const detailsActive = detailsEvenRef.current ? "#carousel-details-even" : "#carousel-details-odd";
    const detailsInactive = detailsEvenRef.current ? "#carousel-details-odd" : "#carousel-details-even";
    
    // Initial setup
    gsap.set(`#carousel-card-${active}`, {
      x: 0,
      y: 0,
      width: window.innerWidth,
      height: window.innerHeight,
      zIndex: 20,
      borderRadius: 0,
    });

    rest.forEach((i, index) => {
      gsap.set(`#carousel-card-${i}`, {
        x: offsetLeft + 400 + index * (cardWidth + gap),
        y: offsetTop,
        width: cardWidth,
        height: cardHeight,
        zIndex: 30,
        borderRadius: 10,
      });
    });

    gsap.set(detailsActive, { opacity: 0, x: -200, zIndex: 22 });
    gsap.set(detailsInactive, { opacity: 0, zIndex: 12 });
    gsap.set(`${detailsInactive} .place-text`, { y: 100 });
    gsap.set(`${detailsInactive} .title-1`, { y: 100 });
    gsap.set(`${detailsInactive} .title-2`, { y: 100 });
    gsap.set(`${detailsInactive} .desc`, { y: 50 });
    gsap.set(`${detailsInactive} .cta`, { y: 60 });

    gsap.set("#carousel-progress", { width: 500 * (1 / order.length) * (active + 1) });
    gsap.set("#carousel-indicator", { x: -window.innerWidth });

    // Animate in with delay
    const startDelay = 0.6;
    
    rest.forEach((i, index) => {
      gsap.to(`#carousel-card-${i}`, {
        x: offsetLeft + index * (cardWidth + gap),
        zIndex: 30,
        delay: startDelay + 0.05 * index,
        ease,
      });
    });

    gsap.to(detailsActive, { opacity: 1, x: 0, ease, delay: startDelay });

    // Start loop after delay
    setTimeout(() => {
      loopAnimation();
    }, (startDelay + 0.5) * 1000);

    return () => {
      if (loopRef.current) {
        loopRef.current.kill();
      }
    };
  }, [isLoaded]);

  const animate = (target, duration, properties) => {
    return new Promise((resolve) => {
      gsap.to(target, {
        ...properties,
        duration: duration,
        onComplete: resolve,
      });
    });
  };

  const step = () => {
    return new Promise((resolve) => {
      const order = orderRef.current;
      order.push(order.shift());
      detailsEvenRef.current = !detailsEvenRef.current;
      forceUpdate({});

      const ease = "sine.inOut";
      const offsetTop = window.innerHeight - 430;
      const offsetLeft = window.innerWidth - 830;
      const cardWidth = 200;
      const cardHeight = 300;
      const gap = 40;

      const detailsActive = detailsEvenRef.current ? "#carousel-details-even" : "#carousel-details-odd";
      const detailsInactive = detailsEvenRef.current ? "#carousel-details-odd" : "#carousel-details-even";

      gsap.set(detailsActive, { zIndex: 22 });
      gsap.to(detailsActive, { opacity: 1, delay: 0.4, ease });
      gsap.to(`${detailsActive} .place-text`, { y: 0, delay: 0.1, duration: 0.7, ease });
      gsap.to(`${detailsActive} .title-1`, { y: 0, delay: 0.15, duration: 0.7, ease });
      gsap.to(`${detailsActive} .title-2`, { y: 0, delay: 0.15, duration: 0.7, ease });
      gsap.to(`${detailsActive} .desc`, { y: 0, delay: 0.3, duration: 0.4, ease });
      gsap.to(`${detailsActive} .cta`, { y: 0, delay: 0.35, duration: 0.4, onComplete: resolve, ease });
      
      gsap.set(detailsInactive, { zIndex: 12 });

      const [active, ...rest] = order;
      const prv = rest[rest.length - 1];

      gsap.set(`#carousel-card-${prv}`, { zIndex: 10 });
      gsap.set(`#carousel-card-${active}`, { zIndex: 20 });
      gsap.to(`#carousel-card-${prv}`, { scale: 1.5, ease });

      gsap.to("#carousel-progress", {
        width: 500 * (1 / order.length) * (active + 1),
        ease,
      });

      gsap.to(`#carousel-card-${active}`, {
        x: 0,
        y: 0,
        ease,
        width: window.innerWidth,
        height: window.innerHeight,
        borderRadius: 0,
        onComplete: () => {
          const xNew = offsetLeft + (rest.length - 1) * (cardWidth + gap);
          gsap.set(`#carousel-card-${prv}`, {
            x: xNew,
            y: offsetTop,
            width: cardWidth,
            height: cardHeight,
            zIndex: 30,
            borderRadius: 10,
            scale: 1,
          });

          gsap.set(detailsInactive, { opacity: 0 });
          gsap.set(`${detailsInactive} .place-text`, { y: 100 });
          gsap.set(`${detailsInactive} .title-1`, { y: 100 });
          gsap.set(`${detailsInactive} .title-2`, { y: 100 });
          gsap.set(`${detailsInactive} .desc`, { y: 50 });
          gsap.set(`${detailsInactive} .cta`, { y: 60 });
        },
      });

      rest.forEach((i, index) => {
        if (i !== prv) {
          const xNew = offsetLeft + index * (cardWidth + gap);
          gsap.set(`#carousel-card-${i}`, { zIndex: 30 });
          gsap.to(`#carousel-card-${i}`, {
            x: xNew,
            y: offsetTop,
            width: cardWidth,
            height: cardHeight,
            ease,
            delay: 0.1 * (index + 1),
          });
        }
      });
    });
  };

  const loopAnimation = async () => {
    if (pausedRef.current) {
      setTimeout(loopAnimation, 100);
      return;
    }
    
    await animate("#carousel-indicator", 2, { x: 0 });
    await animate("#carousel-indicator", 0.8, { x: window.innerWidth, delay: 0.3 });
    gsap.set("#carousel-indicator", { x: -window.innerWidth });
    await step();
    loopAnimation();
  };

  const activeIndex = orderRef.current[0];

  return (
    <div 
      ref={containerRef}
      className="relative w-full h-screen overflow-hidden bg-[#0A0F1E]"
      onMouseEnter={() => {
        pausedRef.current = true;
      }}
      onMouseLeave={() => {
        pausedRef.current = false;
      }}
    >
      {/* Progress Indicator */}
      <div 
        id="carousel-indicator"
        className="fixed left-0 top-0 right-0 h-[5px] bg-[#04E4FF] z-50"
        style={{ transform: 'translateX(-100vw)' }}
      />

      {/* Cards */}
      {carouselData.map((item, index) => (
        <div
          key={index}
          id={`carousel-card-${index}`}
          className="absolute overflow-hidden shadow-2xl"
          style={{
            backgroundImage: `url(${item.image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-[#0A0F1E]/60 via-[#0A0F1E]/40 to-[#04E4FF]/10" />
        </div>
      ))}

      {/* Details - Even */}
      <div
        id="carousel-details-even"
        className="absolute top-60 left-16 z-30 text-white"
      >
        <div className="h-12 overflow-hidden mb-4">
          <div className="h-1 w-8 bg-[#04E4FF] rounded-full" />
        </div>
        
        <div className="h-12 overflow-hidden">
          <div className="place-text text-xl font-medium">
            {carouselData[activeIndex].place}
          </div>
        </div>
        
        <div className="h-24 overflow-hidden">
          <div className="title-1 text-7xl md:text-8xl font-bold" style={{ fontFamily: 'Oswald, sans-serif' }}>
            {carouselData[activeIndex].title}
          </div>
        </div>
        
        <div className="h-24 overflow-hidden">
          <div className="title-2 text-7xl md:text-8xl font-bold" style={{ fontFamily: 'Oswald, sans-serif' }}>
            {carouselData[activeIndex].title2}
          </div>
        </div>
        
        <div className="overflow-hidden">
          <p className="desc text-lg max-w-lg mt-6 leading-relaxed text-gray-200">
            {carouselData[activeIndex].description}
          </p>
        </div>
        
        <div className="overflow-hidden">
          <div className="cta flex gap-4 mt-8">
            <a 
              href="https://wa.me/97477507972"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-gradient-to-r from-[#04E4FF] to-[#06B6D4] text-white rounded-full font-semibold hover:shadow-lg hover:shadow-[#04E4FF]/50 transition-all"
            >
              Start Your Project
            </a>
            <a
              href="#portfolio"
              className="px-8 py-4 border-2 border-[#04E4FF] text-[#04E4FF] rounded-full font-semibold hover:bg-[#04E4FF]/10 transition-all"
            >
              View Our Work
            </a>
          </div>
        </div>
      </div>

      {/* Details - Odd */}
      <div
        id="carousel-details-odd"
        className="absolute top-60 left-16 z-30 text-white"
      >
        <div className="h-12 overflow-hidden mb-4">
          <div className="h-1 w-8 bg-[#04E4FF] rounded-full" />
        </div>
        
        <div className="h-12 overflow-hidden">
          <div className="place-text text-xl font-medium">
            {carouselData[activeIndex].place}
          </div>
        </div>
        
        <div className="h-24 overflow-hidden">
          <div className="title-1 text-7xl md:text-8xl font-bold" style={{ fontFamily: 'Oswald, sans-serif' }}>
            {carouselData[activeIndex].title}
          </div>
        </div>
        
        <div className="h-24 overflow-hidden">
          <div className="title-2 text-7xl md:text-8xl font-bold" style={{ fontFamily: 'Oswald, sans-serif' }}>
            {carouselData[activeIndex].title2}
          </div>
        </div>
        
        <div className="overflow-hidden">
          <p className="desc text-lg max-w-lg mt-6 leading-relaxed text-gray-200">
            {carouselData[activeIndex].description}
          </p>
        </div>
        
        <div className="overflow-hidden">
          <div className="cta flex gap-4 mt-8">
            <a 
              href="https://wa.me/97477507972"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-gradient-to-r from-[#04E4FF] to-[#06B6D4] text-white rounded-full font-semibold hover:shadow-lg hover:shadow-[#04E4FF]/50 transition-all"
            >
              Start Your Project
            </a>
            <a
              href="#portfolio"
              className="px-8 py-4 border-2 border-[#04E4FF] text-[#04E4FF] rounded-full font-semibold hover:bg-[#04E4FF]/10 transition-all"
            >
              View Our Work
            </a>
          </div>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="absolute bottom-12 left-16 z-40 flex items-center gap-6">
        <div className="w-[500px] h-[3px] bg-white/20 rounded-full overflow-hidden">
          <div
            id="carousel-progress"
            className="h-full bg-[#04E4FF]"
          />
        </div>
        <div className="text-white/80 text-2xl font-bold tabular-nums">
          {String(orderRef.current[0] + 1).padStart(2, '0')}
        </div>
      </div>
    </div>
  );
};
