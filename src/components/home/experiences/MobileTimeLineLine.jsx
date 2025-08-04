import { motion } from "framer-motion";

const timelineVariants = {
  hidden: { height: 0 },
  visible: { height: "100%" },
};

export default function MobileTimeLineLine() {
  return (
    <motion.div
      variants={timelineVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.3 }}
      transition={{ duration: 1, ease: "easeInOut" }}
      className="from-secondary to-primary absolute top-0 left-5 block w-[2px] bg-gradient-to-b md:hidden"
    />
  );
}
