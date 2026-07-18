"use client";
import React, { useRef } from "react";
import Image from "next/image";
import {
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import portrait from "../public/assets/abdo1.jpg";

const tiles = [
  { left: "0%", top: "0%", x: -86, y: -72, rotate: -9, radius: "8px 0px 0px 0px" },
  { left: "-100%", top: "0%", x: 86, y: -58, rotate: 7, radius: "0px 8px 0px 0px" },
  { left: "0%", top: "-100%", x: -72, y: 78, rotate: 6, radius: "0px 0px 0px 8px" },
  { left: "-100%", top: "-100%", x: 82, y: 72, rotate: -8, radius: "0px 0px 8px 0px" },
];

const MosaicTile = ({ progress, tile, index, reducedMotion }) => {
  const x = useTransform(progress, [0, 0.82], [reducedMotion ? 0 : tile.x, 0]);
  const y = useTransform(progress, [0, 0.82], [reducedMotion ? 0 : tile.y, 0]);
  const rotate = useTransform(progress, [0, 0.82], [reducedMotion ? 0 : tile.rotate, 0]);
  const scale = useTransform(progress, [0, 0.82], [reducedMotion ? 1 : 0.88, 1]);
  const opacity = useTransform(progress, [0, 0.26], [reducedMotion ? 1 : 0.18, 1]);
  const borderRadius = useTransform(progress, [0, 0.82], ["8px 8px 8px 8px", tile.radius]);
  const borderColor = useTransform(progress, [0, 0.82], ["rgba(255,255,255,0.12)", "rgba(255,255,255,0)"]);
  const borderWidth = useTransform(progress, [0, 0.82], [1, 0]);

  return (
    <motion.div
      className="relative overflow-hidden bg-white/5 shadow-[0_22px_55px_rgba(0,0,0,0.35)]"
      style={{ x, y, rotate, scale, opacity, borderRadius, borderColor, borderStyle: "solid", borderWidth }}
    >
      <div
        className="absolute h-[200%] w-[200%]"
        style={{ left: tile.left, top: tile.top }}
      >
        <Image
          src={portrait}
          alt={index === 0 ? "Abdulrahman Mudher portrait" : ""}
          fill
          sizes="(max-width: 1024px) 50vw, 22vw"
          className="object-cover object-center"
          priority={index === 0}
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-[#071310]/15" />
    </motion.div>
  );
};

const MosaicPortrait = () => {
  const containerRef = useRef(null);
  const reducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 92%", "center 48%"],
  });
  const progress = useSpring(scrollYProgress, {
    stiffness: 110,
    damping: 24,
    mass: 0.55,
  });
  const gap = useTransform(progress, [0, 0.82], [reducedMotion ? 0 : 24, 0]);
  const frameRotate = useTransform(progress, [0, 0.82], [reducedMotion ? 0 : 3, 0]);
  const labelOpacity = useTransform(progress, [0.72, 0.96], [0, 1]);
  const labelY = useTransform(progress, [0.72, 0.96], [18, 0]);
  const lineScale = useTransform(progress, [0.6, 0.95], [0, 1]);

  return (
    <motion.div ref={containerRef} className="relative mx-auto w-full max-w-[460px] py-8 md:py-12">
      <motion.div
        className="absolute inset-[6%] rounded-lg border border-ice/25"
        style={{ rotate: frameRotate }}
      />
      <motion.div
        className="relative z-10 grid aspect-square grid-cols-2 grid-rows-2"
        style={{ gap }}
      >
        {tiles.map((tile, index) => (
          <MosaicTile
            key={`${tile.left}-${tile.top}`}
            progress={progress}
            tile={tile}
            index={index}
            reducedMotion={reducedMotion}
          />
        ))}
      </motion.div>

      <motion.div
        className="absolute bottom-0 left-[7%] z-20 w-[86%] rounded-lg border border-white/10 bg-canvas/90 p-4 shadow-[0_20px_65px_rgba(0,0,0,0.45)] backdrop-blur-xl"
        style={{ opacity: labelOpacity, y: labelY }}
      >
        <div className="flex items-center justify-between gap-4">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-ice">Master&apos;s research</p>
            <p className="mt-1 text-sm font-semibold text-white">AI, emotion and crisis urgency</p>
          </div>
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-spark text-xs font-black text-canvas">AI</span>
        </div>
        <motion.div className="mt-3 h-px origin-left bg-gradient-to-r from-ice via-spark to-transparent" style={{ scaleX: lineScale }} />
      </motion.div>
    </motion.div>
  );
};

export default MosaicPortrait;
