import { Inter, Roboto } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const roboto = Roboto({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-roboto",
});

export const metadata = {
  title: "Digital Silk - Premium Web Design Agency",
  description:
    "Digital Silk is a premium web design agency specializing in custom websites, branding, and digital marketing to grow brands online.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${roboto.variable}`}>
      <body className={`font-roboto bg-[#00042A] antialiased`}>
        <Navbar />
        <main className="pt-[82px] overflow-x-hidden">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
