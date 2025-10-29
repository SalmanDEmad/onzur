"use client";
import { useActionState } from "react"; // React 19 updated hook
import Image from "next/image";
import { motion } from "motion/react";
import {
  MotionSection,
  MotionDiv,
  fadeInUp,
  fadeInLeft,
  fadeInRight,
  stagger,
} from "./MotionSafe";
import { submitContactForm } from "../app/actions"; // Import the server action
import { commonStyles } from "../lib/design-system";
import {
  User,
  Building,
  Mail,
  Phone,
  MessageSquare,
  Instagram,
  Linkedin,
  ChevronRight,
} from "lucide-react";

const socialLinks = [
  { href: "#", icon: Instagram, alt: "Instagram" },
  { href: "#", icon: Linkedin, alt: "LinkedIn" },
];

const formFields = [
  {
    id: "name",
    label: "Name*",
    type: "text",
    icon: User,
  },
  {
    id: "company",
    label: "Company Name*",
    type: "text",
    icon: Building,
  },
  {
    id: "email",
    label: "Email*",
    type: "email",
    icon: Mail,
  },
  {
    id: "phone",
    label: "Phone*",
    type: "tel",
    icon: Phone,
  },
];

const inputVariants = {
  focus: { scale: 1.02, borderColor: "#04E4FF" },
};

// Enhanced form field variants
const fieldVariants = {
  hidden: { opacity: 0, y: 10 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function ContactUsSection() {
  // useActionState for handling server action response
  const initialState = { message: null, success: null };
  const [state, formAction] = useActionState(submitContactForm, initialState);

  return (
    <section
      id="contact"
      className={`relative ${commonStyles.sectionDark} text-white overflow-hidden`}
    >
      <div className="absolute inset-0 opacity-50">
        <Image
          src="/assets/images/hero-bg-2.png"
          alt="Abstract background design"
          layout="fill"
          objectFit="cover"
          className="blur-sm"
          sizes="100vw"
        />
      </div>

      <div className={`${commonStyles.container} relative z-10`}>
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-stretch">
          {/* Left Column */}
          <MotionDiv
            className="lg:w-5/12 flex flex-col justify-center text-center lg:text-left py-8"
            variants={fadeInLeft()}
          >
            <motion.p
              className={`${commonStyles.bodyLarge} uppercase tracking-wider font-semibold text-[#04E4FF] mb-6`}
              variants={fadeInUp(0.1)}
            >
              Ready to Scale Your Business?
            </motion.p>
            <motion.h2
              className={`${commonStyles.heading1} mb-8 leading-tight`}
              variants={fadeInUp(0.2)}
            >
              <span className="text-[#04E4FF]">
                Let's Discuss
              </span>
              <br />
              <span className="text-white">
                Your Project
              </span>
            </motion.h2>
            <motion.div
              className="w-12 h-0.5 bg-[#01AFE9] mb-6 mx-auto lg:mx-0"
              variants={fadeInUp(0.3)}
            />
            <motion.div
              className="space-y-4 mb-6"
              variants={stagger(0.1, 0.05)}
            >
              <motion.a
                href="tel:+97459990137"
                className="flex items-center justify-center lg:justify-start hover:text-[#04E4FF] transition-colors cursor-pointer"
                variants={fadeInUp(0.4)}
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
              >
                <Phone size={20} className="text-[#04E4FF] mr-3" />
                <span className="text-lg font-medium">
                  Phone: +974 5999 0137
                </span>
              </motion.a>
              <motion.a
                href="https://wa.me/97477507972?text=Hello! I'm interested in your services."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center lg:justify-start hover:text-[#04E4FF] transition-colors cursor-pointer"
                variants={fadeInUp(0.5)}
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
              >
                <MessageSquare size={20} className="text-[#04E4FF] mr-3" />
                <span className="text-lg font-medium">
                  WhatsApp: +974 7750 7972
                </span>
              </motion.a>
            </motion.div>
            <motion.p
              className="text-lg md:text-xl font-semibold mb-4"
              variants={fadeInUp(0.6)}
            >
              Follow Us
            </motion.p>
            <motion.div
              className="flex justify-center lg:justify-start space-x-4"
              variants={stagger(0.05, 0.05)}
            >
              {socialLinks.map((link, index) => (
                <motion.a
                  key={link.alt}
                  href={link.href}
                  variants={fadeInUp(0.7 + index * 0.1)}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                >
                  <link.icon size={28} className="text-white" />
                </motion.a>
              ))}
            </motion.div>
          </MotionDiv>

          {/* Right Column - Form */}
          <MotionDiv
            className={`lg:w-7/12 ${commonStyles.cardGlass}`}
            variants={fadeInRight()}
          >
            <motion.h3
              className={`${commonStyles.heading2} mb-8 text-center lg:text-left text-white`}
              variants={fadeInUp(0.1)}
            >
              Tell Us About Your Goals
            </motion.h3>
            <motion.form
              action={formAction}
              className="space-y-6"
              variants={stagger(0.1, 0.05)}
            >
              <motion.div
                className="grid grid-cols-1 sm:grid-cols-2 gap-6"
                variants={stagger(0.02, 0.03)}
              >
                {formFields.map((field, index) => (
                  <motion.div
                    key={field.id}
                    className="relative"
                    variants={fieldVariants}
                    whileFocus="focus"
                  >
                    <div className="absolute left-3 top-1/2 -translate-y-1/2">
                      <field.icon size={20} className="opacity-70 text-white" />
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
                  </motion.div>
                ))}
              </motion.div>
              <motion.div className="relative" variants={fieldVariants}>
                <div className="absolute left-3 top-4">
                  <MessageSquare size={20} className="opacity-70 text-white" />
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
              </motion.div>
              <motion.div
                className="text-center lg:text-left pt-4"
                variants={fadeInUp(0.3)}
              >
                <motion.button
                  type="submit"
                  className={`${commonStyles.buttonPrimary} group uppercase tracking-wider`}
                  whileHover={{ scale: 1.02, y: -1 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: "spring", stiffness: 400, damping: 25 }}
                >
                  <span className="relative z-10 uppercase tracking-wider">
                    Start Your Project
                  </span>
                  <motion.div
                    className="inline-block ml-3 relative z-10"
                    whileHover={{ x: 3 }}
                    transition={{ type: "spring", stiffness: 400, damping: 25 }}
                  >
                    <ChevronRight size={16} />
                  </motion.div>
                </motion.button>
              </motion.div>
              {/* Display server action response */}
              {state?.message && (
                <motion.p
                  className={`mt-4 text-center text-sm ${
                    state.success ? "text-green-400" : "text-red-400"
                  }`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {state.message}
                </motion.p>
              )}
            </motion.form>
          </MotionDiv>
        </div>
      </div>
    </section>
  );
}
