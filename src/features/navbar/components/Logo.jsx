import logo from "../../../assets/my-logo.png";

export default function Logo() {
  return (
    <a className="flexBetween xs:gap-1 gap-[3px]" href="#home">
      <img
        className="xs:w-[45px] xs:max-w-[45px] max-h-full w-[30px] max-w-[30px]"
        src={logo}
        alt="Antonious-logo"
      />
    </a>
  );
}
