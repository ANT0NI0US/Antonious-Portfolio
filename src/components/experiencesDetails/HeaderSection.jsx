import { LuCalendarDays } from "react-icons/lu";
import { GrLocationPin } from "react-icons/gr";
import TextHead from "@/ui/TextHead";

export default function HeaderSection({ experience }) {
  return (
    <>
      <TextHead text={experience.title} styling="mb-0!" />
      <p className="mx-auto max-w-2xl text-center text-sm sm:text-lg">
        {experience.summary}
      </p>

      <div className="flex flex-col items-center justify-center gap-4 md:flex-row md:justify-evenly">
        <div className="text-primary flex items-center gap-1.5 text-sm">
          <LuCalendarDays />
          <span>{experience.year}</span>
        </div>
        <div className="text-primary flex items-center gap-1.5 text-sm">
          <GrLocationPin />
          <span>
            {experience.employmentType}, {experience.locationType}
          </span>
        </div>
      </div>
    </>
  );
}
