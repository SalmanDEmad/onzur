"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "motion/react";
import { commonStyles } from "../lib/design-system";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();
  const backgroundOpacity = useTransform(scrollY, [0, 100], [0.95, 1]);
  const backdropBlur = useTransform(scrollY, [0, 100], [0, 20]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const navLinks = [
    { href: "#services", label: "Services", isAnchor: true },
    { href: "#team", label: "Team", isAnchor: true },
    { href: "#case-studies", label: "Case Studies", isAnchor: true },
    { href: "#portfolio", label: "Portfolio", isAnchor: true },
    { href: "#testimonials", label: "Testimonials", isAnchor: true },
  ];

  const handleSmoothScroll = (e, href) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      const targetId = href.slice(1);
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        const navbarHeight = 98; // Account for fixed navbar + padding
        const targetPosition = targetElement.offsetTop - navbarHeight;
        window.scrollTo({
          top: targetPosition,
          behavior: "smooth",
        });
      }
      if (isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    }
  };

  const navVariants = {
    hidden: { opacity: 0, y: -100 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const linkVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.3,
      },
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 px-4 pt-4"
      initial="hidden"
      animate="visible"
      variants={navVariants}
    >
      <motion.div
        className={`transition-all duration-300 rounded-2xl mx-auto max-w-7xl ${
          isScrolled
            ? "bg-[#00042A]/95 backdrop-blur-md shadow-2xl border border-[#04E4FF]/20"
            : "bg-[#00042A]/90 backdrop-blur-sm shadow-lg"
        }`}
        style={{
          backdropFilter: `blur(${backdropBlur}px)`,
          backgroundColor: isScrolled
            ? `rgba(0, 4, 42, 0.95)`
            : `rgba(0, 4, 42, 0.9)`,
        }}
      >
        <div className="px-6 flex items-center justify-between h-[82px]">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Link href="/" className="flex items-center">
              <div className="relative text-white text-xl md:text-2xl font-poppins font-bold tracking-tight">
                <motion.span
                  className="text-[#04E4FF]"
                  whileHover={{
                    color: "#00B9FF",
                  }}
                >
                  Onzur
                </motion.span>
                <span className="text-white ml-2 font-medium">Media Studio</span>
              </div>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <motion.nav
            className="hidden lg:flex items-center space-x-6 xl:space-x-8"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            {navLinks.map((link) => (
              <motion.a
                key={link.href}
                href={link.href}
                onClick={(e) => handleSmoothScroll(e, link.href)}
                className="relative text-white hover:text-[#04E4FF] transition-colors text-base lg:text-lg font-source-sans font-medium cursor-pointer group tracking-wide"
                variants={linkVariants}
                whileHover={{ y: -2 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {link.label}
                <motion.div
                  className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#00B9FF] to-[#04E4FF] group-hover:w-full transition-all duration-300"
                  whileHover={{ scaleX: 1 }}
                  initial={{ scaleX: 0 }}
                />
              </motion.a>
            ))}
          </motion.nav>

          {/* Right side: CTA and Mobile Menu Button */}
          <div className="flex items-center">
            <motion.a
              href="#contact"
              onClick={(e) => handleSmoothScroll(e, "#contact")}
              className="hidden sm:inline-block bg-gradient-to-r from-[#00B9FF] to-[#04E4FF] text-white px-6 py-2 rounded-full font-poppins font-semibold text-sm mr-6 cursor-pointer hover:scale-105 transition-all duration-300 tracking-wide"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 5px 15px rgba(4, 228, 255, 0.3)",
              }}
              whileTap={{ scale: 0.98 }}
            >
              Contact Us
            </motion.a>

            {/* Mobile Menu Button */}
            <motion.button
              onClick={toggleMobileMenu}
              className="lg:hidden text-white focus:outline-none relative w-[26px] h-[21px] flex flex-col justify-between items-end"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <motion.span
                className="block w-full h-[3px] bg-white rounded-full"
                animate={{
                  rotate: isMobileMenuOpen ? 45 : 0,
                  y: isMobileMenuOpen ? 9 : 0,
                }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              />
              <motion.span
                className="block w-[18px] h-[3px] bg-white rounded-full"
                animate={{
                  opacity: isMobileMenuOpen ? 0 : 1,
                }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              />
              <motion.span
                className="block w-full h-[3px] bg-white rounded-full"
                animate={{
                  rotate: isMobileMenuOpen ? -45 : 0,
                  y: isMobileMenuOpen ? -9 : 0,
                }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              />
            </motion.button>
          </div>
        </div>
      </motion.div>

      {/* Mobile Menu Drawer */}
      <motion.div
        className="lg:hidden fixed inset-0 bg-[#00042A]/95 backdrop-blur-md z-40 pt-[98px]"
        initial={{ opacity: 0, x: "100%" }}
        animate={{
          opacity: isMobileMenuOpen ? 1 : 0,
          x: isMobileMenuOpen ? "0%" : "100%",
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        style={{ pointerEvents: isMobileMenuOpen ? "auto" : "none" }}
      >
        <motion.nav
          className="flex flex-col items-center space-y-6 py-8"
          variants={staggerContainer}
          initial="hidden"
          animate={isMobileMenuOpen ? "visible" : "hidden"}
        >
          {navLinks.map((link) => (
            <motion.a
              key={link.href}
              href={link.href}
              onClick={(e) => handleSmoothScroll(e, link.href)}
              className="text-white hover:text-[#04E4FF] transition-colors text-2xl font-source-sans font-medium cursor-pointer tracking-wide"
              variants={linkVariants}
              whileHover={{ scale: 1.1, x: 10 }}
              whileTap={{ scale: 0.95 }}
            >
              {link.label}
            </motion.a>
          ))}
          <motion.a
            href="#contact"
            onClick={(e) => handleSmoothScroll(e, "#contact")}
            className="bg-gradient-to-r from-[#00B9FF] to-[#04E4FF] text-white px-8 py-3 rounded-full font-poppins font-semibold text-xl mt-8 cursor-pointer hover:scale-105 transition-all duration-300 tracking-wide"
            variants={linkVariants}
            whileHover={{
              scale: 1.05,
              boxShadow: "0 10px 25px rgba(4, 228, 255, 0.3)",
            }}
            whileTap={{ scale: 0.98 }}
          >
            Contact Us
          </motion.a>
        </motion.nav>
      </motion.div>
    </motion.header>
  );
};

export default Navbar;
