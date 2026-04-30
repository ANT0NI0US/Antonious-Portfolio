import Card from "./Card";

const Information = [
  {
    title: "Years Of Experience",
    data: "+3",
  },
  {
    title: "Number Of Projects",
    data: "+35",
  },
  { title: "Performance Improvement", data: "+40%" },
  {
    title: "Technical Proficiency",
    data: "React - Next",
  },
];

export default function ExperiencesProjects() {
  return (
    <div className="mt-4 grid w-full grid-cols-1 gap-6 md:mt-8 md:grid-cols-3">
      <div className="flex flex-col gap-6 md:col-span-2">
        <Card {...Information[0]} />

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <Card {...Information[1]} />
          <Card {...Information[2]} />
        </div>
      </div>

      <Card {...Information[3]} className="bg-primary! text-main! h-full" />
    </div>
  );
}
