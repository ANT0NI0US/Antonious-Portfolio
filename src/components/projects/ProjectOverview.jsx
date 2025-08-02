import ProjectAnalysis from "./ProjectAnalysis";
import TitleSectionHead from "@/ui/TitleSectionHead";

export default function ProjectOverview({
  keyObjectives,
  challengesSolved,
  responsibilities,
  keyOutcomes,
}) {
  return (
    <div className="shadow-secondary from-main to-secondary relative flex flex-col gap-4 rounded-md bg-gradient-to-t from-20% to-100% p-4 shadow-md">
      <TitleSectionHead text="Project Overview" />
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <ProjectAnalysis title="Key Objectives" data={keyObjectives} />
        <ProjectAnalysis title="Challenges Solved" data={challengesSolved} />
        <ProjectAnalysis
          title="Role & Responsibilities"
          data={responsibilities}
        />
        <ProjectAnalysis title="Key Outcomes" data={keyOutcomes} />
      </div>
    </div>
  );
}
