import { LuCalendarDays } from "react-icons/lu";

export default function QualificationItem({ date, children }) {
  return (
    <div className="border-secondary flex flex-col gap-1.5 rounded-md border-4 p-4 transition-all hover:scale-[102%]">
      <div className="text-primary flex items-center justify-center gap-1.5 self-end text-sm">
        <LuCalendarDays />
        <span className="whitespace-nowrap">{date}</span>
      </div>
      {children}
    </div>
  );
}
