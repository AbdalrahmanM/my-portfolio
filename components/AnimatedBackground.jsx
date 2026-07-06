import { motion } from "framer-motion";

const AnimatedBackground = () => {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-[#071310]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(36,180,140,0.22),transparent_30%),radial-gradient(circle_at_80%_0%,rgba(234,179,8,0.12),transparent_28%),linear-gradient(135deg,#071310_0%,#0d1f1b_48%,#08110f_100%)]" />
      <motion.div
        className="absolute left-[-12rem] top-[-10rem] h-[34rem] w-[34rem] rounded-full bg-[#2dd4a3]/20 blur-3xl"
        animate={{ x: [0, 90, 20, 0], y: [0, 60, 120, 0], scale: [1, 1.15, 0.95, 1] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-[-14rem] right-[-10rem] h-[36rem] w-[36rem] rounded-full bg-[#facc15]/10 blur-3xl"
        animate={{ x: [0, -80, -120, 0], y: [0, -60, -20, 0], scale: [1, 0.92, 1.12, 1] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
      />
      <div className="absolute inset-0 opacity-[0.08] [background-image:linear-gradient(rgba(255,255,255,.7)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.7)_1px,transparent_1px)] [background-size:72px_72px]" />
      <motion.div
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#5ee7bd] to-transparent"
        animate={{ opacity: [0.2, 0.85, 0.2], x: ["-30%", "30%", "-30%"] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
};

export default AnimatedBackground;
