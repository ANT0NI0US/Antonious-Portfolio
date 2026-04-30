import { EmailIcon, GithubIcon, WhatsappIcon, LinkedInIcon } from "@/icons";

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
];
