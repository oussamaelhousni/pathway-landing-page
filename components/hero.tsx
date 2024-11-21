import React from "react";
import Image from "next/image";

import heroImage from "@/assets/cog.png";
import cylinder from "@/assets/cylinder.png";
import noodlze from "@/assets/noodle.png";
import Button from "./button";
import LinkWithArrow from "./link-with-arrow";
const Hero = () => {
  return (
    <section className="py-[3rem] bg-gradient-to-tr from-blue-500/30 from 50%% via-blue-200/50 via-50% to-70% to-white overflow-hidden">
      <div className="container mx-auto mt-20 flex flex-col gap-16 md:mt-0 md:flex-row md:items-center">
        <div className="space-y-8 sm:space-y-12 sm:w-[470px] lg:w-[600px]">
          <div className="text-sm border border-black/10 px-2 py-1 rounded-lg w-fit ">
            Verion 2.0 here
          </div>
          <h1 className="text-5xl font-semibold bg-gradient-to-b from-black to-[#001E7F] text-transparent bg-clip-text md:text-7xl">
            Pathway to productivity
          </h1>

          <p className="text-[#010D3E] md:text-lg">
            Celebrate the joy of accomplishment with an app designed to track
            your progress, motivate your efforts, and celebrate your successes.
          </p>

          <div className="flex gap-8 items-center">
            <Button>Get for free</Button>
            <LinkWithArrow href="/learn">Learn More</LinkWithArrow>
          </div>
        </div>
        <div className="relative md:flex-1 mt-8 md:h-[648px]">
          <Image
            src={cylinder}
            alt="cylandre"
            className="hidden md:block md:absolute md:-left-32 md:-top-12"
            width={220}
          />
          <Image
            src={heroImage}
            alt="her image"
            className="md:block md:absolute md:max-w-none md:h-full md:w-auto xl:left-1/2 xl:-translate-x-1/3"
          />

          <Image
            src={noodlze}
            alt="nooodlze"
            className="hidden lg:block lg:absolute lg:-bottom-[200px] lg:left-[250px] xl:left-[648px] rotate-[30deg]"
            width={220}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
