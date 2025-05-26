"use client";
import Image from "next/image";
import { useFormState } from "react-dom";
import { submitDownloadForm } from "../app/actions";

export default function StayAheadSection() {
  const initialState = { message: null, success: null };
  const [state, formAction] = useFormState(submitDownloadForm, initialState);

  return (
    <section className="bg-gradient-to-br from-[#154485] via-[#20074C] to-[#552293] py-16 md:py-24 text-white relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
          {/* Left Column: Text and Form */}
          <div className="md:pr-8">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Stay Ahead in 2025!
            </h2>
            <p className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-2">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#04E4FF] to-[#23BEF9]">
                Download
              </span>{" "}
              the Top Digital Trends Shaping
            </p>
            <p className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-10">
              Branding & Web Design
            </p>

            <form
              action={formAction}
              className="flex flex-col sm:flex-row items-stretch max-w-xl border border-white/30 rounded-md p-1"
            >
              <input
                type="email"
                name="email"
                placeholder="Enter Your Email"
                className="flex-grow bg-transparent text-white placeholder-white/50 px-4 py-4 text-lg focus:outline-none focus:ring-1 focus:ring-white/50 rounded-l-md sm:rounded-none sm:rounded-l-md"
                aria-label="Email for trends download"
                required
              />
              <button
                type="submit"
                className="bg-gradient-to-r from-[#03D7FF] to-[#0092E2] hover:from-[#0092E2] hover:to-[#03D7FF] text-white font-semibold uppercase text-lg px-8 py-4 rounded-r-md sm:rounded-none sm:rounded-r-md flex items-center justify-center group transition-all duration-300 ease-in-out transform hover:scale-105 mt-2 sm:mt-0 w-full sm:w-auto"
              >
                Download
                <span className="ml-3 relative w-16 h-3 block overflow-hidden">
                  <Image
                    src="/assets/images/download-arrow-icon.svg"
                    alt=""
                    width={69}
                    height={12}
                    className="absolute left-0 top-1/2 transform -translate-y-1/2 transition-transform duration-300 ease-in-out group-hover:translate-x-1"
                  />
                </span>
              </button>
            </form>
            {state?.message && (
              <p
                className={`mt-3 text-sm ${
                  state.success ? "text-green-300" : "text-red-300"
                }`}
              >
                {state.message}
              </p>
            )}
          </div>

          {/* Right Column: Image */}
          <div className="mt-10 md:mt-0 flex justify-center md:justify-end">
            <div className="relative w-full max-w-md lg:max-w-xl xl:max-w-2xl aspect-[941/706]">
              <Image
                src="/assets/images/digital-trends-whitepaper.png"
                alt="Digital Trends Whitepaper 2025"
                layout="fill"
                objectFit="contain"
                priority
              />
            </div>
          </div>
        </div>
      </div>
      {/* Decorative element from Figma */}
      <div
        className="absolute top-1/2 left-3/4 transform -translate-x-1/4 -translate-y-1/4 w-4 h-0.5 bg-[#04E4FF]/30"
        style={{ boxShadow: "0px 0px 250px 100px rgba(4, 228, 255, 0.81)" }}
      ></div>
    </section>
  );
}
