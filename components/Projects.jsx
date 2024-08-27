import React from "react"
import ProjectItem from "./ProjectItem";
import Givingly from "../public/assets/projects/Givingly.jpg";
import Movies from "../public/assets/projects/Movies.jpg";
import hangman from "../public/assets/projects/hangman.jpg";
import netflix from "../public/assets/projects/netflix.jpg";
import Carshow from "../public/assets/projects/Carshow.jpg";
import nike from "../public/assets/projects/nike.png";
import travling from "../public/assets/projects/travling.png";
import hastabilgi from "../public/assets/projects/hastabilgi.png";

const Projects = () => {
    return (
        <div id="project" className="max-w-[1240px] mx-auto px-2 py-16 section-slide-in">
            <p className="text-xl tracking-widest uppercase text-[#5651e5]">Projects</p>
            <h2 className="py-4">What I&apos;ve Built</h2>
            <div className="grid md:grid-cols-2 gap-8">
                <ProjectItem backgroundImg={Givingly} projectUrl="/Givingly"/>
                <ProjectItem backgroundImg={hastabilgi} projectUrl="/hastabilgi"/>
                <ProjectItem backgroundImg={Carshow} projectUrl="/Carshow"/>
                <ProjectItem backgroundImg={Movies} projectUrl="/Movies"/>
                <ProjectItem backgroundImg={netflix} projectUrl="/Netflix"/>
                <ProjectItem backgroundImg={nike} projectUrl="/nike"/>
                <ProjectItem backgroundImg={travling} projectUrl="/travling"/>
                <ProjectItem backgroundImg={hangman} projectUrl="/hangman"/>
            </div>
        </div>
    )
}

export default Projects