import { useHandleNavClick } from "@/hooks/useHandleNavClick";
import MainTitle from "./MainTitle";

export default function FooterLinks({ title, links }) {
  const handleNavClick = useHandleNavClick();

  return (
    <div className="flex w-full flex-col gap-1 sm:gap-2">
      <MainTitle title={title} />
      <div className="mt-2 flex w-full flex-col gap-1.5">
        {links.map(({ path, text, icon: Icon }) => (
          <button
            key={path}
            onClick={() => handleNavClick(path)}
            className="hover:text-primary text-light group flex w-fit cursor-pointer items-center justify-center gap-1.5 transition-all sm:justify-start"
          >
            <Icon />
            <span className="relative">
              {text}
              <span className="bg-primary absolute -bottom-0.5 left-0 h-px w-full origin-left scale-x-0 transition-transform duration-500 ease-in-out group-hover:scale-x-100" />
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}
