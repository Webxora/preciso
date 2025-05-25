import { useState, useEffect } from "react";
import { Sun, Coffee } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";

type ThemeMode = "light" | "coffee";

export function ThemeSwitch() {
  const [theme, setTheme] = useState<ThemeMode>("light");

  // Load theme from localStorage on initial render
  useEffect(() => {
    const savedTheme = localStorage.getItem(
      "preciso-theme"
    ) as ThemeMode | null;
    if (savedTheme && (savedTheme === "light" || savedTheme === "coffee")) {
      setTheme(savedTheme);
      applyTheme(savedTheme);
    }
  }, []);

  const applyTheme = (newTheme: ThemeMode) => {
    const root = document.documentElement;

    // Remove previous theme classes
    root.classList.remove("theme-light", "theme-coffee");

    // Add the new theme class
    root.classList.add(`theme-${newTheme}`);

    // Save to localStorage
    localStorage.setItem("preciso-theme", newTheme);

    // Apply theme-specific styles
    switch (newTheme) {
      case "light":
        root.style.setProperty("--background", "#ffffff");
        root.style.setProperty("--foreground", "#000000");
        root.style.setProperty("--muted", "#f2f2f2");
        root.style.setProperty("--muted-foreground", "#737373");
        break;
      case "coffee":
        root.style.setProperty("--background", "#f5f1e9");
        root.style.setProperty("--foreground", "#3B2314");
        root.style.setProperty("--muted", "#e9e0d2");
        root.style.setProperty("--muted-foreground", "#5E3A14");
        break;
    }
  };

  const toggleTheme = () => {
    const nextTheme = theme === "light" ? "coffee" : "light";
    setTheme(nextTheme);
    applyTheme(nextTheme);
  };

  return (
    <div className="flex items-center justify-center space-x-2">
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <button
              onClick={toggleTheme}
              className="flex items-center justify-center w-10 h-10 rounded-full bg-background border border-border transition-colors hover:bg-muted"
              aria-label="Toggle theme"
            >
              {theme === "light" ? (
                <Sun size={18} className="text-black" />
              ) : (
                <Coffee size={18} className="text-[var(--coffee-dark)]" />
              )}
            </button>
          </TooltipTrigger>
          <TooltipContent side="bottom">
            <p>
              Current theme: {theme.charAt(0).toUpperCase() + theme.slice(1)}.
              Click to change.
            </p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  );
}
