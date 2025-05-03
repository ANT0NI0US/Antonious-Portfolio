import { useParams } from "react-router-dom";
import { experiences } from "@/data/experiences";
import HeaderSection from "@/components/experiencesDetails/HeaderSection";
import DetailsCard from "@/components/experiencesDetails/DetailsCard";
import TagsSection from "@/components/experiencesDetails/TagsSection";
import ProjectsCarousel from "@/components/experiencesDetails/ProjectsCarousel";

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
    <div className="container flex flex-col gap-4 pt-10 pb-30">
      <HeaderSection experience={experience} />

      {experience?.coreResponsibilities && (
        <DetailsCard
          title="Core Responsibilities"
          list={experience.coreResponsibilities}
          styling="bg-gradient-to-t"
        />
      )}

      {experience?.keyAchievements && (
        <DetailsCard
          title="Key Achievements"
          list={experience.keyAchievements}
          styling="bg-gradient-to-b"
        />
      )}

      <div className="flex flex-col gap-4 md:flex-row">
        <TagsSection
          title="Soft Skills Developed"
          items={experience.softSkills}
          styling="bg-gradient-to-t md:bg-gradient-to-tl"
        />
        <TagsSection
          title="Tools & Technologies"
          items={experience.tools}
          styling="bg-gradient-to-b md:bg-gradient-to-tr"
        />
      </div>

      {experience?.projects && (
        <ProjectsCarousel projects={experience.projects} />
      )}
    </div>
  );
}
