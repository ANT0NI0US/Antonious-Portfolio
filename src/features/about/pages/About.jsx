import TextHead from "@/ui/TextHead";
import ExperiencesProjects from "../components/ExperiencesProjects";

export default function About() {
  return (
    <section className="lg-h-screen" id="about">
      <div className="container">
        <TextHead text="About" />

        <div className="flex flex-col items-center justify-between gap-4 lg:flex-row">
          <div className="flexCenter w-full lg:basis-2/5">
            <img
              className="lg:max-w-[400px]"
              src="https://i.ibb.co/cc52RJs/about.gif"
              alt="about"
              loading="lazy"
            />
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
        <ExperiencesProjects />
      </div>
    </section>
  );
}
