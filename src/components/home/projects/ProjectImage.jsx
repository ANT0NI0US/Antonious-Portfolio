import OverlayLinks from "./OverlayLinks";

export default function ProjectImage({
  imgUrl,
  title,
  url,
  githubLink,
  video,
  documentation,
  handleLinkClick,
}) {
  return (
    <div className="group relative w-full rounded-md shadow-md lg:basis-[40%]">
      <img
        loading="lazy"
        src={imgUrl}
        alt={title}
        className="h-full w-full max-w-full rounded-md object-contain object-center"
      />
      <OverlayLinks
        url={url}
        githubLink={githubLink}
        video={video}
        documentation={documentation}
        handleLinkClick={handleLinkClick}
      />
      <div className="bg-main/75 absolute inset-0 h-0 rounded-md transition-all duration-400 ease-in-out group-hover:h-full" />
    </div>
  );
}
