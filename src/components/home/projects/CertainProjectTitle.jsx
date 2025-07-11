export default function CertainProjectTitle({ title }) {
  return (
    <h2 className="mb-10 flex flex-row flex-nowrap items-center">
      <span className="border-light block grow border-t"></span>
      <span className="font-merienda text-primary mx-4 block flex-none px-4 py-2.5 text-2xl font-black uppercase xl:text-3xl">
        {title}
      </span>
      <span className="border-light block grow border-t"></span>
    </h2>
  );
}
