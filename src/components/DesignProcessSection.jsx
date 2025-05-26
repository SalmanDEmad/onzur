"use client";
import Image from "next/image";

const processSteps = [
  {
    number: "01",
    title: "Web Strategy",
    image: "/assets/images/process-step1-web-strategy.png",
    description:
      "We use in-depth research and analysis as key pillars to build a step-by-step plan that expands your digital presence and drives online growth.",
    bullets: [
      "Identify your target audiences",
      "Analyze user pain-points & define your UVPs",
      "Define key performance indicators (KPIs)",
      "Create a roadmap to growing your brand online",
    ],
    phaseTitle: "In this phase, we:",
  },
  {
    number: "02",
    title: "Planning & Information Architecture",
    image: "/assets/images/process-step2-planning-architecture.png",
    description:
      "We utilize proven techniques to map your content, meet user intentions and create an engaging user experience. By outlining your site's structure, we ensure seamless user journeys to key conversion points.",
    bullets: [
      "We develop a base-level user flow & sitemap",
      "We utilize wireframing to create a seamless conversion funnel",
      "We add on-brand, consistent messaging to your structure",
    ],
    phaseTitle: "Here's how our team does it:",
  },
  {
    number: "03",
    title: "Creative Design",
    image: "/assets/images/process-step3-creative-design.png",
    description:
      "This stage is where you will see your site come to life. Our award-winning designers implement your unique branding elements to add your identity to your custom web design in NYC.",
    bullets: [
      "Thoughtfully place design features to guide to the user journey",
      "Utilize interactive videos & animations",
      "Create custom, branded illustrations",
      "Ensure accessibility & search engine optimization",
    ],
    phaseTitle:
      "With just 50 milliseconds to make a good first impression, your website needs to stand out. To achieve this, we:",
  },
  {
    number: "04",
    title: "Responsive Development",
    image: "/assets/images/process-step4-responsive-development.png",
    description:
      "A responsive website is fast, accessible and easy to navigate. It automatically scales to various screen sizes and devices, driving user experience and climbing search engine rankings.",
    bullets: [
      "Gather touchpoint & user-channel insights",
      "Transform your wireframes into a flexible UI",
      "Test across devices before approval & launch",
    ],
    phaseTitle: "To ensure your website reaches and satisfies every user, we:",
  },
  {
    number: "05",
    title: "Quality Assurance (QA)",
    image: "/assets/images/process-step5-quality-assurance.png",
    description:
      "At Digital Silk, we pride ourselves on delivering measurable results and professional outcomes. By following a strict quality assurance (QA) protocol, we guarantee a high-quality digital experience for your brand.",
    bullets: [
      "Actively involve our clients throughout every project",
      "Meticulously test all designs to catch errors",
      "Use tried-and-tested tools to secure before launch",
    ],
    phaseTitle: "To achieve this, we:",
  },
  {
    number: "06",
    title: "Launch & Optimization",
    image: "/assets/images/process-step1-web-strategy.png", // Placeholder image, Figma shows no unique image for step 6
    description:
      "Our end-to-end website design services in New York cover both launch and post-launch support. We meticulously monitor, test and optimize your website elements to ensure every part of your site is functioning optimally.",
    bullets: [
      "Following a strict protocol for every website launch",
      "Offering post-launch maintenance & optimization",
      "Creating & implementing a digital marketing plan to drive awareness across touchpoints",
    ],
    phaseTitle: "Our design specialists make this happen by:",
  },
];

const DesignProcessSection = () => {
  return (
    <section className="bg-[#00031F] text-white py-16 md:py-24 relative overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-0 left-1/4 w-1/2 h-full transform -translate-x-1/2 opacity-40">
        <div className="w-full h-full bg-radial-gradient-purple blur-[150px]"></div>
      </div>
      <div className="absolute bottom-0 right-1/4 w-1/2 h-1/2 transform translate-x-1/2 opacity-40">
        <div className="w-full h-full bg-radial-gradient-blue blur-[150px]"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
            Website Design Process
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl max-w-3xl mx-auto opacity-90">
            Take a peek behind the curtain and explore the custom web design
            process our team follows. We build custom sites for brands of all
            sizes that deliver measurable results.
          </p>
        </div>

        <div
          className="flex overflow-x-auto space-x-8 pb-8 scrollbar-thin scrollbar-thumb-blue-500 scrollbar-track-gray-800/50"
          style={{ scrollSnapType: "x mandatory" }}
        >
          {processSteps.map((step, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-[90vw] sm:w-[70vw] md:w-[50vw] lg:w-[30rem] xl:w-[32rem] bg-gradient-to-br from-white/5 to-white/0 p-6 sm:p-8 rounded-xl shadow-2xl relative border border-white/20 backdrop-blur-sm"
              style={{ scrollSnapAlign: "start" }}
            >
              <div className="absolute top-0 left-0 w-full h-[5px] bg-gradient-to-r from-[#04E4FF] via-[#00B9FF] to-[#00B9FF]"></div>

              <div className="relative h-48 sm:h-56 mb-6 rounded-lg overflow-hidden border-2 border-[#04E4FF]/50 shadow-lg">
                <Image
                  src={step.image}
                  alt={step.title}
                  fill
                  style={{ objectFit: "cover" }}
                />
                <div className="absolute inset-0 bg-black/30"></div>
                <span className="absolute bottom-[-60px] right-[-20px] text-8xl sm:text-9xl font-black text-white/5 select-none">
                  {step.number}
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-[#04E4FF] to-[#00B9FF]">
                {step.title}
              </h3>
              <p className="text-sm sm:text-base opacity-80 mb-4 h-24 overflow-y-auto scrollbar-thin scrollbar-thumb-white/30 scrollbar-track-transparent pr-2">
                {step.description}
              </p>
              <p className="text-sm font-semibold opacity-90 mb-3">
                {step.phaseTitle}
              </p>
              <ul className="space-y-2 text-sm sm:text-base h-36 overflow-y-auto scrollbar-thin scrollbar-thumb-white/30 scrollbar-track-transparent pr-2">
                {step.bullets.map((bullet, i) => (
                  <li key={i} className="flex items-start">
                    <div className="w-5 h-5 relative mr-2 mt-1 flex-shrink-0">
                      <Image
                        src="/assets/images/process-checkmark-icon.svg"
                        alt="Checkmark"
                        fill
                        style={{ objectFit: "contain" }}
                      />
                    </div>
                    <span className="opacity-80">{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <style jsx global>{`
        .bg-radial-gradient-purple {
          background-image: radial-gradient(
            circle,
            rgba(149, 54, 229, 0.5) 0%,
            rgba(149, 54, 229, 0) 70%
          );
        }
        .bg-radial-gradient-blue {
          background-image: radial-gradient(
            circle,
            rgba(0, 185, 255, 0.4) 0%,
            rgba(0, 185, 255, 0) 70%
          );
        }
        .scrollbar-thin::-webkit-scrollbar {
          height: 8px; /* For horizontal scrollbar */
          width: 6px; /* For vertical scrollbar */
        }
        .scrollbar-thumb-blue-500::-webkit-scrollbar-thumb {
          background-color: #3b82f6; /* blue-500 */
          border-radius: 10px;
        }
        .scrollbar-track-gray-800\/50::-webkit-scrollbar-track {
          background-color: rgba(
            31,
            41,
            55,
            0.5
          ); /* gray-800 with 50% opacity */
        }
      `}</style>
    </section>
  );
};

export default DesignProcessSection;
