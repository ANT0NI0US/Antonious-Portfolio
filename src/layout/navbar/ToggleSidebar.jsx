import { MenuIcon } from "@/icons";

export default function ToggleSidebar({ toggleSidebar }) {
  return (
    <div className="flexCenter md:hidden">
      <button aria-label="Toggle-menu" onClick={toggleSidebar}>
        <div className="bg-secondary cursor-pointer rounded-md p-2">
          <MenuIcon />
        </div>
      </button>
    </div>
  );
}
