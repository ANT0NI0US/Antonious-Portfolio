import { DocumentIcon, GithubIcon, LinkIcon, VideoIcon } from "@/icons";

const iconStyle =
  "cursor-pointer size-8 transition-all duration-300 hover:text-primary";

export default function OverlayLinks({
  url,
  githubLink,
  video,
  documentation,
  handleLinkClick,
}) {
  return (
    <div className="flexCenter absolute top-[60%] left-1/2 z-30 -translate-x-1/2 -translate-y-1/2 gap-5 opacity-0 duration-500 ease-in-out group-hover:top-1/2 group-hover:opacity-100">
      {url && (
        <LinkIcon
          className={`${iconStyle}`}
          onClick={() => handleLinkClick(url)}
          title="Visit site"
        />
      )}
      {githubLink && (
        <GithubIcon
          className={`${iconStyle}`}
          onClick={() => handleLinkClick(githubLink)}
          title="View GitHub"
        />
      )}
      {video && (
        <VideoIcon
          className={`${iconStyle}`}
          onClick={() => handleLinkClick(video)}
          title="Watch Video"
        />
      )}
      {documentation && (
        <DocumentIcon
          className={`${iconStyle}`}
          onClick={() => handleLinkClick(documentation)}
          title="View Documentation"
        />
      )}
    </div>
  );
}
