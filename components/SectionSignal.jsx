import { motion } from "framer-motion";

const accents = {
  mint: { color: "#60a5fa", soft: "rgba(37,99,235,0.18)" },
  sky: { color: "#60a5fa", soft: "rgba(37,99,235,0.18)" },
  amber: { color: "#60a5fa", soft: "rgba(37,99,235,0.18)" },
  coral: { color: "#60a5fa", soft: "rgba(37,99,235,0.18)" },
};

const SectionSignal = ({ index, label, accent = "mint", className = "" }) => {
  const theme = accents[accent] || accents.mint;

  return (
    <motion.div
      className={`mb-5 flex items-center gap-3 ${className}`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.8 }}
    >
      <motion.span
        className="flex h-9 min-w-9 items-center justify-center rounded-md border text-[11px] font-black"
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
