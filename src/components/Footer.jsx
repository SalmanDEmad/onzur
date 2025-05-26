import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-[#0A1431] text-gray-400 py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Column 1: Logo & About (Placeholder) */}
          <div>
            <Link href="/" legacyBehavior>
              <a className="text-2xl font-bold text-white mb-4 inline-block">
                Digital Silk
              </a>
            </Link>
            <p className="text-sm mb-4">
              Leading digital agency specializing in custom web design,
              branding, and marketing solutions to grow brands online.
            </p>
            {/* Social Icons Placeholder */}
            <div className="flex space-x-4">
              <a href="#" className="hover:text-white transition-colors">
                FB
              </a>
              <a href="#" className="hover:text-white transition-colors">
                TW
              </a>
              <a href="#" className="hover:text-white transition-colors">
                LN
              </a>
              <a href="#" className="hover:text-white transition-colors">
                IG
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links (Placeholder) */}
          <div>
            <h5 className="text-lg font-semibold text-white mb-4">
              Quick Links
            </h5>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" legacyBehavior>
                  <a className="hover:text-white transition-colors">About Us</a>
                </Link>
              </li>
              <li>
                <Link href="/services" legacyBehavior>
                  <a className="hover:text-white transition-colors">Services</a>
                </Link>
              </li>
              <li>
                <Link href="/portfolio" legacyBehavior>
                  <a className="hover:text-white transition-colors">Our Work</a>
                </Link>
              </li>
              <li>
                <Link href="/blog" legacyBehavior>
                  <a className="hover:text-white transition-colors">Blog</a>
                </Link>
              </li>
              <li>
                <Link href="/contact" legacyBehavior>
                  <a className="hover:text-white transition-colors">
                    Contact Us
                  </a>
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Services (Placeholder) */}
          <div>
            <h5 className="text-lg font-semibold text-white mb-4">Services</h5>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/services/web-design" legacyBehavior>
                  <a className="hover:text-white transition-colors">
                    Web Design
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/services/ecommerce" legacyBehavior>
                  <a className="hover:text-white transition-colors">
                    eCommerce Development
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/services/branding" legacyBehavior>
                  <a className="hover:text-white transition-colors">Branding</a>
                </Link>
              </li>
              <li>
                <Link href="/services/digital-marketing" legacyBehavior>
                  <a className="hover:text-white transition-colors">
                    Digital Marketing
                  </a>
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact Info (Placeholder) */}
          <div>
            <h5 className="text-lg font-semibold text-white mb-4">
              Contact Us
            </h5>
            <address className="text-sm not-italic space-y-2">
              <p>123 Agency Street, Suite 400</p>
              <p>New York, NY 10001</p>
              <p>
                Email:{" "}
                <a
                  href="mailto:hello@digitalsilk.com"
                  className="hover:text-white transition-colors"
                >
                  hello@digitalsilk.com
                </a>
              </p>
              <p>
                Phone:{" "}
                <a
                  href="tel:+12125551234"
                  className="hover:text-white transition-colors"
                >
                  (212) 555-1234
                </a>
              </p>
            </address>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 text-center text-sm">
          <p>
            &copy; {new Date().getFullYear()} Digital Silk. All Rights Reserved.
          </p>
          <p className="mt-2">
            <Link href="/privacy-policy" legacyBehavior>
              <a className="hover:text-white transition-colors">
                Privacy Policy
              </a>
            </Link>
            <span className="mx-2">|</span>
            <Link href="/terms-of-service" legacyBehavior>
              <a className="hover:text-white transition-colors">
                Terms of Service
              </a>
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
