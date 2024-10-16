import BannerDetails from "../components/BannerDetails";

export default function Banner() {
  return (
    <section
      id="home"
      className="overflow-hidden bg-cover bg-center xs:h-screen"
      style={{
        backgroundImage: `url("https://i.ibb.co/HqbZRFg/bannerBg.webp")`,
      }}
    >
      <div className="mx-auto h-full w-[90%] pb-[40px] pt-[100px] md:w-5/6 md:pb-[40px]">
        {/* DETAILS */}
        <BannerDetails />
      </div>
    </section>
  );
}
