"use client";

import { useRef } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";

const SectionFlow = ({ children, index, direction = 1, accent = "spark" }) => {
  const ref = useRef(null);
  const reducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 96%", "start 24%"],
  });
  const progress = useSpring(scrollYProgress, {
    stiffness: 105,
    damping: 28,
    mass: 0.55,
  });
  const opacity = useTransform(progress, [0, 0.24], [reducedMotion ? 1 : 0.32, 1]);
  const y = useTransform(progress, [0, 0.72], [reducedMotion ? 0 : 62, 0]);
  const x = useTransform(progress, [0, 0.72], [reducedMotion ? 0 : direction * 18, 0]);
  const scale = useTransform(progress, [0, 0.72], [reducedMotion ? 1 : 0.988, 1]);
  const railScale = useTransform(progress, [0.08, 0.8], [0, 1]);
  const indexY = useTransform(progress, [0, 1], [reducedMotion ? 0 : 36, -20]);
  const indexOpacity = useTransform(progress, [0.05, 0.45, 1], [0, 0.16, 0.05]);

  return (
    <div ref={ref} className="section-flow relative overflow-hidden">
      <motion.div
        className={`absolute inset-x-0 top-0 z-10 h-px origin-left ${accent === "ice" ? "bg-ice" : "bg-spark"}`}
        style={{ scaleX: railScale }}
      />
      <motion.span
        className="pointer-events-none absolute right-[-0.04em] top-10 hidden select-none text-[18rem] font-black leading-none text-white lg:block"
        style={{ y: indexY, opacity: indexOpacity }}
        aria-hidden="true"
      >
        {index}
      </motion.span>
      <motion.div className="relative z-[1]" style={{ opacity, y, x, scale }}>
        {children}
      </motion.div>
    </div>
  );
};

export default SectionFlow;
