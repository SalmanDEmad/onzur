# Copilot Instructions for Onzur Media Studio

## Project Overview

**Onzur Media Studio** is a cutting-edge digital marketing agency website built with Next.js. The project showcases the agency's services, team, case studies, portfolio, and testimonials with sophisticated animations, 3D graphics, and multilingual support.

**Key URLs & Brand:**
- Website: https://onzur.com
- Brand: Qatar's Leading Digital Marketing Agency
- Services: Social media management, video production, content creation, web development, PPC marketing, TikTok marketing

---

## Architecture & Tech Stack

### Core Framework
- **Next.js 15.3.2** - React framework with App Router
- **React 19.0.0** - UI library
- **TypeScript 5.9.3** - Type-safe development
- **Node.js 22.x** - Runtime requirement

### Styling & Design
- **Tailwind CSS 4** - Utility-first CSS framework
- **Tailwind PostCSS 4** - CSS processing
- **Design System** - Custom colors, typography, and animation variants
- **Google Fonts**: Inter, Poppins, Source Sans 3

### Animations & 3D Graphics
- **Framer Motion** - Modern animation library (`motion/react`)
- **GSAP 3.13.0** - Advanced animation control
- **Three.js 0.180.0** - 3D graphics engine
- **React Three Fiber 9.4.0** - React renderer for Three.js
- **Drei 9.114.3** - Useful Three.js abstractions

### UI Components & Icons
- **Lucide React 0.552.0** - Icon library
- **Custom Components** - Modal, buttons, sections throughout codebase

### Internationalization
- **Custom Language Context** - Arabic (ar.json) and English (en.json) support
- **LanguageToggle Component** - User language switching

### Analytics & Performance
- **Google Analytics** - Tracking and analytics
- **Microsoft Clarity** - Session recording and heatmaps
- **Structured Data** - SEO schema markup

---

## Project Structure

```
src/
├── app/                          # Next.js App Router
│   ├── layout.tsx               # Root layout with metadata, fonts, providers
│   ├── page.tsx                 # Homepage
│   ├── globals.css              # Global styles
│   ├── actions.tsx              # Server actions
│   ├── case-studies/            # Case studies page
│   ├── portfolio/               # Portfolio showcase page
│   ├── services/                # Services page
│   ├── team/                    # Team page
│   └── testimonials/            # Testimonials page
│
├── components/                   # React components
│   ├── Navbar.tsx               # Main navigation with mobile menu
│   ├── Footer.tsx               # Footer component
│   ├── HeroSection.tsx          # Hero section with animations
│   ├── FeaturedProjects.tsx     # Project showcase with tabs
│   ├── ServiceSection.tsx       # Services grid
│   ├── CaseStudiesSection.tsx   # Case studies showcase
│   ├── TeamSection.tsx          # Team members display
│   ├── TestimonialsSection.tsx  # Client testimonials
│   ├── PortfolioSection.tsx     # Portfolio items
│   ├── ExpertiseSection.tsx     # Expertise showcase
│   ├── ContactUsSection.tsx     # Contact form
│   ├── LanguageToggle.tsx       # Language switcher
│   ├── OptimizedImage.tsx       # Image optimization wrapper
│   ├── StructuredData.tsx       # SEO schema markup
│   ├── GoogleAnalytics.tsx      # Analytics integration
│   ├── MicrosoftClarity.tsx     # Session recording integration
│   ├── MotionSafe.tsx           # Accessibility for motion
│   ├── LazySection.tsx          # Lazy loading wrapper
│   ├── Skeleton.tsx             # Loading skeleton
│   │
│   └── hero/                    # 3D hero scene components
│       ├── ThreeDScene.tsx      # Main 3D scene with blobs
│       ├── HeroBackground.tsx   # Background effects
│       ├── HeroContent.tsx      # Text content overlay
│       ├── CarouselHero.tsx     # Image/content carousel
│       ├── ClientMarquee.tsx    # Scrolling client logos
│       ├── ContactCards.tsx     # Contact cards display
│       ├── AmbientParticles.tsx # Particle effects
│       ├── ParticleBackground.tsx # Particle system
│       ├── GalaxyParticles.tsx  # Galaxy-like particles
│       ├── SimulationMaterial.js # Shader material
│       ├── shaders/             # GLSL shader files
│       │   ├── fragmentShader.glsl
│       │   ├── vertexShader.glsl
│       │   ├── simulationFragmentShader.glsl
│       │   └── simulationVertexShader.glsl
│       └── TwoColumnHero.tsx    # Two-column layout variant
│
├── contexts/                     # React contexts
│   └── LanguageContext.tsx      # Language selection provider
│
└── lib/                         # Utilities and constants
    ├── animation-variants.ts    # Framer Motion animation presets
    ├── animation-variants.js    # Legacy animation variants
    └── design-system.js         # Colors, typography, common styles
```

### Public Assets
```
public/
├── assets/
│   ├── images/                  # Project screenshots, logos, team photos
│   ├── docs/                    # Documentation files
│   └── contents/                # Content media
├── manifest.json                # PWA manifest
└── robots.txt                   # SEO robots file
```

---

## Coding Conventions & Patterns

### File Naming
- **Components**: PascalCase (e.g., `Navbar.tsx`, `HeroSection.tsx`)
- **Utilities/Hooks**: camelCase (e.g., `useScroll`, `useAnimation`)
- **Constants**: UPPER_SNAKE_CASE (e.g., `BLOB_VARIANTS`, `COLOR_PALETTE`)

### React Patterns
- **Use TypeScript** - All new files should use `.ts` or `.tsx` extensions
- **Use "use client"** - Components with interactivity, hooks, or state require client directive
- **Use Server Components** - For pages and static content by default
- **Functional Components** - Always use functional components, never class components
- **Hooks First** - `useState`, `useEffect`, `useCallback`, `useMemo` for state management
- **Custom Hooks** - Extract reusable logic into custom hooks in `/hooks` directory (if created)

### Component Structure Example
```tsx
"use client";

import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { useLanguage } from "@/contexts/LanguageContext";
import { commonStyles } from "@/lib/design-system";

export const MyComponent = ({ prop1, prop2 }) => {
  const { t, isRTL } = useLanguage();
  const [state, setState] = useState(false);

  useEffect(() => {
    // Side effects
  }, []);

  return (
    <motion.div
      className={`bg-brand-dark text-brand-white ${isRTL ? "text-right" : "text-left"}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <h2 className="text-brand-secondary">{t("section.title")}</h2>
      <p className="text-brand-white/60">{t("section.description")}</p>
    </motion.div>
  );
};

export default MyComponent;
```

### Import Organization
1. React imports
2. Next.js imports
3. Third-party libraries (motion, three, gsap, etc.)
4. Local imports (components, hooks, utils)
5. Type imports (separate from regular imports)

```tsx
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import Navbar from "@/components/Navbar";
import { commonStyles } from "@/lib/design-system";
import type { ComponentProps } from "react";
```

---

## Component Development Guidelines

### Creating New Components

1. **Always use TypeScript** - Define prop types explicitly
2. **Use Design System** - Leverage colors, typography, and animations from `design-system.js`
3. **Use Brand Colors Only** - Always use Tailwind `brand-*` classes (e.g., `bg-brand-dark`, `text-brand-secondary`). **Never hardcode hex values** like `#04E4FF` or `#00042A` directly in component markup — use the corresponding Tailwind token instead
4. **Always Internationalize** - Every user-facing string must use the `t()` translation function from `useLanguage()`. Never hardcode display text in English or Arabic directly in JSX
5. **Support RTL Layout** - Use the `isRTL` flag from `useLanguage()` to handle directional styles. Prefer logical CSS properties (`ms-`, `me-`, `ps-`, `pe-`, `start`, `end`) over physical ones (`ml-`, `mr-`, `pl-`, `pr-`, `left`, `right`) where possible
6. **Responsive First** - Use Tailwind's responsive prefixes (sm:, md:, lg:, xl:)
7. **Accessibility** - Include proper ARIA labels, semantic HTML, focus management
8. **Performance** - Memoize components with `memo` if they have expensive renders
9. **Animations** - Use Framer Motion or GSAP, respect `prefers-reduced-motion`

### Design System Usage
```tsx
import { commonStyles } from "@/lib/design-system";

// Apply predefined styles for consistency
<div className={commonStyles.containerMax}>
  <h1 className={commonStyles.heading1}>Title</h1>
  <p className={commonStyles.bodyText}>Content</p>
</div>
```

### Color Palette — MANDATORY Brand Token Usage

**CRITICAL:** All colors in components MUST use Tailwind brand token classes. Never write raw hex values (e.g., `bg-[#04E4FF]`, `text-[#00042A]`) in component markup. Use the brand tokens defined in `tailwind.config.js` via `colors.config.js`.

#### Brand Color Tokens
| Tailwind Class Prefix | Hex Value | Usage |
|---|---|---|
| `brand-primary` | #00B9FF | Main brand blue — primary buttons, links, accents |
| `brand-secondary` | #04E4FF | Electric cyan — CTAs, highlights, gradients |
| `brand-accent` | #9536E5 | Purple — secondary accents, badges, gradients |
| `brand-dark` | #00042A | Deep navy — main dark backgrounds |
| `brand-dark-blue` | #131848 | Dark blue — secondary dark backgrounds, cards |
| `brand-light-blue` | #D9F0FF | Light blue — light section backgrounds |
| `brand-white` | #FFFFFF | White — text on dark, light backgrounds |
| `brand-text-dark` | #1B2C5C | Dark text — headings/body on light backgrounds |

#### Usage Examples
```tsx
// ✅ CORRECT — uses brand tokens
<div className="bg-brand-dark text-brand-white">
  <h1 className="text-brand-secondary">Heading</h1>
  <p className="text-brand-white/60">Muted body text</p>
  <button className="bg-brand-secondary text-brand-dark">CTA</button>
</div>

// ✅ CORRECT — gradients using brand tokens
<div className="bg-gradient-to-r from-brand-secondary to-brand-accent" />

// ❌ WRONG — hardcoded hex values
<div className="bg-[#00042A] text-[#04E4FF]">
  <button className="bg-[#04E4FF] text-[#00042A]">CTA</button>
</div>
```

#### When Raw Hex is Acceptable
- **Opacity variants via Tailwind**: `bg-brand-secondary/20`, `text-brand-white/60`
- **Design system file** (`design-system.js`): Token definitions themselves
- **Tailwind config** (`tailwind.config.js`, `colors.config.js`): Token source definitions
- **CSS variables** in `globals.css`: Custom property definitions
- **Shader files** (`.glsl`): WebGL requires raw values

### Animation Patterns
Use Framer Motion for most animations:
```tsx
import { motion } from "motion/react";
import { animationVariants } from "@/lib/animation-variants";

<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, ease: "easeOut" }}
>
  Animated content
</motion.div>
```

### Image Optimization
Use Next.js Image component and OptimizedImage wrapper:
```tsx
import Image from "next/image";
import OptimizedImage from "@/components/OptimizedImage";

<Image
  src="/assets/images/project.webp"
  alt="Project description"
  width={800}
  height={600}
  loading="lazy"
  quality={80}
/>
```

### Internationalization (i18n) — MANDATORY for All User-Facing Text

**CRITICAL:** Every string visible to users MUST be translated. Never hardcode English or Arabic text in JSX. Always use the `useLanguage()` hook and `t()` function.

#### Core API
```tsx
import { useLanguage } from "@/contexts/LanguageContext";

const MyComponent = () => {
  const { t, language, isRTL } = useLanguage();

  return (
    <div className={isRTL ? "text-right" : "text-left"}>
      <h1>{t("section.title")}</h1>
      <p>{t("section.description")}</p>
    </div>
  );
};
```

#### Translation Files
- English: `src/translations/en.json`
- Arabic: `src/translations/ar.json`
- Keys use dot notation: `t("hero.badge")`, `t("contact.formTitle")`
- Both files MUST have identical key structures at all times

#### i18n Rules
1. **Use `useLanguage()` hook** — not `useContext(LanguageContext)` directly
2. **Use `t()` for ALL display text** — headings, labels, buttons, placeholders, error messages, tooltips, alt text
3. **Add keys to BOTH translation files** — when adding a new key to `en.json`, immediately add the Arabic translation to `ar.json`
4. **Use `isRTL` for directional logic** — flip layouts, icons, animations, and scroll directions
5. **Prefer logical CSS properties** — use `ms-4` (margin-inline-start) over `ml-4` (margin-left) so layouts auto-flip in RTL
6. **Test both directions** — verify LTR (English) and RTL (Arabic) rendering for every new component
7. **Never concatenate translated strings** — use separate keys or template variables in translation values

#### RTL Layout Patterns
```tsx
const { t, isRTL } = useLanguage();

// Directional flex
<div className={`flex ${isRTL ? "flex-row-reverse" : "flex-row"} items-center gap-3`}>
  <Icon />
  <span>{t("label")}</span>
</div>

// Directional animations
<motion.div
  initial={{ opacity: 0, x: isRTL ? 20 : -20 }}
  animate={{ opacity: 1, x: 0 }}
/>

// Logical spacing (auto-flips in RTL)
<div className="ps-4 pe-2 text-start">{t("content")}</div>
```

#### Key Naming Conventions
- Group by section: `hero.*`, `nav.*`, `contact.*`, `footer.*`, `common.*`
- Use camelCase for key names: `formTitle`, `viewAll`, `learnMore`
- Shared strings go in `common.*`: `common.learnMore`, `common.loading`, `common.error`

---

## 3D Graphics & Shaders

### Three.js Scene Components
Located in `src/components/hero/`:
- **ThreeDScene.tsx** - Main 3D scene with interactive blobs
- Key features:
  - Hexagonal blob variants
  - Collision detection
  - Cursor-blob interaction
  - Multiple shader materials
  - Performance optimizations

### Shader Development
- Store GLSL shaders in `src/components/hero/shaders/`
- Use raw-loader webpack configuration (already set up in `next.config.mjs`)
- Access via:
  ```tsx
  import vertexShader from "./shaders/vertexShader.glsl";
  import fragmentShader from "./shaders/fragmentShader.glsl";
  ```

### WebGL Performance
- Use `useFrame` hook sparingly, batch updates
- Dispose of geometries and materials properly
- Use instancing for multiple identical objects
- Monitor draw calls and texture memory

---

## Key Dependencies & Usage

### Framer Motion / Motion
```tsx
import { motion, useScroll, useTransform } from "motion/react";

// Scroll-based animations
const { scrollY } = useScroll();
const opacity = useTransform(scrollY, [0, 300], [0, 1]);
```

### GSAP
```tsx
import gsap from "gsap";

gsap.to(element, { duration: 1, opacity: 0 });
gsap.timeline().add(...).add(...)
```

### Three.js / React Three Fiber
```tsx
import { Canvas, useFrame } from "@react-three/fiber";
import { Sphere, MeshDistortMaterial } from "@react-three/drei";
import * as THREE from "three";
```

---

## Performance Optimization

### Page Performance
1. **Code Splitting** - Next.js automatically chunks code at routes
2. **Image Optimization** - Use Next.js Image component with `priority` or `loading="lazy"`
3. **Font Optimization** - Fonts configured in `layout.tsx` with `display: "swap"`
4. **Lazy Loading** - Use `LazySection` component for below-fold content
5. **CSS-in-JS** - Use Tailwind utility classes (already optimized)

### Runtime Performance
1. **Memoization** - Use `useMemo` for expensive calculations
2. **Callback Optimization** - Use `useCallback` for event handlers
3. **Component Splitting** - Break large components into smaller, focused ones
4. **Avoid Reconciliation** - Use keys properly in lists
5. **3D Optimization** - Reduce polygon counts, use LOD (level of detail)

### Build Configuration
- Webpack configured for GLSL shader support
- SVG support enabled
- Image formats: AVIF, WebP, JPEG/PNG
- Minimum cache TTL: 60 seconds

---

## SEO & Metadata

### Metadata
- Configured in `src/app/layout.tsx`
- Meta description required for all pages
- Open Graph tags for social sharing
- Keywords optimized for Qatar digital marketing industry
- Canonical URLs implemented

### Structured Data
- `StructuredData.tsx` - JSON-LD schema markup
- Include Organization, LocalBusiness schema
- Product/Service schema for offerings
- Article schema for case studies

### Sitemap
- Dynamic sitemap generation in `src/app/sitemap.js`
- Robots.txt configured in `public/robots.txt`

---

## Development Workflow

### Setup & Installation
```bash
# Install dependencies
yarn install

# Run development server (localhost:3000)
yarn run dev

# Build for production
yarn build

# Start production server
yarn start

# Lint code
yarn lint
```

### Development Commands
```bash
# Package manager: Yarn 4.5.0+
yarn dev          # Start dev server with hot reload
yarn build        # Production build
yarn start        # Run production server
yarn lint         # Run ESLint
```

### Environment Variables
Create `.env.local` for local development:
```
NEXT_PUBLIC_GA_ID=your_google_analytics_id
NEXT_PUBLIC_CLARITY_ID=your_microsoft_clarity_id
```

### Git Workflow
- Branch naming: `feature/description`, `fix/description`
- Commit messages: Clear, descriptive, action-based
- PRs: Link to issues, include description of changes

---

## Accessibility (a11y)

### Requirements
1. **Semantic HTML** - Use `<button>`, `<nav>`, `<header>`, not divs
2. **ARIA Labels** - Add `aria-label` to interactive elements
3. **Keyboard Navigation** - All interactive elements keyboard accessible
4. **Color Contrast** - Maintain WCAG AA compliance
5. **Motion Preferences** - Respect `prefers-reduced-motion`
   ```tsx
   <MotionSafe>
     <motion.div>Animated content</motion.div>
   </MotionSafe>
   ```
6. **Alt Text** - All images must have descriptive alt text
7. **Focus Indicators** - Visible focus rings on interactive elements

### Testing Accessibility
- Use Lighthouse audit in Chrome DevTools
- Manual keyboard navigation testing
- Screen reader testing (NVDA, JAWS)
- Firefox accessibility inspector

---

## Common Development Tasks

### Adding a New Page
1. Create folder in `src/app/[page-name]/`
2. Add `page.tsx` with layout
3. Export metadata from `layout.tsx` or page file
4. Update navbar links in `Navbar.tsx`
5. Test routing and metadata

### Adding a New Component
1. Create in `src/components/` with PascalCase name
2. Use TypeScript with type definitions
3. Export as default for easier imports
4. Use design system and `brand-*` color tokens — no hardcoded hex values
5. Wrap all user-facing text with `t()` from `useLanguage()`
6. Add translation keys to both `en.json` and `ar.json`
7. Support RTL layout using `isRTL` flag and logical CSS properties
8. Include JSDoc comments for complex props

### Adding Animations
1. Use Framer Motion for most cases
2. Define variants in `animation-variants.ts`
3. Respect reduced motion preferences
4. Test performance on lower-end devices
5. Use `will-change` CSS sparingly

### Updating Translations
1. Identify the section namespace (e.g., `hero`, `contact`, `common`)
2. Add the new key to **both** `src/translations/en.json` and `ar.json` simultaneously
3. Use descriptive camelCase key names: `formSubmitSuccess`, not `msg1`
4. Access via the `useLanguage()` hook:
   ```tsx
   const { t, isRTL } = useLanguage();
   return <p>{t("section.newKey")}</p>;
   ```
5. For shared/reusable strings, add to the `common.*` namespace
6. Test both LTR (English) and RTL (Arabic) rendering
7. Verify no hardcoded English or Arabic text remains in the component JSX

### Adding Images
1. Place in `public/assets/images/[category]/`
2. Optimize before adding (compress, convert to WebP)
3. Use Next.js Image component
4. Set width/height to prevent layout shift
5. Provide descriptive alt text

---

## Useful Commands & Debugging

### Type Checking
```bash
# Manual TypeScript check (build skips this)
tsc --noEmit
```

### Next.js Specific
- `localhost:3000` - Development server
- Dev tools available at `next/image` for img optimization insights
- Static generation happens at `next build`

### Browser DevTools
- React DevTools - Inspect components, hooks
- Chrome Lighthouse - Performance, a11y, SEO
- Network tab - Check image loading, caching
- Console - Check for errors, warnings

---

## Key Files to Know

| File | Purpose |
|------|---------|
| `src/app/layout.tsx` | Root metadata, fonts, providers |
| `src/lib/design-system.js` | Design tokens, common styles |
| `tailwind.config.js` | Tailwind configuration, colors |
| `next.config.mjs` | Next.js configuration, webpack setup |
| `src/contexts/LanguageContext.tsx` | Language state management |
| `src/components/Navbar.tsx` | Main navigation component |
| `src/components/hero/ThreeDScene.tsx` | 3D blob scene |
| `tsconfig.json` | TypeScript configuration |
| `package.json` | Dependencies, scripts |
| `colors.config.js` | Brand color palette |

---

## Additional Guidelines

### Code Quality
- Use TypeScript extensively - it catches errors early
- Write self-documenting code with clear naming
- Add JSDoc comments for complex functions:
  ```tsx
  /**
   * Renders a hero section with animated background
   * @param title - Main headline
   * @param subtitle - Supporting text
   */
  ```
- Keep components focused on single responsibility
- Avoid prop drilling - use context for global state

### Best Practices
- **Never hardcode user-facing text** — always use `t()` from `useLanguage()` for any text visible to users
- **Never hardcode brand colors** — always use Tailwind `brand-*` token classes instead of raw hex values like `bg-[#04E4FF]`
- Never use inline styles — use Tailwind classes
- Don't disable ESLint rules without explanation
- Test on mobile devices, not just desktop
- Test both LTR and RTL layouts for every new component
- Use `const` and `let`, never `var`
- Prefer functional programming patterns
- Handle errors gracefully with error boundaries
- Validate all user inputs and API responses

### Performance Checklist
- [ ] Images optimized and lazy-loaded
- [ ] Fonts using `display: swap`
- [ ] Third-party scripts deferred
- [ ] CSS properly organized and purged
- [ ] No unused dependencies
- [ ] 3D scenes have reasonable polygon counts
- [ ] Animations GPU-accelerated
- [ ] No memory leaks in effects

### i18n Checklist (Required for Every Component)
- [ ] All user-facing strings use `t()` — zero hardcoded text in JSX
- [ ] New translation keys added to **both** `en.json` and `ar.json`
- [ ] RTL layout tested — component renders correctly in Arabic mode
- [ ] Directional styles use `isRTL` or logical CSS properties (`ps-`, `pe-`, `ms-`, `me-`)
- [ ] No string concatenation for translated content

### Brand Color Checklist (Required for Every Component)
- [ ] All colors use Tailwind `brand-*` tokens — zero raw hex values in JSX
- [ ] Gradients use brand tokens: `from-brand-secondary to-brand-accent`
- [ ] Opacity variants use token syntax: `bg-brand-secondary/20`, `text-brand-white/60`
- [ ] No new arbitrary color values introduced without adding to `colors.config.js`

---

## Questions or Issues?

Refer to:
- **Project README**: Project overview and setup
- **Next.js Docs**: Framework features and APIs
- **Tailwind Docs**: Utility classes and configuration
- **Framer Motion Docs**: Animation patterns
- **Three.js Documentation**: 3D graphics features