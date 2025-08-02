import Banner from "@/components/home/banner";
import About from "@/components/home/about";
import TechnicalSkills from "@/components/home/technicalSkills";
import SoftSkills from "@/components/home/softSkills";
import Projects from "@/components/home/projects";
import Services from "@/components/home/services";
import Experiences from "@/components/home/experiences";
import Qualifications from "@/components/home/qualifications";
import Blogs from "@/components/home/blogs";
import Testimonials from "@/components/home/testimonials";
import ContactUs from "@/components/home/contact";

export default function Home() {
  return (
    <>
      <Banner />
      <About />
      <TechnicalSkills />
      <SoftSkills />
      <Projects />
      <Services />
      <Experiences />
      <Qualifications />
      <Blogs />
      <Testimonials />
      <ContactUs />
    </>
  );
}
