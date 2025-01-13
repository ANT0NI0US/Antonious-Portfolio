export default function SkillDescription({ description }) {
  return (
    <ul className="flex list-inside list-disc flex-col gap-[5px] lg:grid lg:grid-cols-2">
      {description?.map((desc, idx) => (
        <li
          className="list-decimal font-semibold text-light xl:text-lg"
          key={idx}
        >
          {desc}
        </li>
      ))}
    </ul>
  );
}
