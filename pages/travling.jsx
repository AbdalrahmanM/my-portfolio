import ProjectCaseStudy from "@/components/ProjectCaseStudy";
import TravelingImage from "../public/assets/projects/travling.png";

const Traveling = () => (
  <ProjectCaseStudy
    number="08"
    title="Traveling"
    category="Travel interface"
    tagline="A destination-led responsive concept that balances vivid travel imagery with calm, direct exploration."
    description="Traveling is a responsive interface study built with React and Tailwind CSS. The project explores destination-focused visual hierarchy, flexible layouts, and reusable sections designed to keep the browsing experience clear across desktop and mobile screens."
    image={TravelingImage}
    technologies={["React", "Tailwind CSS", "Responsive Design", "Component UI"]}
    highlights={[
      { title: "Destination focus", note: "Strong imagery creates an immediate sense of place." },
      { title: "Flexible layout", note: "Responsive sections adapt without losing hierarchy." },
      { title: "Clear journey", note: "The interface keeps travel discovery simple and inviting." },
    ]}
    accent="#7dd3fc"
    secondary="#ffd166"
  />
);

export default Traveling;
