import CV from "./CV";
import Links from "../../../ui/Links";
import Frontend from "./Frontend";

export default function BannerDetails() {
  return (
    <div className="flexCenter h-full w-full flex-col space-y-5 text-center">
      <span className="text-xl font-semibold text-primary sm:text-2xl">
        Welcome to my Portfolio
      </span>
      <h1
        className="font-Monoton text-3xl font-black uppercase sm:text-4xl md:text-5xl"
        style={{ wordSpacing: "15px" }}
      >
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
      {/* LINKs */}
      <Links />

      {/* MY CV */}
      <CV />
    </div>
  );
}
