import { motion } from "motion/react";
export default function Loading() {
  return (
     <div className="flex items-center justify-center h-screen bg-gradient-to-tr from-[#0f0c29] via-[#302b63] to-[#24243e] overflow-hidden">
      <motion.div
        initial={{ opacity: 0, scale: 0.5, rotate: -45 }}
        animate={{ opacity: 1, scale: 1, rotate: 360 }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
        className="relative w-32 h-32"
      >
        {/* المدار الخارجي */}
        <div className="absolute inset-0 rounded-full border-t-4 border-b-4 border-violet-500 animate-spin"></div>

        {/* كوكب داخلي */}
        <motion.div
          className="absolute top-1/2 left-1/2 w-6 h-6 bg-gradient-to-r from-pink-500 to-purple-700 rounded-full shadow-lg shadow-purple-500/50"
          animate={{
            x: [0, 24, -24, 0],
            y: [0, -24, 24, 0],
            scale: [1, 1.2, 1, 1.2, 1],
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* خلفية متوهجة */}
        <div className="absolute top-1/2 left-1/2 w-20 h-20 -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-800 blur-2xl opacity-40"></div>
      </motion.div>
    </div>
  );
}
