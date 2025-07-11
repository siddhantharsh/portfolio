import { myProjects } from "../constants";
import Project from "../components/Project";
import { motion } from "framer-motion";
import "./ProjectsMeisken.css";
import BlurText from "../components/BlurText";

const projectImages = [
  "/assets/projects/neuralnexus.png",
  "/assets/projects/bankease.png",
  "/assets/projects/stockmarket.png",
  "/assets/projects/habittracker.png"
];

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.4, 0, 0.2, 1] } }
};

const Projects = () => {
  return (
    <section className="meisken-projects-section" id="projects">
      <BlurText
        text="Projects"
        delay={100}
        animateBy="words"
        direction="top"
        className="meisken-projects-heading text-4xl font-extrabold mb-8"
      />
      <BlurText
        text="I worked on these projects as both a developer and designer, writing code to build them while designing in Figma."
        delay={150}
        animateBy="words"
        direction="top"
        className="meisken-projects-desc mb-8"
      />
      <div className="meisken-projects-grid" style={{ gap: '2.5rem' }}>
        {myProjects.map((project, idx) => (
          <motion.div
            key={project.id}
            className="meisken-project-card meisken-project-card-framed"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={fadeInUp}
          >
            <div className="meisken-project-frame">
              <div className="meisken-project-image-wrap" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: 180 }}>
                {projectImages[idx] ? (
                  <img src={projectImages[idx]} alt={project.title + ' project image'} className="meisken-project-image" style={{ objectFit: 'contain', maxHeight: 200, maxWidth: '98%' }} />
                ) : (
                  <div className="meisken-project-image meisken-project-image-placeholder" />
                )}
              </div>
            </div>
            <div className="meisken-project-bottom-bar">
              <span className="meisken-project-number">{String(idx + 1).padStart(2, '0')}.</span>
              <span className="meisken-project-bottom-desc">{project.description}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
