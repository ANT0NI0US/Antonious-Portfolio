import { IoCloseSharp } from "react-icons/io5";
import { links } from "@/data/links";
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
    closeSidebar();
  };
  const ref = useOutsideClick(() => closeSidebar());

  return (
    showSidebar && (
      <div className="md:hidden">
        {/* OVERLAY */}
        <div className="fixed inset-0 z-100 h-full w-full bg-black/60" />

        {/* SIDEBAR */}
        <nav
          ref={ref}
          className="bg-main text-primary xs:w-[300px] fixed right-0 bottom-0 z-10000 h-full w-[180px] py-16 shadow-md drop-shadow-xl"
        >
          {/* CLOSE SIDEBAR BUTTON*/}
          <div className="absolute top-3 right-2 w-[35px]">
            <Button
              variation="delete"
              AriaLabel="Close-icon"
              onClick={closeSidebar}
              Font="rounded-full! h-[35px]!"
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
                } flexCenter border-secondary h-full w-full border-b-2 text-center text-lg font-semibold transition-all hover:font-extrabold`}
              >
                <a
                  className={`${
                    activeLink === item.path
                      ? "bg-secondary text-lg font-extrabold text-white"
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
