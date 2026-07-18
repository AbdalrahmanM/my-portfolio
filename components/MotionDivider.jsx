import { motion, useReducedMotion } from "framer-motion";

const MotionDivider = ({ words, reverse = false }) => {
  const reducedMotion = useReducedMotion();
  const content = Array.from({ length: 6 }, () => words).flat();

  return (
    <div className="relative overflow-hidden border-y border-white/[0.07] bg-[#111114] py-3">
      <motion.div
        className="flex w-max items-center gap-5 whitespace-nowrap"
        animate={reducedMotion ? undefined : { x: reverse ? ["-50%", "0%"] : ["0%", "-50%"] }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      >
        {content.map((word, index) => (
          <span key={`${word}-${index}`} className="flex items-center gap-5 text-[11px] font-black uppercase tracking-[0.3em] text-zinc-500">
            {word}
            <span className={index % 2 === 0 ? "h-1.5 w-1.5 rotate-45 bg-spark" : "h-1.5 w-1.5 rotate-45 bg-ice"} aria-hidden="true" />
          </span>
        ))}
      </motion.div>
    </div>
  );
};

export default MotionDivider;
