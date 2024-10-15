import logo from "@/assets/my-logo.png";

export default function Logo() {
  return (
    <a className="flexBetween gap-[3px] xs:gap-1" href="#home">
      <img
        className="max-h-full w-[70px] max-w-[70px] sm:w-[85px] sm:max-w-[85px]"
        src={logo}
        alt="Antonious-logo"
      />
    </a>
  );
}
