import Links from "@/ui/Links";
import MainTitle from "./MainTitle";

export default function Connect() {
  return (
    <div className="flex w-full flex-col gap-2">
      <MainTitle title="Connect" />

      <p className="text-sm">Let’s create something extraordinary!</p>

      {/* LINKS */}
      <Links Size="size-8" Style="justify-start" />
    </div>
  );
}
