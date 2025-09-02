import { motion, AnimatePresence } from "framer-motion";
import { IoCloseSharp } from "react-icons/io5";
import { links } from "@/data/links";
import Button from "@/ui/Button";
import { useOutsideClick } from "@/hooks/useOutsideClick";
import DropdownMenuSmallScreen from "./DropdownMenuSmallScreen";

export default function SmallScreenLinks({
  showSidebar,
  closeSidebar,
  handleNavClick,
}) {
  const handleLinkClick = (path) => {
    handleNavClick(path);
    closeSidebar();
  };
  const ref = useOutsideClick(() => closeSidebar());

  return (
    <AnimatePresence>
      {showSidebar && (
        <nav className="md:hidden">
          {/* OVERLAY */}
          <div
            key="overlay"
            className="fixed inset-0 z-100 h-full w-full bg-black/60"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          />

          {/* SIDEBAR */}
          <motion.nav
            key="sidebar"
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.5 }}
            ref={ref}
            className="bg-main text-primary xs:w-[300px] fixed right-0 bottom-0 z-10000 h-full w-full py-16 shadow-md drop-shadow-xl"
          >
            {/* CLOSE SIDEBAR BUTTON*/}
            <div className="absolute top-3 right-2 w-[35px]">
              <Button
                variation="delete"
                AriaLabel="Close-icon"
                title="Close-icon"
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
              {links?.map(({ text, path, icon: Icon }, index) => (
                <div
                  key={text}
                  className={`${
                    index === 0 ? "border-t-2" : ""
                  } flexCenter border-secondary h-full w-full border-b-2 text-center text-lg font-semibold transition-all hover:font-extrabold`}
                >
                  <a
                    className="hover:text-primary text-light flex h-full w-full items-center gap-1.5 px-4 py-3 font-semibold transition-all hover:font-bold"
                    onClick={() => handleLinkClick(path)}
                    href={path}
                  >
                    <Icon />
                    <span>{text}</span>
                  </a>
                </div>
              ))}
              <DropdownMenuSmallScreen handleLinkClick={handleLinkClick} />
            </div>
          </motion.nav>
        </nav>
      )}
    </AnimatePresence>
  );
}
