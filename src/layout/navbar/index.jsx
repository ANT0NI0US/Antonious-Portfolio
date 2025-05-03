import { useState } from "react";
import Logo from "@/ui/Logo";
import BigScreenLinks from "./BigScreenLinks";
import ToggleSidebar from "./ToggleSidebar";
import SmallScreenLinks from "./SmallScreenLinks";
import { useHandleNavClick } from "@/hooks/useHandleNavClick";

export default function Navbar() {
  const handleNavClick = useHandleNavClick();
  const [showSidebar, setShowSidebar] = useState(false);
  const toggleSidebar = () => setShowSidebar((prev) => !prev);
  const closeSidebar = () => setShowSidebar(false);

  return (
    <>
      <nav className="bg-main text-primary shadow-secondary h-[80px] w-full shadow-md drop-shadow-md">
        <div className="flexBetween container h-full gap-1">
          {/* LOGO */}
          <Logo />

          {/* LINKS IN BIG SCREENS */}
          <BigScreenLinks handleNavClick={handleNavClick} />

          {/* TOGGLE SIDEBAR */}
          <ToggleSidebar toggleSidebar={toggleSidebar} />
        </div>
      </nav>
      {/* LINKS IN SMALL SCREENS */}
      <SmallScreenLinks
        showSidebar={showSidebar}
        closeSidebar={closeSidebar}
        handleNavClick={handleNavClick}
      />
    </>
  );
}
