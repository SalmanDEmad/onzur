import { Inter, Poppins, Source_Sans_3 } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";

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

export const metadata = {
  title: "Onzur Media Studio - Qatar's Leading Digital Marketing Agency",
  description:
    "Transform your brand with Onzur Media Studio. We create viral content, professional websites, and digital marketing strategies that drive real results in Qatar and beyond.",
  icons: {
    icon: [
      { url: '/assets/images/onzur-logo-white.svg', type: 'image/svg+xml' },
    ],
    apple: '/assets/images/onzur-logo-white.svg',
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${poppins.variable} ${sourceSans.variable}`}
    >
      <body
        className={`font-source-sans bg-[#00042A] antialiased overflow-x-hidden`}
      >
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
