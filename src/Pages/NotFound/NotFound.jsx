import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { Helmet } from "react-helmet";

export default function NotFound() {
  return (
    <>
      <Helmet>
        <title> Portfolio | Not Found</title>
      </Helmet>
      <motion.div
        initial={{ opacity: 0, scale: 0.8, y: -100 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 120, damping: 10 }}
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "80vh",
          background: "linear-gradient(135deg, #8e2de2 0%, #4a00e0 100%)", // purple gradient
          color: "#fff",
          borderRadius: "24px",
          boxShadow: "0 8px 32px rgba(0,0,0,0.2)",
        }}
      >
        <motion.h1
          initial={{ scale: 0 }}
          animate={{ scale: 1.2 }}
          transition={{ type: "spring", stiffness: 200, delay: 0.3 }}
          style={{
            fontSize: "4rem",
            fontWeight: "bold",
            marginBottom: "1rem",
            textShadow: "0 2px 8px rgba(0,0,0,0.3)",
          }}
        >
          404 - Not Found
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          style={{
            fontSize: "1.5rem",
            marginBottom: "2rem",
          }}
        >
          The page you are looking for does not exist.
        </motion.p>
        <motion.div
          whileHover={{ scale: 1.1, rotate: -2 }}
          whileTap={{ scale: 0.95, rotate: 2 }}
        >
          <Link
            to="/"
            style={{
              padding: "0.75rem 2rem",
              background: "rgba(255,255,255,0.15)",
              color: "#fff",
              borderRadius: "12px",
              fontWeight: "bold",
              fontSize: "1.2rem",
              textDecoration: "none",
              boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
              transition: "background 0.3s",
            }}
          >
            Go back to Home
          </Link>
        </motion.div>
      </motion.div>
    </>
  );
}
