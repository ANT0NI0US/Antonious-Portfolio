import { allServices } from "@/data/allServices";
import GridContainer from "@/ui/GridContainer";
import TextHead from "@/ui/TextHead";
import { useState } from "react";
import Service from "./Service";
import Button from "@/ui/Button";

export default function Services() {
  const [showAll, setShowAll] = useState(false);

  const visibleServices = showAll ? allServices : allServices.slice(0, 6);

  return (
    <section className="container py-5 sm:py-10" id="services">
      <TextHead text="Services" />

      <Button
        onClick={() => setShowAll((prev) => !prev)}
        AriaLabel="Toggle to show all services or show less"
        Font="my-6 w-[200px]! ms-auto!"
        variation="secondary"
      >
        {showAll ? "Show Less" : "Show All Services"}
      </Button>

      <GridContainer>
        {visibleServices.map((service) => (
          <Service key={service.title} {...service} />
        ))}
      </GridContainer>
    </section>
  );
}
