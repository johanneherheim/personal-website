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

export default function SocialLinks() {
  return (
    <div className="flex gap-5 w-full justify-center sm:justify-start">
      {links.map((link) => (
        <div key={link.name} className="flex">
          <Link key={link.name} href={link.href} target="_blank">
            <Button className="bg-gradient-to-tl from-primary to-secondary">
              <span className="hidden sm:block mr-3">{link.name}</span>
              <span>{link.icon}</span>
            </Button>
          </Link>
        </div>
      ))}
    </div>
  );
}
