import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Html from "../public/assets/skills/html.png";
import Css from "../public/assets/skills/css.png";
import Javascript from "../public/assets/skills/javascript.png";
import ReactImg from "../public/assets/skills/react.png";
import Tailwind from "../public/assets/skills/tailwind.png";
import Github from "../public/assets/skills/github1.png";
import Firebase from "../public/assets/skills/firebase.png";
import NextJS from "../public/assets/skills/nextjs.png";
import C from "../public/assets/skills/csharp.png";
import Redux from "../public/assets/skills/redux.png";
import Git from "../public/assets/skills/Git.png";
import Python from "../public/assets/skills/python.png";
import MSS from "../public/assets/skills/MSS.png";
import Reveal from "./Reveal";
import AnimatedHeading from "./AnimatedHeading";
import SectionSignal from "./SectionSignal";
import SwipeHint from "./SwipeHint";

const groups = [
  {
    title: "Interface Core",
    note: "Semantic, responsive, precise",
    accent: "#7dd3fc",
    skills: [["HTML", Html], ["CSS", Css], ["JavaScript", Javascript], ["Tailwind", Tailwind]],
  },
  {
    title: "Product Frameworks",
    note: "Stateful, scalable applications",
    accent: "#72f2c1",
    skills: [["React", ReactImg], ["Next.js", NextJS], ["Redux", Redux]],
  },
  {
    title: "Cloud & Data",
    note: "Connected systems and intelligence",
    accent: "#ffd166",
    skills: [["Firebase", Firebase], ["Python", Python], ["MSS", MSS]],
  },
  {
    title: "Engineering Tools",
    note: "Reliable delivery and collaboration",
    accent: "#ff8f70",
    skills: [["Git", Git], ["GitHub", Github], ["C#", C]],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="w-full overflow-hidden py-16 md:py-28 section-slide-in">
      <div className="mx-auto max-w-[1240px] px-4">
        <Reveal>
          <SectionSignal index="02" label="Skills / Signal Deck" accent="sky" />
          <div className="grid gap-5 lg:grid-cols-[0.92fr_1.08fr] lg:items-end">
            <AnimatedHeading className="text-3xl text-white md:text-6xl">Different tools. One product mindset.</AnimatedHeading>
            <p className="text-sm leading-7 text-white/62 md:text-base md:leading-8">
              I combine interface craft, application architecture, connected
              data, and engineering discipline. The stack changes; the standard
              of clarity does not.
            </p>
          </div>
        </Reveal>

        <SwipeHint accent="#7dd3fc" />
        <div className="mt-3 flex touch-pan-x snap-x snap-mandatory gap-4 overflow-x-auto overflow-y-hidden overscroll-x-contain scroll-smooth pb-4 md:mt-8 md:grid md:touch-auto md:grid-cols-2 md:gap-5 md:overflow-visible md:pb-0">
          {groups.map((group, index) => (
            <motion.article
              key={group.title}
              className="glass-card w-full min-w-full shrink-0 snap-start p-5 md:min-w-0 md:snap-none md:p-7"
              initial={{ opacity: 0, y: 60, rotate: index % 2 === 0 ? -2 : 2 }}
              whileInView={{ opacity: 1, y: 0, rotate: 0 }}
              viewport={{ once: false, amount: 0.35 }}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.8, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
            >
              <div
                className="pointer-events-none absolute inset-0 opacity-40"
                style={{ background: `radial-gradient(circle at 15% 0%, ${group.accent}35, transparent 38%)` }}
              />
              <motion.div
                className="pointer-events-none absolute left-0 right-0 top-0 h-px"
                style={{ background: `linear-gradient(90deg, transparent, ${group.accent}, transparent)` }}
                animate={{ y: [0, 260, 0], opacity: [0, 0.8, 0] }}
                transition={{ duration: 5.5 + index, repeat: Infinity, ease: "easeInOut" }}
              />

              <div className="relative z-10 flex items-start justify-between gap-4">
                <div>
                  <p className="text-[10px] font-black uppercase tracking-[0.28em]" style={{ color: group.accent }}>Signal 0{index + 1}</p>
                  <h3 className="mt-2 text-2xl text-white md:text-3xl">{group.title}</h3>
                  <p className="mt-2 text-sm text-white/50">{group.note}</p>
                </div>
                <motion.span
                  className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border text-xs font-black"
                  style={{ color: group.accent, borderColor: `${group.accent}45`, backgroundColor: `${group.accent}14` }}
                  animate={{ rotate: [0, 90, 180, 270, 360] }}
                  transition={{ duration: 16, repeat: Infinity, ease: "linear" }}
                >
                  +
                </motion.span>
              </div>

              <div className="relative z-10 mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4 md:grid-cols-3 lg:grid-cols-4">
                {group.skills.map(([name, icon], skillIndex) => (
                  <motion.div
                    key={name}
                    className="flex flex-col items-center gap-2 rounded-2xl border border-white/[0.08] bg-black/15 p-3 text-center"
                    initial={{ opacity: 0, scale: 0.75 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: false, amount: 0.7 }}
                    whileHover={{ scale: 1.08, borderColor: group.accent }}
                    transition={{ duration: 0.45, delay: 0.18 + skillIndex * 0.06 }}
                  >
                    <Image src={icon} width={38} height={38} alt={`${name} icon`} />
                    <span className="text-xs font-bold text-white/75">{name}</span>
                  </motion.div>
                ))}
              </div>
              </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
