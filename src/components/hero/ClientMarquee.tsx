"use client";

import { motion } from "motion/react";
import OptimizedImage from "../OptimizedImage";
import { useLanguage } from "../../contexts/LanguageContext";

/**
 * Client Logos Marquee Component
 * Displays a continuously scrolling row of client/partner logos.
 */
export const ClientMarquee = ({ clientLogos }: { clientLogos: { src: string; alt: string }[] }) => {
  const { t } = useLanguage();
  const duplicatedLogos = [...clientLogos, ...clientLogos];

  return (
    <div className="relative w-full bg-brand-dark overflow-hidden border-t border-brand-white/[0.04]">
      {/* Label */}
      <motion.div
        className="text-center pt-8 pb-4"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <span className="text-xs tracking-[0.25em] uppercase text-brand-white/25 font-medium">
          {t("hero.trustedBy")}
        </span>
      </motion.div>

      {/* Marquee */}
      <div className="relative h-[70px] flex items-center overflow-hidden">
        {/* Edge fades */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-brand-dark to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-brand-dark to-transparent z-10 pointer-events-none" />

        <div className="animate-marquee-infinite flex items-center">
          {duplicatedLogos.map((logo, index) => (
            <div
              key={`logo-${index}`}
              className="mx-10 md:mx-14 flex-shrink-0 h-[45px] flex items-center justify-center opacity-30 hover:opacity-60 transition-opacity duration-300"
            >
              <OptimizedImage
                src={logo.src}
                alt={logo.alt}
                height={
                  logo.alt === "NFL" ||
                  logo.alt === "McDonald's" ||
                  logo.alt === "G2"
                    ? 45
                    : 22
                }
                width={
                  logo.alt === "NFL"
                    ? 36
                    : logo.alt === "Enchant" || logo.alt === "Bru"
                    ? 110
                    : 90
                }
                objectFit="contain"
                priority={index < 6}
                quality={70}
                blurDataURL={undefined}
                onClick={undefined}
              />
            </div>
          ))}
        </div>
      </div>

      <div className="pb-6" />
    </div>
  );
};
