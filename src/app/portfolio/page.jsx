"use client";

import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { fadeInUp, fadeInLeft, fadeInRight, staggerContainer, viewport } from "../../lib/animation-variants";
import { commonStyles } from "../../lib/design-system";
import OptimizedImage from "../../components/OptimizedImage";
import { 
  Eye, 
  Users, 
  TrendingUp, 
  Heart,
  ArrowRight,
  Play,
  Camera,
  Video,
  Smartphone,
  Monitor,
  ExternalLink,
  Award,
  Calendar,
  MapPin,
  Building,
  Filter,
  Grid,
  List,
  Search,
  Star,
  Share2,
  Download,
  Zap,
  Target,
  BarChart3
} from "lucide-react";

// Comprehensive portfolio data
const portfolioProjects = [
  {
    id: 1,
    title: "Dr. Abdurrahman Shaybani",
    subtitle: "Islamic Scholar TikTok Growth",
    category: "Social Media",
    industry: "Education & Religion",
    description: "Strategic TikTok content creation and community building for Islamic education, achieving remarkable growth and engagement with young Muslim audiences worldwide.",
    metrics: "80K followers, 4M views in 2 months",
    image: "/assets/contents/IMG-20250708-WA0009.jpg",
    link: "https://www.tiktok.com/@drshaybani",
    type: "Social Media Strategy",
    duration: "2 months",
    status: "Completed",
    year: "2024",
    services: ["Content Strategy", "Community Management", "Growth Optimization"],
    results: [
      { label: "Followers Gained", value: "80K", change: "+400%" },
      { label: "Total Views", value: "4M", change: "+500%" },
      { label: "Engagement Rate", value: "15%", change: "+300%" },
      { label: "Scholars Onboarded", value: "12", change: "New" }
    ],
    testimonial: {
      quote: "Thanks to Onzur Marketing, we reached 80,000 followers and 4 million views in just 2 months, allowing us to onboard more scholars and expand our initiative!",
      author: "Dr. Abdurrahman Shaybani"
    },
    featured: true,
    tags: ["TikTok", "Islamic Education", "Content Creation", "Community Building"]
  },
  {
    id: 2,
    title: "Megabyte Store",
    subtitle: "Electronics & Gadgets Marketing",
    category: "Digital Marketing",
    industry: "Electronics & Technology",
    description: "Comprehensive digital marketing strategy combining TikTok viral content with Meta advertising to transform an electronics store into Qatar's leading gadget destination.",
    metrics: "8M+ TikTok views, 40-50 daily leads",
    image: "/assets/contents/IMG-20250708-WA0014.jpg",
    link: "https://www.tiktok.com/@mgbytcom",
    type: "Full Digital Strategy",
    duration: "4 months",
    status: "Ongoing",
    year: "2024",
    services: ["TikTok Marketing", "Meta Ads", "Content Creation", "Lead Generation"],
    results: [
      { label: "TikTok Views", value: "8M+", change: "+2000%" },
      { label: "Daily Leads", value: "45", change: "+500%" },
      { label: "Ad Views", value: "800K+", change: "+800%" },
      { label: "Sales Growth", value: "300%", change: "+300%" }
    ],
    testimonial: {
      quote: "With Onzur Marketing's expert ad management, we achieved 8 million TikTok views, 800K ad-driven views, and 40-50 daily leads—our sales have never been better!",
      author: "Mohammed Raihan"
    },
    featured: true,
    tags: ["TikTok Ads", "Meta Advertising", "Lead Generation", "E-commerce"]
  },
  {
    id: 3,
    title: "Spice Fusion Restaurant",
    subtitle: "Professional Food Photography & Branding",
    category: "Photography",
    industry: "Food & Beverage",
    description: "Professional food photography session and platform integration strategy to establish strong online presence for delivery platforms and social media marketing.",
    metrics: "100% platform integration success",
    image: "/assets/contents/WhatsApp Image 2025-06-01 at 12.50.22_322b9df6.jpg",
    link: "#",
    type: "Photography & Integration",
    duration: "2 weeks",
    status: "Completed",
    year: "2024",
    services: ["Food Photography", "Platform Integration", "Brand Imaging"],
    results: [
      { label: "Platform Integration", value: "100%", change: "Success" },
      { label: "Photo Delivery", value: "50+", change: "Complete" },
      { label: "Online Visibility", value: "200%", change: "+200%" },
      { label: "Order Growth", value: "150%", change: "+150%" }
    ],
    testimonial: {
      quote: "Onzur Marketing's professional food photography helped us successfully integrate with Talabat and Snoonu. Our online visibility and customer engagement have grown significantly!",
      author: "Aslam KA"
    },
    featured: false,
    tags: ["Food Photography", "Platform Integration", "Restaurant Marketing"]
  },
  {
    id: 4,
    title: "QSN Mazad",
    subtitle: "Auction Brand Marketing & Commercial Reels",
    category: "Video Production",
    industry: "Auction & Marketplace",
    description: "Creative commercial video production and brand marketing strategy for Qatar's premier auction platform, enhancing trust and engagement in the marketplace.",
    metrics: "Enhanced brand presence",
    image: "/assets/contents/IMG-20250708-WA0013.jpg",
    link: "https://www.instagram.com/qsn.mazad",
    type: "Brand Marketing",
    duration: "3 months",
    status: "Completed",
    year: "2024",
    services: ["Commercial Videos", "Brand Strategy", "Social Media Marketing"],
    results: [
      { label: "Brand Recognition", value: "180%", change: "+180%" },
      { label: "Engagement Rate", value: "12%", change: "+200%" },
      { label: "Commercial Videos", value: "15", change: "Complete" },
      { label: "Platform Growth", value: "120%", change: "+120%" }
    ],
    testimonial: {
      quote: "Onzur's creative approach to our auction brand marketing and commercial reels has significantly enhanced our brand presence and customer engagement.",
      author: "QSN Mazad Team"
    },
    featured: false,
    tags: ["Commercial Videos", "Auction Marketing", "Brand Development"]
  },
  {
    id: 5,
    title: "Qatar University - Sharia Dept",
    subtitle: "Academic Event Coverage & Student Outreach",
    category: "Content Creation",
    industry: "Education & Academia",
    description: "Professional event coverage and student engagement content for Qatar University's Sharia Department, connecting academic excellence with modern digital outreach.",
    metrics: "Educational content success",
    image: "/assets/contents/IMG-20250708-WA0011.jpg",
    link: "https://www.instagram.com/sharia_qusrb",
    type: "Educational Content",
    duration: "Ongoing",
    status: "Active",
    year: "2024",
    services: ["Event Coverage", "Educational Content", "Student Engagement"],
    results: [
      { label: "Event Coverage", value: "25+", change: "Complete" },
      { label: "Student Reach", value: "5K+", change: "+250%" },
      { label: "Content Pieces", value: "100+", change: "Delivered" },
      { label: "Engagement", value: "High", change: "Consistent" }
    ],
    testimonial: {
      quote: "Professional coverage of our academic events has helped us connect with students and showcase our department's excellence.",
      author: "Qatar University Team"
    },
    featured: false,
    tags: ["Event Coverage", "Educational Content", "University Marketing"]
  },
  {
    id: 6,
    title: "Content Creation Showcase",
    subtitle: "Behind-the-Scenes Content Production",
    category: "Content Creation",
    industry: "Media & Production",
    description: "Comprehensive content creation showcase demonstrating our production capabilities across various industries and content types.",
    metrics: "Professional video & photo shoots",
    image: "/assets/contents/WhatsApp Image 2025-06-01 at 12.50.23_a05b9299.jpg",
    link: "#",
    type: "Production Showcase",
    duration: "Ongoing",
    status: "Portfolio",
    year: "2024",
    services: ["Video Production", "Photography", "Content Strategy"],
    results: [
      { label: "Productions", value: "50+", change: "Complete" },
      { label: "Industries Served", value: "8", change: "Diverse" },
      { label: "Content Hours", value: "200+", change: "Produced" },
      { label: "Client Satisfaction", value: "100%", change: "Perfect" }
    ],
    testimonial: {
      quote: "The quality and creativity of Onzur's content production consistently exceeds our expectations.",
      author: "Multiple Clients"
    },
    featured: false,
    tags: ["Video Production", "Photography", "Creative Content"]
  },
  {
    id: 7,
    title: "Brand Photography Portfolio",
    subtitle: "High-Quality Commercial Photography",
    category: "Photography",
    industry: "Various Industries",
    description: "Professional commercial photography services across multiple industries, delivering high-quality visual content that enhances brand storytelling and marketing effectiveness.",
    metrics: "Enhanced visual storytelling",
    image: "/assets/contents/WhatsApp Image 2025-06-01 at 12.50.25_9cd4cc89.jpg",
    link: "#",
    type: "Commercial Photography",
    duration: "Ongoing",
    status: "Portfolio",
    year: "2024",
    services: ["Commercial Photography", "Product Photography", "Brand Imaging"],
    results: [
      { label: "Photo Sessions", value: "40+", change: "Complete" },
      { label: "Brands Served", value: "20+", change: "Satisfied" },
      { label: "Images Delivered", value: "2000+", change: "High Quality" },
      { label: "Repeat Clients", value: "85%", change: "Loyal" }
    ],
    testimonial: {
      quote: "Onzur's photography services have elevated our brand's visual presence across all platforms.",
      author: "Brand Partners"
    },
    featured: false,
    tags: ["Commercial Photography", "Brand Imaging", "Product Photography"]
  },
  {
    id: 8,
    title: "Sheikh Ali Qaradaghi",
    subtitle: "Religious Content Creation",
    category: "Social Media",
    industry: "Education & Religion",
    description: "Strategic religious content creation and audience development for Islamic education and community engagement across social media platforms.",
    metrics: "Growing Islamic community",
    image: "/assets/contents/IMG-20250708-WA0010.jpg",
    link: "https://www.tiktok.com/@ali.qaradaghi",
    type: "Content Strategy",
    duration: "3 months",
    status: "Active",
    year: "2024",
    services: ["Content Creation", "Audience Development", "Religious Education"],
    results: [
      { label: "Community Growth", value: "150%", change: "+150%" },
      { label: "Content Reach", value: "2M+", change: "+400%" },
      { label: "Engagement", value: "High", change: "Consistent" },
      { label: "Educational Impact", value: "Global", change: "Expanding" }
    ],
    testimonial: {
      quote: "The content strategy has helped us reach and educate Muslim communities worldwide with authentic religious content.",
      author: "Sheikh Ali Qaradaghi Team"
    },
    featured: false,
    tags: ["Religious Content", "Islamic Education", "Community Building"]
  },
  {
    id: 9,
    title: "Sheikh Majd Makki",
    subtitle: "Engaging Islamic Content",
    category: "Social Media",
    industry: "Education & Religion",
    description: "Development of engaging Islamic educational content that resonates with modern audiences while maintaining authentic religious messaging and values.",
    metrics: "Expanding reach",
    image: "/assets/contents/IMG-20250708-WA0008.jpg",
    link: "https://www.tiktok.com/@majd.maki",
    type: "Content Development",
    duration: "2 months",
    status: "Growing",
    year: "2024",
    services: ["Content Development", "Religious Education", "Audience Engagement"],
    results: [
      { label: "Content Views", value: "1.5M+", change: "+300%" },
      { label: "Follower Growth", value: "200%", change: "+200%" },
      { label: "Educational Reach", value: "Global", change: "Expanding" },
      { label: "Community Engagement", value: "High", change: "Active" }
    ],
    testimonial: {
      quote: "Our Islamic educational content now reaches thousands of young Muslims seeking authentic religious guidance.",
      author: "Sheikh Majd Makki Team"
    },
    featured: false,
    tags: ["Islamic Content", "Educational Videos", "Youth Engagement"]
  }
];

const categories = ["All", "Social Media", "Digital Marketing", "Photography", "Video Production", "Content Creation"];
const industries = ["All", "Education & Religion", "Electronics & Technology", "Food & Beverage", "Auction & Marketplace", "Education & Academia", "Media & Production", "Various Industries"];
const viewModes = ["grid", "list"];

const portfolioStats = [
  { number: "50+", label: "Projects Completed", icon: Award },
  { number: "20+", label: "Brands Served", icon: Building },
  { number: "12M+", label: "Views Generated", icon: Eye },
  { number: "100%", label: "Client Satisfaction", icon: Star }
];

export default function PortfolioPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedIndustry, setSelectedIndustry] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);
  const [viewMode, setViewMode] = useState("grid");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredProjects = portfolioProjects.filter(project => {
    const matchesCategory = selectedCategory === "All" || project.category === selectedCategory;
    const matchesIndustry = selectedIndustry === "All" || project.industry === selectedIndustry;
    const matchesSearch = searchTerm === "" || 
      project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    
    return matchesCategory && matchesIndustry && matchesSearch;
  });

  const featuredProjects = portfolioProjects.filter(project => project.featured);

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
              <Camera className="w-5 h-5 text-[#04E4FF] mr-2" />
              <span className="text-[#04E4FF] font-semibold">Featured Work & Real Analytics</span>
            </motion.div>

            <motion.h1 
              className={`${commonStyles.heading1} text-white mb-6`}
              variants={fadeInUp}
            >
              Our Creative{" "}
              <span className={commonStyles.gradientText}>Portfolio</span>
            </motion.h1>

            <motion.p 
              className="text-xl text-white/80 mb-10 max-w-3xl mx-auto leading-relaxed"
              variants={fadeInUp}
            >
              Explore our diverse portfolio of successful projects across various industries. From viral social media campaigns to professional photography, see the real results we deliver for our clients.
            </motion.p>

            <motion.div 
              className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto"
              variants={staggerContainer}
            >
              {portfolioStats.map((stat, index) => (
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

      {/* Featured Projects */}
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
              Featured Projects
            </motion.h2>
            <motion.p 
              className="text-lg text-white/70 max-w-2xl mx-auto"
              variants={fadeInUp}
            >
              Our most successful projects that showcase our expertise and deliver exceptional results
            </motion.p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                className={`${commonStyles.cardGlass} overflow-hidden group cursor-pointer`}
                initial="hidden"
                whileInView="visible"
                viewport={viewport}
                variants={fadeInUp}
                custom={index}
                whileHover={{ y: -5, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                onClick={() => setSelectedProject(project)}
              >
                <div className="relative h-64 overflow-hidden">
                  <OptimizedImage
                    src={project.image}
                    alt={project.title}
                    fill
                    style={{ objectFit: "cover" }}
                    className="transition-transform duration-500 group-hover:scale-110"
                    priority={index === 0}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute top-4 left-4">
                    <span className="bg-[#04E4FF] text-white px-3 py-1 rounded-full text-sm font-medium">
                      Featured
                    </span>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-xl font-semibold text-white mb-1">{project.title}</h3>
                    <p className="text-[#04E4FF] text-sm">{project.subtitle}</p>
                  </div>
                </div>

                <div className="p-6">
                  <p className="text-white/80 mb-4 line-clamp-2">{project.description}</p>
                  
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    {project.results.slice(0, 2).map((result, idx) => (
                      <div key={idx} className="text-center bg-white/5 rounded-lg p-3">
                        <p className="text-lg font-bold text-[#04E4FF]">{result.value}</p>
                        <p className="text-white/60 text-xs">{result.label}</p>
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex flex-wrap gap-2">
                      {project.tags.slice(0, 2).map((tag, idx) => (
                        <span 
                          key={idx}
                          className="bg-[#04E4FF]/20 text-[#04E4FF] px-2 py-1 rounded-full text-xs"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    {project.link !== "#" && (
                      <Link
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#04E4FF] hover:text-white text-sm font-medium flex items-center transition-colors"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <ExternalLink size={14} className="mr-1" />
                        View Live
                      </Link>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Filters and Search */}
      <section className="py-10">
        <div className={commonStyles.container}>
          <div className="flex flex-col lg:flex-row gap-6 items-start lg:items-center justify-between">
            {/* Search */}
            <div className="relative w-full lg:w-80">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/40 w-5 h-5" />
              <input
                type="text"
                placeholder="Search projects..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-white/10 border border-white/20 rounded-lg pl-10 pr-4 py-3 text-white placeholder-white/40 focus:outline-none focus:border-[#04E4FF] transition-colors"
              />
            </div>

            {/* Filters */}
            <div className="flex flex-wrap gap-4">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="bg-white/10 border border-white/20 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-[#04E4FF]"
              >
                {categories.map(category => (
                  <option key={category} value={category} className="bg-[#00042A]">{category}</option>
                ))}
              </select>

              <select
                value={selectedIndustry}
                onChange={(e) => setSelectedIndustry(e.target.value)}
                className="bg-white/10 border border-white/20 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-[#04E4FF]"
              >
                {industries.map(industry => (
                  <option key={industry} value={industry} className="bg-[#00042A]">{industry}</option>
                ))}
              </select>

              {/* View Mode Toggle */}
              <div className="flex bg-white/10 rounded-lg p-1">
                <button
                  onClick={() => setViewMode("grid")}
                  className={`p-2 rounded ${viewMode === "grid" ? "bg-[#04E4FF] text-white" : "text-white/60"}`}
                >
                  <Grid size={18} />
                </button>
                <button
                  onClick={() => setViewMode("list")}
                  className={`p-2 rounded ${viewMode === "list" ? "bg-[#04E4FF] text-white" : "text-white/60"}`}
                >
                  <List size={18} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="pb-20">
        <div className={commonStyles.container}>
          <motion.div 
            className="mb-8"
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            variants={fadeInUp}
          >
            <p className="text-white/60">
              Showing {filteredProjects.length} of {portfolioProjects.length} projects
            </p>
          </motion.div>

          <AnimatePresence mode="wait">
            <motion.div 
              key={`${selectedCategory}-${selectedIndustry}-${searchTerm}-${viewMode}`}
              className={viewMode === "grid" 
                ? "grid md:grid-cols-2 lg:grid-cols-3 gap-8" 
                : "space-y-6"
              }
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  className={`${commonStyles.cardGlass} overflow-hidden group cursor-pointer ${
                    viewMode === "list" ? "flex gap-6" : ""
                  }`}
                  initial="hidden"
                  whileInView="visible"
                  viewport={viewport}
                  variants={fadeInUp}
                  custom={index}
                  whileHover={{ y: -3 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  onClick={() => setSelectedProject(project)}
                >
                  <div className={`relative overflow-hidden ${
                    viewMode === "list" ? "w-48 h-32 flex-shrink-0" : "h-48"
                  }`}>
                    <OptimizedImage
                      src={project.image}
                      alt={project.title}
                      fill
                      style={{ objectFit: "cover" }}
                      className="transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                    <div className="absolute top-2 left-2">
                      <span className="bg-[#04E4FF]/80 text-white px-2 py-1 rounded text-xs">
                        {project.category}
                      </span>
                    </div>
                  </div>

                  <div className={viewMode === "list" ? "flex-1 p-4" : "p-6"}>
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-lg font-semibold text-white">{project.title}</h3>
                      <span className="text-[#04E4FF] text-xs">{project.year}</span>
                    </div>
                    
                    <p className="text-[#04E4FF] text-sm mb-3">{project.subtitle}</p>
                    
                    {viewMode === "grid" && (
                      <p className="text-white/70 text-sm mb-4 line-clamp-2">{project.description}</p>
                    )}

                    <div className="flex flex-wrap gap-1 mb-4">
                      {project.tags.slice(0, viewMode === "list" ? 2 : 3).map((tag, idx) => (
                        <span 
                          key={idx}
                          className="bg-[#04E4FF]/20 text-[#04E4FF] px-2 py-1 rounded-full text-xs"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center justify-between">
                      <p className="text-white/60 text-xs">{project.duration}</p>
                      {project.link !== "#" && (
                        <Link
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[#04E4FF] hover:text-white text-sm flex items-center transition-colors"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <ExternalLink size={14} className="mr-1" />
                          View
                        </Link>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {filteredProjects.length === 0 && (
            <motion.div 
              className="text-center py-20"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <Search className="w-16 h-16 text-white/20 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">No projects found</h3>
              <p className="text-white/60">Try adjusting your filters or search terms</p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Detailed Project Modal */}
      {selectedProject && (
        <motion.section 
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 overflow-y-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div className={`${commonStyles.container} py-20`}>
            <motion.div 
              className="bg-[#00042A] rounded-2xl overflow-hidden max-w-5xl mx-auto"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
            >
              <div className="relative h-80 overflow-hidden">
                <OptimizedImage
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  fill
                  style={{ objectFit: "cover" }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#00042A] to-transparent" />
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
                >
                  ×
                </button>
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="bg-[#04E4FF] text-white px-3 py-1 rounded-full text-sm">
                      {selectedProject.category}
                    </span>
                    <span className="bg-white/20 text-white px-3 py-1 rounded-full text-sm">
                      {selectedProject.year}
                    </span>
                  </div>
                  <h2 className="text-3xl font-bold text-white mb-2">{selectedProject.title}</h2>
                  <p className="text-[#04E4FF] text-lg">{selectedProject.subtitle}</p>
                </div>
              </div>

              <div className="p-8">
                <div className="grid lg:grid-cols-3 gap-8 mb-8">
                  <div className="lg:col-span-2">
                    <h3 className="text-xl font-semibold text-white mb-4">Project Overview</h3>
                    <p className="text-white/80 leading-relaxed mb-6">{selectedProject.description}</p>
                    
                    <div className="grid md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <h4 className="text-white font-medium mb-3">Services Provided</h4>
                        <div className="space-y-2">
                          {selectedProject.services.map((service, idx) => (
                            <div key={idx} className="flex items-center text-white/70">
                              <div className="w-2 h-2 bg-[#04E4FF] rounded-full mr-3"></div>
                              {service}
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      <div>
                        <h4 className="text-white font-medium mb-3">Project Details</h4>
                        <div className="space-y-2 text-white/70">
                          <p><span className="text-white">Duration:</span> {selectedProject.duration}</p>
                          <p><span className="text-white">Status:</span> {selectedProject.status}</p>
                          <p><span className="text-white">Industry:</span> {selectedProject.industry}</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-white mb-4">Key Results</h3>
                    <div className="space-y-4">
                      {selectedProject.results.map((result, idx) => (
                        <div key={idx} className="bg-white/5 rounded-lg p-4">
                          <p className="text-2xl font-bold text-[#04E4FF] mb-1">{result.value}</p>
                          <p className="text-white/60 text-sm">{result.label}</p>
                          <p className="text-green-400 text-xs">{result.change}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {selectedProject.testimonial && (
                  <div className="bg-white/5 rounded-lg p-6 mb-8">
                    <h3 className="text-xl font-semibold text-white mb-4">Client Testimonial</h3>
                    <blockquote className="text-white/90 text-lg italic mb-4">
                      "{selectedProject.testimonial.quote}"
                    </blockquote>
                    <p className="text-[#04E4FF] font-medium">— {selectedProject.testimonial.author}</p>
                  </div>
                )}

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  {selectedProject.link !== "#" && (
                    <Link 
                      href={selectedProject.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`${commonStyles.buttonPrimary} text-center`}
                    >
                      View Live Project
                      <ExternalLink className="w-5 h-5 ml-2" />
                    </Link>
                  )}
                  <Link 
                    href="https://wa.me/97459990137?text=Hi! I'd like to discuss a similar project for my business."
                    className={`${commonStyles.buttonSecondary} text-center`}
                  >
                    Start Similar Project
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
              Ready to Create Your Success Story?
            </motion.h2>
            <motion.p 
              className="text-xl text-white/80 mb-10 leading-relaxed"
              variants={fadeInUp}
            >
              Let's work together to create impressive results for your brand. Your project could be our next featured success story!
            </motion.p>

            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center"
              variants={fadeInUp}
            >
              <Link 
                href="https://wa.me/97459990137?text=Hi! I'd like to start a project with Onzur Media Studio."
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