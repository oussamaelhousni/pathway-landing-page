import { cn } from "@/lib";
import React, { ReactNode } from "react";

const Button = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <button
      className={cn(
        "text-white text-sm px-4 py-2 bg-black rounded-lg",
        className
      )}
    >
      {children}
    </button>
  );
};

export default Button;
