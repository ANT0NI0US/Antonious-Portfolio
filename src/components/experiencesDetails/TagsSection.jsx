export default function TagsSection({ title, items, styling }) {
  return (
    <div
      className={`shadow-secondary from-main to-secondary flex flex-col gap-4 rounded-md from-20% to-100% p-4 shadow-md ${styling}`}
    >
      <h3 className="text-primary text-lg font-bold">{title}</h3>
      <div className="flex flex-wrap gap-2">
        {items.map((item) => (
          <div
            key={item}
            className="bg-secondary rounded-full p-3 text-xs md:text-sm"
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}
