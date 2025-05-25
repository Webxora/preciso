
import { ReactNode } from "react";
import { cn } from "./utils";

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  align?: "left" | "center" | "right";
  className?: string;
  children?: ReactNode;
}

export function SectionHeader({ 
  title, 
  subtitle, 
  align = "center", 
  className,
  children
}: SectionHeaderProps) {
  return (
    <div 
      className={cn(
        "mb-12",
        align === "center" && "text-center",
        align === "right" && "text-right",
        className
      )}
    >
      <h2 className={cn(
        "section-title inline-block",
        align === "center" && "mx-auto",
        align === "right" && "ml-auto"
      )}>
        {title}
      </h2>
      
      {subtitle && (
        <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
      
      {children}
    </div>
  );
}
