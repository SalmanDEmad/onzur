"use client";
import { useActionState } from "react"; // React 19 updated hook
import Image from "next/image";
import { submitContactForm } from "../app/actions"; // Import the server action
import { commonStyles } from "../lib/design-system";

const socialLinks = [
  { href: "#", src: "/assets/images/instagram-contact.svg", alt: "Instagram" },
  { href: "#", src: "/assets/images/linkedin-contact.svg", alt: "LinkedIn" },
];

const formFields = [
  {
    id: "name",
    label: "Name*",
    type: "text",
    icon: "/assets/images/form-icon-name.svg",
  },
  {
    id: "company",
    label: "Company Name*",
    type: "text",
    icon: "/assets/images/form-icon-company.svg",
  },
  {
    id: "email",
    label: "Email*",
    type: "email",
    icon: "/assets/images/form-icon-email.svg",
  },
  {
    id: "phone",
    label: "Phone*",
    type: "tel",
    icon: "/assets/images/form-icon-phone.svg",
  },
];

export default function ContactUsSection() {
  // useActionState for handling server action response
  const initialState = { message: null, success: null };
  const [state, formAction] = useActionState(submitContactForm, initialState);

  return (
    <section id="contact" className={`relative ${commonStyles.sectionDark} text-white overflow-hidden`}>
      <div className="absolute inset-0 opacity-50">
        <Image
          src="/assets/images/contact-section-bg.png"
          alt="Abstract background design"
          layout="fill"
          objectFit="cover"
          className="blur-sm"
        />
      </div>

      <div className={`${commonStyles.container} relative z-10`}>
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-stretch">
          {/* Left Column */}
          <div className="lg:w-5/12 flex flex-col justify-center text-center lg:text-left py-8">
            <p className={`${commonStyles.bodyLarge} uppercase tracking-wider font-semibold text-[#04E4FF] mb-6`}>
              Let's Create Together
            </p>
            <h2 className={`${commonStyles.heading1} mb-8 leading-tight`}>
              <span className="text-[#04E4FF] [text-shadow:_0_0_10px_theme(colors.cyan.400)]">
                Your Story
              </span>
              <br />
              <span className="text-[#04E4FF] [text-shadow:_0_0_10px_theme(colors.cyan.400)]">
                Awaits
              </span>
            </h2>
            <div className="w-12 h-0.5 bg-[#01AFE9] mb-6 mx-auto lg:mx-0"></div>
            <p className="text-lg md:text-xl font-semibold mb-4">Follow Us</p>
            <div className="flex justify-center lg:justify-start space-x-4">
              {socialLinks.map((link) => (
                <a
                  key={link.alt}
                  href={link.href}
                  className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                >
                  <Image src={link.src} alt={link.alt} width={28} height={28} />
                </a>
              ))}
            </div>
          </div>

          {/* Right Column - Form */}
          <div className={`lg:w-7/12 ${commonStyles.cardGlass}`}>
            <h3 className={`${commonStyles.heading2} mb-8 text-center lg:text-left text-white`}>
              Start A Conversation With Us
            </h3>
            <form action={formAction} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {formFields.map((field) => (
                  <div key={field.id} className="relative">
                    <div className="absolute left-3 top-1/2 -translate-y-1/2">
                      <Image
                        src={field.icon}
                        alt=""
                        width={20}
                        height={20}
                        className="opacity-70"
                      />
                    </div>
                    <input
                      type={field.type}
                      name={field.id} // Name attribute is crucial for FormData
                      id={field.id}
                      // value and onChange removed, relying on native form handling with Server Actions
                      placeholder={field.label}
                      required
                      className="w-full pl-12 pr-4 py-3.5 bg-transparent border-b border-white/30 text-white placeholder-white/60 focus:outline-none focus:border-[#04E4FF] transition-colors text-lg"
                    />
                  </div>
                ))}
              </div>
              <div className="relative">
                <div className="absolute left-3 top-4">
                  <Image
                    src="/assets/images/form-icon-message.svg"
                    alt=""
                    width={20}
                    height={20}
                    className="opacity-70"
                  />
                </div>
                <textarea
                  name="message" // Name attribute is crucial
                  id="message"
                  // value and onChange removed
                  placeholder="Your Message*"
                  rows={4}
                  required
                  className="w-full pl-12 pr-4 py-3.5 bg-transparent border-b border-white/30 text-white placeholder-white/60 focus:outline-none focus:border-[#04E4FF] transition-colors text-lg resize-none"
                ></textarea>
              </div>
              <div className="text-center lg:text-left pt-4">
                <button
                  type="submit"
                  className={`${commonStyles.buttonPrimary} group uppercase tracking-wider`}
                >
                  <span className="relative z-10 uppercase tracking-wider">
                    Submit
                  </span>
                  <svg
                    className="ml-3 w-4 h-4 relative z-10 transition-transform duration-300 group-hover:translate-x-1.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </div>
              {/* Display server action response */}
              {state?.message && (
                <p
                  className={`mt-4 text-center text-sm ${
                    state.success ? "text-green-400" : "text-red-400"
                  }`}
                >
                  {state.message}
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
