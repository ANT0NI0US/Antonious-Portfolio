import Banner from "@/components/home/banner";
import Spinner from "@/ui/spinner";
import React, { Suspense } from "react";

const About = React.lazy(() => import("@/components/home/about"));
const Blogs = React.lazy(() => import("@/components/home/blogs"));
const Experiences = React.lazy(() => import("@/components/home/experiences"));
const ProjectIdea = React.lazy(() => import("@/components/home/projectIdea"));
const Projects = React.lazy(() => import("@/components/home/projects"));
const Qualifications = React.lazy(
  () => import("@/components/home/qualifications"),
);
const Services = React.lazy(() => import("@/components/home/services"));
const SoftSkills = React.lazy(() => import("@/components/home/softSkills"));
const TechnicalSkills = React.lazy(
  () => import("@/components/home/technicalSkills"),
);
const Testimonials = React.lazy(() => import("@/components/home/testimonials"));
const ContactUs = React.lazy(() => import("@/components/home/contact"));

export default function Home() {
  return (
    <>
      <Banner />
      <Suspense fallback={<Spinner />}>
        <About />
      </Suspense>
      <Suspense fallback={<Spinner />}>
        <Services />
      </Suspense>
      <Suspense fallback={<Spinner />}>
        <Projects />
      </Suspense>
      <Suspense fallback={<Spinner />}>
        <TechnicalSkills />
      </Suspense>
      <Suspense fallback={<Spinner />}>
        <SoftSkills />
      </Suspense>
      <Suspense fallback={<Spinner />}>
        <Testimonials />
      </Suspense>
      <Suspense fallback={<Spinner />}>
        <Experiences />
      </Suspense>
      <Suspense fallback={<Spinner />}>
        <Qualifications />
      </Suspense>
      <Suspense fallback={<Spinner />}>
        <Blogs />
      </Suspense>
      <Suspense fallback={<Spinner />}>
        <ProjectIdea />
      </Suspense>
      <Suspense fallback={<Spinner />}>
        <ContactUs />
      </Suspense>
    </>
  );
}
