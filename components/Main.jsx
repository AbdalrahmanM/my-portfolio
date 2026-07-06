import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { AiOutlineMail } from "react-icons/ai";
import { FaGithub, FaLinkedinIn, FaReact } from "react-icons/fa";
import { SiNextdotjs, SiAmazonaws } from "react-icons/si";
import { HiOutlineArrowDown, HiOutlineArrowUpRight } from "react-icons/hi2";
import profile from "../public/assets/ABdulrahman.png";

const floatingCards = [
  { label: "React UI", value: "Interfaces", icon: FaReact, className: "left-0 top-12" },
  { label: "Next.js", value: "Apps", icon: SiNextdotjs, className: "right-0 top-28" },
  { label: "AWS AI", value: "Certified", icon: SiAmazonaws, className: "-left-8 bottom-32" },
];

const roles = ["AI-Aware Front-End Developer", "React Builder", "UI Motion Lover", "Product Thinker"];

export const Main = () => {
  return (
    <section id="home" className="relative overflow-hidden px-4 pt-20 md:min-h-screen">
      <div className="mx-auto grid max-w-[1240px] items-center gap-8 py-10 md:min-h-screen md:gap-14 md:py-20 lg:grid-cols-[1.08fr_0.92fr]">
        <motion.div
          initial={{ opacity: 0, y: 34 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="mb-5 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.06] px-4 py-2 text-xs text-white/75 backdrop-blur-xl sm:text-sm md:mb-7">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#5ee7bd] opacity-70" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[#5ee7bd]" />
            </span>
            Frontend developer with AI research background
          </div>

          <p className="section-kicker">Abdulrahman Mudher</p>
          <h1 className="mt-4 max-w-5xl text-4xl font-black leading-[0.95] text-gradient sm:text-6xl lg:text-8xl">
            Websites that move, feel, and convert.
          </h1>

          <div className="mt-4 h-8 overflow-hidden text-xl font-bold text-[#5ee7bd] sm:h-10 sm:text-3xl md:mt-6">
            <motion.div
              animate={{ y: ["0%", "-25%", "-50%", "-75%", "0%"] }}
              transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            >
              {roles.map((role) => (
                <div key={role} className="h-8 sm:h-10">
                  {role}
                </div>
              ))}
            </motion.div>
          </div>

          <p className="mt-5 max-w-2xl text-base leading-7 text-white/68 md:mt-7 md:text-lg md:leading-8">
            I design and build responsive React experiences with clean systems,
            smooth motion, and an AI research background that helps me think
            deeply about language, urgency, and human-centered digital products.
          </p>

          <div className="mt-7 flex flex-wrap gap-3 md:mt-9 md:gap-4">
            <Link href="/#project" className="primary-link gap-2">
              Explore Work
              <HiOutlineArrowUpRight size={18} />
            </Link>
            <Link href="/Certificate" className="secondary-link">
              View Certificates
            </Link>
          </div>

          <div className="mt-7 flex flex-wrap items-center gap-3 md:mt-10 md:gap-4">
            {[
              ["LinkedIn", FaLinkedinIn, "https://www.linkedin.com/in/abdulrahman-alsamaraie/"],
              ["GitHub", FaGithub, "https://github.com/AbdalrahmanM"],
              ["Email", AiOutlineMail, "mailto:abdodj18@gmail.com"],
            ].map(([label, Icon, href]) => (
              <Link key={label} href={href} className="group flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-white/55 transition hover:text-[#5ee7bd] sm:text-sm md:gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.06] transition group-hover:-translate-y-1 group-hover:border-[#5ee7bd] md:h-11 md:w-11">
                  <Icon />
                </span>
                {label}
              </Link>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="relative mx-auto w-full max-w-[360px] sm:max-w-[440px] lg:max-w-[520px]"
          initial={{ opacity: 0, scale: 0.94, rotate: -1 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.div
            className="absolute inset-8 rounded-[2.4rem] border border-[#5ee7bd]/25"
            animate={{ rotate: [0, 6, -4, 0], scale: [1, 1.02, 0.98, 1] }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          />
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
                  <p className="text-xs uppercase tracking-[0.24em] text-[#5ee7bd] md:text-sm">Current stack</p>
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
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#5ee7bd] text-[#071310]">
                    <Icon size={22} />
                  </span>
                  <div>
                    <p className="text-xs uppercase tracking-[0.22em] text-white/50">{card.label}</p>
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
