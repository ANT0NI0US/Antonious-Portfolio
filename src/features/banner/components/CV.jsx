import { FaDownload } from "react-icons/fa";
import Button from "@/ui/Button";

const downloadFile = () => {
  const fileId = "1942jPOVYBrYM437m_ehJwFYVUnascxjj";
  const downloadUrl = `https://drive.google.com/uc?id=${fileId}`;
  const link = document.createElement("a");
  link.href = downloadUrl;
  link.setAttribute("download", "Antonious nasr CV");
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

export default function CV() {
  return (
    <Button AriaLabel="Cv" onClick={() => downloadFile()}>
      <div className="flexCenter gap-2">
        <div className="download-cv-cont">
          <FaDownload />
        </div>
        <div>MY CV</div>
      </div>
    </Button>
  );
}
