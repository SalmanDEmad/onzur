"use client";

import Image from "next/image";
import Link from "next/link"; // Assuming some links might be actual internal links
import { useState } from "react";

const tocItems = [
  { id: "how-to-find", title: "How To Find The Best Web Design Company" },
  { id: "step-1", title: "Step 1: Define Your Needs" },
  { id: "step-2", title: "Step 2: Start Your Search" },
  { id: "step-3", title: "Step 3: Research & Shortlist Agencies" },
  { id: "step-4", title: "Step 4: Meet With The Agency(s)" },
  { id: "step-5", title: "Step 5: Make Your Decision" },
  {
    id: "why-digital-silk",
    title: "Why Digital Silk Is The Best Web Design Agency For Your Project",
  },
];

const LinkComponent = ({ href, children }) => (
  <Link
    href={href || "#"}
    className="text-[#3B7BCE] hover:text-[#0056b3] border-b border-[#8842DC] hover:border-[#5a1aa1] transition-colors"
  >
    {children}
  </Link>
);

export default function FaqSection() {
  const [isTocOpen, setIsTocOpen] = useState(true);

  const scrollToId = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="bg-gradient-to-b from-[#F1F5FE] to-white py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <h1 className="text-xl md:text-2xl font-bold text-[#3B7BCE] uppercase tracking-wider mb-2">
            Finding & Working With The
          </h1>
          <h2 className="text-4xl md:text-6xl font-bold text-[#3B7BCE]">
            Best Web Design Agency
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12">
          {/* Table of Contents - simplified, sticky on larger screens */}
          <div className="md:col-span-3 lg:col-span-3 relative">
            <div className="sticky top-28 bg-white p-6 rounded-lg shadow-lg">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-bold text-[#1B2C5C]">
                  Table of Contents
                </h3>
                <button
                  onClick={() => setIsTocOpen(!isTocOpen)}
                  className="p-1"
                  aria-label="Toggle Table of Contents"
                >
                  <Image
                    src={
                      isTocOpen
                        ? "/assets/images/toc-arrow-up.svg"
                        : "/assets/images/toc-arrow-down.svg"
                    }
                    alt={isTocOpen ? "Collapse" : "Expand"}
                    width={20}
                    height={20}
                  />
                </button>
              </div>
              {isTocOpen && (
                <nav>
                  <ul>
                    {tocItems.map((item, index) => (
                      <li
                        key={item.id}
                        className={`py-2 ${
                          index < tocItems.length - 1
                            ? "border-b border-gray-200"
                            : ""
                        }`}
                      >
                        <button
                          onClick={() => scrollToId(item.id)}
                          className="text-left w-full text-sm text-[#1B2C5C] hover:text-[#3B7BCE] transition-colors flex items-start"
                        >
                          <Image
                            src="/assets/images/toc-list-item-arrow.svg"
                            alt=""
                            width={7}
                            height={15}
                            className="mr-3 mt-1 flex-shrink-0"
                          />
                          {item.title}
                        </button>
                      </li>
                    ))}
                  </ul>
                </nav>
              )}
            </div>
          </div>

          {/* Main Content Area */}
          <div className="md:col-span-9 lg:col-span-9 space-y-10 text-[#1B2C5C] text-lg leading-relaxed">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <p className="font-semibold text-xl mb-4">
                  Whether starting a brand from the ground up or overhauling
                  your current website, working with a website design agency
                  gives you access to the top experts in web design.
                </p>
              </div>
              <div>
                <p className="text-[#5F6568] mb-4">
                  In turn, these experts have access to leading tools, modern
                  trends, best-practices and more to help ensure that your
                  website is not only unique but built to perform — if you find
                  the right agency, that is. Not all agencies are created equal.
                </p>
                <p className="text-[#5F6568]">
                  We'll breakdown exactly what to look for in a partner to help
                  you choose the best website design agency for your project.
                </p>
              </div>
            </div>

            <article id="how-to-find" className="space-y-6 pt-6">
              <h3 className="text-3xl font-bold text-[#1B2C5C]">
                How To Find The Best Web Design Company
              </h3>
              <p>
                Whether you're starting a brand from the ground up or your
                current website needs a complete overhaul due to lack of
                performance, working with a website design agency gives you
                access to the top experts in web design.
              </p>
              <p>
                In turn, these experts have access to leading tools, modern
                trends, best practices and more to help ensure that your website
                is not only unique but built to perform — if you find the right
                agency, that is. Not all agencies are created equal.
              </p>
              <p>
                We'll breakdown exactly what to look for in a partner to help
                you choose the best website design agency for your project.
              </p>
              <p>
                Follow the step-by-step guide below to kickstart your search and
                learn how to evaluate potential web design companies to partner
                with your brand.
              </p>
            </article>

            <article id="step-1" className="space-y-4 pt-6">
              <h4 className="text-2xl font-bold text-[#1B2C5C]">
                Step 1: Define Your Needs
              </h4>
              <p>
                Before you start the hunt, the first step is to fully define
                your needs. Here are three key areas to consider:
              </p>
              <ul className="space-y-3 pl-8 list-outside">
                {[
                  {
                    title: "Design needs:",
                    text: "Are you looking to build a new website from the ground up? Or do you have a current digital presence that needs either a light refresh or a complete overhaul?",
                  },
                  {
                    title: "Design approach:",
                    text: "Are you satisfied to settle for an agency that works with templates or do you need an agency that designs custom websites?",
                  },
                  {
                    title: "Website goals:",
                    text: "What are your specific goals for the website? For example: Higher search engine ranking, more traffic, greater engagement, increased conversion.",
                  },
                  {
                    title: "Website requirements:",
                    text: "What are your specific requirements for the website? Do you have a platform in mind? Create a list of must-have features and functionalities, along with a list of nice-to-haves if your budget allows.",
                  },
                ].map((item, index) => (
                  <li key={index} className="relative pl-6">
                    <span className="absolute left-[-12px] top-2 w-2 h-2 bg-[#008BDE] rounded-full transform -translate-y-1/2"></span>
                    <span className="absolute left-[-10px] top-1 w-px h-full bg-[#008BDE] opacity-50"></span>
                    <strong>{item.title}</strong> {item.text}
                  </li>
                ))}
              </ul>
              <p>
                Creating a{" "}
                <LinkComponent href="#">
                  website request for proposal
                </LinkComponent>{" "}
                (RFP) document can help you organize and outline your project
                for potential agencies. Agencies that are interested in taking
                on your project can then use this document to respond by
                submitting a proposal or a bid.
              </p>
            </article>

            <article id="step-2" className="space-y-4 pt-6">
              <h4 className="text-2xl font-bold text-[#1B2C5C]">
                Step 2: Start Your Search
              </h4>
              <p>
                The best way to find an agency for your digital project is, of
                course, online! Use a search engine or check out a B2B
                marketplace like{" "}
                <LinkComponent href="https://www.designrush.com/">
                  DesignRush
                </LinkComponent>{" "}
                — you can actually post your RFP here and wait for a bid, or
                search agencies and reach out to a few on your own.
              </p>
            </article>

            <article id="step-3" className="space-y-4 pt-6">
              <h4 className="text-2xl font-bold text-[#1B2C5C]">
                Step 3: Research & Shortlist Agencies
              </h4>
              <p>
                Whether you use a marketplace or Google to find potential
                partners, the next step is thorough research. For each agency
                you're interested in, explore the agency's:
              </p>
              <ul className="space-y-3 pl-8 list-outside">
                {[
                  {
                    title: "Website:",
                    text: "For an agency that you're considering partnering with, a professional website design is a must.",
                  },
                  {
                    title: "Services:",
                    text: "Some agencies focus on specific areas like web design or branding, while full-service agencies offer an entire scope of digital services.",
                  },
                  {
                    title: "Portfolio:",
                    text: (
                      <>
                        Any reputable agency will have a{" "}
                        <LinkComponent href="/portfolio">
                          digital portfolio
                        </LinkComponent>{" "}
                        easily accessible and available for potential clients to
                        view. Look through the projects to get an idea of the
                        agency's capabilities in terms of design, development,
                        branding and other applicable areas, in different
                        industries.
                      </>
                    ),
                  },
                  {
                    title: "Client testimonials:",
                    text: "Get a feel for what it's like to work with the agency through client testimonials that provide feedback about processes, team members and deliverables.",
                  },
                ].map((item, index) => (
                  <li key={index} className="relative pl-6">
                    <span className="absolute left-[-12px] top-2 w-2 h-2 bg-[#008BDE] rounded-full transform -translate-y-1/2"></span>
                    <span className="absolute left-[-10px] top-1 w-px h-full bg-[#008BDE] opacity-50"></span>
                    <strong>{item.title}</strong>{" "}
                    {typeof item.text === "string" ? item.text : item.text}
                  </li>
                ))}
              </ul>
              <p>
                Shortlist agencies based on these factors and create a list of
                3-5 agencies to set up a meeting with — which brings us to the
                next step!
              </p>
            </article>

            <article id="step-4" className="space-y-4 pt-6">
              <h4 className="text-2xl font-bold text-[#1B2C5C]">
                Step 4: Meet With The Agency(s)
              </h4>
              <p>
                Meeting with your potential partner, whether in person or
                digitally, allows you to get to know the team members who will
                be working on your project and ask questions about what the
                agency's processes look like behind the scenes.
              </p>
              <p>
                Some questions to ask when hiring a professional web design
                agency include:
              </p>
              <ol className="space-y-2 pl-8 list-decimal list-outside">
                {[
                  "What sets you apart from other agencies?",
                  "What digital services do you offer in addition to web design?",
                  "Do you have experience working with clients in my industry?",
                  "What does your website design process look like?",
                  "What does your website development process look like?",
                  "Who are the team members that will be working on my project?",
                  "Will you provide recommendations and ideas for my project?",
                  "What will our partnership look like in terms of communication and project updates?",
                  "How much will my project cost and how long will it take to complete?",
                  "How do you measure results?",
                ].map((question, index) => (
                  <li key={index}>{question}</li>
                ))}
              </ol>
              <p>
                These questions will help give you an inside look into the{" "}
                <LinkComponent href="#">
                  experience of the agency's team members
                </LinkComponent>
                , the value that the agency offers and what your relationship
                with the agency will look like throughout the life of your
                partnership — all important factors to consider when choosing
                the best web design agency for your project.
              </p>
            </article>

            <article id="step-5" className="space-y-4 pt-6">
              <h4 className="text-2xl font-bold text-[#1B2C5C]">
                Step 5: Make Your Decision
              </h4>
              <p>
                Finally, it's time to choose the best company for the job. Base
                your decision on your interview(s), the team members you met and
                the information you gathered.
              </p>
              <p>
                From their portfolio of past projects to the way they handle
                partnerships and measure success, the right company will be one
                that offers a team of experts, project ownership and complete
                transparency throughout your project.
              </p>
            </article>

            <article id="why-digital-silk" className="space-y-6 pt-6">
              <h3 className="text-3xl font-bold text-[#1B2C5C]">
                Why Digital Silk Is The Best Web Design Agency For Your Project
              </h3>
              <p>
                Whether you need a brand-new website or a redesign, Digital Silk
                is a leading full-service web design agency comprised of trusted
                website design experts.
              </p>
              <p>What does Digital Silk offer that other agencies don't?</p>
              <ul className="space-y-3 pl-8 list-outside">
                {[
                  {
                    title: "Project ownership:",
                    text: "We value every client relationship and the opportunity to help clients establish or grow their online presence. That's why we treat every project as our own, with meticulous project management, time tracking and calendars to make sure we're delivering on time and on budget.",
                  },
                  {
                    title: "Expert guidance:",
                    text: "Our team is made up of award-winning designers as well as top developers, branding experts, marketing professionals, leading strategists and more. Throughout your project, our team will be hands-on and offer guidance and recommendations at every turn.",
                  },
                  {
                    title: "Transparency:",
                    text: "We offer complete transparency throughout every client relationship, from our first meeting through project completion. You'll receive regular reports and updates on exactly where your project is at, from your timeline to your budget.",
                  },
                  {
                    title: "Results:",
                    text: "Every recommendation we make is strategic, based on thorough research, extensive experience and industry best practices. We deliver projects that drive measurable results, including increases in search engine ranking, traffic, engagement and conversion.",
                  },
                ].map((item, index) => (
                  <li key={index} className="relative pl-6">
                    <span className="absolute left-[-12px] top-2 w-2 h-2 bg-[#008BDE] rounded-full transform -translate-y-1/2"></span>
                    <span className="absolute left-[-10px] top-1 w-px h-full bg-[#008BDE] opacity-50"></span>
                    <strong>{item.title}</strong> {item.text}
                  </li>
                ))}
              </ul>
              <p>
                Our trusted web design experts work with brands across
                industries to deliver fully custom website projects, from web
                design and development to website strategy, content creation and
                more.
              </p>
              <p>
                If you're looking for a reliable web design team that will
                deliver a custom website that's unique to your brand identity,
                your offering and your target market, you've found your match in
                Digital Silk.
              </p>
              <p>
                Schedule a consultation to meet our team and get a custom quote
                for your project.
              </p>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
