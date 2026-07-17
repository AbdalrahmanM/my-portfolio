import { motion } from "framer-motion";

const accents = {
  mint: { color: "#72f2c1", soft: "rgba(114,242,193,0.16)" },
  sky: { color: "#7dd3fc", soft: "rgba(125,211,252,0.16)" },
  amber: { color: "#ffd166", soft: "rgba(255,209,102,0.16)" },
  coral: { color: "#ff8f70", soft: "rgba(255,143,112,0.16)" },
};

const SectionSignal = ({ index, label, accent = "mint", className = "" }) => {
  const theme = accents[accent] || accents.mint;

  return (
    <motion.div
      className={`mb-5 flex items-center gap-3 ${className}`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.8 }}
    >
      <motion.span
        className="flex h-9 min-w-9 items-center justify-center rounded-full border text-[11px] font-black"
        style={{ color: theme.color, borderColor: theme.soft, backgroundColor: theme.soft }}
        variants={{ hidden: { scale: 0, rotate: -90 }, visible: { scale: 1, rotate: 0 } }}
        transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
      >
        {index}
      </motion.span>
      <motion.div
        className="h-px w-12 origin-left sm:w-20"
        style={{ backgroundColor: theme.color }}
        variants={{ hidden: { scaleX: 0 }, visible: { scaleX: 1 } }}
        transition={{ duration: 0.8, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
      />
      <motion.p
        className="text-xs font-bold uppercase tracking-[0.28em] text-white/55"
        variants={{ hidden: { opacity: 0, x: -12 }, visible: { opacity: 1, x: 0 } }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        {label}
      </motion.p>
    </motion.div>
  );
};

export default SectionSignal;
