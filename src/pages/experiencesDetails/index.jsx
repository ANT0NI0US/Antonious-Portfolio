import { useParams } from "react-router-dom";
import { experiences } from "@/data/experiences";
import HeaderSection from "@/components/experiencesDetails/HeaderSection";
import DetailsCard from "@/components/experiencesDetails/DetailsCard";
import TagsSection from "@/components/experiencesDetails/TagsSection";
import ProjectsCarousel from "@/ui/ProjectsCarousel";

export default function ExperiencesDetails() {
  const { id } = useParams();
  const experience = experiences.find((p) => p.id === Number(id));

  if (!experience)
    return (
      <div className="text-primary pt-20 text-center text-lg">
        Experience not found
      </div>
    );

  return (
    <div className="relative container flex flex-col gap-4 pt-10 pb-30">
      <HeaderSection experience={experience} />

      {experience?.keyAchievements && (
        <DetailsCard
          title="Key Achievements"
          list={experience.keyAchievements}
          styling="bg-gradient-to-t"
        />
      )}
      {experience?.coreResponsibilities && (
        <DetailsCard
          title="Core Responsibilities"
          list={experience.coreResponsibilities}
          styling="bg-gradient-to-b"
        />
      )}

      <div className="flex flex-col gap-4 md:grid md:grid-cols-9">
        <TagsSection
          title="Team Collaboration"
          items={experience.workingWith}
          styling="bg-gradient-to-t md:bg-gradient-to-l md:col-span-3"
        />
        <TagsSection
          title="Tech Highlights"
          items={experience.techHighlights}
          styling="bg-gradient-to-t md:bg-gradient-to-tl md:col-span-3"
        />
        <TagsSection
          title="Deployment Tools"
          items={experience.deploymentTools}
          styling="bg-gradient-to-t md:bg-gradient-to-r md:col-span-3"
        />
      </div>

      <div className="flex flex-col gap-4 md:grid md:grid-cols-8">
        <TagsSection
          title="Soft Skills Developed"
          items={experience.softSkills}
          styling="bg-gradient-to-t md:bg-gradient-to-tl md:col-span-3"
        />
        <TagsSection
          title="Tools & Technologies"
          items={experience.tools}
          styling="bg-gradient-to-b md:bg-gradient-to-tr md:col-span-5"
        />
      </div>

      {experience.projects.length > 0 && (
        <ProjectsCarousel projects={experience.projects} />
      )}
    </div>
  );
}
