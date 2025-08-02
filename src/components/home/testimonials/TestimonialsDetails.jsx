import { PiBuildings } from "react-icons/pi";
import Button from "@/ui/Button";

export default function TestimonialsDetails({
  testimonialsDetails,
  onCloseModal,
}) {
  const { publisher, position, fullDescription, at } = testimonialsDetails;

  return (
    <div>
      <div className="rounded-tl-lg rounded-tr-lg border-b py-6 ps-5 font-bold tracking-wider uppercase">
        <h1 className="text-xl sm:text-2xl">
          {publisher} <span className="text-xs">( {position} )</span>
        </h1>
      </div>
      <div className="bg-secondary flex max-h-[calc(80vh-150px)] min-h-[26vh] flex-col gap-4 overflow-auto p-5 md:gap-5 md:p-[20px] md:pb-[30px]">
        <ul className="flex list-inside list-disc flex-col gap-2 text-sm leading-relaxed">
          {fullDescription.map((para, idx) => (
            <li key={idx}>{para}</li>
          ))}
        </ul>
        <div className="flex items-center gap-1">
          <PiBuildings className="text-3xl" />
          <span>{at}</span>
        </div>
      </div>
      <div className="rounded-br-lg rounded-bl-lg border-t px-4 py-6">
        <div className="ms-auto w-full sm:w-[30%]">
          <Button AriaLabel="Cancel" variation="danger" onClick={onCloseModal}>
            Cancel
          </Button>
        </div>
      </div>
    </div>
  );
}
