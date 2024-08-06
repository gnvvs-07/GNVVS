import user_info from "../../data/user_info.js";
import Project from "../Project.jsx";

function Projects() {
  return (
    <div>
      <h1 className="lg:w-[80%] text-zinc-900 dark:text-zinc-100 text-xl font-semibold text-center">Projects</h1>
      <section
        id="projects"
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 lg:px-16"
      >
        {user_info.projects.map((project, index) => {
          return (
            <Project
              key={index}
              title={project.title}
              description={project.description}
              technologies={project.technologies}
              github={project.github}
              // link={project.link}
            />
          );
        })}
      </section>
    </div>
  );
}

export default Projects;
