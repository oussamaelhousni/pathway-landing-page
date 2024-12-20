"use client";
import React, { useRef } from "react";
import Image from "next/image";
import productImage from "@/assets/product-image.png";
import pyramidImage from "@/assets/pyramid.png";
import tubeImage from "@/assets/tube.png";
import { motion, useScroll, useTransform } from "framer-motion";

function ProductShowCase() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const translateY = useTransform(scrollYProgress, [0, 1], [-150, 150]);
  return (
    <section
      className="bg-gradient-to-b from-[#fff] to-[#d2dcff] py-24 overflow-x-hidden"
      ref={ref}
    >
      <div className="container mx-auto">
        <div className="max-w-[540px] mx-auto">
          <div className="flex justify-center">
            <div className="tag">Boost your productivity</div>
          </div>
          <h2 className="text-center text-3xl md:text-[54px] md:leading-[60px] font-bold tracking-tighter bg-gradient-to-b from-black to-[#001e80] text-transparent bg-clip-text mt-5">
            A more effective way to track progress
          </h2>
          <p className="text-center text-[22px] leading-[30px] tracking-tight text-[#010d3e] mt-5">
            Effortlessly turn your ideas into a fully functional, responsive,
            no-code SaaS website in just minutes with the set of free components
            for Framer.
          </p>
        </div>

        <div className="relative">
          <motion.img
            src={pyramidImage.src}
            alt="pramid"
            className="hidden md:block absolute -top-32 -right-36 "
            height={262}
            width={262}
            style={{ translateY }}
          />
          <motion.img
            src={tubeImage.src}
            alt="pramid"
            className="hidden md:block absolute bottom-24 -left-36 "
            height={262}
            width={262}
            style={{ translateY }}
          />
          <Image
            src={productImage}
            alt={"product image"}
            className="mt-10 w-full"
          />
        </div>
      </div>
    </section>
  );
}

export default ProductShowCase;
