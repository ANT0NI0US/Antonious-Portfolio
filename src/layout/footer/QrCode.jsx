import { ArrowDownIcon } from "@/icons";
import MainTitle from "./MainTitle";

export default function QrCode() {
  return (
    <div className="flex w-full flex-col gap-1 sm:gap-2">
      <MainTitle title="Scan Me" />
      <div className="relative mt-9 w-fit">
        <ArrowDownIcon className="animate-bounce-arrow absolute -top-9 left-1/2 size-6 -translate-x-1/2" />
        <img
          src="https://i.ibb.co/VWs0KL9M/Antonious-Qr-Code.png"
          loading="lazy"
          decoding="async"
          alt="QR code linking to Antonious Nasr's portfolio"
          className="size-16 sm:size-24"
          width="96"
          height="96"
        />
      </div>
    </div>
  );
}
