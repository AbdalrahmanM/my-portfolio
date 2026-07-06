import { motion, useScroll, useSpring } from "framer-motion";

const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 28,
    restDelta: 0.001,
  });

  return (
    <motion.div
      className="fixed left-0 right-0 top-0 z-[300] h-1 origin-left bg-gradient-to-r from-[#5ee7bd] via-white to-[#5ee7bd] shadow-[0_0_22px_rgba(94,231,189,0.75)]"
      style={{ scaleX }}
    />
  );
};

export default ScrollProgress;
