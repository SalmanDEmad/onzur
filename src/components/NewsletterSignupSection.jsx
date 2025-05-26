export default function NewsletterSignupSection() {
  return (
    <section className="relative bg-[#0A0D34] py-20 md:py-28 overflow-hidden">
      {/* Decorative gradient circle */}
      <div className="absolute top-1/2 left-0 transform -translate-y-1/2 -translate-x-1/2 md:-translate-x-1/3 opacity-40">
        <div className="w-[800px] h-[800px] md:w-[1200px] md:h-[1200px] bg-gradient-radial from-[#00B9FF] via-[#00B9FF]/30 to-transparent rounded-full blur-2xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-10 md:gap-16">
          <div className="md:w-1/2 text-center md:text-left">
            <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight">
              Sign Up To Get The <br />
              Latest Digital Trends
            </h2>
          </div>

          <div className="md:w-1/2 w-full max-w-xl">
            <form className="flex flex-col sm:flex-row items-stretch gap-3 p-1.5 border border-white/30 rounded-lg bg-white/5 backdrop-blur-sm">
              <input
                type="email"
                placeholder="Enter Your Email"
                className="flex-grow px-5 py-4 text-lg text-white bg-transparent border-none rounded-md focus:outline-none focus:ring-2 focus:ring-[#00B9FF] placeholder-white/70"
                aria-label="Email for newsletter"
              />
              <button
                type="submit"
                className="px-8 py-4 text-lg font-medium tracking-wider text-white uppercase bg-gradient-to-br from-[#03D7FF] to-[#0092E2] rounded-md hover:from-[#0092E2] hover:to-[#03D7FF] focus:outline-none focus:ring-2 focus:ring-[#00B9FF] focus:ring-offset-2 focus:ring-offset-[#0A0D34] transition-all duration-300 ease-in-out whitespace-nowrap"
              >
                Sign Up
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
