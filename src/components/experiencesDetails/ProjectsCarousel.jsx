import Carousel from "react-multi-carousel";
import { carouselResponsive } from "@/data/carouselResponsive";
import Button from "@/ui/Button";

export default function ProjectsCarousel({ projects }) {
  return (
    <div className="flex flex-col gap-3">
      <h3 className="text-primary text-lg font-bold">Projects</h3>
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
        {projects.map(({ id, title, imgUrl, description }) => (
          <div
            key={title}
            className="bg-secondary relative flex min-h-[500px] flex-col gap-3 overflow-hidden rounded-md p-4 text-white sm:min-h-[440px] xl:min-h-[540px]"
          >
            <img
              src={imgUrl}
              loading="lazy"
              alt={title}
              className="h-48 w-full rounded-md object-cover"
            />
            <div className="flex flex-1 flex-col gap-2">
              <h2 className="text-primary font-Monoton font-bold xl:text-xl">
                {title}
              </h2>
              <p className="text-sm xl:text-lg">
                {description.length > 200
                  ? description.slice(0, 197) + "..."
                  : description}
              </p>
            </div>

            <Button
              href={`/projects/${id}`}
              variation="secondary"
              AriaLabel={`More details about ${title}`}
            >
              View Details
            </Button>
          </div>
        ))}
      </Carousel>
    </div>
  );
}
