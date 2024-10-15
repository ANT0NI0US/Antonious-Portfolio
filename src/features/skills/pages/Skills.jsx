import { allSkills } from "../components/allSkills";
import SkillDetails from "../components/SkillDetails";
import GridContainer from "@/ui/GridContainer";
import TextHead from "@/ui/TextHead";

export default function Skills() {
  return (
    <section className="min-h-screen bg-secondary py-[100px]" id="skills">
      <div className="mx-auto w-[90%] md:w-5/6">
        <TextHead text="Skills" />
        {/* ALL SKILLS */}
        <GridContainer styles="md:grid mt-10 md:grid-cols-2 !gap-x-[80px] !gap-y-[20px] px-4">
          {allSkills?.map((skill, index) => (
            <SkillDetails skill={skill} key={index} />
          ))}
        </GridContainer>
      </div>
    </section>
  );
}
