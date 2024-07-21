import React from "react";
import Image from "next/image";
import logo from "@/assets/logosaas.png";
import menuIcon from "@/assets/menu.svg";
import Link from "next/link";

const LINKS: { href: string; title: string }[] = [
  {
    title: "About",
    href: "/about",
  },
  {
    title: "Features",
    href: "/features",
  },
  {
    title: "Customers",
    href: "/customers",
  },
  {
    title: "Updates",
    href: "/updates",
  },
  {
    title: "Help",
    href: "/help",
  },
];
const Navbar = () => {
  return (
    <div className="container mx-auto flex justify-between items-center py-4">
      <div className="relative">
        <div className="absolute w-full h-full left-0 top-0  bg-gradient-to-r from-[#F87BFF] from-50% via-[#FFDD9B] via-75% to-[#2FD8FE] to-[90%] blur-md"></div>
        <Image
          src={logo}
          alt="logo"
          className="w-[40px] aspect-square relative"
        />
      </div>
      <nav className="hidden sm:flex items-center sm:gap-6 lg:gap-8">
        {LINKS.map(({ title, href }) => (
          <Link href={href} className="text-black/60" key={title}>
            {title}
          </Link>
        ))}

        <button className="text-white text-sm px-4 py-2  bg-black rounded-lg">
          Get for free
        </button>
      </nav>
      <button className="block sm:hidden">
        <Image src={menuIcon} alt="menu button" />
      </button>
    </div>
  );
};

export default Navbar;
