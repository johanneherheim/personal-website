"use client"
import Link from "next/link";
import { ModeToggle } from "./mode-toggle";
import { NavMenu, NavBurger} from "./nav-menu";

export default function SiteHeader() {
  const HeaderText = ["Johanne Blikberg Herheim", "JBH"];
  return (
    <div className="flex mb-10 border-b sticky top-0 bg-inherit justify-between pl-5">
      <Link href="/" className="my-auto mx-3 p-1 font-light tracking-widest">
        <h1 className=" hidden md:block">Johanne Blikberg Herheim</h1>
        <h1 className=" block md:hidden">JBH</h1>
      </Link>
      <div className="p-2 my-auto flex gap-4">
        <div className=" hidden sm:block">
          <NavMenu />
        </div>
        <ModeToggle />
        <div className=" block sm:hidden">
          <NavBurger />
        </div>
      </div>
    </div>
  );
}
