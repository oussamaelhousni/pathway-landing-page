import React from "react";
import Image from "next/image";
import Button from "./button";
import LinkWithArrow from "./link-with-arrow";
import starImage from "@/assets/star.png";
import springImage from "@/assets/spring.png";
function CallToAction() {
  return (
    <section className="bg-gradient-to-b from-white to-[#d2dcff] py-24 overflow-x-hidden overflow-y-hidden relative">
      <div className="container mx-auto">
        <div className="max-w-[540px] mx-auto relative">
          <Image
            src={starImage}
            width={360}
            height={350}
            alt="star image"
            className="absolute top-[-100px] left-[-380px]"
          />
          <Image
            src={springImage}
            width={360}
            height={350}
            alt="star image"
            className="absolute bottom-[-180px] right-[-380px]"
          />
          <h2 className="title">Sign up for free today</h2>
          <p className="description mt-6 max-w-[800px] mx-auto">
            Celebrate the joy of accomplishment with an app designed to track
            your progress and motivate your efforts.
          </p>
        </div>

        <div className="flex gap-4 items-center justify-center mt-6">
          <Button>Get for free</Button>
          <LinkWithArrow href="/learn">Learn More</LinkWithArrow>
        </div>
      </div>
    </section>
  );
}

export default CallToAction;