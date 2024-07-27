import { ElementRef, useEffect, useRef, useState } from "react";
import { CATEGORYS, DATA } from "../data";
import SocialBtn from "./SocialBtn";
import GithubImg from "../assets/GithubImg";
import LinkedInImg from "../assets/LinkedInImg";
import MailImg from "../assets/MailImg";
import Card from "./Card";
import TabBtn from "./TabBtn";
import avatarImg from "../assets/avatar.jpg";

function MainSite() {
  const [selection, setSelection] = useState("Projekte");
  const containerRef = useRef<ElementRef<"nav">>(null);
  const activeTabElementRef = useRef(null);
  const showfield = useRef<ElementRef<"div">>(null);

  const next = (next: boolean) => {
    const showfieldElement = showfield.current;
    if (showfieldElement && next) {
      if (
        showfieldElement.scrollLeft + showfieldElement.clientWidth >=
        showfieldElement.scrollWidth
      ) {
        showfieldElement.scrollLeft = 0;
      } else {
        showfieldElement.scrollLeft += 500;
      }
      console.log(showfieldElement.scrollLeft);
    } else if (showfieldElement) {
      if (showfieldElement.scrollLeft <= 0) {
        showfieldElement.scrollLeft = showfieldElement.scrollWidth;
      } else {
        showfieldElement.scrollLeft -= 500;
        console.log(showfieldElement.scrollLeft);
      }
    }
  };

  useEffect(() => {
    const container = containerRef.current;

    if (selection && container) {
      const activeTabElement = activeTabElementRef.current;

      if (activeTabElement) {
        const { offsetLeft, offsetWidth } = activeTabElement;

        const clipLeft = offsetLeft;
        const clipRight = offsetLeft + offsetWidth;
        container.style.clipPath = `inset(0 ${Number(
          100 - (clipRight / container.offsetWidth) * 100
        ).toFixed()}% 0 ${Number(
          (clipLeft / container.offsetWidth) * 100
        ).toFixed()}% round 9999px)`;
      }
    }
  }, [selection, activeTabElementRef, containerRef]);

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
          className=" gap-14 flex items-center w-full relative overflow-hidden snap-x scroll-smooth"
        >
          {CATEGORYS.Projekte.map((item, index) => {
            return (
              <div
                key={index}
                className="gap-5 flex items-center justify-center relative flex-col min-w-96 snap-center"
              >
                <img src="https://via.placeholder.com/150" alt="" />
                <h2 className="text-xl">{item.title}</h2>
                <p className="text-sm text-pretty">{item.description}</p>
                <div className="flex gap-5 text-sm w-full justify-center">
                  {item.technology.map((tech, index) => (
                    <span key={index}>{tech}</span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  };

  return (
    <>
      <div className="w-1/2 flex flex-col gap-10">
        <div className="w-full flex items-center gap-16 relative">
          <img
            className="rounded-full object-cover w-60 h-60 clip"
            src={avatarImg}
            alt="ProfilBild"
          />
          <div className="flex flex-col">
            <div>
              <h1 className="text-4xl">Kevin Rohlf</h1>
              <p className="text-2xl">Frontend Entwickler</p>
            </div>
            <div className="flex gap-5 absolute bottom-0">
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
      <div className="w-1/2 flex flex-col items-center gap-10 relative">
        <nav className="w-4/5 bg-secondary h-12 rounded-3xl flex justify-center items-center shadow-md">
          {DATA.map((item, index) => (
            <TabBtn
              datatab={item}
              refo={selection === item ? activeTabElementRef : null}
              key={index}
              active={false}
              onClick={() => setSelection(item)}
            >
              {item}
            </TabBtn>
          ))}
        </nav>
        <nav
          aria-hidden
          className="w-4/5 bg-primary h-10 mt-1 rounded-3xl flex justify-center items-center shadow-md clip-path-container"
          ref={containerRef}
        >
          {DATA.map((item, index) => (
            <TabBtn
              datatab={item}
              active={true}
              refo={selection === item ? activeTabElementRef : null}
              key={index}
              onClick={() => setSelection(item)}
            >
              {item}
            </TabBtn>
          ))}
        </nav>
        <Card className="w-4/5 min-h-96 relative">
          {selection === "Projekte" && <Projects />}
          {selection === "Skills" && <div>Skills</div>}
          {selection === "Berufserfahrung" && <div>Berufserfahrung</div>}
          {selection === "Ausbildung" && <div>Ausbildung</div>}
        </Card>
      </div>
    </>
  );
}

export default MainSite;
