import { useState } from "react";
import { FiChevronDown, FiChevronRight } from "react-icons/fi";
import { aboutLinks } from "@/data/links";

export default function DropdownMenuSmallScreen({ handleLinkClick }) {
  const [openMenu, setOpenMenu] = useState(false);

  const toggleMenu = () => setOpenMenu((prev) => !prev);

  return (
    <div>
      <button
        onClick={toggleMenu}
        className="text-light border-secondary flex w-full cursor-pointer items-center justify-between gap-1 border-b px-4 py-3 font-bold whitespace-nowrap transition hover:font-bold xl:text-lg"
      >
        <span>Get to Know Me</span>
        {openMenu ? <FiChevronDown /> : <FiChevronRight />}
      </button>

      {openMenu && (
        <ul className="bg-secondary w-full">
          {aboutLinks?.map(({ text, path, icon: Icon }) => (
            <a
              key={text}
              href={path}
              onClick={() => {
                handleLinkClick(path);
                setOpenMenu(false);
              }}
              className="hover:text-primary text-light border-main flex w-full items-center gap-1.5 border-b px-4 py-3 font-semibold transition-all hover:font-bold"
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
