export default function SkillTitle({ title }) {
  return (
    <h2 className="shape flexCenter bg-secondary font-merienda text-primary relative -left-[50px] w-[calc(100%+100px)] p-5 text-center font-bold uppercase">
      {title}
      <span className="before-element" />
      <span className="after-element" />
    </h2>
  );
}
