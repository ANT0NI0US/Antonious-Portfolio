import SkillDetails from "./SkillDetails";
import GridContainer from "@/ui/GridContainer";
import TextHead from "@/ui/TextHead";
import { techSkills } from "@/data/techSkills";

export default function Skills() {
  return (
    <section className="py-5 sm:py-10" id="tech-skills">
      <div className="container">
        <TextHead text="Technical Skills" />

        {/* TECHNICAL SKILLS */}
        <GridContainer styles="md:grid md:grid-cols-2 gap-x-[80px]! gap-y-[20px]! px-4">
          {techSkills?.map((skill, index) => (
            <SkillDetails skill={skill} key={index} />
          ))}
        </GridContainer>
      </div>
    </section>
  );
}
