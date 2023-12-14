import { GithubIcon, LinkedinIcon, Mail } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";

const links = [
  {
    name: "Linkedin",
    href: "https://www.linkedin.com/in/johher",
    icon: <LinkedinIcon />,
  },
  {
    name: "Github",
    href: "https://github.com/johanneherheim",
    icon: <GithubIcon />,
  },
  {
    name: "Mail",
    href: "mailto:{johanne.herheim@gmail.com}",
    icon: <Mail />,
  },
];

export function NavLink({
  href,
  children,
  target,
}: {
  href: string;
  children: React.ReactNode;
  target?: string;
}) {
  return (
    <Link href={href} target={target}>
      <Button variant={"secondary"} className="w-36 sm:w-auto">
        {children}
      </Button>
    </Link>
  );
}

export default function SocialLinks() {
  return (
    <div className="flex gap-5 flex-col sm:flex-row pt-8 border-t sm:border-none sm:pt-3">
      {links.map((link) => (
        <div key={link.name} className="mx-auto sm:mx-0">
          <NavLink key={link.name} href={link.href} target="_blank">
            <div className="flex gap-5 justify-between sm:items-start">
              <p className="my-auto">{link.name}</p>
              <p></p>
              {link.icon}
            </div>
          </NavLink>
        </div>
      ))}
    </div>
  );
}
