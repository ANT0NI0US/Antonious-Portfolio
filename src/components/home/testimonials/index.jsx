import TextHead from "@/ui/TextHead";
import AllTestimonials from "./AllTestimonials";

export default function Testimonials() {
  return (
    <section className="container py-5 sm:py-10" id="testimonials">
      <TextHead text="Testimonials" />
      <AllTestimonials />
    </section>
  );
}
