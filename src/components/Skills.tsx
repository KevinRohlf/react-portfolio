import { CATEGORIES } from "../data";

function Skills() {
  return (
    <div className="group flex h-full flex-wrap items-center justify-center gap-5">
      {CATEGORIES.Skills.map((skill) => (
        <div
          key={skill.title}
          className="flex w-28 flex-col items-center transition-all duration-300 hover:!opacity-100 group-hover:opacity-30 [&>img]:hover:!grayscale-0 [&>img]:group-hover:grayscale"
        >
          <img
            src={skill.imgSrc}
            alt={skill.title}
            className="h-12 w-12 rounded-xl"
          />
          <span>{skill.title}</span>
        </div>
      ))}
    </div>
  );
}

export default Skills;
