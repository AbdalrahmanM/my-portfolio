import React from "react";
import { motion } from "framer-motion";

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.07,
      delayChildren: 0.08,
    },
  },
};

const word = {
  hidden: { y: "115%", rotate: 4, opacity: 0 },
  visible: {
    y: "0%",
    rotate: 0,
    opacity: 1,
    transition: { duration: 0.78, ease: [0.16, 1, 0.3, 1] },
  },
};

const AnimatedHeading = ({ children, className = "" }) => {
  const words = children.trim().split(/\s+/);

  return (
    <motion.h2
      className={className}
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.7 }}
      aria-label={children}
    >
      {words.map((item, index) => (
        <span key={`${item}-${index}`} className="mr-[0.24em] inline-block overflow-hidden align-bottom">
          <motion.span className="inline-block" variants={word}>
            {item}
          </motion.span>
        </span>
      ))}
    </motion.h2>
  );
};

export default AnimatedHeading;
