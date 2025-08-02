import Carousel from "react-multi-carousel";
import { RiDoubleQuotesL, RiDoubleQuotesR } from "react-icons/ri";
import TestimonialsDetailsModal from "./TestimonialsDetailsModal";
import { carouselResponsive } from "@/data/carouselResponsive";
import { allTestimonials } from "@/data/allTestimonials";
import "react-multi-carousel/lib/styles.css";

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
              <span className="absolute -top-3 -left-2.5 animate-pulse text-3xl">
                <RiDoubleQuotesL />
              </span>
              <span className="absolute -right-2.5 -bottom-3 animate-pulse text-3xl">
                <RiDoubleQuotesR />
              </span>
              <p className="text-sm xl:text-base">{shortDescription}</p>

              <div className="mt-auto flex items-center gap-3">
                <div className="bg-main flex size-12 items-center justify-center rounded-full capitalize">
                  {publisher.charAt(0)}
                </div>
                <div className="flex flex-col gap-1">
                  <h2 className="text-primary font-Monoton font-bold xl:text-xl">
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
