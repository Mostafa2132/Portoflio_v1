import Marquee from "react-fast-marquee";
import { skills } from "../../Data/Data";

export default function Skills() {
  return (
    <>
      <section id="skills" className="py-8 ">
        <h1 className="text-4xl font-bold text-center mb-8 animate-gradient-text bg-gradient-to-r from-violet-600 via-pink-500 to-blue-500 bg-clip-text text-transparent">
          My <span className="text-violet-600">Skills</span>
        </h1>
        <p className="text-center text-gray-600 mb-8 animate-fade-in">
          Here are some of the technologies and tools I work with
        </p>
        <div className="max-w-[70rem] mx-auto overflow-hidden">
          <Marquee
            className="flex h-auto overflow-hidden"
            gradient={true}
            gradientColor={[238, 242, 255]}
            speed={80}
          >
            {skills.map((skill, index) => (
              <div
                key={index}
                className="p-4 group overflow-hidden transition-transform duration-500 hover:scale-125"
              >
                <img
                  src={skill.img}
                  alt={skill.title}
                  className="size-12 block drop-shadow-xl animate-bounce group-hover:animate-spin"
                  loading="lazy"
                />
              </div>
            ))}
          </Marquee>
        </div>
      </section>
      <style>
        {`
          @keyframes gradient-text {
            0% { background-position: 0% 50%; }
            100% { background-position: 100% 50%; }
          }
          .animate-gradient-text {
            background-size: 200% 200%;
            animation: gradient-text 3s linear infinite alternate;
          }
          @keyframes fade-in {
            from { opacity: 0; transform: translateY(20px);}
            to { opacity: 1; transform: translateY(0);}
          }
          .animate-fade-in {
            animation: fade-in 1.2s cubic-bezier(.4,0,.2,1) both;
          }
        `}
      </style>
    </>
  );
}
