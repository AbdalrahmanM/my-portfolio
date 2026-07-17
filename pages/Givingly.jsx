import ProjectCaseStudy from "@/components/ProjectCaseStudy";
import GivinglyImage from "../public/assets/projects/Givingly.jpg";

const Givingly = () => (
  <ProjectCaseStudy
    number="01"
    title="Givingly"
    category="Crowdfunding platform"
    tagline="A community-first giving experience that turns campaign discovery and support into one focused product journey."
    description="Built as the Re:Coded graduation project, Givingly is a dynamic crowdfunding platform designed around clarity, trust, and accessible campaign management. The experience helps people discover causes, create campaigns, and support meaningful projects through a responsive interface backed by Firebase and structured application state."
    image={GivinglyImage}
    technologies={["Next.js", "Tailwind CSS", "Firebase", "Redux", "Responsive UI"]}
    highlights={[
      { title: "Cause discovery", note: "Campaigns stay easy to scan, understand, and support." },
      { title: "Connected flow", note: "Firebase powers an integrated product experience." },
      { title: "Responsive system", note: "The interface adapts cleanly across screen sizes." },
    ]}
    demoUrl="https://capstone-team-3-final.vercel.app/en%20SON%20L%C4%B0NK"
    codeUrl="https://github.com/202303-PRM-TR-FEW/capstone-template-team-3"
    accent="#ffd166"
    secondary="#72f2c1"
  />
);

export default Givingly;
