import React from "react"
import { motion } from "framer-motion";
import Link from "next/link";
import Reveal from "./Reveal";
import AnimatedHeading from "./AnimatedHeading";
import MosaicPortrait from "./MosaicPortrait";
import SectionSignal from "./SectionSignal";

const About = () => {
    return (
        <section id="about" className="w-full overflow-x-hidden py-16 md:py-28 section-slide-in">
            <div className="m-auto grid w-full max-w-[1240px] items-center gap-8 px-4 lg:grid-cols-[1.3fr_0.7fr]">
                <Reveal className="glass-card mx-auto w-full max-w-full justify-self-center p-5 md:p-10">
                    <SectionSignal index="01" label="About / Identity" accent="mint" />
                    <AnimatedHeading className="py-4 text-3xl text-white md:text-5xl">Design-minded developer with AI research depth.</AnimatedHeading>
                    <p className="py-2 text-base font-semibold text-[#72f2c1] md:text-lg">I build interfaces with taste, patience, curiosity, and a master&apos;s-level AI foundation.</p>
                    <p className="py-2 text-sm leading-7 text-white/65 md:text-base md:leading-8">
                        I&apos;m <span className="text-[#72f2c1]">Abdulrahman Mudher</span> a passionate creator in the realm of web development.
                        My journey began during my time as a Computer Engineering student at Mosul University,
                        where I embarked on a transformative exploration of coding and design. This quest continued at
                        Sakarya University, where I completed my master&apos;s degree with research focused on AI. Since 2012, I&apos;ve been on an exciting path of crafting visually captivating
                        and functionally robust websites.
                    </p>
                    <p className="hidden py-2 leading-8 text-white/65 md:block">
                        My thesis, <span className="text-white">&quot;Classification of Emotion and Urgency Levels in Social Media Crisis Messages Using Multitasking Transformer Architectures,&quot;</span> explored how transformer-based models can understand emotion and urgency in crisis communication. My expertise lies in the meticulous crafting of mobile-responsive front-end UI applications that seamlessly
                        interact with APIs and backend frameworks. I&apos;m driven by an insatiable hunger for continuous learning, firmly
                        believing that there are countless pathways to achieving excellence. While I excel in constructing frontend
                        applications using HTML, CSS, JavaScript, and React, my adaptability allows me to swiftly embrace novel technology stacks as demanded by each project.
                    </p>
                    <div className="mt-5 grid gap-3 sm:grid-cols-3 md:mt-8">
                        {[["Responsive UI", "#72f2c1"], ["AI Research", "#7dd3fc"], ["Smooth Motion", "#ffd166"]].map(([item, accent]) => (
                            <motion.div key={item} className="rounded-2xl border bg-white/[0.06] p-4" style={{ borderColor: `${accent}30` }} whileHover={{ y: -6, borderColor: accent }}>
                                <p className="text-sm font-bold uppercase tracking-[0.2em] text-white/45">Focus</p>
                                <p className="mt-2 font-bold" style={{ color: accent }}>{item}</p>
                            </motion.div>
                        ))}
                    </div>
                    <Link href="https://github.com/AbdalrahmanM?tab=repositories">
                        <p className="mt-5 inline-block cursor-pointer font-bold text-[#72f2c1] underline underline-offset-4 md:mt-8">
                            Check out some of my latest projects.
                        </p>
                    </Link>
                </Reveal>
                <MosaicPortrait />
            </div>
        </section>
    )
}

export default About
