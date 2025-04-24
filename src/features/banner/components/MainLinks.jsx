import { SiMinutemailer } from "react-icons/si";
import { PiReadCvLogo } from "react-icons/pi";
import Button from "@/ui/Button";

const mainLinks = [
  {
    to: "#contact",
    icon: <SiMinutemailer />,
    text: "Contact Me",
    btnType: "secondary",
  },
  {
    to: "https://drive.google.com/file/d/1xn9EaK7RIEZZBOWYapGnoDQb87ElOlze/view",
    icon: <PiReadCvLogo />,
    text: "View CV",
    target: "_blank",
  },
];

export default function MainLinks() {
  return (
    <div className="xs:w-[300px] xs:flex-row mx-auto flex w-full flex-col gap-3 lg:mx-0 xl:w-[350px] xl:gap-4">
      {mainLinks.map(({ to, icon, text, target, btnType }) => (
        <Button
          key={to}
          AriaLabel={text}
          href={to}
          target={target}
          variation={btnType}
        >
          <div className="flexCenter gap-2">
            {icon}
            <span>{text}</span>
          </div>
        </Button>
      ))}
    </div>
  );
}
