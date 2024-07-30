import HTMLImg from "./assets/html.svg";
import CSSImg from "./assets/css.svg";
import JavaScriptImg from "./assets/javascript.svg";
import AngularImg from "./assets/angular.svg";
import ReactImg from "./assets/react.svg";
import TypeScriptImg from "./assets/typescript.svg";
import TailwindCSSImg from "./assets/tailwindcss.svg";

export const DATA = ["Projekte", "Skills", "Berufserfahrung", "Ausbildung", "Kontakt"];

export const CATEGORIES = {
  Projekte: [
    {
      title: "Pokedex",
      description: "Ein simpler Pokedex, der seine Daten von der PokeAPI bezieht",
      technology: ["Angular", "TypeScript", "SCSS", "RestAPI"],
      imgSrc: "https://via.placeholder.com/150",
      github: "",
    },
    {
      title: "El pollo loco",
      description: "Ein simples jump and run Spiel",
      technology: ["JavaScript", "CSS", "OOP"],
      imgSrc: "https://via.placeholder.com/150",
      github: "",
    },
    {
      title: "Join",
      description: "Das ist das dritte Projekt",
      technology: ["React", "TypeScript", "TailwindCSS"],
      imgSrc: "https://via.placeholder.com/150",
      github: "",
    },
  ],
  Skills: [
    {
      title: "HTML",
      imgSrc: HTMLImg,
    },
    {
      title: "CSS(SCSS)",
      imgSrc: CSSImg,
    },
    {
      title: "JavaScript",
      imgSrc: JavaScriptImg,
    },
    {
      title: "Angular",
      imgSrc: AngularImg,
    },
    {
      title: "React",
      imgSrc: ReactImg,
    },
    {
      title: "TypeScript",
      imgSrc: TypeScriptImg,
    },
    {
      title: "TailwindCSS",
      imgSrc: TailwindCSSImg,
    },
  ],
  Berufserfahrung: [
    {
      company: "publicplan GmbH",
      title: "Formular Entwickler",
      description: "Entwicklung von Formularen mit Form.io und JavaScript",
      imgSrc: "https://via.placeholder.com/50",
      dates: "September 2023 - August 2024",
    },
    {
      company: "DB Netz AG",
      title: "Elektriker und Triebfahrzeugführer",
      description: "erste Berufserfahrung",
      imgSrc: "https://via.placeholder.com/50",
      dates: "September 2015 - August 2023",
    },
  ],
  Ausbildung: [
    {
      company: "Developer Academy",
      title: "Qualifizierung zum Frontend-Entwickler",
      description: "Die Developer Akademie bildet Quereinsteiger zu Software Entwicklern aus.",
      imgSrc: "https://via.placeholder.com/50",
      dates: "Dezember 2022 - Juni 2023",
    },
    {
      company: "DB Netz AG",
      title: "Ausbildung zum Industrieelektriker",
      description: "Das ist die erste Ausbildung",
      imgSrc: "https://via.placeholder.com/50",
      dates: "September 2013 - Juli 2015",
    },
  ],
};
