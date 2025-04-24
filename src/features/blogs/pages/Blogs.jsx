import TextHead from "@/ui/TextHead";
import AllBlogs from "../components/AllBlogs";

export default function Blogs() {
  return (
    <section className="lg-h-screen" id="blogs">
      <div className="container">
        <TextHead text="Blogs" />

        <AllBlogs />
      </div>
    </section>
  );
}
