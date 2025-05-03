import { motion } from "framer-motion";

const timelineVariants = {
  hidden: { height: 0 },
  visible: { height: "100%" },
};
export default function WebTimeLineLine() {
  return (
    <motion.div
      variants={timelineVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.3 }}
      transition={{ duration: 1, ease: "easeInOut" }}
      className="from-secondary to-primary absolute top-0 left-1/2 hidden w-[2px] -translate-x-1/2 bg-gradient-to-b md:block"
    />
  );
}
