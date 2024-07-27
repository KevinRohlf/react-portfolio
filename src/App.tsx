import "./App.css";
import Imprint from "./components/Imprint";
import MainSite from "./components/MainSite";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return ( 
  <div className="bg-primary flex justify-center text-third">
    <div className="flex px-20 pt-20 justify-between max-w-7xl w-screen h-screen">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainSite />}></Route>
        <Route path="/impressum" element={<Imprint />}></Route>
      </Routes>
    </BrowserRouter>
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
