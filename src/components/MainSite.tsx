import { ElementRef, useRef, useState } from "react";
import { aboutMe, CATEGORIES, DATA } from "../data";
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
import Projects from "./Projects";
import Skills from "./Skills";

function MainSite() {
  const [selection, setSelection] = useState("Projekte");
  const containerRef = useRef<ElementRef<"nav">>(null);
  const activeTabElementRef = useRef(null);
  const rightCard = useRef<ElementRef<"div">>(null);
  const TypewriterText = ["Frontend Entwickler", "Geiler Typ", "Macher"];

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
          <div className="mt-5 text-sm text-pretty">{aboutMe}</div>
        </Card>
      </div>
      <div className="xl:w-1/2 flex flex-col items-center gap-10 relative xl:max-w-[540px]">
        <nav
          ref={containerRef}
          className="min-w-full bg-secondary rounded-3xl relative shadow-md py-2"
        >
          <div className="flex justify-around flex-wrap items-center relative z-10 isolate px-4 min-h-12">
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

        <Card
          className="w-full min-h-96 flex flex-col justify-center"
          refo={rightCard}
        >
          {selection === "Projekte" && <Projects rightCard={rightCard} />}
          {selection === "Skills" && <Skills />}
          {selection === "Berufserfahrung" && (
            <div className="flex before:bg-primary before:min-h-full before:min-w-2 before:rounded-xl gap-10 relative">
              <div className="flex flex-col gap-10">
                {CATEGORIES.Berufserfahrung.map((item) => (
                  <CVList key={item.title} {...item} />
                ))}
              </div>
            </div>
          )}
          {selection === "Ausbildung" && (
            <div className="flex before:bg-primary before:min-h-full before:min-w-2 before:rounded-xl gap-10 relative">
            <div className="flex flex-col gap-10">
              {CATEGORIES.Ausbildung.map((item) => (
                <CVList key={item.title} {...item} />
              ))}
            </div>
          </div>
          )}
        </Card>
      </div>
    </>
  );
}

export default MainSite;
