import Image from "next/image";
import Link from "next/link";

const locations = [
  {
    id: "miami",
    bgImage: "/assets/images/miami-location-bg.png",
    name: "Miami",
    number: "01",
    description:
      "Founded in Miami, Digital Silk helps Floridian businesses grow their brands online. Our services stem from a Miami-Dade County hub, while our global team serves brands from across the U.S. and internationally.",
    clients:
      "Miami Country Day School, Arnold Jewelers, FieldEdge, Rollink, Barton G",
    addressLine1: "17975 Collins Avenue",
    addressLine2: "Sunny Isles Beach, FL 33160",
    phone: "(800) 206-9413",
  },
  {
    id: "chicago",
    bgImage: "/assets/images/chicago-location-bg.png",
    name: "Chicago",
    number: "02",
    // Add description, clients, address, phone for Chicago if available in Figma or from client
    description:
      "Our Chicago office serves as a key hub for Midwest clients, offering tailored digital strategies and innovative web solutions.",
    clients: "Northwestern University, Local Motors, IBM (Midwest)", // Placeholder
    addressLine1: "123 N Wacker Dr", // Placeholder
    addressLine2: "Chicago, IL 60606", // Placeholder
    phone: "(312) 555-0123", // Placeholder
  },
  {
    id: "new-york",
    bgImage: "/assets/images/new-york-location-bg.png",
    name: "New York",
    number: "03",
    description:
      "From the heart of NYC, we partner with businesses to elevate their digital presence through cutting-edge design and marketing.",
    clients: "Sony, Xerox, S&P Global", // Placeholder
    addressLine1: "45 Rockefeller Plaza", // Placeholder
    addressLine2: "New York, NY 10111", // Placeholder
    phone: "(212) 555-0145", // Placeholder
  },
  {
    id: "california",
    bgImage: "/assets/images/california-location-bg.png",
    name: "California",
    number: "04",
    description:
      "Serving clients across California, our team delivers impactful web solutions and digital strategies from the Golden State.",
    clients: "Puma, HP, Grenco Science", // Placeholder
    addressLine1: "1000 Universal Studios Blvd", // Placeholder
    addressLine2: "Universal City, CA 91608", // Placeholder
    phone: "(818) 555-0167", // Placeholder
  },
];

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-[#723FC7] via-[#5192F7] to-[#407CD9] text-white pt-16 md:pt-24 pb-8">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Locations
          </h2>
          <p className="text-lg md:text-xl max-w-3xl mx-auto opacity-90">
            With multiple locations throughout the United States, Digital Silk
            delivers localized strategies that complement your brand's national
            presence.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-16 md:mb-24">
          {locations.map((location, index) => (
            <div
              key={location.id}
              className="relative rounded-lg overflow-hidden group aspect-[193/650]"
            >
              <Image
                src={location.bgImage}
                alt={`${location.name} office background`}
                layout="fill"
                objectFit="cover"
                className="transition-transform duration-500 ease-in-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/60 group-hover:bg-black/70 transition-colors duration-300 p-6 flex flex-col justify-end">
                {index === 0 ? (
                  // Detailed layout for Miami (first item)
                  <>
                    <p className="text-6xl md:text-7xl font-bold opacity-20 absolute top-6 left-6">
                      {location.number}
                    </p>
                    <h3 className="text-3xl font-bold mb-3 mt-auto">
                      {location.name}
                    </h3>
                    <p className="text-sm opacity-80 mb-4 leading-relaxed">
                      {location.description}
                    </p>
                    <div className="flex items-center text-xs mb-1 opacity-90">
                      <Image
                        src="/assets/images/arrow-right-footer.svg"
                        alt=""
                        width={15}
                        height={15}
                        className="mr-2 filter brightness-0 invert-[1] sepia-[1] saturate-[5] hue-rotate-[150deg]"
                      />
                      <span>CLIENTS:</span>
                    </div>
                    <p className="text-xs opacity-80 mb-4 leading-relaxed">
                      {location.clients}
                    </p>
                    <div className="border-t border-white/20 pt-4 space-y-2 text-sm">
                      <div className="flex items-start">
                        <Image
                          src="/assets/images/location-icon-footer.svg"
                          alt="Address"
                          width={18}
                          height={18}
                          className="mr-2 mt-1 opacity-80"
                        />
                        <div>
                          <p>{location.addressLine1}</p>
                          <p>{location.addressLine2}</p>
                        </div>
                      </div>
                      <div className="flex items-center">
                        {/* Placeholder for phone icon if not downloaded */}
                        {/* <Image src="/assets/images/phone-icon-footer.svg" alt="Phone" width={18} height={18} className="mr-2 opacity-80"/> */}
                        <span className="mr-2 opacity-80 text-xl">📞</span>{" "}
                        {/* Fallback emoji or use a generic icon */}
                        <span className="text-[#01AFE9] font-bold text-base">
                          {location.phone}
                        </span>
                      </div>
                    </div>
                  </>
                ) : (
                  // Simpler layout for other locations
                  <>
                    <p className="text-6xl md:text-7xl font-bold opacity-80 group-hover:opacity-100 transition-opacity duration-300">
                      {location.number}
                    </p>
                    <h3 className="text-3xl font-bold mt-2">{location.name}</h3>
                    {/* You might want to add a brief description or key info here too */}
                  </>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom part of the footer: Links, Copyright */}
        <div className="border-t border-white/20 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8 text-sm">
            <div>
              <Link href="/" legacyBehavior>
                <a className="text-xl font-bold mb-3 inline-block hover:opacity-80 transition-opacity">
                  Digital Silk
                </a>
              </Link>
              <p className="opacity-70 text-xs">
                Leading digital agency providing custom web design and strategic
                marketing solutions to elevate brands online globally.
              </p>
            </div>
            <div>
              <h5 className="font-semibold mb-3 text-base">Company</h5>
              <ul className="space-y-1.5 opacity-80">
                <li>
                  <Link href="/about" legacyBehavior>
                    <a className="hover:opacity-100">About Us</a>
                  </Link>
                </li>
                <li>
                  <Link href="/careers" legacyBehavior>
                    <a className="hover:opacity-100">Careers</a>
                  </Link>
                </li>
                <li>
                  <Link href="/contact" legacyBehavior>
                    <a className="hover:opacity-100">Contact</a>
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-3 text-base">Services</h5>
              <ul className="space-y-1.5 opacity-80">
                <li>
                  <Link href="/services/web-design" legacyBehavior>
                    <a className="hover:opacity-100">Web Design</a>
                  </Link>
                </li>
                <li>
                  <Link href="/services/branding" legacyBehavior>
                    <a className="hover:opacity-100">Branding</a>
                  </Link>
                </li>
                <li>
                  <Link href="/services/digital-marketing" legacyBehavior>
                    <a className="hover:opacity-100">Digital Marketing</a>
                  </Link>
                </li>
                <li>
                  <Link href="/services/ecommerce" legacyBehavior>
                    <a className="hover:opacity-100">eCommerce</a>
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-3 text-base">Connect</h5>
              {/* Social Icons Placeholder - Use actual icons or SVGs */}
              <div className="flex space-x-3 mb-3">
                <a href="#" aria-label="Facebook" className="hover:opacity-70">
                  <svg
                    width="20"
                    height="20"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                  </svg>
                </a>
                <a href="#" aria-label="Twitter" className="hover:opacity-70">
                  <svg
                    width="20"
                    height="20"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-.42.719-.665 1.55-.665 2.427 0 1.71.87 3.213 2.188 4.097-.807-.026-1.566-.247-2.229-.616v.054c0 2.385 1.693 4.374 3.946 4.827-.413.111-.849.17-1.296.17-.316 0-.623-.031-.928-.086.653 1.947 2.561 3.366 4.816 3.406-1.68.932-3.804 1.485-6.115 1.485-.398 0-.79-.023-1.175-.068 2.179 1.397 4.768 2.212 7.548 2.212 9.058 0 14.01-7.503 14.01-14.013 0-.213-.005-.426-.015-.637.961-.695 1.798-1.562 2.457-2.546z" />
                  </svg>
                </a>
                <a href="#" aria-label="LinkedIn" className="hover:opacity-70">
                  <svg
                    width="20"
                    height="20"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-4.499 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                  </svg>
                </a>
              </div>
              <p className="opacity-70 text-xs">
                Stay connected for the latest updates and insights from our
                team.
              </p>
            </div>
          </div>

          <div className="text-center text-xs opacity-60 mt-12">
            <p>
              &copy; {new Date().getFullYear()} Digital Silk. All Rights
              Reserved.
              <Link href="/privacy-policy" legacyBehavior>
                <a className="ml-2 hover:opacity-100">Privacy Policy</a>
              </Link>
              <span className="mx-1">|</span>
              <Link href="/terms-of-service" legacyBehavior>
                <a className="hover:opacity-100">Terms of Service</a>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
