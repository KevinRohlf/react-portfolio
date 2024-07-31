import { CATEGORIES } from "../data";

function Skills() {
    return ( 
        <div className="flex flex-wrap gap-5 justify-center items-center h-full">
        {CATEGORIES.Skills.map((skill) => (
          <div
            key={skill.title}
            className="flex w-28 flex-col items-center hover:animate-pulse"
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