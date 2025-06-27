import HTMLImg from "./assets/html.svg";
import CSSImg from "./assets/css.svg";
import JavaScriptImg from "./assets/javascript.svg";
import AngularImg from "./assets/angular.svg";
import ReactImg from "./assets/react.svg";
import TypeScriptImg from "./assets/typescript.svg";
import TailwindCSSImg from "./assets/tailwindcss.svg";
import GitImg from "./assets/git.svg";
import EplImg from "./assets/epl.png";
import PokedexImg from "./assets/pokedex.png";
import JoinImg from "./assets/join.png";
import Projects from "./components/Projects";
import CVListItem from "./components/CVListItem";
import Skills from "./components/Skills";
import PSDImg from "./assets/psd.png";

export const DATA = [
  "Projekte",
  "Skills",
  "Berufserfahrung",
  "Ausbildung",
] as const;

export type Category = (typeof DATA)[number];

export const ABOUTME = `Moin! 
Ich bin ein leidenschaftlicher Frontend-Entwickler und Quereinsteiger. Ursprünglich habe ich eine Ausbildung als Elektriker abgeschlossen, doch meine wahre Leidenschaft galt schon immer dem Programmieren. Seit meiner Kindheit träume ich davon, digitale Welten zu erschaffen und innovative Lösungen zu entwickeln. Durch meinen technischen Hintergrund bringe ich ein besonderes Verständnis für präzise und effiziente Arbeitsweisen mit. Jetzt habe ich meinen Traum verwirklicht und mich auf die Frontend-Entwicklung spezialisiert, wobei ich stets danach strebe, benutzerfreundliche und ansprechende Webanwendungen zu gestalten. Ich freue mich darauf, meine Reise fortzusetzen und neue Herausforderungen anzunehmen.`;

export const TYPEWRITERTEXT = [
  "Frontend Entwickler",
  "Code Enthusiast",
  "Problemlöser",
];

export const CATEGORIES = {
  Projekte: [
    {
      title: "Pokedex",
      description:
        "Ein simpler Pokedex, der seine Daten von der PokeAPI bezieht",
      technology: ["Angular", "TypeScript", "SCSS", "RestAPI"],
      imgSrc: PokedexImg,
      github: "https://github.com/KevinRohlf/Angular-Pokedex",
    },
    {
      title: "El Pollo Loco",
      description:
        "Ein einfaches Jump-and-Run-Spiel basierend auf einem objektorientierten Ansatz. Hilf Pepe, Münzen und Salsaflaschen zu finden, um gegen das große Huhn zu kämpfen.",
      technology: ["JavaScript", "CSS", "OOP"],
      imgSrc: EplImg,
      github: "https://github.com/KevinRohlf/El-Pollo-Loco",
    },
    {
      title: "Join",
      description:
        "Ein Aufgabenmanager inspiriert vom Kanban-System: Erstellen und Organisieren von Aufgaben mit Drag-and-Drop-Funktionen sowie die Zuweisung von Benutzern und Kategorien.",
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
    {
      title: "Git",
      imgSrc: GitImg,
    },
    {
      title: "Scrum",
      imgSrc: PSDImg,
    },

  ],
  Berufserfahrung: [
    {
      company: "deltaDAO AG",
      title: "Junior Software Entwickler (Frontend)",
      description:
        "",
      dates: "Oktober 2024 - Heute",
    },
    {
      company: "publicplan GmbH",
      title: "Formular Entwickler",
      description:
        "Bei der publicplan. GmbH geht es darum, die öffentliche Verwaltung im Sinne des OZG/OZG 2.0 zu digitalisieren. Dazu werden Formulare für Bürger digital als PaaS zur Verfügung gestellt.",
      dates: "September 2023 - August 2024",
    },
    {
      company: "DB Netz AG",
      title: "Elektriker und Triebfahrzeugführer",
      description:
        "Instandhaltung der Oberleitungsanlage und Führen von Nebenfahrzeugen",
      dates: "September 2015 - August 2023",
    },
  ],
  Ausbildung: [
    {
      company: "Developer Academy",
      title: "Qualifizierung zum Frontend-Entwickler",
      description:
        "Die Developer Akademie bildet Quereinsteiger zu Software Entwicklern aus.",
      dates: "Dezember 2022 - Juni 2023",
    },
    {
      company: "DB Netz AG",
      title: "Ausbildung zum Industrieelektriker",
      description:
        "Installation und Inbetriebnahme von elektrischen Systemen und Anlagen, Wartung und Reparatur von Produktions- und Betriebsanlagen, Überprüfung und Optimierung elektrischer Systeme, Diagnose und Behebung technischer Störungen.",
      dates: "September 2013 - Juli 2015",
    },
  ],
};

export const HTMLCONTENT = {
  Ausbildung: (
    <div className="relative flex gap-10 before:min-h-full before:min-w-2 before:rounded-xl before:bg-primary">
      <div className="flex flex-col gap-10">
        {CATEGORIES.Ausbildung.map((item) => (
          <CVListItem key={item.title} {...item} />
        ))}
      </div>
    </div>
  ),
  Berufserfahrung: (
    <div className="relative flex gap-10 before:min-h-full before:min-w-2 before:rounded-xl before:bg-primary">
      <div className="flex flex-col gap-10">
        {CATEGORIES.Berufserfahrung.map((item) => (
          <CVListItem key={item.title} {...item} />
        ))}
      </div>
    </div>
  ),
  Projekte: <Projects />,
  Skills: <Skills />,
};
