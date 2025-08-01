import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { motion } from "motion/react"
export default function Hero() {
  const textArray = [
    "Bringing Interfaces to Life",
    "React.js | Tailwind CSS | UI Magic",
    "Front-End Developer You Can Trust",
    "Turning Concepts Into Web Reality",
    "Pixel-Perfect Web Experiences",
  ];

  const typingRef = useRef(null);
  const typingTimeoutRef = useRef(null);
  const erasingTimeoutRef = useRef(null);

  useEffect(() => {
    let index = 0;
    let charIndex = 0;

    const typeText = () => {
      if (typingRef.current) {
        if (charIndex < textArray[index].length) {
          typingRef.current.textContent += textArray[index].charAt(charIndex);
          charIndex++;
          typingTimeoutRef.current = setTimeout(typeText, 100);
        } else {
          erasingTimeoutRef.current = setTimeout(eraseText, 1200);
        }
      }
    };

    const eraseText = () => {
      if (typingRef.current) {
        if (charIndex > 0) {
          typingRef.current.textContent = textArray[index].substring(
            0,
            charIndex - 1
          );
          charIndex--;
          erasingTimeoutRef.current = setTimeout(eraseText, 50);
        } else {
          index = (index + 1) % textArray.length;
          typingTimeoutRef.current = setTimeout(typeText, 500);
        }
      }
    };

    typingRef.current.textContent = "";
    typeText();

    return () => {
      clearTimeout(typingTimeoutRef.current);
      clearTimeout(erasingTimeoutRef.current);
    };
  }, []);

  return (
    <motion.div
      className="flex relative z-10 flex-col items-center justify-center h-screen px-4"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      {/* Hero Title */}
      <motion.h1
        className="text-3xl md:text-6xl font-bold text-center mb-6"
        initial={{ y: -120, opacity: 0, scale: 0.7, rotate: -10 }}
        animate={{
          y: 0,
          opacity: 1,
          scale: [1.2, 1],
          rotate: [10, 0],
          textShadow: "0px 0px 30px #a78bfa, 0px 0px 10px #fff"
        }}
        transition={{ type: "spring", stiffness: 180, delay: 0.1, duration: 1.2 }}
      >
        Hi, I&rsquo;m <motion.span
          className="text-violet-600"
          initial={{ scale: 0.7, rotate: -10 }}
          animate={{ scale: [1.4, 1], rotate: [15, 0] }}
          transition={{ duration: 0.7, delay: 0.5 }}
        >Mostafa</motion.span> Ebrahem
      </motion.h1>
      {/* Hero Subtitle */}
        <motion.div
          className="text-xl md:text-2xl font-medium text-gray-700 dark:text-gray-400 h-10"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
        >
          <motion.span
            ref={typingRef}
            className="border-r-2 border-violet-600 animate-pulse"
            animate={{
          color: ["#a78bfa", "#4b5563", "#a78bfa"], // #4b5563 for light mode text
          scale: [1, 1.08, 1],
          textShadow: [
            "0px 0px 10px #a78bfa",
            "0px 0px 20px #fff",
            "0px 0px 10px #a78bfa"
          ]
            }}
            transition={{
          repeat: Infinity,
          duration: 2,
          ease: "easeInOut"
            }}
          ></motion.span>
        </motion.div>
      {/* Hero Description */}
        <motion.p
          className="text-lg md:text-xl text-center mt-4 max-w-2xl text-gray-700 dark:text-gray-300"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.7 }}
        >
          I am a passionate Front-End Developer with a focus on creating modern,
          responsive, and user-friendly web applications using React.js.
        </motion.p>
      {/* Action Buttons */}
        <motion.div
          className="mt-8 flex gap-2"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: {
          opacity: 1,
          y: 0,
          transition: { staggerChildren: 0.2, delayChildren: 1.3 }
            }
          }}
        >
          <motion.div
            whileHover={{ scale: 1.08, rotate: -2, boxShadow: "0 0 20px #a78bfa" }}
            whileTap={{ scale: 0.95 }}
          >
            <a href="#projects" className="btn">
          View Projects
            </a>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.08, rotate: 2, boxShadow: "0 0 20px #a78bfa" }}
            whileTap={{ scale: 0.95 }}
          >
            <Link target="_blank" to="/Mostafa_Ebrahim_CV.pdf" className="btn ms-2">
          Download CV
            </Link>
          </motion.div>
        </motion.div>
        {/* scroll */}
      <motion.div
        onClick={() => {
          const scrollY = window.scrollY;
          const windowHeight = window.innerHeight;
          if (scrollY < windowHeight / 2) {
            window.scrollTo({ top: windowHeight, behavior: "smooth" });
          } else {
            window.scrollTo({ top: 0, behavior: "smooth" });
          }
        }}
        className="scroll_down mt-4 absolute bottom-25 animate-bounce cursor-pointer left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 0.7 }}
        whileHover={{ scale: 1.2, y: -10 }}
      >
        <motion.div
          className="flex flex-col items-center"
          animate={{ rotate: [0, 10, -10, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <small className="mb-2">scroll</small>
          <i className="fa-solid text-violet-600 fa-arrow-down"></i>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
