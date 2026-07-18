import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { AiOutlineMail } from "react-icons/ai";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { HiOutlineArrowDown, HiOutlineArrowUpRight } from "react-icons/hi2";
import heroStudio from "../public/assets/hero-studio-v2.png";

const socialLinks = [
  { label: "LinkedIn", icon: FaLinkedinIn, href: "https://www.linkedin.com/in/abdulrahman-alsamaraie/" },
  { label: "GitHub", icon: FaGithub, href: "https://github.com/AbdalrahmanM" },
  { label: "Email", icon: AiOutlineMail, href: "mailto:abdodj18@gmail.com" },
];

const signals = [
  { index: "01", label: "M.Sc. research", value: "AI and crisis intelligence" },
  { index: "02", label: "Credential", value: "AWS AI Practitioner" },
  { index: "03", label: "Core craft", value: "React product interfaces" },
];

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.28 } },
};

const item = {
  hidden: { opacity: 0, y: 30, filter: "blur(10px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.68, ease: [0.16, 1, 0.3, 1] },
  },
};

export const Main = () => {
  const reducedMotion = useReducedMotion();

  return (
    <section id="home" className="relative min-h-[calc(100svh-4rem)] overflow-hidden border-b border-white/10">
      <motion.div
        className="absolute inset-0"
        initial={reducedMotion ? false : { scale: 1.08, filter: "grayscale(0.75)" }}
        animate={{ scale: 1, filter: "grayscale(0)" }}
        transition={{ duration: 1.35, ease: [0.16, 1, 0.3, 1] }}
      >
        <Image
          src={heroStudio}
          alt="Abdulrahman Mudher in a contemporary engineering and AI research studio"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[38%_center] sm:object-[36%_center] lg:object-center"
        />
      </motion.div>

      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(8,9,10,0.04)_0%,rgba(8,9,10,0.48)_45%,#08090a_100%)] lg:bg-[linear-gradient(90deg,rgba(8,9,10,0.03)_0%,rgba(8,9,10,0.2)_38%,rgba(8,9,10,0.88)_67%,#08090a_100%)]" />
      <div className="signal-grid absolute inset-0 opacity-20 mix-blend-screen" />

      {!reducedMotion && (
        <>
          <motion.div
            className="absolute inset-y-0 left-1/3 hidden w-px bg-ice/35 lg:block"
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ duration: 0.9, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
          />
          <motion.div
            className="absolute inset-x-0 top-[28%] h-px bg-gradient-to-r from-transparent via-spark/35 to-transparent"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          />
        </>
      )}

      <div className="relative z-10 mx-auto flex min-h-[calc(100svh-4rem)] max-w-[1240px] flex-col justify-end px-4 pb-5 pt-28 sm:px-6 sm:pb-7 lg:items-end lg:justify-center lg:px-8 lg:pb-32 lg:pt-36">
        <motion.div
          className="w-full text-center lg:max-w-[620px] lg:text-left"
          variants={container}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={item} className="mb-4 inline-flex items-center gap-3 rounded-md border border-spark/30 bg-canvas/75 px-3 py-2 backdrop-blur-xl">
            <span className="h-2 w-2 bg-spark shadow-[0_0_18px_rgba(183,243,74,0.9)]" />
            <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-zinc-100 sm:text-xs">
              Frontend engineer and AI researcher
            </span>
          </motion.div>

          <motion.p variants={item} className="eyebrow mb-3">Portfolio / 2026</motion.p>
          <motion.h1 variants={item} className="text-[clamp(2.65rem,11vw,4.75rem)] font-black leading-[0.9] text-white">
            Abdulrahman
            <span className="block text-gradient">Mudher.</span>
          </motion.h1>
          <motion.p variants={item} className="mx-auto mt-4 max-w-xl text-sm font-medium leading-6 text-zinc-200 sm:text-base sm:leading-7 lg:mx-0 lg:text-lg">
            I create precise, responsive digital products where expressive motion,
            clear systems, and AI-informed thinking work together.
          </motion.p>

          <motion.div variants={item} className="mt-6 grid grid-cols-2 gap-2 sm:flex sm:flex-wrap sm:gap-3">
            <Link href="/#project" className="primary-link gap-2 text-[11px] sm:text-sm">
              Explore work <HiOutlineArrowUpRight size={18} />
            </Link>
            <Link href="/Certificate" className="secondary-link text-[11px] sm:text-sm">
              Certificates
            </Link>
          </motion.div>

          <motion.div variants={item} className="mt-4 flex items-center justify-center gap-2 lg:justify-start">
            {socialLinks.map(({ label, icon: Icon, href }) => (
              <Link
                key={label}
                href={href}
                aria-label={label}
                title={label}
                className="flex h-11 w-11 items-center justify-center rounded-md border border-white/15 bg-canvas/70 text-zinc-200 backdrop-blur-lg transition duration-200 hover:-translate-y-0.5 hover:border-ice hover:text-ice"
              >
                <Icon />
              </Link>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          className="mt-5 grid w-full grid-cols-3 gap-1.5 lg:absolute lg:bottom-6 lg:left-8 lg:right-8 lg:mt-0 lg:w-auto lg:gap-2"
          initial="hidden"
          animate="visible"
          variants={{ visible: { transition: { staggerChildren: 0.08, delayChildren: 0.78 } } }}
        >
          {signals.map((signal) => (
            <motion.div
              key={signal.index}
              variants={item}
              className="min-w-0 rounded-lg border border-white/10 bg-canvas/80 p-2.5 backdrop-blur-xl sm:p-4 lg:flex lg:items-center lg:gap-4"
            >
              <span className="text-[10px] font-black text-spark sm:text-xs">{signal.index}</span>
              <div className="mt-1 min-w-0 lg:mt-0">
                <p className="truncate text-[8px] font-bold uppercase tracking-[0.11em] text-zinc-500 sm:text-[10px] sm:tracking-[0.16em]">{signal.label}</p>
                <p className="mt-0.5 text-[10px] font-bold leading-4 text-zinc-100 sm:text-sm">{signal.value}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <Link
        href="/#about"
        aria-label="Scroll to about section"
        className="absolute bottom-28 left-5 z-20 hidden h-11 w-11 items-center justify-center rounded-md border border-white/15 bg-black/30 text-white backdrop-blur-lg transition hover:border-spark hover:text-spark lg:flex"
      >
        <HiOutlineArrowDown className="animate-bounce" />
      </Link>
    </section>
  );
};
