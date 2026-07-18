import Link from "next/link";
import { motion } from "framer-motion";
import { HiOutlineArrowUpRight } from "react-icons/hi2";
import Reveal from "./Reveal";
import AnimatedHeading from "./AnimatedHeading";
import MosaicPortrait from "./MosaicPortrait";
import SectionSignal from "./SectionSignal";

const focusAreas = [
  { number: "01", label: "Interface systems", detail: "Responsive React products" },
  { number: "02", label: "Applied AI", detail: "Language, emotion, urgency" },
  { number: "03", label: "Motion craft", detail: "Purposeful interaction" },
];

const About = () => (
  <section id="about" className="w-full overflow-hidden py-16 md:py-28">
    <div className="mx-auto w-full max-w-[1240px] px-4 sm:px-6 lg:px-8">
      <Reveal>
        <SectionSignal index="01" label="About / Identity" />
      </Reveal>

      <div className="grid gap-3 lg:grid-cols-12 lg:gap-4">
        <Reveal className="bento-card p-5 sm:p-7 lg:col-span-7 lg:p-10">
          <p className="eyebrow">Engineer, researcher, visual thinker</p>
          <AnimatedHeading className="mt-4 max-w-2xl text-3xl leading-tight text-white sm:text-4xl md:text-5xl">
            Design instinct backed by engineering and AI research.
          </AnimatedHeading>
          <p className="mt-5 max-w-2xl text-base font-semibold leading-7 text-ice md:text-lg">
            I build interfaces with clarity, curiosity, and a master&apos;s-level AI foundation.
          </p>
          <p className="mt-4 max-w-2xl text-sm leading-7 text-zinc-400 md:text-base md:leading-8">
            I&apos;m Abdulrahman Mudher, a frontend engineer shaped by Computer
            Engineering at Mosul University and graduate AI research at Sakarya
            University. I turn complex ideas into responsive products that feel
            direct, useful, and carefully made.
          </p>
          <Link href="https://github.com/AbdalrahmanM?tab=repositories" className="secondary-link mt-7 w-fit gap-2">
            Explore my code <HiOutlineArrowUpRight size={18} />
          </Link>
          <div className="pointer-events-none absolute -bottom-8 -right-3 text-[9rem] font-black leading-none text-white/[0.025] md:text-[13rem]">AM</div>
        </Reveal>

        <Reveal delay={0.08} className="bento-card min-h-[430px] p-3 sm:p-5 lg:col-span-5 lg:row-span-2">
          <MosaicPortrait />
        </Reveal>

        <Reveal delay={0.1} className="bento-card p-5 sm:p-7 lg:col-span-7">
          <div className="flex items-start gap-4">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-spark text-xs font-black text-canvas">MSc</span>
            <div>
              <p className="eyebrow">Research focus</p>
              <h3 className="mt-2 text-xl leading-snug text-white md:text-2xl">
                Emotion and urgency classification in social-media crisis messages
              </h3>
              <p className="mt-3 text-sm leading-7 text-zinc-400">
                My thesis used multitask transformer architectures to study how
                machines can recognize emotional context and urgency during crises.
                That work now informs how I think about language, attention, and
                human-centered product decisions.
              </p>
            </div>
          </div>
        </Reveal>
      </div>

      <div className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-3 lg:gap-4">
        {focusAreas.map((area, index) => (
          <motion.div
            key={area.label}
            className="bento-card flex items-center gap-4 p-4 sm:block sm:p-5"
            initial={{ opacity: 0, y: 34 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            whileHover={{ y: -4, borderColor: "rgba(183,243,74,.5)" }}
            transition={{ duration: 0.55, delay: index * 0.07, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="text-xs font-black text-spark">{area.number}</span>
            <div className="sm:mt-6">
              <p className="font-bold text-white">{area.label}</p>
              <p className="mt-1 text-sm text-zinc-500">{area.detail}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default About;
