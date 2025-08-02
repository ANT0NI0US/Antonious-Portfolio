import { LuCalendarDays } from "react-icons/lu";
import { SlLocationPin } from "react-icons/sl";
import TextHead from "@/ui/TextHead";

export default function HeaderSection({ experience }) {
  const {
    title,
    jobTitle,
    summary,
    year,
    location,
    employmentType,
    employmentMode,
    companyLogo,
  } = experience || {};
  return (
    <>
      <TextHead text={title} styling="mb-0!" />
      <div className="flex flex-col-reverse items-center justify-center gap-4 sm:flex-row">
        <img src={companyLogo} alt={title} className="size-20 rounded-full" />
        <h2 className="text-center text-2xl font-semibold sm:text-3xl">
          {jobTitle}
        </h2>
      </div>
      <p className="mx-auto max-w-2xl text-center text-sm sm:text-lg">
        {summary}
      </p>

      <div className="flex flex-col items-center justify-center gap-4 md:flex-row md:justify-evenly">
        <div className="flex items-center gap-1.5 text-sm">
          <LuCalendarDays />
          <span>{year}</span>
        </div>
        <div className="flex items-center gap-1.5 text-sm">
          <SlLocationPin />
          <span>
            {location} • {employmentType}, {employmentMode}
          </span>
        </div>
      </div>
    </>
  );
}
