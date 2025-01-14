import { SiMinutemailer } from "react-icons/si";
import CV from "./CV";
import Frontend from "./Frontend";
import Button from "@/ui/Button";
import Links from "@/ui/Links";

export default function BannerDetails() {
  return (
    <div className="h-full w-full flex-col space-y-5 text-center lg:basis-2/5 lg:text-start">
      <p className="text-xl font-semibold text-primary sm:text-2xl xl:text-3xl">
        Welcome to my Portfolio
      </p>
      <h1 className="font-Monoton text-xl font-black uppercase tracking-widest xl:text-2xl">
        Hi I'm Antonious Nasr
      </h1>

      {/* MY JOB CAREER */}
      <Frontend />

      {/* LINKs */}
      <Links />

      <div className="mx-auto flex w-full flex-col gap-3 xs:w-[300px] xs:flex-row lg:mx-0 xl:w-[400px] xl:gap-4">
        {/* MY CV */}
        <CV />

        {/* CONTACT */}
        <Button href="#contact" variation="secondary" AriaLabel="Contact me">
          <SiMinutemailer />
          <p>Contact Me</p>
        </Button>
      </div>
    </div>
  );
}
