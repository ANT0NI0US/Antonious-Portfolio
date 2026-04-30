import { GraduationIcon } from "@/icons";
import Qualification from "./Qualification";
import QualificationItem from "./QualificationItem";

export default function Education() {
  return (
    <Qualification title="Education" icon={GraduationIcon}>
      <QualificationItem date="Dec 2016 - Jun 2020">
        <p>Bachelor’s Degree in Computer Science</p>
        <p>Ain Shams University, Cairo</p>
      </QualificationItem>
    </Qualification>
  );
}
