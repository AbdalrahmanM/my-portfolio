import ProjectCaseStudy from "@/components/ProjectCaseStudy";
import CarshowImage from "../public/assets/projects/Carshow.jpg";

const Carshow = () => (
  <ProjectCaseStudy
    number="04"
    title="Car Showcase"
    category="Automotive discovery"
    tagline="A polished vehicle discovery interface that makes exploring manufacturers and models feel fast and effortless."
    description="Car Showcase is a responsive web application for exploring a wide range of vehicles from different manufacturers. Its product-focused interface helps users discover and compare models through a clear visual hierarchy, API-driven content, and a fast Next.js experience."
    image={CarshowImage}
    technologies={["TypeScript", "Next.js", "Tailwind CSS", "REST API", "Responsive UI"]}
    highlights={[
      { title: "Vehicle discovery", note: "A focused browsing flow across makes and models." },
      { title: "API-driven data", note: "Dynamic automotive content stays structured and useful." },
      { title: "Fast interface", note: "Next.js keeps navigation and rendering responsive." },
    ]}
    demoUrl="https://car-showcase-ashen-five.vercel.app/"
    codeUrl="https://github.com/AbdalrahmanM/car_showcase"
    accent="#7dd3fc"
    secondary="#72f2c1"
  />
);

export default Carshow;
