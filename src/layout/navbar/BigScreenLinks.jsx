import { links } from "@/data/links";
import DropdownMenu from "./DropdownMenu";

export default function BigScreenLinks({ handleNavClick }) {
  return (
    <div className="hidden h-full gap-4 md:flex md:items-center md:justify-center">
      {links?.map(({ text, path, icon: Icon }) => (
        <button
          key={text}
          onClick={() => handleNavClick(path)}
          className="hover:text-primary/70 flexCenter text-light w-full cursor-pointer gap-1.5 rounded-full p-4 font-semibold transition-all hover:font-bold xl:text-lg"
        >
          <Icon />
          <span>{text}</span>
        </button>
      ))}
      <DropdownMenu handleLinkClick={handleNavClick} />
    </div>
  );
}
