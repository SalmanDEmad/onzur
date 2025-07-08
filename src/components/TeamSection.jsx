import Image from "next/image";
import Link from "next/link";
import { commonStyles } from "../lib/design-system";

const teamMembers = [
  {
    name: "Daanish Ryan",
    role: "Videographer/Editor",
    image: "/assets/contents/IMG-20250708-WA0006.jpg", // Using one of the provided images
    portfolioLink: "https://daanishrayn.my.canva.site/portfolio-web",
    description: "Expert videographer and editor with a passion for creating compelling visual stories that resonate with audiences.",
  },
  {
    name: "Ayham",
    role: "Editor",
    image: "/assets/contents/IMG-20250708-WA0007.jpg", // Using one of the provided images
    portfolioLink: "https://vt.tiktok.com/ZShBBeJnj/",
    description: "Skilled editor specializing in social media content creation with a focus on engaging and viral content.",
  },
];

const TeamSection = () => {
  return (
    <section id="team" className={commonStyles.sectionLight}>
      <div className={commonStyles.container}>
        <div className="text-center mb-16">
          <h2 className={`${commonStyles.heading2} text-[#1B2C5C] mb-6`}>
            Meet Our Creators
          </h2>
          <p className={`${commonStyles.bodyLarge} text-[#1B2C5C]/80 max-w-2xl mx-auto`}>
            The creative minds behind Onzur Media Studio, bringing your vision to life through innovative storytelling and expert production.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className={commonStyles.cardSolid}
            >
              <div className="relative w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  style={{ objectFit: "cover" }}
                  className="transition-transform duration-300 hover:scale-105"
                />
              </div>
              
              <div className="text-center">
                <h3 className={`${commonStyles.heading3} text-[#1B2C5C] mb-2`}>
                  {member.name}
                </h3>
                <p className="text-lg font-semibold mb-4 text-[#04E4FF]">
                  {member.role}
                </p>
                <p className={`${commonStyles.bodyBase} text-[#1B2C5C]/80 mb-6 leading-relaxed`}>
                  {member.description}
                </p>
                
                <Link
                  href={member.portfolioLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${commonStyles.buttonPrimary} group`}
                >
                  View Portfolio
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
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;