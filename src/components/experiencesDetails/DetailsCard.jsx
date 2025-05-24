export default function DetailsCard({ title, list, styling }) {
  return (
    <div
      className={`shadow-secondary from-main to-secondary flex flex-col gap-4 rounded-md from-20% to-100% p-4 shadow-md ${styling}`}
    >
      <h3 className="text-primary text-lg font-bold">{title}</h3>
      <ul className="flex list-inside list-decimal flex-col gap-2">
        {list.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
