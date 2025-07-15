import { GrLocationPin } from "react-icons/gr";
import { LuCalendarDays } from "react-icons/lu";
import { PiBuildings } from "react-icons/pi";
import Button from "@/ui/Button";

export default function CertainExperienceCard({ experience }) {
  const { id, title, year, employmentType, locationType, summary } =
    experience || {};
  return (
    <div className="from-main to-secondary shadow-secondary xs:ml-8 xs:w-[85%] ml-10 flex w-[80%] flex-col gap-4 rounded-md bg-gradient-to-tl from-55% to-100% p-6 shadow-md transition-all duration-300 hover:scale-[1.02] md:ml-0 md:w-[45%]">
      <div className="flex gap-1.5">
        <PiBuildings className="text-3xl" />
        <h1 className="text-2xl font-bold">{title}</h1>
      </div>
      <div className="text-primary flex items-center justify-center gap-1.5 self-end text-sm">
        <LuCalendarDays />
        <span className="whitespace-nowrap">{year}</span>
      </div>
      <div className="text-primary flex items-center justify-center gap-1.5 self-end text-sm">
        <GrLocationPin />
        <span className="whitespace-nowrap">
          {employmentType}, {locationType}
        </span>
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
