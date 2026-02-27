// Bilingual case study data — each text field has { en, ar } to avoid
// duplicating data across components and pages.

export type BillingualText = { en: string; ar: string };

export interface CaseStudy {
  id: string;
  name: BillingualText;
  logo: string;
  logoDark: string;
  bgColor: string;
  title: BillingualText;
  subtitle: BillingualText;
  mainDescription: BillingualText;
  achievementIntro: BillingualText;
  metric1: { value: string; unit: string; description: BillingualText };
  metric2: { value: string; unit: string; description: BillingualText };
  ctaLink: string;
  ctaText: BillingualText;
}

export const caseStudiesData: CaseStudy[] = [
  {
    id: 'spice-fusion',
    name: {
      en: 'Spice Fusion Restaurant',
      ar: 'مطعم سبايس فيوجن',
    },
    logo: '/assets/images/placeholder-logo.svg',
    logoDark: '/assets/images/placeholder-logo-dark.svg',
    bgColor: '#04E4FF',
    title: {
      en: 'Spice Fusion Restaurant:',
      ar: 'مطعم سبايس فيوجن:',
    },
    subtitle: {
      en: 'Professional Food Photography & Platform Integration',
      ar: 'تصوير طعام احترافي وتكامل مع منصات التوصيل',
    },
    mainDescription: {
      en: 'Challenge: Needed high-quality food photography for menu presentation and online delivery platform integration. Solution: Onzur Marketing conducted a professional food photography session, optimizing images for online menus.',
      ar: 'التحدي: احتاج المطعم إلى تصوير طعام عالي الجودة لعرض القائمة والتكامل مع منصات التوصيل. الحل: أجرى فريق أونزر جلسة تصوير طعام احترافية مع تحسين الصور للقوائم الإلكترونية.',
    },
    achievementIntro: {
      en: 'Results achieved:',
      ar: 'النتائج المحققة:',
    },
    metric1: {
      value: '100',
      unit: '%',
      description: {
        en: 'successful integration with Talabat & Snoonu',
        ar: 'تكامل ناجح مع طلبات وسنونو',
      },
    },
    metric2: {
      value: 'Major',
      unit: '',
      description: {
        en: 'boost in online sales & engagement',
        ar: 'ارتفاع كبير في المبيعات والتفاعل الرقمي',
      },
    },
    ctaLink: '/case-studies/spice-fusion',
    ctaText: {
      en: 'View Spice Fusion Results',
      ar: 'عرض نتائج سبايس فيوجن',
    },
  },
  {
    id: 'megabyte-store',
    name: {
      en: 'Megabyte Store',
      ar: 'متجر ميجابايت',
    },
    logo: '/assets/images/placeholder-logo.svg',
    logoDark: '/assets/images/placeholder-logo-dark.svg',
    bgColor: '#04E4FF',
    title: {
      en: 'Megabyte Store:',
      ar: 'متجر ميجابايت:',
    },
    subtitle: {
      en: 'Electronics Store Digital Transformation',
      ar: 'التحول الرقمي لمتجر الإلكترونيات',
    },
    mainDescription: {
      en: 'Challenge: Low product sales and limited online presence. Solution: Managed Meta and TikTok ads, created engaging content, and optimized campaigns for electronics and gadgets.',
      ar: 'التحدي: انخفاض المبيعات وضعف الحضور الرقمي. الحل: إدارة إعلانات ميتا وتيك توك، وإنشاء محتوى جذاب، وتحسين الحملات للإلكترونيات والأجهزة.',
    },
    achievementIntro: {
      en: 'Incredible results:',
      ar: 'نتائج مذهلة:',
    },
    metric1: {
      value: '8',
      unit: 'M+',
      description: {
        en: 'TikTok views in 3-4 months',
        ar: 'مشاهدة على تيك توك في 3-4 أشهر',
      },
    },
    metric2: {
      value: '40-50',
      unit: '',
      description: {
        en: 'daily leads generated',
        ar: 'عميل محتمل يومياً',
      },
    },
    ctaLink: '/case-studies/megabyte-store',
    ctaText: {
      en: 'View Megabyte Analytics',
      ar: 'عرض تحليلات ميجابايت',
    },
  },
  {
    id: 'islamic-scholars',
    name: {
      en: 'Islamic Scholars Project',
      ar: 'مشروع العلماء الإسلاميين',
    },
    logo: '/assets/images/placeholder-logo.svg',
    logoDark: '/assets/images/placeholder-logo-dark.svg',
    bgColor: '#04E4FF',
    title: {
      en: 'Islamic Scholars Project:',
      ar: 'مشروع العلماء الإسلاميين:',
    },
    subtitle: {
      en: 'Expanding Reach for Islamic Education',
      ar: 'توسيع نطاق التعليم الإسلامي',
    },
    mainDescription: {
      en: 'Challenge: Expanding reach for Islamic education on social media. Solution: Developed and managed Dr. Abdurrahman Shaybani\'s TikTok content strategy and onboarded multiple scholars.',
      ar: 'التحدي: توسيع نطاق التعليم الإسلامي على وسائل التواصل الاجتماعي. الحل: تطوير وإدارة استراتيجية محتوى تيك توك للدكتور عبدالرحمن الشيباني وتأهيل علماء متعددين.',
    },
    achievementIntro: {
      en: 'Outstanding growth:',
      ar: 'نمو استثنائي:',
    },
    metric1: {
      value: '80',
      unit: 'K',
      description: {
        en: 'followers gained in 2 months',
        ar: 'متابع في شهرين',
      },
    },
    metric2: {
      value: '4',
      unit: 'M',
      description: {
        en: 'views achieved in 2 months',
        ar: 'مشاهدة في شهرين',
      },
    },
    ctaLink: '/case-studies/islamic-scholars',
    ctaText: {
      en: 'View Scholar Analytics',
      ar: 'عرض تحليلات العلماء',
    },
  },
];
