// import About from "../../Components/About/About";
import ContactMe from "../../Components/ContactMe/ContactMe";
import Hero from "../../Components/Hero/Hero";
import Projects from "../../Components/Projects/Projects";
import Skills from "../../Components/Skills/Skills";
import StarBg from "../../Components/StarBg/StarBg";
import About from "../../Components/About/About ";
import { useEffect } from "react";
import { Helmet } from "react-helmet";

export default function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Helmet>
        <title>Portfolio</title>
      </Helmet>
      <div
        id="home"
        className="min-h-screen z-10 overflow-hidden bg-background text-foreground"
      >
        {/* stars animation */}
        <StarBg />
        {/* Hero Section */}
        <Hero />
        {/* End Hero Section */}
        {/* About Section */}
        <About />
        {/* End About Section */}
        {/* Skills Section */}
        <Skills />
        {/* End Skills Section */}
        {/* Projects Section */}
        <Projects />
        {/* End Projects Section */}
        {/* Contact Section */}
        <ContactMe />
        {/* End Contact Section */}
      </div>
    </>
  );
}
