import { motion } from "framer-motion";
import SkillTitle from "./SkillTitle";
import SkillDescription from "./SkillDescription";

export default function SkillDetails({ skill, index }) {
  const { title, description } = skill;
  return (
    <motion.div
      key={index}
      className="border-gradient2 flex min-h-[230px] flex-col space-y-4 rounded-md border-[10px] border-double bg-main p-[15px] shadow-md shadow-orange/50 drop-shadow-2xl"
      variants={{
        hidden: { opacity: 0, x: -100 },
        visible: { opacity: 1, x: 0 },
      }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.1 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
    >
      {/* TITLE */}
      <SkillTitle title={title} />

      {/* DESCRIPTION */}
      <SkillDescription description={description} />
    </motion.div>
  );
}
