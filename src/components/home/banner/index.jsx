import BannerDetails from "./BannerDetails";

export default function Banner() {
  return (
    <section id="overview" className="flexCenter pt-5 lg:h-[calc(100vh-80px)]">
      <div className="container flex flex-col-reverse items-center justify-between gap-4 lg:flex-row">
        {/* DETAILS */}
        <BannerDetails />

        {/* IMAGE SECTION */}
        <div className="flex w-full items-center justify-center lg:basis-2/5 lg:justify-end">
          <img
            className="w-full max-w-[200px] sm:max-w-[300px] lg:max-w-full"
            src="https://res.cloudinary.com/dnekgcumk/image/upload/v1747722633/Group_1_bfqujm.png"
            alt="profile"
          />
        </div>
      </div>
    </section>
  );
}
