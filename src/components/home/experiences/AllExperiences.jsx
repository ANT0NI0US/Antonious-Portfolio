import { motion } from "framer-motion";
import Dot from "./Dot";
import CertainExperienceCard from "./CertainExperienceCard";
import { experiences } from "@/data/experiences";

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

export default function AllExperiences() {
  return (
    <div className="flex w-full flex-col gap-16">
      {experiences.map((experience, idx) => (
        <motion.div
          key={experience.id}
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className={`relative flex w-full flex-col items-center md:flex-row md:items-start ${
            idx % 2 === 0 ? "md:justify-start" : "md:justify-end"
          }`}
        >
          {/* Dot */}
          <Dot />

          {/* CARD */}
          <CertainExperienceCard experience={experience} />
        </motion.div>
      ))}
    </div>
  );
}
