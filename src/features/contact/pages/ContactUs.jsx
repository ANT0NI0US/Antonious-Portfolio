import ContactForm from "../components/ContactForm";
import TextHead from "@/ui/TextHead";

export default function ContactUs() {
  return (
    <section
      id="contact"
      className="min-h-screen w-full bg-secondary py-[100px]"
    >
      <div className="mx-auto w-[90%] md:w-5/6 ">
        <TextHead text="Get In Touch" />
        <div className="flexCenter mt-5 flex-col-reverse gap-0 lg:flex-row lg:gap-5">
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
