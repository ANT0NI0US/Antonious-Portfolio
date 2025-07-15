import { useState } from "react";
import { useOutsideClick } from "@/hooks/useOutsideClick";
import { FiChevronDown, FiChevronRight } from "react-icons/fi";
import { aboutLinks } from "@/data/links";

export default function DropdownMenu({ handleLinkClick }) {
  const [openMenu, setOpenMenu] = useState(false);
  const toggleMenu = () => setOpenMenu((prev) => !prev);
  const ref = useOutsideClick(() => setOpenMenu(false));

  return (
    <div className="relative" ref={ref}>
      <button
        onClick={toggleMenu}
        className="bg-light text-secondary border-light hover:bg-light/90 active:bg-light/90 flex cursor-pointer items-center justify-between gap-1 rounded-md border px-4 py-3 font-bold whitespace-nowrap transition"
      >
        <span>Get to Know Me</span>
        {openMenu ? <FiChevronDown /> : <FiChevronRight />}
      </button>

      {openMenu && (
        <ul className="bg-main shadow-secondary absolute top-11 right-5 z-50 w-48 rounded-md shadow-md">
          {aboutLinks?.map(({ text, path, icon: Icon }) => (
            <button
              key={text}
              onClick={() => {
                handleLinkClick(path);
                setOpenMenu(false);
              }}
              className="hover:text-primary text-light flex w-full cursor-pointer items-center gap-1.5 p-3 font-semibold transition-all hover:font-bold xl:text-lg"
            >
              <Icon />
              <span>{text}</span>
            </button>
          ))}
        </ul>
      )}
    </div>
  );
}
