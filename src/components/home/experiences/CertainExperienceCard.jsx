import { SlLocationPin } from "react-icons/sl";
import { LuCalendarDays } from "react-icons/lu";
import { PiBuildings } from "react-icons/pi";
import Button from "@/ui/Button";

export default function CertainExperienceCard({ experience }) {
  const { id, title, year, location, employmentType, employmentMode, summary } =
    experience || {};
  return (
    <div className="from-main to-secondary shadow-secondary xs:ml-8 xs:w-[85%] ml-10 flex w-[80%] flex-col gap-4 rounded-md bg-gradient-to-tl from-55% to-100% p-6 shadow-md transition-all duration-300 hover:scale-[1.02] md:ml-0 md:w-[45%]">
      <div className="text-primary flex items-center gap-1.5 text-2xl sm:text-3xl lg:text-4xl">
        <PiBuildings />
        <h1 className="font-semibold">{title}</h1>
      </div>
      <div className="flex w-full flex-col items-start justify-between gap-2 xl:flex-row xl:items-center">
        <div className="xs:justify-end flex w-full items-center gap-1.5 self-end text-xs sm:text-sm xl:justify-start">
          <LuCalendarDays size={20} />
          <span className="whitespace-nowrap">{year}</span>
        </div>
        <div className="flex w-full items-center justify-end gap-1.5 self-end text-xs sm:text-sm xl:justify-end">
          <SlLocationPin size={20} />
          <span className="whitespace-wrap">
            {location} • {employmentType}, {employmentMode}
          </span>
        </div>
      </div>

      <p className="leading-7">{summary}</p>
      <Button
        href={`experiences/${id}`}
        AriaLabel="View Full Experience"
        title="View Full Experience"
      >
        View Full Experience
      </Button>
    </div>
  );
}
