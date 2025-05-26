import Image from "next/image";

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

export default function LocationsSection() {
  return (
    <section className="bg-gradient-to-br from-[#723FC7] via-[#5192F7] to-[#407CD9] text-white py-16 md:py-24">
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {locations.map((location, index) => (
            <div
              key={location.id}
              className="relative rounded-lg overflow-hidden group aspect-[193/650] min-h-[500px] md:min-h-[650px]"
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
                        <span className="mr-2 opacity-80 text-xl">📞</span>
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
                    {/* Basic info for other locations - can be expanded */}
                    <div className="mt-auto pt-4 border-t border-white/20 text-sm space-y-1 opacity-90">
                      <div className="flex items-start">
                        <Image
                          src="/assets/images/location-icon-footer.svg"
                          alt="Address"
                          width={16}
                          height={16}
                          className="mr-2 mt-0.5 opacity-80"
                        />
                        <div>
                          <p>{location.addressLine1}</p>
                          <p>{location.addressLine2}</p>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <span className="mr-2 opacity-80 text-lg">📞</span>
                        <span className="text-[#01AFE9] font-bold text-sm">
                          {location.phone}
                        </span>
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
