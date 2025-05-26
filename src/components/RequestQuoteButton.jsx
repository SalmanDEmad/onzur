"use client";

import Image from "next/image";
import Link from "next/link";

const RequestQuoteButton = ({
  variant = "primary",
  href = "/request-a-quote",
}) => {
  const isPrimary = variant === "primary";

  // Define styles based on variant and hover state (via group-hover)
  const buttonBaseStyles =
    "relative group inline-flex items-center justify-center text-lg sm:text-xl font-bold uppercase tracking-wider py-3.5 px-6 rounded-full overflow-hidden border-2 border-transparent transition-all duration-300 ease-in-out";

  const primaryNormalBg = "bg-gradient-to-r from-[#00B9FF] to-[#9536E5]";
  const primaryHoverBg = "bg-white"; // The outer span with blur becomes visible, and inner text turns to gradient
  const primaryNormalText = "text-white";
  const primaryHoverText =
    "text-transparent bg-clip-text bg-gradient-to-r from-[#00B9FF] to-[#9536E5]";

  // Figma's "variant=2" seems to have a different gradient but similar text/icon behavior on hover.
  // For simplicity, this example will focus on "variant=1" behavior, which is more common for a CTA.
  // If "variant=2" implies a different set of colors (e.g. for a secondary button), those would be added here.

  const iconNormal = "/assets/icons/icon-I2-890-2-15.svg"; // Blue arrow (corresponds to Figma's non-hover state with blue text)
  const iconHover = "/assets/icons/icon-I2-880-2-5.svg"; // White arrow (corresponds to Figma's hover state with white text)

  return (
    <Link href={href} className={`${buttonBaseStyles}`}>
      {/* Blurred background gradient element - becomes more visible on hover due to main bg change */}
      <span className="absolute inset-[-1px] -z-10">
        <span
          className={`absolute inset-0 ${primaryNormalBg} blur-[9px] rounded-full group-hover:opacity-100 opacity-100 transition-opacity duration-300`}
        />
        {/* This span creates the solid background, which changes on hover */}
        <span
          className={`absolute inset-0 ${
            isPrimary
              ? "bg-transparent group-hover:bg-white"
              : "bg-gray-200 group-hover:bg-gray-300"
          } rounded-full transition-colors duration-300`}
        />
      </span>

      {/* Text Content - color changes on hover */}
      <span
        className={`relative z-10 ${
          isPrimary
            ? `${primaryNormalText} group-hover:${primaryHoverText}`
            : "text-gray-700 group-hover:text-gray-900"
        } transition-colors duration-300`}
      >
        Request a Quote
      </span>

      {/* Icon - source changes on hover via opacity trick, or could use two Image components */}
      <span className="relative z-10 ml-2 w-[15px] h-[16px] flex items-center justify-center">
        <Image
          src={iconNormal}
          alt="Arrow"
          width={15}
          height={16}
          className="transition-opacity duration-300 ease-in-out group-hover:opacity-0"
        />
        <Image
          src={iconHover}
          alt="Arrow Hover"
          width={15}
          height={16}
          className="absolute inset-0 transition-opacity duration-300 ease-in-out opacity-0 group-hover:opacity-100"
        />
      </span>
    </Link>
  );
};

export default RequestQuoteButton;
