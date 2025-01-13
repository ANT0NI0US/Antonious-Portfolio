import about from "@/assets/about.gif";
import TextHead from "@/ui/TextHead";

export default function About() {
  return (
    <section
      className="lg-h-screen bg-secondary py-[40px] lg:py-[100px]"
      id="about"
    >
      <div className="container space-y-5 xl:space-y-8">
        <TextHead text="About" />

        <div className="flex flex-col items-center justify-between gap-2 lg:flex-row">
          <div className="flexCenter w-full lg:basis-2/5">
            <img className="lg:max-w-[400px]" src={about} alt="about" />
          </div>

          {/* PERSONAL INFORMATION */}
          <p className="w-full text-center text-xl leading-9 lg:basis-3/5 lg:text-start xl:text-2xl xl:leading-10">
            I am dedicated to crafting immersive and user-focused digital
            experiences that leave a lasting impact. With a keen eye for design
            and a passion for creating seamless functionality, I transform ideas
            into interactive, visually engaging realities. My approach combines
            creativity, precision, and a deep commitment to delivering
            exceptional results. I thrive in collaborative environments where
            innovation and attention to detail drive the creation of meaningful,
            user-friendly solutions.
          </p>
        </div>
      </div>
    </section>
  );
}
