import { ElementRef, useRef, useState } from "react";
import {
  ABOUTME,
  type Category,
  DATA,
  HTMLCONTENT,
  TYPEWRITERTEXT,
} from "../data";
import SocialBtn from "../components/SocialBtn";
import GithubImg from "../assets/GithubImg";
import LinkedInImg from "../assets/LinkedInImg";
import MailImg from "../assets/MailImg";
import Card from "../components/Card";
import TabBtn from "../components/TabBtn";
import avatarImg from "../assets/avatar.jpg";
import { Cursor, Typewriter } from "react-simple-typewriter";
import { Highlight } from "../components/Highlight";

function MainSite() {
  const [selection, setSelection] = useState<Category>("Projekte");
  const containerRef = useRef<ElementRef<"nav">>(null);
  const activeTabElementRef = useRef(null);
  const rightCard = useRef<ElementRef<"div">>(null);

  return (
    <>
      <div className="flex flex-col gap-10 xl:mb-0 xl:w-1/2">
        <div className="relative flex w-full flex-col items-center justify-center gap-10 xl:flex-row xl:justify-start">
          <img
            className="clip h-60 w-60 rounded-full object-cover"
            src={avatarImg}
            alt="ProfilBild"
          />
          <div className="flex flex-col gap-5">
            <div className="text-center xl:text-start">
              <h1 className="text-4xl">Kevin Rohlf</h1>
              <div className="flex text-2xl">
                <p className="bg-gradient-to-r from-accent to-third bg-clip-text text-2xl text-transparent drop-shadow-md">
                  <Typewriter
                    words={TYPEWRITERTEXT}
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
            <div className="flex justify-center gap-5 xl:absolute xl:bottom-0">
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
          <div className="mt-5 text-pretty text-sm">{ABOUTME}</div>
        </Card>
      </div>
      <div className="relative flex flex-col items-center gap-10 xl:w-1/2 xl:max-w-[540px]">
        <nav
          ref={containerRef}
          className="relative min-w-full rounded-3xl bg-secondary py-2 shadow-md"
        >
          <div className="relative isolate z-10 flex min-h-12 flex-wrap items-center justify-around px-4">
            {DATA.map((item, index) => (
              <TabBtn
                data-tab={item}
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
          className="flex min-h-96 w-full flex-col justify-center"
          refo={rightCard}
        >
          {selection && HTMLCONTENT[selection]}
        </Card>
      </div>
    </>
  );
}

export default MainSite;
