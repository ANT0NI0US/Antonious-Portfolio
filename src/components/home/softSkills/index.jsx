import { softSkills } from "@/data/SoftSkills";
import Button from "@/ui/Button";
import GridContainer from "@/ui/GridContainer";
import TextHead from "@/ui/TextHead";
import { useState } from "react";
import SkillDetails from "./SkillDetails";

export default function SoftSkills() {
  const [showAll, setShowAll] = useState(false);

  const visibleSkills = showAll ? softSkills : softSkills.slice(0, 6);
  return (
    <section className="container py-5 sm:py-10" id="soft-skills">
      <TextHead text="Soft Skills" />

      <Button
        onClick={() => setShowAll((prev) => !prev)}
        AriaLabel="Toggle to show all soft skills or show less"
        Font="my-6 w-[200px]! ms-auto!"
        variation="secondary"
      >
        {showAll ? "Show Less" : "Show All Skills"}
      </Button>

      {/* SOFT SKILLS */}
      <GridContainer>
        {visibleSkills?.map((skill, index) => (
          <SkillDetails skill={skill} key={skill.title} />
        ))}
      </GridContainer>
    </section>
  );
}
