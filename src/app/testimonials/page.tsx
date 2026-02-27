"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { fadeInUp, fadeInLeft, fadeInRight, staggerContainer, viewport } from "../../lib/animation-variants";
import { commonStyles } from "../../lib/design-system";
import { 
  Star, 
  Quote, 
  ChevronLeft, 
  ChevronRight, 
  Award, 
  Users, 
  TrendingUp, 
  Heart,
  ArrowRight,
  CheckCircle,
  MessageCircle,
  Linkedin,
  Twitter,
  Instagram,
  Play,
  Calendar,
  MapPin,
  Building
} from "lucide-react";

// Comprehensive testimonials data
const testimonialsData = [
  {
    id: 1,
    name: "Aslam KA",
    position: "Manager",
    company: "Spice Fusion Restaurant",
    industry: "Food & Beverage",
    location: "Doha, Qatar",
    logo: "/assets/images/spice-fusion-logo.svg",
    avatar: "/assets/images/placeholder-client.jpg",
    rating: 5,
    date: "September 2024",
    projectType: "Professional Photography & Platform Integration",
    quote: "Onzur Marketing's professional food photography helped us successfully integrate with Talabat and Snoonu. Our online visibility and customer engagement have grown significantly!",
    fullReview: "Working with Onzur Marketing was a game-changer for our restaurant. Their professional food photography not only captured the essence of our dishes but also helped us establish a strong presence on delivery platforms. The team's attention to detail and understanding of the food industry made the entire process seamless. We saw immediate results in terms of customer engagement and order volume.",
    results: [
      "100% successful platform integration",
      "200% increase in online visibility", 
      "Enhanced customer engagement",
      "Professional brand presentation"
    ],
    projectDuration: "2 weeks",
    social: {
      linkedin: "#",
      twitter: "#",
      instagram: "#"
    }
  },
  {
    id: 2,
    name: "Mohammed Raihan", 
    position: "Owner",
    company: "Megabyte Store",
    industry: "Electronics & Technology",
    location: "Doha, Qatar",
    logo: "/assets/images/megabyte-logo.svg",
    avatar: "/assets/images/placeholder-client.jpg",
    rating: 5,
    date: "August 2024",
    projectType: "Digital Marketing & Social Media Strategy",
    quote: "With Onzur Marketing's expert ad management, we achieved 8 million TikTok views, 800K ad-driven views, and 40-50 daily leads—our sales have never been better!",
    fullReview: "The results speak for themselves. Onzur Marketing transformed our digital presence from virtually nothing to dominating our market segment. Their strategic approach to TikTok and Meta advertising, combined with engaging content creation, delivered results beyond our expectations. The consistent daily leads have completely transformed our business model.",
    results: [
      "8M+ TikTok views generated",
      "40-50 daily leads consistently",
      "800K+ ad-driven views",
      "300% increase in sales"
    ],
    projectDuration: "4 months",
    social: {
      linkedin: "#",
      twitter: "#", 
      instagram: "#"
    }
  },
  {
    id: 3,
    name: "Dr. Abdurrahman Shaybani",
    position: "Islamic Scholar",
    company: "Islamic Scholars Project",
    industry: "Education & Religion",
    location: "Doha, Qatar",
    logo: "/assets/images/islamic-scholars-logo.svg",
    avatar: "/assets/images/placeholder-client.jpg",
    rating: 5,
    date: "July 2024",
    projectType: "Content Strategy & Community Building",
    quote: "Thanks to Onzur Marketing, we reached 80,000 followers and 4 million views in just 2 months, allowing us to onboard more scholars and expand our initiative!",
    fullReview: "Onzur Marketing understood our mission to spread Islamic education through modern platforms. Their content strategy was culturally sensitive yet highly engaging, helping us reach young Muslims worldwide. The growth we achieved in such a short time has enabled us to expand our scholar network and impact more lives.",
    results: [
      "80K followers in 2 months",
      "4M views achieved",
      "12 scholars successfully onboarded",
      "Global educational impact"
    ],
    projectDuration: "2 months",
    social: {
      linkedin: "#",
      twitter: "#",
      instagram: "#"
    }
  },
  {
    id: 4,
    name: "[Client Name]",
    position: "Marketing Director",
    company: "QSN Mazad",
    industry: "Auction & Marketplace",
    location: "Doha, Qatar", 
    logo: "/assets/images/placeholder-logo.svg",
    avatar: "/assets/images/placeholder-client.jpg",
    rating: 5,
    date: "October 2024",
    projectType: "Brand Marketing & Commercial Content",
    quote: "Onzur's creative approach to our auction brand marketing and commercial reels has significantly enhanced our brand presence and customer engagement in Qatar's competitive marketplace.",
    fullReview: "The team at Onzur Marketing brought fresh creativity to our auction business. Their commercial reels and brand marketing strategies helped us stand out in Qatar's competitive marketplace. The content they created perfectly captured the excitement and trust factor essential for our auction platform.",
    results: [
      "Enhanced brand presence",
      "Increased customer trust",
      "Improved engagement rates",
      "Professional brand positioning"
    ],
    projectDuration: "3 months",
    social: {
      linkedin: "#",
      twitter: "#",
      instagram: "#"
    }
  },
  {
    id: 5,
    name: "[Client Name]",
    position: "CEO",
    company: "Tech Startup Qatar",
    industry: "Technology & Innovation",
    location: "Doha, Qatar",
    logo: "/assets/images/placeholder-logo.svg",
    avatar: "/assets/images/placeholder-client.jpg", 
    rating: 5,
    date: "September 2024",
    projectType: "Website Development & Digital Strategy",
    quote: "The website Onzur developed for us not only looks stunning but also converts visitors into customers. Their understanding of our target market in Qatar was impressive.",
    fullReview: "Onzur Marketing delivered a website that exceeded our expectations. Their technical expertise combined with deep understanding of the Qatar market resulted in a platform that truly represents our brand and drives conversions. The ongoing digital strategy support has been invaluable for our growth.",
    results: [
      "50% increase in conversions",
      "Professional web presence",
      "Improved user experience",
      "Strong digital foundation"
    ],
    projectDuration: "6 weeks",
    social: {
      linkedin: "#",
      twitter: "#",
      instagram: "#"
    }
  },
  {
    id: 6,
    name: "[Client Name]",
    position: "Brand Manager", 
    company: "Fashion Boutique",
    industry: "Fashion & Retail",
    location: "Doha, Qatar",
    logo: "/assets/images/placeholder-logo.svg",
    avatar: "/assets/images/placeholder-client.jpg",
    rating: 5,
    date: "August 2024",
    projectType: "Social Media Management & Content Creation",
    quote: "Our Instagram presence was transformed by Onzur's creative content and strategic posting. We've never had such consistent engagement and growth before.",
    fullReview: "The fashion industry is highly visual and competitive. Onzur Marketing understood this perfectly and created content that not only showcased our products beautifully but also told our brand story. Their consistent management of our social media has resulted in steady growth and increased sales.",
    results: [
      "200% Instagram growth",
      "Consistent engagement increase",
      "Professional brand imagery",
      "Increased online sales"
    ],
    projectDuration: "Ongoing",
    social: {
      linkedin: "#",
      twitter: "#",
      instagram: "#"
    }
  }
];

const testimonialStats = [
  { number: "50+", label: "Happy Clients", icon: Users },
  { number: "95%", label: "Client Satisfaction", icon: Heart },
  { number: "12M+", label: "Views Generated", icon: TrendingUp },
  { number: "4.9", label: "Average Rating", icon: Star }
];

const industries = ["All", "Food & Beverage", "Electronics & Technology", "Education & Religion", "Fashion & Retail"];

export default function TestimonialsPage() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedIndustry, setSelectedIndustry] = useState("All");
  const [selectedTestimonial, setSelectedTestimonial] = useState(null);

  const filteredTestimonials = selectedIndustry === "All" 
    ? testimonialsData 
    : testimonialsData.filter(t => t.industry === selectedIndustry);

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? filteredTestimonials.length - 1 : prevIndex - 1
    );
  };

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === filteredTestimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      nextTestimonial();
    }, 8000);
    return () => clearTimeout(timer);
  }, [currentIndex, filteredTestimonials.length]);

  const currentTestimonial = filteredTestimonials[currentIndex] || filteredTestimonials[0];

  return (
    <div className="min-h-screen bg-[#00042A]">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute w-[600px] h-[600px] -top-32 -left-32 bg-gradient-radial from-[#04E4FF]/20 to-transparent rounded-full blur-3xl"></div>
          <div className="absolute w-[400px] h-[400px] top-20 right-0 bg-gradient-radial from-[#9536E5]/20 to-transparent rounded-full blur-3xl"></div>
        </div>

        <div className={`${commonStyles.container} relative z-10`}>
          <motion.div 
            className="text-center max-w-4xl mx-auto"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.div
              className="inline-flex items-center bg-[#04E4FF]/10 border border-[#04E4FF]/30 rounded-full px-6 py-3 mb-8"
              variants={fadeInUp}
            >
              <Quote className="w-5 h-5 text-[#04E4FF] mr-2" />
              <span className="text-[#04E4FF] font-semibold">Client Success Stories</span>
            </motion.div>

            <motion.h1 
              className={`${commonStyles.heading1} text-white mb-6`}
              variants={fadeInUp}
            >
              What Our Clients{" "}
              <span className={commonStyles.gradientText}>Say About Us</span>
            </motion.h1>

            <motion.p 
              className="text-xl text-white/80 mb-10 max-w-3xl mx-auto leading-relaxed"
              variants={fadeInUp}
            >
              Don't just take our word for it. See how businesses across Qatar have achieved remarkable success with our digital marketing expertise and creative solutions.
            </motion.p>

            <motion.div 
              className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto"
              variants={staggerContainer}
            >
              {testimonialStats.map((stat, index) => (
                <motion.div key={index} className="text-center" variants={fadeInUp}>
                  <div className="w-12 h-12 bg-gradient-to-r from-[#00B9FF] to-[#04E4FF] rounded-xl flex items-center justify-center mx-auto mb-3">
                    <stat.icon className="w-6 h-6 text-white" />
                  </div>
                  <p className="text-2xl font-bold text-[#04E4FF] mb-1">{stat.number}</p>
                  <p className="text-white/70 text-sm">{stat.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Featured Testimonial Carousel */}
      <section className="py-20 bg-white/5">
        <div className={commonStyles.container}>
          <motion.div 
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            variants={staggerContainer}
          >
            <motion.h2 
              className={`${commonStyles.heading2} text-white mb-6`}
              variants={fadeInUp}
            >
              Featured Client Reviews
            </motion.h2>
          </motion.div>

          {currentTestimonial && (
            <div className="relative max-w-6xl mx-auto">
              <motion.button
                onClick={prevTestimonial}
                className="absolute left-0 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center z-10 -ml-6"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <ChevronLeft className="w-6 h-6 text-white" />
              </motion.button>

              <motion.button
                onClick={nextTestimonial}
                className="absolute right-0 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center z-10 -mr-6"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <ChevronRight className="w-6 h-6 text-white" />
              </motion.button>

              <AnimatePresence mode="wait">
                <motion.div
                  key={currentTestimonial.id}
                  className={`${commonStyles.cardGlass} p-8 md:p-12`}
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                >
                  <div className="grid md:grid-cols-3 gap-8 items-center">
                    <div className="text-center">
                      <div className="w-24 h-24 mx-auto mb-4 relative">
                        <div className="w-full h-full rounded-full bg-gradient-to-r from-[#00B9FF] to-[#04E4FF] p-1">
                          <div className="w-full h-full rounded-full bg-[#00042A] flex items-center justify-center">
                            <Users className="w-8 h-8 text-[#04E4FF]" />
                          </div>
                        </div>
                      </div>
                      <h3 className="text-xl font-semibold text-white mb-1">{currentTestimonial.name}</h3>
                      <p className="text-[#04E4FF] mb-2">{currentTestimonial.position}</p>
                      <p className="text-white/60 text-sm mb-4">{currentTestimonial.company}</p>
                      <div className="flex justify-center mb-4">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            size={16}
                            className={`mx-0.5 ${
                              i < currentTestimonial.rating
                                ? "text-yellow-400 fill-current"
                                : "text-gray-400"
                            }`}
                          />
                        ))}
                      </div>
                      <p className="text-white/60 text-xs">{currentTestimonial.date}</p>
                    </div>

                    <div className="md:col-span-2">
                      <Quote className="w-12 h-12 text-[#04E4FF] mb-4" />
                      <blockquote className="text-white text-lg md:text-xl leading-relaxed mb-6">
                        "{currentTestimonial.quote}"
                      </blockquote>
                      
                      <div className="grid md:grid-cols-2 gap-4 mb-6">
                        <div>
                          <p className="text-white/60 text-sm mb-2">PROJECT TYPE</p>
                          <p className="text-white font-medium">{currentTestimonial.projectType}</p>
                        </div>
                        <div>
                          <p className="text-white/60 text-sm mb-2">DURATION</p>
                          <p className="text-white font-medium">{currentTestimonial.projectDuration}</p>
                        </div>
                      </div>

                      <button
                        onClick={() => setSelectedTestimonial(currentTestimonial)}
                        className="text-[#04E4FF] hover:text-white font-medium flex items-center transition-colors"
                      >
                        Read Full Review
                        <ArrowRight size={16} className="ml-1" />
                      </button>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Carousel Indicators */}
              <div className="flex justify-center mt-8 space-x-2">
                {filteredTestimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === currentIndex ? "bg-[#04E4FF] w-8" : "bg-white/30"
                    }`}
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Industry Filter */}
      <section className="py-10">
        <div className={commonStyles.container}>
          <motion.div 
            className="flex flex-wrap justify-center gap-4"
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            variants={staggerContainer}
          >
            {industries.map((industry, index) => (
              <motion.button
                key={industry}
                onClick={() => {
                  setSelectedIndustry(industry);
                  setCurrentIndex(0);
                }}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  selectedIndustry === industry
                    ? "bg-gradient-to-r from-[#00B9FF] to-[#04E4FF] text-white"
                    : "bg-white/10 text-white/70 hover:text-white hover:bg-white/20"
                }`}
                variants={fadeInUp}
                custom={index}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {industry}
              </motion.button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* All Testimonials Grid */}
      <section className="py-20">
        <div className={commonStyles.container}>
          <motion.div 
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            variants={staggerContainer}
          >
            <motion.h2 
              className={`${commonStyles.heading2} text-white mb-6`}
              variants={fadeInUp}
            >
              All Client Reviews
            </motion.h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredTestimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                className={`${commonStyles.cardGlass} cursor-pointer`}
                initial="hidden"
                whileInView="visible"
                viewport={viewport}
                variants={fadeInUp}
                custom={index}
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                onClick={() => setSelectedTestimonial(testimonial)}
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-[#00B9FF] to-[#04E4FF] rounded-full flex items-center justify-center mr-4">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">{testimonial.name}</h3>
                    <p className="text-[#04E4FF] text-sm">{testimonial.position}</p>
                  </div>
                </div>

                <p className="text-white/80 text-sm mb-4 line-clamp-3">
                  "{testimonial.quote}"
                </p>

                <div className="flex justify-between items-center mb-4">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={14}
                        className={`mr-1 ${
                          i < testimonial.rating
                            ? "text-yellow-400 fill-current"
                            : "text-gray-400"
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-white/60 text-xs">{testimonial.date}</span>
                </div>

                <div className="border-t border-white/10 pt-4">
                  <p className="text-white/60 text-xs mb-1">{testimonial.company}</p>
                  <p className="text-[#04E4FF] text-xs">{testimonial.industry}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Testimonial Modal */}
      {selectedTestimonial && (
        <motion.section 
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 overflow-y-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div className={`${commonStyles.container} py-20`}>
            <motion.div 
              className="bg-[#00042A] rounded-2xl overflow-hidden max-w-4xl mx-auto"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
            >
              <div className="p-8">
                <div className="flex justify-between items-start mb-8">
                  <div className="flex items-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-[#00B9FF] to-[#04E4FF] rounded-full flex items-center justify-center mr-4">
                      <Users className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-white mb-1">{selectedTestimonial.name}</h2>
                      <p className="text-[#04E4FF] mb-1">{selectedTestimonial.position}</p>
                      <p className="text-white/60">{selectedTestimonial.company}</p>
                    </div>
                  </div>
                  <button
                    onClick={() => setSelectedTestimonial(null)}
                    className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
                  >
                    ×
                  </button>
                </div>

                <div className="mb-8">
                  <div className="flex items-center mb-4">
                    <div className="flex mr-4">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          size={20}
                          className={`mr-1 ${
                            i < selectedTestimonial.rating
                              ? "text-yellow-400 fill-current"
                              : "text-gray-400"
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-white/60">{selectedTestimonial.date}</span>
                  </div>
                  
                  <Quote className="w-12 h-12 text-[#04E4FF] mb-4" />
                  <blockquote className="text-white text-xl leading-relaxed mb-6">
                    "{selectedTestimonial.fullReview}"
                  </blockquote>
                </div>

                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-4">Project Details</h3>
                    <div className="space-y-3">
                      <div>
                        <p className="text-white/60 text-sm">Project Type</p>
                        <p className="text-white">{selectedTestimonial.projectType}</p>
                      </div>
                      <div>
                        <p className="text-white/60 text-sm">Duration</p>
                        <p className="text-white">{selectedTestimonial.projectDuration}</p>
                      </div>
                      <div>
                        <p className="text-white/60 text-sm">Industry</p>
                        <p className="text-white">{selectedTestimonial.industry}</p>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-4">Key Results</h3>
                    <div className="space-y-3">
                      {selectedTestimonial.results.map((result, idx) => (
                        <div key={idx} className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-[#04E4FF] mr-3 mt-0.5 flex-shrink-0" />
                          <p className="text-white/80">{result}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="text-center">
                  <Link 
                    href="https://wa.me/97459990137?text=Hi! I'd like to discuss how you can help my business achieve similar results."
                    className={`${commonStyles.buttonPrimary} text-lg px-8 py-4`}
                  >
                    Get Similar Results
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.section>
      )}

      {/* CTA Section */}
      <section className="py-20 bg-white/5">
        <div className={commonStyles.container}>
          <motion.div 
            className="text-center max-w-4xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            variants={staggerContainer}
          >
            <motion.h2 
              className={`${commonStyles.heading2} text-white mb-6`}
              variants={fadeInUp}
            >
              Ready to Join Our Success Stories?
            </motion.h2>
            <motion.p 
              className="text-xl text-white/80 mb-10 leading-relaxed"
              variants={fadeInUp}
            >
              Let us help you achieve the same remarkable results that our clients are experiencing. Your success story could be next!
            </motion.p>

            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center"
              variants={fadeInUp}
            >
              <Link 
                href="https://wa.me/97459990137?text=Hi! I'd like to start my success story with Onzur Media Studio."
                className={`${commonStyles.buttonPrimary} text-lg px-10 py-4`}
              >
                Start Your Success Story
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link 
                href="/case-studies"
                className={`${commonStyles.buttonSecondary} text-lg px-10 py-4`}
              >
                View Case Studies
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}