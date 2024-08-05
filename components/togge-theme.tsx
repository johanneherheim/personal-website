"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Switch } from "@/components/ui/switch";

export function ModeToggle() {
  const { theme, setTheme } = useTheme();

  const isDarkMode =
    theme === "dark" ||
    (!theme && window.matchMedia("(prefers-color-scheme: dark)").matches);

  const toggleTheme = () => {
    if (isDarkMode) {
      setTheme("light");
      localStorage.setItem("theme", "light");
    } else {
      setTheme("dark");
      localStorage.setItem("theme", "dark");
    }
  };

  return (
    <div className="flex items-center space-x-4">
      <Sun
        className={`h-[1.2rem] w-[1.2rem] ${
          isDarkMode ? "text-gray-400" : "text-yellow-500"
        }`}
      />
      <Switch checked={isDarkMode} onCheckedChange={toggleTheme} />
      <Moon
        className={`h-[1.2rem] w-[1.2rem] ${
          isDarkMode ? "text-yellow-500" : "text-gray-400"
        }`}
      />
    </div>
  );
}
