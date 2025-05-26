"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const navLinks = [
    { href: "/services", label: "Services" },
    { href: "/our-work", label: "Our Work" },
    { href: "/about-us", label: "About Us" },
    { href: "/blog", label: "Blog" },
    { href: "/contact-us", label: "Contact Us" },
  ];

  return (
    <header className="bg-gradient-to-b from-black/50 to-transparent fixed top-0 left-0 right-0 z-50">
      <div className="bg-[#132761]/95 border-b border-white/20">
        <div className="container mx-auto px-4 max-w-7xl flex items-center justify-between h-[82px]">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <div className="relative w-[230px] h-[31px] md:w-[250px] md:h-[40px]">
              <Image
                src="/assets/images/digital-silk-logo-main.svg"
                alt="Digital Silk Logo Main"
                fill
                style={{ objectFit: "contain" }}
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-white hover:text-gray-300 transition-colors text-lg font-medium"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Right side: CTA and Mobile Menu Button */}
          <div className="flex items-center">
            <Link
              href="/request-a-quote"
              className="hidden sm:inline-block bg-white/10 text-white text-sm font-medium uppercase py-3 px-7 rounded-md border border-white hover:bg-white/20 transition-colors mr-6"
            >
              Request a Quote
            </Link>

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
              <Link
                key={link.href}
                href={link.href}
                className="text-white hover:text-gray-300 transition-colors text-2xl font-medium"
                onClick={toggleMobileMenu}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/request-a-quote"
              className="bg-white/10 text-white text-xl font-medium uppercase py-4 px-10 rounded-md border border-white hover:bg-white/20 transition-colors mt-8"
              onClick={toggleMobileMenu}
            >
              Request a Quote
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
