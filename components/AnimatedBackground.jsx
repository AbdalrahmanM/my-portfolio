import { motion } from "framer-motion";

const AnimatedBackground = () => {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-[#060d0c]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_16%_14%,rgba(114,242,193,0.18),transparent_27%),radial-gradient(circle_at_86%_16%,rgba(255,143,112,0.12),transparent_24%),radial-gradient(circle_at_56%_92%,rgba(125,211,252,0.10),transparent_30%),linear-gradient(135deg,#060d0c_0%,#0b1714_48%,#080d0c_100%)]" />
      <motion.div
        className="absolute -left-[25%] top-[8%] h-40 w-[90%] -rotate-12 bg-gradient-to-r from-transparent via-[#72f2c1]/10 to-transparent blur-2xl"
        animate={{ x: ["-8%", "35%", "-8%"], opacity: [0.35, 0.8, 0.35] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -right-[30%] bottom-[12%] h-48 w-[95%] rotate-12 bg-gradient-to-r from-transparent via-[#ff8f70]/10 to-[#7dd3fc]/10 blur-3xl"
        animate={{ x: ["12%", "-28%", "12%"], opacity: [0.3, 0.72, 0.3] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />
      <div className="signal-grid absolute inset-0 opacity-60" />
      <motion.div
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#72f2c1] to-transparent"
        animate={{ opacity: [0.2, 0.85, 0.2], x: ["-30%", "30%", "-30%"] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
};

export default AnimatedBackground;
