"use client";

import { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { Phone, MessageCircle, ArrowRight, ChevronDown, Play } from "lucide-react";
import { commonStyles } from "../lib/design-system";
import { ClientMarquee } from "./hero/ClientMarquee";
import { useLanguage } from "../contexts/LanguageContext";

// ===== CLIENT LOGOS =====
const clientLogos = [
  { src: "/assets/images/ibm-logo.svg", alt: "IBM" },
  { src: "/assets/images/sony-logo.png", alt: "Sony" },
  { src: "/assets/images/nfl-logo.png", alt: "NFL" },
  { src: "/assets/images/mcds-logo.png", alt: "McDonald's" },
  { src: "/assets/images/g2-logo.png", alt: "G2" },
  { src: "/assets/images/enchant-logo.png", alt: "Enchant" },
];

// ===== ANIMATED COUNTER =====
const AnimatedCounter = ({ value, delay = 0 }: { value: string; delay?: number }) => {
  const [displayValue, setDisplayValue] = useState("0");

  useEffect(() => {
    const timer = setTimeout(() => {
      const numericMatch = value.match(/[\d.]+/);
      if (!numericMatch) {
        setDisplayValue(value);
        return;
      }
      const target = parseFloat(numericMatch[0]);
      const prefix = value.slice(0, value.indexOf(numericMatch[0]));
      const suffix = value.slice(value.indexOf(numericMatch[0]) + numericMatch[0].length);
      const duration = 2000;
      const startTime = Date.now();

      const animate = () => {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        const current = Math.floor(target * eased);
        setDisplayValue(`${prefix}${current}${suffix}`);
        if (progress < 1) requestAnimationFrame(animate);
        else setDisplayValue(value);
      };
      requestAnimationFrame(animate);
    }, delay);

    return () => clearTimeout(timer);
  }, [value, delay]);

  return <span>{displayValue}</span>;
};

// ===== AURORA BACKGROUND =====
const AuroraBackground = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    {/* Base dark gradient */}
    <div className="absolute inset-0 bg-gradient-to-b from-[#00021a] via-[#00042A] to-[#000320]" />

    {/* Aurora orbs */}
    <div className="absolute top-[-20%] left-[-10%] w-[70vw] h-[70vw] max-w-[800px] max-h-[800px] rounded-full bg-[#04E4FF]/[0.07] blur-[120px] animate-aurora-1" />
    <div className="absolute top-[10%] right-[-15%] w-[60vw] h-[60vw] max-w-[700px] max-h-[700px] rounded-full bg-[#8B5CF6]/[0.08] blur-[100px] animate-aurora-2" />
    <div className="absolute bottom-[-10%] left-[20%] w-[50vw] h-[50vw] max-w-[600px] max-h-[600px] rounded-full bg-[#06B6D4]/[0.06] blur-[110px] animate-aurora-3" />

    {/* Noise texture overlay */}
    <div className="absolute inset-0 opacity-[0.03]" style={{
      backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.5'/%3E%3C/svg%3E")`,
    }} />

    {/* Subtle grid */}
    <div className="absolute inset-0 opacity-[0.03]" style={{
      backgroundImage: `linear-gradient(rgba(4,228,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(4,228,255,0.3) 1px, transparent 1px)`,
      backgroundSize: "60px 60px",
    }} />

    {/* Radial spotlight */}
    <div className="absolute top-[15%] left-1/2 -translate-x-1/2 w-[80vw] h-[50vh] bg-[radial-gradient(ellipse,_rgba(4,228,255,0.08)_0%,_transparent_70%)]" />

    {/* Bottom fade */}
    <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#00042A] to-transparent" />
  </div>
);

// ===== FLOATING SERVICE PILLS =====
const FloatingPills = ({ services }: { services: { label: string; icon: string }[] }) => (
  <div className="hidden lg:flex flex-col gap-3 absolute right-8 xl:right-16 top-1/2 -translate-y-1/2 z-20">
    {services.map((service, i) => (
      <motion.div
        key={service.label}
        className="flex items-center gap-2 bg-white/[0.04] backdrop-blur-md border border-white/[0.08] rounded-full px-4 py-2 text-sm text-white/70 hover:text-white hover:bg-white/[0.08] hover:border-[#04E4FF]/30 transition-all cursor-default"
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.2 + i * 0.1, duration: 0.5, ease: "easeOut" }}
        whileHover={{ x: -4, scale: 1.02 }}
      >
        <span className="text-base">{service.icon}</span>
        <span className="font-medium">{service.label}</span>
      </motion.div>
    ))}
  </div>
);

// ===== SCROLL INDICATOR =====
const ScrollIndicator = ({ label }: { label: string }) => (
  <motion.div
    className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-20"
    initial={{ opacity: 0, y: -10 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 2, duration: 0.6 }}
  >
    <span className="text-xs tracking-[0.2em] uppercase text-white/40 font-medium">{label}</span>
    <motion.div
      animate={{ y: [0, 8, 0] }}
      transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
    >
      <ChevronDown size={18} className="text-white/30" />
    </motion.div>
  </motion.div>
);

// ===== MAIN HERO SECTION =====
const HeroSection = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const { t, isRTL } = useLanguage();
  const { scrollY } = useScroll();
  const heroOpacity = useTransform(scrollY, [0, 600], [1, 0]);
  const heroScale = useTransform(scrollY, [0, 600], [1, 0.95]);
  const heroY = useTransform(scrollY, [0, 600], [0, 100]);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const optimizedStagger = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.3 },
    },
  };

  const itemVariant = {
    hidden: { opacity: 0, y: 25, filter: "blur(4px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 0.7 },
    },
  };

  // Translated data arrays (re-computed on language change)
  const services = [
    { label: t('hero.services.contentCreation'), icon: "🎬" },
    { label: t('hero.services.socialMedia'), icon: "📱" },
    { label: t('hero.services.webDev'), icon: "💻" },
    { label: t('hero.services.paidAds'), icon: "📈" },
    { label: t('hero.services.videoProd'), icon: "🎥" },
    { label: t('hero.services.brandStrategy'), icon: "🎯" },
  ];

  const stats = [
    { value: "100M+", label: t('hero.stats.viewsGenerated') },
    { value: "500+", label: t('hero.stats.projectsDelivered') },
    { value: "98%", label: t('hero.stats.clientSatisfaction') },
    { value: "24/7", label: t('hero.stats.dedicatedSupport') },
  ];

  return (
    <section className="relative min-h-screen text-white overflow-hidden">
      {/* Aurora Background */}
      <AuroraBackground />

      {/* Parallax wrapper */}
      <motion.div
        style={{ opacity: heroOpacity, scale: heroScale, y: heroY }}
        className="relative z-10"
      >
        {/* Main Content */}
        <div className={`${commonStyles.container} relative z-10 pt-36 md:pt-40 lg:pt-44 pb-32`}>
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center min-h-[calc(100vh-12rem)]">
            {/* Left Column - Text Content */}
            <motion.div
              className="lg:col-span-7 xl:col-span-7 flex flex-col justify-center"
              variants={optimizedStagger}
              initial="hidden"
              animate={isLoaded ? "visible" : "hidden"}
            >
              {/* Badge */}
              <motion.div variants={itemVariant} className="mb-6">
                <div className="inline-flex items-center gap-2.5 bg-white/[0.04] backdrop-blur-xl border border-white/[0.08] rounded-full px-5 py-2.5">
                  <motion.div
                    className="w-2 h-2 rounded-full bg-[#04E4FF]"
                    animate={{ scale: [1, 1.4, 1], opacity: [0.7, 1, 0.7] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  />
                  <span className="text-sm font-medium text-white/80 tracking-wide">
                    {t('hero.badge')}
                  </span>
                </div>
              </motion.div>

              {/* Headline */}
              <motion.h1
                variants={itemVariant}
                className="heading-display text-[clamp(2.8rem,6vw,5.5rem)] leading-[1.05] mb-6 tracking-tight"
              >
                <span className="text-white">{t('hero.title1')}</span>
                <br />
                <span className="relative inline-block">
                  <span className="bg-gradient-to-r from-[#04E4FF] via-[#06B6D4] to-[#8B5CF6] bg-clip-text text-transparent">
                    {t('hero.title2')}
                  </span>
                  <motion.div
                    className="absolute -bottom-1 left-0 right-0 h-[3px] bg-gradient-to-r from-[#04E4FF] to-[#8B5CF6] rounded-full"
                    initial={{ scaleX: 0, originX: 0 }}
                    animate={isLoaded ? { scaleX: 1 } : { scaleX: 0 }}
                    transition={{ delay: 1.2, duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
                  />
                </span>
              </motion.h1>

              {/* Subtitle */}
              <motion.p
                variants={itemVariant}
                className="body-professional text-lg md:text-xl text-white/60 max-w-xl mb-10 leading-relaxed"
              >
                {t('hero.subtitle')}
              </motion.p>

              {/* CTA Row */}
              <motion.div variants={itemVariant} className={`flex flex-col sm:flex-row items-start gap-4 mb-14 ${isRTL ? 'sm:flex-row-reverse' : ''}`}>
                <motion.a
                  href="https://wa.me/97459990137?text=Hi! I'd like to discuss a project with Onzur."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative inline-flex items-center gap-3 bg-gradient-to-r from-[#04E4FF] to-[#06B6D4] text-[#00042A] px-8 py-4 rounded-full font-poppins font-bold text-base overflow-hidden shadow-lg shadow-[#04E4FF]/20"
                  whileHover={{ scale: 1.03, boxShadow: "0 12px 40px rgba(4,228,255,0.3)" }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="relative z-10 flex items-center gap-2">
                    {t('hero.cta1')}
                    <ArrowRight size={18} className={`${isRTL ? 'group-hover:-translate-x-1 rotate-180' : 'group-hover:translate-x-1'} transition-transform`} />
                  </span>
                  <motion.div
                    className="absolute inset-0 bg-white/20"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "100%" }}
                    transition={{ duration: 0.5 }}
                  />
                </motion.a>

                <motion.a
                  href="#portfolio"
                  className="group inline-flex items-center gap-2.5 text-white/70 hover:text-white px-6 py-4 rounded-full font-medium text-base transition-colors"
                  whileHover={{ x: 3 }}
                >
                  <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center group-hover:border-[#04E4FF]/50 group-hover:bg-[#04E4FF]/5 transition-all">
                    <Play size={14} className="text-white/60 group-hover:text-[#04E4FF] transition-colors ml-0.5" />
                  </div>
                  {t('hero.cta2')}
                </motion.a>
              </motion.div>

              {/* Contact Quick Links */}
              <motion.div variants={itemVariant} className={`flex flex-wrap items-center gap-6 ${isRTL ? 'flex-row-reverse' : ''}`}>
                <a
                  href="tel:+97459990137"
                  className="group flex items-center gap-3 text-white/50 hover:text-white transition-colors"
                >
                  <div className="w-9 h-9 rounded-lg bg-[#04E4FF]/10 border border-[#04E4FF]/20 flex items-center justify-center group-hover:bg-[#04E4FF]/20 transition-all">
                    <Phone size={15} className="text-[#04E4FF]" />
                  </div>
                  <div>
                    <div className="text-xs text-white/40 leading-none mb-0.5">{t('hero.callUs')}</div>
                    <div className="text-sm font-semibold">+974 5999 0137</div>
                  </div>
                </a>

                <div className="w-px h-8 bg-white/10" />

                <a
                  href="https://wa.me/97477507972?text=Hello! I'm interested in your services."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 text-white/50 hover:text-white transition-colors"
                >
                  <div className="w-9 h-9 rounded-lg bg-[#8B5CF6]/10 border border-[#8B5CF6]/20 flex items-center justify-center group-hover:bg-[#8B5CF6]/20 transition-all">
                    <MessageCircle size={15} className="text-[#8B5CF6]" />
                  </div>
                  <div>
                    <div className="text-xs text-white/40 leading-none mb-0.5">{t('hero.whatsappUs')}</div>
                    <div className="text-sm font-semibold">+974 7750 7972</div>
                  </div>
                </a>
              </motion.div>
            </motion.div>

            {/* Right Column - Stats & Visual */}
            <motion.div
              className="lg:col-span-5 xl:col-span-5 flex flex-col items-center justify-center"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isLoaded ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              transition={{ delay: 0.6, duration: 0.8, ease: "easeOut" }}
            >
              {/* Stats Cards */}
              <div className="grid grid-cols-2 gap-4 w-full max-w-md">
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    className="group relative"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ delay: 0.8 + index * 0.12, duration: 0.5 }}
                    whileHover={{ y: -3, transition: { duration: 0.2 } }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-[#04E4FF]/10 to-[#8B5CF6]/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="relative bg-white/[0.03] backdrop-blur-sm border border-white/[0.06] rounded-2xl p-6 text-center group-hover:border-[#04E4FF]/20 transition-all duration-300">
                      <div className="text-3xl md:text-4xl font-black heading-display bg-gradient-to-br from-[#04E4FF] to-[#8B5CF6] bg-clip-text text-transparent mb-2">
                        <AnimatedCounter value={stat.value} delay={1000 + index * 200} />
                      </div>
                      <div className="text-xs md:text-sm text-white/40 font-medium tracking-wide uppercase">
                        {stat.label}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Mobile Service Tags */}
              <motion.div
                className="lg:hidden flex flex-wrap justify-center gap-2 mt-8"
                initial={{ opacity: 0 }}
                animate={isLoaded ? { opacity: 1 } : { opacity: 0 }}
                transition={{ delay: 1.5, duration: 0.5 }}
              >
                {services.map((service) => (
                  <span
                    key={service.label}
                    className="flex items-center gap-1.5 bg-white/[0.04] border border-white/[0.06] rounded-full px-3 py-1.5 text-xs text-white/50"
                  >
                    <span>{service.icon}</span>
                    {service.label}
                  </span>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Floating Service Pills - Desktop */}
        <FloatingPills services={services} />

        {/* Scroll Indicator */}
        <ScrollIndicator label={t('hero.scroll')} />
      </motion.div>

      {/* Client Logos Marquee */}
      <div className="relative z-20">
        <ClientMarquee clientLogos={clientLogos} />
      </div>
    </section>
  );
};

export default HeroSection;
