import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { MdClose } from "react-icons/md";

export default function ProjectImageModal({
  project,
  selectedIndex,
  setSelectedIndex,
  setIsOpen,
  isOpen,
}) {
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

  if (!isOpen) return null;

  return (
    <div className="bg-main/80 fixed inset-0 z-[99999999999] flex items-center justify-center px-4">
      {/* Close Button */}
      <button
        onClick={closeModal}
        className="absolute top-4 right-4 flex items-center justify-center rounded-full p-1"
        aria-label="Close"
        title="Close"
      >
        <MdClose size={25} />
      </button>

      {/* Left Arrow */}
      <button
        onClick={prevImage}
        className="absolute left-5 flex items-center justify-center rounded-full p-1"
        aria-label="Previous Image"
        title="Previous Image"
      >
        <IoIosArrowBack size={25} />
      </button>

      <div className="flex flex-col gap-1.5">
        {/* Image */}
        <img
          src={project.imageColleges[selectedIndex].src}
          alt={project.imageColleges[selectedIndex].alt}
          className="max-h-[90vh] max-w-full rounded-md object-contain"
        />
        <p className="text-center text-xl font-bold">
          {project.imageColleges[selectedIndex].alt}
        </p>
      </div>

      {/* Right Arrow */}
      <button
        onClick={nextImage}
        className="absolute right-5 flex items-center justify-center rounded-full p-1"
        aria-label="Next Image"
        title="Next Image"
      >
        <IoIosArrowForward size={25} />
      </button>
    </div>
  );
}
