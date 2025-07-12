import Image from "next/image";
import { commonStyles } from "../lib/design-system";
import { motion } from "motion/react"

const expertiseData = [
  {
    icon: "/assets/images/web-development-icon.svg",
    title: "Web and Software Development",
    description:
      "Help your website and application bring you your ideal audience or client. We focus on building presentable, efficient and scalable software solutions that appeals to your needs to help you reach your ideal target audience in order to further your brand.",
  },
  {
    icon: "/assets/images/content-creation-icon.svg",
    title: "Content Creation",
    description:
      "With our team, you will be able to reach millions of audience in no time at all. We offer to help you in your content creation journey from scratch and equip you with all out of the box and innovative industry crushing techniques.",
  },
  {
    icon: "/assets/images/social-media-icon.svg",
    title: "Social Media Management",
    description:
      "We use our specialty in organic content creation to take your brand awareness to heights never seen before. We specialize in creating content that is specifically crafted to appeal to your target demographic depending on their age, interest, hobbies, sense of humor, pop culture and more.",
  },
  {
    icon: "/assets/images/ppc-marketing-icon.svg",
    title: "PPC and Social Media Marketing",
    description:
      "We aim to bring you immediate traffic and results through targeted ads on various social media platforms. Our data driven strategies ensure a high ROI by focusing on the right audience and ad placements. We help you build a strong presence through these targeted ads on Instagram, Facebook, LinkedIn and MORE.",
  },
];

const cardVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1 },
  hover: { scale: 1.05 },
};

const ExpertiseSection = () => {
  return (
    <section id="services" className={`${commonStyles.sectionDark} relative overflow-hidden`}>
      {/* Gradient Backgrounds */}
      <div
        className="absolute w-[400px] md:w-[600px] lg:w-[800px] h-[400px] md:h-[600px] lg:h-[800px] top-[100px] left-[-100px] md:left-[-150px] lg:left-[-200px] bg-radial-gradient-blue opacity-20 rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(4, 228, 255, 0.8) 0%, rgba(4, 228, 255, 0) 70%)",
        }}
      ></div>
      <div
        className="absolute w-[500px] md:w-[700px] lg:w-[900px] h-[500px] md:h-[700px] lg:h-[900px] top-[400px] left-[20%] bg-radial-gradient-purple opacity-50 rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(136, 66, 220, 0.9) 0%, rgba(136, 66, 220, 0) 70%)",
        }}
      ></div>
      <div
        className="absolute w-[400px] md:w-[600px] lg:w-[800px] h-[600px] md:h-[900px] lg:h-[1200px] top-[200px] right-[-100px] md:right-[-150px] lg:right-[-200px] bg-radial-gradient-blue-right opacity-30 rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(4, 228, 255, 0.8) 0%, rgba(4, 228, 255, 0) 60%)",
        }}
      ></div>

      <div className={`${commonStyles.container} relative z-10`}>
        <div className="grid lg:grid-cols-12 gap-8 items-center">
          {/* Left Column: Text Content & Image */}
          <div className="lg:col-span-5">
            <p className="text-[#04E4FF] text-xl font-bold tracking-wider uppercase mb-6">
              WHY ONZUR MEDIA STUDIO?
            </p>
            <h2 className={`${commonStyles.heading2} text-white mb-6 leading-tight`}>
              Main Services with Descriptions
            </h2>
            <p className={`${commonStyles.bodyLarge} text-white/90 mb-10 leading-relaxed`}>
              As a creative team based in Qatar, we specialize in video production,
              editing, and digital storytelling for businesses, scholars, and organizations.
              From viral TikTok content to professional web development - we deliver results.
            </p>
            <div className="relative w-full aspect-[778/549] max-w-xl mx-auto lg:mx-0 mb-10 lg:mb-0">
              <Image
                src="/assets/images/explore-web-design-services.png"
                alt="Explore Our Web Design Services"
                fill
                style={{ objectFit: "contain" }}
              />
            </div>
          </div>

          {/* Right Column: Expertise Cards */}
          <div className="lg:col-span-7 grid md:grid-cols-2 gap-8">
            {expertiseData.map((item, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                whileHover="hover"
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={commonStyles.cardGlass}
              >
                <div className="w-16 h-16 mb-6 relative">
                  <div className="w-full h-full bg-gradient-to-r from-[#00B9FF] to-[#04E4FF] rounded-lg flex items-center justify-center">
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2L2 7V10C2 16 6 20.5 12 22C18 20.5 22 16 22 10V7L12 2Z" />
                    </svg>
                  </div>
                </div>
                <h3 className={`${commonStyles.heading3} text-white mb-4`}>
                  {item.title}
                </h3>
                <p className={`${commonStyles.bodyBase} text-white/80 leading-relaxed`}>
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExpertiseSection;