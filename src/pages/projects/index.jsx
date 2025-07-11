import { carouselResponsive } from "@/data/carouselResponsive";
import { smartGateProjects } from "@/data/smartGateProjects";
import TextHead from "@/ui/TextHead";
import { useState } from "react";
import { MdClose } from "react-icons/md";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import Carousel from "react-multi-carousel";
import { Link, useParams } from "react-router-dom";
import { FaRegImage } from "react-icons/fa";

export default function Projects() {
  const { id } = useParams();
  const [isOpen, setIsOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const openModal = (index) => {
    setSelectedIndex(index);
    setIsOpen(true);
  };

  const closeModal = () => setIsOpen(false);

  const nextImage = () => {
    setSelectedIndex((prev) =>
      prev === project.imageColleges.length - 1 ? 0 : prev + 1,
    );
  };

  const prevImage = () => {
    setSelectedIndex((prev) =>
      prev === 0 ? project.imageColleges.length - 1 : prev - 1,
    );
  };
  const project = smartGateProjects.find((p) => p.id === Number(id));

  if (!project)
    return (
      <div className="text-primary pt-20 text-center text-lg">
        Project not found
      </div>
    );
  return (
    <div className="container flex flex-col gap-4 pt-10 pb-30">
      <TextHead text={project?.title} styling="mb-0!" />
      <p className="mx-auto max-w-3xl text-center text-sm sm:text-lg">
        {project?.description}
      </p>
      <img
        className="relative max-h-[500px] rounded-md object-fill"
        src={project?.imgUrl}
        alt={project?.title}
      />
      {/* PROJECT PREVIEW */}
      <div
        className={`shadow-secondary from-main to-secondary relative flex flex-col gap-4 rounded-md bg-gradient-to-t from-20% to-100% p-4 shadow-md`}
      >
        <h3 className="text-primary text-2xl font-bold">Project Overview</h3>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div>
            <h4 className="text-primary mb-1.5 text-lg font-semibold">
              Key Objectives
            </h4>
            <ul className="flex list-inside list-disc flex-col gap-1">
              {project?.keyObjectives?.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-primary mb-1.5 text-lg font-semibold">
              Challenges Solved
            </h4>
            <ul className="flex list-inside list-disc flex-col gap-1">
              {project?.challengesSolved?.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-primary mb-1.5 text-lg font-semibold">
              Role & Responsibilities
            </h4>
            <ul className="flex list-inside list-disc flex-col gap-1">
              {project?.responsibilities?.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-primary mb-1.5 text-lg font-semibold">
              Key Outcomes
            </h4>
            <ul className="flex list-inside list-disc flex-col gap-1">
              {project?.keyOutcomes?.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-8">
        {/* KEY FEATURES */}
        <div
          className={`shadow-secondary from-main to-secondary relative flex flex-col gap-4 rounded-md bg-gradient-to-t from-20% to-100% p-4 shadow-md lg:col-span-5`}
        >
          <h3 className="text-primary text-2xl font-bold">Key Features</h3>
          <div className="flex flex-col gap-4 sm:grid sm:grid-cols-[repeat(auto-fill,minmax(300px,1fr))]">
            {project?.keyFeatures?.map((feature, index) => (
              <div
                key={index}
                className="bg-main border-primary flex flex-col gap-1 rounded-md border p-4"
              >
                <h4 className="text-primary text-lg font-semibold">
                  {feature.title}
                </h4>
                <p>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
        {/* TECHNOLOGIES USED */}
        <div
          className={`shadow-secondary from-main to-secondary relative flex flex-col gap-4 self-start rounded-md bg-gradient-to-t from-20% to-100% p-4 shadow-md lg:col-span-3`}
        >
          <h3 className="text-primary text-2xl font-bold">Technologies Used</h3>
          <div className="flex flex-wrap gap-6">
            {project?.toolkit?.map((el, index) => (
              <Link to={el?.url} target="_blank">
                <img
                  loading="lazy"
                  title={el.alt}
                  key={index}
                  src={el.src}
                  alt={el.alt}
                  className="h-[50px] w-[50px] object-contain object-center"
                />
              </Link>
            ))}
          </div>
        </div>
      </div>
      {/* IMAGE COLLEGE */}
      {project?.imageColleges && (
        <>
          <div
            className={`shadow-secondary from-main to-secondary relative flex flex-col gap-4 rounded-md bg-gradient-to-t from-20% to-100% p-4 shadow-md lg:col-span-5`}
          >
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
                  <span className="text-primary text-center font-medium">
                    {alt}
                  </span>
                </div>
              ))}
            </Carousel>
          </div>
          {/* Fullscreen Modal */}
          {isOpen && (
            <div className="bg-main/80 fixed inset-0 z-[99999999999] flex items-center justify-center px-4">
              {/* Close Button */}
              <button
                onClick={closeModal}
                className="text-primary bg-main absolute top-4 right-4 flex items-center justify-center rounded-full p-1"
                aria-label="Close"
                title="Close"
              >
                <MdClose size={25} />
              </button>

              {/* Left Arrow */}
              <button
                onClick={prevImage}
                className="text-primary bg-main absolute left-5 flex items-center justify-center rounded-full p-1"
                aria-label="Previous Image"
                title="Previous Image"
              >
                <IoIosArrowBack size={25} />
              </button>

              <div className="flex flex-col gap-1">
                {/* Image */}
                <img
                  src={project.imageColleges[selectedIndex].src}
                  alt={project.imageColleges[selectedIndex].alt}
                  className="max-h-[90vh] max-w-full rounded-md object-contain"
                />
                <p className="text-primary text-center text-xl font-bold">
                  {project.imageColleges[selectedIndex].alt}
                </p>
              </div>

              {/* Right Arrow */}
              <button
                onClick={nextImage}
                className="text-primary bg-main absolute right-5 flex items-center justify-center rounded-full p-1"
                aria-label="Next Image"
                title="Next Image"
              >
                <IoIosArrowForward size={25} />
              </button>
            </div>
          )}
        </>
      )}
    </div>
  );
}
