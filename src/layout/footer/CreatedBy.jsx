import { RiCustomerService2Line } from "react-icons/ri";

const year = new Date().getFullYear();
export default function CreatedBy() {
  return (
    <div className="border-t-main border-t-2 py-4 text-center">
      <div className="gap- container flex flex-col items-center justify-between gap-4 text-xs sm:flex-row sm:gap-6 xl:text-sm">
        <p>© {year} Antonious Nasr, All rights reserved.</p>
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-2">
            <RiCustomerService2Line size={25} />
            <span>24/7</span>
          </div>

          <p>+20 01285551479</p>
        </div>
      </div>
    </div>
  );
}
