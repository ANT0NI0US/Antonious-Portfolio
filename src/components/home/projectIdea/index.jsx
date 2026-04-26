import { useHandleNavClick } from "@/hooks/useHandleNavClick";
import Button from "@/ui/Button";

export default function ProjectIdea() {
  const handleNavClick = useHandleNavClick();
  return (
    <div className="bg-secondary relative flex min-h-[400px] flex-col items-center justify-center gap-4 px-4 py-5 text-center sm:gap-6">
      <h2 className="text-primary text-2xl font-semibold uppercase sm:text-4xl md:text-5xl xl:text-6xl">
        Have a project idea?
      </h2>
      <p className="w-full sm:w-[70%] xl:w-[40%]">
        Let me help you turn your idea into an outstanding digital reality. I
        work with you from planning to final execution.
      </p>

      <Button
        AriaLabel="Start Your Project Now"
        Font="w-[300px]!"
        size="large"
        onClick={() => handleNavClick("#contact")}
        variation="secondary"
      >
        <span>Start Your Project Now</span>
      </Button>
    </div>
  );
}
