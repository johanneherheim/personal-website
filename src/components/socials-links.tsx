import {
  LinkedinIcon,
  InstagramIcon,
  FacebookIcon,
  GithubIcon,
  MailIcon,
} from "lucide-react";
import Link from "next/link";

const links = [
  {
    name: "Instagram",
    href: "https://www.instagram.com/johanneherheim",
    icon: <InstagramIcon />,
  },
  {
    name: "Linkedin",
    href: "https://www.linkedin.com/in/johher",
    icon: <LinkedinIcon />,
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com/johanne.herheim/",
    icon: <FacebookIcon />,
  },
  {
    name: "Github",
    href: "https://github.com/johanneherheim",
    icon: <GithubIcon />,
  },
  {
    name: "Mail",
    href: "mailto:johanne.herheim@gmail.com",
    icon: <MailIcon />,
  },
];

export default function SocialLinks() {
  return (
    <div className="">
      {links.map((link) => (
        <div key={link.name}>
          <Link
            href={link.href}
            target="_blank"
            className="flex justify-between max-w-md mx-auto rounded-md p-3 m-2 bg-[#ddcadd]"
          >
            <div>{link.name}</div>
            <div>{link.icon}</div>
          </Link>
        </div>
      ))}
    </div>
  );
}
