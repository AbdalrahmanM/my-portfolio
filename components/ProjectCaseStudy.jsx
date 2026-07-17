import React, { useRef } from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import { FaGithub } from "react-icons/fa";
import {
  HiOutlineArrowLeft,
  HiOutlineArrowUpRight,
  HiOutlinePlay,
} from "react-icons/hi2";
import SectionSignal from "./SectionSignal";

const ProjectCaseStudy = ({
  number,
  title,
  category,
  tagline,
  description,
  image,
  technologies,
  highlights,
  demoUrl,
  codeUrl,
  accent = "#72f2c1",
  secondary = "#7dd3fc",
  gallery = [],
}) => {
  const heroRef = useRef(null);
  const reducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const imageScale = useTransform(scrollYProgress, [0, 1], [1.04, 1.14]);
  const contentY = useTransform(scrollYProgress, [0, 1], [0, 84]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.86], [1, 0.2]);

  return (
    <main className="overflow-x-hidden">
      <Head>
        <title>{title} | Abdulrahman Mudher</title>
        <meta name="description" content={tagline} />
      </Head>

      <section
        ref={heroRef}
        className="relative flex min-h-[92svh] items-end overflow-hidden px-4 pb-10 pt-32 md:min-h-[88vh] md:pb-16"
      >
        <motion.div
          className="absolute -inset-y-[8%] inset-x-0"
          style={reducedMotion ? undefined : { y: imageY, scale: imageScale }}
        >
          <Image
            src={image}
            alt={`${title} interface preview`}
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
        </motion.div>

        <div className="absolute inset-0 bg-gradient-to-t from-[#060d0c] via-[#060d0c]/72 to-[#060d0c]/15" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(6,13,12,0.58),transparent_62%)]" />
        <div className="signal-grid absolute inset-0 opacity-25 mix-blend-overlay" />
        <motion.div
          className="absolute left-0 right-0 top-[22%] h-px"
          style={{ background: `linear-gradient(90deg, transparent, ${accent}, transparent)` }}
          animate={{ x: ["-100%", "100%"] }}
          transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
        />
        <div
          className="absolute bottom-0 left-0 h-1 w-full"
          style={{ background: `linear-gradient(90deg, ${accent}, ${secondary}, transparent 88%)` }}
        />

        <motion.div
          className="relative z-10 mx-auto grid w-full max-w-[1240px] items-end gap-10 lg:grid-cols-[1fr_250px]"
          style={reducedMotion ? undefined : { y: contentY, opacity: heroOpacity }}
        >
          <div className="text-center sm:text-left">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
            >
              <Link
                href="/#project"
                className="mx-auto mb-7 inline-flex items-center gap-2 rounded-full border border-white/15 bg-[#060d0c]/55 px-4 py-2 text-[10px] font-black uppercase tracking-[0.2em] text-white/70 backdrop-blur-xl transition hover:border-white/35 hover:text-white sm:mx-0"
              >
                <HiOutlineArrowLeft size={16} />
                Selected work
              </Link>
            </motion.div>

            <motion.div
              className="mb-5 flex items-center justify-center gap-3 sm:justify-start"
              initial={{ opacity: 0, x: -18 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.12 }}
            >
              <span
                className="rounded-full border px-3 py-1 text-[10px] font-black uppercase tracking-[0.22em]"
                style={{ color: accent, borderColor: `${accent}55`, backgroundColor: `${accent}18` }}
              >
                Project {number}
              </span>
              <span className="h-px w-10" style={{ backgroundColor: accent }} />
              <span className="text-[10px] font-black uppercase tracking-[0.22em] text-white/60">
                {category}
              </span>
            </motion.div>

            <h1 className="mx-auto max-w-5xl text-5xl font-black leading-[0.88] text-white sm:mx-0 sm:text-7xl lg:text-[7.5rem]">
              {title.split(" ").map((word, index, words) => (
                <React.Fragment key={`${word}-${index}`}>
                  <span className="inline-block overflow-hidden pb-[0.08em]">
                    <motion.span
                      className="inline-block"
                      initial={{ y: "115%", rotate: 3 }}
                      animate={{ y: 0, rotate: 0 }}
                      transition={{ duration: 0.85, delay: 0.16 + index * 0.08, ease: [0.16, 1, 0.3, 1] }}
                    >
                      {word}
                    </motion.span>
                  </span>
                  {index < words.length - 1 ? " " : null}
                </React.Fragment>
              ))}
            </h1>

            <motion.p
              className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-white/78 sm:mx-0 sm:text-base md:text-lg md:leading-8"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.5 }}
            >
              {tagline}
            </motion.p>

            <motion.div
              className="mt-7 flex flex-wrap justify-center gap-2 sm:justify-start"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.62 }}
            >
              {demoUrl && (
                <a
                  href={demoUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex max-w-[200px] flex-1 basis-[130px] items-center justify-center gap-2 rounded-full px-4 py-3 text-[10px] font-black uppercase tracking-[0.14em] text-[#060d0c] transition hover:-translate-y-1 sm:max-w-none sm:flex-none sm:basis-auto sm:px-5 sm:text-xs"
                  style={{ backgroundColor: accent }}
                >
                  <HiOutlinePlay size={17} />
                  Live project
                </a>
              )}
              {codeUrl && (
                <a
                  href={codeUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex max-w-[200px] flex-1 basis-[130px] items-center justify-center gap-2 rounded-full border border-white/15 bg-[#060d0c]/60 px-4 py-3 text-[10px] font-black uppercase tracking-[0.14em] text-white backdrop-blur-xl transition hover:-translate-y-1 hover:border-white/40 sm:max-w-none sm:flex-none sm:basis-auto sm:px-5 sm:text-xs"
                >
                  <FaGithub size={16} />
                  Source code
                </a>
              )}
            </motion.div>

            <motion.div
              className="mt-7 flex flex-wrap justify-center gap-2 sm:justify-start"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.72 }}
            >
              {technologies.slice(0, 5).map((technology) => (
                <span
                  key={technology}
                  className="rounded-full border border-white/10 bg-black/30 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.14em] text-white/65 backdrop-blur-lg"
                >
                  {technology}
                </span>
              ))}
            </motion.div>
          </div>

          <motion.aside
            className="hidden rounded-3xl border border-white/15 bg-[#060d0c]/55 p-6 text-right backdrop-blur-xl lg:block"
            initial={{ opacity: 0, x: 28 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="text-[10px] font-black uppercase tracking-[0.25em] text-white/45">Case study</p>
            <p className="mt-3 text-7xl font-black leading-none" style={{ color: accent }}>{number}</p>
            <div className="ml-auto mt-5 h-px w-16" style={{ backgroundColor: accent }} />
            <p className="mt-5 text-sm leading-6 text-white/65">Interface, engineering, and responsive product thinking.</p>
          </motion.aside>
        </motion.div>
      </section>

      <section className="px-4 py-16 md:py-28">
        <div className="mx-auto max-w-[1240px]">
          <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:gap-16">
            <motion.div
              initial={{ opacity: 0, y: 54 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.22 }}
              transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
            >
              <SectionSignal index={number} label="Case Study / Overview" accent="mint" />
              <h2 className="max-w-3xl text-4xl leading-[1.02] text-white md:text-6xl">
                Product thinking behind the interface.
              </h2>
              <p className="mt-6 max-w-3xl text-base leading-8 text-white/65 md:text-lg md:leading-9">
                {description}
              </p>

              <div className="mt-9 grid gap-3 sm:grid-cols-3">
                {highlights.map((highlight, index) => (
                  <motion.article
                    key={highlight.title}
                    className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.055] p-5"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.55 }}
                    transition={{ duration: 0.65, delay: index * 0.08 }}
                    whileHover={{ y: -7, borderColor: accent }}
                  >
                    <span className="text-xs font-black" style={{ color: accent }}>0{index + 1}</span>
                    <h3 className="mt-8 text-lg text-white">{highlight.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-white/50">{highlight.note}</p>
                    <div className="absolute bottom-0 left-0 h-px w-full" style={{ background: `linear-gradient(90deg, ${accent}, transparent)` }} />
                  </motion.article>
                ))}
              </div>
            </motion.div>

            <motion.aside
              className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.055] p-6 md:p-8 lg:sticky lg:top-28 lg:self-start"
              initial={{ opacity: 0, x: 44 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.85, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
            >
              <motion.div
                className="pointer-events-none absolute left-0 right-0 top-0 h-px"
                style={{ background: `linear-gradient(90deg, transparent, ${secondary}, transparent)` }}
                animate={{ y: [0, 520, 0], opacity: [0, 0.9, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              />
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-[10px] font-black uppercase tracking-[0.25em]" style={{ color: secondary }}>Build blueprint</p>
                  <h2 className="mt-2 text-2xl text-white">Technology system</h2>
                </div>
                <motion.span
                  className="flex h-12 w-12 items-center justify-center rounded-full border text-sm font-black"
                  style={{ color: accent, borderColor: `${accent}55`, backgroundColor: `${accent}12` }}
                  animate={{ rotate: 360 }}
                  transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
                >
                  +
                </motion.span>
              </div>

              <div className="mt-8 divide-y divide-white/[0.08] border-y border-white/[0.08]">
                {technologies.map((technology, index) => (
                  <motion.div
                    key={technology}
                    className="flex items-center justify-between gap-4 py-4"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.06 }}
                  >
                    <span className="text-sm font-semibold text-white/78">{technology}</span>
                    <span className="flex items-center gap-2 text-[10px] font-black text-white/30">
                      {String(index + 1).padStart(2, "0")}
                      <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: index % 2 === 0 ? accent : secondary }} />
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.aside>
          </div>

          <motion.div
            className="mt-20 md:mt-28"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.16 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="mb-6 flex items-end justify-between gap-5">
              <div>
                <p className="text-[10px] font-black uppercase tracking-[0.26em]" style={{ color: accent }}>Interface focus</p>
                <h2 className="mt-2 text-3xl text-white md:text-5xl">The product in frame.</h2>
              </div>
              <span className="hidden text-sm font-bold uppercase tracking-[0.18em] text-white/30 sm:block">{category}</span>
            </div>

            <motion.div
              className="relative overflow-hidden rounded-3xl border border-white/10 bg-black/25 p-2 shadow-[0_34px_100px_rgba(0,0,0,0.38)] md:p-4"
              whileHover={{ y: -6 }}
              transition={{ duration: 0.35 }}
            >
              <div className="relative aspect-[16/9] overflow-hidden rounded-[1.15rem] bg-[#0a1513]">
                <Image
                  src={image}
                  alt={`${title} full interface`}
                  fill
                  sizes="(max-width: 1280px) 100vw, 1200px"
                  className="object-cover"
                />
                <motion.div
                  className="absolute left-0 right-0 top-0 h-px"
                  style={{ background: `linear-gradient(90deg, transparent, ${accent}, ${secondary}, transparent)` }}
                  animate={{ y: [0, 620, 0], opacity: [0, 0.9, 0] }}
                  transition={{ duration: 7.5, repeat: Infinity, ease: "easeInOut" }}
                />
              </div>
              <div className="flex items-center justify-between gap-4 px-2 pb-1 pt-3 text-[9px] font-black uppercase tracking-[0.2em] text-white/35 md:px-3 md:text-[10px]">
                <span>Responsive interface</span>
                <span style={{ color: accent }}>Project {number}</span>
              </div>
            </motion.div>
          </motion.div>

          {gallery.length > 0 && (
            <div className="mt-20 md:mt-28">
              <SectionSignal index="+" label="Interface / More Views" accent="sky" />
              <div className="grid gap-4 md:grid-cols-2">
                {gallery.map((galleryImage, index) => (
                  <motion.div
                    key={galleryImage.src}
                    className={`relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] ${index === 0 && gallery.length % 2 !== 0 ? "md:col-span-2" : ""}`}
                    initial={{ opacity: 0, y: 46, clipPath: "inset(16% 0 0 0 round 20px)" }}
                    whileInView={{ opacity: 1, y: 0, clipPath: "inset(0% 0 0 0 round 20px)" }}
                    viewport={{ once: true, amount: 0.22 }}
                    transition={{ duration: 0.8, delay: Math.min(index * 0.08, 0.24), ease: [0.16, 1, 0.3, 1] }}
                  >
                    <div className="relative aspect-[16/9]">
                      <Image
                        src={galleryImage}
                        alt={`${title} view ${index + 1}`}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-cover transition duration-700 hover:scale-[1.025]"
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          )}

          <motion.div
            className="mt-20 flex flex-col items-center justify-between gap-6 border-y border-white/10 py-10 text-center sm:flex-row sm:text-left md:mt-28"
            initial={{ opacity: 0, y: 34 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.75 }}
          >
            <div>
              <p className="text-[10px] font-black uppercase tracking-[0.25em]" style={{ color: secondary }}>Continue exploring</p>
              <h2 className="mt-2 text-3xl text-white md:text-4xl">More selected product work.</h2>
            </div>
            <Link href="/#project" className="inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/[0.06] px-5 py-3 text-xs font-black uppercase tracking-[0.16em] text-white transition hover:-translate-y-1 hover:border-white/40">
              View projects
              <HiOutlineArrowUpRight size={18} />
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default ProjectCaseStudy;
