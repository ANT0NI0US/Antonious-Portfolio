import TextHead from "@/ui/TextHead";

export default function ProjectHead({ title, imgUrl, description }) {
  return (
    <>
      <TextHead text={title} styling="mb-0!" />
      <p className="mx-auto max-w-3xl text-center text-sm sm:text-lg">
        {description}
      </p>
      <img
        className="relative max-h-[500px] rounded-md object-fill"
        src={imgUrl}
        alt={title}
      />
    </>
  );
}
