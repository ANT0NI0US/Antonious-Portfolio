export default function Logo({ loading = "eager" }) {
  return (
    <a href="#overview">
      <img
        className="w-max-w-36 max-h-full max-w-36 bg-contain bg-center sm:w-44 sm:max-w-44 lg:w-56 lg:max-w-56"
        src="https://i.ibb.co/wmVXZPp/antonious-Nasr-V2.png"
        alt="Antonious-logo"
        loading={loading}
      />
    </a>
  );
}
