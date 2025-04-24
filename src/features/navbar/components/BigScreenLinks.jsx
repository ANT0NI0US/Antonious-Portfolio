import { links } from "@/data/links";

export default function BigScreenLinks({ activeLink, setActiveLink }) {
  const handleLinkClick = (path) => {
    setActiveLink(path);
  };

  return (
    <div className="hidden h-full gap-1.5 md:flex md:items-center md:justify-center">
      {links?.map((item) => (
        <a
          key={item.text}
          href={item.path}
          onClick={() => handleLinkClick(item.path)}
          className={`${
            activeLink === item.path
              ? "bg-secondary font-bold text-white xl:text-xl"
              : "hover:bg-secondary/70 hover:font-bold"
          } flexCenter w-full rounded-full p-4 text-sm font-semibold transition-all xl:text-xl`}
        >
          {item?.text}
        </a>
      ))}
    </div>
  );
}
