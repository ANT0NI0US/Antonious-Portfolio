import Waves from "./Waves";
import QrCode from "./QrCode";
import CreatedBy from "@/ui/CreatedBy";
import Connect from "./Connect";
import FooterLinks from "./FooterLinks";
import Logo from "@/ui/Logo";
import { aboutLinks, links } from "@/data/links";

export default function Footer() {
  return (
    <footer className="bg-secondary relative">
      {/* Waves */}
      <Waves />
      <div className="container flex flex-col justify-between gap-4 pt-4 pb-10 sm:grid sm:grid-cols-4 sm:gap-6 sm:py-10 xl:grid-cols-6">
        <div className="col-span-2 flex w-full flex-col gap-2">
          {/* MY LOGO */}
          <Logo />

          {/* FRONTEND DEVELOPER */}
          <span className="text-xl font-semibold">Frontend Developer</span>

          {/* CAPTION */}
          <p className="w-full text-sm sm:w-[70%]">
            Crafted with passion, powered by code — turning ideas into seamless,
            responsive experiences one line at a time.
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
