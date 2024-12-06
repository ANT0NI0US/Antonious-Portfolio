import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";

const links = [
  {
    href: "https://www.linkedin.com/in/antonious-nasr-a20887196",
    label: "LinkedIn Profile",
    icon: <FaLinkedin />,
    hoverColor: "group-hover:text-[#0077B5]",
  },
  {
    href: "https://github.com/ANT0NI0US",
    label: "GitHub Profile",
    icon: <FaGithub />,
    hoverColor: "group-hover:text-white",
  },
  {
    href: "http://wa.me/+201285551479",
    title: "+201285551479",
    label: "WhatsApp",
    icon: <FaWhatsapp />,
    hoverColor: "group-hover:text-[#25D366]",
  },
];

export default function Links() {
  return (
    <div className="flexCenter gap-5">
      {links.map(({ href, label, icon, title, hoverColor }) => (
        <a
          key={href}
          href={href}
          title={title ? title : href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
          className="flexCenter group relative h-[40px] w-[40px] rounded-full border-[0.5px] border-gradient1 bg-secondary/60 transition-all duration-200 hover:bg-transparent"
        >
          <div
            className={`z-50 text-xl text-white transition-all delay-200 duration-300 ${hoverColor}`}
          >
            {icon}
          </div>
        </a>
      ))}
    </div>
  );
}
