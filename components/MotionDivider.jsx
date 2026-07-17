import { motion } from "framer-motion";

const MotionDivider = ({ words, reverse = false }) => {
  const content = Array.from({ length: 6 }, () => words).flat();

  return (
    <div className="relative overflow-hidden border-y border-white/[0.07] bg-white/[0.025] py-3">
      <motion.div
        className="flex w-max items-center gap-5 whitespace-nowrap"
        animate={{ x: reverse ? ["-50%", "0%"] : ["0%", "-50%"] }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      >
        {content.map((word, index) => (
          <span key={`${word}-${index}`} className="flex items-center gap-5 text-[11px] font-black uppercase tracking-[0.3em] text-white/35">
            {word}
            <span className={index % 3 === 0 ? "text-[#ff8f70]" : index % 2 === 0 ? "text-[#ffd166]" : "text-[#72f2c1]"}>◆</span>
          </span>
        ))}
      </motion.div>
    </div>
  );
};

export default MotionDivider;
