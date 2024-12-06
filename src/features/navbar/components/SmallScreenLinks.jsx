import { IoCloseSharp } from "react-icons/io5";
import { links } from "./links";
import Button from "@/ui/Button";
import { useOutsideClick } from "@/hooks/useOutsideClick";

export default function SmallScreenLinks({
  showSidebar,
  closeSidebar,
  activeLink,
  setActiveLink,
}) {
  const handleLinkClick = (path) => {
    setActiveLink(path);
  };
  const ref = useOutsideClick(() => closeSidebar());

  return (
    showSidebar && (
      <div className="md:hidden">
        {/* OVERLAY */}
        <div className="fixed inset-0 z-[100] h-full w-full bg-black/60"></div>

        {/* SIDEBAR */}
        <nav
          ref={ref}
          className="fixed bottom-0 right-0 z-[10000] h-full w-[180px] bg-main py-16 text-primary shadow-md drop-shadow-xl xs:w-[300px]"
        >
          {/* CLOSE SIDEBAR BUTTON*/}
          <div className="absolute right-2 top-3 w-[35px]">
            <Button
              variation="delete"
              ArialLabel="Close-icon"
              onClick={closeSidebar}
              Font="!rounded-full !h-[35px]"
            >
              <div className="flexCenter">
                <IoCloseSharp className="text-light-color" size={20} />
              </div>
            </Button>
          </div>

          {/* LINKS */}
          <div className="flex w-full flex-col">
            {links?.map((item, index) => (
              <div
                key={item.text}
                className={`${
                  index === 0 ? "border-t-2" : ""
                } flexCenter h-full w-full border-b-2 border-secondary text-center text-lg font-semibold transition-all hover:bg-secondary/40 hover:font-extrabold`}
              >
                <a
                  className={`${
                    activeLink === item.path
                      ? "border-r-8 border-orange bg-secondary/50 text-xl font-extrabold text-orange"
                      : ""
                  } flexCenter h-full w-full px-7 py-3`}
                  onClick={() => handleLinkClick(item.path)}
                  href={item.path}
                >
                  {item?.text}
                </a>
              </div>
            ))}
          </div>
        </nav>
      </div>
    )
  );
}
