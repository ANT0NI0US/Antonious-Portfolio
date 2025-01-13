import profile from "@/assets/antoniousNasrKamel.png";
import BannerDetails from "../components/BannerDetails";

export default function Banner() {
  return (
    <section
      id="home"
      className="flexCenter min-h-screen bg-main pb-[40px] pt-[100px]"
    >
      <div className="container flex flex-col-reverse items-center justify-between gap-4 lg:flex-row">
        {/* DETAILS */}
        <BannerDetails />

        {/* IMAGE SECTION */}
        <div className="flex w-full items-center justify-center lg:basis-3/5 lg:justify-end">
          <div
            className="before:max-w-[400px] lg:relative lg:z-0 lg:ml-20 lg:before:absolute lg:before:-left-12 lg:before:top-2 lg:before:z-[-1]
            lg:before:h-full lg:before:w-full lg:before:max-w-[450px] lg:before:rounded-full lg:before:border-2 2xl:before:max-w-[600px]"
          >
            <img
              className="w-full max-w-[400px] rounded-full transition duration-500 hover:grayscale hover:filter lg:max-w-[450px] 2xl:max-w-[600px]"
              src={profile}
              alt="profile"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
