import CertainProjectTitle from "./CertainProjectTitle";
import DescriptionAndToolkit from "./DescriptionAndToolkit";
import ProjectImage from "./ProjectImage";

function handleLinkClick(link) {
  window.open(link, "_blank");
}

export default function ProjectDetails({ selectedProject }) {
  const {
    title,
    description,
    accounts,
    toolkit,
    imgUrl,
    url,
    githubLink,
    video,
    documentation,
  } = selectedProject;

  return (
    <>
      {/* PROJECT TITLe */}
      <CertainProjectTitle title={title} />
      {/* DESCRIPTION & TOOLKIT AND IMAGE */}
      <div className="flex flex-col-reverse items-center justify-evenly gap-5 lg:flex-row lg:items-start">
        {/* DESCRIPTION AND TOOLKIT */}
        <DescriptionAndToolkit
          description={description}
          accounts={accounts}
          toolkit={toolkit}
        />

        {/* IMAGE */}
        <ProjectImage
          imgUrl={imgUrl}
          title={title}
          url={url}
          githubLink={githubLink}
          video={video}
          documentation={documentation}
          handleLinkClick={handleLinkClick}
        />
      </div>
    </>
  );
}
