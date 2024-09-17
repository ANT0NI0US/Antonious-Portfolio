import BannerDetails from "../components/BannerDetails";
import gifBackground from "../../../assets/bannerBg.gif";

export default function Banner() {
  return (
    <section
      id="home"
      className="overflow-hidden bg-cover bg-center xs:h-screen"
      style={{
        backgroundImage: `url(${gifBackground})`,
      }}
    >
      <div className="mx-auto h-full w-[90%] pb-[40px] pt-[100px] md:w-5/6 md:pb-[40px]">
        {/* DETAILS */}
        <BannerDetails />
      </div>
    </section>
  );
}
