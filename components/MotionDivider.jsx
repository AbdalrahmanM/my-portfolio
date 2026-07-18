import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useSpring, useTransform } from "framer-motion";

const MotionDivider = ({ words, reverse = false, from = "00", to = "01" }) => {
  const ref = useRef(null);
  const reducedMotion = useReducedMotion();
  const content = Array.from({ length: 6 }, () => words).flat();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const progress = useSpring(scrollYProgress, { stiffness: 90, damping: 26 });
  const lineScale = useTransform(progress, [0.12, 0.52], [0, 1]);
  const portalX = useTransform(progress, [0, 1], [reverse ? "110%" : "-110%", reverse ? "-110%" : "110%"]);
  const labelY = useTransform(progress, [0.2, 0.5, 0.8], [14, 0, -14]);

  return (
    <div ref={ref} className="relative h-[86px] overflow-hidden border-y border-white/[0.07] bg-panel/90 md:h-[104px]">
      <div className="signal-grid absolute inset-0 opacity-40" />
      <motion.div className="absolute inset-y-0 w-[26%] skew-x-[-18deg] bg-gradient-to-r from-transparent via-spark/[0.08] to-transparent" style={{ x: portalX }} />
      <div className="relative z-10 mx-auto grid h-full max-w-[1240px] grid-cols-[52px_1fr_52px] items-center px-4 sm:grid-cols-[80px_1fr_80px] sm:px-6 lg:px-8">
        <motion.span className="text-xs font-black text-zinc-600 sm:text-sm" style={{ y: labelY }}>{from}</motion.span>
        <div className="min-w-0 overflow-hidden border-x border-white/[0.07] py-3">
          <motion.div
            className="flex w-max items-center gap-5 whitespace-nowrap"
            animate={reducedMotion ? undefined : { x: reverse ? ["-50%", "0%"] : ["0%", "-50%"] }}
            transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
          >
            {content.map((word, index) => (
              <span key={`${word}-${index}`} className="flex items-center gap-5 text-[10px] font-black uppercase tracking-[0.28em] text-zinc-500 sm:text-[11px]">
                {word}
                <span className={index % 2 === 0 ? "h-1.5 w-1.5 rotate-45 bg-spark" : "h-1.5 w-1.5 rotate-45 bg-ice"} aria-hidden="true" />
              </span>
            ))}
          </motion.div>
          <motion.div className="mx-auto mt-3 h-px w-[72%] origin-center bg-gradient-to-r from-transparent via-ice to-transparent" style={{ scaleX: lineScale }} />
        </div>
        <motion.span className="text-right text-xs font-black text-spark sm:text-sm" style={{ y: labelY }}>{to}</motion.span>
      </div>
    </div>
  );
};

export default MotionDivider;
