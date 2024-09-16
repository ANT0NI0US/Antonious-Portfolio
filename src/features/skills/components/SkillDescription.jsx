import GridContainer from "../../../ui/GridContainer";

export default function SkillDescription({ description }) {
  return (
    <ul className="list-inside list-disc">
      <GridContainer styles="lg:grid lg:grid-cols-2 gap-[5px]">
        {description?.map((desc, idx) => (
          <li className="font-semibold text-light" key={idx}>
            {desc}
          </li>
        ))}
      </GridContainer>
    </ul>
  );
}
