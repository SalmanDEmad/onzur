"use client";
import Image from "next/image";
import PlayActionButton from "./PlayActionButton";

const CreativeAgencySection = () => {
  const checkMarkIcon = "/assets/images/check-mark-1.svg"; // Or check-mark-2.svg, decide which one to use or combine

  const handlePlayAction = () => {
    // Add logic for when the play button is clicked, e.g., open a video modal
    console.log("Play action button clicked");
  };

  return (
    <section className="bg-[#00042A] text-white py-36">
      <div className="container mx-auto px-4 max-w-7xl flex flex-col items-center">
        {/* Top part with Text and Image */}
        <div className="w-full flex flex-col lg:flex-row items-center justify-between mb-20 lg:mb-0">
          {/* Left side - Text content */}
          <div className="lg:w-1/2 mb-10 lg:mb-0 lg:pr-10">
            <h1 className="text-5xl md:text-[58px] font-bold leading-tight mb-12">
              Creative Web Agency
              <br />
              Delivering Custom Solutions
            </h1>

            <div className="space-y-6 mb-10">
              <div className="flex items-center">
                <div className="w-[22px] h-[18px] mr-4 relative">
                  <Image
                    src={checkMarkIcon}
                    alt="Checkmark"
                    width={22}
                    height={18}
                    style={{ opacity: 0.6 }}
                  />
                  <Image
                    src="/assets/images/check-mark-2.svg"
                    alt="Checkmark"
                    width={15.68}
                    height={15.68}
                    className="absolute top-[1px] left-[5.67px]"
                  />
                </div>
                <p className="text-xl md:text-2xl font-normal leading-relaxed">
                  Custom Web Design Solutions To Drive Conversions
                </p>
              </div>
              <div className="flex items-center">
                <div className="w-[22px] h-[18px] mr-4 relative">
                  <Image
                    src={checkMarkIcon}
                    alt="Checkmark"
                    width={22}
                    height={18}
                    style={{ opacity: 0.6 }}
                  />
                  <Image
                    src="/assets/images/check-mark-2.svg"
                    alt="Checkmark"
                    width={15.68}
                    height={15.68}
                    className="absolute top-[1px] left-[5.67px]"
                  />
                </div>
                <p className="text-xl md:text-2xl font-normal leading-relaxed">
                  Effective Marketing Campaigns To Generate Growth
                </p>
              </div>
              <div className="flex items-center">
                <div className="w-[22px] h-[18px] mr-4 relative">
                  <Image
                    src={checkMarkIcon}
                    alt="Checkmark"
                    width={22}
                    height={18}
                    style={{ opacity: 0.6 }}
                  />
                  <Image
                    src="/assets/images/check-mark-2.svg"
                    alt="Checkmark"
                    width={15.68}
                    height={15.68}
                    className="absolute top-[1px] left-[5.67px]"
                  />
                </div>
                <p className="text-xl md:text-2xl font-normal leading-relaxed">
                  Tailored Branding Strategies To Drive Engagement
                </p>
              </div>
            </div>

            <p className="text-lg md:text-xl font-normal leading-loose">
              Digital Silk is a web design company & digital marketing agency
              focused on growing brands online. We create effective brand
              strategies, custom web design, development, and digital marketing
              solutions to generate greater brand engagement and conversions. We
              work closely with our clients to ensure each project meets their
              brand guidelines and business goals and provide technical and
              marketing expertise to ensure optimal results.
            </p>
          </div>

          {/* Right side - Image */}
          <div className="lg:w-1/2">
            <Image
              src="/assets/images/trophy-image.png"
              alt="Digital Silk Web Designs with Trophy"
              width={665}
              height={595}
              priority
              className="rounded-lg shadow-2xl"
            />
          </div>
        </div>

        {/* Bottom part with Video Thumbnail and Button */}
        <div className="relative w-full max-w-[507px] h-[93px] flex items-center justify-center mt-10 lg:mt-0">
          {/* Gradient background for the button area - this might need adjustment for exact positioning */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[1920px] h-[87px] bg-gradient-to-r from-[#791BCE] via-[#8F35E1]/50 to-transparent z-0" />

          {/* Video Thumbnail */}
          <div className="absolute left-[20px] top-1/2 transform -translate-y-1/2 w-[260px] h-[170px] z-10">
            <Image
              src="/assets/images/video-thumbnail.png"
              alt="Digital Silk Showreel Video Thumbnail"
              layout="fill"
              objectFit="cover"
              className="rounded-md"
            />
            <div className="absolute inset-0 bg-black/20 rounded-md" />{" "}
            {/* Overlay */}
          </div>

          {/* Button Content using new PlayActionButton component */}
          <div className="relative flex items-center pl-[280px] z-10">
            <PlayActionButton onClick={handlePlayAction} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CreativeAgencySection;
