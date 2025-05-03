import { Outlet } from "react-router-dom";
import ParticlesComponent from "./ParticlesComponent";
import { ToastContainer, Bounce } from "react-toastify";
import Navbar from "./navbar";
import Footer from "./footer";
import "react-toastify/dist/ReactToastify.css";

export default function Layout() {
  return (
    <>
      <ParticlesComponent />
      <Navbar />
      <main className="min-h-screen">
        <Outlet />
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
