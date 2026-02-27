"use client";

import React, { useState } from "react";
import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { fadeInUp, fadeInLeft, fadeInRight, staggerContainer, viewport } from "../../lib/animation-variants";
import { commonStyles } from "../../lib/design-system";
import { 
  TrendingUp, 
  Users, 
  Eye, 
  Heart, 
  MessageCircle, 
  Share2, 
  Calendar, 
  Target, 
  Award, 
  BarChart3,
  Zap,
  Globe,
  CheckCircle,
  ArrowRight,
  Play,
  Camera,
  Video,
  Smartphone,
  Monitor,
  PieChart,
  DollarSign
} from "lucide-react";

// Comprehensive case studies data
const caseStudiesData = [
  {
    id: "spice-fusion",
    name: "Spice Fusion Restaurant",
    category: "Food & Beverage",
    logo: "/assets/images/placeholder-logo.svg",
    heroImage: "/assets/contents/WhatsApp Image 2025-06-01 at 12.50.22_322b9df6.jpg",
    bgColor: "#04E4FF",
    timeline: "3 months",
    budget: "QAR 15,000",
    services: ["Professional Photography", "Platform Integration", "Menu Optimization"],
    
    // Challenge & Solution
    challenge: "Spice Fusion Restaurant needed high-quality food photography for menu presentation and seamless integration with online delivery platforms like Talabat and Snoonu to boost their digital presence and online sales.",
    solution: "Onzur Marketing conducted professional food photography sessions, capturing appetizing images that showcase the restaurant's offerings. We then optimized these images for online menus and managed successful integration with major delivery platforms.",
    
    // Key Metrics
    metrics: {
      primary: [
        { value: "100", unit: "%", label: "Platform Integration Success", icon: Target },
        { value: "200", unit: "%", label: "Online Visibility Increase", icon: Eye },
        { value: "150", unit: "%", label: "Order Volume Growth", icon: TrendingUp },
        { value: "95", unit: "%", label: "Client Satisfaction", icon: Heart }
      ],
      secondary: [
        { label: "Professional Photos Delivered", value: "50+" },
        { label: "Delivery Platforms Integrated", value: "2" },
        { label: "Menu Items Optimized", value: "40+" },
        { label: "Project Completion Time", value: "2 weeks" }
      ]
    },
    
    // Detailed Results
    results: [
      "Successfully integrated with Talabat and Snoonu delivery platforms",
      "Enhanced online menu presentation with professional food photography", 
      "Improved customer engagement through visual appeal",
      "Established strong foundation for digital marketing growth"
    ],
    
    // Client Testimonial
    testimonial: {
      quote: "Onzur Marketing's professional food photography helped us successfully integrate with Talabat and Snoonu. Our online visibility and customer engagement have grown significantly!",
      author: "Aslam KA",
      position: "Manager",
      image: "/assets/images/placeholder-client.jpg"
    },
    
    // Process & Strategy
    process: [
      { step: "Discovery", description: "Analyzed restaurant's needs and target platforms" },
      { step: "Photography", description: "Conducted professional food photography sessions" },
      { step: "Optimization", description: "Optimized images for online platforms" },
      { step: "Integration", description: "Seamlessly integrated with delivery platforms" }
    ]
  },
  
  {
    id: "megabyte-store",
    name: "Megabyte Store",
    category: "Electronics & Technology",
    logo: "/assets/images/placeholder-logo.svg",
    heroImage: "/assets/contents/IMG-20250708-WA0011.jpg",
    bgColor: "#9536E5",
    timeline: "4 months",
    budget: "QAR 25,000",
    services: ["TikTok Advertising", "Meta Ads", "Content Creation", "Lead Generation"],
    
    challenge: "Megabyte Store faced low product sales and limited online presence in Qatar's competitive electronics market. They needed a comprehensive digital strategy to increase brand awareness and drive consistent leads.",
    solution: "We developed and executed a multi-platform advertising strategy focusing on TikTok and Meta ads, created engaging content showcasing electronics and gadgets, and implemented optimized lead generation campaigns.",
    
    metrics: {
      primary: [
        { value: "8", unit: "M+", label: "TikTok Views Generated", icon: Eye },
        { value: "45", unit: "", label: "Daily Leads Average", icon: Users },
        { value: "800", unit: "K+", label: "Ad-Driven Views", icon: TrendingUp },
        { value: "300", unit: "%", label: "Sales Increase", icon: BarChart3 }
      ],
      secondary: [
        { label: "Campaign Duration", value: "3-4 months" },
        { label: "Platforms Used", value: "TikTok, Meta" },
        { label: "Content Pieces Created", value: "120+" },
        { label: "Lead Conversion Rate", value: "12%" }
      ]
    },
    
    results: [
      "Generated 8M+ TikTok views in just 3-4 months",
      "Achieved consistent 40-50 daily leads through optimized campaigns",
      "Drove 800K+ ad-driven views across platforms",
      "Transformed brand presence in Qatar's electronics market"
    ],
    
    testimonial: {
      quote: "With Onzur Marketing's expert ad management, we achieved 8 million TikTok views, 800K ad-driven views, and 40-50 daily leads—our sales have never been better!",
      author: "Mohammed Raihan",
      position: "Owner",
      image: "/assets/images/placeholder-client.jpg"
    },
    
    process: [
      { step: "Market Research", description: "Analyzed electronics market and competitors" },
      { step: "Strategy Development", description: "Created multi-platform advertising strategy" },
      { step: "Content Creation", description: "Produced engaging product showcase content" },
      { step: "Campaign Optimization", description: "Continuously optimized for maximum ROI" }
    ]
  },
  
  {
    id: "islamic-scholars",
    name: "Islamic Scholars Project",
    category: "Education & Religion",
    logo: "/assets/images/placeholder-logo.svg",
    heroImage: "/assets/contents/IMG-20250708-WA0009.jpg",
    bgColor: "#00B9FF",
    timeline: "2 months",
    budget: "QAR 12,000",
    services: ["TikTok Strategy", "Content Management", "Community Building", "Scholar Onboarding"],
    
    challenge: "The Islamic Scholars Project needed to expand their reach for Islamic education on social media platforms, particularly TikTok, to connect with younger audiences and build a meaningful educational community.",
    solution: "We developed and managed Dr. Abdurrahman Shaybani's TikTok content strategy, created engaging educational content, and successfully onboarded multiple scholars to expand the initiative's impact and reach.",
    
    metrics: {
      primary: [
        { value: "80", unit: "K", label: "Followers Gained", icon: Users },
        { value: "4", unit: "M", label: "Total Views Achieved", icon: Eye },
        { value: "15", unit: "%", label: "Engagement Rate", icon: Heart },
        { value: "12", unit: "", label: "Scholars Onboarded", icon: Award }
      ],
      secondary: [
        { label: "Growth Period", value: "2 months" },
        { label: "Content Posted", value: "60+ videos" },
        { label: "Average Views per Video", value: "65K" },
        { label: "Community Engagement", value: "High" }
      ]
    },
    
    results: [
      "Gained 80,000 followers in just 2 months",
      "Achieved 4 million views across educational content",
      "Successfully onboarded multiple Islamic scholars",
      "Built an engaged community for Islamic education"
    ],
    
    testimonial: {
      quote: "Thanks to Onzur Marketing, we reached 80,000 followers and 4 million views in just 2 months, allowing us to onboard more scholars and expand our initiative!",
      author: "Dr. Abdurrahman Shaybani",
      position: "Islamic Scholar",
      image: "/assets/images/placeholder-client.jpg"
    },
    
    process: [
      { step: "Content Strategy", description: "Developed educational content framework" },
      { step: "Community Building", description: "Built engaged follower base" },
      { step: "Scholar Network", description: "Onboarded additional scholars" },
      { step: "Growth Optimization", description: "Optimized content for maximum reach" }
    ]
  }
];

const categories = ["All", "Food & Beverage", "Electronics & Technology", "Education & Religion"];

const overallStats = [
  { number: "12M+", label: "Total Views Generated", icon: Eye },
  { number: "120K+", label: "Followers Gained", icon: Users },
  { number: "95%", label: "Client Satisfaction", icon: Award },
  { number: "100%", label: "Project Success Rate", icon: Target }
];

export default function CaseStudiesPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedCase, setSelectedCase] = useState(null);

  const filteredCases = selectedCategory === "All" 
    ? caseStudiesData 
    : caseStudiesData.filter(cs => cs.category === selectedCategory);

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
              <Award className="w-5 h-5 text-[#04E4FF] mr-2" />
              <span className="text-[#04E4FF] font-semibold">Proven Success Stories</span>
            </motion.div>

            <motion.h1 
              className={`${commonStyles.heading1} text-white mb-6`}
              variants={fadeInUp}
            >
              Client Success{" "}
              <span className={commonStyles.gradientText}>Case Studies</span>
            </motion.h1>

            <motion.p 
              className="text-xl text-white/80 mb-10 max-w-3xl mx-auto leading-relaxed"
              variants={fadeInUp}
            >
              Discover how we've helped businesses across Qatar achieve remarkable growth through strategic digital marketing, viral content creation, and data-driven campaigns.
            </motion.p>

            <motion.div 
              className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto"
              variants={staggerContainer}
            >
              {overallStats.map((stat, index) => (
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

      {/* Category Filter */}
      <section className="py-10 bg-white/5">
        <div className={commonStyles.container}>
          <motion.div 
            className="flex flex-wrap justify-center gap-4"
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            variants={staggerContainer}
          >
            {categories.map((category, index) => (
              <motion.button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? "bg-gradient-to-r from-[#00B9FF] to-[#04E4FF] text-white"
                    : "bg-white/10 text-white/70 hover:text-white hover:bg-white/20"
                }`}
                variants={fadeInUp}
                custom={index}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category}
              </motion.button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-20">
        <div className={commonStyles.container}>
          <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {filteredCases.map((caseStudy, index) => (
              <motion.div
                key={caseStudy.id}
                className={`${commonStyles.cardGlass} group cursor-pointer overflow-hidden`}
                initial="hidden"
                whileInView="visible"
                viewport={viewport}
                variants={fadeInUp}
                custom={index}
                whileHover={{ y: -5, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                onClick={() => setSelectedCase(caseStudy)}
              >
                <div className="relative h-48 overflow-hidden rounded-lg mb-6">
                  <Image
                    src={caseStudy.heroImage}
                    alt={caseStudy.name}
                    fill
                    style={{ objectFit: "cover" }}
                    className="transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute top-4 left-4">
                    <span className="bg-[#04E4FF] text-white px-3 py-1 rounded-full text-sm font-medium">
                      {caseStudy.category}
                    </span>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex items-center text-white">
                      <Calendar className="w-4 h-4 mr-2" />
                      <span className="text-sm">{caseStudy.timeline}</span>
                    </div>
                  </div>
                </div>

                <div className="mb-6">
                  <h3 className="text-xl font-semibold text-white mb-2">{caseStudy.name}</h3>
                  <p className="text-white/70 text-sm line-clamp-2 mb-4">{caseStudy.challenge}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {caseStudy.services.slice(0, 2).map((service, idx) => (
                      <span 
                        key={idx}
                        className="bg-[#04E4FF]/20 text-[#04E4FF] px-2 py-1 rounded-full text-xs"
                      >
                        {service}
                      </span>
                    ))}
                    {caseStudy.services.length > 2 && (
                      <span className="text-white/40 text-xs">+{caseStudy.services.length - 2} more</span>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  {caseStudy.metrics.primary.slice(0, 2).map((metric, idx) => (
                    <div key={idx} className="text-center">
                      <p className="text-2xl font-bold text-[#04E4FF]">
                        {metric.value}<span className="text-lg">{metric.unit}</span>
                      </p>
                      <p className="text-white/60 text-xs">{metric.label}</p>
                    </div>
                  ))}
                </div>

                <div className="flex items-center justify-between">
                  <Link
                    href={`/case-studies/${caseStudy.id}`}
                    className="text-[#04E4FF] hover:text-white text-sm font-medium flex items-center transition-colors"
                  >
                    View Details
                    <ArrowRight size={14} className="ml-1" />
                  </Link>
                  <div className="flex items-center text-white/40 text-xs">
                    <Eye className="w-4 h-4 mr-1" />
                    Case Study
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Case Study Modal/Section */}
      {selectedCase && (
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
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={selectedCase.heroImage}
                  alt={selectedCase.name}
                  fill
                  style={{ objectFit: "cover" }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#00042A] to-transparent" />
                <button
                  onClick={() => setSelectedCase(null)}
                  className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
                >
                  ×
                </button>
                <div className="absolute bottom-4 left-6">
                  <h2 className="text-3xl font-bold text-white mb-2">{selectedCase.name}</h2>
                  <p className="text-[#04E4FF]">{selectedCase.category}</p>
                </div>
              </div>

              <div className="p-8">
                {/* Challenge & Solution */}
                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-4">Challenge</h3>
                    <p className="text-white/80 leading-relaxed">{selectedCase.challenge}</p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-4">Solution</h3>
                    <p className="text-white/80 leading-relaxed">{selectedCase.solution}</p>
                  </div>
                </div>

                {/* Key Metrics */}
                <div className="mb-8">
                  <h3 className="text-xl font-semibold text-white mb-6">Key Results</h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                    {selectedCase.metrics.primary.map((metric, idx) => (
                      <div key={idx} className="bg-white/5 rounded-lg p-4 text-center">
                        <metric.icon className="w-8 h-8 text-[#04E4FF] mx-auto mb-2" />
                        <p className="text-2xl font-bold text-[#04E4FF]">
                          {metric.value}<span className="text-lg">{metric.unit}</span>
                        </p>
                        <p className="text-white/60 text-sm">{metric.label}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Results List */}
                <div className="mb-8">
                  <h3 className="text-xl font-semibold text-white mb-4">Achievements</h3>
                  <div className="space-y-3">
                    {selectedCase.results.map((result, idx) => (
                      <div key={idx} className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-[#04E4FF] mr-3 mt-0.5 flex-shrink-0" />
                        <p className="text-white/80">{result}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Testimonial */}
                <div className="bg-white/5 rounded-lg p-6 mb-8">
                  <p className="text-white/90 text-lg italic mb-4">"{selectedCase.testimonial.quote}"</p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gradient-to-r from-[#00B9FF] to-[#04E4FF] rounded-full flex items-center justify-center mr-4">
                      <Users className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-white">{selectedCase.testimonial.author}</p>
                      <p className="text-[#04E4FF] text-sm">{selectedCase.testimonial.position}</p>
                    </div>
                  </div>
                </div>

                {/* CTA */}
                <div className="text-center">
                  <Link 
                    href="https://wa.me/97459990137?text=Hi! I'd like to discuss a similar project for my business."
                    className={`${commonStyles.buttonPrimary} text-lg px-8 py-4`}
                  >
                    Start Your Success Story
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
              Ready to Be Our Next Success Story?
            </motion.h2>
            <motion.p 
              className="text-xl text-white/80 mb-10 leading-relaxed"
              variants={fadeInUp}
            >
              Join the businesses that have transformed their digital presence and achieved remarkable growth with our proven strategies.
            </motion.p>

            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center"
              variants={fadeInUp}
            >
              <Link 
                href="https://wa.me/97459990137?text=Hi! I'd like to discuss how you can help my business grow."
                className={`${commonStyles.buttonPrimary} text-lg px-10 py-4`}
              >
                Start Your Project
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link 
                href="/services"
                className={`${commonStyles.buttonSecondary} text-lg px-10 py-4`}
              >
                View Our Services
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}