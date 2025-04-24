const Information = [
  {
    title: "Years Of Experience",
    data: "2+",
  },
  {
    title: "Number Of Projects",
    data: "35+",
  },
  {
    title: "Technical Proficiency",
    data: "React - Next",
  },
];

export default function ExperiencesProjects() {
  return (
    <div className="mt-4 flex w-full flex-col items-center justify-between gap-8 text-center md:mt-8 md:flex-row">
      {Information.map(({ title, data }) => (
        <div
          key={title}
          className="shadow-secondary flex w-full flex-col items-center justify-center gap-1.5 rounded-4xl py-7 shadow-md md:min-h-[210px] md:p-4"
        >
          <span className="text-primary text-2xl font-bold lg:text-3xl">
            {data}
          </span>
          <span>{title}</span>
        </div>
      ))}
    </div>
  );
}
