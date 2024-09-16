export default function SkillTitle({ title }) {
  return (
    <h2 className="shape flexCenter relative -left-[50px] w-[calc(100%+100px)] bg-grident2 p-5 text-center font-merienda font-bold uppercase text-primary">
      {title}
      <span className="before-element" />
      <span className="after-element" />
    </h2>
  );
}
