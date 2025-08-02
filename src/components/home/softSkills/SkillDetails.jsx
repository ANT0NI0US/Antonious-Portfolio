import { motion } from "framer-motion";

export default function SkillDetails({ skill, index }) {
  const { title, description, icon: Icon } = skill;
  return (
    <motion.div
      className="bg-secondary flex flex-col items-center justify-center gap-1.5 rounded-md p-4 text-center"
      initial={{ rotateY: 90, opacity: 0 }}
      whileInView={{ rotateY: 0, opacity: 1 }}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
        ease: "easeOut",
      }}
      viewport={{ once: false, amount: 0.2 }}
      style={{ transformStyle: "preserve-3d" }}
    >
      <Icon className="text-5xl" />
      <h3 className="text-primary text-lg font-semibold xl:text-xl">{title}</h3>
      <p>{description}</p>
    </motion.div>
  );
}
