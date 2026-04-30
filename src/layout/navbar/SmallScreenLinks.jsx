import { links } from "@/data/links";
import { useOutsideClick } from "@/hooks/useOutsideClick";
import { CloseIcon } from "@/icons";
import Button from "@/ui/Button";
import SocialLinks from "@/ui/SocialLinks";
import { AnimatePresence, motion } from "framer-motion";
import CreatedBy from "@/ui/CreatedBy";
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
          <motion.div
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
            className="bg-main text-primary xs:w-[300px] fixed right-0 bottom-0 z-10000 flex h-full w-full flex-col pt-20 pb-4 shadow-md drop-shadow-xl"
          >
            {/* CLOSE SIDEBAR BUTTON*/}
            <Button
              variation="delete"
              AriaLabel="Close-icon"
              onClick={closeSidebar}
              Font="absolute! top-[27px] right-[20px] w-[30px]! h-[30px]! p-2!"
            >
              <CloseIcon className="text-light" />
            </Button>

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

            <div className="border-secondary container mt-auto flex flex-col gap-4 border-t pt-4">
              <SocialLinks
                Style="justify-start"
                Size="size-5"
                className="border-light hover:bg-secondary hover:border-primary text-light border-2! p-1.5!"
              />
              <CreatedBy position="smallScreens" />
            </div>
          </motion.nav>
        </nav>
      )}
    </AnimatePresence>
  );
}
