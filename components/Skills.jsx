import React from "react";
import Image from "next/image";
import Html from "../public/assets/skills/html.png";
import Css from "../public/assets/skills/css.png";
import Javascript from "../public/assets/skills/javascript.png";
import ReactImg from "../public/assets/skills/react.png";
import Tailwind from "../public/assets/skills/tailwind.png";
import Github from "../public/assets/skills/github1.png";
import Firebase from "../public/assets/skills/firebase.png";
import NextJS from "../public/assets/skills/nextjs.png";
import C from "../public/assets/skills/csharp.png";
import redux from "../public/assets/skills/redux.png";
import Git from "../public/assets/skills/Git.png";
import python from "../public/assets/skills/python.png";
import mss from "../public/assets/skills/MSS.png";
import Reveal from "./Reveal";

const skills = [
  ["HTML", Html],
  ["CSS", Css],
  ["JavaScript", Javascript],
  ["React", ReactImg],
  ["Next.js", NextJS],
  ["Tailwind", Tailwind],
  ["GitHub", Github],
  ["Git", Git],
  ["Firebase", Firebase],
  ["Redux", redux],
  ["C#", C],
  ["Python", python],
  ["MSS", mss],
];

const Skills = () => {
  const marquee = [...skills.slice(0, 8), ...skills.slice(0, 8)];

  return (
    <section id="skills" className="w-full overflow-hidden py-16 md:py-28 section-slide-in">
      <div className="mx-auto max-w-[1240px] px-4">
        <Reveal>
          <p className="section-kicker">Skills</p>
          <div className="mt-4 grid gap-5 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
            <h2 className="text-3xl text-white md:text-6xl">A toolkit built for clean, animated products.</h2>
            <p className="text-sm leading-7 text-white/62 md:text-base md:leading-8">
              Frontend is not only code. It is rhythm, responsiveness,
              accessibility, performance, and the tiny details that make users
              trust what they are touching.
            </p>
          </div>
        </Reveal>

        <div className="relative mt-8 overflow-hidden rounded-[1.6rem] border border-white/10 bg-white/[0.04] py-4 md:mt-10">
          <div className="marquee-track flex w-max gap-4 px-4">
            {marquee.map(([name, icon], index) => (
              <div key={`${name}-${index}`} className="flex min-w-[190px] items-center gap-3 rounded-2xl border border-white/10 bg-[#071310]/60 p-4">
                <Image src={icon} width={38} height={38} alt={`${name} icon`} />
                <span className="font-bold text-white">{name}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-6 flex snap-x gap-4 overflow-x-auto pb-3 sm:grid sm:overflow-visible sm:pb-0 md:mt-8 md:grid-cols-2 lg:grid-cols-4">
          {skills.map(([name, icon], index) => (
            <Reveal key={name} delay={Math.min(index * 0.025, 0.2)} hover className="min-w-[230px] snap-start sm:min-w-0">
              <div className="glass-card group h-full p-4 md:p-5">
                <div className="relative z-10 flex items-center gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 transition group-hover:bg-[#5ee7bd] md:h-16 md:w-16">
                    <Image src={icon} width={42} height={42} alt={`${name} icon`} />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.24em] text-white/40">Skill</p>
                    <h3 className="mt-1 text-xl text-white">{name}</h3>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
