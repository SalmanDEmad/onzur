import { Inter, Roboto, DM_Sans } from "next/font/google";
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
const dmSans = DM_Sans({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-dm-sans",
});

export const metadata = {
  title: "Onzur Media Studio - Qatar's Leading Digital Marketing Agency",
  description:
    "Transform your brand with Onzur Media Studio. We create viral content, professional websites, and digital marketing strategies that drive real results in Qatar and beyond.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${roboto.variable} ${dmSans.variable}`}>
      <body className={`font-dm-sans bg-[#00042A] antialiased`}>
        <Navbar />
        <main className="pt-[82px]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
