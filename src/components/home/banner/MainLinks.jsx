import { SiMinutemailer } from "react-icons/si";
import { PiReadCvLogo } from "react-icons/pi";
import Button from "@/ui/Button";
import { useHandleNavClick } from "@/hooks/useHandleNavClick";

const mainLinks = [
  {
    to: "#contact",
    icon: <SiMinutemailer />,
    text: "Contact Me",
    btnType: "secondary",
    isInternal: true,
  },
  {
    to: "https://drive.google.com/file/d/1K8MJFUEMe0jHu7x1k0PanwNiqBF9mR-h/view",
    icon: <PiReadCvLogo />,
    text: "View CV",
    target: "_blank",
    isInternal: false,
  },
];

export default function MainLinks() {
  const handleNavClick = useHandleNavClick();

  return (
    <div className="xs:w-[300px] xs:flex-row mx-auto flex w-full flex-col gap-3 lg:mx-0 xl:w-[350px] xl:gap-4">
      {mainLinks.map(({ to, icon, text, target, btnType, isInternal }) => (
        <Button
          key={text}
          AriaLabel={text}
          title={text}
          onClick={isInternal ? () => handleNavClick(to) : undefined}
          href={isInternal ? undefined : to}
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
