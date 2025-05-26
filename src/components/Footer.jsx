import Link from "next/link";
import Image from "next/image";

const footerLinks = [
  {
    title: "Main Services",
    links: [
      { href: "/services/custom-web-design", text: "Custom Web Design" },
      { href: "/services/branding", text: "Branding Services" },
      { href: "/services/ecommerce-design", text: "eCommerce Design" },
      {
        href: "/services/shopify-website-design",
        text: "Shopify Website Design",
      },
      { href: "/services/wordpress-web-design", text: "WordPress Web Design" },
      { href: "/services/digital-marketing", text: "Digital Marketing" },
    ],
  },
  {
    title: "Apps & Development",
    links: [
      {
        href: "/tools/website-cost-calculator",
        text: "Website Cost Calculator",
      },
      {
        href: "/tools/conversion-rate-calculator",
        text: "Conversion Rate Calculator",
      },
      {
        href: "/services/custom-web-development",
        text: "Custom Web Development",
      },
      { href: "/services/magento-development", text: "Magento Development" },
      {
        href: "/services/ecommerce-development",
        text: "eCommerce Development",
      },
      {
        href: "/services/woocommerce-development",
        text: "WooCommerce Development",
      },
    ],
  },
  {
    title: "Location Services",
    links: [
      { href: "/locations/nyc", text: "NYC Web Design" },
      { href: "/locations/california", text: "California Web Design" },
      { href: "/locations/miami", text: "Miami Web Design" },
      { href: "/locations/los-angeles", text: "Los Angeles Web Design" },
      { href: "/locations/denver", text: "Denver Web Design" },
      { href: "/locations/san-francisco", text: "San Francisco Web Design" },
    ],
  },
  {
    title: "Company",
    links: [
      { href: "/about", text: "About Us" },
      { href: "/case-studies", text: "Case Studies" },
      { href: "/digital-trends", text: "Digital Trends" },
      { href: "/top-companies", text: "Top Companies" },
      { href: "/reviews", text: "Reviews" },
      { href: "/sitemap", text: "Sitemap" },
      { href: "/locations", text: "Locations" },
      { href: "/contact", text: "Contact Us" },
    ],
  },
];

const locations = [
  {
    short: "MI",
    city: "Miami",
    address: "17975 Collins Avenue\nSunny Isles Beach, FL 33160",
  },
  {
    short: "NY",
    city: "New York",
    address: "18 West 18th Street\nNew York, NY 10011",
  },
  {
    short: "CH",
    city: "Chicago",
    address: "625 W Adams St\nChicago, IL 60661",
  },
  {
    short: "CA",
    city: "California",
    address: "600 B St,\nSan Diego, CA 92101",
  },
];

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-[#0570B8] to-[#00B9FF] text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="mb-12">
          <h2 className="text-6xl md:text-7xl font-bold mb-12 max-w-2xl">
            Let's Grow Your Brand
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {footerLinks.map((section) => (
            <div key={section.title} className="relative pl-8">
              <div className="absolute left-0 top-0 h-5 w-0.5 bg-gradient-to-b from-[#A4DCFF] to-[#30AFFF]"></div>
              <h5 className="text-xl font-bold mb-5">{section.title}</h5>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.text}>
                    <Link
                      href={link.href}
                      className="text-base font-light hover:opacity-80 transition-opacity leading-relaxed"
                    >
                      {link.text}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-[#30AFFF] pt-12 mb-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 items-start">
            {locations.map((loc) => (
              <div key={loc.short} className="flex items-start space-x-3">
                <span className="text-7xl font-black opacity-15 leading-none mt-1">
                  {loc.short}
                </span>
                <div>
                  <p className="font-semibold text-sm whitespace-pre-line">
                    {loc.city}
                    {"\n"}
                    {loc.address}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between border-t border-[#30AFFF] pt-8">
          <div className="mb-6 md:mb-0">
            <Link
              href="/"
              className="flex items-center hover:opacity-80 transition-opacity"
            >
              <Image
                src="/assets/images/digital-silk-logo-footer.svg"
                alt="Digital Silk Logo Part 1"
                width={155}
                height={30}
                className="mr-0.5"
              />
              <Image
                src="/assets/images/digital-silk-logo-footer-text.svg"
                alt="Digital Silk Logo Part 2"
                width={74}
                height={30}
              />
            </Link>
          </div>

          <div className="text-sm text-center md:text-left mb-4 md:mb-0">
            &copy;{new Date().getFullYear()} Digital Silk. All rights reserved
          </div>

          <div className="flex items-center space-x-4 text-sm">
            <Link
              href="/privacy-policy"
              className="hover:opacity-80 transition-opacity"
            >
              Privacy Policy
            </Link>
            <Link
              href="/accessibility"
              className="hover:opacity-80 transition-opacity"
            >
              Accessibility
            </Link>
            <a
              href="tel:8002069413"
              className="hover:opacity-80 transition-opacity"
            >
              Call us at (800) 206-9413
            </a>
          </div>
          <div className="hidden md:flex flex-col space-y-1.5 items-end">
            <div className="w-6 h-0.5 bg-white"></div>
            <div className="w-4 h-0.5 bg-white"></div>
            <div className="w-6 h-0.5 bg-white"></div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
