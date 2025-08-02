import { HiArrowDown } from "react-icons/hi";

export default function QrCode() {
  return (
    <div className="flex w-full flex-col items-center justify-center gap-2 sm:items-start sm:justify-start">
      <span className="text-primary font-bold">Scan Me</span>
      <div className="relative flex flex-col items-center justify-center gap-4">
        <HiArrowDown className="animate-bounce-arrow text-2xl" />
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
