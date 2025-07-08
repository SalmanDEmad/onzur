import Image from "next/image";
import { commonStyles } from "../lib/design-system";

const expertiseData = [
  {
    icon: "/assets/images/placeholder-icon.svg", // Using generic placeholder icon
    title: "Web and Software Development",
    description:
      "Focus on presentable, scalable, and efficient solutions tailored to audience needs. We create custom websites and software that not only look professional but also perform optimally across all devices and platforms.",
  },
  {
    icon: "/assets/images/responsive-web-design-icon.svg", // Placeholder
    title: "Content Creation",
    description:
      "Support from ideation to execution with innovative strategies. Our creative team helps bring your vision to life through compelling video production, editing, and digital storytelling that resonates with your target audience.",
  },
  {
    icon: "/assets/images/website-redesign-icon.svg", // Placeholder
    title: "Social Media Management",
    description:
      "Craft content customized to the target demographic based on cultural and behavioral cues. We understand the nuances of different platforms and create content that drives engagement and builds meaningful connections with your audience.",
  },
  {
    icon: "/assets/images/ux-ui-web-design-icon.svg", // Placeholder
    title: "PPC and Social Media Marketing",
    description:
      "Use data-driven strategies on platforms like Instagram, Facebook, LinkedIn to deliver immediate results. Our targeted campaigns are designed to maximize ROI and drive measurable growth for your business.",
  },
];

const ExpertiseSection = () => {
  return (
    <section id="services" className={`${commonStyles.sectionDark} relative overflow-hidden`}>
      {/* Gradient Backgrounds */}
      <div
        className="absolute w-[960px] h-[960px] top-[217px] left-[-384px] bg-radial-gradient-blue opacity-20 rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(4, 228, 255, 0.8) 0%, rgba(4, 228, 255, 0) 70%)",
        }}
      ></div>
      <div
        className="absolute w-[1344px] h-[1344px] top-[735px] left-[460px] bg-radial-gradient-purple opacity-50 rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(136, 66, 220, 0.9) 0%, rgba(136, 66, 220, 0) 70%)",
        }}
      ></div>
      <div
        className="absolute w-[960px] h-[1536px] top-[294px] right-[-480px] bg-radial-gradient-blue-right opacity-30 rounded-full"
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
              Our Creative Services for Your Digital Success
            </h2>
            <p className={`${commonStyles.bodyLarge} text-white/90 mb-10 leading-relaxed`}>
              As a creative team based in Qatar, we specialize in video production, 
              editing, and digital storytelling for businesses, scholars, and organizations. 
              Our comprehensive services help you connect with your audience and achieve 
              your digital goals.
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
              <div
                key={index}
                className={commonStyles.cardGlass}
              >
                <div className="w-16 h-16 mb-6 relative">
                  <div className="w-full h-full bg-gradient-to-r from-[#00B9FF] to-[#04E4FF] rounded-lg flex items-center justify-center">
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2L2 7V10C2 16 6 20.5 12 22C18 20.5 22 16 22 10V7L12 2Z"/>
                    </svg>
                  </div>
                </div>
                <h3 className={`${commonStyles.heading3} text-white mb-4`}>
                  {item.title}
                </h3>
                <p className={`${commonStyles.bodyBase} text-white/80 leading-relaxed`}>
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExpertiseSection;
