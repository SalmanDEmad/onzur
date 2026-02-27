import type { BillingualText } from './caseStudies';

export interface PortfolioProject {
  title: BillingualText;
  description: BillingualText;
  metrics: BillingualText;
  image: string;
  link: string;
}

export const portfolioProjects: PortfolioProject[] = [
  {
    title: { en: 'Dr. Abdurrahman Shaybani', ar: 'د. عبدالرحمن الشيباني' },
    description: {
      en: 'Islamic Scholar TikTok Growth',
      ar: 'نمو تيك توك لعالم إسلامي',
    },
    metrics: { en: '80K followers, 4M views in 2 months', ar: '80 ألف متابع، 4 مليون مشاهدة في شهرين' },
    image: '/assets/contents/IMG-20250708-WA0009.jpg',
    link: 'https://www.tiktok.com/@drshaybani',
  },
  {
    title: { en: 'Sheikh Ali Qaradaghi', ar: 'الشيخ علي القرة داغي' },
    description: { en: 'Religious content creation', ar: 'إنشاء محتوى ديني' },
    metrics: { en: 'Growing Islamic community', ar: 'مجتمع إسلامي متنامٍ' },
    image: '/assets/contents/IMG-20250708-WA0010.jpg',
    link: 'https://www.tiktok.com/@ali.qaradaghi',
  },
  {
    title: { en: 'Sheikh Majd Makki', ar: 'الشيخ مجد مكي' },
    description: { en: 'Engaging Islamic content', ar: 'محتوى إسلامي جذاب' },
    metrics: { en: 'Expanding reach', ar: 'توسيع النطاق' },
    image: '/assets/contents/IMG-20250708-WA0008.jpg',
    link: 'https://www.tiktok.com/@majd.maki',
  },
  {
    title: { en: 'Megabyte Store', ar: 'متجر ميجابايت' },
    description: { en: 'Electronics & Gadgets Marketing', ar: 'تسويق الإلكترونيات والأجهزة' },
    metrics: { en: '8M+ TikTok views, 40-50 daily leads', ar: 'أكثر من 8 مليون مشاهدة على تيك توك، 40-50 عميل محتمل يومياً' },
    image: '/assets/contents/IMG-20250708-WA0014.jpg',
    link: 'https://www.tiktok.com/@mgbytcom',
  },
  {
    title: { en: 'Qatar University - Sharia Dept', ar: 'جامعة قطر - قسم الشريعة' },
    description: { en: 'Academic event coverage & student outreach', ar: 'تغطية الفعاليات الأكاديمية والتواصل مع الطلاب' },
    metrics: { en: 'Educational content success', ar: 'نجاح المحتوى التعليمي' },
    image: '/assets/contents/IMG-20250708-WA0011.jpg',
    link: 'https://www.instagram.com/sharia_qusrb',
  },
  {
    title: { en: 'QSN Mazad', ar: 'QSN مزاد' },
    description: { en: 'Auction brand marketing & commercial reels', ar: 'تسويق علامة المزادات وريلز تجارية' },
    metrics: { en: 'Enhanced brand presence', ar: 'تعزيز الحضور التجاري' },
    image: '/assets/contents/IMG-20250708-WA0013.jpg',
    link: 'https://www.instagram.com/qsn.mazad',
  },
  {
    title: { en: 'Spice Fusion Restaurant', ar: 'مطعم سبايس فيوجن' },
    description: { en: 'Professional food photography & branding', ar: 'تصوير طعام احترافي وهوية بصرية' },
    metrics: { en: '100% platform integration success', ar: '100% نجاح في التكامل مع منصات التوصيل' },
    image: '/assets/contents/WhatsApp Image 2025-06-01 at 12.50.22_322b9df6.jpg',
    link: '#',
  },
  {
    title: { en: 'Content Creation Showcase', ar: 'عرض إنشاء المحتوى' },
    description: { en: 'Behind-the-scenes content production', ar: 'إنتاج المحتوى من وراء الكواليس' },
    metrics: { en: 'Professional video & photo shoots', ar: 'جلسات تصوير فيديو وصور احترافية' },
    image: '/assets/contents/WhatsApp Image 2025-06-01 at 12.50.23_a05b9299.jpg',
    link: '#',
  },
  {
    title: { en: 'Brand Photography', ar: 'تصوير العلامة التجارية' },
    description: { en: 'High-quality commercial photography', ar: 'تصوير تجاري عالي الجودة' },
    metrics: { en: 'Enhanced visual storytelling', ar: 'سرد بصري متميز' },
    image: '/assets/contents/WhatsApp Image 2025-06-01 at 12.50.25_9cd4cc89.jpg',
    link: '#',
  },
];
