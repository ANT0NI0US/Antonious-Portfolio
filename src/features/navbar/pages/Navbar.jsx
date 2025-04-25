import { useState } from "react";
import Logo from "@/ui/Logo";
import BigScreenLinks from "../components/BigScreenLinks";
import ToggleSidebar from "../components/ToggleSidebar";
import SmallScreenLinks from "../components/SmallScreenLinks";

export default function Navbar() {
  const [activeLink, setActiveLink] = useState("#home");

  const [showSidebar, setShowSidebar] = useState(false);
  const toggleSidebar = () => setShowSidebar((prev) => !prev);
  const closeSidebar = () => setShowSidebar(false);

  return (
    <>
      <div className="bg-main text-primary shadow-secondary h-[80px] w-full shadow-md drop-shadow-md">
        <div className="flexBetween container h-full gap-1">
          {/* LOGO */}
          <Logo />

          {/* LINKS IN BIG SCREENS */}
          <BigScreenLinks
            activeLink={activeLink}
            setActiveLink={setActiveLink}
          />

          {/* TOGGLE SIDEBAR */}
          <ToggleSidebar toggleSidebar={toggleSidebar} />
        </div>
      </div>
      {/* LINKS IN SMALL SCREENS */}
      <SmallScreenLinks
        showSidebar={showSidebar}
        closeSidebar={closeSidebar}
        activeLink={activeLink}
        setActiveLink={setActiveLink}
      />
    </>
  );
}
