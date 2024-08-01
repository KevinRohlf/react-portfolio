import "./App.css";
import DataProtection from "./components/DataProtection";
import Imprint from "./components/Imprint";
import MainSite from "./components/MainSite";
import "./index.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="bg-primary flex flex-col justify-center text-third min-h-screen items-center">
        <div className="flex lg:px-20 px-5 pt-5 lg:pt-20 justify-between max-w-7xl w-screen xl:flex-row flex-col h-full-footer gap-10">
          <Routes>
            <Route path="/" element={<MainSite />}></Route>
            <Route path="/impressum" element={<Imprint />}></Route>
            <Route path="/datenschutz" element={<DataProtection />}></Route>
          </Routes>
        </div>
        <div className="max-w-7xl w-full xl:w-screen mt-10 xl:mt-0 px-5 lg:px-20">
          <footer className="bg-secondary flex justify-around h-20 items-center mt-5 rounded-t-3xl">
            <Link
              className="after:bg-accent after:rounded-3xl hover:text-accent cursor-pointer"
              to="/impressum"
            >
              Impressum
            </Link>
            <span>© Kevin Rohlf {new Date().getFullYear()}</span>
            <Link
              className="after:bg-accent after:rounded-3xl hover:text-accent cursor-pointer"
              to="/datenschutz"
            >
              Datenschutz
            </Link>
          </footer>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
