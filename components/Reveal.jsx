import { motion } from "framer-motion";

const variants = {
  hidden: {
    opacity: 0,
    y: 54,
    scale: 0.985,
    filter: "blur(10px)",
    clipPath: "inset(10% 0% 0% 0% round 8px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    clipPath: "inset(0% 0% 0% 0% round 0px)",
  },
};

const Reveal = ({ children, className = "", delay = 0, hover = false, amount = 0.22 }) => {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount }}
      variants={variants}
      transition={{ duration: 0.72, delay, ease: [0.16, 1, 0.3, 1] }}
      whileHover={hover ? { y: -4 } : undefined}
    >
      {children}
    </motion.div>
  );
};

export default Reveal;
