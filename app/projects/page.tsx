import Link from "next/link";
import { Project, projects } from "./projects";

function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="bg-muted p-4 pb-12 rounded-lg h-full relative">
      <h3 className="font-semibold text-2xl">{project.title}</h3>
      <p className="my-3">{project.nn}</p>
      <Link
        href={project.link}
        className="bg-gradient-to-tl from-blue-500 to-green-500 text-white text-md py-1 px-4 rounded-full absolute left-4 bottom-4 tracking-wide text-opacity-90"
        target="_blank"
      >
        {project.link}
      </Link>
    </div>
  );
}

export default function ProjectPage() {
  return (
    <>
      <h1 className="w-4/5 sm:w-2/3 mx-auto mt-10 mb-16">Mine prosjekter</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 w-4/5 sm:w-2/3 mx-auto my-10">
        {projects.map((p) => (
          <ProjectCard project={p} key={p.title} />
        ))}
      </div>
    </>
  );
}
