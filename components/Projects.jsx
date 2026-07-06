import React from "react"
import ProjectItem from "./ProjectItem";
import Reveal from "./Reveal";
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
    { title: "Givingly", tech: "Next.js / Tailwind / Firebase", image: Givingly, url: "/Givingly" },
    { title: "Hospital Test", tech: "React / UI System", image: hospitaltest, url: "/HospitalTest" },
    { title: "Hasta Bilgi", tech: "React / Healthcare", image: hastabilgi, url: "/hastabilgi" },
    { title: "Car Showcase", tech: "Next.js / API", image: Carshow, url: "/Carshow" },
    { title: "Movies Finder", tech: "JavaScript / API", image: Movies, url: "/Movies" },
    { title: "Netflix Clone", tech: "React / Firebase", image: netflix, url: "/Netflix" },
    { title: "Nike Store", tech: "React / Tailwind", image: nike, url: "/nike" },
    { title: "Traveling", tech: "React / UI", image: travling, url: "/travling" },
    { title: "Hangman", tech: "JavaScript Game", image: hangman, url: "/hangman" },
];

const Projects = () => {
    return (
        <section id="project" className="mx-auto max-w-[1240px] px-4 py-16 md:py-28 section-slide-in">
            <Reveal>
                <p className="section-kicker">Projects</p>
                <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
                    <div>
                        <h2 className="py-4 text-3xl text-white md:text-6xl">Selected builds with product energy.</h2>
                        <p className="max-w-2xl text-sm leading-7 text-white/62 md:text-base md:leading-8">
                            Selected work across web apps, UI builds, API integrations,
                            and product-focused frontend experiences.
                        </p>
                    </div>
                </div>
            </Reveal>
            <div className="mt-8 flex snap-x gap-4 overflow-x-auto pb-4 md:mt-10 md:grid md:grid-cols-2 md:gap-6 md:overflow-visible md:pb-0">
                {projects.map((project, index) => (
                    <Reveal key={project.title} delay={Math.min(index * 0.04, 0.24)} className="min-w-[82vw] snap-center md:min-w-0">
                        <ProjectItem
                            title={project.title}
                            tech={project.tech}
                            backgroundImg={project.image}
                            projectUrl={project.url}
                        />
                    </Reveal>
                ))}
            </div>
        </section>
    )
}

export default Projects
