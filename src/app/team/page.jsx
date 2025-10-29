"use client";

import React from "react";
import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { fadeInUp, fadeInLeft, fadeInRight, staggerContainer, viewport } from "../../lib/animation-variants";
import { commonStyles } from "../../lib/design-system";
import OptimizedImage from "../../components/OptimizedImage";
import { 
  Users, 
  Award, 
  Target, 
  Heart, 
  Star, 
  ArrowRight, 
  Linkedin, 
  Instagram, 
  Twitter,
  Camera,
  Video,
  Palette,
  Code,
  TrendingUp,
  Globe,
  Zap,
  Shield
} from "lucide-react";

// Team members data with placeholders
const teamMembers = [
  {
    id: 1,
    name: "Daanish Ryan",
    role: "Creative Director & Videographer",
    department: "Creative",
    image: "/assets/contents/IMG-20250708-WA0008.jpg", // Will be replaced with actual image
    bio: "Award-winning creative director and videographer who brings brands to life through compelling visual storytelling and innovative content strategies. With over 5 years of experience, Daanish has led creative campaigns that have generated millions of views.",
    specialties: ["Video Production", "Creative Direction", "Brand Storytelling", "Visual Strategy"],
    achievements: ["8M+ TikTok Views Generated", "50+ Successful Campaigns", "Award-Winning Content Creator"],
    portfolioLink: "https://daanishrayn.my.canva.site/portfolio-web",
    social: {
      linkedin: "#",
      instagram: "#",
      twitter: "#"
    },
    experience: "5+ Years",
    location: "Doha, Qatar"
  },
  {
    id: 2,
    name: "Sahid",
    role: "Senior Content Editor",
    department: "Production",
    image: "/assets/contents/IMG-20250708-WA0010.jpg", // Will be replaced with actual image
    bio: "Master editor specializing in viral social media content, with expertise in creating engaging videos that drive millions of views and conversions. Sahid's editing skills have been instrumental in creating content that resonates with audiences.",
    specialties: ["Video Editing", "Motion Graphics", "Social Media Content", "Post-Production"],
    achievements: ["4M+ Video Views", "Viral Content Specialist", "Expert in Multi-Platform Editing"],
    portfolioLink: "https://www.instagram.com/alysohel.mov",
    social: {
      linkedin: "#",
      instagram: "https://www.instagram.com/alysohel.mov",
      twitter: "#"
    },
    experience: "4+ Years",
    location: "Doha, Qatar"
  },
  {
    id: 3,
    name: "[Team Member Name]",
    role: "Digital Marketing Strategist",
    department: "Strategy",
    image: "/assets/images/placeholder-team-member.jpg", // Placeholder
    bio: "Strategic digital marketing expert focused on data-driven campaigns that deliver measurable results. Specializes in paid advertising, social media strategy, and conversion optimization to help businesses achieve their growth goals.",
    specialties: ["Digital Strategy", "Paid Advertising", "Analytics", "Lead Generation"],
    achievements: ["40-50 Daily Leads Generated", "ROI Optimization Expert", "Multi-Platform Specialist"],
    portfolioLink: "#",
    social: {
      linkedin: "#",
      instagram: "#",
      twitter: "#"
    },
    experience: "3+ Years",
    location: "Doha, Qatar"
  },
  {
    id: 4,
    name: "[Team Member Name]",
    role: "Web Developer",
    department: "Development",
    image: "/assets/images/placeholder-team-member.jpg", // Placeholder
    bio: "Full-stack developer specialized in creating high-performing, conversion-focused websites and applications. Expert in modern web technologies and passionate about building digital solutions that drive business growth.",
    specialties: ["Web Development", "E-commerce", "SEO Optimization", "Performance"],
    achievements: ["100+ Websites Built", "Performance Optimization Expert", "Custom Solution Architect"],
    portfolioLink: "#",
    social: {
      linkedin: "#",
      instagram: "#",
      twitter: "#"
    },
    experience: "4+ Years",
    location: "Doha, Qatar"
  },
  {
    id: 5,
    name: "[Team Member Name]",
    role: "Social Media Manager",
    department: "Social",
    image: "/assets/images/placeholder-team-member.jpg", // Placeholder
    bio: "Social media expert who transforms brands into engaging online communities. Skilled in organic growth strategies, community management, and creating content that builds authentic connections with audiences.",
    specialties: ["Community Management", "Content Planning", "Brand Voice", "Engagement"],
    achievements: ["80K+ Followers Grown", "Community Building Expert", "Brand Voice Specialist"],
    portfolioLink: "#",
    social: {
      linkedin: "#",
      instagram: "#",
      twitter: "#"
    },
    experience: "3+ Years",
    location: "Doha, Qatar"
  },
  {
    id: 6,
    name: "[Team Member Name]",
    role: "Graphic Designer",
    department: "Design",
    image: "/assets/images/placeholder-team-member.jpg", // Placeholder
    bio: "Creative visual designer who crafts compelling brand identities and marketing materials. Passionate about creating designs that not only look stunning but also communicate effectively and drive results.",
    specialties: ["Brand Design", "Visual Identity", "Marketing Materials", "UI/UX"],
    achievements: ["200+ Design Projects", "Brand Identity Expert", "Visual Storyteller"],
    portfolioLink: "#",
    social: {
      linkedin: "#",
      instagram: "#",
      twitter: "#"
    },
    experience: "3+ Years",
    location: "Doha, Qatar"
  }
];

const departments = [
  { name: "Creative", icon: Camera, color: "from-[#00B9FF] to-[#04E4FF]" },
  { name: "Production", icon: Video, color: "from-[#04E4FF] to-[#9536E5]" },
  { name: "Strategy", icon: Target, color: "from-[#9536E5] to-[#00B9FF]" },
  { name: "Development", icon: Code, color: "from-[#00B9FF] to-[#04E4FF]" },
  { name: "Social", icon: Users, color: "from-[#04E4FF] to-[#9536E5]" },
  { name: "Design", icon: Palette, color: "from-[#9536E5] to-[#00B9FF]" }
];

const companyValues = [
  {
    icon: Target,
    title: "Results-Driven",
    description: "Every strategy, every piece of content, every campaign is designed with one goal: delivering measurable results for our clients."
  },
  {
    icon: Zap,
    title: "Innovation First",
    description: "We stay ahead of digital trends and continuously innovate to keep our clients at the forefront of their industries."
  },
  {
    icon: Heart,
    title: "Client Success",
    description: "Your success is our success. We're committed to building long-term partnerships and helping your business grow."
  },
  {
    icon: Shield,
    title: "Quality Excellence",
    description: "We maintain the highest standards in everything we do, from creative content to technical execution."
  }
];

const teamStats = [
  { number: "50+", label: "Projects Completed", icon: Award },
  { number: "8M+", label: "Views Generated", icon: TrendingUp },
  { number: "100%", label: "Client Satisfaction", icon: Star },
  { number: "24/7", label: "Support Available", icon: Globe }
];

export default function TeamPage() {
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
              <Users className="w-5 h-5 text-[#04E4FF] mr-2" />
              <span className="text-[#04E4FF] font-semibold">Meet Our Creative Team</span>
            </motion.div>

            <motion.h1 
              className={`${commonStyles.heading1} text-white mb-6`}
              variants={fadeInUp}
            >
              The Creative Minds Behind{" "}
              <span className={commonStyles.gradientText}>Your Success</span>
            </motion.h1>

            <motion.p 
              className="text-xl text-white/80 mb-10 max-w-3xl mx-auto leading-relaxed"
              variants={fadeInUp}
            >
              Our diverse team of digital marketing experts, creative professionals, and technical specialists work together to transform your brand and drive real business growth across Qatar and beyond.
            </motion.p>

            <motion.div 
              className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto"
              variants={staggerContainer}
            >
              {teamStats.map((stat, index) => (
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

      {/* Departments Overview */}
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
              Our Expertise Areas
            </motion.h2>
            <motion.p 
              className="text-lg text-white/70 max-w-2xl mx-auto"
              variants={fadeInUp}
            >
              Specialized teams working together to deliver comprehensive digital marketing solutions
            </motion.p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {departments.map((dept, index) => (
              <motion.div
                key={dept.name}
                className={`${commonStyles.cardGlass} text-center group cursor-pointer`}
                initial="hidden"
                whileInView="visible"
                viewport={viewport}
                variants={fadeInUp}
                custom={index}
                whileHover={{ y: -5, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${dept.color} rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <dept.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{dept.name}</h3>
                <p className="text-white/70">
                  {teamMembers.filter(member => member.department === dept.name).length} Team Members
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Members */}
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
              Meet Our Team
            </motion.h2>
            <motion.p 
              className="text-lg text-white/70 max-w-2xl mx-auto"
              variants={fadeInUp}
            >
              Get to know the talented individuals who make our success stories possible
            </motion.p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.id}
                className={`${commonStyles.cardGlass} group`}
                initial="hidden"
                whileInView="visible"
                viewport={viewport}
                variants={fadeInUp}
                custom={index}
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <div className="relative w-24 h-24 mx-auto mb-6">
                  <div className="w-full h-full rounded-full overflow-hidden bg-gradient-to-r from-[#00B9FF] to-[#04E4FF] p-1">
                    <div className="w-full h-full rounded-full overflow-hidden bg-[#00042A] flex items-center justify-center">
                      {member.image.includes('placeholder') ? (
                        <Users className="w-8 h-8 text-[#04E4FF]" />
                      ) : (
                        <OptimizedImage
                          src={member.image}
                          alt={member.name}
                          width={88}
                          height={88}
                          className="transition-transform duration-500 group-hover:scale-110"
                          quality={85}
                        />
                      )}
                    </div>
                  </div>
                  <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-[#04E4FF] rounded-full flex items-center justify-center">
                    {departments.find(d => d.name === member.department)?.icon && (
                      <div className="w-3 h-3 text-white">
                        {React.createElement(departments.find(d => d.name === member.department).icon, { size: 12 })}
                      </div>
                    )}
                  </div>
                </div>

                <div className="text-center mb-6">
                  <h3 className="text-xl font-semibold text-white mb-1">{member.name}</h3>
                  <p className="text-[#04E4FF] font-medium mb-2">{member.role}</p>
                  <p className="text-white/60 text-sm">{member.experience} • {member.location}</p>
                </div>

                <p className="text-white/70 text-sm mb-6 leading-relaxed line-clamp-3">
                  {member.bio}
                </p>

                <div className="mb-6">
                  <p className="text-white/60 text-xs mb-2">SPECIALTIES</p>
                  <div className="flex flex-wrap gap-1">
                    {member.specialties.slice(0, 3).map((specialty, idx) => (
                      <span 
                        key={idx} 
                        className="bg-[#04E4FF]/20 text-[#04E4FF] px-2 py-1 rounded-full text-xs"
                      >
                        {specialty}
                      </span>
                    ))}
                    {member.specialties.length > 3 && (
                      <span className="text-white/40 text-xs">+{member.specialties.length - 3} more</span>
                    )}
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex space-x-3">
                    {Object.entries(member.social).map(([platform, url]) => {
                      const icons = { linkedin: Linkedin, instagram: Instagram, twitter: Twitter };
                      const IconComponent = icons[platform];
                      return (
                        <Link
                          key={platform}
                          href={url}
                          className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center text-white/60 hover:text-[#04E4FF] hover:bg-[#04E4FF]/20 transition-colors"
                        >
                          <IconComponent size={14} />
                        </Link>
                      );
                    })}
                  </div>
                  {member.portfolioLink !== "#" && (
                    <Link
                      href={member.portfolioLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#04E4FF] hover:text-white text-sm font-medium flex items-center transition-colors"
                    >
                      Portfolio
                      <ArrowRight size={14} className="ml-1" />
                    </Link>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Values */}
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
              Our Values
            </motion.h2>
            <motion.p 
              className="text-lg text-white/70 max-w-2xl mx-auto"
              variants={fadeInUp}
            >
              The principles that guide everything we do at Onzur Media Studio
            </motion.p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {companyValues.map((value, index) => (
              <motion.div
                key={index}
                className="text-center group"
                initial="hidden"
                whileInView="visible"
                viewport={viewport}
                variants={fadeInUp}
                custom={index}
              >
                <div className="w-16 h-16 bg-gradient-to-r from-[#00B9FF] to-[#04E4FF] rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">{value.title}</h3>
                <p className="text-white/70 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute w-[600px] h-[600px] -bottom-32 -right-32 bg-gradient-radial from-[#04E4FF]/20 to-transparent rounded-full blur-3xl"></div>
          <div className="absolute w-[400px] h-[400px] bottom-20 left-0 bg-gradient-radial from-[#9536E5]/20 to-transparent rounded-full blur-3xl"></div>
        </div>

        <div className={`${commonStyles.container} relative z-10`}>
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
              Ready to Work With Our Team?
            </motion.h2>
            <motion.p 
              className="text-xl text-white/80 mb-10 leading-relaxed"
              variants={fadeInUp}
            >
              Let's discuss how our expert team can help transform your business and achieve your digital marketing goals.
            </motion.p>

            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center"
              variants={fadeInUp}
            >
              <Link 
                href="https://wa.me/97459990137?text=Hi! I'd like to learn more about working with your team."
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