"use client";
import { useState } from "react";
import Image from "next/image";

const faqsData = [
  {
    id: "faq1",
    number: "01",
    question: "What does a web design agency do?",
    answer:
      "A web design agency is responsible for designing, creating, and maintaining websites. This includes everything from the visual layout and user interface to the underlying code and functionality. They work with clients to understand their business goals and create a website that effectively meets those needs, often also providing services like branding, SEO, and content creation.",
  },
  {
    id: "faq2",
    number: "02",
    question: "What is the difference between web design and web development?",
    answer:
      "Web design focuses on the visual appearance and usability of a website – what the user sees and interacts with (UI/UX). Web development involves the actual coding and technical construction of the website, including front-end (client-side) and back-end (server-side) programming to make the design functional.",
  },
  {
    id: "faq3",
    number: "03",
    question: "Why is responsive web design important?",
    answer:
      "Responsive web design ensures that a website adapts seamlessly to various screen sizes and devices (desktops, tablets, mobiles). This is crucial for providing a consistent user experience, improving SEO rankings (as Google prioritizes mobile-friendliness), and reaching a wider audience.",
  },
  {
    id: "faq4",
    number: "04",
    question: "How long does it take to design a website?",
    answer:
      "The timeline for website design varies greatly depending on the project's complexity, size, features required, and client feedback speed. A simple brochure website might take a few weeks, while a large e-commerce platform or custom web application could take several months or more.",
  },
  {
    id: "faq5",
    number: "05",
    question: "How much should I expect to pay for web design?",
    answer:
      "Web design costs depend on factors like the scope of work, complexity, agency experience, and ongoing maintenance. Prices can range from a few thousand dollars for a basic site to tens or hundreds of thousands for complex, custom-built platforms. It's best to get custom quotes based on specific needs.",
  },
  {
    id: "faq6",
    number: "06",
    question:
      "How can you help me generate leads after my website is launched?",
    answer:
      "Beyond design, many agencies offer digital marketing services like SEO (Search Engine Optimization), PPC (Pay-Per-Click) advertising, content marketing, social media marketing, and email marketing to drive traffic and generate leads for your new website.",
  },
  {
    id: "faq7",
    number: "07",
    question: "Do you offer website redesign services?",
    answer:
      "Yes, most web design agencies offer website redesign services. This involves evaluating your current site, identifying areas for improvement, and creating a new design that better aligns with your current brand, goals, and user expectations.",
  },
  {
    id: "faq8",
    number: "08",
    question: "Will my website be mobile-friendly?",
    answer:
      "Absolutely. Modern web design practices prioritize mobile-friendliness (responsive design) to ensure your website looks and functions well on all devices, which is essential for user experience and SEO.",
  },
  {
    id: "faq9",
    number: "09",
    question: "Can you create a logo for my brand?",
    answer:
      "Many web design agencies also offer branding services, which can include logo design, brand guidelines, and other visual identity elements to create a cohesive brand presence both online and offline.",
  },
];

export default function MoreFaqsSection() {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (id) => {
    setOpenFaq(openFaq === id ? null : id);
  };

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-[#1B2C5C] text-center mb-12 md:mb-16">
          Frequently Asked Questions
        </h2>
        <div className="max-w-3xl mx-auto space-y-1">
          {faqsData.map((faq) => (
            <div
              key={faq.id}
              className={`border-t ${
                faq.id === "faq1" ? "border-transparent" : "border-[#BEDEEF]"
              }`}
            >
              <button
                onClick={() => toggleFaq(faq.id)}
                className="w-full flex justify-between items-center py-5 md:py-6 text-left focus:outline-none"
              >
                <div className="flex items-center">
                  <span className="text-xl md:text-2xl font-medium text-[#3B7BCE] mr-4 w-8 text-center">
                    {faq.number}
                  </span>
                  <h3 className="text-lg md:text-xl font-semibold text-[#1B2C5C] group-hover:text-[#3B7BCE] transition-colors duration-200">
                    {faq.question}
                  </h3>
                </div>
                <Image
                  src="/assets/images/faq-arrow-icon.svg"
                  alt="Toggle FAQ"
                  width={20}
                  height={14}
                  className={`transform transition-transform duration-300 ${
                    openFaq === faq.id ? "-rotate-180" : "rotate-0"
                  }`}
                />
              </button>
              {openFaq === faq.id && (
                <div className="pb-5 md:pb-6 pl-12 pr-4 md:pl-16 md:pr-8">
                  <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
