import GridContainer from "@/ui/GridContainer";
import TextHead from "@/ui/TextHead";
import Service from "../components/Service";
import { allServices } from "../components/allServices";

export default function Services() {
  return (
    <section className="lg-h-screen" id="services">
      <div className="container">
        <TextHead text="Services" />

        {/* ALL SERVICES */}
        <GridContainer>
          {allServices?.map((service) => (
            <Service key={service.title} {...service} />
          ))}
        </GridContainer>
      </div>
    </section>
  );
}
