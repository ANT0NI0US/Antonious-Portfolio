import { motion } from "framer-motion";

export default function SkillDetails({ skill }) {
  const { title, description, icon: Icon } = skill;
  return (
    <motion.div
      className="bg-secondary flex flex-col items-center justify-center gap-1.5 rounded-md p-4 text-center"
      initial={{ rotate: 180, opacity: 0, scale: 0.5 }}
      whileInView={{ rotate: 0, opacity: 1, scale: 1 }}
      transition={{
        duration: 0.6,
      }}
      style={{ transformStyle: "preserve-3d" }}
    >
      <Icon className="text-5xl" />
      <h3 className="text-primary text-lg font-semibold xl:text-xl">{title}</h3>
      <p>{description}</p>
    </motion.div>
  );
}
