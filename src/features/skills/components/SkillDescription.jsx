export default function SkillDescription({ description }) {
  return (
    <ul className="flex list-inside list-disc flex-col gap-[5px] lg:grid lg:grid-cols-2">
      {description?.map((desc, idx) => (
        <li className="font-semibold text-light" key={idx}>
          {desc}
        </li>
      ))}
    </ul>
  );
}
