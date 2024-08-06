import "./App.css";
import DataProtection from "./view/DataProtection";
import Imprint from "./view/Imprint";
import MainSite from "./view/MainSite";
import "./index.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="flex min-h-screen flex-col items-center justify-center bg-primary text-third">
        <div className="h-full-footer flex w-screen max-w-7xl flex-col justify-between gap-10 px-5 pt-5 lg:px-20 lg:pt-20 xl:flex-row">
          <Routes>
            <Route path="/" element={<MainSite />}></Route>
            <Route path="/impressum" element={<Imprint />}></Route>
            <Route path="/datenschutz" element={<DataProtection />}></Route>
          </Routes>
        </div>
        <div className="mt-10 w-full max-w-7xl px-5 lg:px-20 xl:mt-0 xl:w-screen">
          <footer className="mt-5 flex h-20 items-center justify-around rounded-t-3xl bg-secondary">
            <Link
              className="cursor-pointer after:rounded-3xl after:bg-accent hover:text-accent"
              to="/impressum"
            >
              Impressum
            </Link>
            <span>© Kevin Rohlf {new Date().getFullYear()}</span>
            <Link
              className="cursor-pointer after:rounded-3xl after:bg-accent hover:text-accent"
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
