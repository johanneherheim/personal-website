import Link from "next/link";
import { ModeToggle } from "./mode-toggle";
import NavBurger from "./nav-burger";

export default function SiteHeader() {
  const HeaderText = ["Johanne Blikberg Herheim", "JBH"];
  return (
    <div className="flex mb-10 border-b sticky top-0 bg-inherit justify-between pl-5">
      <Link href="/" className="my-auto mx-3 p-1 font-light tracking-widest">
        <h1 className=" absolute  scale-0 sm:scale-100">{HeaderText[0]}</h1>
        <h1 className=" scale-100 sm:scale-0">{HeaderText[1]}</h1>
      </Link>
      <div className="p-2 my-auto flex gap-2">
        <ModeToggle />
        <NavBurger />
      </div>
    </div>
  );
}
