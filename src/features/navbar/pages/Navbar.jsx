import { useState } from "react";
import Logo from "../components/Logo";
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
      <div className="fixed top-0 z-30 h-[80px] w-full bg-main text-primary shadow-lg shadow-black drop-shadow-2xl">
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
