import SkillDetails from "./SkillDetails";
import GridContainer from "@/ui/GridContainer";
import TextHead from "@/ui/TextHead";
import { softSkills } from "@/data/SoftSkills";

export default function SoftSkills() {
  return (
    <section className="py-5 sm:py-10" id="soft-skills">
      <div className="container">
        <TextHead text="Soft Skills" />

        {/* SOFT SKILLS */}
        <GridContainer>
          {softSkills?.map((skill, index) => (
            <SkillDetails skill={skill} index={index} key={index} />
          ))}
        </GridContainer>
      </div>
    </section>
  );
}
