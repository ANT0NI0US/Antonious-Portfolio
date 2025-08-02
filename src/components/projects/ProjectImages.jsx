import { useState } from "react";
import Carousel from "react-multi-carousel";
import ProjectImageModal from "./ProjectImageModal";
import { carouselResponsive } from "@/data/carouselResponsive";

export default function ProjectImages({ project }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const openModal = (index) => {
    setSelectedIndex(index);
    setIsOpen(true);
  };

  return (
    project?.imageColleges && (
      <>
        <div className="shadow-secondary from-main to-secondary relative flex flex-col gap-4 rounded-md bg-gradient-to-t from-20% to-100% p-4 shadow-md lg:col-span-5">
          <h3 className="text-primary text-2xl font-bold">Project Gallery</h3>
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
            {project?.imageColleges?.map(({ src, alt }, index) => (
              <div key={alt} className="flex flex-col gap-1">
                <img
                  src={src}
                  alt={alt}
                  className="h-[200px] cursor-pointer rounded-md object-contain object-center"
                  onClick={() => openModal(index)}
                />
                <span className="text-center font-medium">{alt}</span>
              </div>
            ))}
          </Carousel>
        </div>
        {/* Fullscreen Modal */}
        <ProjectImageModal
          project={project}
          selectedIndex={selectedIndex}
          setSelectedIndex={setSelectedIndex}
          setIsOpen={setIsOpen}
          isOpen={isOpen}
        />
      </>
    )
  );
}
