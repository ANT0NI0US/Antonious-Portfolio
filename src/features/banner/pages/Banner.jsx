import BannerDetails from "../components/BannerDetails";

export default function Banner() {
  return (
    <section id="overview" className="flexCenter pt-5 lg:h-[calc(100vh-80px)]">
      <div className="container flex flex-col-reverse items-center justify-between gap-4 lg:flex-row">
        {/* DETAILS */}
        <BannerDetails />

        {/* IMAGE SECTION */}
        <div className="flex w-full items-center justify-center lg:basis-2/5 lg:justify-end">
          <img
            className="w-full max-w-[200px] rounded-full sm:max-w-[300px] lg:max-w-full"
            src="https://i.ibb.co/N2s9BNq/antonious-Nasr-Kamel.webp"
            alt="profile"
          />
        </div>
      </div>
    </section>
  );
}
