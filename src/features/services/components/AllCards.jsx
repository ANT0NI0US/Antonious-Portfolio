import Carousel from "react-multi-carousel";
import { AllServices } from "./AllServices";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 4,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

export default function AllCards() {
  return (
    <Carousel
      responsive={responsive}
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
      {AllServices?.map((item) => (
        <div
          key={item?.title}
          className="flex min-h-[280px] flex-col gap-2 rounded-md bg-main px-3 py-4 text-center text-white shadow-md hover:shadow-white  xl:min-h-[300px]"
        >
          <div className="mx-auto text-6xl text-orange xl:text-7xl">
            {item?.icon}
          </div>

          <h2 className="text-lg font-bold xl:text-xl">{item?.title}</h2>

          <p className="xl:text-lg">{item?.description}</p>
        </div>
      ))}
    </Carousel>
  );
}
