import { LuCalendarDays } from "react-icons/lu";

export default function QualificationItem({ date, children }) {
  return (
    <div className="border-secondary from-main to-secondary relative flex transform flex-col gap-1.5 rounded-md border-2 border-t-0 bg-gradient-to-tr from-55% to-100% p-4 transition-all hover:scale-[1.02]">
      <div className="text-primary flex items-center justify-center gap-1.5 self-end text-sm">
        <LuCalendarDays />
        <span className="whitespace-nowrap">{date}</span>
      </div>
      {children}
    </div>
  );
}
