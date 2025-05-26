import Image from "next/image";

const reasons = [
  {
    title: "Have A Clear Web Strategy",
    description:
      "Before launching your digital presence, having a well-defined plan is crucial. Our experts conduct thorough research on your industry, competitors, and target market to develop a tailored digital strategy that aligns with your goals. This strategic approach ensures a strong foundation for your website's success.",
    gradientClass: "bg-gradient-to-r from-[#00B9FF] to-[#625EEE]",
  },
  {
    title: "Build A Strong Online Presence",
    description:
      "Establishing a strong and professional online presence positions you as a leader in your industry. We've successfully guided numerous clients in building their online authority and are ready to help you achieve the same.",
    gradientClass: "bg-gradient-to-r from-[#625EEE] to-[#9536E5]",
  },
  {
    title: "Boost Conversion Rates With User-Centric Design",
    description:
      "Our expert website designers focus on optimizing your website for an exceptional user experience, transforming visitors into loyal customers. We ensure your site is designed to engage and convert, driving higher conversion rates.",
    gradientClass: "bg-gradient-to-r from-[#00B9FF] to-[#625EEE]",
  },
  {
    title: "Increase User Engagement",
    description:
      "Professional website design keeps visitors on your site longer, reducing bounce rates. Our designers create intuitive, easy-to-navigate websites that enhance user engagement and improve conversion rates.",
    gradientClass: "bg-gradient-to-r from-[#625EEE] to-[#9536E5]",
  },
  {
    title: "Create A Custom eCommerce Design for Better Performance",
    description:
      "Our award-winning designers craft e-Stores with user interfaces that captivate your customers and maximize your revenue. We ensure your online store not only attracts but retains customers effectively.",
    gradientClass: "bg-gradient-to-r from-[#00B9FF] to-[#625EEE]",
  },
  {
    title: "Optimize For Search Engines",
    description:
      "We implement proven SEO strategies to enhance your website's search engine ranking and drive organic traffic, helping you reach a broader audience.",
    gradientClass: "bg-gradient-to-r from-[#625EEE] to-[#9536E5]",
  },
  {
    title: "Improve Your Load Times And Retain More Visitors",
    description:
      "Our experts optimize your website's load times, ensuring fast performance that keeps visitors engaged and boosts your conversion rates.",
    // No gradientClass for this one as per Figma structure (it's a pair with the next one)
  },
  {
    title: "Receive Ongoing Support And Maintenance",
    description:
      "With professional website design services, you benefit from continuous support and maintenance. Our team is committed to ensuring your website remains optimized and performs at its best long after launch.",
    // No gradientClass for this one as per Figma structure
  },
];

export default function WhyChooseUsSection() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-left mb-12 md:mb-16 max-w-3xl">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1B2C5C]">
            Why Choose Professional Web Design Company?
          </h2>
        </div>

        <div className="grid md:grid-cols-12 gap-8 items-start">
          {/* Left Column: Reasons List */}
          <div className="md:col-span-7 space-y-10">
            {reasons.map((reason, index) => (
              <div key={index}>
                <h3 className="text-2xl md:text-3xl font-bold text-[#1B2C5C] mb-3">
                  {reason.title}
                </h3>
                <p className="text-gray-600 text-lg leading-relaxed mb-4">
                  {reason.description}
                </p>
                {reason.gradientClass && (
                  <div className={`h-0.5 w-full ${reason.gradientClass}`}></div>
                )}
              </div>
            ))}
          </div>

          {/* Right Column: Image */}
          <div className="md:col-span-5 md:sticky md:top-28 mt-10 md:mt-0">
            <div className="relative aspect-[666/320]">
              {" "}
              {/* Adjusted aspect ratio based on image dimensions in figma */}
              <Image
                src="/assets/images/why-choose-us-image.png"
                alt="Abstract design elements illustrating web design benefits"
                layout="fill"
                objectFit="contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
