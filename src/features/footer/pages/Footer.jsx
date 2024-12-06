import CreatedBy from "../components/CreatedBy";
import Waves from "../components/Waves";
import MoreInformationDetails from "../components/MoreInformationDetails";
import Logo from "/logo.png";
import Links from "@/ui/Links";

export default function Footer() {
  return (
    <footer className="relative bg-main pb-[15px]">
      {/* Waves */}
      <Waves />
      <div className="flexBetween mx-auto w-[90%] flex-col gap-4 pb-[15px] md:w-5/6 md:flex-row md:pb-[40px]">
        <div className="flex w-full flex-col items-center gap-4 md:basis-[60%] md:items-start">
          {/* MY LOGO */}
          <img
            loading="lazy"
            src={Logo}
            alt="Logo"
            className="w-44 bg-contain bg-center"
          />

          {/* LINKS */}
          <Links />
        </div>
        {/* MORE INFORMATION DETAILS */}
        <MoreInformationDetails />
      </div>
      {/* CREATED BY */}
      <CreatedBy />
    </footer>
  );
}
