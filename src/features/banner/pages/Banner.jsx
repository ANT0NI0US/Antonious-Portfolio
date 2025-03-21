import BannerDetails from "../components/BannerDetails";

export default function Banner() {
  return (
    <section
      id="home"
      className="flexCenter bg-main pb-[40px] pt-[100px] lg:h-screen"
    >
      <div className="container flex flex-col-reverse items-center justify-between gap-4 lg:flex-row">
        {/* DETAILS */}
        <BannerDetails />

        {/* IMAGE SECTION */}
        <div className="flex w-full items-center justify-center lg:basis-2/5 lg:justify-end">
          <div
            className="before:max-w-[200px] sm:before:max-w-[300px] lg:relative lg:z-0 lg:ml-20 lg:before:absolute lg:before:-left-12 lg:before:top-2
            lg:before:z-[-1] lg:before:h-full lg:before:w-full lg:before:max-w-full lg:before:rounded-full lg:before:border-2"
          >
            <img
              className="w-full max-w-[200px] rounded-full transition duration-500 hover:grayscale hover:filter sm:max-w-[300px] lg:max-w-full"
              src="https://i.ibb.co/N2s9BNq/antonious-Nasr-Kamel.webp"
              alt="profile"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
