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
import hospitaltest from "../public/assets/projects/HospitalTest.jpg";

const projects = [
  { title: "Givingly", type: "Crowdfunding platform", tech: "Next.js / Tailwind / Firebase", image: Givingly, url: "/Givingly", span: "md:col-span-8" },
  { title: "Hospital Test", type: "Healthcare interface", tech: "React / UI System", image: hospitaltest, url: "/HospitalTest", span: "md:col-span-4" },
  { title: "Hasta Bilgi", type: "Patient information", tech: "React / Healthcare", image: hastabilgi, url: "/hastabilgi", span: "md:col-span-4" },
  { title: "Car Showcase", type: "Automotive discovery", tech: "Next.js / API", image: Carshow, url: "/Carshow", span: "md:col-span-8" },
  { title: "Movies Finder", type: "Search experience", tech: "JavaScript / API", image: Movies, url: "/Movies", span: "md:col-span-5" },
  { title: "Netflix Clone", type: "Streaming interface", tech: "React / Firebase", image: netflix, url: "/Netflix", span: "md:col-span-7" },
  { title: "Nike Store", type: "Commerce concept", tech: "React / Tailwind", image: nike, url: "/nike", span: "md:col-span-7" },
  { title: "Traveling", type: "Travel discovery", tech: "React / UI", image: travling, url: "/travling", span: "md:col-span-5" },
  { title: "Hangman", type: "Interactive game", tech: "JavaScript Game", image: hangman, url: "/hangman", span: "md:col-span-12" },
];

const Projects = () => (
  <section id="project" className="mx-auto max-w-[1240px] overflow-hidden px-4 py-16 sm:px-6 md:py-28 lg:px-8">
    <Reveal>
      <SectionSignal index="03" label="Projects / Selected Work" />
      <div className="grid gap-4 lg:grid-cols-12 lg:items-end">
        <div className="lg:col-span-8">
          <AnimatedHeading className="text-3xl leading-tight text-white sm:text-4xl md:text-5xl">
            Selected builds with product energy.
          </AnimatedHeading>
          <p className="mt-4 max-w-2xl text-sm leading-7 text-zinc-400 md:text-base md:leading-8">
            A visual index of web applications, API products, healthcare tools,
            and interface experiments. Each project opens into its own case study.
          </p>
        </div>
        <div className="bento-card flex items-end justify-between p-5 lg:col-span-4">
          <div>
            <p className="eyebrow">Project archive</p>
            <p className="mt-2 text-sm text-zinc-500">Built across modern frontend stacks</p>
          </div>
          <span className="text-5xl font-black leading-none text-spark">09</span>
        </div>
      </div>
    </Reveal>

    <SwipeHint accent="#b7f34a" label="Swipe to explore projects" />
    <div className="mt-3 flex touch-pan-x snap-x snap-mandatory gap-3 overflow-x-auto overflow-y-hidden overscroll-x-contain scroll-smooth pb-4 md:mt-10 md:grid md:touch-auto md:grid-cols-12 md:gap-4 md:overflow-visible md:pb-0">
      {projects.map((project, index) => (
        <div key={project.title} className={`w-full min-w-full shrink-0 snap-start md:min-w-0 md:snap-none ${project.span}`}>
          <ProjectItem {...project} backgroundImg={project.image} projectUrl={project.url} index={index} />
        </div>
      ))}
    </div>
  </section>
);

export default Projects;
