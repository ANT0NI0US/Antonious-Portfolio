import {
  EmailIcon,
  GithubIcon,
  LocationIcon,
  WhatsappIcon,
  LinkedInIcon,
} from "@/icons";

export const SOCIAL_LINKS = [
  {
    href: "https://www.linkedin.com/in/antonious-nasr/",
    label: "LinkedIn Profile",
    icon: LinkedInIcon,

    title: "Visit my LinkedIn profile",
  },
  {
    href: "https://github.com/ANT0NI0US",
    label: "GitHub Profile",
    icon: GithubIcon,
    title: "Check out my GitHub profile",
  },
  {
    href: "https://wa.me/+201285551479",
    label: "Whatsapp",
    icon: WhatsappIcon,
    title: "Send me a message on WhatsApp",
  },
  {
    href: "mailto:antoniousnasr3@gmail.com",
    label: "Gmail",
    icon: EmailIcon,
    iconProps: { fill: "currentColor" },
    title: "Email me at antoniousnasr3@gmail.com",
  },
  {
    href: "https://www.google.com/maps/place/my+home/@31.264949,29.9993177,21z/data=!4m6!3m5!1s0x14f5db7ecddbda23:0x5a34faff355c357!8m2!3d31.2650278!4d29.9994472!16s%2Fg%2F11p4blgp_l?entry=ttu&g_ep=EgoyMDI0MTIwMy4wIKXMDSoASAFQAw%3D%3D",
    label: "Location",
    icon: LocationIcon,
    iconProps: { fill: "currentColor" },
    title: "My location in Alexandria, Egypt",
  },
];
