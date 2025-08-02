import { Link } from "react-router-dom";
import TitleSectionHead from "@/ui/TitleSectionHead";

export default function TechnologiesUsed({ toolkit }) {
  return (
    <div className="shadow-secondary from-main to-secondary relative flex flex-col gap-4 self-start rounded-md bg-gradient-to-t from-20% to-100% p-4 shadow-md lg:col-span-3">
      <TitleSectionHead text="Technologies Used" />
      <div className="grid grid-cols-3 gap-6">
        {toolkit?.map((el, index) => (
          <Link
            to={el?.url}
            target="_blank"
            className="flex flex-col items-center justify-center gap-2 text-center"
          >
            <img
              loading="lazy"
              title={el.alt}
              key={index}
              src={el.src}
              alt={el.alt}
              className="h-[50px] w-[50px] object-contain object-center"
            />
            <span>{el.alt}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}
