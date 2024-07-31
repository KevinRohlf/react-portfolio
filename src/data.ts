import HTMLImg from "./assets/html.svg";
import CSSImg from "./assets/css.svg";
import JavaScriptImg from "./assets/javascript.svg";
import AngularImg from "./assets/angular.svg";
import ReactImg from "./assets/react.svg";
import TypeScriptImg from "./assets/typescript.svg";
import TailwindCSSImg from "./assets/tailwindcss.svg";
import EplImg from "./assets/epl.png";
import PokedexImg from "./assets/pokedex.png";
import JoinImg from "./assets/join.png";

export const DATA = ["Projekte", "Skills", "Berufserfahrung", "Ausbildung"];

export const aboutMe = `Moin! Ich bin ein 28 Jahre junger Frontend-Entwickler und
            Quereinsteiger. Ursprünglich Elektriker, habe ich meine Leidenschaft
            für die Programmierung entdeckt und mich professionell auf die
            Frontend-Entwicklung spezialisiert. Schon seit meiner Kindheit
            träume ich davon, digitale Welten zu erschaffen. Mein technischer
            Hintergrund hilft mir, kreative und präzise Lösungen zu entwickeln.
            Ich arbeite gerne mit den neuesten Technologien und gestalte
            benutzerfreundliche, ansprechende Webanwendungen. In meiner Freizeit
            bilde ich mich weiter und suche stets neue Herausforderungen. Ich
            freue mich darauf, mit Ihnen in Kontakt zutreten.`

export const CATEGORIES = {
  Projekte: [
    {
      title: "Pokedex",
      description: "Ein simpler Pokedex, der seine Daten von der PokeAPI bezieht",
      technology: ["Angular", "TypeScript", "SCSS", "RestAPI"],
      imgSrc: PokedexImg,
      github: "https://github.com/KevinRohlf/Angular-Pokedex",
    },
    {
      title: "El Pollo Loco",
      description: "Ein einfaches Jump-and-Run-Spiel basierend auf einem objektorientierten Ansatz. Hilf Pepe, Münzen und Salsaflaschen zu finden, um gegen das große Huhn zu kämpfen.",
      technology: ["JavaScript", "CSS", "OOP"],
      imgSrc: EplImg,
      github: "https://github.com/KevinRohlf/El-Pollo-Loco",
    },
    {
      title: "Join",
      description: "Ein Aufgabenmanager inspiriert vom Kanban-System: Erstellen und Organisieren von Aufgaben mit Drag-and-Drop-Funktionen sowie die Zuweisung von Benutzern und Kategorien.",
      technology: ["Javascript", "HTML", "CSS"],
      imgSrc: JoinImg,
      github: "https://github.com/KevinRohlf/join",
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
      description: "Bei der publicplan. GmbH geht es darum, die öffentliche Verwaltung im Sinne des OZG/OZG 2.0 zu digitalisieren. Dazu werden Formulare für Bürger digital als PaaS zur Verfügung gestellt.",
      dates: "September 2023 - August 2024",
    },
    {
      company: "DB Netz AG",
      title: "Elektriker und Triebfahrzeugführer",
      description: "erste Berufserfahrung",
      dates: "September 2015 - August 2023",
    },
  ],
  Ausbildung: [
    {
      company: "Developer Academy",
      title: "Qualifizierung zum Frontend-Entwickler",
      description: "Die Developer Akademie bildet Quereinsteiger zu Software Entwicklern aus.",
      dates: "Dezember 2022 - Juni 2023",
    },
    {
      company: "DB Netz AG",
      title: "Ausbildung zum Industrieelektriker",
      description: "Das ist die erste Ausbildung",
      dates: "September 2013 - Juli 2015",
    },
  ],
};
