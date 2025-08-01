
import { aboutMeLeft, aboutMeRight } from "../../Data/Data";
import { motion } from "motion/react";
import { useRef } from "react";
import { useInView } from "framer-motion";

export default function About() {
  const aboutRef = useRef(null);
  const isInView = useInView(aboutRef, { margin: "-70px 0px", amount: 0.1 });

  return (
    <>
      <motion.section
        ref={aboutRef}
        id="about"
        className="py-12 bg-gradient-to-br from-violet-900 via-violet-800 to-violet-950 shadow-xl rounded-3xl"
        initial={{ opacity: 0, y: 60 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        {/* header */}
        <motion.h1
          className="text-5xl font-extrabold text-center mb-10 tracking-tight drop-shadow-lg text-white"
          initial={{ scale: 0.7, opacity: 0 }}
          animate={
            isInView ? { scale: 1, opacity: 1 } : { scale: 0.7, opacity: 0 }
          }
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          About{" "}
          <span className="text-violet-200 bg-violet-900 px-2 rounded-xl">
            Me
          </span>
        </motion.h1>
        {/* End of header */}
        {/* grid */}
        <div className="grid max-w-[80rem] mx-auto p-6 grid-cols-1 md:grid-cols-2 gap-8">
          {/* left side */}
          <motion.div
            className="left flex flex-col justify-center items-center space-y-8 bg-violet-800/80 rounded-2xl p-8 shadow-lg"
            initial={{ x: -120, opacity: 0 }}
            animate={isInView ? { x: 0, opacity: 1 } : { x: -120, opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <h2 className="text-3xl font-bold mt-2 mb-4 text-violet-200">
              Who <span className="text-violet-400">Am I</span>
            </h2>
            {aboutMeLeft.map((item, index) => (
              <motion.p
                key={index}
                className="text-violet-100 hover:scale-105 duration-300 text-lg leading-relaxed"
                initial={{ opacity: 0, y: 30 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
                }
                transition={{ duration: 0.5, delay: 0.4 + index * 0.18 }}
              >
                {item.title}
              </motion.p>
            ))}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={
                isInView ? { scale: 1, opacity: 1 } : { scale: 0.8, opacity: 0 }
              }
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              <a
                href="#contact"
                className="btn bg-violet-700 hover:bg-violet-800 text-white font-bold py-3 px-8 rounded-full shadow-lg transition-all duration-300"
              >
                Get in Touch
              </a>
            </motion.div>
          </motion.div>
          {/* End of left side */}
          {/* right side */}
          <motion.div
            className="right space-y-10 bg-violet-800/80 rounded-2xl p-8 shadow-lg"
            initial={{ x: 120, opacity: 0 }}
            animate={isInView ? { x: 0, opacity: 1 } : { x: 120, opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <h2 className="text-3xl text-center font-bold mb-6 text-violet-200">
              What <span className="text-violet-400">I Do</span>
            </h2>
            <ul className="space-y-7">
              {aboutMeRight.map((item, index) => (
                <motion.li
                  key={index}
                  className="flex items-center gap-5 duration-300 hover:scale-105 p-4 bg-violet-900/60 rounded-xl shadow-md"
                  initial={{ opacity: 0, scale: 0.9, y: 40 }}
                  animate={
                    isInView
                      ? { opacity: 1, scale: 1, y: 0 }
                      : { opacity: 0, scale: 0.9, y: 40 }
                  }
                  transition={{ duration: 0.5, delay: 0.7 + index * 0.2 }}
                >
                  <motion.div
                    className="icon"
                    initial={{ rotate: -15, scale: 0.8 }}
                    animate={
                      isInView
                        ? { rotate: 0, scale: 1 }
                        : { rotate: -15, scale: 0.8 }
                    }
                    transition={{ duration: 0.4, delay: 0.8 + index * 0.2 }}
                  >
                    <div className="size-14 bg-violet-700/30 rounded-full flex justify-center items-center shadow-lg">
                      <i
                        className={`${item.icon} text-2xl text-violet-200`}
                      ></i>
                    </div>
                  </motion.div>
                  <div className="info">
                    <h3 className="font-semibold text-lg text-violet-100">
                      {item.title}
                    </h3>
                    <p className="text-violet-300">{item.des}</p>
                  </div>
                </motion.li>
              ))}
            </ul>
          </motion.div>
          {/* End of right side */}
        </div>
        {/* End of grid  */}
      </motion.section>
    </>
  );
}
