import GridContainer from "@/ui/GridContainer";
import TextHead from "@/ui/TextHead";
import Service from "./Service";
import { allServices } from "../../../data/allServices";

export default function Services() {
  return (
    <section className="py-5 sm:py-10" id="services">
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
