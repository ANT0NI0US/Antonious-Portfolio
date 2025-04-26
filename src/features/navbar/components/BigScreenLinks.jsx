import { links } from "@/data/links";
import DropdownMenu from "./DropdownMenu";

export default function BigScreenLinks({ activeLink, setActiveLink }) {
  const handleLinkClick = (path) => {
    setActiveLink(path);
  };

  return (
    <div className="hidden h-full gap-4 md:flex md:items-center md:justify-center">
      {links?.map(({ text, path, icon: Icon }) => (
        <a
          key={text}
          href={path}
          onClick={() => handleLinkClick(path)}
          className={`${
            activeLink === path
              ? "text-primary font-bold"
              : "hover:text-primary/70 hover:font-bold"
          } flexCenter text-light w-full gap-1.5 rounded-full p-4 font-semibold transition-all xl:text-lg`}
        >
          <Icon />
          <span>{text}</span>
        </a>
      ))}
      <DropdownMenu handleLinkClick={handleLinkClick} activeLink={activeLink} />
    </div>
  );
}
