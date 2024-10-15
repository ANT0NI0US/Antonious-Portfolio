import { FaWhatsapp } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";
import { IoMailOutline } from "react-icons/io5";

export default function MoreInformationDetails() {
  return (
    <div className="w-full space-y-6 md:basis-[40%]">
      <div className="flex flex-col items-center gap-4 md:flex-row">
        <IoLocationOutline className="text-4xl text-primary" />
        <p>Egypt ( Cairo / Alexandria )</p>
      </div>
      <div className="flex flex-col items-center gap-4 md:flex-row">
        <IoMailOutline className="text-4xl text-primary" />
        <p>antoniousnasr3@gmail.com</p>
      </div>
      <div className="flex flex-col items-center gap-4 md:flex-row">
        <FaWhatsapp className="text-4xl text-primary" />
        <p>01285551479</p>
      </div>
    </div>
  );
}
