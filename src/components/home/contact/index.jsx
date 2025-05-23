import ContactForm from "./ContactForm";
import TextHead from "@/ui/TextHead";

export default function ContactUs() {
  return (
    <section id="contact" className="min-h-screen pt-20 pb-24">
      <div className="container">
        <TextHead text="Get In Touch" />
        <div className="flexCenter flex-col-reverse gap-0 lg:flex-row lg:gap-5">
          {/* CONTACT IMAGE */}
          <div className="lg:basis-[60%]">
            <img
              loading="lazy"
              src="https://i.ibb.co/yygczq7/Email-Marketing.webp"
              alt="Contact Us"
            />
          </div>

          {/* CONTACT FORM */}
          <div className="w-full lg:basis-[40%]">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
