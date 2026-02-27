import type { BillingualText } from './caseStudies';

export interface TeamMember {
  name: string; // Proper noun — stays in native script regardless of language
  role: BillingualText;
  image: string;
  portfolioLink: string;
  description: BillingualText;
}

export const teamMembers: TeamMember[] = [
  {
    name: 'Daanish Ryan',
    role: {
      en: 'Creative Director & Videographer',
      ar: 'المدير الإبداعي والمصور',
    },
    image: '/assets/contents/IMG-20250708-WA0008.jpg',
    portfolioLink: 'https://daanishrayn.my.canva.site/portfolio-web',
    description: {
      en: 'Award-winning creative director and videographer who brings brands to life through compelling visual storytelling and innovative content strategies.',
      ar: 'مدير إبداعي ومصور حائز على جوائز، يُحيي العلامات التجارية من خلال رواية بصرية مقنعة واستراتيجيات محتوى مبتكرة.',
    },
  },
  {
    name: 'Sahid',
    role: {
      en: 'Senior Content Editor',
      ar: 'محرر محتوى أول',
    },
    image: '/assets/contents/IMG-20250708-WA0010.jpg',
    portfolioLink: 'https://www.instagram.com/alysohel.mov',
    description: {
      en: 'Master editor specializing in viral social media content, with expertise in creating engaging videos that drive millions of views and conversions.',
      ar: 'محرر متمكن متخصص في محتوى وسائل التواصل الاجتماعي الفيروسي، مع خبرة في إنشاء مقاطع مقنعة تحقق ملايين المشاهدات والتحويلات.',
    },
  },
];
