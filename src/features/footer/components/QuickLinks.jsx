import { links } from "@/data/links";

export default function QuickLinks() {
  return (
    <div className="flex w-full flex-col items-center justify-center gap-2 sm:items-start sm:justify-start">
      <span className="font-bold">Quick Links</span>
      <div className="mt-2 flex flex-col gap-1.5">
        {links.map(({ path, text }) => (
          <a
            key={path}
            href={path}
            className="hover:text-primary text-light/70 w-fit transition-all hover:ps-1 hover:font-semibold"
          >
            {text}
          </a>
        ))}
      </div>
    </div>
  );
}
