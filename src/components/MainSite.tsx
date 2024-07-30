import { ElementRef, useRef, useState } from "react";
import { CATEGORIES, DATA } from "../data";
import SocialBtn from "./SocialBtn";
import GithubImg from "../assets/GithubImg";
import LinkedInImg from "../assets/LinkedInImg";
import MailImg from "../assets/MailImg";
import Card from "./Card";
import TabBtn from "./TabBtn";
import avatarImg from "../assets/avatar.jpg";
import { Cursor, Typewriter } from "react-simple-typewriter";
import CVList from "./CVList";
import { Highlight } from "./Highlight";

function MainSite() {
  const [selection, setSelection] = useState("Projekte");
  const containerRef = useRef<ElementRef<"nav">>(null);
  const activeTabElementRef = useRef(null);
  const showfield = useRef<ElementRef<"div">>(null);
  const rightCard = useRef<ElementRef<"div">>(null);

  const next = (next: boolean) => {
    const showfieldElement = showfield.current;
    if (showfieldElement && next) {
      if (
        showfieldElement.scrollLeft + showfieldElement.clientWidth >=
        showfieldElement.scrollWidth
      ) {
        showfieldElement.scrollLeft = 0;
      } else {
        showfieldElement.scrollLeft += rightCard.current?.clientWidth
          ? rightCard.current.clientWidth - 80
          : 400;
      }
    } else if (showfieldElement) {
      if (showfieldElement.scrollLeft <= 0) {
        showfieldElement.scrollLeft = showfieldElement.scrollWidth;
      } else {
        showfieldElement.scrollLeft -= rightCard.current?.clientWidth
          ? rightCard.current.clientWidth - 80
          : 400;
      }
    }
  };

  const TypewriterText = ["Frontend Entwickler", "Geiler Typ", "Macher"];

  const Skills = () => {
    return (
      <div className="flex flex-wrap gap-5 justify-center items-center h-full">
        {CATEGORIES.Skills.map((skill) => (
          <div
            key={skill.title}
            className="flex w-28 flex-col items-center hover:animate-pulse"
          >
            <img
              src={skill.imgSrc}
              alt={skill.title}
              className="rounded-xl h-12 w-12"
            />
            <span>{skill.title}</span>
          </div>
        ))}
      </div>
    );
  };

  const Projects = () => {
    return (
      <div>
        <div
          onClick={() => {
            next(false);
          }}
          className="cursor-pointer absolute bg-primary w-10 h-10 rounded-3xl flex justify-center items-center left-3 top-1/2"
        >
          {"<"}
        </div>
        <div
          onClick={() => {
            next(true);
          }}
          className="cursor-pointer absolute bg-primary w-10 h-10 rounded-3xl flex justify-center items-center right-3 top-1/2"
        >
          {">"}
        </div>

        <div
          ref={showfield}
          className="flex justify-between max-w-full items-center w-full relative snap-x overflow-hidden scroll-smooth"
        >
          {CATEGORIES.Projekte.map((item) => (
            <div
              key={item.title}
              className={`gap-5 flex items-center justify-center relative flex-col snap-center`}
              style={{
                minWidth: rightCard.current?.clientWidth
                  ? rightCard.current.clientWidth - 80 + "px"
                  : "100%",
              }}
            >
              <img src={item.imgSrc} alt={item.title} />
              <h2 className="text-xl">{item.title}</h2>
              <p className="text-sm text-pretty">{item.description}</p>
              <div className="flex gap-5 text-sm w-full justify-center">
                {item.technology.map((tech, index) => (
                  <span key={index}>{tech}</span>
                ))}
              </div>
              <div className="flex w-full justify-evenly">
                <a href={item.github}>
                  <button className="border-accent bg-transparent duration-200 hover:text-secondary hover:bg-accent border min-w-24 p-3 rounded-xl">
                    Github
                  </button>
                </a>
                <a href={"/" + item.title}>
                  <button className="border-accent bg-transparent duration-200 hover:text-secondary hover:bg-accent border min-w-24 p-3 rounded-xl">
                    Live
                  </button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <>
      <div className="xl:w-1/2 flex flex-col gap-10 xl:mb-0">
        <div className="w-full flex items-center gap-10 relative justify-center xl:justify-start flex-col xl:flex-row">
          <img
            className="rounded-full object-cover w-60 h-60 clip"
            src={avatarImg}
            alt="ProfilBild"
          />
          <div className="flex flex-col gap-5">
            <div className="text-center xl:text-start">
              <h1 className="text-4xl">Kevin Rohlf</h1>
              <div className="flex text-2xl">
                <p className="drop-shadow-md text-2xl bg-gradient-to-r from-accent to-third text-transparent bg-clip-text">
                  <Typewriter
                    words={TypewriterText}
                    loop={false}
                    typeSpeed={70}
                    deleteSpeed={50}
                  />
                </p>
                <p>
                  <Cursor />
                </p>
              </div>
            </div>
            <div className="flex justify-center gap-5 xl:absolute xl:bottom-0 ">
              <SocialBtn
                href="https://github.com/KevinRohlf"
                imgSrc={<GithubImg />}
              />
              <SocialBtn
                href="https://www.linkedin.com/in/kevin-rohlf/"
                imgSrc={<LinkedInImg />}
              />
              <SocialBtn href="mailto:kevin@rohlf.io" imgSrc={<MailImg />} />
            </div>
          </div>
        </div>
        <Card>
          <h2 className="text-2xl">Über mich</h2>
          <div className="mt-5 text-sm text-pretty">
            Moin! Ich bin ein 28 Jahre junger Frontend-Entwickler und
            Quereinsteiger. Ursprünglich Elektriker, habe ich meine Leidenschaft
            für die Programmierung entdeckt und mich professionell auf die
            Frontend-Entwicklung spezialisiert. Schon seit meiner Kindheit
            träume ich davon, digitale Welten zu erschaffen. Mein technischer
            Hintergrund hilft mir, kreative und präzise Lösungen zu entwickeln.
            Ich arbeite gerne mit den neuesten Technologien und gestalte
            benutzerfreundliche, ansprechende Webanwendungen. In meiner Freizeit
            bilde ich mich weiter und suche stets neue Herausforderungen. Ich
            freue mich darauf, mit Ihnen in Kontakt zutreten.
          </div>
        </Card>
      </div>
      <div className="xl:w-1/2 flex flex-col items-center gap-10 relative xl:max-w-[540px]">
        <nav ref={containerRef} className="min-w-full bg-secondary rounded-3xl relative shadow-md">
          <div className="flex justify-around flex-wrap items-center relative z-10 isolate px-4 min-h-12 ">
          {DATA.map((item, index) => (
            <TabBtn
              datatab={item}
              refo={selection === item ? activeTabElementRef : null}
              key={index}
              active={selection === item}
              onClick={() => setSelection(item)}
            >
              {item}
            </TabBtn>
          ))}
          </div>
          <Highlight activeSection={selection} listRef={containerRef} />
        </nav>
        
        <Card className="w-full min-h-96 flex flex-col justify-center" refo={rightCard}>
          
          {selection === "Projekte" && <Projects />}
          {selection === "Skills" && <Skills />}
          {selection === "Berufserfahrung" && (
            <div className="flex flex-col gap-10">
              {CATEGORIES.Berufserfahrung.map((item) => (
                <CVList key={item.title} {...item} />
              ))}
            </div>
          )}
          {selection === "Ausbildung" && (
            <div className="flex flex-col gap-10">
              {CATEGORIES.Ausbildung.map((item) => (
                <CVList key={item.title} {...item} />
              ))}
            </div>
          )}
        </Card>
      </div>
    </>
  );
}

export default MainSite;
