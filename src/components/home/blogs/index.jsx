import TextHead from "@/ui/TextHead";
import AllBlogs from "./AllBlogs";

export default function Blogs() {
  return (
    <section className="container py-5 sm:py-10" id="blogs">
      <TextHead text="Blogs" />

      <AllBlogs />
    </section>
  );
}
