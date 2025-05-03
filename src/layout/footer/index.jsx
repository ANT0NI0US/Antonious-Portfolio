import Waves from "./Waves";
import QrCode from "./QrCode";
import CreatedBy from "./CreatedBy";
import FooterLinks from "./FooterLinks";
import Logo from "@/ui/Logo";
import Links from "@/ui/Links";
import { aboutLinks, links } from "@/data/links";

export default function Footer() {
  return (
    <footer className="bg-secondary relative">
      {/* Waves */}
      <Waves />
      <div className="container flex flex-col justify-between gap-6 py-4 sm:grid sm:grid-cols-4 sm:gap-8 sm:py-10 md:grid-cols-5">
        <div className="col-span-2 flex w-full flex-col items-center gap-4 sm:items-start">
          {/* MY LOGO */}
          <Logo />

          {/* CAPTION */}
          <p className="text-light/70 text-center text-sm sm:text-left">
            Crafted with passion, powered by code.
          </p>

          {/* LINKS */}
          <Links />
        </div>

        {/* QUICK LINKS */}
        <FooterLinks title="Quick Access" links={links} />
        {/* ABOUT ME LINKS */}
        <FooterLinks title="Get to Know Me" links={aboutLinks} />
        {/* QR CODE */}
        <QrCode />
      </div>
      {/* CREATED BY */}
      <CreatedBy />
    </footer>
  );
}
