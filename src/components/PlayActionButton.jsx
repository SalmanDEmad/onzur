"use client";

import Image from "next/image";

const PlayActionButton = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="group relative flex items-center focus:outline-none"
    >
      <div className="relative w-[100px] h-[100px] mr-5 shrink-0">
        <Image
          src="/assets/images/play-button.png"
          alt="Play button"
          layout="fill"
          objectFit="contain"
          className="transition-all duration-300 ease-in-out group-hover:scale-110"
        />
      </div>
      <div>
        <p className="text-xl md:text-[22px] font-medium leading-tight capitalize text-white group-hover:text-gray-200 transition-colors">
          See Our Work In action
        </p>
        <p className="text-base font-normal uppercase tracking-wider text-white/80 group-hover:text-gray-300 transition-colors">
          1 minute
        </p>
      </div>
    </button>
  );
};

export default PlayActionButton;
