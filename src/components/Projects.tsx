import { ElementRef, useRef, RefObject } from "react";
import { CATEGORIES } from "../data";
import Arrow from "../assets/Arrow";

interface ProjectsProps {
  rightCard: RefObject<HTMLDivElement>;
}

function Projects({ rightCard }: ProjectsProps) {
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
        showfieldElement.scrollLeft += rightCard.current?.clientWidth
          ? rightCard.current.clientWidth - 80
          : 400;
      }
    } else if (showfieldElement) {
      if (showfieldElement.scrollLeft <= 0) {
        showfieldElement.scrollLeft = showfieldElement.scrollWidth;
      } else {
        showfieldElement.scrollLeft -= rightCard.current?.clientWidth
          ? rightCard.current.clientWidth - 80
          : 400;
      }
    }
  };

  return (
    <div>
      <div
        onClick={() => {
          next(false);
        }}
        className="cursor-pointer absolute bg-primary w-10 h-10 rounded-3xl flex justify-center items-center left-3 top-1/2 z-10"
      >
        <Arrow />
      </div>
      <div
        onClick={() => {
          next(true);
        }}
        className="cursor-pointer absolute bg-primary w-10 h-10 rounded-3xl flex justify-center items-center right-3 top-1/2 z-10"
      >
        <Arrow className="rotate-180" />
      </div>

      <div
        ref={showfield}
        className="flex justify-between max-w-full items-center w-full relative snap-x overflow-hidden scroll-smooth"
      >
        {CATEGORIES.Projekte.map((item) => (
          <div
            key={item.title}
            className={`gap-5 flex items-center justify-center relative flex-col snap-center text-center`}
            style={{
              minWidth: rightCard.current?.clientWidth
                ? rightCard.current.clientWidth - 80 + "px"
                : "100%",
            }}
          >
            <img
              className="max-w-80 w-full"
              src={item.imgSrc}
              alt={item.title}
            />
            <h2 className="text-xl">{item.title}</h2>
            <p className="text-sm text-pretty max-w-96">{item.description}</p>
            <div className="flex gap-5 text-sm w-full justify-center">
              {item.technology.map((tech, index) => (
                <span key={index}>{tech}</span>
              ))}
            </div>
            <div className="flex w-full justify-evenly max-w-96">
              <a href={item.github} target="_blank">
                <button className="border-accent bg-transparent duration-200 hover:text-secondary hover:bg-accent border min-w-24 p-3 rounded-xl">
                  Github
                </button>
              </a>
              <a href={"/" + item.title}>
                <button className="border-accent bg-transparent duration-200 hover:text-secondary hover:bg-accent border min-w-24 p-3 rounded-xl">
                  Live
                </button>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
