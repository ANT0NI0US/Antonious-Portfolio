import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Links() {
  return (
    <div className="flexCenter gap-5">
      <a
        href="https://www.linkedin.com/in/antonious-nasr-a20887196"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn Profile"
        className="flexCenter group relative h-[40px] w-[40px] rounded-full border-[0.5px] border-grident1 bg-secondary/60"
      >
        <span className="absolute inset-0 h-full w-full scale-0 rounded-full bg-light/10 transition-all duration-200 ease-in-out group-hover:scale-100"></span>
        <FaLinkedin className="z-50 text-xl text-white transition-all duration-200 group-hover:text-primary" />
      </a>
      <a
        href="https://github.com/ANT0NI0US"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub Profile"
        className="flexCenter group relative h-[40px] w-[40px] rounded-full border-[0.5px] border-grident1 bg-secondary/60"
      >
        <span className="absolute inset-0 h-full w-full scale-0 rounded-full bg-light/10  transition-all duration-200 ease-in-out group-hover:scale-100"></span>
        <FaGithub className="z-50 text-xl text-white transition-all duration-200 group-hover:text-primary" />
      </a>
    </div>
  );
}
