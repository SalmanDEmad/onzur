import type { BillingualText } from './caseStudies';

export interface Testimonial {
  logo: string;
  company: BillingualText;
  name: string; // Proper noun — unchanged across languages
  title: BillingualText;
  quote: BillingualText;
}

export const testimonials: Testimonial[] = [
  {
    logo: '/assets/images/spice-fusion-logo.svg',
    company: {
      en: 'Spice Fusion Restaurant',
      ar: 'مطعم سبايس فيوجن',
    },
    name: 'Aslam KA',
    title: {
      en: 'Manager',
      ar: 'مدير',
    },
    quote: {
      en: "Onzur Marketing's professional food photography helped us successfully integrate with Talabat and Snoonu. Our online visibility and customer engagement have grown significantly!",
      ar: 'ساعدنا تصوير الطعام الاحترافي من أونزر ماركتنج على التكامل بنجاح مع طلبات وسنونو. نما حضورنا الرقمي وتفاعل العملاء بشكل ملحوظ!',
    },
  },
  {
    logo: '/assets/images/megabyte-logo.svg',
    company: {
      en: 'Megabyte Store',
      ar: 'متجر ميجابايت',
    },
    name: 'Mohammed Raihan',
    title: {
      en: 'Owner',
      ar: 'صاحب المشروع',
    },
    quote: {
      en: "With Onzur Marketing's expert ad management, we achieved 8 million TikTok views, 800K ad-driven views, and 40-50 daily leads—our sales have never been better!",
      ar: 'بفضل إدارة الإعلانات الاحترافية من أونزر ماركتنج، حققنا 8 ملايين مشاهدة على تيك توك و 800 ألف مشاهدة إعلانية و 40-50 عميل محتمل يومياً — مبيعاتنا لم تكن أفضل من هذا قط!',
    },
  },
  {
    logo: '/assets/images/islamic-scholars-logo.svg',
    company: {
      en: 'Islamic Scholars Project',
      ar: 'مشروع العلماء الإسلاميين',
    },
    name: 'Dr. Abdurrahman Shaybani',
    title: {
      en: 'Islamic Scholar',
      ar: 'عالم إسلامي',
    },
    quote: {
      en: 'Thanks to Onzur Marketing, we reached 80,000 followers and 4 million views in just 2 months, allowing us to onboard more scholars and expand our initiative!',
      ar: 'بفضل أونزر ماركتنج، وصلنا إلى 80,000 متابع و 4 مليون مشاهدة في شهرين فقط، مما مكّننا من ضم المزيد من العلماء وتوسيع مبادرتنا!',
    },
  },
];
