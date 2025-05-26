import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Onzur - Featured Projects",
  description:
    "Custom B2C, B2B and eCommerce solutions optimized for traffic, engagement and conversion.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={`${inter.className} font-roboto bg-[#00042A]`}>
        <Navbar />
        <main className="pt-[82px]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
