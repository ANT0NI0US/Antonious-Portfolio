import { motion } from "framer-motion";

export default function Service({ title, icon: Icon, description }) {
  return (
    <motion.div
      className="bg-main shadow-secondary relative flex min-h-[300px] items-center justify-center gap-2 overflow-hidden rounded-md shadow-md sm:min-h-[280px]"
      initial={{ scale: 0, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{ duration: 0.5 }}
    >
      <div className="animate-rotate bg-primary absolute h-[200%] w-[100px]" />
      <div className="bg-main absolute inset-1 z-10 flex flex-col gap-2 rounded-md px-3 py-4 text-center text-white">
        <div className="mx-auto text-6xl text-white xl:text-7xl">
          <Icon />
        </div>

        <h2 className="text-primary text-lg font-bold xl:text-xl">{title}</h2>

        <p>{description}</p>
      </div>
    </motion.div>
  );
}
