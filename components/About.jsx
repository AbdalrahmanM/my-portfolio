import React from "react"
import abdo1 from "../public/assets/abdo1.jpg"
import Image from "next/image";
import Link from "next/link";
import Reveal from "./Reveal";

const About = () => {
    return (
        <section id="about" className="w-full py-16 md:py-28 section-slide-in">
            <div className="max-w-[1240px] m-auto grid items-center gap-8 px-4 lg:grid-cols-[1.3fr_0.7fr]">
                <Reveal className="glass-card p-5 md:p-10">
                    <p className="section-kicker">About</p>
                    <h2 className="py-4 text-3xl text-white md:text-5xl">Design-minded developer with AI research depth.</h2>
                    <p className="py-2 text-base font-semibold text-[#5ee7bd] md:text-lg">I build interfaces with taste, patience, curiosity, and a master&apos;s-level AI foundation.</p>
                    <p className="py-2 text-sm leading-7 text-white/65 md:text-base md:leading-8">
                        I&apos;m <span className="text-[#5ee7bd]">Abdulrahman Mudher</span> a passionate creator in the realm of web development.
                        My journey began during my time as a Computer Engineering student at Mosul University,
                        where I embarked on a transformative exploration of coding and design. This quest continued at
                        Sakarya University, where I completed my master&apos;s degree with research focused on AI. Since 2012, I&apos;ve been on an exciting path of crafting visually captivating
                        and functionally robust websites.
                    </p>
                    <p className="hidden py-2 leading-8 text-white/65 md:block">
                        My thesis, <span className="text-white">&quot;Classification of Emotion and Urgency Levels in Social Media Crisis Messages Using Multitasking Transformer Architectures,&quot;</span> explored how transformer-based models can understand emotion and urgency in crisis communication. My expertise lies in the meticulous crafting of mobile-responsive front-end UI applications that seamlessly
                        interact with APIs and backend frameworks. I&apos;m driven by an insatiable hunger for continuous learning, firmly
                        believing that there are countless pathways to achieving excellence. While I excel in constructing front-end
                        applications using HTML, CSS, JavaScript, and React, my adaptability allows me to swiftly embrace novel technology stacks as demanded by each project.
                    </p>
                    <div className="mt-5 grid gap-3 sm:grid-cols-3 md:mt-8">
                        {["Responsive UI", "AI Research", "Smooth Motion"].map((item) => (
                            <div key={item} className="rounded-2xl border border-white/10 bg-white/[0.06] p-4">
                                <p className="text-sm font-bold uppercase tracking-[0.2em] text-white/45">Focus</p>
                                <p className="mt-2 font-bold text-white">{item}</p>
                            </div>
                        ))}
                    </div>
                    <Link href="https://github.com/AbdalrahmanM?tab=repositories">
                        <p className="mt-5 inline-block cursor-pointer font-bold text-[#5ee7bd] underline underline-offset-4 md:mt-8">
                            Check out some of my latest projects.
                        </p>
                    </Link>
                </Reveal>
                <Reveal delay={0.12} className="glass-card flex h-auto w-full items-center justify-center p-4">
                    <Image src={abdo1} className="rounded-[1.25rem]" alt="Abdulrahman working portrait" />
                </Reveal>
            </div>
        </section>
    )
}

export default About
