import Image from "next/image";
import Link from "next/link";
import { commonStyles } from "../lib/design-system";

const portfolioProjects = [
  {
    title: "Islamic Scholars TikTok Success",
    description: "Growing Islamic knowledge through strategic content creation",
    metrics: "10M+ views across all scholars",
    image: "/assets/contents/IMG-20250708-WA0008.jpg",
    link: "#",
  },
  {
    title: "Dr. Shaybani",
    description: "80K followers in 2 months",
    metrics: "4M views achieved",
    image: "/assets/contents/IMG-20250708-WA0009.jpg",
    link: "#",
  },
  {
    title: "Sheikh Majd Makki",
    description: "Engaging Islamic content creation",
    metrics: "Growing audience engagement",
    image: "/assets/contents/IMG-20250708-WA0010.jpg",
    link: "#",
  },
  {
    title: "Qatar University Collaboration",
    description: "Sharia Department content creation",
    metrics: "Educational content success",
    image: "/assets/contents/IMG-20250708-WA0011.jpg",
    link: "https://www.instagram.com/sharia_qusrb",
  },
  {
    title: "QSN Mazad",
    description: "Auction platform content strategy",
    metrics: "Increased engagement",
    image: "/assets/contents/IMG-20250708-WA0013.jpg",
    link: "https://www.instagram.com/qsn.mazad",
  },
  {
    title: "Megabyte Store Success",
    description: "E-commerce transformation",
    metrics: "8M TikTok views",
    image: "/assets/contents/IMG-20250708-WA0014.jpg",
    link: "https://www.tiktok.com/@mgbytcom",
  },
];

const PortfolioSection = () => {
  return (
    <section id="portfolio" className={`${commonStyles.sectionDark} relative overflow-hidden`}>
      {/* Background gradients */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"></div>
      </div>

      <div className={`${commonStyles.container} relative z-10`}>
        <div className="text-center mb-16">
          <h2 className={`${commonStyles.heading2} text-white mb-6`}>
            Portfolio Highlights
          </h2>
          <p className={`${commonStyles.bodyLarge} text-white/80 max-w-2xl mx-auto`}>
            Showcasing our successful projects across different industries and platforms
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioProjects.map((project, index) => (
            <div
              key={index}
              className={`${commonStyles.cardGlass} overflow-hidden group`}
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  style={{ objectFit: "cover" }}
                  className="group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              </div>
              
              <div className="p-6">
                <h3 className={`${commonStyles.heading3} text-white mb-3`}>
                  {project.title}
                </h3>
                <p className={`${commonStyles.bodyBase} text-white/80 mb-3`}>
                  {project.description}
                </p>
                <p className="text-[#04E4FF] font-semibold mb-4">
                  {project.metrics}
                </p>
                
                {project.link !== "#" && (
                  <Link
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${commonStyles.buttonGhost} group`}
                  >
                    View Project
                    <svg
                      className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;