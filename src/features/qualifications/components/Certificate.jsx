import { GrCertificate } from "react-icons/gr";
import Button from "@/ui/Button";
import Qualification from "./Qualification";
import QualificationItem from "./QualificationItem";

export default function Certificate() {
  return (
    <Qualification title="Certifications" icon={GrCertificate}>
      <QualificationItem date="Aug 2024 - Mar 2025">
        <span className="relative w-fit py-1">
          Udemy
          <span className="absolute top-0 right-0 h-2 w-4 translate-x-1/2 -translate-y-1/2 rounded-tr-md border-t-2 border-r-2 border-current" />
          <span className="absolute bottom-0 left-0 h-2 w-4 -translate-x-1/2 translate-y-1/2 rounded-bl-md border-b-2 border-l-2 border-current" />
        </span>
        <p className="py-2">
          The Ultimate React Course 2024: React, Next.js, Redux & More
        </p>
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
