import { useHandleNavClick } from "@/hooks/useHandleNavClick";

export default function FooterLinks({ title, links }) {
  const handleNavClick = useHandleNavClick();

  return (
    <div className="flex w-full flex-col items-center justify-center gap-1 sm:items-start sm:justify-start sm:gap-2">
      <span className="font-bold">{title}</span>
      <div className="mt-2 flex w-full flex-col gap-1.5">
        {links.map(({ path, text, icon: Icon }) => (
          <button
            key={path}
            onClick={() => handleNavClick(path)}
            className="hover:text-primary text-light/70 flex w-full cursor-pointer items-center justify-center gap-1.5 transition-all hover:ps-1 hover:font-semibold sm:justify-start"
          >
            <Icon />
            <span>{text}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
