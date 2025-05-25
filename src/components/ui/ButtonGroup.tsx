import type { ReactNode } from "react";
import { cn } from "./utils";

interface ButtonGroupProps {
  children: ReactNode;
  align?: "left" | "center" | "right";
  className?: string;
  gap?: "none" | "sm" | "md" | "lg";
}

export function ButtonGroup({
  children,
  align = "left",
  className,
  gap = "md",
}: ButtonGroupProps) {
  const gapClasses = {
    none: "gap-0",
    sm: "gap-2",
    md: "gap-4",
    lg: "gap-6",
  };

  return (
    <div
      className={cn(
        "flex flex-wrap items-center",
        gapClasses[gap],
        align === "center" && "justify-center",
        align === "right" && "justify-end",
        className
      )}
    >
      {children}
    </div>
  );
}
