import AllTestimonials from "./AllTestimonials";
import TextHead from "@/ui/TextHead";

export default function Testimonials() {
  return (
    <section className="py-5 sm:py-10" id="testimonials">
      <div className="container">
        <TextHead text="Testimonials" />
        <AllTestimonials />
      </div>
    </section>
  );
}
