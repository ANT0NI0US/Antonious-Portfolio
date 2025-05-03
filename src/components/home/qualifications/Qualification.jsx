export default function Qualification({ title, icon: Icon, children }) {
  return (
    <div className="bg-main shadow-secondary flex h-fit w-full flex-col gap-3 rounded-md p-4 shadow-md">
      <div className="flex h-12 items-center gap-5 ps-3">
        <span className="bg-primary animate-rotate h-full w-1.5 rounded-full" />
        <div className="flex gap-1.5">
          <Icon className="text-3xl" />
          <h1 className="text-2xl font-bold">{title}</h1>
        </div>
      </div>
      <div className="flex flex-col gap-4">{children}</div>
    </div>
  );
}
