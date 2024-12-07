import { allSkills } from "../components/allSkills";
import PersonalInformation from "../components/PersonalInformation";
import SkillDetails from "../components/SkillDetails";
import GridContainer from "@/ui/GridContainer";
import TextHead from "@/ui/TextHead";

export default function About() {
  return (
    <section className="min-h-screen bg-secondary py-[100px]" id="about">
      <div className="mx-auto w-[90%] space-y-5 md:w-5/6">
        <TextHead text="About" />

        {/* PERSONAL INFORMATION */}
        <PersonalInformation />

        {/* ALL SKILLS */}
        <GridContainer styles="md:grid  md:grid-cols-2 !gap-x-[80px] !gap-y-[20px] px-4">
          {allSkills?.map((skill, index) => (
            <SkillDetails skill={skill} key={index} />
          ))}
        </GridContainer>
      </div>
    </section>
  );
}
