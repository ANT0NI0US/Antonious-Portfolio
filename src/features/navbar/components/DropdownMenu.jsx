import { useState } from "react";
import { useOutsideClick } from "@/hooks/useOutsideClick";
import { FiChevronDown, FiChevronRight } from "react-icons/fi";
import { aboutLinks } from "@/data/links";

export default function DropdownMenu({ handleLinkClick, activeLink }) {
  const [openMenu, setOpenMenu] = useState(false);

  const toggleMenu = () => setOpenMenu((prev) => !prev);
  const ref = useOutsideClick(() => setOpenMenu(false));

  return (
    <div className="relative" ref={ref}>
      <button
        onClick={toggleMenu}
        className="border-secondary hover:bg-secondary text-light flex cursor-pointer items-center justify-between gap-1 rounded-md border px-4 py-3 font-bold whitespace-nowrap transition hover:font-bold xl:text-lg"
      >
        <span>Get to Know Me</span>
        {openMenu ? (
          <FiChevronDown className="text-light" />
        ) : (
          <FiChevronRight className="text-light" />
        )}
      </button>

      {openMenu && (
        <ul className="bg-main shadow-secondary absolute top-11 right-5 z-50 w-48 rounded-md shadow-md">
          {aboutLinks?.map(({ text, path, icon: Icon }) => (
            <a
              key={text}
              href={path}
              onClick={() => {
                handleLinkClick(path);
                setOpenMenu(false);
              }}
              className={`${
                activeLink === path
                  ? "text-primary font-bold"
                  : "hover:text-primary/70 hover:font-bold"
              } text-light flex w-full items-center gap-1.5 p-3 font-semibold transition-all xl:text-lg`}
            >
              <Icon />
              <span>{text}</span>
            </a>
          ))}
        </ul>
      )}
    </div>
  );
}
