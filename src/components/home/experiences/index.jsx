import TextHead from "@/ui/TextHead";
import AllExperiences from "./AllExperiences";
import WebTimeLineLine from "./WebTimeLineLine";
import MobileTimeLineLine from "./MobileTimeLineLine";

export default function Experiences() {
  return (
    <section className="relative py-16" id="experiences">
      <div className="container">
        <TextHead text="Experiences" />

        <div className="relative mt-12 flex flex-col items-center">
          {/* Timeline line */}
          <WebTimeLineLine />

          {/* Mobile Timeline Line */}
          <MobileTimeLineLine />

          <AllExperiences />
        </div>
      </div>
    </section>
  );
}
