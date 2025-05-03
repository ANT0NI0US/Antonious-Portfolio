import { FaRegComments, FaRegLightbulb } from "react-icons/fa";
import { TbFolderCode, TbUserStar } from "react-icons/tb";
import { LuFileBadge } from "react-icons/lu";
import { GoPerson } from "react-icons/go";
import { PiSealCheck } from "react-icons/pi";
import { GrOverview } from "react-icons/gr";
import { SiMinutemailer } from "react-icons/si";

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
    icon: FaRegLightbulb,
    path: "#skills",
    text: "Skills",
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
];
