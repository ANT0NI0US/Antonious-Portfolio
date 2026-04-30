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
      className="border-primary bg-light md:flexCenter absolute z-10 hidden size-6 rounded-full border-4 md:top-5 md:right-auto md:left-1/2 md:-translate-x-1/2"
    >
      <div className="bg-primary size-3 rounded-full" />
    </motion.div>
  );
}
