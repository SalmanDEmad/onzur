"use client";

import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { fadeInUp, fadeInLeft, fadeInRight, staggerContainer, viewport } from "../../lib/animation-variants";
import { commonStyles } from "../../lib/design-system";
import { 
  Code, 
  Camera, 
  Share2, 
  TrendingUp, 
  CheckCircle, 
  ArrowRight, 
  Zap, 
  Target, 
  BarChart3,
  Users,
  Globe,
  Smartphone,
  Monitor,
  Video,
  Megaphone,
  Star
} from "lucide-react";

const servicesData = [
  {
    id: "web-development",
    icon: Code,
    title: "Web & Software Development",
    subtitle: "Lead-Generating Digital Solutions",
    description: "Transform your online presence into a powerful lead-generating machine. Our custom websites and applications don't just look stunning—they convert visitors into customers and scale with your business growth.",
    features: [
      "Custom Website Development",
      "E-commerce Solutions", 
      "Mobile-Responsive Design",
      "SEO-Optimized Architecture",
      "Lead Generation Systems",
      "Performance Optimization",
      "Content Management Systems",
      "API Integration & Development"
    ],
    technologies: ["Next.js", "React", "Node.js", "WordPress", "Shopify", "Custom CMS"],
    caseStudy: {
      client: "Megabyte Store",
      result: "40-50 daily leads generated",
      metric: "300% increase in online conversions"
    },
    pricing: {
      basic: "QAR 3,500",
      premium: "QAR 8,500",
      enterprise: "Custom Quote"
    }
  },
  {
    id: "content-creation",
    icon: Camera,
    title: "Viral Content Creation",
    subtitle: "From Zero to Millions of Views",
    description: "From zero to millions of views—we've done it before, we'll do it for you. Our content strategies have generated 8M+ TikTok views and built massive followings for brands across Qatar.",
    features: [
      "Viral Video Production",
      "Professional Photography",
      "Social Media Content",
      "Brand Storytelling",
      "Product Showcases",
      "Behind-the-Scenes Content",
      "Influencer-Style Content",
      "Platform-Specific Optimization"
    ],
    technologies: ["4K Video Production", "Professional Lighting", "Drone Photography", "Motion Graphics"],
    caseStudy: {
      client: "Islamic Scholars Project",
      result: "4M+ TikTok views in 2 months",
      metric: "80K followers gained"
    },
    pricing: {
      basic: "QAR 2,500",
      premium: "QAR 6,000",
      enterprise: "Custom Package"
    }
  },
  {
    id: "social-media",
    icon: Share2,
    title: "Social Media Domination",
    subtitle: "24/7 Customer Acquisition Engine",
    description: "Stop posting into the void. Our organic content strategies turn your social media into a powerful customer acquisition engine that works 24/7 to grow your brand and drive sales.",
    features: [
      "Organic Content Strategy",
      "Community Management",
      "Hashtag Research & Optimization",
      "Engagement Growth",
      "Brand Voice Development",
      "Content Calendar Management",
      "Analytics & Reporting",
      "Cross-Platform Coordination"
    ],
    technologies: ["TikTok", "Instagram", "LinkedIn", "Facebook", "Twitter", "YouTube"],
    caseStudy: {
      client: "Spice Fusion Restaurant",
      result: "Successful platform integration",
      metric: "Increased online visibility"
    },
    pricing: {
      basic: "QAR 1,500/month",
      premium: "QAR 3,500/month",
      enterprise: "QAR 6,500/month"
    }
  },
  {
    id: "paid-advertising",
    icon: TrendingUp,
    title: "High-ROI Paid Advertising",
    subtitle: "Immediate Results That Work",
    description: "Get immediate results with ads that actually work. Our data-driven campaigns on Instagram, Facebook, LinkedIn, and TikTok consistently deliver 40+ daily leads and maximize your advertising spend.",
    features: [
      "PPC Campaign Management",
      "Social Media Advertising",
      "Google Ads Optimization",
      "Retargeting Campaigns",
      "Lead Generation Funnels",
      "A/B Testing & Optimization",
      "ROI Tracking & Analytics",
      "Budget Optimization"
    ],
    technologies: ["Google Ads", "Facebook Ads", "Instagram Ads", "TikTok Ads", "LinkedIn Ads"],
    caseStudy: {
      client: "Megabyte Store",
      result: "40-50 daily leads",
      metric: "800K+ ad-driven views"
    },
    pricing: {
      basic: "QAR 2,000/month + ad spend",
      premium: "QAR 4,500/month + ad spend",
      enterprise: "Custom Strategy + ad spend"
    }
  }
];

const processSteps = [
  {
    step: "01",
    title: "Discovery & Strategy",
    description: "We analyze your business, target audience, and competition to create a winning strategy.",
    icon: Target
  },
  {
    step: "02", 
    title: "Creative Development",
    description: "Our team crafts compelling content and campaigns tailored to your brand voice.",
    icon: Zap
  },
  {
    step: "03",
    title: "Implementation & Launch",
    description: "We execute your campaigns across all relevant platforms with precision timing.",
    icon: Globe
  },
  {
    step: "04",
    title: "Optimization & Growth",
    description: "Continuous monitoring and optimization to maximize your ROI and growth.",
    icon: BarChart3
  }
];

export default function ServicesPage() {
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
              <Star className="w-5 h-5 text-[#04E4FF] mr-2" />
              <span className="text-[#04E4FF] font-semibold">Qatar's Leading Digital Marketing Agency</span>
            </motion.div>

            <motion.h1 
              className={`${commonStyles.heading1} text-white mb-6`}
              variants={fadeInUp}
            >
              Services That Drive Real{" "}
              <span className={commonStyles.gradientText}>Growth</span>
            </motion.h1>

            <motion.p 
              className="text-xl text-white/80 mb-10 max-w-3xl mx-auto leading-relaxed"
              variants={fadeInUp}
            >
              From viral content creation to high-converting websites, we offer comprehensive digital marketing solutions that have generated millions of views and countless leads for businesses across Qatar and beyond.
            </motion.p>

            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center"
              variants={fadeInUp}
            >
              <Link 
                href="https://wa.me/97459990137?text=Hi! I'd like to get a strategy session with Onzur Media Studio."
                className={`${commonStyles.buttonPrimary}`}
              >
                Get Your Strategy Session
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link 
                href="#services-overview"
                className={`${commonStyles.buttonSecondary}`}
              >
                Explore Our Services
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Services Overview */}
      <section id="services-overview" className="py-20 relative">
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
              Our Core Services
            </motion.h2>
            <motion.p 
              className="text-lg text-white/70 max-w-2xl mx-auto"
              variants={fadeInUp}
            >
              Everything you need to dominate your market and grow your business online
            </motion.p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {servicesData.map((service, index) => (
              <motion.div
                key={service.id}
                className={`${commonStyles.cardGlass} group cursor-pointer`}
                initial="hidden"
                whileInView="visible"
                viewport={viewport}
                variants={fadeInUp}
                whileHover={{ y: -5, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-[#00B9FF] to-[#04E4FF] rounded-xl flex items-center justify-center mr-4">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className={`${commonStyles.heading3} text-white mb-1`}>
                      {service.title}
                    </h3>
                    <p className="text-[#04E4FF] font-medium">{service.subtitle}</p>
                  </div>
                </div>

                <p className="text-white/80 mb-6 leading-relaxed">
                  {service.description}
                </p>

                <div className="grid md:grid-cols-2 gap-4 mb-6">
                  {service.features.slice(0, 6).map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-[#04E4FF] mr-2 flex-shrink-0" />
                      <span className="text-white/70 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="border-t border-white/10 pt-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-white/60 text-sm mb-1">Case Study: {service.caseStudy.client}</p>
                      <p className="text-[#04E4FF] font-semibold">{service.caseStudy.result}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-white/60 text-sm mb-1">Starting from</p>
                      <p className="text-white font-bold text-lg">{service.pricing.basic}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 relative">
        {/* Background gradient */}
        <div className="absolute inset-0">
          <div className="absolute w-[800px] h-[800px] top-0 left-1/2 transform -translate-x-1/2 bg-gradient-radial from-[#04E4FF]/10 to-transparent rounded-full blur-3xl"></div>
        </div>

        <div className={`${commonStyles.container} relative z-10`}>
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
              Our Proven Process
            </motion.h2>
            <motion.p 
              className="text-lg text-white/70 max-w-2xl mx-auto"
              variants={fadeInUp}
            >
              How we transform your business with data-driven strategies and creative excellence
            </motion.p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                className="text-center group"
                initial="hidden"
                whileInView="visible"
                viewport={viewport}
                variants={fadeInUp}
                custom={index}
              >
                <div className="relative mb-6">
                  <div className="w-20 h-20 bg-gradient-to-r from-[#00B9FF] to-[#04E4FF] rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                    <step.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-[#9536E5] rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-sm">{step.step}</span>
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{step.title}</h3>
                <p className="text-white/70 leading-relaxed">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
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
              Transparent Pricing
            </motion.h2>
            <motion.p 
              className="text-lg text-white/70 max-w-2xl mx-auto"
              variants={fadeInUp}
            >
              Choose the perfect package for your business needs. All plans include our proven strategies and dedicated support.
            </motion.p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {servicesData.map((service, index) => (
              <motion.div
                key={service.id}
                className={`${commonStyles.cardGlass} text-center`}
                initial="hidden"
                whileInView="visible"
                viewport={viewport}
                variants={fadeInUp}
                custom={index}
              >
                <service.icon className="w-12 h-12 text-[#04E4FF] mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">{service.title}</h3>
                <div className="border-t border-white/10 pt-6 mt-6">
                  <div className="space-y-3">
                    <div>
                      <p className="text-white/60 text-sm">Basic</p>
                      <p className="text-white font-bold">{service.pricing.basic}</p>
                    </div>
                    <div>
                      <p className="text-white/60 text-sm">Premium</p>
                      <p className="text-[#04E4FF] font-bold">{service.pricing.premium}</p>
                    </div>
                    <div>
                      <p className="text-white/60 text-sm">Enterprise</p>
                      <p className="text-white font-bold">{service.pricing.enterprise}</p>
                    </div>
                  </div>
                </div>
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
              Ready to Transform Your Business?
            </motion.h2>
            <motion.p 
              className="text-xl text-white/80 mb-10 leading-relaxed"
              variants={fadeInUp}
            >
              Join our successful clients who have achieved millions of views, thousands of followers, and consistent lead generation. Let's discuss how we can help your business grow.
            </motion.p>

            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center"
              variants={fadeInUp}
            >
              <Link 
                href="https://wa.me/97459990137?text=Hi! I'd like to get a quote for your services."
                className={`${commonStyles.buttonPrimary} text-lg px-10 py-4`}
              >
                Get Your Free Quote
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link 
                href="tel:+97459990137"
                className={`${commonStyles.buttonSecondary} text-lg px-10 py-4`}
              >
                Call Now: +974 5999 0137
              </Link>
            </motion.div>

            <motion.div 
              className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto"
              variants={staggerContainer}
            >
              {[
                { number: "8M+", label: "TikTok Views Generated" },
                { number: "40-50", label: "Daily Leads" },
                { number: "80K+", label: "Followers Gained" },
                { number: "100%", label: "Client Satisfaction" }
              ].map((stat, index) => (
                <motion.div key={index} className="text-center" variants={fadeInUp}>
                  <p className="text-3xl font-bold text-[#04E4FF] mb-2">{stat.number}</p>
                  <p className="text-white/70 text-sm">{stat.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}