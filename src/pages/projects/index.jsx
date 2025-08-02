import { useParams } from "react-router-dom";
import ProjectHead from "@/components/projects/ProjectHead";
import ProjectOverview from "@/components/projects/ProjectOverview";
import KeyFeatures from "@/components/projects/KeyFeatures";
import TechnologiesUsed from "@/components/projects/TechnologiesUsed";
import ProjectImages from "@/components/projects/ProjectImages";
import { smartGateProjects } from "@/data/smartGateProjects";
import { creationProjects } from "@/data/creationProjects";
import ProjectsCarousel from "@/ui/ProjectsCarousel";

const allProjects = [...smartGateProjects, ...creationProjects];

export default function Projects() {
  const { id } = useParams();
  const project =
    smartGateProjects.find((p) => p.id === Number(id)) ||
    creationProjects.find((p) => p.id === Number(id));

  if (!project)
    return (
      <div className="text-primary pt-20 text-center text-lg">
        Project not found
      </div>
    );

  const otherProjects = allProjects.filter(
    (p) => p.category === project.category && p.id !== project.id,
  );

  console.log(otherProjects);
  return (
    <div className="container flex flex-col gap-4 pt-10 pb-30">
      <ProjectHead
        title={project?.title}
        description={project?.description}
        imgUrl={project?.imgUrl}
      />
      {/* PROJECT PREVIEW */}
      <ProjectOverview
        keyObjectives={project?.keyObjectives}
        challengesSolved={project?.challengesSolved}
        responsibilities={project?.responsibilities}
        keyOutcomes={project?.keyOutcomes}
      />
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-8">
        {/* KEY FEATURES */}
        <KeyFeatures keyFeatures={project?.keyFeatures} />
        {/* TECHNOLOGIES USED */}
        <TechnologiesUsed toolkit={project?.toolkit} />
      </div>
      {/* IMAGE COLLEGE */}
      <ProjectImages project={project} />
      {/* OTHER PROJECTS IN THE SAME CATEGORY */}
      <ProjectsCarousel projects={otherProjects} titleHead="Other Projects" />
    </div>
  );
}
