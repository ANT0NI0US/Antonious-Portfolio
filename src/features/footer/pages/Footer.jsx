import Logo from "/logo.png";
import Waves from "../components/Waves";
import Links from "@/ui/Links";
import QuickLinks from "../components/QuickLinks";
import QrCode from "../components/QrCode";
import CreatedBy from "../components/CreatedBy";

export default function Footer() {
  return (
    <footer className="bg-main relative">
      {/* Waves */}
      <Waves />
      <div className="container flex flex-col justify-between gap-4 py-4 sm:grid sm:grid-cols-[repeat(auto-fill,minmax(250px,1fr))] sm:py-10">
        <div className="col-span-2 flex w-full flex-col items-center gap-4 sm:items-start">
          {/* MY LOGO */}
          <img
            loading="lazy"
            src={Logo}
            alt="Logo"
            className="w-32 bg-contain bg-center"
          />

          {/* CAPTION */}
          <p className="text-light/70 text-center text-sm sm:text-left">
            Crafted with passion, powered by code.
          </p>

          {/* LINKS */}
          <Links />
        </div>

        {/* QUICK LINKS */}
        <QuickLinks />
        {/* QR CODE */}
        <QrCode />
      </div>
      {/* CREATED BY */}
      <CreatedBy />
    </footer>
  );
}
