# Arabic Language Support Documentation

## 🌍 Overview
Your website now has full Arabic language support with RTL (Right-to-Left) layout capability. Users can switch between English and Arabic seamlessly.

---

## 🎯 How It Works

### Language Toggle Button
- Located in the navbar (desktop and mobile)
- Shows "العربية" when in English mode
- Shows "English" when in Arabic mode
- Click to toggle between languages

### Features Implemented:

1. **Language Context Provider**
   - Manages language state across the entire app
   - Persists language preference in localStorage
   - Automatically updates document direction (LTR/RTL)

2. **Translation System**
   - JSON-based translations in `/src/translations/`
   - Easy to add more translations
   - Fallback to English if translation missing

3. **RTL Layout Support**
   - Automatic direction switching (LTR for English, RTL for Arabic)
   - RTL-aware CSS utilities
   - Arabic font optimization (Tajawal font)

4. **Performance Optimized**
   - Translations loaded dynamically
   - Font preloading for faster rendering
   - Language preference cached locally

---

## 🔧 How to Use in Components

### Basic Translation

```jsx
'use client';
import { useLanguage } from '@/contexts/LanguageContext';

export default function MyComponent() {
  const { t, isRTL, language } = useLanguage();
  
  return (
    <div>
      <h1>{t('hero.title1')}</h1>
      <p>{t('hero.subtitle')}</p>
      {isRTL && <span>This is Arabic mode!</span>}
    </div>
  );
}
```

### Accessing Translation Keys

Translation keys use dot notation:
- `t('nav.home')` → "Home" / "الرئيسية"
- `t('hero.title1')` → "Transform Your Brand Into a" / "حوّل علامتك التجارية إلى"
- `t('contact.submit')` → "Start Your Project" / "ابدأ مشروعك"

---

## 📝 Adding New Translations

### 1. Update English (`/src/translations/en.json`)
```json
{
  "services": {
    "videoProduction": {
      "title": "Video Production",
      "description": "Professional video services"
    }
  }
}
```

### 2. Update Arabic (`/src/translations/ar.json`)
```json
{
  "services": {
    "videoProduction": {
      "title": "إنتاج الفيديو",
      "description": "خدمات فيديو احترافية"
    }
  }
}
```

### 3. Use in Component
```jsx
<h2>{t('services.videoProduction.title')}</h2>
<p>{t('services.videoProduction.description')}</p>
```

---

## 🎨 RTL-Aware CSS Classes

Use these classes for proper RTL support:

```jsx
{/* Text alignment */}
<div className="text-start">Aligns to start (left in LTR, right in RTL)</div>
<div className="text-end">Aligns to end (right in LTR, left in RTL)</div>

{/* Margins that respect RTL */}
<div className="ms-auto">Margin-inline-start (left in LTR, right in RTL)</div>
<div className="me-auto">Margin-inline-end (right in LTR, left in RTL)</div>

{/* Icons that should flip in RTL */}
<ArrowRight className="rtl-flip" />

{/* Icons that should mirror completely */}
<ArrowRight className="rtl-mirror" />
```

---

## 🌐 Translation Keys Reference

### Navigation (`nav.*`)
- `nav.home` - Home
- `nav.services` - Services
- `nav.portfolio` - Portfolio
- `nav.caseStudies` - Case Studies
- `nav.team` - Team
- `nav.testimonials` - Testimonials
- `nav.contact` - Contact Us

### Hero Section (`hero.*`)
- `hero.badge` - Badge text
- `hero.title1` - First title line
- `hero.title2` - Second title line
- `hero.subtitle` - Subtitle
- `hero.cta1` - Primary CTA
- `hero.cta2` - Secondary CTA
- `hero.phone` - Phone label
- `hero.whatsapp` - WhatsApp label

### Contact Form (`contact.*`)
- `contact.formTitle` - Form heading
- `contact.name` - Name field
- `contact.company` - Company field
- `contact.email` - Email field
- `contact.phoneLabel` - Phone field
- `contact.message` - Message field
- `contact.submit` - Submit button
- `contact.success` - Success message
- `contact.error` - Error message

### Common (`common.*`)
- `common.learnMore` - Learn More
- `common.getStarted` - Get Started
- `common.contactUs` - Contact Us
- `common.viewMore` - View More
- `common.readMore` - Read More
- `common.loading` - Loading
- `common.error` - Error
- `common.tryAgain` - Try Again

---

## 🎯 Example: Converting a Component

### Before (Hardcoded Text)
```jsx
export default function Hero() {
  return (
    <div>
      <h1>Transform Your Brand</h1>
      <p>We create digital excellence</p>
      <button>Get Started</button>
    </div>
  );
}
```

### After (With Translations)
```jsx
'use client';
import { useLanguage } from '@/contexts/LanguageContext';

export default function Hero() {
  const { t, isRTL } = useLanguage();
  
  return (
    <div className={isRTL ? 'text-right' : 'text-left'}>
      <h1>{t('hero.title1')} {t('hero.title2')}</h1>
      <p>{t('hero.subtitle')}</p>
      <button>{t('common.getStarted')}</button>
    </div>
  );
}
```

---

## 📱 Mobile Support

The language toggle appears in:
- ✅ Desktop navbar (right side)
- ✅ Mobile menu (top of menu)

---

## 🔍 Testing

1. **Switch to Arabic**: Click the globe icon → Click "العربية"
2. **Verify RTL**: Text should align right, layout should mirror
3. **Check Font**: Arabic text should use Tajawal font
4. **Test Navigation**: All navigation should work in both languages
5. **Refresh Page**: Language preference should persist

---

## 🚀 Next Steps

To make the entire website bilingual, you need to:

1. **Convert each page component** to use `useLanguage()` hook
2. **Replace hardcoded text** with `t('key.path')` calls
3. **Add translations** to `en.json` and `ar.json`
4. **Test RTL layout** on each page

**Estimated time**: 
- Simple page (5-10 components): ~30 minutes
- Complex page (20+ components): ~1-2 hours
- Full website: ~6-8 hours

---

## 💡 Pro Tips

1. **Group translations logically** by component or section
2. **Use consistent key naming** (e.g., `section.component.element`)
3. **Test with long Arabic text** to catch layout issues
4. **Use `text-start` and `text-end`** instead of `text-left`/`text-right`
5. **Flip directional icons** using `rtl-flip` class

---

## 🆘 Troubleshooting

### Language not persisting?
- Check browser localStorage
- Clear cache and reload

### RTL layout broken?
- Check if `dir` attribute is set on `<html>` tag
- Verify CSS utilities are applied correctly

### Translations not showing?
- Check JSON syntax in translation files
- Verify key path exists in both en.json and ar.json
- Check browser console for errors

### Arabic font not loading?
- Check Google Fonts link in layout.jsx
- Verify Tajawal font is loaded in Network tab

---

## 📊 Current Status

✅ Infrastructure complete
✅ Language toggle working
✅ RTL support enabled
✅ Arabic font loaded
✅ Basic translations added
⚠️ Components need conversion (manual work)

**Ready to start converting components to use translations!** 🎉
