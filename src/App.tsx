import "./App.css";
import "./index.css";
import avatarImg from "./assets/avatar.jpg";
import SocialBtn from "./components/SocialBtn";
import LinkedInImg from "./assets/LinkedInImg";
import GithubImg from "./assets/GithubImg";
import MailImg from "./assets/MailImg";
import { DATA } from "./data";
import { ElementRef, useEffect, useRef, useState } from "react";
import TabBtn from "./components/TabBtn";
import Card from "./components/Card";

function App() {
  const [selection, setSelection] = useState("Projekte");
  const containerRef = useRef<ElementRef<'nav'>>(null);
  const activeTabElementRef = useRef(null);

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

  return (
    <div className="bg-primary flex justify-center text-third">
      <div className="flex px-20 pt-20 justify-between max-w-7xl w-screen h-screen">
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
              Quereinsteiger. Ursprünglich Elektriker, habe ich meine
              Leidenschaft für die Programmierung entdeckt und mich
              professionell auf die Frontend-Entwicklung spezialisiert. Schon
              seit meiner Kindheit träume ich davon, digitale Welten zu
              erschaffen. Mein technischer Hintergrund hilft mir, kreative und
              präzise Lösungen zu entwickeln. Ich arbeite gerne mit den neuesten
              Technologien und gestalte benutzerfreundliche, ansprechende
              Webanwendungen. In meiner Freizeit bilde ich mich weiter und suche
              stets neue Herausforderungen. Ich freue mich darauf, mit Ihnen in
              Kontakt zutreten.
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
          <Card className="w-4/5 min-h-96">
            <span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit
              asperiores, ipsum placeat quidem corporis sequi minus numquam
              optio nostrum autem! Eaque voluptatibus quaerat minima enim
              eligendi eveniet asperiores possimus nesciunt?
            </span>
          </Card>
        </div>
      </div>
      <footer className=" absolute bottom-0 max-w-7xl w-screen bg-secondary flex justify-around h-20 items-center rounded-t-3xl">
        <a href="/impressum">Impressum</a>
        <span>© Kevin Rohlf {new Date().getFullYear()}</span>
        <a href="/datenschutz">Datenschutz</a>
      </footer>
    </div>
  );
}

export default App;
