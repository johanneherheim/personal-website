export type Project = {
  title: string;
  nn: string;
  nb: string;
  en: string;
  link: string;
  imageURL?: string;
};

export const projects: Project[] = [
  {
    title: "echo web",
    nn: "Nettsida for Linjeforeininga for informatikk — echo, laga ilag med Webkom.",
    nb: "Bokmål beskrivelse",
    en: "English description",
    link: "https://echo.uib.no/",
  },
  {
    title: "Voss 3-etappars (V3E)",
    nn: "Nettsida for sykkelritt på Voss 🚴‍♂️ Laga med React + Typescript, saman med Sanity. ",
    nb: "Bokmål beskrivelse",
    en: "English description",
    link: "https://v3e.no/",
  },
];
