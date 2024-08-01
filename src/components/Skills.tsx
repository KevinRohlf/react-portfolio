import { CATEGORIES } from "../data";

function Skills() {
    return ( 
        <div className="flex flex-wrap gap-5 justify-center items-center h-full group">
        {CATEGORIES.Skills.map((skill) => (
          <div
            key={skill.title}
            className="flex w-28 flex-col items-center transition-all duration-300 group-hover:opacity-30 hover:!opacity-100 [&>img]:group-hover:grayscale [&>img]:hover:!grayscale-0"
          >
            <img
              src={skill.imgSrc}
              alt={skill.title}
              className="rounded-xl h-12 w-12"
            />
            <span>{skill.title}</span>
          </div>
        ))}
      </div>
     );
}

export default Skills;