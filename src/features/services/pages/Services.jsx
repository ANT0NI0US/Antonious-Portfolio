import AllCards from "../components/AllCards";
import TextHead from "@/ui/TextHead";

export default function Services() {
  return (
    <section
      className="lg-h-screen bg-secondary py-[40px] lg:py-[100px]"
      id="services"
    >
      <div className="container space-y-5 xl:space-y-8">
        <TextHead text="Services" />

        <AllCards />
      </div>
    </section>
  );
}
