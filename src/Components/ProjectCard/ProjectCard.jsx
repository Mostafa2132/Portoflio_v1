import { Link } from "react-router-dom";
import { motion } from "motion/react";

export default function ProjectCard({
  project: { title, img, des, path, github, tech: tech },
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 80, scale: 0.8, rotate: -10 }}
      whileInView={{ opacity: 1, y: 0, scale: 1, rotate: 0 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{
        type: "spring",
        stiffness: 120,
        damping: 15,
        duration: 0.8,
      }}
      className="dark:bg-gradient-to-tr dark:from-violet-700 dark:to-indigo-900 bg-white group hover:shadow-2xl rounded-xl shadow-lg overflow-hidden border border-violet-300 dark:border-violet-800"
    >
      <div className="relative">
        <img
          src={img}
          alt={title}
          className="w-full h-72 p-2 group-hover:scale-105 duration-300 rounded-2xl object-cover"
        />
        <motion.div
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"
        >
          <span className="text-white text-lg font-bold">{title}</span>
        </motion.div>
      </div>
      <div className="p-5">
        <h2 className="text-2xl font-bold mb-3 text-violet-700 dark:text-white">
          {title}
        </h2>
        <div className="flex gap-2 flex-wrap mb-3">
          {tech.map((t, idx) => (
            <span
              key={idx}
              className="text-xs font-medium bg-gradient-to-r from-violet-500 to-indigo-500 text-white rounded-full px-3 py-1 shadow hover:scale-110 transition-transform duration-200"
            >
              {t}
            </span>
          ))}
        </div>
        <p className="text-gray-700 dark:text-gray-300 mb-5">{des}</p>
        <div className="flex justify-between items-center">
          <Link
            target="_blank"
            to={path}
            className="flex items-center gap-2 hover:scale-105 transition-transform duration-200 bg-gradient-to-r from-violet-600 to-indigo-600 text-white rounded-full py-2 px-5 font-semibold shadow"
          >
            View Project <i className="fa-solid fa-square-arrow-up-right"></i>
          </Link>
          <Link
            target="_blank"
            to={github}
            className="flex items-center gap-2 hover:scale-105 transition-transform duration-200 bg-black text-white rounded-full py-2 px-5 font-semibold shadow"
          >
            GitHub <i className="fa-brands fa-github"></i>
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
