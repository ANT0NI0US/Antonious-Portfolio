import Banner from "@/components/home/banner";
import About from "@/components/home/about";
import Skills from "@/components/home/skills";
import Projects from "@/components/home/projects";
import Services from "@/components/home/services";
import Experiences from "@/components/home/experiences";
import Qualifications from "@/components/home/qualifications";
import Blogs from "@/components/home/blogs";
import ContactUs from "@/components/home/contact";

export default function Home() {
  return (
    <>
      <Banner />
      <About />
      <Skills />
      <Projects />
      <Services />
      <Experiences />
      <Qualifications />
      <Blogs />
      <ContactUs />
    </>
  );
}
