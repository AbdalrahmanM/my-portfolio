import ProjectCaseStudy from "@/components/ProjectCaseStudy";
import PatientImage from "../public/assets/projects/hastabilgi.png";
import PatientView1 from "../public/assets/hastabilgi1.png";
import PatientView2 from "../public/assets/hastabilgi2.png";

const HastaBilgi = () => (
  <ProjectCaseStudy
    number="03"
    title="Patient Information System"
    category="Healthcare records"
    tagline="A desktop patient-record workflow designed for faster entry, document storage, search, and retrieval."
    description="This patient information management application uses Python and Tkinter to support structured record entry, document scanning, and database-backed retrieval. Scanned file locations are stored automatically, while an advanced search interface helps staff find and display patient information with greater speed and accuracy."
    image={PatientImage}
    technologies={["Python", "Tkinter", "SQLite", "Document Scanning", "Search Workflow"]}
    highlights={[
      { title: "Structured entry", note: "Patient records are captured through a focused desktop UI." },
      { title: "Document storage", note: "Scanned file paths are recorded for reliable retrieval." },
      { title: "Fast search", note: "Query tools reduce the time needed to locate patient data." },
    ]}
    accent="#72f2c1"
    secondary="#7dd3fc"
    gallery={[PatientView1, PatientView2]}
  />
);

export default HastaBilgi;
