export default function ProjectAnalysis({ title, data }) {
  return (
    <div>
      <h4 className="text-primary mb-1.5 text-lg font-semibold">{title}</h4>
      <ul className="flex list-inside list-disc flex-col gap-1">
        {data?.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
