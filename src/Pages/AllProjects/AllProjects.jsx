import { useEffect } from "react";
import ProjectCard from "../../Components/ProjectCard/ProjectCard";
import StarBg from "../../Components/StarBg/StarBg";
import { allProjects } from "../../Data/Data";
import { Helmet } from "react-helmet";

export default function AllProjects() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Helmet>
        <title> Portfolio | All Projects</title>
      </Helmet>
      <section
        id="all-projects"
        className="py-8 bg-background text-foreground min-h-screen"
      >
        {/* stars animation */}
        <StarBg />
        <h1 className="text-4xl font-bold text-center mb-8">
          All <span className="text-violet-600">Projects</span>
        </h1>
        {/* projects grid */}
        <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allProjects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </section>
    </>
  );
}
