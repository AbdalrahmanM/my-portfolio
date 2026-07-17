import React from "react"
import ProjectItem from "./ProjectItem";
import Reveal from "./Reveal";
import AnimatedHeading from "./AnimatedHeading";
import SectionSignal from "./SectionSignal";
import SwipeHint from "./SwipeHint";
import Givingly from "../public/assets/projects/Givingly.jpg";
import Movies from "../public/assets/projects/Movies.jpg";
import hangman from "../public/assets/projects/hangman.jpg";
import netflix from "../public/assets/projects/netflix.jpg";
import Carshow from "../public/assets/projects/Carshow.jpg";
import nike from "../public/assets/projects/nike.png";
import travling from "../public/assets/projects/travling.png";
import hastabilgi from "../public/assets/projects/hastabilgi.png";
import hospitaltest from "../public/assets/projects/HospitalTest.jpg"

const projects = [
    { title: "Givingly", tech: "Next.js / Tailwind / Firebase", image: Givingly, url: "/Givingly", featured: true },
    { title: "Hospital Test", tech: "React / UI System", image: hospitaltest, url: "/HospitalTest" },
    { title: "Hasta Bilgi", tech: "React / Healthcare", image: hastabilgi, url: "/hastabilgi" },
    { title: "Car Showcase", tech: "Next.js / API", image: Carshow, url: "/Carshow", featured: true },
    { title: "Movies Finder", tech: "JavaScript / API", image: Movies, url: "/Movies" },
    { title: "Netflix Clone", tech: "React / Firebase", image: netflix, url: "/Netflix" },
    { title: "Nike Store", tech: "React / Tailwind", image: nike, url: "/nike" },
    { title: "Traveling", tech: "React / UI", image: travling, url: "/travling" },
    { title: "Hangman", tech: "JavaScript Game", image: hangman, url: "/hangman" },
];

const accents = ["#ffd166", "#72f2c1", "#7dd3fc", "#ff8f70"];

const Projects = () => {
    return (
        <section id="project" className="mx-auto max-w-[1240px] px-4 py-16 md:py-28 section-slide-in">
            <Reveal>
                <SectionSignal index="03" label="Projects / Selected Work" accent="amber" />
                <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
                    <div>
                        <AnimatedHeading className="py-4 text-3xl text-white md:text-6xl">Selected builds with product energy.</AnimatedHeading>
                        <p className="max-w-2xl text-sm leading-7 text-white/62 md:text-base md:leading-8">
                            Selected work across web apps, UI builds, API integrations,
                            and product-focused frontend experiences.
                        </p>
                    </div>
                </div>
            </Reveal>
            <SwipeHint accent="#ffd166" />
            <div className="mt-3 flex touch-pan-x snap-x snap-mandatory gap-4 overflow-x-auto overflow-y-hidden overscroll-x-contain scroll-smooth pb-4 md:mt-10 md:grid md:touch-auto md:grid-cols-2 md:gap-6 md:overflow-visible md:pb-0">
                {projects.map((project, index) => (
                    <div key={project.title} className={`w-full min-w-full shrink-0 snap-start md:min-w-0 md:snap-none ${project.featured ? "md:col-span-2" : ""}`}>
                        <ProjectItem
                            title={project.title}
                            tech={project.tech}
                            backgroundImg={project.image}
                            projectUrl={project.url}
                            index={index}
                            accent={accents[index % accents.length]}
                            featured={project.featured}
                        />
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Projects
