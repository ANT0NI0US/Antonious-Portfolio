import CV from "./CV";
import Links from "../../../ui/Links";
import Frontend from "./Frontend";

export default function BannerDetails() {
  return (
    <div className="flex w-full flex-col items-center justify-center space-y-3 text-center md:basis-[50%] md:items-start md:justify-start md:text-start">
      <span className="text-xl font-semibold text-primary">
        Welcome to my Portfolio
      </span>
      <h1 className="font-merienda text-4xl font-black">
        Hi I'm Antonious Nasr
      </h1>

      {/* MY JOB CAREER */}
      <Frontend />

      {/* ABOUT ME */}
      <p className="text-light">
        I am dedicated to crafting immersive and user-centric digital
        experiences. With a keen eye for design and a commitment to seamless
        functionality, I bring websites to life through a combination of
        creativity and technical expertise.
      </p>

      {/* MY CV */}
      <CV />
      {/* LINKs */}
      <Links />
    </div>
  );
}
