import bannerImg from "../../../assets/banner.svg";
import BannerDetails from "../components/BannerDetails";

export default function Banner() {
  return (
    <section className="overflow-hidden bg-main md:h-screen" id="home">
      <div className="mx-auto h-full w-[90%] pb-[40px] pt-[100px] md:w-5/6 md:pb-[40px]">
        <div className="flexBetween h-full flex-col gap-2 md:flex-row">
          {/* DETAILS */}
          <BannerDetails />
          {/*  IMAGE */}
          <div className="flexCenter w-full md:basis-[50%]">
            <img
              src={bannerImg}
              alt="Banner"
              className="h-auto max-w-full animate-banner object-contain object-center md:w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
