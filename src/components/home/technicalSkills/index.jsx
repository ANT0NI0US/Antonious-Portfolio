import { techSkills } from "@/data/techSkills";
import Button from "@/ui/Button";
import GridContainer from "@/ui/GridContainer";
import TextHead from "@/ui/TextHead";
import { useState } from "react";
import SkillDetails from "./SkillDetails";

export default function Skills() {
  const [showAll, setShowAll] = useState(false);

  const visibleSkills = showAll ? techSkills : techSkills.slice(0, 4);

  return (
    <section className="container py-5 sm:py-10" id="tech-skills">
      <TextHead text="Technical Skills" />

      <Button
        onClick={() => setShowAll((prev) => !prev)}
        AriaLabel="Toggle to show all technical skills or show less"
        Font="my-6 w-[200px]! ms-auto!"
        variation="secondary"
      >
        {showAll ? "Show Less" : "Show All Skills"}
      </Button>

      {/* TECHNICAL SKILLS */}
      <GridContainer styles="md:grid md:grid-cols-2 gap-x-[80px]! gap-y-[20px]! px-4">
        {visibleSkills?.map((skill, index) => (
          <SkillDetails skill={skill} key={skill.title} />
        ))}
      </GridContainer>
    </section>
  );
}
