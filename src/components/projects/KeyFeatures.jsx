import TitleSectionHead from "@/ui/TitleSectionHead";

export default function KeyFeatures({ keyFeatures }) {
  return (
    <div className="shadow-secondary from-main to-secondary flex flex-col gap-4 rounded-md bg-gradient-to-t from-20% to-100% p-4 shadow-md lg:col-span-5">
      <TitleSectionHead text="Key Features" />
      <div className="flex flex-col gap-4 sm:grid sm:grid-cols-[repeat(auto-fill,minmax(300px,1fr))]">
        {keyFeatures?.map((feature, index) => (
          <div
            key={index}
            className="from-secondary to-main relative min-h-[200px] overflow-hidden rounded-md border bg-gradient-to-b from-20% to-100% shadow-md"
          >
            <div className="bg-main/30 relative flex h-[50px]">
              <div className="bg-light text-main flex h-full w-20 items-center justify-center pr-4 text-xl font-bold">
                0{index + 1}
              </div>
              <div className="bg-main absolute top-0 left-16 z-10 h-full w-[50px] skew-x-[-30deg]" />
            </div>
            <div className="flex flex-col gap-1 p-4">
              <h4 className="text-primary text-lg font-semibold">
                {feature.title}
              </h4>
              <p>{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
