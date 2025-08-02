import Links from "@/ui/Links";

export default function Connect() {
  return (
    <div className="flex w-full flex-col items-center justify-center gap-2 sm:items-start sm:justify-start">
      <span className="text-primary font-bold">Connect</span>

      <p className="text-center sm:text-start">
        Let’s create something extraordinary!
      </p>

      {/* LINKS */}
      <Links Size="size-8" Style="justify-start" />
    </div>
  );
}
