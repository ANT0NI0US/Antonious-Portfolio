import Frontend from "./Frontend";
import Links from "@/ui/Links";
import MainLinks from "./MainLinks";

export default function BannerDetails() {
  return (
    <div className="flex h-full w-full flex-col gap-5 text-center lg:basis-3/5 lg:text-start">
      <div className="flex items-center justify-center gap-1.5 lg:mb-10! lg:items-start lg:justify-start">
        <span className="animate-glowing-text">🔴</span>

        <span className="text-light/70">Currently Working</span>
      </div>
      <h1 className="text-2xl font-semibold sm:text-3xl xl:text-4xl">
        Hello 👋,
      </h1>
      <h2 className="font-Monoton text-primary text-xl font-black tracking-widest uppercase sm:text-3xl xl:text-4xl">
        I'm Antonious Nasr
      </h2>

      {/* MY JOB CAREER */}
      <Frontend />

      {/* LINKS */}
      <Links />

      {/* MAIN LINKS */}
      <MainLinks />
    </div>
  );
}
