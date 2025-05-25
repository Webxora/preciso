// import React from "react";
import { cn } from "./utils";

type SectionDividerProps = {
  type?: "wave" | "curve" | "slant" | "arrow";
  position?: "top" | "bottom";
  flipX?: boolean;
  color?: string;
  bgColor?: string;
  height?: string;
  className?: string;
};

export function SectionDivider({
  type = "wave",
  position = "top",
  flipX = false,
  color = "fill-background",
  bgColor,
  height = "h-16 md:h-24",
  className,
}: SectionDividerProps) {
  const getPath = () => {
    // All paths are designed for top position, we'll flip for bottom
    switch (type) {
      case "wave":
        return "M0,32 C320,96 480,0 800,32 C1120,64 1280,96 1600,32 L1600,0 L0,0 Z";
      case "curve":
        return "M0,0 L1600,0 L1600,64 C1120,192 480,192 0,64 L0,0 Z";
      case "slant":
        return "M0,0 L1600,96 L1600,0 L0,0 Z";
      case "arrow":
        return "M800,96 L0,0 L1600,0 L800,96 Z";
      default:
        return "M0,32 C320,96 480,0 800,32 C1120,64 1280,96 1600,32 L1600,0 L0,0 Z";
    }
  };

  // Apply transformations based on position and flip options
  const getTransform = () => {
    let transform = "";

    // Flip for bottom position
    if (position === "bottom") {
      transform += " rotate(180)";
    }

    // Flip horizontally if requested
    if (flipX) {
      transform +=
        position === "bottom"
          ? " translate(1600, 0) scale(-1, 1)"
          : " translate(1600, 0) scale(-1, 1)";
    }

    return transform;
  };

  // Style for the container div
  const containerStyle =
    position === "top" ? "top-0 -mt-px" : "bottom-0 -mb-px";

  return (
    <div
      className={cn(
        "absolute left-0 right-0 w-full overflow-hidden pointer-events-none z-10",
        height,
        containerStyle,
        bgColor,
        className
      )}
    >
      <svg
        className="absolute w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1600 96"
        preserveAspectRatio="none"
      >
        <path className={color} d={getPath()} transform={getTransform()} />
      </svg>
    </div>
  );
}
