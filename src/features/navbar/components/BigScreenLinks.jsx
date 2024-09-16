import { useEffect, useState } from "react";
import { links } from "./links";

export default function BigScreenLinks() {
  const [activeLink, setActiveLink] = useState("#home");

  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.3,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const sectionId = `#${entry.target.id}`;
          setActiveLink(sectionId);
          window.history.pushState(null, "", sectionId);
        }
      });
    }, options);

    sections.forEach((section) => {
      observer.observe(section);
    });

    // Cleanup observer on component unmount
    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);

  const handleLinkClick = (path) => {
    setActiveLink(path);
  };

  return (
    <div className="hidden h-full w-full flex-1 md:flex md:items-center md:justify-center">
      {links?.map((item, index) => (
        <div
          key={item.text}
          className={`${
            index === 0 ? "border-l-2" : ""
          } flexCenter h-full w-full border-r-2 border-secondary text-center text-lg font-semibold transition-all hover:bg-secondary/40 hover:font-extrabold`}
          onClick={() => handleLinkClick(item.path)}
        >
          <a
            className={`${
              activeLink === item.path
                ? "border-b-8 border-orange bg-secondary/50 text-xl font-extrabold text-orange"
                : ""
            } flexCenter h-full w-full px-7 py-3`}
            href={item.path}
          >
            {item?.text}
          </a>
        </div>
      ))}
    </div>
  );
}
