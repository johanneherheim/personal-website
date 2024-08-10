"use client";
import { useState } from "react";
import { Button } from "./ui/button";
import { MenuIcon, X } from "lucide-react";
import { routes } from "@/app/routes";
import { SettingsMenu } from "./settings";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="flex justify-between p-4 border-b items-center relative">
      <a href="/">
        <h2 className="uppercase bg-clip-text text-transparent bg-gradient-to-tl from-blue-500 to-green-500 hidden sm:block">
          Johanne Blikberg Herheim
        </h2>
        <h2 className="bg-clip-text text-transparent bg-gradient-to-tl from-blue-500 to-green-500 block sm:hidden">
          JBH
        </h2>
      </a>
      <div className="flex gap-5">
        <div className="hidden md:flex space-x-5">
          {routes.map((route) => (
            <a
              key={route.en}
              href={`/${route.slug}`}
              className="hover:underline"
            >
              {route.no}
            </a>
          ))}
          <SettingsMenu />
        </div>
      </div>
      <div className="space-x-4 md:hidden">
        <SettingsMenu />
        <Button onClick={toggleMenu} size="icon" variant="ghost">
          <MenuIcon />
        </Button>
      </div>
      {isOpen && (
        <div className="absolute top-0 left-0 w-full h-screen bg-background z-10 flex flex-col p-4 pl-10 space-y-6 md:hidden">
          <Button
            onClick={toggleMenu}
            size="icon"
            variant="ghost"
            className="self-end"
          >
            <X />
          </Button>
          {routes.map((route) => (
            <a
              key={route.en}
              href={`/${route.slug}`}
              className="hover:underline text-2xl"
              onClick={() => setIsOpen(false)}
            >
              {route.no}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}
