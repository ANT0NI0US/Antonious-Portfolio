import { FaGithub, FaLink } from "react-icons/fa";
import { IoDocumentSharp } from "react-icons/io5";
import { MdOutlineOndemandVideo } from "react-icons/md";

const iconStyle =
  "cursor-pointer text-3xl transition-all duration-300 hover:text-primary";

export default function OverlayLinks({
  url,
  githubLink,
  video,
  documentation,
  handleLinkClick,
}) {
  return (
    <div className="flexCenter absolute left-1/2 top-[60%] z-30 -translate-x-1/2 -translate-y-1/2 gap-5 opacity-0 duration-500 ease-in-out group-hover:top-1/2 group-hover:opacity-100">
      {url && (
        <FaLink
          className={`${iconStyle}`}
          onClick={() => handleLinkClick(url)}
          title="Visit site"
        />
      )}
      {githubLink && (
        <FaGithub
          className={`${iconStyle}`}
          onClick={() => handleLinkClick(githubLink)}
          title="View GitHub"
        />
      )}
      {video && (
        <MdOutlineOndemandVideo
          className={`${iconStyle}`}
          onClick={() => handleLinkClick(video)}
          title="Watch Video"
        />
      )}
      {documentation && (
        <IoDocumentSharp
          className={`${iconStyle}`}
          onClick={() => handleLinkClick(documentation)}
          title="View Documentation"
        />
      )}
    </div>
  );
}
