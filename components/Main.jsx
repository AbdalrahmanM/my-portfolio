import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { AiOutlineMail } from "react-icons/ai";
import { FaGithub, FaLinkedinIn, FaReact } from "react-icons/fa";
import { SiNextdotjs, SiAmazonaws } from "react-icons/si";
import { HiOutlineArrowDown, HiOutlineArrowUpRight } from "react-icons/hi2";
import profile from "../public/assets/ABdulrahman.png";
import SectionSignal from "./SectionSignal";

const floatingCards = [
  { label: "React UI", value: "Interfaces", icon: FaReact, accent: "#72f2c1", className: "left-0 top-12" },
  { label: "Next.js", value: "Apps", icon: SiNextdotjs, accent: "#7dd3fc", className: "right-0 top-28" },
  { label: "AWS AI", value: "Certified", icon: SiAmazonaws, accent: "#ffd166", className: "-left-8 bottom-32" },
];

const roles = ["AI-Aware Front-End Developer", "React Builder", "UI Motion Lover", "Product Thinker"];

export const Main = () => {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setRoleIndex((current) => (current + 1) % roles.length);
    }, 2600);

    return () => window.clearInterval(interval);
  }, []);

  return (
    <section id="home" className="relative overflow-hidden px-4 pt-6 sm:pt-12 md:min-h-screen md:pt-20">
      <div className="mx-auto grid max-w-[1240px] items-center gap-8 py-6 sm:py-10 md:min-h-screen md:gap-14 md:py-20 lg:grid-cols-[1.08fr_0.92fr]">
        <motion.div
          className="text-center sm:text-left"
          initial={{ opacity: 0, y: 34 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="mx-auto mb-5 inline-flex items-center justify-center gap-3 rounded-full border border-white/10 bg-white/[0.06] px-4 py-2 text-xs text-white/75 backdrop-blur-xl sm:mx-0 sm:justify-start sm:text-sm md:mb-7">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#5ee7bd] opacity-70" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[#5ee7bd]" />
            </span>
            Frontend developer with AI research background
          </div>

          <SectionSignal index="00" label="Abdulrahman / Portfolio" accent="mint" className="justify-center sm:justify-start" />
          <h1 className="mx-auto mt-4 max-w-5xl text-4xl font-black leading-[0.95] text-gradient sm:mx-0 sm:text-6xl lg:text-7xl 2xl:text-8xl">
            Websites that move, feel, and convert.
          </h1>

          <div className="relative mt-4 h-8 overflow-hidden font-bold text-[#72f2c1] sm:h-10 md:mt-6">
            <AnimatePresence mode="wait">
              <motion.div
                key={roles[roleIndex]}
                className="absolute inset-0 whitespace-nowrap text-[clamp(1rem,4.7vw,1.875rem)]"
                initial={{ opacity: 0, y: 18, filter: "blur(8px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, y: -18, filter: "blur(8px)" }}
                transition={{ duration: 0.48, ease: [0.16, 1, 0.3, 1] }}
              >
                {roles[roleIndex]}
              </motion.div>
            </AnimatePresence>
          </div>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-white/68 sm:mx-0 md:mt-7 md:text-lg md:leading-8">
            I design and build responsive React experiences with clean systems,
            smooth motion, and an AI research background that helps me think
            deeply about language, urgency, and human-centered digital products.
          </p>

          <div className="mt-7 grid grid-cols-2 gap-2 sm:flex sm:flex-wrap sm:gap-3 md:mt-9 md:gap-4">
            <Link href="/#project" className="primary-link gap-2 whitespace-nowrap !px-3 !text-[10px] !tracking-[0.1em] sm:!px-5 sm:!text-sm sm:!tracking-wider">
              Explore Work
              <HiOutlineArrowUpRight size={18} />
            </Link>
            <Link href="/Certificate" className="secondary-link whitespace-nowrap !px-3 !text-[10px] !tracking-[0.1em] sm:!px-5 sm:!text-sm sm:!tracking-wider">
              View Certificates
            </Link>
          </div>

          <div className="mt-6 grid grid-cols-3 gap-2 sm:mt-7 sm:flex sm:flex-wrap sm:items-center sm:gap-3 md:mt-10 md:gap-4">
            {[
              ["LinkedIn", FaLinkedinIn, "https://www.linkedin.com/in/abdulrahman-alsamaraie/"],
              ["GitHub", FaGithub, "https://github.com/AbdalrahmanM"],
              ["Email", AiOutlineMail, "mailto:abdodj18@gmail.com"],
            ].map(([label, Icon, href]) => (
              <Link key={label} href={href} className="group flex min-w-0 flex-col items-center justify-center gap-1.5 rounded-2xl border border-white/10 bg-white/[0.04] px-2 py-2.5 text-[9px] font-bold uppercase tracking-[0.12em] text-white/55 transition hover:border-[#5ee7bd] hover:text-[#5ee7bd] sm:flex-row sm:justify-start sm:gap-2 sm:rounded-none sm:border-0 sm:bg-transparent sm:px-0 sm:py-0 sm:text-sm sm:tracking-[0.18em] md:gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/[0.06] transition group-hover:-translate-y-1 group-hover:border-[#5ee7bd] sm:h-10 sm:w-10 md:h-11 md:w-11">
                  <Icon />
                </span>
                {label}
              </Link>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="relative mx-auto hidden w-full max-w-[440px] sm:block lg:max-w-[520px]"
          initial={{ opacity: 0, scale: 0.94, rotate: -1 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.div
            className="absolute inset-8 rounded-[2.4rem] border border-[#5ee7bd]/25"
            animate={{ rotate: [0, 6, -4, 0], scale: [1, 1.02, 0.98, 1] }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute inset-14 rounded-[2rem] border border-[#ff8f70]/20"
            animate={{ rotate: [0, -5, 4, 0], scale: [1, 0.98, 1.015, 1] }}
            transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.span
            className="absolute -right-5 -top-12 hidden text-[8rem] font-black leading-none text-[#ffd166]/10 lg:block"
            animate={{ y: [0, -12, 0], opacity: [0.08, 0.16, 0.08] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          >
            00
          </motion.span>
          <div className="glass-card p-4">
            <div className="relative overflow-hidden rounded-[1.25rem]">
              <Image
                src={profile}
                alt="Abdulrahman Mudher"
                className="aspect-[5/4] w-full object-cover object-top saturate-[1.05] md:aspect-[4/5]"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#071310] via-transparent to-transparent" />
              <div className="absolute bottom-3 left-3 right-3 md:bottom-5 md:left-5 md:right-5">
                <div className="rounded-2xl border border-white/10 bg-[#071310]/65 p-3 backdrop-blur-xl md:p-4">
                  <p className="text-xs uppercase tracking-[0.24em] text-[#7dd3fc] md:text-sm">Current stack</p>
                  <div className="mt-2 flex flex-wrap gap-2 md:mt-3">
                    {["React", "Next.js", "Tailwind", "Framer"].map((item) => (
                      <span key={item} className="rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-white/80 md:text-sm">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {floatingCards.map((card, index) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={card.label}
                className={`absolute z-20 hidden min-w-[168px] rounded-2xl border border-white/10 bg-[#071310]/95 p-4 text-white shadow-[0_20px_70px_rgba(0,0,0,0.48)] backdrop-blur-xl sm:block ${card.className}`}
                initial={{ opacity: 0, scale: 0.86, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: [0, -14, 0] }}
                whileHover={{ scale: 1.06, rotate: index % 2 === 0 ? -2 : 2 }}
                transition={{ duration: 4 + index, repeat: Infinity, delay: index * 0.4, ease: "easeInOut" }}
              >
                <div className="flex items-center gap-3">
                  <span className="flex h-11 w-11 items-center justify-center rounded-full text-[#060d0c]" style={{ backgroundColor: card.accent }}>
                    <Icon size={22} />
                  </span>
                  <div>
                    <p className="text-xs uppercase tracking-[0.22em]" style={{ color: card.accent }}>{card.label}</p>
                    <p className="font-bold">{card.value}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      <Link href="/#about" className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 items-center gap-2 text-xs font-bold uppercase tracking-[0.24em] text-white/45 transition hover:text-[#5ee7bd] md:flex">
        Scroll
        <HiOutlineArrowDown className="animate-bounce" />
      </Link>
    </section>
  );
};
