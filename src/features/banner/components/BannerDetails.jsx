import CV from "./CV";
import Frontend from "./Frontend";
import Links from "@/ui/Links";

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

      {/* LINKs */}
      <Links />

      {/* MY CV */}
      <CV />
    </div>
  );
}
