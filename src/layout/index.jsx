import { Outlet } from "react-router-dom";
import ParticlesComponent from "./ParticlesComponent";
import Navbar from "./navbar";
import Footer from "./footer";

export default function Layout() {
  return (
    <>
      <ParticlesComponent />
      <Navbar />
      <main className="min-h-screen">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
