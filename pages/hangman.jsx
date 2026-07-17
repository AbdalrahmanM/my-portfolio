import ProjectCaseStudy from "@/components/ProjectCaseStudy";
import HangmanImage from "../public/assets/projects/hangman.jpg";

const Hangman = () => (
  <ProjectCaseStudy
    number="09"
    title="Hangman Game"
    category="Browser game"
    tagline="A classic word game translated into a focused browser experience with clear feedback and approachable interaction."
    description="Hangman brings the familiar word-guessing challenge to the browser using HTML, CSS, and JavaScript. The project focuses on game-state logic, responsive feedback, and a simple interface that keeps attention on vocabulary, deduction, and progress."
    image={HangmanImage}
    technologies={["JavaScript", "HTML", "CSS", "Game Logic", "Responsive UI"]}
    highlights={[
      { title: "Game state", note: "JavaScript manages guesses, progress, and win conditions." },
      { title: "Clear feedback", note: "Each action produces immediate visual information." },
      { title: "Focused play", note: "The interface stays out of the way of the challenge." },
    ]}
    codeUrl="https://github.com/AbdalrahmanM/hangman-game"
    accent="#ffd166"
    secondary="#ff8f70"
  />
);

export default Hangman;
