import Logo from "/logo.png";
import CreatedBy from "../components/CreatedBy";
import Waves from "../components/Waves";
import Links from "@/ui/Links";

export default function Footer() {
  return (
    <footer className="relative bg-main pb-[15px]">
      {/* Waves */}
      <Waves />
      <div className="flexBetween container flex-col gap-4 py-[15px] md:flex-row md:py-[40px]">
        <div className="flex w-full flex-col items-center gap-4 md:basis-[60%] md:items-start">
          {/* MY LOGO */}
          <img
            loading="lazy"
            src={Logo}
            alt="Logo"
            className="w-44 bg-contain bg-center"
          />
        </div>

        {/* LINKS */}
        <Links />
      </div>
      {/* CREATED BY */}
      <CreatedBy />
    </footer>
  );
}
