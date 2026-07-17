import ProjectCaseStudy from "@/components/ProjectCaseStudy";
import HospitalImage from "../public/assets/projects/HospitalTest.jpg";
import Screen1 from "../public/assets/projects/Screen1.jpg";
import Screen2 from "../public/assets/projects/Screen2.jpg";
import Screen3 from "../public/assets/projects/Screen3.jpg";
import Screen4 from "../public/assets/projects/Screen4.jpg";

const HospitalTest = () => (
  <ProjectCaseStudy
    number="02"
    title="Hospital Platform"
    category="Full-stack healthcare"
    tagline="A multilingual hospital experience connecting patient-facing information with a structured administration system."
    description="Test Hospital is a multilingual ASP.NET Core MVC platform designed for patients and administrators. The public experience includes department pages, doctor profiles, and news content in Arabic, Turkish, and English, while the administration area supports doctor records, homepage content, and publishing workflows across both RTL and LTR layouts."
    image={HospitalImage}
    technologies={["ASP.NET Core MVC", "JavaScript", "Bootstrap", "HTML / CSS", "RTL / LTR"]}
    highlights={[
      { title: "Three languages", note: "Arabic, Turkish, and English content share one system." },
      { title: "Admin control", note: "Doctors, homepage sections, and articles are manageable." },
      { title: "Dual direction", note: "The interface supports both RTL and LTR layouts." },
    ]}
    demoUrl="https://www.youtube.com/watch?v=ztYhnhbjvn0&ab_channel=AbdalrahmanMuder"
    accent="#7dd3fc"
    secondary="#72f2c1"
    gallery={[Screen1, Screen2, Screen3, Screen4]}
  />
);

export default HospitalTest;
