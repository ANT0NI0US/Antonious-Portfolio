import { TiArrowBack } from "react-icons/ti";
import Button from "../ui/Button";

export default function PageNotFound() {
  return (
    <main className="flexCenter bg-main h-screen w-full flex-col">
      <div className="relative">
        <h1 className="text-9xl font-extrabold tracking-widest">404</h1>
        <div
          className={`bg-main text-primary absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rotate-12 rounded px-2 text-sm`}
        >
          Page Not Found
        </div>
      </div>
      <div className="w-[200px]">
        <Button href="/" replace AriaLabel="Back to Overview">
          <TiArrowBack size={22} />
          <p>Back to Overview</p>
        </Button>
      </div>
    </main>
  );
}
