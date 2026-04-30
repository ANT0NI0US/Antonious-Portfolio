import SocialLinks from "@/ui/SocialLinks";
import MainTitle from "./MainTitle";

export default function Connect() {
  return (
    <div className="flex w-full flex-col gap-2">
      <MainTitle title="Connect" />

      <p className="text-sm">Let’s create something extraordinary!</p>

      {/* SOCIAL LINKS */}
      <SocialLinks
        Size="size-4"
        Style="justify-start gap-2!"
        className="border-light hover:bg-secondary hover:border-primary border-2! p-1.5!"
      />
    </div>
  );
}
