import { myProjects } from "../constants";
import Project from "../components/Project";

const Projects = () => {
  return (
    <section className="relative c-space section-spacing" id="projects">
      <h2 className="text-heading text-4xl font-extrabold mb-8">Projects</h2>
      <div className="flex flex-col gap-8">
        {myProjects.map((project) => (
          <Project key={project.id} {...project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
