import SocialLinks from "@/ui/SocialLinks";
import BannerHero from "./BannerHero";
import CTAButtons from "./CTAButtons";
import Frontend from "./Frontend";

export default function Banner() {
  return (
    <section
      id="overview"
      className="container flex h-[calc(100vh-80px)] w-full flex-col items-center justify-center gap-5 text-center xl:gap-6 2xl:gap-8"
    >
      {/* LCP - FIRST PAINT */}
      <BannerHero />

      {/* MY JOB CAREER TITLE */}
      <Frontend />

      {/* SOCIAL LINKS */}
      <SocialLinks />

      {/* CALL TO ACTION BUTTONS */}
      <CTAButtons />
    </section>
  );
}
