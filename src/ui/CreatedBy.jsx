import { HeadsetIcon, PhoneIcon } from "@/icons";

const year = new Date().getFullYear();

export default function CreatedBy({ position = "footer" }) {
  return (
    <div className={`${position === "footer" ? "bg-main py-4" : "text-light"}`}>
      <div
        className={`${position === "footer" ? "container" : ""} flex flex-col-reverse justify-between gap-4 text-xs sm:flex-row sm:gap-6 xl:text-sm`}
      >
        <p>© {year} Antonious Nasr, All rights reserved.</p>
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-1.5">
            <HeadsetIcon />
            <span>24/7</span>
          </div>

          <div className="flex items-center gap-1.5">
            <PhoneIcon />
            <span>+20 01285551479</span>
          </div>
        </div>
      </div>
    </div>
  );
}
