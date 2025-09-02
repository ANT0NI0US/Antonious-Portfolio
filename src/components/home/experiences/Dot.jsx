import { motion } from "framer-motion";

const dotVariants = {
  hidden: { scale: 0 },
  visible: { scale: 1 },
};
export default function Dot() {
  return (
    <motion.div
      variants={dotVariants}
      initial="hidden"
      whileInView="visible"
      transition={{ duration: 0.4, ease: "backOut" }}
      className="border-primary bg-light absolute top-5 left-2 z-10 flex h-6 w-6 items-center justify-center rounded-full border-4 md:right-auto md:left-1/2 md:-translate-x-1/2"
    >
      <div className="bg-primary h-3 w-3 rounded-full" />
    </motion.div>
  );
}
