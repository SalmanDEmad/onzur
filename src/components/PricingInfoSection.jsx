"use client";

import Image from "next/image";
import Link from "next/link";

const infoBlocks = [
  {
    title: "Your choice of platform",
    description:
      "also plays a role in the cost. Templated solutions are more affordable while developing a fully custom site will increase the project's total expense.",
  },
  {
    title: "Custom graphic elements",
    description:
      "are essential for enhancing your web presence. However, the more complex the design requirements, the higher the overall cost.",
  },
  {
    title: "After launching",
    description:
      "your new website, the next step is to outperform competitors in search engine rankings and secure top positions in your industry.",
  },
  {
    title: "Our full-service",
    description:
      "web design company offers expertise to clients of all sizes. You can use our design cost calculator below for an estimate or schedule a free consultation with one of our experts to discuss your project's specifics.",
  },
];

const PricingInfoSection = () => {
  return (
    <section className="relative bg-[#00042A] text-white pt-20 md:pt-32 pb-16 md:pb-24">
      <div className="absolute inset-0 z-0">
        <Image
          src="/assets/images/custom-web-design-pricing-bg.png"
          alt="Abstract background with pricing information"
          fill
          style={{ objectFit: "cover" }}
          className="opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#00042A]/70 via-[#00042A] to-[#00042A]"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto mb-12 md:mb-16">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
            Custom Web Design Pricing For Each Client's Objectives
          </h2>
          <p className="text-lg sm:text-xl opacity-90 mb-4">
            Every website design project comes with unique challenges and
            specific requirements that influence its final cost. A simple
            project typically ranges from $25,000 to $30,000, while more complex
            endeavors can reach $50,000 to $60,000 or more.
          </p>
          <p className="text-lg sm:text-xl opacity-90">
            The technical setup of your website, which directly impacts its
            performance, is a key factor in determining cost. More complex
            setups that demand significant time and effort will naturally
            increase the overall price.
          </p>
        </div>

        <div className="text-center mb-12 md:mb-16">
          <Link
            href="/calculate-your-website" // Assuming a page for calculation
            className="inline-flex items-center justify-center text-lg sm:text-xl font-bold uppercase py-4 px-8 rounded-md group relative overflow-hidden transition-all duration-300 ease-in-out shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#00B9FF] focus:ring-offset-[#00042A] bg-gradient-to-r from-[#00B9FF] to-[#9536E5] hover:from-[#9536E5] hover:to-[#00B9FF]"
          >
            <span className="absolute -inset-0.5 bg-gradient-to-r from-[#00B9FF] to-[#9536E5] rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></span>
            <span className="relative z-10 text-white">
              Calculate your website
            </span>
            <div className="relative w-5 h-4 ml-3 z-10">
              <Image
                src="/assets/images/arrow-right-long-white.svg"
                alt="Arrow right"
                fill
                style={{ objectFit: "contain" }}
              />
            </div>
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/10 rounded-lg overflow-hidden shadow-xl">
          {infoBlocks.map((block, index) => (
            <div
              key={index}
              className="bg-[#0A194E]/80 p-6 sm:p-8 backdrop-blur-sm h-full flex flex-col text-center hover:bg-[#132761]/90 transition-colors duration-300"
            >
              <h3 className="text-2xl sm:text-3xl font-bold mb-4">
                {block.title}
              </h3>
              <p className="text-base sm:text-lg opacity-80 flex-grow">
                {block.description}
              </p>
            </div>
          ))}
        </div>
      </div>
      <style jsx global>{`
        .animate-tilt {
          animation: tilt 5s infinite linear;
        }
        @keyframes tilt {
          0%,
          100% {
            transform: rotate(0deg);
          }
          25% {
            transform: rotate(1deg);
          }
          75% {
            transform: rotate(-1deg);
          }
        }
      `}</style>
    </section>
  );
};

export default PricingInfoSection;
