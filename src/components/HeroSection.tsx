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
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      const numericMatch = value.match(/[\d.]+/);
      if (!numericMatch) {
        setDisplayValue(value);
        setHasAnimated(true);
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
        if (progress < 1) {
          requestAnimationFrame(animate);
        } else {
          setDisplayValue(value);
          setHasAnimated(true);
        }
      };
      requestAnimationFrame(animate);
    }, delay);

    return () => clearTimeout(timer);
  }, [value, delay]);

  return (
    <span aria-label={value} role="text">
      {hasAnimated ? value : displayValue}
    </span>
  );
};

// ===== AURORA BACKGROUND =====
const AuroraBackground = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
    {/* Base dark gradient */}
    <div className="absolute inset-0 bg-gradient-to-b from-brand-dark/95 via-brand-dark to-brand-dark" />

    {/* Aurora orbs — streamlined to 2 for performance */}
    <div className="absolute top-[-20%] left-[-10%] w-[60vw] h-[60vw] max-w-[700px] max-h-[700px] rounded-full bg-brand-secondary/[0.06] blur-[120px] animate-aurora-1" />
    <div className="absolute top-[10%] right-[-15%] w-[50vw] h-[50vw] max-w-[600px] max-h-[600px] rounded-full bg-brand-accent/[0.07] blur-[100px] animate-aurora-2" />

    {/* Subtle grid */}
    <div className="absolute inset-0 opacity-[0.025]" style={{
      backgroundImage: `linear-gradient(rgba(4,228,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(4,228,255,0.3) 1px, transparent 1px)`,
      backgroundSize: "60px 60px",
    }} />

    {/* Radial spotlight */}
    <div className="absolute top-[10%] left-1/2 -translate-x-1/2 w-[80vw] h-[50vh] bg-[radial-gradient(ellipse,_rgba(4,228,255,0.06)_0%,_transparent_70%)]" />

    {/* Bottom fade */}
    <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-brand-dark to-transparent" />
  </div>
);

// ===== SCROLL INDICATOR =====
const ScrollIndicator = ({ label }: { label: string }) => (
  <motion.div
    className="hidden md:flex absolute bottom-8 left-1/2 -translate-x-1/2 flex-col items-center gap-2 z-20"
    initial={{ opacity: 0, y: -10 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 2, duration: 0.6 }}
    aria-hidden="true"
  >
    <span className="text-xs tracking-[0.2em] uppercase text-brand-white/40 font-medium">{label}</span>
    <motion.div
      animate={{ y: [0, 8, 0] }}
      transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
    >
      <ChevronDown size={18} className="text-brand-white/30" />
    </motion.div>
  </motion.div>
);

// ===== SERVICE ICON COMPONENTS =====
const ServiceIcon = ({ serviceKey }: { serviceKey: string }) => {
  const icons: Record<string, React.ReactNode> = {
    contentCreation: (
      <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="m22 8-6 4 6 4V8Z" /><rect width="14" height="12" x="2" y="6" rx="2" ry="2" />
      </svg>
    ),
    socialMedia: (
      <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" />
      </svg>
    ),
    webDev: (
      <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" />
      </svg>
    ),
    paidAds: (
      <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="m22 2-7 20-4-9-9-4Z" /><path d="M22 2 11 13" />
      </svg>
    ),
    videoProd: (
      <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" /><polygon points="10 8 16 12 10 16 10 8" />
      </svg>
    ),
    brandStrategy: (
      <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2 2 7l10 5 10-5-10-5Z" /><path d="m2 17 10 5 10-5" /><path d="m2 12 10 5 10-5" />
      </svg>
    ),
  };

  return <>{icons[serviceKey] || null}</>;
};

// ===== MAIN HERO SECTION =====
const HeroSection = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const { t, isRTL } = useLanguage();
  const { scrollY } = useScroll();
  const heroOpacity = useTransform(scrollY, [0, 600], [1, 0]);
  const heroScale = useTransform(scrollY, [0, 600], [1, 0.97]);
  const heroY = useTransform(scrollY, [0, 600], [0, 80]);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const stagger = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.25 },
    },
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 24, filter: "blur(4px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 0.65, ease: [0.25, 0.46, 0.45, 0.94] as const },
    },
  };

  const serviceKeys = [
    "contentCreation",
    "socialMedia",
    "webDev",
    "paidAds",
    "videoProd",
    "brandStrategy",
  ] as const;

  const services = serviceKeys.map((key) => ({
    key,
    label: t(`hero.services.${key}`),
  }));

  const stats = [
    { value: "100M+", label: t("hero.stats.viewsGenerated") },
    { value: "500+", label: t("hero.stats.projectsDelivered") },
    { value: "98%", label: t("hero.stats.clientSatisfaction") },
    { value: "24/7", label: t("hero.stats.dedicatedSupport") },
  ];

  return (
    <section
      className="relative min-h-screen text-brand-white overflow-hidden"
      aria-label={t("hero.badge")}
    >
      <AuroraBackground />

      {/* Parallax wrapper */}
      <motion.div
        style={{ opacity: heroOpacity, scale: heroScale, y: heroY }}
        className="relative z-10"
      >
        <div className={`${commonStyles.container} relative z-10 pt-32 md:pt-36 lg:pt-40 pb-24 md:pb-32`}>
          <div className={`grid lg:grid-cols-12 gap-10 lg:gap-16 items-center min-h-[calc(100vh-14rem)] ${isRTL ? "direction-rtl" : ""}`}>

            {/* ===== LEFT COLUMN ===== */}
            <motion.div
              className={`lg:col-span-7 flex flex-col justify-center ${isRTL ? "text-right" : "text-left"}`}
              variants={stagger}
              initial="hidden"
              animate={isLoaded ? "visible" : "hidden"}
            >
              {/* Badge */}
              <motion.div variants={fadeUp} className="mb-6">
                <div className={`inline-flex items-center gap-2.5 bg-brand-white/[0.04] backdrop-blur-xl border border-brand-white/[0.08] rounded-full px-5 py-2.5 ${isRTL ? "flex-row-reverse" : ""}`}>
                  <motion.div
                    className="w-2 h-2 rounded-full bg-brand-secondary"
                    animate={{ scale: [1, 1.4, 1], opacity: [0.7, 1, 0.7] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  />
                  <span className="text-sm font-medium text-brand-white/80 tracking-wide">
                    {t("hero.badge")}
                  </span>
                </div>
              </motion.div>

              {/* Headline */}
              <motion.h1
                variants={fadeUp}
                className="heading-display text-[clamp(2.5rem,5.5vw,5rem)] leading-[1.08] mb-6 tracking-tight"
              >
                <span className="text-brand-white">{t("hero.title1")}</span>
                <br />
                <span className="relative inline-block">
                  <span className="bg-gradient-to-r from-brand-secondary via-brand-primary to-brand-accent bg-clip-text text-transparent">
                    {t("hero.title2")}
                  </span>
                  <motion.div
                    className="absolute -bottom-1 inset-x-0 h-[3px] bg-gradient-to-r from-brand-secondary to-brand-accent rounded-full"
                    initial={{ scaleX: 0, originX: isRTL ? 1 : 0 }}
                    animate={isLoaded ? { scaleX: 1 } : { scaleX: 0 }}
                    transition={{ delay: 1.1, duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
                  />
                </span>
              </motion.h1>

              {/* Subtitle */}
              <motion.p
                variants={fadeUp}
                className="body-professional text-lg md:text-xl text-brand-white/55 max-w-xl mb-10 leading-relaxed"
              >
                {t("hero.subtitle")}
              </motion.p>

              {/* CTA Row */}
              <motion.div
                variants={fadeUp}
                className={`flex flex-col sm:flex-row items-start gap-4 mb-12 ${isRTL ? "sm:flex-row-reverse sm:items-end" : ""}`}
              >
                {/* Primary CTA */}
                <motion.a
                  href="https://wa.me/97459990137?text=Hi! I'd like to discuss a project with Onzur."
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={t("hero.cta1")}
                  className="group relative inline-flex items-center gap-3 bg-gradient-to-r from-brand-secondary to-brand-primary text-brand-dark px-8 py-4 rounded-full font-poppins font-bold text-base overflow-hidden shadow-lg shadow-brand-secondary/20"
                  whileHover={{ scale: 1.03, boxShadow: "0 12px 40px rgba(4,228,255,0.25)" }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className={`relative z-10 flex items-center gap-2 ${isRTL ? "flex-row-reverse" : ""}`}>
                    {t("hero.cta1")}
                    <ArrowRight
                      size={18}
                      className={`transition-transform ${isRTL ? "rotate-180 group-hover:-translate-x-1" : "group-hover:translate-x-1"}`}
                    />
                  </span>
                  <motion.div
                    className="absolute inset-0 bg-brand-white/20"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "100%" }}
                    transition={{ duration: 0.5 }}
                  />
                </motion.a>

                {/* Secondary CTA */}
                <motion.a
                  href="#portfolio"
                  aria-label={t("hero.cta2")}
                  className={`group inline-flex items-center gap-2.5 text-brand-white/70 hover:text-brand-white px-6 py-4 rounded-full font-medium text-base transition-colors ${isRTL ? "flex-row-reverse" : ""}`}
                  whileHover={{ x: isRTL ? -3 : 3 }}
                >
                  <div className="w-10 h-10 rounded-full border border-brand-white/20 flex items-center justify-center group-hover:border-brand-secondary/50 group-hover:bg-brand-secondary/5 transition-all">
                    <Play
                      size={14}
                      className={`text-brand-white/60 group-hover:text-brand-secondary transition-colors ${isRTL ? "me-0.5" : "ms-0.5"}`}
                    />
                  </div>
                  {t("hero.cta2")}
                </motion.a>
              </motion.div>

              {/* Contact Quick Links */}
              <motion.div
                variants={fadeUp}
                className={`flex flex-wrap items-center gap-6 ${isRTL ? "flex-row-reverse" : ""}`}
              >
                <a
                  href="tel:+97459990137"
                  aria-label={`${t("hero.callUs")} +974 5999 0137`}
                  className={`group flex items-center gap-3 text-brand-white/50 hover:text-brand-white transition-colors ${isRTL ? "flex-row-reverse" : ""}`}
                >
                  <div className="w-9 h-9 rounded-lg bg-brand-secondary/10 border border-brand-secondary/20 flex items-center justify-center group-hover:bg-brand-secondary/20 transition-all">
                    <Phone size={15} className="text-brand-secondary" />
                  </div>
                  <div className={isRTL ? "text-right" : ""}>
                    <div className="text-xs text-brand-white/40 leading-none mb-0.5">{t("hero.callUs")}</div>
                    <div className="text-sm font-semibold" dir="ltr">+974 5999 0137</div>
                  </div>
                </a>

                <div className="w-px h-8 bg-brand-white/10" aria-hidden="true" />

                <a
                  href="https://wa.me/97477507972?text=Hello! I'm interested in your services."
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${t("hero.whatsappUs")} +974 7750 7972`}
                  className={`group flex items-center gap-3 text-brand-white/50 hover:text-brand-white transition-colors ${isRTL ? "flex-row-reverse" : ""}`}
                >
                  <div className="w-9 h-9 rounded-lg bg-brand-accent/10 border border-brand-accent/20 flex items-center justify-center group-hover:bg-brand-accent/20 transition-all">
                    <MessageCircle size={15} className="text-brand-accent" />
                  </div>
                  <div className={isRTL ? "text-right" : ""}>
                    <div className="text-xs text-brand-white/40 leading-none mb-0.5">{t("hero.whatsappUs")}</div>
                    <div className="text-sm font-semibold" dir="ltr">+974 7750 7972</div>
                  </div>
                </a>
              </motion.div>
            </motion.div>

            {/* ===== RIGHT COLUMN — Unified Dashboard Card ===== */}
            <motion.div
              className="lg:col-span-5 flex flex-col items-center justify-center"
              initial={{ opacity: 0, y: 30 }}
              animate={isLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ delay: 0.5, duration: 0.7, ease: "easeOut" }}
            >
              <div className="relative w-full max-w-sm lg:max-w-md">
                {/* Glow behind card */}
                <div
                  className="absolute -inset-4 bg-gradient-to-br from-brand-secondary/10 via-transparent to-brand-accent/10 rounded-3xl blur-2xl opacity-60"
                  aria-hidden="true"
                />

                {/* Glass card */}
                <div className="relative bg-brand-white/[0.03] backdrop-blur-md border border-brand-white/[0.08] rounded-2xl p-6 md:p-8">
                  {/* Stats 2×2 Grid */}
                  <div className="grid grid-cols-2 gap-3 mb-6">
                    {stats.map((stat, index) => (
                      <motion.div
                        key={index}
                        className="group text-center"
                        initial={{ opacity: 0, y: 16 }}
                        animate={isLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
                        transition={{ delay: 0.7 + index * 0.1, duration: 0.5 }}
                        whileHover={{ y: -2, transition: { duration: 0.2 } }}
                      >
                        <div className="bg-brand-white/[0.03] border border-brand-white/[0.06] rounded-xl p-4 group-hover:border-brand-secondary/20 transition-all duration-300">
                          <div className="text-2xl md:text-3xl font-black heading-display bg-gradient-to-br from-brand-secondary to-brand-accent bg-clip-text text-transparent mb-1">
                            <AnimatedCounter value={stat.value} delay={900 + index * 150} />
                          </div>
                          <div className="text-[0.65rem] md:text-xs text-brand-white/40 font-medium tracking-wider uppercase leading-tight">
                            {stat.label}
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  {/* Divider */}
                  <div className="h-px bg-gradient-to-r from-transparent via-brand-white/10 to-transparent mb-5" aria-hidden="true" />

                  {/* Services list */}
                  <div className="space-y-1.5">
                    {services.map((service, i) => (
                      <motion.div
                        key={service.key}
                        className={`flex items-center gap-3 text-brand-white/50 hover:text-brand-white/80 transition-colors py-1.5 px-2 rounded-lg hover:bg-brand-white/[0.03] ${isRTL ? "flex-row-reverse text-right" : ""}`}
                        initial={{ opacity: 0, x: isRTL ? -16 : 16 }}
                        animate={isLoaded ? { opacity: 1, x: 0 } : { opacity: 0, x: isRTL ? -16 : 16 }}
                        transition={{ delay: 1.1 + i * 0.07, duration: 0.4 }}
                      >
                        <div className="w-7 h-7 rounded-lg bg-brand-secondary/10 border border-brand-secondary/10 flex items-center justify-center flex-shrink-0 text-brand-secondary/70">
                          <ServiceIcon serviceKey={service.key} />
                        </div>
                        <span className="text-sm font-medium">{service.label}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        <ScrollIndicator label={t("hero.scroll")} />
      </motion.div>

      {/* Client Logos Marquee */}
      <div className="relative z-20">
        <ClientMarquee clientLogos={clientLogos} />
      </div>
    </section>
  );
};

export default HeroSection;
