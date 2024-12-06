import { IoLocationOutline, IoMailOutline } from "react-icons/io5";
import { BsTelephone } from "react-icons/bs";
import { LiaSmsSolid } from "react-icons/lia";

const details = [
  {
    href: "mailto:antoniousnasr3@gmail.com",
    icon: <IoMailOutline />,
    text: "antoniousnasr3@gmail.com",
  },
  {
    href: "tel:+201285551479",
    icon: <BsTelephone />,
    text: "+201285551479",
  },
  {
    href: "sms:+201285551479",
    icon: <LiaSmsSolid />,
    text: "+201285551479",
  },
  {
    href: "https://www.google.com/maps/place/my+home/@31.264949,29.9993177,21z/data=!4m6!3m5!1s0x14f5db7ecddbda23:0x5a34faff355c357!8m2!3d31.2650278!4d29.9994472!16s%2Fg%2F11p4blgp_l?entry=ttu&g_ep=EgoyMDI0MTIwMy4wIKXMDSoASAFQAw%3D%3D",
    icon: <IoLocationOutline />,
    text: "Egypt, Alexandria, Behind the Academy Street",
    target: "_blank",
    rel: "noopener noreferrer",
  },
];

export default function MoreInformationDetails() {
  return (
    <div className="w-full space-y-6 md:basis-[40%]">
      {details.map(({ href, icon, text, target, rel }) => (
        <a
          key={href}
          href={href}
          target={target || undefined}
          rel={rel || undefined}
          className="flex flex-col items-center gap-4 md:flex-row"
        >
          <div className="text-4xl text-primary">{icon}</div>
          <p className="text-center md:text-start">{text}</p>
        </a>
      ))}
    </div>
  );
}
