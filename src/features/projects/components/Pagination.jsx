import Button from "@/ui/Button";

export default function Pagination({
  handleClick,
  currentIndex,
  filteredProjects,
}) {
  return (
    <div className="!mt-5 flex items-center justify-evenly gap-5 md:!mt-10">
      <div className="w-[150px]">
        <Button
          ArialLabel="Previous Project"
          onClick={() => handleClick("previous")}
          disabled={currentIndex === 0}
        >
          Previous
        </Button>
      </div>
      <div className="w-[150px]">
        <Button
          ArialLabel="Next Project"
          onClick={() => handleClick("next")}
          disabled={currentIndex === filteredProjects.length - 1}
        >
          Next
        </Button>
      </div>
    </div>
  );
}
