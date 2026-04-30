import TextHead from "@/ui/TextHead";
import AllExperiences from "./AllExperiences";
import WebTimeLineLine from "./WebTimeLineLine";

export default function Experiences() {
  return (
    <section className="relative container py-16" id="experiences">
      <TextHead text="Experiences" />

      <div className="relative mt-12 flex flex-col items-center">
        {/* Timeline line */}
        <WebTimeLineLine />

        <AllExperiences />
      </div>
    </section>
  );
}
