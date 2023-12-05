import Link from "next/link";
import Image from "next/image";
import gardaLake from "/src/components/images/garda-lake.jpeg";
import pokedex from "src/app/components/images/pokedex.jpeg";
import games from "src/components/images/games.jpeg";
import nice from "src/components/images/nice-beach.jpeg";

export const cards = [
  {
    name: "games",
    link: "/games",
    picture: games,
  },
  {
    name: "gallery",
    link: "/gallery",
    picture: gardaLake,
  },
  {
    name: "projects",
    link: "/projects",
    picture: gardaLake,
  },
  {
    name: "socials",
    link: "/socials",
    picture: gardaLake,
  },
];

export default function InfoCards({
  link,
  name,
  picture,
}: {
  link: string;
  name: string;
  picture: any;
}) {
  return (
    <div className="border p-2 rounded w-52 bg-secondary hover:bg-destructive">
      <Link href={link}>
        <Image
          src={picture}
          alt=""
          loading="lazy"
          className="h-32 w-full object-cover rounded"
        />
        <p className="text-center pt-5 pb-3">{name}</p>
      </Link>
    </div>
  );
}
