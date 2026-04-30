import { useHandleNavClick } from "@/hooks/useHandleNavClick";

export default function Logo({ loading = "eager" }) {
  const handleNavClick = useHandleNavClick();

  return (
    <button
      className="cursor-pointer"
      aria-label="Go to top — Antonious Nasr home"
      onClick={() => handleNavClick("#overview")}
    >
      <img
        className="max-h-full max-w-36 bg-contain bg-center sm:w-44 sm:max-w-44 lg:w-56 lg:max-w-56"
        src="https://i.ibb.co/7dCjkpdd/Antonious-Nasr-Logo.webp"
        alt="Antonious-logo"
        loading={loading}
        decoding="async"
        width="224"
        height="56"
      />
    </button>
  );
}
