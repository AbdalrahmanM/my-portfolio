import ProjectCaseStudy from "@/components/ProjectCaseStudy";
import MoviesImage from "../public/assets/projects/Movies.jpg";

const Movies = () => (
  <ProjectCaseStudy
    number="05"
    title="Movies Finder"
    category="Entertainment discovery"
    tagline="A cinematic search experience for discovering films, details, and new favorites through live movie data."
    description="Movies Finder is a movie database experience powered by The Movie Database API. It gives users a direct way to explore films and discover useful details inside a responsive, visually focused interface built with core web technologies."
    image={MoviesImage}
    technologies={["JavaScript", "TMDB API", "HTML", "CSS", "Responsive UI"]}
    highlights={[
      { title: "Live discovery", note: "Current movie data is pulled from the TMDB API." },
      { title: "Visual browsing", note: "Film imagery and information share a clear hierarchy." },
      { title: "Direct search", note: "Users can move quickly from curiosity to useful detail." },
    ]}
    demoUrl="https://movies-site-beryl.vercel.app/"
    codeUrl="https://github.com/AbdalrahmanM/MoviesSite"
    accent="#ff8f70"
    secondary="#ffd166"
  />
);

export default Movies;
