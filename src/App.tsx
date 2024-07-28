import "./App.css";
import Imprint from "./components/Imprint";
import MainSite from "./components/MainSite";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return ( 
  <div className="bg-primary flex flex-col xl:flex-row justify-center text-third items-center">
    <div className="flex lg:px-20 px-5 pt-5 lg:pt-20 justify-between max-w-7xl w-screen xl:h-screen xl:flex-row flex-col">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainSite />}></Route>
        <Route path="/impressum" element={<Imprint />}></Route>
      </Routes>
    </BrowserRouter>
    </div>
    <footer className=" xl:absolute bottom-0 max-w-7xl w-11/12 xl:w-screen bg-secondary flex justify-around h-20 items-center mt-10 xl:mt-0 rounded-t-3xl">
      <a className="after:bg-cyan-600 after:rounded-3xl hover:text-cyan-600" href="/impressum">Impressum</a>
      <span>© Kevin Rohlf {new Date().getFullYear()}</span>
      <a className="after:bg-cyan-600 after:rounded-3xl hover:text-cyan-600" href="/datenschutz">Datenschutz</a>
    </footer>
  </div>
    
    
  );
}

export default App;
