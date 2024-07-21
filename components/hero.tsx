import React from "react";
import Image from "next/image";

import heroImage from "@/assets/cog.png";
import cylinder from "@/assets/cylinder.png";
import noodlze from "@/assets/noodle.png";
import Button from "./button";
import LinkWithArrow from "./link-with-arrow";
const Hero = () => {
  return (
    <section className="py-[3rem] bg-gradient-to-tr from-blue-500/30 from 50%% via-blue-200/50 via-50% to-70% to-white">
      <div className="container mx-auto mt-20 flex flex-col gap-16 sm:mt-0 sm:flex-row sm:items-center">
        <div className="space-y-8 sm:space-y-12 sm:w-[470px] lg:w-[600px]">
          <div className="text-sm border border-black/10 px-2 py-1 rounded-lg w-fit ">
            Verion 2.0 here
          </div>
          <h1 className="text-5xl font-semibold bg-gradient-to-b from-black to-[#001E7F] text-transparent bg-clip-text sm:text-6xl">
            Pathway to productivity
          </h1>

          <p className="text-[#010D3E] sm:text-lg">
            Celebrate the joy of accomplishment with an app designed to track
            your progress, motivate your efforts, and celebrate your successes.
          </p>

          <div className="flex gap-8 items-center">
            <Button>Get for free</Button>
            <LinkWithArrow href="/learn">Learn More</LinkWithArrow>
          </div>
        </div>
        <div className="relative grow mt-8 sm:h-[650px]">
          <Image
            src={cylinder}
            alt="cylandre"
            className="absolute max-w-none hidden sm:block !w-[220px] sm:-left-[200px] l:-left-12 xl:-left-16 -top-[60px]"
          />
          <Image
            src={heroImage}
            alt="her image"
            className="max-w-[80%] mx-auto sm:max-w-none sm:mx-0 sm:h-full sm:w-auto sm:absolute sm:top-0 sm:-left-12 xl:left-auto xl:right-12 lg:mx-0"
          />

          <Image
            src={noodlze}
            alt="nooodlze"
            className="absolute max-w-none w-[220px] -bottom-24 -right-6"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
