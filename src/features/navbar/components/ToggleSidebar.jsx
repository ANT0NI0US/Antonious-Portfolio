import { GiHamburgerMenu } from "react-icons/gi";

export default function ToggleSidebar({ toggleSidebar }) {
  return (
    <div className="flexCenter md:hidden">
      <button aria-label="Toggle-menu" onClick={toggleSidebar}>
        <div className="bg-secondary cursor-pointer rounded-full p-2">
          <GiHamburgerMenu />
        </div>
      </button>
    </div>
  );
}
