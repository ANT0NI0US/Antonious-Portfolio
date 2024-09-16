import Logo from "../../../assets/my-logo.png";
import Links from "../../../ui/Links";
import CreatedBy from "../components/CreatedBy";
import Waves from "../components/Waves";
import MoreInformationDetails from "../components/MoreInformationDetails";

export default function Footer() {
  return (
    <footer className="relative bg-main pb-[15px]">
      {/* Waves */}
      <Waves />
      <div className="flexBetween mx-auto w-[90%] flex-col gap-4 pb-[15px] md:w-5/6 md:flex-row md:pb-[40px]">
        <div className="flex w-full flex-col items-center gap-4 md:basis-[60%] md:items-start">
          {/* MY LOGO */}
          <img src={Logo} alt="Logo" />

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
