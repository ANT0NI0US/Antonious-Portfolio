export default function CertainProjectTitle({ title }) {
  return (
    <h2 className="mb-10 flex flex-row flex-nowrap items-center">
      <span className="block grow border-t border-secondary"></span>
      <span className="mx-4 block flex-none px-4 py-2.5 font-merienda text-2xl font-black text-primary xl:text-3xl">
        {title}
      </span>
      <span className="block grow border-t border-secondary"></span>
    </h2>
  );
}
