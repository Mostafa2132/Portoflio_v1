import { Link } from "react-router-dom";
import { contact, contactInfo } from "../../Data/Data";
import emailjs from "emailjs-com";
import { useRef } from "react";
import { toast } from "react-toastify";
import { motion } from "motion/react";

export default function ContactMe() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_gnzc3mh", // service ID
        "template_ecvx7l9", // template ID
        form.current,
        "1QY4hINu60vvyCZsz" // public key
      )
      .then(
        (result) => {
          console.log(result.text);
          toast.success("Message sent successfully! ✅");
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
          toast.error("Something went wrong ❌");
        }
      );
  };
  return (
    <>
      <motion.section
        id="contact"
        className="py-8"
        initial={{ opacity: 0, y: 80, scale: 0.8, rotate: -10 }}
        whileInView={{ opacity: 1, y: 0, scale: 1, rotate: 0 }}
        viewport={{ once: false, amount: 0 }}
        transition={{
          duration: 1,
          type: "spring",
          bounce: 0.5,
          delay: 0.1,
        }}
      >
        {/* header */}
        <motion.h1
          className="text-4xl font-bold text-center mb-8"
          initial={{ opacity: 0, y: -60, scale: 0.7, rotate: -8 }}
          animate={{ opacity: 1, y: 0, scale: 1, rotate: 0 }}
          transition={{
            duration: 0.8,
            type: "spring",
            bounce: 0.5,
            delay: 0.2,
          }}
        >
          Get In <span className="text-violet-600">Touch</span>
        </motion.h1>
        {/* End of header */}
        {/* description */}
        <motion.p
          className="text-center text-gray-600 mb-8"
          initial={{ opacity: 0, y: 40, scale: 0.8, rotate: 8 }}
          animate={{ opacity: 1, y: 0, scale: 1, rotate: 0 }}
          transition={{
            duration: 1,
            type: "spring",
            bounce: 0.4,
            delay: 0.5,
          }}
        >
          Have a project in mind or want to collaborate? Feel free to reach out.
          I&apos;m always open to discussing new opportunities.
        </motion.p>
        {/* End of description */}
        {/* grid */}
        <div className="grid max-w-[70rem] mx-auto grid-cols-1 md:grid-cols-2 gap-4">
          {/* Left Info Side */}
          <motion.div
            className="p-4 left"
            initial={{ opacity: 0, x: -80, scale: 0.8, rotate: -8 }}
            whileInView={{ opacity: 1, x: 0, scale: 1, rotate: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{
              duration: 0.4, // Faster animation
              type: "spring",
              bounce: 0.3,
              delay: 0.1,
            }}
          >
            <h1 className="text-2xl font-semibold mb-2 text-center">
              Contact Information
            </h1>

            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                className="mb-4 bg-violet-500/20 flex items-center gap-4 p-4 rounded-lg"
                whileHover={{
                  scale: 1.1,
                  boxShadow: "0 8px 32px #a78bfa99",
                  rotate: 2,
                  backgroundColor: "#a78bfa22",
                }}
                transition={{ type: "spring", stiffness: 700, duration: 0.2 }}
              >
                <motion.div
                  className="size-12 bg-violet-600 text-white flex items-center justify-center rounded-full"
                  initial={{ scale: 0.7, rotate: -20 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  viewport={{ once: false, amount: 0.3 }}
                  transition={{ duration: 0.2, delay: 0.1 }}
                >
                  <i className={`${info.icon} text-white`}></i>
                </motion.div>
                <div>
                  <h2 className="text-lg font-semibold mb-1">{info.title}</h2>
                  <p className="text-gray-600">{info.info}</p>
                </div>
              </motion.div>
            ))}

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {contact.map((info, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30, scale: 0.8 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: false, amount: 0.3 }}
                  transition={{ duration: 0.3, delay: 0.1 + index * 0.05 }}
                  whileHover={{
                    scale: 1.1,
                    backgroundColor: "#7c3aed44",
                    rotate: 3,
                    boxShadow: "0 8px 32px #7c3aed99",
                  }}
                >
                  <Link
                    to={info.link}
                    target="_blank"
                    className="mb-4 bg-violet-500/20 flex items-center flex-col gap-4 p-4 rounded-lg"
                  >
                    <motion.div
                      className="size-12 bg-violet-600 text-white flex items-center justify-center rounded-full"
                      initial={{ scale: 0.7, rotate: -15 }}
                      whileInView={{ scale: 1, rotate: 0 }}
                      viewport={{ once: false, amount: 0.3 }}
                      transition={{ duration: 0.2, delay: 0.1 }}
                    >
                      <i className={`${info.icon} text-white`}></i>
                    </motion.div>
                    <div>
                      <h2 className="text-lg font-semibold mb-1">
                        {info.title}
                      </h2>
                      <p className="text-gray-600">{info.info}</p>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
          {/* Right Form Side */}
          <motion.div
            className="p-4"
            initial={{ opacity: 0, x: 80, scale: 0.8, rotate: 8 }}
            whileInView={{ opacity: 1, x: 0, scale: 1, rotate: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{
              duration: 0.8,
              type: "spring",
              bounce: 0.4,
              delay: 0.3,
            }}
          >
            <motion.div
              className="mt-7 bg-white border border-gray-200 rounded-xl shadow-2xs dark:bg-violet-600/20 dark:border-neutral-700"
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              <div className="p-4 sm:p-7">
                <div className="text-center">
                  <h1 className="block text-2xl font-bold text-gray-800 dark:text-white">
                    Contact With <span className="text-violet-600">Me</span>
                  </h1>
                </div>
                <div className="mt-5">
                  <form ref={form} onSubmit={sendEmail}>
                    <div className="grid gap-y-4">
                      {/* Email */}
                      <motion.div
                        initial={{ opacity: 0, y: 30, scale: 0.9 }}
                        whileInView={{ opacity: 1, y: 0, scale: 1 }}
                        viewport={{ once: false, amount: 0.3 }}
                        transition={{ delay: 0.5 }}
                      >
                        <label
                          htmlFor="email"
                          className="block text-sm mb-2 dark:text-white"
                        >
                          Email address
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          className="py-2.5 sm:py-3 px-4 block w-full border border-violet-800 rounded-lg sm:text-sm focus:border-blue-500 focus:ring-blue-500"
                          required
                        />
                      </motion.div>

                      {/* Message */}
                      <motion.div
                        initial={{ opacity: 0, y: 30, scale: 0.9 }}
                        whileInView={{ opacity: 1, y: 0, scale: 1 }}
                        viewport={{ once: false, amount: 0.3 }}
                        transition={{ delay: 0.6 }}
                      >
                        <label
                          htmlFor="textarea"
                          className="block text-sm mb-2 dark:text-white"
                        >
                          Message
                        </label>
                        <textarea
                          id="textarea"
                          name="message"
                          rows="4"
                          className="py-2.5 sm:py-3 px-4 block w-full border border-violet-800 rounded-lg sm:text-sm focus:border-blue-500 focus:ring-blue-500"
                          required
                        ></textarea>
                      </motion.div>

                      {/* Hidden Time */}
                      <input
                        type="hidden"
                        name="time"
                        value={new Date().toLocaleString()}
                      />

                      {/* Thanks Message */}
                      <motion.p
                        className="text-sm text-gray-500 dark:text-gray-400"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: false, amount: 0.3 }}
                        transition={{ delay: 0.7 }}
                      >
                        Thanks for reaching out! I will get back to you as soon
                        as possible. ❤👋
                      </motion.p>

                      {/* Submit */}
                      <motion.button
                        type="submit"
                        className="btn flex items-center"
                        whileHover={{
                          scale: 1.18,
                          backgroundColor: "#7c3aed",
                          rotate: -6,
                          boxShadow: "0 8px 32px #7c3aed99",
                        }}
                        transition={{ type: "spring", stiffness: 500 }}
                      >
                        <span className="text-lg">Send Message</span>
                        <i className="fas ms-2 fa-paper-plane"></i>
                      </motion.button>
                    </div>
                  </form>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>
    </>
  );
}
