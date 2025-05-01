import { ToastContainer, Bounce } from "react-toastify";
import ParticlesComponent from "./features/ParticlesComponent";
import Navbar from "./features/navbar/pages/Navbar";
import Banner from "./features/banner/pages/Banner";
import About from "./features/about/pages/About";
import Skills from "./features/skills/page/Skills";
import Services from "./features/services/pages/Services";
import Projects from "./features/projects/pages/Projects";
import ContactUs from "./features/contact/pages/ContactUs";
import Qualifications from "./features/qualifications/pages/Qualifications";
import Blogs from "./features/blogs/pages/Blogs";
import Footer from "./features/footer/pages/Footer";
import "react-toastify/dist/ReactToastify.css";
import Experiences from "./features/experiences/pages/Experiences";

export default function App() {
  return (
    <>
      <ParticlesComponent />
      <Navbar />
      <main>
        <Banner />
        <About />
        <Skills />
        <Services />
        <Projects />
        <Experiences />
        <Qualifications />
        <Blogs />
        <ContactUs />
      </main>
      <Footer />
      <ToastContainer
        position="top-center"
        autoClose={3000}
        closeOnClick
        pauseOnHover
        theme="dark"
        transition={Bounce}
      />
    </>
  );
}
