import ProjectCaseStudy from "@/components/ProjectCaseStudy";
import NetflixImage from "../public/assets/projects/netflix.jpg";

const Netflix = () => (
  <ProjectCaseStudy
    number="06"
    title="Netflix Clone"
    category="Streaming interface"
    tagline="A familiar streaming experience rebuilt around responsive browsing, authentication, and personalized movie lists."
    description="This Netflix-inspired application recreates the core rhythm of a modern streaming product. Users can browse popular and upcoming titles, create an account, sign in, save favorites, and return to a personalized list through a React and Firebase architecture."
    image={NetflixImage}
    technologies={["React", "Firebase", "Tailwind CSS", "TMDB API", "Authentication"]}
    highlights={[
      { title: "Personal library", note: "Authenticated users can save and revisit favorite films." },
      { title: "Streaming rhythm", note: "Content rails make broad catalogs easy to explore." },
      { title: "Account flow", note: "Firebase supports sign-in and persistent user data." },
    ]}
    demoUrl="https://netflix-gamma-snowy.vercel.app/"
    codeUrl="https://github.com/AbdalrahmanM/netflix"
    accent="#ff8f70"
    secondary="#7dd3fc"
  />
);

export default Netflix;
