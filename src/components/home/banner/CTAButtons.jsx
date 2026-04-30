import { useHandleNavClick } from "@/hooks/useHandleNavClick";
import { ContactIcon, CvIcon } from "@/icons";
import Button from "@/ui/Button";

const mainLinks = [
  {
    to: "#contact",
    icon: ContactIcon,
    text: "Contact Me",
    btnType: "secondary",
    isInternal: true,
  },
  {
    to: "https://drive.google.com/file/d/1rswKOs_jOhu-LNOonWmudbslt2-T5YeX/view",
    icon: CvIcon,
    text: "View CV",
    target: "_blank",
    isInternal: false,
  },
];

export default function CTAButtons() {
  const handleNavClick = useHandleNavClick();

  return (
    <div className="xs:w-full xs:flex-wrap mx-auto flex gap-3 sm:flex-nowrap md:w-[500px] 2xl:w-[600px] 2xl:gap-4">
      {mainLinks.map(
        ({ to, icon: Icon, text, target, btnType, isInternal }) => (
          <Button
            key={text}
            AriaLabel={text}
            title={text}
            onClick={isInternal ? () => handleNavClick(to) : undefined}
            href={isInternal ? undefined : to}
            target={target}
            variation={btnType}
            size="large"
          >
            <div className="flexCenter gap-2">
              <Icon />
              <span>{text}</span>
            </div>
          </Button>
        ),
      )}
    </div>
  );
}
