import React from "react";
import logo from "@/assets/logosaas.png";
import Image from "next/image";
import Link from "next/link";
import socialX from "@/assets/social-x.svg";
import soctionFacebook from "@/assets/social-insta.svg";
import socialYoutube from "@/assets/social-youtube.svg";
import socialLinkedin from "@/assets/social-linkedin.svg";
function Footer() {
  return (
    <footer className="bg-black py-8 md:py-12">
      <div className="container mx-auto flex flex-col items-center gap-8">
        <Image src={logo} height={40} width={40} alt="logo" />

        <nav className="flex flex-col sm:flex-row items-center gap-4">
          <Link href={"#"} className="text-neutral-300">
            About
          </Link>
          <Link href={"#"} className="text-neutral-300">
            Features
          </Link>
          <Link href={"#"} className="text-neutral-300">
            Customers
          </Link>
          <Link href={"#"} className="text-neutral-300">
            Pricing
          </Link>
          <Link href={"#"} className="text-neutral-300">
            About
          </Link>
          <Link href={"#"} className="text-neutral-300">
            Careers
          </Link>
        </nav>

        <div className="flex items-center gap-4">
          <Image src={socialLinkedin} width={30} height={30} alt="linkedin" />{" "}
          <Image src={socialX} width={30} height={30} alt="linkedin" />{" "}
          <Image src={socialYoutube} width={30} height={30} alt="linkedin" />{" "}
          <Image src={soctionFacebook} width={30} height={30} alt="linkedin" />
        </div>

        <div className="text-neutral-500">Made with love By Oussama</div>
      </div>
    </footer>
  );
}

export default Footer;
