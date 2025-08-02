import Waves from "./Waves";
import QrCode from "./QrCode";
import CreatedBy from "./CreatedBy";
import Connect from "./Connect";
import FooterLinks from "./FooterLinks";
import Logo from "@/ui/Logo";
import { aboutLinks, links } from "@/data/links";

export default function Footer() {
  return (
    <footer className="bg-secondary relative">
      {/* Waves */}
      <Waves />
      <div className="container flex flex-col justify-between gap-4 py-4 sm:grid sm:grid-cols-4 sm:gap-6 sm:py-10 lg:grid-cols-6">
        <div className="col-span-2 flex w-full flex-col items-center gap-2 sm:items-start">
          {/* MY LOGO */}
          <Logo />

          {/* FRONTEND DEVELOPER */}
          <span className="text-xl font-semibold">Frontend Developer</span>

          {/* CAPTION */}
          <p className="text-center text-sm sm:text-left">
            Crafted with passion, powered by code.
          </p>
        </div>

        {/* QUICK LINKS */}
        <FooterLinks title="Quick Access" links={links} />
        {/* ABOUT ME LINKS */}
        <FooterLinks title="Get to Know Me" links={aboutLinks} />
        {/* QR CODE */}
        <QrCode />
        {/* CONNECT */}
        <Connect />
      </div>
      {/* CREATED BY */}
      <CreatedBy />
    </footer>
  );
}
