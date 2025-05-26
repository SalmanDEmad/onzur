import Image from "next/image";
import Link from "next/link";

const clients = [
  { name: "Babies R Us", logo: "/assets/images/babiesrus-logo.png" },
  { name: "Rollink", logo: "/assets/images/rollink-logo.svg" },
  { name: "J&H Tackle", logo: "/assets/images/jh-tackle-logo.png" },
  {
    name: "Northwestern University",
    logo: "/assets/images/northwestern-logo.svg",
  },
  { name: "IBM", logo: "/assets/images/ibm-logo.svg" },
  { name: "Buddha Brands", logo: "/assets/images/buddha-brands-logo.svg" },
  { name: "Absolute Dogs", logo: "/assets/images/absolute-dogs-logo.png" },
  { name: "Mitsui Plastics", logo: "/assets/images/mitsui-plastics-logo.png" },
  { name: "Puma Energy", logo: "/assets/images/puma-logo.svg" },
  { name: "Xerox", logo: "/assets/images/xerox-logo.png" },
  {
    name: "Enchant Christmas",
    logo: "/assets/images/enchant-logo.svg",
  },
  { name: "Grenco Science", logo: "/assets/images/grenco-logo.png" },
];

const ClientsSection = () => {
  return (
    <section className="bg-[#00042A] py-20 relative">
      <div className="absolute inset-0 opacity-40">
        {/* Radial Gradients - positions and colors from Figma */}
        <div
          className="absolute w-[1536px] h-[1927px] top-[-642px] left-1/2 -translate-x-1/2 rounded-full"
          style={{
            background:
              "radial-gradient(circle at center, #9536E5 0%, #9536E500 74%)",
          }}
        ></div>
        <div
          className="absolute w-[1536px] h-[1468px] top-[-275px] left-1/4 -translate-x-1/2 rounded-full"
          style={{
            background:
              "radial-gradient(circle at center, #00B9FF 0%, #00B9FF00 70%)",
          }}
        ></div>
      </div>

      <div className="container mx-auto px-4 max-w-7xl text-center relative z-10">
        <p className="text-white text-2xl font-bold tracking-[0.05em] uppercase mb-4">
          Clients Across Industries
        </p>
        <h2 className="text-white text-5xl md:text-6xl font-bold mb-6 leading-tight">
          Full-Service Web Design Agency
        </h2>
        <p className="text-white text-xl md:text-2xl max-w-3xl mx-auto mb-12">
          From startups to Fortune 500 companies, we create custom solutions
          that grow brands online
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 mb-16">
          {clients.map((client) => (
            <div
              key={client.name}
              className="bg-white/5 border border-white/10 rounded-lg p-6 flex flex-col items-center justify-center aspect-[3/2] transition-all duration-300 hover:bg-white/10 group"
            >
              <div className="w-3/4 h-16 relative">
                <Image
                  src={client.logo}
                  alt={`${client.name} logo`}
                  fill
                  style={{ objectFit: "contain" }}
                  className="opacity-70 group-hover:opacity-100 transition-opacity"
                />
              </div>
              <p className="text-white/70 text-sm mt-3 text-center">
                {client.name}
              </p>
            </div>
          ))}
        </div>

        <Link
          href="/explore-all-services"
          className="inline-flex items-center justify-center bg-white/10 text-white text-lg font-bold uppercase py-4 px-10 rounded-md border-2 border-white hover:bg-white/20 transition-colors group relative"
        >
          <span className="absolute inset-[-4px] border-4 border-white/60 rounded-lg blur-[5px] opacity-60 group-hover:opacity-80 transition-opacity"></span>
          <span className="relative">Explore All Services</span>
          <div className="relative w-3 h-4 ml-3">
            <Image
              src="/assets/images/arrow-right-white.svg" // Assuming this was downloaded
              alt="Arrow right"
              fill
              style={{ objectFit: "contain" }}
            />
          </div>
        </Link>
      </div>
    </section>
  );
};

export default ClientsSection;
