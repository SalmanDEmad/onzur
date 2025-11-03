// Example: How to convert ContactUsSection to use translations

// BEFORE:
/*
<motion.p className="...">Ready to Scale Your Business?</motion.p>
<motion.h2 className="...">
  <span>Let's Discuss</span>
  <span>Your Project</span>
</motion.h2>
*/

// AFTER:
'use client';
import { useLanguage } from '@/contexts/LanguageContext';

export default function ContactUsSection() {
  const { t } = useLanguage();
  
  return (
    <>
      <motion.p className="...">{t('contact.badge')}</motion.p>
      <motion.h2 className="...">
        <span>{t('contact.title1')}</span>
        <br />
        <span>{t('contact.title2')}</span>
      </motion.h2>
      
      {/* Form fields */}
      <input placeholder={t('contact.name')} />
      <input placeholder={t('contact.email')} />
      <input placeholder={t('contact.phoneLabel')} />
      <textarea placeholder={t('contact.message')} />
      <button>{t('contact.submit')}</button>
    </>
  );
}

// Key changes:
// 1. Import useLanguage hook at top
// 2. Call const { t } = useLanguage() inside component
// 3. Replace all hardcoded text with t('key.path')
// 4. Make sure translation keys exist in both en.json and ar.json
