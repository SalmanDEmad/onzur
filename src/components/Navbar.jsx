"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { commonStyles } from "../lib/design-system";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const navLinks = [
    { href: "#services", label: "Services", isAnchor: true },
    { href: "#team", label: "Our Team", isAnchor: true },
    { href: "#portfolio", label: "Portfolio", isAnchor: true },
    { href: "#testimonials", label: "Testimonials", isAnchor: true },
    { href: "#contact", label: "Contact", isAnchor: true },
  ];

  const handleSmoothScroll = (e, href) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      const targetId = href.slice(1);
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        const navbarHeight = 82; // Account for fixed navbar
        const targetPosition = targetElement.offsetTop - navbarHeight;
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
      if (isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    }
  };

  return (
    <header className="bg-gradient-to-b from-black/50 to-transparent fixed top-0 left-0 right-0 z-50">
      <div className="bg-[#132761]/95 border-b border-white/20">
        <div className="container mx-auto px-4 max-w-7xl flex items-center justify-between h-[82px]">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <div className="relative text-white text-xl md:text-2xl font-bold">
              <span className={commonStyles.gradientText}>Onzur</span>
              <span className="text-white ml-2">Media Studio</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleSmoothScroll(e, link.href)}
                className="text-white hover:text-[#04E4FF] transition-colors text-lg font-medium cursor-pointer"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right side: CTA and Mobile Menu Button */}
          <div className="flex items-center">
            <a
              href="#contact"
              onClick={(e) => handleSmoothScroll(e, '#contact')}
              className={`hidden sm:inline-block ${commonStyles.buttonSecondary} text-sm mr-6 cursor-pointer`}
            >
              Get Started
            </a>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMobileMenu}
              className="lg:hidden text-white focus:outline-none relative w-[26px] h-[21px] flex flex-col justify-between items-end"
            >
              <span
                className={`block w-full h-[3px] bg-white rounded-full transition-transform duration-300 ease-in-out ${
                  isMobileMenuOpen ? "rotate-45 translate-y-[9px]" : ""
                }`}
              ></span>
              <span
                className={`block w-[18px] h-[3px] bg-white rounded-full transition-opacity duration-300 ease-in-out ${
                  isMobileMenuOpen ? "opacity-0" : ""
                }`}
              ></span>
              <span
                className={`block w-full h-[3px] bg-white rounded-full transition-transform duration-300 ease-in-out ${
                  isMobileMenuOpen ? "-rotate-45 -translate-y-[9px]" : ""
                }`}
              ></span>
              <span className="absolute -right-[10px] -top-[2px] text-[18px] font-bold uppercase tracking-[6%] hidden">
                Menu
              </span>
            </button>
            <p className="hidden lg:block text-white text-lg font-bold uppercase tracking-wider ml-4">
              Menu
            </p>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 bg-[#132761]/95 backdrop-blur-md z-40 pt-[82px]">
          <nav className="flex flex-col items-center space-y-6 py-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleSmoothScroll(e, link.href)}
                className="text-white hover:text-[#04E4FF] transition-colors text-2xl font-medium cursor-pointer"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={(e) => handleSmoothScroll(e, '#contact')}
              className={`${commonStyles.buttonPrimary} text-xl mt-8 cursor-pointer`}
            >
              Get Started
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
