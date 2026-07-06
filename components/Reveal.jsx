import { motion } from "framer-motion";

const variants = {
  hidden: {
    opacity: 0,
    y: 76,
    scale: 0.96,
    filter: "blur(18px)",
    clipPath: "inset(14% 0% 0% 0% round 28px)",
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
      viewport={{ once: false, amount }}
      variants={variants}
      transition={{ duration: 0.95, delay, ease: [0.16, 1, 0.3, 1] }}
      whileHover={hover ? { y: -10, scale: 1.018 } : undefined}
    >
      {children}
    </motion.div>
  );
};

export default Reveal;
