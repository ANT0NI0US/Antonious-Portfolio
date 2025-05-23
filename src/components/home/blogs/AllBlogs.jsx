import Carousel from "react-multi-carousel";
import Button from "@/ui/Button";
import { carouselResponsive } from "@/data/carouselResponsive";
import { blogs } from "@/data/blogs";
import "react-multi-carousel/lib/styles.css";

export default function AllBlogs() {
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
      {blogs?.map(({ title, img, description, post, date }) => (
        <div
          key={title}
          className="bg-main shadow-secondary relative flex min-h-[500px] flex-col overflow-hidden rounded-md text-white shadow sm:min-h-[480px] xl:min-h-[540px]"
        >
          <span className="bg-secondary absolute top-1.5 right-1.5 ms-auto rounded-md p-2 text-sm text-white shadow">
            {date}
          </span>
          <img
            src={img}
            loading="lazy"
            alt={title}
            className="h-48 w-full object-cover"
          />
          <div className="flex flex-1 flex-col gap-2 p-4">
            <h2 className="text-primary font-Monoton font-bold xl:text-xl">
              {title}
            </h2>

            <p className="flex-1 text-sm xl:text-lg">{description}</p>

            <Button
              href={post}
              Font="mt-auto!"
              target="_blank"
              AriaLabel={`Read more about the blog titled "${title}" on LinkedIn`}
              title={`Read more about the blog titled "${title}" on LinkedIn`}
            >
              Read More
            </Button>
          </div>
        </div>
      ))}
    </Carousel>
  );
}
