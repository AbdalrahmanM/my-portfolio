import ProjectCaseStudy from "@/components/ProjectCaseStudy";
import NikeImage from "../public/assets/projects/nike.png";

const Nike = () => (
  <ProjectCaseStudy
    number="07"
    title="Nike Store"
    category="Commerce interface"
    tagline="A bold product storefront exploring responsive commerce layouts, component systems, and high-energy visual presentation."
    description="Nike Store is a practice project created to deepen my experience with React, Vite, and Tailwind CSS. The interface recreates the energy of a modern product page while strengthening component composition, responsive behavior, and efficient styling workflows."
    image={NikeImage}
    technologies={["React", "Vite", "Tailwind CSS", "Component UI", "Responsive Design"]}
    highlights={[
      { title: "Product focus", note: "Strong imagery and hierarchy keep the product central." },
      { title: "Reusable UI", note: "Component-driven sections support a consistent experience." },
      { title: "Fast workflow", note: "Vite and Tailwind enable quick, precise iteration." },
    ]}
    demoUrl="https://nike-plum.vercel.app/"
    codeUrl="https://github.com/AbdalrahmanM/nike"
    accent="#72f2c1"
    secondary="#ffd166"
  />
);

export default Nike;
