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
    note: "Semantic structure, responsive behavior, precise visual systems.",
    span: "md:col-span-7",
    skills: [["HTML", Html], ["CSS", Css], ["JavaScript", Javascript], ["Tailwind", Tailwind]],
  },
  {
    title: "Product Frameworks",
    note: "Stateful applications built to remain clear as they grow.",
    span: "md:col-span-5",
    skills: [["React", ReactImg], ["Next.js", NextJS], ["Redux", Redux]],
  },
  {
    title: "Cloud & Data",
    note: "Connected systems, structured data, and applied intelligence.",
    span: "md:col-span-5",
    skills: [["Firebase", Firebase], ["Python", Python], ["MSS", MSS]],
  },
  {
    title: "Engineering Tools",
    note: "Reliable delivery, collaboration, and maintainable code.",
    span: "md:col-span-7",
    skills: [["Git", Git], ["GitHub", Github], ["C#", C]],
  },
];

const Skills = () => (
  <section id="skills" className="w-full overflow-hidden py-16 md:py-28">
    <div className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8">
      <Reveal>
        <SectionSignal index="02" label="Skills / Capability Grid" />
        <div className="grid gap-5 lg:grid-cols-12 lg:items-end">
          <AnimatedHeading className="text-3xl leading-tight text-white sm:text-4xl md:text-5xl lg:col-span-7">
            Different tools. One product mindset.
          </AnimatedHeading>
          <p className="text-sm leading-7 text-zinc-400 md:text-base md:leading-8 lg:col-span-5">
            I combine interface craft, application architecture, connected data,
            and engineering discipline. The stack changes; the standard of clarity does not.
          </p>
        </div>
      </Reveal>

      <SwipeHint accent="#b7f34a" />
      <div className="mt-3 flex touch-pan-x snap-x snap-mandatory gap-3 overflow-x-auto overflow-y-hidden overscroll-x-contain scroll-smooth pb-4 md:mt-10 md:grid md:touch-auto md:grid-cols-12 md:gap-4 md:overflow-visible md:pb-0">
        {groups.map((group, index) => (
          <motion.article
            key={group.title}
            className={`bento-card w-full min-w-full shrink-0 snap-start p-5 md:min-w-0 md:snap-none md:p-7 ${group.span}`}
            initial={{ opacity: 0, y: 50, clipPath: "inset(12% 0 0 0 round 8px)" }}
            whileInView={{ opacity: 1, y: 0, clipPath: "inset(0 0 0 0 round 8px)" }}
            viewport={{ once: true, amount: 0.3 }}
            whileHover={{ y: -4, borderColor: "rgba(183,243,74,.5)" }}
            transition={{ duration: 0.68, delay: index * 0.07, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-ice to-spark opacity-70" />
            <div className="relative z-10 flex items-start justify-between gap-4">
              <div>
                <p className="eyebrow">Capability 0{index + 1}</p>
                <h3 className="mt-3 text-2xl text-white md:text-3xl">{group.title}</h3>
                <p className="mt-2 max-w-md text-sm leading-6 text-zinc-500">{group.note}</p>
              </div>
              <span className="text-5xl font-black leading-none text-white/[0.04] md:text-7xl">0{index + 1}</span>
            </div>

            <div className="relative z-10 mt-6 grid grid-cols-2 gap-2 sm:grid-cols-4 md:grid-cols-3 lg:grid-cols-4">
              {group.skills.map(([name, icon], skillIndex) => (
                <motion.div
                  key={name}
                  className="flex min-h-[96px] flex-col items-center justify-center gap-2 rounded-lg border border-white/[0.08] bg-canvas/50 p-3 text-center"
                  initial={{ opacity: 0, scale: 0.88 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, amount: 0.7 }}
                  whileHover={{ y: -3, borderColor: skillIndex % 2 === 0 ? "rgba(183,243,74,.6)" : "rgba(122,231,247,.6)" }}
                  transition={{ duration: 0.42, delay: 0.16 + skillIndex * 0.055 }}
                >
                  <Image src={icon} width={38} height={38} alt={`${name} icon`} />
                  <span className="text-xs font-bold text-zinc-300">{name}</span>
                </motion.div>
              ))}
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  </section>
);

export default Skills;
