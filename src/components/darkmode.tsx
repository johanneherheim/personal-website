"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "./ui/button";

export function ModeToggle() {
  const { setTheme } = useTheme();
  const [darkMode, setDarkMode] = React.useState(true);

  const toggleDarkMode = () => {
    if (darkMode) {
      setTheme("light");
      setDarkMode(false);
    } else {
      setTheme("dark");
      setDarkMode(true);
    }
  };

  return (
    <div onClick={toggleDarkMode}>
      <Button variant="outline" size="icon">
        <Moon className=" rotate-0 scale-100 transition-all dark:scale-0" />
        <Sun className="absolute rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      </Button>
    </div>
  );
}
