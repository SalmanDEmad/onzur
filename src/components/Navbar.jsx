"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, useScroll, useTransform } from "motion/react";
import { commonStyles } from "../lib/design-system";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
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

  const isActiveLink = (href) => {
    if (href === "/" && pathname === "/") return true;
    if (href !== "/" && pathname.startsWith(href)) return true;
    return false;
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const navLinks = [
    { href: "/services", label: "Services", isAnchor: false },
    { href: "/team", label: "Team", isAnchor: false },
    { href: "/case-studies", label: "Case Studies", isAnchor: false },
    { href: "/portfolio", label: "Portfolio", isAnchor: false },
    { href: "/testimonials", label: "Testimonials", isAnchor: false },
  ];

  const handleSmoothScroll = (e, href, isAnchor) => {
    if (isAnchor && href.startsWith("#")) {
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
    } else if (!isAnchor) {
      // For non-anchor links, close mobile menu and let Next.js handle the routing
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
        className={`relative transition-all duration-300 rounded-2xl mx-auto max-w-7xl ${
          isScrolled
            ? "bg-[#00042A]/70 backdrop-blur-md shadow-2xl border border-[#04E4FF]/10"
            : "bg-[#00042A]/60 backdrop-blur-sm shadow-lg"
        }`}
        style={{
          backdropFilter: `blur(${backdropBlur}px)`,
          backgroundColor: isScrolled
            ? `rgba(0, 4, 42, 0.7)`
            : `rgba(0, 4, 42, 0.6)`,
          zIndex: 60,
        }}
      >
        <div className="px-6 flex items-center justify-between h-[82px]">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Link href="/" className="flex items-center">
              <Image
                src="/assets/images/onzur-logo-white.svg"
                alt="Onzur Media Studio Logo"
                width={220}
                height={55}
                className="h-10 md:h-12 w-auto"
                priority
              />
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
              <motion.div key={link.href} variants={linkVariants}>
                {link.isAnchor ? (
                  <motion.a
                    href={link.href}
                    onClick={(e) => handleSmoothScroll(e, link.href, link.isAnchor)}
                    className="relative text-white hover:text-[#04E4FF] transition-colors text-base lg:text-lg font-source-sans font-medium cursor-pointer group tracking-wide"
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
                ) : (
                  <Link
                    href={link.href}
                    onClick={(e) => handleSmoothScroll(e, link.href, link.isAnchor)}
                    className={`relative transition-colors text-base lg:text-lg font-source-sans font-medium cursor-pointer group tracking-wide ${
                      isActiveLink(link.href) 
                        ? "text-[#04E4FF]" 
                        : "text-white hover:text-[#04E4FF]"
                    }`}
                  >
                    <motion.span
                      whileHover={{ y: -2 }}
                      transition={{ type: "spring", stiffness: 300 }}
                      className="block"
                    >
                      {link.label}
                      <motion.div
                        className={`absolute bottom-0 left-0 bg-gradient-to-r from-[#00B9FF] to-[#04E4FF] transition-all duration-300 ${
                          isActiveLink(link.href) 
                            ? "w-full h-[2px] shadow-lg shadow-[#04E4FF]/50" 
                            : "w-0 h-0.5 group-hover:w-full"
                        }`}
                        whileHover={{ scaleX: 1 }}
                        initial={{ scaleX: isActiveLink(link.href) ? 1 : 0 }}
                        animate={{ 
                          scaleX: isActiveLink(link.href) ? 1 : 0,
                          height: isActiveLink(link.href) ? "2px" : "2px"
                        }}
                      />
                    </motion.span>
                  </Link>
                )}
              </motion.div>
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
              className="lg:hidden text-white focus:outline-none relative w-[26px] h-[21px] flex flex-col justify-between items-end z-[70]"
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
        className="lg:hidden fixed inset-0 bg-[#00042A]/70 backdrop-blur-md z-[45] pt-[98px]"
        initial={{ opacity: 0, x: "100%" }}
        animate={{
          opacity: isMobileMenuOpen ? 1 : 0,
          x: isMobileMenuOpen ? "0%" : "100%",
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        style={{ pointerEvents: isMobileMenuOpen ? "auto" : "none" }}
        onClick={() => setIsMobileMenuOpen(false)}
      >
        <motion.nav
          className="flex flex-col items-center space-y-6 py-8"
          variants={staggerContainer}
          initial="hidden"
          animate={isMobileMenuOpen ? "visible" : "hidden"}
          onClick={(e) => e.stopPropagation()}
        >
          {navLinks.map((link) => (
            <motion.div key={link.href} variants={linkVariants}>
              {link.isAnchor ? (
                <motion.a
                  href={link.href}
                  onClick={(e) => handleSmoothScroll(e, link.href, link.isAnchor)}
                  className="text-white hover:text-[#04E4FF] transition-colors text-2xl font-source-sans font-medium cursor-pointer tracking-wide"
                  whileHover={{ scale: 1.1, x: 10 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {link.label}
                </motion.a>
              ) : (
                <Link
                  href={link.href}
                  onClick={(e) => handleSmoothScroll(e, link.href, link.isAnchor)}
                  className={`relative transition-colors text-2xl font-source-sans font-medium cursor-pointer tracking-wide ${
                    isActiveLink(link.href) 
                      ? "text-[#04E4FF]" 
                      : "text-white hover:text-[#04E4FF]"
                  }`}
                >
                  <motion.span
                    whileHover={{ scale: 1.1, x: 10 }}
                    whileTap={{ scale: 0.95 }}
                    className="block relative"
                  >
                    {link.label}
                    {isActiveLink(link.href) && (
                      <motion.div
                        className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-[#00B9FF] to-[#04E4FF] shadow-lg shadow-[#04E4FF]/50"
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ duration: 0.3 }}
                      />
                    )}
                  </motion.span>
                </Link>
              )}
            </motion.div>
          ))}
          <motion.a
            href="#contact"
            onClick={(e) => handleSmoothScroll(e, "#contact", true)}
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
