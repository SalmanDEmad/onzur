"use client";

import Image from "next/image";
import Link from "next/link";

const ExploreServicesButton = ({
  variant = "primary-gradient", // 'primary-gradient', 'primary-white', 'secondary-gradient', 'secondary-blue'
  href = "/services",
  text = "Explore All Services",
}) => {
  const baseStyles =
    "group relative inline-flex items-center justify-center text-sm sm:text-base font-bold uppercase tracking-wider py-3.5 px-6 rounded-full overflow-hidden border-2 transition-all duration-300 ease-in-out focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900";

  let buttonClasses = "";
  let textClasses = "";
  let iconSrc = "";
  let iconHoverSrc = ""; // Not all variants have distinct hover icons in the Figma, using same if not specified

  // Icon paths (assuming they are in public/assets/icons/ and named after their node IDs)
  const whiteArrowIcon = "/assets/icons/icon-2-175.svg"; // white arrow (variant 13)
  const purpleArrowIcon = "/assets/icons/icon-2-168.svg"; // purple/gradient arrow (variant 12)
  const blueArrowIcon = "/assets/icons/icon-2-284.svg"; // blue arrow (variant 26)

  switch (variant) {
    case "primary-white": // Figma: variant=1 (hover=true uses purple arrow, hover=false uses white arrow)
      buttonClasses = "bg-white border-white hover:bg-transparent";
      textClasses =
        "text-transparent bg-clip-text bg-gradient-to-r from-[#6418A5] to-[#00B9FF] group-hover:text-white";
      iconSrc = whiteArrowIcon;
      iconHoverSrc = purpleArrowIcon; // Hover state shows purple arrow
      break;
    case "secondary-gradient": // Figma: variant=2 (hover=true uses white arrow, hover=false uses blue arrow)
      buttonClasses =
        "bg-gradient-to-r from-[#00B9FF] to-[#9536E5] border-transparent hover:border-white hover:bg-none";
      textClasses = "text-white group-hover:text-white";
      iconSrc = blueArrowIcon;
      iconHoverSrc = whiteArrowIcon;
      break;
    case "secondary-blue": // Figma: variant=3 (hover=true uses white arrow, hover=false uses blue arrow) - Similar to secondary-gradient but starts blue
      buttonClasses =
        "bg-[#3B7BCE] border-[#3B7BCE] hover:bg-gradient-to-r hover:from-[#00B9FF] hover:to-[#9536E5] hover:border-transparent";
      textClasses = "text-white";
      iconSrc = blueArrowIcon;
      iconHoverSrc = whiteArrowIcon;
      break;
    case "primary-gradient": // Figma: variant=4 (hover=true uses purple arrow, hover=false uses white arrow) - Default look
    default:
      buttonClasses =
        "bg-gradient-to-r from-[#6418A5] to-[#00B9FF] border-transparent hover:bg-white";
      textClasses =
        "text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#6418A5] group-hover:to-[#00B9FF]";
      iconSrc = whiteArrowIcon;
      iconHoverSrc = purpleArrowIcon;
      break;
  }

  return (
    <Link href={href} passHref>
      <button className={`${baseStyles} ${buttonClasses}`}>
        {/* Optional: Outer border/blur effect if needed, replicating figma's 'Border+Blur' rectangle */}
        {/* <span className="absolute inset-0 border-2 border-white rounded-full opacity-60 blur-[2px] group-hover:opacity-100 transition-opacity"></span> */}

        <span className={`${textClasses} mr-2.5`}>{text}</span>
        <span className="relative w-3 h-4">
          <Image
            src={iconSrc}
            alt=""
            width={10}
            height={16}
            className="absolute inset-0 transition-opacity duration-300 ease-in-out group-hover:opacity-0"
          />
          <Image
            src={iconHoverSrc || iconSrc} // Fallback to normal icon if hover not specified
            alt=""
            width={10}
            height={16}
            className="absolute inset-0 opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100"
          />
        </span>
      </button>
    </Link>
  );
};

export default ExploreServicesButton;
