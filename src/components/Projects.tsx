import { ElementRef, useRef } from "react";
import { CATEGORIES } from "../data";
import Arrow from "../assets/Arrow";

function Projects() {
  const showfield = useRef<ElementRef<"div">>(null);
  const content = useRef<ElementRef<"div">>(null);

  const next = (next: boolean) => {
    const showfieldElement = showfield.current;
    if (showfieldElement && next) {
      if (
        showfieldElement.scrollLeft + showfieldElement.clientWidth >=
        showfieldElement.scrollWidth
      ) {
        showfieldElement.scrollLeft = 0;
      } else {
        showfieldElement.scrollLeft += content.current?.clientWidth
          ? content.current.clientWidth
          : 400;
      }
    } else if (showfieldElement) {
      if (showfieldElement.scrollLeft <= 0) {
        showfieldElement.scrollLeft = showfieldElement.scrollWidth;
      } else {
        showfieldElement.scrollLeft -= content.current?.clientWidth
          ? content.current.clientWidth
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
        className="absolute left-3 top-1/2 z-10 flex h-10 w-10 cursor-pointer items-center justify-center rounded-3xl bg-primary"
      >
        <Arrow />
      </div>
      <div
        onClick={() => {
          next(true);
        }}
        className="absolute right-3 top-1/2 z-10 flex h-10 w-10 cursor-pointer items-center justify-center rounded-3xl bg-primary"
      >
        <Arrow className="rotate-180" />
      </div>

      <div
        ref={showfield}
        className="relative flex w-full max-w-full snap-x items-center justify-between overflow-hidden scroll-smooth"
      >
        {CATEGORIES.Projekte.map((item) => (
          <div
            key={item.title}
            className={`relative flex min-w-full snap-center flex-col items-center justify-center gap-5 text-center`}
            ref={content}
          >
            <img
              className="w-full max-w-80"
              src={item.imgSrc}
              alt={item.title}
            />
            <h2 className="text-xl">{item.title}</h2>
            <p className="max-w-96 text-pretty text-sm">{item.description}</p>
            <div className="flex w-full justify-center gap-5 text-sm">
              {item.technology.map((tech, index) => (
                <span key={index}>{tech}</span>
              ))}
            </div>
            <div className="flex w-full max-w-96 justify-evenly">
              <a href={item.github} target="_blank">
                <button className="min-w-24 rounded-xl border border-accent bg-transparent p-3 duration-200 hover:bg-accent hover:text-secondary">
                  Github
                </button>
              </a>
              <a href={"/" + item.title.toLowerCase().replace(/\s/g, '')} target="_blank">
                <button className="min-w-24 rounded-xl border border-accent bg-transparent p-3 duration-200 hover:bg-accent hover:text-secondary">
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
