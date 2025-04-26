import { GrCertificate } from "react-icons/gr";
import Button from "@/ui/Button";
import Qualification from "./Qualification";
import QualificationItem from "./QualificationItem";

export default function Certificate() {
  return (
    <Qualification title="Certifications" icon={GrCertificate}>
      <QualificationItem date="Aug 2024 - Mar 2025">
        <span className="bg-secondary w-fit rounded-xl px-4 py-3">Udemy</span>
        <p>The Ultimate React Course 2024: React, Next.js, Redux & More</p>
        <Button
          Font="sm:ms-auto sm:w-[170px]!"
          href="https://www.udemy.com/certificate/UC-d335d64a-0eea-4ae8-8ac4-488f47177db1/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Credential URL
        </Button>
      </QualificationItem>
    </Qualification>
  );
}
