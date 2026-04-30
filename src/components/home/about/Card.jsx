export default function Card({ title, data, className = "" }) {
  return (
    <div
      className={`text-light bg-secondary flex w-full flex-col items-center justify-center gap-1 rounded-md p-4 text-center md:gap-2 md:p-6 ${className}`}
    >
      <span className="text-3xl font-semibold lg:text-4xl xl:text-5xl">
        {data}
      </span>
      <span>{title}</span>
    </div>
  );
}
