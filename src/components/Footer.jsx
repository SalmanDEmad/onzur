import Link from "next/link";
import Image from "next/image";
import { commonStyles } from "../lib/design-system";

const footerLinks = [
  {
    title: "Our Services",
    links: [
      { href: "/services/video-production", text: "Video Production" },
      { href: "/services/content-creation", text: "Content Creation" },
      { href: "/services/social-media-management", text: "Social Media Management" },
      { href: "/services/ppc-marketing", text: "PPC Marketing" },
      { href: "/services/web-development", text: "Web Development" },
    ],
  },
  {
    title: "Portfolio",
    links: [
      { href: "/portfolio/islamic-scholars", text: "Islamic Scholars" },
      { href: "/portfolio/spice-fusion", text: "Spice Fusion" },
      { href: "/portfolio/megabyte-store", text: "Megabyte Store" },
      { href: "https://daanishrayn.my.canva.site/portfolio-web", text: "Daanish Portfolio" },
      { href: "https://vt.tiktok.com/ZShBBeJnj/", text: "Ayham Portfolio" },
    ],
  },
  {
    title: "Collaborations",
    links: [
      { href: "https://www.instagram.com/sharia_qusrb", text: "Qatar University" },
      { href: "https://www.instagram.com/qsn.mazad", text: "QSN Mazad" },
      { href: "https://mgbyt.com", text: "Megabyte Store" },
      { href: "https://www.tiktok.com/@mgbytcom", text: "Megabyte TikTok" },
    ],
  },
  {
    title: "Company",
    links: [
      { href: "/about", text: "About Us" },
      { href: "/team", text: "Our Team" },
      { href: "/case-studies", text: "Case Studies" },
      { href: "/contact", text: "Contact Us" },
    ],
  },
];

const contactInfo = [
  {
    type: "location",
    label: "Based in Qatar",
    info: "Doha, Qatar",
  },
  {
    type: "phone",
    label: "Phone (Calls)",
    info: "+974 5999 0137",
  },
  {
    type: "whatsapp",
    label: "WhatsApp",
    info: "+974 7750 7972",
  },
];

const Footer = () => {
  return (
    <footer className={`${commonStyles.gradientPrimary} text-white pt-16 pb-8`}>
      <div className={commonStyles.container}>
        <div className="mb-12">
          <h2 className={`${commonStyles.heading1} mb-12 max-w-2xl`}>
            Let's Create Your Story
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
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 items-start">
            {contactInfo.map((contact, index) => (
              <div key={index} className="text-center">
                <h3 className="font-bold text-lg mb-2">{contact.label}</h3>
                <p className="text-base">
                  {contact.type === 'phone' || contact.type === 'whatsapp' ? (
                    <a href={`tel:${contact.info}`} className="hover:opacity-80 transition-opacity">
                      {contact.info}
                    </a>
                  ) : (
                    contact.info
                  )}
                </p>
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
              <span className="text-2xl font-bold">Onzur Media Studio</span>
            </Link>
          </div>

          <div className="text-sm text-center md:text-left mb-4 md:mb-0">
            &copy;{new Date().getFullYear()} Onzur Media Studio. All rights reserved
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
              href="tel:+97459990137"
              className="hover:opacity-80 transition-opacity"
            >
              Call us at +974 5999 0137
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
