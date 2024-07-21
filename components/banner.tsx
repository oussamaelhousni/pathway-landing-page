import React from "react";
import Link from "next/link";
import Image from "next/image";

import arrowRight from "@/assets/arrow-right.svg";
const Banner = () => {
  return (
    <div className="flex items-center justify-center h-[40px] bg-black ">
      <p className="text-white text-xs">
        <span className="hidden md:inline md:me-4 text-gray-400">
          Streamline your workflow and boost your productivity.
        </span>

        <Link href="/">
          Get started for free
          <Image
            src={arrowRight}
            alt="arrow right"
            className="inline-block ms-1 mix-blend-difference"
          />
        </Link>
      </p>
    </div>
  );
};

export default Banner;
