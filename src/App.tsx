import "./App.css";
import Imprint from "./components/Imprint";
import MainSite from "./components/MainSite";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="bg-primary flex flex-col xl:flex-row justify-center text-third items-center">
      <div className="flex lg:px-20 px-5 pt-5 lg:pt-20 justify-between max-w-7xl w-screen h-full xl:h-screen xl:flex-row flex-col h-full-footer gap-10">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<MainSite />}></Route>
            <Route path="/impressum" element={<Imprint />}></Route>
          </Routes>
        </BrowserRouter>
      </div>
      <div className="xl:absolute bottom-0 max-w-7xl w-full xl:w-screen mt-10 xl:mt-0 px-5 lg:px-20">
        <footer
        className="bg-secondary flex justify-around h-20 items-center rounded-t-3xl"
        >
          <a
            className="after:bg-accent after:rounded-3xl hover:text-accent"
            href="/impressum"
          >
            Impressum
          </a>
          <span>© Kevin Rohlf {new Date().getFullYear()}</span>
          <a
            className="after:bg-accent after:rounded-3xl hover:text-accent"
            href="/datenschutz"
          >
            Datenschutz
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
