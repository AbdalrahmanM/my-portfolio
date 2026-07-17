import { motion } from "framer-motion";
import { HiOutlineArrowLeft } from "react-icons/hi2";

const SwipeHint = ({ label = "Swipe left for more", accent = "#72f2c1" }) => {
  return (
    <motion.div
      className="mt-6 flex items-center justify-between gap-4 md:hidden"
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.8 }}
      transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
    >
      <div
        className="inline-flex items-center gap-2 rounded-full border bg-white/[0.05] px-3 py-2 text-[10px] font-black uppercase tracking-[0.16em] text-white/65"
        style={{ borderColor: `${accent}35` }}
      >
        <motion.span
          className="flex h-6 w-6 items-center justify-center rounded-full text-[#060d0c]"
          style={{ backgroundColor: accent }}
          animate={{ x: [5, -4, 5] }}
          transition={{ duration: 1.35, repeat: Infinity, ease: "easeInOut" }}
        >
          <HiOutlineArrowLeft size={15} />
        </motion.span>
        {label}
      </div>

      <div className="flex items-center gap-1.5" aria-hidden="true">
        {[0, 1, 2].map((item) => (
          <motion.span
            key={item}
            className="h-1.5 rounded-full"
            style={{ backgroundColor: accent }}
            animate={{ width: item === 0 ? [18, 7, 18] : [7, 12, 7], opacity: [0.35, 1, 0.35] }}
            transition={{ duration: 1.6, repeat: Infinity, delay: item * 0.14, ease: "easeInOut" }}
          />
        ))}
      </div>
    </motion.div>
  );
};

export default SwipeHint;
