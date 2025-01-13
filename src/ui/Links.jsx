import linkedin from "@/assets/linkedin.gif";
import github from "@/assets/github.gif";
import whatsapp from "@/assets/whatsapp.gif";
import gmail from "@/assets/gmail.gif";
import location from "@/assets/location.gif";

const links = [
  {
    href: "https://www.linkedin.com/in/antonious-nasr/",
    label: "LinkedIn Profile",
    icon: <img src={linkedin} alt="LinkedIn Profile" />,
  },
  {
    href: "https://github.com/ANT0NI0US",
    label: "GitHub Profile",
    icon: <img src={github} alt="GitHub Profile" />,
  },
  {
    href: "http://wa.me/+201285551479",
    title: "+201285551479",
    label: "Whatsapp",
    icon: <img src={whatsapp} alt="Whatsapp" />,
  },
  {
    href: "mailto:antoniousnasr3@gmail.com",
    title: "antoniousnasr3@gmail.com",
    label: "Gmail",
    icon: <img src={gmail} alt="Gmail" />,
  },
  {
    href: "https://www.google.com/maps/place/my+home/@31.264949,29.9993177,21z/data=!4m6!3m5!1s0x14f5db7ecddbda23:0x5a34faff355c357!8m2!3d31.2650278!4d29.9994472!16s%2Fg%2F11p4blgp_l?entry=ttu&g_ep=EgoyMDI0MTIwMy4wIKXMDSoASAFQAw%3D%3D",
    title: "Egypt, Alexandria, Behind the Academy Street",
    label: "Location",
    icon: <img src={location} alt="Location" />,
  },
];

export default function Links() {
  return (
    <div className="flex items-center justify-center gap-1 lg:justify-start">
      {links.map(({ href, label, icon, title, hoverColor }) => (
        <a
          key={href}
          href={href}
          title={title ? title : href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
          className="md:size-16"
        >
          {icon}
        </a>
      ))}
    </div>
  );
}
