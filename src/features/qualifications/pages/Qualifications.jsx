import { motion } from "framer-motion";
import TextHead from "@/ui/TextHead";
import Education from "../components/Education";
import Certificate from "../components/Certificate";

export default function Qualifications() {
  return (
    <section id="qualification" className="min-h-screen py-5 sm:py-10">
      <div className="container">
        <TextHead text="Qualifications" />
        <div className="flex w-full flex-col gap-8 lg:flex-row">
          <motion.div
            className="w-full"
            initial={{ opacity: 0, y: -100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.1 }}
          >
            <Education />
          </motion.div>

          <motion.div
            className="w-full"
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: false, amount: 0.1 }}
          >
            <Certificate />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
