import { links } from "./links";

export default function BigScreenLinks({ activeLink, setActiveLink }) {
  const handleLinkClick = (path) => {
    setActiveLink(path);
  };

  return (
    <div className="hidden h-full gap-1 md:flex md:items-center md:justify-center">
      {links?.map((item) => (
        <div
          key={item.text}
          className={`flexCenter h-full w-full min-w-[100px] text-center font-semibold transition-all hover:font-extrabold xl:min-w-[120px] xl:text-xl`}
        >
          <a
            href={item.path}
            onClick={() => handleLinkClick(item.path)}
            className={`${
              activeLink === item.path
                ? "text-lg font-extrabold text-white xl:text-2xl"
                : ""
            } flexCenter h-full w-full`}
          >
            {item?.text}
          </a>
        </div>
      ))}
    </div>
  );
}
