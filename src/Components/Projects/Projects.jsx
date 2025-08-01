import { Link } from "react-router-dom";
import { HomeProjects } from "../../Data/Data";
import ProjectCard from "../ProjectCard/ProjectCard";
import { motion } from "motion/react";

export default function Projects() {
  return (
    <motion.section
      id="projects"
      className="py-8"
      initial={{ opacity: 0, y: 100, scale: 0.7, rotate: -10 }}
      whileInView={{ opacity: 1, y: 0, scale: 1, rotate: 0 }}
      viewport={{ once: false, amount: 0.1 }}
      transition={{ duration: 1, ease: "backOut" }}
    >
      {/* header */}
      <motion.h1
        className="text-4xl font-extrabold text-center mb-8"
        initial={{ scale: 0.5, opacity: 0, rotate: -10 }}
        whileInView={{ scale: 1, opacity: 1, rotate: 0 }}
        viewport={{ once: false, amount: 0.4 }}
        transition={{ duration: 0.7, delay: 0.2, ease: "backOut" }}
      >
        My <span className="text-violet-600">Projects</span>
      </motion.h1>
      {/* End of header */}
      {/* description */}
      <motion.p
        className="text-center text-gray-600 mb-8"
        initial={{ opacity: 0, y: 40, scale: 0.8 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: false, amount: 0.5 }}
        transition={{ duration: 0.7, delay: 0.4, ease: "backOut" }}
      >
        Here are some of my recent projects. Each project was carefully crafted
        with attention to detail, performance, and user experience.
      </motion.p>
      {/* End of description */}
      {/* Projects Grid */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0 }}
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.25,
            },
          },
        }}
      >
        {HomeProjects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.6, y: 60, rotate: -8 }}
            whileInView={{ opacity: 1, scale: 1, y: 0, rotate: 0 }}
            viewport={{ once: false, amount: 0.1 }}
            transition={{ duration: 0.6, delay: index * 0.25, ease: "backOut" }}
          >
            <ProjectCard project={project} />
          </motion.div>
        ))}
      </motion.div>
      {/* End of Projects Grid */}
      {/* View All Projects Button */}
      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.8 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: false, amount: 0.7 }}
        transition={{ duration: 0.7, delay: 1, ease: "backOut" }}
      >
        <Link to="/projects" className="btn block mx-auto w-fit my-6">
          View All Projects{" "}
          <i className="fa-solid fa-square-arrow-up-right"></i>
        </Link>
      </motion.div>
      {/* End of View All Projects Button */}
    </motion.section>
  );
}
