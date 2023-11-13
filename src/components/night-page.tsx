import React from "react";
import { NavLink } from "./nav-link";
import { links } from "./mario-page";

export default function NightPage() {
  return (
    <div className="bg-lime-950 min-h-screen text-white">
      <header>
        <h1 className="text-3xl p-10">Johanne Blikberg Herheim</h1>
      </header>
      <div className=" rounded-md mx-auto ">
        {links.map((link) => (
          <div
            key={link.name}
            className=" flex justify-between w-1/3 mx-20 p-3 my-5 border border-white"
          >
            <NavLink key={link.name} href={link.href} target="_blank">
              {link.name}
            </NavLink>
            <div key={link.name}>
              {link.icon}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
