import Lottie from "react-lottie";
import linkedin from "@/assets/linkedin.json";
import github from "@/assets/github.json";
import whatsapp from "@/assets/whatsapp.json";
import gmail from "@/assets/gmail.json";
import location from "@/assets/location.json";

// Reusable Lottie icon component
const LottieIcon = ({ animationData }) => (
  <Lottie
    options={{
      loop: true,
      autoplay: true,
      animationData,
    }}
    height={50}
    width={50}
    isClickToPauseDisabled={true}
  />
);

const links = [
  {
    href: "https://www.linkedin.com/in/antonious-nasr/",
    label: "LinkedIn Profile",
    animationData: linkedin,
    title: "Visit my LinkedIn profile",
  },
  {
    href: "https://github.com/ANT0NI0US",
    label: "GitHub Profile",
    animationData: github,
    title: "Check out my GitHub profile",
  },
  {
    href: "http://wa.me/+201285551479",
    label: "Whatsapp",
    animationData: whatsapp,
    title: "Send me a message on WhatsApp",
  },
  {
    href: "mailto:antoniousnasr3@gmail.com",
    label: "Gmail",
    animationData: gmail,
    title: "Email me at antoniousnasr3@gmail.com",
  },
  {
    href: "https://www.google.com/maps/place/my+home/@31.264949,29.9993177,21z/data=!4m6!3m5!1s0x14f5db7ecddbda23:0x5a34faff355c357!8m2!3d31.2650278!4d29.9994472!16s%2Fg%2F11p4blgp_l?entry=ttu&g_ep=EgoyMDI0MTIwMy4wIKXMDSoASAFQAw%3D%3D",
    label: "Location",
    animationData: location,
    title: "My location in Alexandria, Egypt",
  },
];

export default function Links() {
  return (
    <div className="flex items-center justify-center gap-1 lg:justify-start">
      {links.map(({ href, label, animationData, title }) => (
        <a
          key={href}
          href={href}
          title={title}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
          className="rounded-md bg-white/80"
        >
          <LottieIcon animationData={animationData} />
        </a>
      ))}
    </div>
  );
}
