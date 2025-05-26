import Image from "next/image";

const cmsData = [
  {
    name: "WordPress",
    logo: "/assets/images/wordpress-logo-placeholder.svg", // Combine background, icon-outer, icon-inner
    description:
      "At Digital Silk, we deliver high-performance, fully customized WordPress websites that align perfectly with your brand and business goals. Our experts create seamless, user-friendly experiences designed to drive engagement and conversions. With robust security measures and ongoing support, we ensure your WordPress site remains optimized, secure, and scalable as your business grows.",
    borderColor: "border-l-[#3B7BCE]", // Blue
  },
  {
    name: "Shopify",
    logo: "/assets/images/shopify-logo-placeholder.svg", // Combine background, icon-main, icon-s, icon-s-shadow
    description:
      "Our web design company excels in planning, developing, and scaling Shopify websites to drive growth. From concept to launch, our consultants guide you through every step, while our expert developers and designers transform your vision into a thriving e-store. We turn your ideas into a powerful online presence that fosters growth and success.",
    borderColor: "border-l-[#95BF47]", // Green
  },
  {
    name: "Magento",
    logo: "/assets/images/magento-logo-placeholder.svg", // Combine background, icon-top, icon-bottom
    description:
      "As a top-rated Magento web development and design company, we create premium online stores that attract organic traffic, deliver exceptional user experiences, and significantly boost your revenue. Our expertise ensures your Magento site stands out and performs at its best, driving growth and success for your business.",
    borderColor: "border-l-[#F26322]", // Orange
  },
];

const CmsPlatformsSection = () => {
  return (
    <section className="bg-gradient-to-b from-[#41B5FF]/30 via-[#41B5FF]/10 to-transparent py-16 md:py-24 text-[#1B2C5C]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Column: Title and Text */}
          <div className="lg:col-span-5 space-y-6">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold">
              CMS Platform Tailored For Client Needs
            </h2>
            <p className="text-lg sm:text-xl leading-relaxed">
              No matter which Content Management System (CMS) your website
              utilizes, our experts are here to help. We tailor our services to
              meet your specific needs, ensuring your CMS is optimized for
              performance, flexibility, and ease of use.
            </p>
            <div className="hidden lg:block pt-8">
              <Image
                src="/assets/images/cms-platforms-main-image.png"
                alt="CMS Platforms collage"
                width={878}
                height={450}
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>

          {/* Right Column: CMS Cards */}
          <div className="lg:col-span-7 space-y-10">
            {cmsData.map((cms) => (
              <div
                key={cms.name}
                className={`bg-white p-6 sm:p-8 rounded-lg shadow-xl border-l-8 ${cms.borderColor} flex flex-col md:flex-row items-start md:items-center gap-6`}
              >
                <div className="flex-shrink-0 w-24 h-24 sm:w-32 sm:h-32 relative mb-4 md:mb-0 md:mr-6">
                  <Image
                    src={cms.logo}
                    alt={`${cms.name} logo`}
                    fill
                    style={{ objectFit: "contain" }}
                  />
                </div>
                <div>
                  <h3 className="text-2xl sm:text-3xl font-bold mb-2">
                    {cms.name}
                  </h3>
                  <p className="text-base sm:text-lg leading-relaxed">
                    {cms.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
          {/* Image for mobile/tablet, hidden on large screens */}
          <div className="lg:hidden lg:col-span-5 pt-8">
            <Image
              src="/assets/images/cms-platforms-main-image.png"
              alt="CMS Platforms collage"
              width={878}
              height={450}
              className="rounded-lg shadow-xl mx-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CmsPlatformsSection;

/*
  Placeholder SVGs needed in public/assets/images:
  - wordpress-logo-placeholder.svg (combine wordpress-logo-background.svg, wordpress-logo-icon-outer.svg, wordpress-logo-icon-inner.svg)
  - shopify-logo-placeholder.svg (combine shopify-logo-background.svg, shopify-logo-icon-main.svg, shopify-logo-icon-s.svg, shopify-logo-icon-s-shadow.svg)
  - magento-logo-placeholder.svg (combine magento-logo-background.svg, magento-logo-icon-top.svg, magento-logo-icon-bottom.svg)
*/
