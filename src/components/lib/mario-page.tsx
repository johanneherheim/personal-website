import {
  LinkedinIcon,
  InstagramIcon,
  FacebookIcon,
  GithubIcon,
  MailIcon,
} from "lucide-react";
import Link from "next/link";
import Mario from "./mario";
import SiteHeader from "../siteheader";

export const links = [
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

export default function MarioPage() {
  return (
    <div className="max-h-screen">
      <SiteHeader />
      <div className="flex justify-evenly mb-64 mt-32">
        {links.map((link) => (
          <div key={link.name} className="flex justify-evenly">
            <img
              src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/ed991cf4-7c8c-4530-b6ba-a3abf3ab2eae/dcpa2jw-f3267e78-e77e-40a8-9735-10defefb26f2.png/v1/fill/w_1024,h_1062/super_mario__brick_block_2d_by_joshuat1306_dcpa2jw-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTA2MiIsInBhdGgiOiJcL2ZcL2VkOTkxY2Y0LTdjOGMtNDUzMC1iNmJhLWEzYWJmM2FiMmVhZVwvZGNwYTJqdy1mMzI2N2U3OC1lNzdlLTQwYTgtOTczNS0xMGRlZmVmYjI2ZjIucG5nIiwid2lkdGgiOiI8PTEwMjQifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.czlsdRP2X09LBxpfQRLiog9ug0FpIMV5YAOzxjLTgz8"
              alt=""
              width={70}
            />
            <Link href={link.href} target="_blank">
              <img
                src="https://i.pinimg.com/originals/f0/e0/e9/f0e0e994c6700e2cf0540fb25c8b4edc.png"
                alt=""
                width={67}
                className="pt-[2px]"
              />
            </Link>
            <img
              src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/ed991cf4-7c8c-4530-b6ba-a3abf3ab2eae/dcpa2jw-f3267e78-e77e-40a8-9735-10defefb26f2.png/v1/fill/w_1024,h_1062/super_mario__brick_block_2d_by_joshuat1306_dcpa2jw-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTA2MiIsInBhdGgiOiJcL2ZcL2VkOTkxY2Y0LTdjOGMtNDUzMC1iNmJhLWEzYWJmM2FiMmVhZVwvZGNwYTJqdy1mMzI2N2U3OC1lNzdlLTQwYTgtOTczNS0xMGRlZmVmYjI2ZjIucG5nIiwid2lkdGgiOiI8PTEwMjQifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.czlsdRP2X09LBxpfQRLiog9ug0FpIMV5YAOzxjLTgz8"
              alt=""
              width={70}
            />
          </div>
        ))}
      </div>
      <div>
        <Mario />
      </div>
      <footer className="bg-green-500 h-48 bottom-0"></footer>
    </div>
  );
}
