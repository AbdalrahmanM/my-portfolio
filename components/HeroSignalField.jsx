"use client";

import { useEffect } from "react";
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from "framer-motion";

const streams = [
  { top: "18%", delay: 0, duration: 7.5, color: "bg-spark" },
  { top: "43%", delay: 1.2, duration: 9, color: "bg-ice" },
  { top: "69%", delay: 0.6, duration: 8.2, color: "bg-spark" },
  { top: "84%", delay: 2.1, duration: 10, color: "bg-ice" },
];

const modules = [
  { code: "01", label: "Interface systems", value: "REACT / NEXT" },
  { code: "02", label: "Applied intelligence", value: "NLP / TRANSFORMERS" },
  { code: "03", label: "Motion language", value: "FRAMER / UX" },
];

const HeroSignalField = () => {
  const reducedMotion = useReducedMotion();
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const smoothX = useSpring(pointerX, { stiffness: 70, damping: 22 });
  const smoothY = useSpring(pointerY, { stiffness: 70, damping: 22 });
  const nearX = useTransform(smoothX, [-1, 1], [-18, 18]);
  const nearY = useTransform(smoothY, [-1, 1], [-12, 12]);
  const farX = useTransform(smoothX, [-1, 1], [12, -12]);
  const farY = useTransform(smoothY, [-1, 1], [8, -8]);
  const cursorLeft = useTransform(smoothX, [-1, 1], ["12%", "88%"]);
  const cursorTop = useTransform(smoothY, [-1, 1], ["12%", "88%"]);

  useEffect(() => {
    if (reducedMotion) return undefined;

    const updatePointer = (event) => {
      pointerX.set((event.clientX / window.innerWidth) * 2 - 1);
      pointerY.set((event.clientY / window.innerHeight) * 2 - 1);
    };

    const resetPointer = () => {
      pointerX.set(0);
      pointerY.set(0);
    };

    window.addEventListener("pointermove", updatePointer, { passive: true });
    document.documentElement.addEventListener("mouseleave", resetPointer);
    return () => {
      window.removeEventListener("pointermove", updatePointer);
      document.documentElement.removeEventListener("mouseleave", resetPointer);
    };
  }, [pointerX, pointerY, reducedMotion]);

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden bg-canvas" aria-hidden="true">
      <div className="hero-field absolute inset-0" />
      <div className="signal-grid absolute inset-0 opacity-55" />

      <motion.div
        className="absolute -right-[10%] top-[7%] hidden font-black uppercase leading-[0.72] tracking-[-0.08em] text-white/[0.035] sm:block sm:text-[24rem] xl:text-[32rem]"
        style={{ x: farX, y: farY }}
      >
        AM
      </motion.div>

      <motion.div
        className="absolute right-[4%] top-[18%] h-[48%] w-[54%] border border-white/[0.08] sm:right-[7%] sm:top-[14%] sm:h-[60%] sm:w-[48%] lg:w-[42%]"
        style={{ x: nearX, y: nearY }}
        initial={reducedMotion ? false : { opacity: 0, clipPath: "inset(0 100% 100% 0)" }}
        animate={{ opacity: 1, clipPath: "inset(0 0% 0% 0)" }}
        transition={{ duration: 1.2, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="absolute -left-px -top-px h-4 w-4 border-l-2 border-t-2 border-spark" />
        <div className="absolute -bottom-px -right-px h-4 w-4 border-b-2 border-r-2 border-ice" />
        <div className="absolute inset-x-5 top-5 flex items-center justify-between text-[9px] font-black uppercase tracking-[0.24em] text-white/35">
          <span>Creative system</span>
          <span className="text-spark">Live</span>
        </div>
        <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
          <motion.span
            className="text-[9rem] font-black leading-none text-transparent sm:text-[13rem] lg:text-[17rem]"
            style={{ WebkitTextStroke: "1px rgba(244,247,251,.18)" }}
            animate={reducedMotion ? undefined : { opacity: [0.4, 0.9, 0.4] }}
            transition={{ duration: 4.6, repeat: Infinity, ease: "easeInOut" }}
          >
            A/M
          </motion.span>
        </div>
        <motion.div
          className="absolute inset-x-0 h-px bg-gradient-to-r from-transparent via-spark to-transparent shadow-[0_0_22px_rgba(183,243,74,.55)]"
          animate={reducedMotion ? { top: "56%" } : { top: ["18%", "82%", "18%"] }}
          transition={{ duration: 5.4, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>

      {streams.map((stream, index) => (
        <div key={stream.top} className="absolute inset-x-0 h-px bg-white/[0.05]" style={{ top: stream.top }}>
          <motion.span
            className={`absolute -top-1 h-2 w-14 ${stream.color} shadow-[0_0_18px_currentColor]`}
            initial={{ left: "-12%" }}
            animate={reducedMotion ? { left: `${20 + index * 18}%` } : { left: ["-12%", "112%"] }}
            transition={{ duration: stream.duration, delay: stream.delay, repeat: Infinity, ease: "linear" }}
          />
        </div>
      ))}

      <motion.div
        className="absolute right-[5%] top-[13%] hidden w-[min(33vw,390px)] gap-2 lg:grid"
        style={{ x: farX, y: farY }}
        initial="hidden"
        animate="visible"
        variants={{ visible: { transition: { staggerChildren: 0.1, delayChildren: 0.75 } } }}
      >
        {modules.map((module, index) => (
          <motion.div
            key={module.code}
            className="grid grid-cols-[42px_1fr_auto] items-center gap-3 border border-white/[0.09] bg-canvas/75 px-3 py-3 backdrop-blur-md"
            variants={{
              hidden: { opacity: 0, x: 34 },
              visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
            }}
          >
            <span className={index % 2 === 0 ? "text-xs font-black text-spark" : "text-xs font-black text-ice"}>{module.code}</span>
            <span className="text-[9px] font-bold uppercase tracking-[0.15em] text-white/45">{module.label}</span>
            <span className="text-[9px] font-black text-white/80">{module.value}</span>
          </motion.div>
        ))}
      </motion.div>

      {!reducedMotion && (
        <motion.div
          className="absolute hidden h-20 w-20 border border-ice/25 lg:block"
          style={{ left: cursorLeft, top: cursorTop, marginLeft: -40, marginTop: -40 }}
        >
          <span className="absolute left-1/2 top-1/2 h-px w-5 -translate-x-1/2 bg-ice/70" />
          <span className="absolute left-1/2 top-1/2 h-5 w-px -translate-y-1/2 bg-ice/70" />
        </motion.div>
      )}

      <div className="absolute inset-0 bg-[linear-gradient(90deg,#08090a_0%,rgba(8,9,10,.92)_38%,rgba(8,9,10,.22)_78%,rgba(8,9,10,.5)_100%)] sm:bg-[linear-gradient(90deg,#08090a_0%,rgba(8,9,10,.9)_36%,rgba(8,9,10,.15)_74%,rgba(8,9,10,.42)_100%)]" />
    </div>
  );
};

export default HeroSignalField;
