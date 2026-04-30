import { allTestimonials } from "@/data/allTestimonials";
import { carouselResponsive } from "@/data/carouselResponsive";
import { QuoteIcon } from "@/icons";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import TestimonialsDetailsModal from "./TestimonialsDetailsModal";

const getShortDescription = (text, maxLength = 150) => {
  return text.length > maxLength
    ? text.slice(0, maxLength).trim() + "..."
    : text;
};

export default function AllTestimonials() {
  return (
    <Carousel
      responsive={carouselResponsive}
      infinite
      autoPlay
      autoPlaySpeed={3000}
      arrows
      draggable
      pauseOnHover
      showDots={false}
      customTransition="transform 1s ease-in-out"
      keyBoardControl={false}
      minimumTouchDrag={80}
      transitionDuration={1000}
      itemClass="p-2"
    >
      {allTestimonials?.map(
        ({ publisher, fullDescription, position, at }, index) => {
          const shortDescription = getShortDescription(fullDescription[0]);

          return (
            <div
              key={index}
              className="bg-secondary relative flex flex-col gap-3 rounded-md px-4 py-5"
            >
              <span className="absolute -top-1.5 -left-1.5 animate-pulse">
                <QuoteIcon className="size-5 rotate-180" fill="currentColor" />
              </span>
              <span className="absolute -right-1.5 -bottom-1.5 animate-pulse">
                <QuoteIcon className="size-5" fill="currentColor" />
              </span>
              <p className="text-sm xl:text-base">{shortDescription}</p>

              <div className="mt-auto flex items-center gap-3">
                <div className="bg-main flex size-12 items-center justify-center rounded-full capitalize">
                  {publisher.charAt(0)}
                </div>
                <div className="flex flex-col gap-1">
                  <h2 className="text-primary font-bold xl:text-xl">
                    {publisher}
                  </h2>
                  {position && <p className="text-xs">{position}</p>}
                </div>
              </div>
              <TestimonialsDetailsModal
                testimonialsDetails={{
                  publisher,
                  position,
                  fullDescription,
                  at,
                }}
              />
            </div>
          );
        },
      )}
    </Carousel>
  );
}
