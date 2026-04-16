import { HiArrowDown } from "react-icons/hi";
import MainTitle from "./MainTitle";

export default function QrCode() {
  return (
    <div className="flex w-full flex-col gap-1 sm:gap-2">
      <MainTitle title="Scan Me" />
      <div className="relative mt-9 w-fit">
        <HiArrowDown className="animate-bounce-arrow absolute -top-9 left-1/2 -translate-x-1/2 text-2xl" />
        <img
          src="https://i.ibb.co/VWs0KL9M/Antonious-Qr-Code.png"
          loading="lazy"
          alt="Antonious Nasr Bio"
          className="size-16 sm:size-24"
        />
      </div>
    </div>
  );
}
