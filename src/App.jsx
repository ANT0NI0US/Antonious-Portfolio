import { ToastContainer, Bounce } from "react-toastify";
import Navbar from "./features/navbar/pages/Navbar";
import Banner from "./features/banner/pages/Banner";
import About from "./features/about/pages/About";
import Projects from "./features/projects/pages/Projects";
import ContactUs from "./features/contact/pages/ContactUs";
import Footer from "./features/footer/pages/Footer";
import "react-toastify/dist/ReactToastify.css";

export default function App() {
  return (
    <>
      <Navbar />
      <Banner />
      <About />
      <Projects />
      <ContactUs />
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
