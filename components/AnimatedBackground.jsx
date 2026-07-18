import { motion } from "framer-motion";

const AnimatedBackground = () => {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-canvas">
      <div className="absolute inset-0 bg-[linear-gradient(135deg,#08090a_0%,#111315_48%,#08090a_100%)]" />
      <motion.div
        className="absolute -left-[35%] top-[12%] h-32 w-[110%] -rotate-12 bg-gradient-to-r from-transparent via-spark/10 to-transparent blur-2xl"
        animate={{ x: ["-8%", "32%", "-8%"], opacity: [0.25, 0.7, 0.25] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
      <div className="signal-grid absolute inset-0 opacity-55" />
      <motion.div
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-ice to-spark"
        animate={{ opacity: [0.18, 0.8, 0.18], x: ["-30%", "30%", "-30%"] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
};

export default AnimatedBackground;
