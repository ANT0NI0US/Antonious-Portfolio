import { useLocation, useNavigate } from "react-router-dom";

export const useHandleNavClick = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleNavClick = (sectionIdWithHash) => {
    const sectionId = sectionIdWithHash.replace(/^#/, "");

    if (location.pathname === "/") {
      const section = document.getElementById(sectionId);
      section?.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate("/");
      setTimeout(() => {
        const section = document.getElementById(sectionId);
        section?.scrollIntoView({ behavior: "smooth" });
      }, 300);
    }
  };

  return handleNavClick;
};
