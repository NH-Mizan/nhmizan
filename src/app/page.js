import Contact from "./components/contact-section";
import Education from "./components/education-section";
import HeroSection from "./components/hero-section";
import Projects from "./components/projects";
import Services from "./components/services-section";
import SkillsSection from "./components/skill-section";
import Work from "./components/work-adventures";

export default function Home() {
  return (
    <>
      <div id="heroSection">
        <HeroSection />
      </div>

      <div id="skillsSection">
        <SkillsSection />
      </div>

      <div id="projectsSection">
        <Projects />
      </div>

      <div id="education">
        <Education />
      </div>
      <div id="work">
        <Work />
      </div>

      <div id="servicesSection">
        <Services />
      </div>
      <div id="contactSection">
        <Contact/>
      </div>
    </>
  );
}
