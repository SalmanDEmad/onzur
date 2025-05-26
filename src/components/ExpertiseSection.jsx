import Image from "next/image";

const expertiseData = [
  {
    icon: "/assets/images/placeholder-icon.svg", // Using generic placeholder icon
    title: "Custom Web Design",
    description:
      "Each website we create is meticulously crafted to deliver a 100% unique online experience tailored to your brand. Our expert designers transform your vision into a dynamic, custom design that enhances your brand's visibility, boosts engagement, and drives conversions. With us, your website will not only stand out but also connect deeply with your audience.",
  },
  {
    icon: "/assets/images/responsive-web-design-icon.svg", // Placeholder
    title: "Responsive Web Design",
    description:
      "We deliver seamless user experiences across all devices. Our responsive designs adapt flawlessly to any screen size, ensuring that your website not only meets but exceeds user expectations. From planning to design and development, we ensure a consistent, engaging experience for every visitor, no matter how they access your site.",
  },
  {
    icon: "/assets/images/website-redesign-icon.svg", // Placeholder
    title: "Website Redesign",
    description:
      "Whether you need a design refresh or a complete website overhaul, we analyze your site's pain points and opportunities to revitalize your digital presence. Our award-winning web designers will breathe new life into your website, enhancing its functionality, user experience, and aesthetic appeal. The result? A modern, dynamic site that drives increased traffic and bolsters your industry reputation.",
  },
  {
    icon: "/assets/images/ux-ui-web-design-icon.svg", // Placeholder
    title: "UX/UI Web Design",
    description:
      "Our award-winning designers use trusted methods and innovative approaches to create engaging visual experiences and seamless user journeys. Whether you're looking to build a custom UX/UI or redesign your current one, we'll enhance your visual identity and ensure your website is both aesthetically pleasing and highly functional.",
  },
  {
    icon: "/assets/images/seo-icon.svg", // Placeholder
    title: "Search Engine Optimization",
    description:
      "We offer a comprehensive range of services designed to boost your website's ranking and attract organic, non-paid Google search traffic. Our team can conduct a thorough SEO audit of your website, providing actionable insights and strategies to enhance your organic reach and visibility on search engines.",
  },
  {
    icon: "/assets/images/ecommerce-design-icon.svg", // Placeholder
    title: "eCommerce Design & Development",
    description:
      "We specialize in design and development for leading content management systems (CMSs) like Shopify, Magento, and WooCommerce. Our experts can help you build and scale your eCommerce website across platforms, ensuring a seamless and robust online shopping experience for your customers.",
  },
];

const ExpertiseSection = () => {
  return (
    <section className="bg-[#00042A] py-20 relative overflow-hidden">
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

      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        <div className="grid lg:grid-cols-12 gap-8 items-center">
          {/* Left Column: Text Content & Image */}
          <div className="lg:col-span-5">
            <p className="text-[#00B9FF] text-xl font-bold tracking-[0.05em] uppercase mb-3">
              WHY DIGITAL SILK?
            </p>
            <h2 className="text-white text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Discover Our Expertise as a Web Design Company
            </h2>
            <p className="text-white/90 text-lg mb-10">
              As a full-service web design agency, we handle all your digital
              needs under one roof. Our custom web design services include
              thorough research and planning, bespoke designs and digital
              strategies tailored to grow your reach, drive traffic and
              encourage engagement.
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
          <div className="lg:col-span-7 grid md:grid-cols-2 gap-6">
            {expertiseData.map((item, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-white/5 to-transparent border border-white/10 rounded-xl p-6 md:p-8 flex flex-col"
              >
                <div className="w-16 h-16 mb-5 relative">
                  <Image
                    src={item.icon}
                    alt={`${item.title} icon`}
                    fill
                    style={{ objectFit: "contain" }}
                    className="opacity-80"
                  />
                </div>
                <h3 className="text-white text-2xl font-bold mb-3">
                  {item.title}
                </h3>
                <p className="text-white/80 text-base leading-relaxed">
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
