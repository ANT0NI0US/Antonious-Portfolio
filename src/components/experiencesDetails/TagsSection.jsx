import TitleSectionHead from "@/ui/TitleSectionHead";

export default function TagsSection({ title, items, styling }) {
  return (
    <div
      className={`shadow-secondary from-main to-secondary flex flex-col gap-4 rounded-md from-20% to-100% p-4 shadow-md ${styling}`}
    >
      <TitleSectionHead text={title} />
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
