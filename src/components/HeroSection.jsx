"use client";

import Image from "next/image";

const HeroSection = () => {
  const clientLogos = [
    { src: "/assets/images/xerox-logo.png", alt: "Xerox" },
    { src: "/assets/images/sony-logo.png", alt: "Sony" },
    { src: "/assets/images/pg-logo.png", alt: "P&G" },
    { src: "/assets/images/nyc-logo.png", alt: "NYC" },
    { src: "/assets/images/nfl-logo.png", alt: "NFL" },
    { src: "/assets/images/microsoftteams-logo.png", alt: "Microsoft Teams" },
    { src: "/assets/images/mcds-logo.png", alt: "McDonald's" },
    { src: "/assets/images/grenco-logo.png", alt: "Grenco Science" },
    { src: "/assets/images/g2-logo.png", alt: "G2" },
    { src: "/assets/images/enchant-logo.png", alt: "Enchant" },
    { src: "/assets/images/bru-logo.png", alt: "Bru" },
  ];

  // Duplicate for seamless scroll
  const duplicatedLogos = [...clientLogos, ...clientLogos];

  const backgroundImages = [
    {
      src: "/assets/images/hero-bg-1.png",
      className: "absolute top-[-153px] left-[576px] w-[653px] h-[471px] z-0",
    },
    {
      src: "/assets/images/hero-bg-2.png",
      className: "absolute top-[178px] left-[487px] w-[653px] h-[471px] z-0",
    },
    {
      src: "/assets/images/hero-bg-3.png",
      className: "absolute top-[509px] left-[399px] w-[653px] h-[471px] z-0",
    },
    {
      src: "/assets/images/hero-bg-4.png",
      className: "absolute top-[839px] left-[310px] w-[653px] h-[471px] z-0",
    },
    {
      src: "/assets/images/hero-bg-8.png",
      className: "absolute top-[2px] left-[1155px] w-[653px] h-[471px] z-0",
    },
    {
      src: "/assets/images/hero-bg-9.png",
      className: "absolute top-[333px] left-[1066px] w-[653px] h-[471px] z-0",
    },
    {
      src: "/assets/images/hero-bg-10.png",
      className: "absolute top-[664px] left-[978px] w-[653px] h-[471px] z-0",
    },
    {
      src: "/assets/images/hero-bg-11.png",
      className: "absolute top-[995px] left-[889px] w-[653px] h-[471px] z-0",
    },
    {
      src: "/assets/images/hero-bg-13.png",
      className: "absolute top-[157px] left-[1734px] w-[653px] h-[471px] z-0",
    },
    {
      src: "/assets/images/hero-bg-14.png",
      className: "absolute top-[488px] left-[1645px] w-[653px] h-[471px] z-0",
    },
    {
      src: "/assets/images/hero-bg-15.png",
      className: "absolute top-[819px] left-[1557px] w-[653px] h-[471px] z-0",
    },
  ];

  return (
    <section className="bg-[#00042A] text-white overflow-hidden">
      {/* Main Hero Content */}
      <div className="relative container mx-auto px-4 max-w-7xl flex flex-col items-center justify-center min-h-[535px] pt-20 pb-10 z-10">
        {/* Background Images - positioned absolutely within the relative parent */}
        <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
          {backgroundImages.map((img, index) => (
            <div key={index} className={img.className}>
              <Image
                src={img.src}
                alt={`Hero Background Image ${index + 1}`}
                layout="fill"
                objectFit="contain"
              />
            </div>
          ))}
          {/* Gradient overlay for background images */}
          <div className="absolute inset-0 w-full h-[112px] bg-gradient-to-b from-[#00042A]/50 via-[#00042A]/30 to-transparent z-10" />
          <div className="absolute bottom-0 inset-x-0 w-full h-[112px] bg-gradient-to-t from-[#00042A]/60 to-transparent z-10" />

          {/* Purple glow effect */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[768px] h-[324px]">
            <div
              className="w-full h-full bg-[#24004F] opacity-[0.9] blur-[250px] rounded-[273px]"
              style={{ boxShadow: "0px 0px 250px 400px rgba(36, 0, 78, 1)" }}
            />
          </div>
        </div>

        <div className="relative z-20 flex flex-col items-start text-left w-full max-w-3xl">
          <p className="text-[26px] font-medium uppercase tracking-[10%] mb-4">
            Premium Web Design Agency
          </p>
          <h1 className="text-[70px] sm:text-[80px] md:text-[100px] font-bold uppercase leading-[0.9] mb-8">
            We Grow
            <br />
            Brands Online
          </h1>
          <p className="text-xl sm:text-2xl md:text-[24px] font-normal leading-normal mb-10 max-w-xl">
            Custom Websites, Branding & Digital Marketing
          </p>

          <button className="relative group bg-transparent text-white text-lg sm:text-xl font-bold uppercase tracking-wider py-4 px-8 rounded-full overflow-hidden border-2 border-transparent hover:border-white/0 transition-all duration-300">
            <span className="absolute inset-[-1px] -z-10">
              <span className="absolute inset-0 bg-gradient-to-r from-[#00B9FF] to-[#9536E5] blur-[9px] rounded-full" />
              <span className="absolute inset-0 bg-white rounded-full" />
            </span>
            <span className="relative z-10 flex items-center justify-center">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#00B9FF] to-[#9536E5] group-hover:text-white transition-colors duration-300">
                Request a Quote
              </span>
              <Image
                src="/assets/images/request-quote-arrow.svg"
                alt="Arrow"
                width={15}
                height={16}
                className="ml-2 transform transition-transform duration-300 group-hover:translate-x-1"
              />
            </span>
          </button>

          <div className="mt-16 flex flex-col sm:flex-row items-start sm:items-center gap-8">
            <div className="flex items-center">
              <Image
                src="/assets/images/designrush-logo.png"
                alt="DesignRush Logo"
                width={35}
                height={48}
                className="mr-3"
              />
              <div>
                <p className="text-lg sm:text-xl font-medium">
                  5 Star DesignRush Reviews
                </p>
                <Image
                  src="/assets/images/stars.svg"
                  alt="5 Stars"
                  width={140}
                  height={26}
                />
              </div>
            </div>
            <div className="hidden sm:block w-px h-[63px] bg-gradient-to-b from-white/0 via-white/100 to-white/0 mx-4" />
            <div className="flex items-center">
              <div className="w-[112px] h-[30px] mr-3 relative">
                <Image
                  src="/assets/images/forbes-logo-vector.svg"
                  alt="Forbes Logo Path"
                  layout="fill"
                  objectFit="contain"
                  className="opacity-0"
                />
                <Image
                  src="/assets/images/forbes-logo-group.svg"
                  alt="Forbes Logo"
                  layout="fill"
                  objectFit="contain"
                />
              </div>
              <p className="text-lg sm:text-xl font-medium">
                Best Digital Agency of 2024
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Client Logos Marquee */}
      <div className="relative w-full h-[100px] bg-[#03042A] flex items-center overflow-hidden mt-[-1px] z-20">
        <div className="animate-marquee-infinite flex items-center">
          {duplicatedLogos.map((logo, index) => (
            <div
              key={`logo-${index}`}
              className="mx-12 flex-shrink-0 h-[55px] flex items-center justify-center"
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                height={
                  logo.alt === "NFL" ||
                  logo.alt === "McDonald's" ||
                  logo.alt === "G2"
                    ? 55
                    : 25
                } // Adjust height for specific logos
                width={
                  logo.alt === "NFL"
                    ? 42
                    : logo.alt === "Enchant" || logo.alt === "Bru"
                    ? 130
                    : 100
                } // Adjust width
                objectFit="contain"
              />
            </div>
          ))}
        </div>
      </div>
      <style jsx>{`
        @keyframes marquee-scroll {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-marquee-infinite {
          animation: marquee-scroll 40s linear infinite;
          display: flex;
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
