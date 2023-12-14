import Link from "next/link";
import React from "react";

export const projects = [
  {
    title: "echo Webkom",
    link: "https://beta.echo-webkom.no",
    description: "Undergruppe i linjeforeningen echo drifter nettsidene til echo"
  },
  {
    title: "Bildegalleri",
    link: "johannesbilder.vercel.app",
  },
  /* {
    title: "Pokedex",
    link: "/pokedex",
  }, */
];

export function ProjectCard({ title, link }: { title: string; link: string }) {
  return (
    <div className="bg-secondary p-3 m-5 w-52">
      <h3>{title}</h3>
      <Link href={link}>{title}</Link>
    </div>
  );
}

export default function ProjectPage() {
  return (
    <div className=" w-screen h-2/3 sm:w-1/3">
      <div>

      {projects.map((p) => (
        <div key={p.title} className="flex justify-center">
          <ProjectCard title={p.title} link={p.link} />
        </div>
      ))}
      </div>
    </div>
  );
}
