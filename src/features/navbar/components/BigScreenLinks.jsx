import { links } from "./links";

export default function BigScreenLinks({ activeLink, setActiveLink }) {
  const handleLinkClick = (path) => {
    setActiveLink(path);
  };

  return (
    <div className="hidden h-full md:flex md:items-center md:justify-center">
      {links?.map((item, index) => (
        <div
          key={item.text}
          className={`${
            index === 0 ? "border-l-2" : ""
          } flexCenter h-full w-full min-w-[125px] border-r-2 border-secondary text-center text-lg font-semibold transition-all hover:bg-secondary/40 hover:font-extrabold`}
        >
          <a
            href={item.path}
            onClick={() => handleLinkClick(item.path)}
            className={`${
              activeLink === item.path
                ? "border-b-8 border-orange bg-secondary/50 text-xl font-extrabold text-orange"
                : ""
            } flexCenter h-full w-full px-7 py-3`}
          >
            {item?.text}
          </a>
        </div>
      ))}
    </div>
  );
}
