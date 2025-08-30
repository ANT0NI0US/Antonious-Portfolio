import { GrCertificate } from "react-icons/gr";
import Button from "@/ui/Button";
import Qualification from "./Qualification";
import QualificationItem from "./QualificationItem";
import { Certifications } from "@/data/Certifications";

export default function Certificate() {
  return (
    <Qualification title="Certifications" icon={GrCertificate}>
      {Certifications.map(({ id, date, place, title, href }) => (
        <QualificationItem date={date} key={id}>
          <span className="relative w-fit py-1">
            {place}
            <span className="absolute top-0 right-0 h-2 w-4 translate-x-1/2 -translate-y-1/2 rounded-tr-md border-t-2 border-r-2 border-current" />
            <span className="absolute bottom-0 left-0 h-2 w-4 -translate-x-1/2 translate-y-1/2 rounded-bl-md border-b-2 border-l-2 border-current" />
          </span>
          <p className="py-2">{title}</p>
          <Button
            Font="sm:ms-auto sm:w-[170px]!"
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            AriaLabel="Credential URL"
            title="View Credential URL"
          >
            Credential URL
          </Button>
        </QualificationItem>
      ))}
    </Qualification>
  );
}
