"use client";
import Image from "next/image";
import acmeLogo from "@/assets/logo-acme.png";
import apexLogo from "@/assets/logo-apex.png";
import celestialLogo from "@/assets/logo-celestial.png";
import echoLogo from "@/assets/logo-echo.png";
import pulseLogo from "@/assets/logo-pulse.png";
import quantumLogo from "@/assets/logo-quantum.png";
import { motion } from "framer-motion";
const Logoticker = () => {
  return (
    <section className=" bg-white py-8 md:py-12">
      <div className="container mx-auto">
        <div className="flex [mask-image:linear-gradient(to_right,transparent,black,transparent)]">
          <motion.div
            className="flex items-center flex-none gap-16 pr-16"
            animate={{ translateX: "-50%" }}
            transition={{
              duration: 10,
              repeatType: "loop",
              repeat: Infinity,
              ease: "linear",
            }}
          >
            <Image src={acmeLogo} className="h-8 w-auto" alt={"acme Logo"} />
            <Image src={apexLogo} className="h-8 w-auto" alt={"apex Logo"} />
            <Image
              src={celestialLogo}
              className="h-8 w-auto"
              alt={"celestial Logo"}
            />
            <Image src={echoLogo} className="h-12 w-auto" alt={"echo Logo"} />
            <Image src={pulseLogo} className="h-8 w-auto" alt={"Pulse Logo"} />
            <Image
              src={quantumLogo}
              className="h-8 w-auto"
              alt={"quantum Logo"}
            />
            {/*Next set of logos*/}
            <Image src={acmeLogo} className="h-8 w-auto" alt={"acme Logo"} />
            <Image src={apexLogo} className="h-8 w-auto" alt={"apex Logo"} />
            <Image
              src={celestialLogo}
              className="h-8 w-auto"
              alt={"celestial Logo"}
            />
            <Image src={echoLogo} className="h-12 w-auto" alt={"echo Logo"} />
            <Image src={pulseLogo} className="h-8 w-auto" alt={"Pulse Logo"} />
            <Image
              src={quantumLogo}
              className="h-8 w-auto"
              alt={"quantum Logo"}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Logoticker;
