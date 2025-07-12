"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { commonStyles } from "../lib/design-system";
import { ChevronLeft, ChevronRight, Star, ArrowRight } from "lucide-react";

const testimonials = [
  {
    logo: "/assets/images/spice-fusion-logo.svg",
    company: "Spice Fusion Restaurant",
    name: "Aslam KA",
    title: "Manager", 
    quote:
      "Onzur Marketing's professional food photography helped us successfully integrate with Talabat and Snoonu. Our online visibility and customer engagement have grown significantly!",
  },
  {
    logo: "/assets/images/megabyte-logo.svg",
    company: "Megabyte Store",
    name: "Mohammed Raihan",
    title: "Owner",
    quote:
      "With Onzur Marketing's expert ad management, we achieved 8 million TikTok views, 800K ad-driven views, and 40-50 daily leads—our sales have never been better!",
  },
  {
    logo: "/assets/images/islamic-scholars-logo.svg",
    company: "Islamic Scholars Project",
    name: "Dr. Abdurrahman Shaybani",
    title: "Islamic Scholar",
    quote:
      "Thanks to Onzur Marketing, we reached 80,000 followers and 4 million views in just 2 months, allowing us to onboard more scholars and expand our initiative!",
  },
];

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      nextTestimonial();
    }, 5000); // Change testimonial every 5 seconds
    return () => clearTimeout(timer);
  }, [currentIndex]);

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section id="testimonials" className={`relative ${commonStyles.sectionDark} text-white overflow-hidden`}>
      <div className="absolute inset-0 opacity-30">
        <Image
          src="/assets/images/testimonial-bg-gradient.svg"
          alt="Background Gradient"
          fill
          style={{ objectFit: "cover" }}
        />
      </div>

      <div className={`${commonStyles.container} relative z-10 flex flex-col lg:flex-row items-center`}>
        {/* Left side: Testimonial Slider */}
        <div className="lg:w-1/2 lg:pr-12 mb-12 lg:mb-0">
          <div className="relative min-h-[300px] sm:min-h-[350px] flex flex-col justify-center items-center text-center lg:text-left lg:items-start">
            {/* Navigation Arrows */}
            <button
              onClick={prevTestimonial}
              className="absolute left-0 top-1/2 -translate-y-1/2 transform p-2 bg-white/10 hover:bg-white/20 rounded-full z-20 -ml-4 sm:-ml-8 lg:-ml-12"
              aria-label="Previous testimonial"
            >
              <ChevronLeft
                size={24}
                className="text-white"
              />
            </button>
            <button
              onClick={nextTestimonial}
              className="absolute right-0 top-1/2 -translate-y-1/2 transform p-2 bg-white/10 hover:bg-white/20 rounded-full z-20 -mr-4 sm:-mr-8 lg:-mr-12"
              aria-label="Next testimonial"
            >
              <ChevronRight
                size={24}
                className="text-white"
              />
            </button>

            <div className="w-full transition-opacity duration-500 ease-in-out">
              <h2 className={`${commonStyles.heading3} text-[#04E4FF] mb-6 uppercase tracking-wider`}>
                Client Testimonials
              </h2>
              <blockquote className="mb-6">
                <p className={`${commonStyles.heading3} font-bold leading-tight mb-8`}>
                  "{currentTestimonial.quote}"
                </p>
              </blockquote>
              <div className="flex items-center justify-center lg:justify-start">
                <div className="w-20 h-10 sm:w-24 sm:h-12 relative mr-4 flex items-center justify-center">
                  <Image
                    src={currentTestimonial.logo}
                    alt={`${currentTestimonial.company} logo`}
                    fill
                    style={{ objectFit: "contain" }}
                    className="opacity-80"
                  />
                </div>
                <div>
                  <p className="font-bold text-lg sm:text-xl">
                    {currentTestimonial.name}
                  </p>
                  <p className="text-sm sm:text-base opacity-80">
                    {currentTestimonial.title} at {currentTestimonial.company}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Client Logos Row - consider making this scrollable or a separate small carousel if many logos */}
          <div className="mt-12 hidden lg:block">
            <p className="text-center text-sm uppercase tracking-widest opacity-60 mb-4">
              Trusted By Industry Leaders
            </p>
            <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-4 opacity-70">
              {[
                ...new Set(
                  testimonials.map((t) => ({
                    logo: t.logo,
                    company: t.company,
                  }))
                ),
              ]
                .slice(0, 6)
                .map((client, index) => (
                  <div
                    key={index}
                    className="h-8 w-24 relative grayscale hover:grayscale-0 transition-all duration-300"
                  >
                    <Image
                      src={client.logo}
                      alt={`${client.company} Logo`}
                      fill
                      style={{ objectFit: "contain" }}
                    />
                  </div>
                ))}
            </div>
          </div>
        </div>

        {/* Right side: DesignRush Widget */}
        <div className="lg:w-1/2 lg:pl-12 flex flex-col items-center lg:items-start">
          <div className="bg-gradient-to-br from-[#00B9FF] to-[#9536E5] p-1 rounded-lg shadow-2xl w-full max-w-md mx-auto lg:mx-0">
            <div className="bg-[#0A1138] p-6 sm:p-8 rounded-md">
              <div className="flex flex-col items-center text-center mb-6">
                <div className="relative w-48 h-16 mb-3">
                  {/* Placeholder for combined DesignRush logo vectors/award bg */}
                  <Image
                    src="/assets/images/designrush-logo-placeholder.svg"
                    alt="DesignRush Logo"
                    fill
                    style={{ objectFit: "contain" }}
                  />
                </div>
                <p className="text-2xl sm:text-3xl font-bold">4.9</p>
                <div className="flex items-center my-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={20}
                      className={`mx-0.5 ${
                        i < 4.9 ? "text-yellow-400 fill-current" : "text-gray-400"
                      }`}
                    />
                  ))}
                </div>
                <p className="text-sm sm:text-base uppercase tracking-wider">
                  38 REVIEWS ON DESIGNRUSH
                </p>
              </div>

              <div className="text-center">
                <Link
                  href="https://www.designrush.com/agency/profile/digital-silk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center text-[#01AFE9] hover:text-[#38d3ff] text-lg sm:text-xl font-bold uppercase group transition-colors"
                >
                  View client reviews
                  <ArrowRight
                    size={16}
                    className="ml-2 transition-transform duration-300 group-hover:translate-x-1"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;

/* 
  Placeholder SVGs needed in public/assets/images:
  - matrix-logo-placeholder.svg (combine matrix-logo-vector1.svg through 13)
  - ngf-logo-placeholder.svg (combine ngf-logo-vector.svg and ngf-logo-text-vector1-3.svg)
  - smartsoft-logo-placeholder.svg (combine smartsoft-logo-main.svg and text1-2.svg)
  - promptcare-logo-placeholder.svg (combine promptcare-logo-p.svg and plus.svg etc.)
  - designrush-logo-placeholder.svg (combine designrush-award-bg.svg, widget-bg1-3.svg, and text.svg)
*/
