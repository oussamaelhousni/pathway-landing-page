import Link from "next/link";
import Image from "next/image";
import React, { ReactNode } from "react";
import arrowRight from "@/assets/arrow-right.svg";

const LinkWithArrow = ({
  href,
  children,
  className,
}: {
  href: string;
  children: ReactNode;
  className?: string;
}) => {
  return (
    <Link href={href} className={className}>
      {children}
      <Image src={arrowRight} alt="arrow right" className="inline-block ms-1" />
    </Link>
  );
};

export default LinkWithArrow;
