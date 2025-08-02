import { FaRegComments } from "react-icons/fa";
import { TbCpu, TbFolderCode, TbUserStar } from "react-icons/tb";
import { LuFileBadge } from "react-icons/lu";
import { GoPerson } from "react-icons/go";
import { PiSealCheck } from "react-icons/pi";
import { GrOverview } from "react-icons/gr";
import { SiMinutemailer } from "react-icons/si";
import { GiTalk } from "react-icons/gi";
import { RiChatQuoteLine } from "react-icons/ri";

export const links = [
  {
    icon: GrOverview,
    path: "#overview",
    text: "Overview",
  },
  {
    icon: SiMinutemailer,
    path: "#contact",
    text: "Contact",
  },
];

export const aboutLinks = [
  {
    icon: GoPerson,
    path: "#about",
    text: "About Me",
  },
  {
    icon: TbCpu,
    path: "#tech-skills",
    text: "Technical Skills",
  },
  {
    icon: GiTalk,
    path: "#soft-skills",
    text: "Soft Skills",
  },
  {
    icon: TbFolderCode,
    path: "#projects",
    text: "Projects",
  },
  {
    icon: PiSealCheck,
    path: "#services",
    text: "Services",
  },
  {
    icon: TbUserStar,
    path: "#experiences",
    text: "Experiences",
  },
  {
    icon: LuFileBadge,
    path: "#qualification",
    text: "Qualifications",
  },
  {
    icon: FaRegComments,
    path: "#blogs",
    text: "Blogs",
  },
  {
    icon: RiChatQuoteLine,
    path: "#testimonials",
    text: "Testimonials",
  },
];
