import BannerDetails from "../components/BannerDetails";

export default function Banner() {
  return (
    <section
      id="home"
      className="flex h-screen items-center overflow-hidden bg-cover bg-center"
      style={{
        backgroundImage: `url("https://i.ibb.co/HqbZRFg/bannerBg.webp")`,
      }}
    >
      <div className="container pb-[40px] pt-[100px] md:pb-[40px]">
        {/* DETAILS */}
        <BannerDetails />
      </div>
    </section>
  );
}
