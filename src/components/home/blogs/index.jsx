import TextHead from "@/ui/TextHead";
import AllBlogs from "./AllBlogs";

export default function Blogs() {
  return (
    <section className="py-5 sm:py-10" id="blogs">
      <div className="container">
        <TextHead text="Blogs" />

        <AllBlogs />
      </div>
    </section>
  );
}
