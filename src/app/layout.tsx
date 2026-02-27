import { Inter, Poppins, Source_Sans_3, Tajawal } from "next/font/google";
import { headers } from "next/headers";
import "./globals.css";
import Navbar from "../components/Navbar.tsx";
import Footer from "../components/Footer.tsx";
import StructuredData from "../components/StructuredData.tsx";
import GoogleAnalytics from "../components/GoogleAnalytics";
import MicrosoftClarity from "../components/MicrosoftClarity";
import { LanguageProvider } from "../contexts/LanguageContext";

const inter = Inter({ 
  subsets: ["latin"], 
  variable: "--font-inter",
  display: "swap",
});

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
});

const sourceSans = Source_Sans_3({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-source-sans",
});

// Arabic-first font — loaded via next/font for proper preloading and subsetting
const tajawal = Tajawal({
  weight: ["300", "400", "500", "700", "900"],
  subsets: ["arabic"],
  display: "swap",
  variable: "--font-tajawal",
});

export const metadata = {
  metadataBase: new URL('https://onzur.com'),
  title: {
    default: "Onzur Media Studio - Qatar's Leading Digital Marketing Agency",
    template: "%s | Onzur Media Studio"
  },
  description:
    "Transform your brand with Onzur Media Studio. We create viral content, professional websites, and digital marketing strategies that drive real results in Qatar and beyond.",
  keywords: [
    'digital marketing Qatar',
    'social media management Qatar',
    'video production Qatar',
    'content creation Qatar',
    'TikTok marketing',
    'web development Qatar',
    'PPC marketing Qatar',
    'Doha marketing agency',
    'Qatar advertising agency',
    'viral content creation'
  ],
  authors: [{ name: 'Onzur Media Studio' }],
  creator: 'Onzur Media Studio',
  publisher: 'Onzur Media Studio',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Onzur Media Studio - Qatar's Leading Digital Marketing Agency",
    description: "Transform your brand with Onzur Media Studio. We create viral content, professional websites, and digital marketing strategies that drive real results.",
    url: 'https://onzur.com',
    siteName: 'Onzur Media Studio',
    images: [
      {
        url: '/assets/images/onzur-logo-white.svg',
        width: 1200,
        height: 630,
        alt: 'Onzur Media Studio Logo',
      }
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Onzur Media Studio - Qatar's Leading Digital Marketing Agency",
    description: "Transform your brand with Onzur Media Studio. We create viral content, professional websites, and digital marketing strategies.",
    images: ['/assets/images/onzur-logo-white.svg'],
    creator: '@onzurmedia',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/assets/images/onzur-logo-white.svg', type: 'image/svg+xml' },
    ],
    apple: '/assets/images/onzur-logo-white.svg',
  },
  verification: {
    google: 'your-google-verification-code-here',
    // yandex: 'your-yandex-verification-code',
    // bing: 'your-bing-verification-code',
  },
};

export default async function RootLayout({ children }) {
  // Read the language resolved by middleware from the cookie — this allows the
  // server to render the correct lang/dir on the very first response, eliminating
  // the RTL layout flash for returning Arabic-language users.
  const headersList = await headers();
  const lang = (headersList.get('x-language') ?? 'en') as 'en' | 'ar';
  const dir = lang === 'ar' ? 'rtl' : 'ltr';

  return (
    <html
      lang={lang}
      dir={dir}
      className={`${inter.variable} ${poppins.variable} ${sourceSans.variable} ${tajawal.variable}`}
      suppressHydrationWarning
    >
      <head>
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#04E4FF" />
        <link rel="canonical" href="https://onzur.com" />
      </head>
      <body
        className={`font-source-sans bg-[#00042A] antialiased overflow-x-hidden`}
      >
        <LanguageProvider initialLanguage={lang}>
          <GoogleAnalytics />
          <MicrosoftClarity />
          <StructuredData />
          <Navbar />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
