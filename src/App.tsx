import "./App.css";
import "./index.css";
import avatarImg from "./assets/avatar.jpg";
import SocialBtn from "./components/SocialBtn";
import LinkedInImg from "./assets/LinkedInImg";
import GithubImg from "./assets/GithubImg";
import MailImg from "./assets/MailImg";
import { DATA } from "./data";
import { useState } from "react";
import TabBtn from "./components/TabBtn";
import Card from "./components/Card";

function App() {
  const [selection, setSelection] = useState("Projekte");

  return (
    <div className="bg-slate-800 flex justify-center text-gray-200">
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
                  imgSrc={<GithubImg color="#e5e7eb" />}
                />
                <SocialBtn
                  href="https://www.linkedin.com/in/kevin-rohlf/"
                  imgSrc={<LinkedInImg color={"#e5e7eb"} />}
                />
                <SocialBtn
                  href="mailto:kevin@rohlf.io"
                  imgSrc={<MailImg color="#e5e7eb" />}
                />
              </div>
            </div>
          </div>
          <Card>
            <h2 className="text-2xl">Über mich</h2>
            <div className="mt-5">
              Ich bin ein Frontend Entwickler aus Hamburg. Ich habe Erfahrung
              mit React, TypeScript, TailwindCSS und Next.js. Ich bin immer
              offen für neue Herausforderungen und freue mich darauf, neue
              Technologien zu lernen.
            </div>
          </Card>
        </div>
        <div className="w-1/2 flex flex-col items-center gap-10">
          <nav className="w-4/5 bg-slate-700 h-12 rounded-3xl flex justify-center items-center shadow-md">
            {DATA.map((item, index) => (
              <TabBtn
                key={index}
                active={selection === item.name}
                onClick={() => setSelection(item.name)}
              >
                {item.name}
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
      <footer className=" absolute bottom-0 max-w-7xl w-screen bg-slate-700 flex justify-around h-20 items-center rounded-t-3xl">
        <a href="/impressum">Impressum</a>
        <span>© Kevin Rohlf {new Date().getFullYear()}</span>
        <a href="/datenschutz">Datenschutz</a>
      </footer>
    </div>

  );
}

export default App;
