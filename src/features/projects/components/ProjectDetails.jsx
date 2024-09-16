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
    documenation,
  } = selectedProject;

  return (
    <>
      {/* PROJECT TITLe */}
      <CertainProjectTitle title={title} />
      {/* DESCRIPTION & TOOLKITS AND IMAGE */}
      <div className="flex flex-col-reverse items-center justify-evenly gap-5 lg:flex-row lg:items-start">
        {/* DESCRIPTION AND TOOLKITS */}
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
          documenation={documenation}
          handleLinkClick={handleLinkClick}
        />
      </div>
    </>
  );
}
