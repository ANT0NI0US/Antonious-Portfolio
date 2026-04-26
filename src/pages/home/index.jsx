import About from "@/components/home/about";
import Banner from "@/components/home/banner";
import Blogs from "@/components/home/blogs";
import ContactUs from "@/components/home/contact";
import Experiences from "@/components/home/experiences";
import ProjectIdea from "@/components/home/projectIdea";
import Projects from "@/components/home/projects";
import Qualifications from "@/components/home/qualifications";
import Services from "@/components/home/services";
import SoftSkills from "@/components/home/softSkills";
import TechnicalSkills from "@/components/home/technicalSkills";
import Testimonials from "@/components/home/testimonials";

export default function Home() {
  return (
    <>
      <Banner />
      <About />
      <Services />
      <Projects />
      <TechnicalSkills />
      <SoftSkills />
      <Testimonials />
      <Experiences />
      <Qualifications />
      <Blogs />
      <ProjectIdea />
      <ContactUs />
    </>
  );
}
