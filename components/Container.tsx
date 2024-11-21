import { cn } from "@/lib";
import React, { ReactNode } from "react";

const Container = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("w-full px-4 max-w-[1400px] mx-auto", className)}>
      {children}
    </div>
  );
};

export default Container;
