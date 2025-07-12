"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "motion/react";
import { commonStyles } from "../lib/design-system";

const footerLinks = [
  {
    title: "Our Services",
    links: [
      { href: "/services/video-production", text: "Video Production" },
      { href: "/services/content-creation", text: "Content Creation" },
      { href: "/services/social-media-management", text: "Social Media Management" },
      { href: "/services/ppc-marketing", text: "PPC Marketing" },
      { href: "/services/web-development", text: "Web Development" },
    ],
  },
  {
    title: "Portfolio",
    links: [
      { href: "/portfolio/islamic-scholars", text: "Islamic Scholars" },
      { href: "/portfolio/spice-fusion", text: "Spice Fusion" },
      { href: "/portfolio/megabyte-store", text: "Megabyte Store" },
      { href: "https://daanishrayn.my.canva.site/portfolio-web", text: "Daanish Portfolio" },
      { href: "https://vt.tiktok.com/ZShBBeJnj/", text: "Ayham Portfolio" },
    ],
  },
  {
    title: "Collaborations",
    links: [
      { href: "https://www.instagram.com/sharia_qusrb", text: "Qatar University" },
      { href: "https://www.instagram.com/qsn.mazad", text: "QSN Mazad" },
      { href: "https://mgbyt.com", text: "Megabyte Store" },
      { href: "https://www.tiktok.com/@mgbytcom", text: "Megabyte TikTok" },
    ],
  },
  {
    title: "Company",
    links: [
      { href: "/about", text: "About Us" },
      { href: "/team", text: "Our Team" },
      { href: "/case-studies", text: "Case Studies" },
      { href: "/contact", text: "Contact Us" },
    ],
  },
];

const contactInfo = [
  {
    type: "location",
    label: "Based in Qatar",
    info: "Doha, Qatar",
  },
  {
    type: "phone",
    label: "Phone (Calls)",
    info: "+974 5999 0137",
  },
  {
    type: "whatsapp",
    label: "WhatsApp",
    info: "+974 7750 7972",
  },
];

const Footer = () => {
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.6, 
        ease: "easeOut" 
      } 
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const linkVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { 
        duration: 0.4
      }
    }
  };

  return (
    <footer className={`${commonStyles.gradientPrimary} text-white pt-16 pb-8`}>
      <div className={commonStyles.container}>
        <motion.div 
          className="mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={sectionVariants}
        >
          <motion.h2 
            className={`${commonStyles.heading1} mb-12 max-w-2xl`}
            variants={sectionVariants}
          >
            Let's Create Your Story
          </motion.h2>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
        >
          {footerLinks.map((section, sectionIndex) => (
            <motion.div 
              key={section.title} 
              className="relative pl-8"
              variants={sectionVariants}
              whileHover={{ x: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <motion.div 
                className="absolute left-0 top-0 h-5 w-0.5 bg-gradient-to-b from-[#A4DCFF] to-[#30AFFF]"
                initial={{ scaleY: 0 }}
                whileInView={{ scaleY: 1 }}
                viewport={{ once: true }}
                transition={{ delay: sectionIndex * 0.1 + 0.3, duration: 0.6 }}
              />
              <motion.h5 
                className="text-xl font-bold mb-5"
                variants={sectionVariants}
              >
                {section.title}
              </motion.h5>
              <motion.ul 
                className="space-y-3"
                variants={staggerContainer}
              >
                {section.links.map((link) => (
                  <motion.li 
                    key={link.text}
                    variants={linkVariants}
                  >
                    <Link
                      href={link.href}
                      className="text-base font-light hover:opacity-80 transition-all duration-300 leading-relaxed hover:text-[#A4DCFF] hover:translate-x-1 inline-block"
                    >
                      {link.text}
                    </Link>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="border-t border-[#30AFFF] pt-12 mb-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={sectionVariants}
        >
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-3 gap-8 items-start"
            variants={staggerContainer}
          >
            {contactInfo.map((contact, index) => (
              <motion.div 
                key={index} 
                className="text-center"
                variants={sectionVariants}
                whileHover={{ 
                  scale: 1.05,
                  y: -5
                }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <h3 className="font-bold text-lg mb-2">{contact.label}</h3>
                <p className="text-base">
                  {contact.type === 'phone' || contact.type === 'whatsapp' ? (
                    <a 
                      href={`tel:${contact.info}`} 
                      className="hover:opacity-80 transition-all duration-300 hover:text-[#A4DCFF]"
                    >
                      {contact.info}
                    </a>
                  ) : (
                    contact.info
                  )}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div 
          className="flex flex-col md:flex-row items-center justify-between border-t border-[#30AFFF] pt-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <motion.div 
            className="mb-6 md:mb-0"
            variants={sectionVariants}
          >
            <Link
              href="/"
              className="flex items-center hover:opacity-80 transition-all duration-300 hover:scale-105"
            >
              <span className="text-2xl font-bold bg-gradient-to-r from-white to-[#A4DCFF] bg-clip-text text-transparent">
                Onzur Media Studio
              </span>
            </Link>
          </motion.div>

          <motion.div 
            className="text-sm text-center md:text-left mb-4 md:mb-0"
            variants={sectionVariants}
          >
            &copy;{new Date().getFullYear()} Onzur Media Studio. All rights reserved
          </motion.div>

          <motion.div 
            className="flex items-center space-x-4 text-sm"
            variants={staggerContainer}
          >
            <motion.div variants={linkVariants}>
              <Link
                href="/privacy-policy"
                className="hover:opacity-80 transition-all duration-300 hover:text-[#A4DCFF]"
              >
                Privacy Policy
              </Link>
            </motion.div>
            <motion.div variants={linkVariants}>
              <Link
                href="/accessibility"
                className="hover:opacity-80 transition-all duration-300 hover:text-[#A4DCFF]"
              >
                Accessibility
              </Link>
            </motion.div>
            <motion.div variants={linkVariants}>
              <a
                href="tel:+97459990137"
                className="hover:opacity-80 transition-all duration-300 hover:text-[#A4DCFF]"
              >
                Call us at +974 5999 0137
              </a>
            </motion.div>
          </motion.div>
          <motion.div 
            className="hidden md:flex flex-col space-y-1.5 items-end"
            variants={sectionVariants}
          >
            <motion.div 
              className="w-6 h-0.5 bg-white"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.4 }}
            />
            <motion.div 
              className="w-4 h-0.5 bg-white"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7, duration: 0.4 }}
            />
            <motion.div 
              className="w-6 h-0.5 bg-white"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.9, duration: 0.4 }}
            />
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
